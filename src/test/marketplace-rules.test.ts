import { describe, it, expect } from 'vitest';
import { makeSeed } from '@/data/seed';
import { matchRoute } from '@/lib/matching';
import { canTransition } from '@/lib/transitions';
import { policies, publicFields, PUBLIC_REQUEST_FIELDS, isProhibited } from '@/lib/policies';
import { acceptOneOffer, respondCompletion, api, ServiceError } from '@/services/marketplace';
import type { Agreement } from '@/types/marketplace';
const request={origin:'Singapore',destination:'Mumbai',requiredBy:'2026-12-20',weight:2};
const trip={origin:'Singapore',destination:'Mumbai',departure:'2026-12-10',arrival:'2026-12-12',capacity:3};
const agreement=():Agreement=>({id:'a',requestId:'r',offerId:'o',requesterId:'u1',travellerId:'u2',status:'Offer accepted',responses:[]});
describe('PRD matching rules',()=>{
 it('does not match a reversed route',()=>expect(matchRoute(request,{...trip,origin:'Mumbai',destination:'Singapore'},'2026-12-01').matches).toBe(false));
 it('matches a same-direction compatible route',()=>expect(matchRoute(request,trip,'2026-12-01').matches).toBe(true));
 it('rejects arrivals after the required-by date',()=>expect(matchRoute(request,{...trip,arrival:'2026-12-21'},'2026-12-01').matches).toBe(false));
 it('rejects departures before today',()=>expect(matchRoute(request,{...trip,departure:'2026-11-30'},'2026-12-01').matches).toBe(false));
 it('treats weight as a soft check, not a route rejection',()=>{const result=matchRoute(request,{...trip,capacity:1},'2026-12-01');expect(result.matches).toBe(true);expect(result.strength).toBe('Possible');});
});
describe('Offers and completion',()=>{
 it('accepts one offer and rejects the other pending offer',()=>{const seed=makeSeed();acceptOneOffer(seed,'o1','u1');expect(seed.offers.find(o=>o.id==='o1')?.status).toBe('Accepted');expect(seed.offers.find(o=>o.id==='o2')?.status).toBe('Rejected');});
 it('prevents double-click and a second concurrent acceptance',()=>{const seed=makeSeed();acceptOneOffer(seed,'o1','u1');expect(()=>acceptOneOffer(seed,'o1','u1')).toThrow(ServiceError);expect(()=>acceptOneOffer(seed,'o2','u1')).toThrow(ServiceError);expect(seed.agreements.filter(a=>a.requestId==='r1')).toHaveLength(1);});
 it('allows acceptance only by the requester',()=>expect(()=>acceptOneOffer(makeSeed(),'o1','u2')).toThrow(ServiceError));
 it('waits for the second person, never auto-completes',()=>{const a=agreement();respondCompletion(a,'u1','declare','Done');expect(a.status).toBe('Awaiting completion confirmation');expect(policies.autoCompleteOnSilence).toBe(false);});
 it('cannot confirm your own declaration',()=>{const a=agreement();respondCompletion(a,'u1','declare','Done');expect(()=>respondCompletion(a,'u1','confirm','')).toThrow(ServiceError);});
 it('becomes mutually completed only after the other person confirms',()=>{const a=agreement();respondCompletion(a,'u1','declare','Done');respondCompletion(a,'u2','confirm','Received');expect(a.status).toBe('Mutually completed');expect(a.responses).toHaveLength(2);});
 it('preserves both responses in a disputed completion',()=>{const a=agreement();respondCompletion(a,'u2','declare','Handed over');respondCompletion(a,'u1','dispute','Different item');expect(a.status).toBe('Disputed completion');expect(a.responses.map(r=>r.action)).toEqual(['declare','dispute']);});
 it('rejects nonparticipants',()=>expect(()=>respondCompletion(agreement(),'u5','declare','')).toThrow(ServiceError));
});
describe('Listing policies',()=>{
 it('does not allow user cancellation of disputed completion',()=>expect(canTransition('Disputed completion','cancel')).toBe(false));
 it('does not allow silent editing after acceptance',()=>expect(canTransition('Offer accepted','edit')).toBe(false));
 it('blocks prohibited items',()=>expect(isProhibited('Please bring a weapon')).toBe(true));
 it('exposes only the public request allowlist',()=>{const r=makeSeed().requests[0];if(!r)throw new Error('Missing seed');const result=publicFields(r,PUBLIC_REQUEST_FIELDS);expect(result).not.toHaveProperty('ownerId');expect(result).not.toHaveProperty('budget');expect(result).not.toHaveProperty('purchasing');expect(Object.keys(result)).toEqual([...PUBLIC_REQUEST_FIELDS]);});
 it('enforces signed-out access at the mock service boundary',async()=>{api.demo.reset();await expect(api.trips.save({origin:'London',destination:'Mumbai',departure:'2099-01-01',arrival:'2099-01-02',capacity:3,categories:[],constraints:'',status:'Published'})).rejects.toMatchObject({code:'AUTH'});});
});
