import type { DemoState } from '@/types/marketplace';
import headphones from '@/assets/headphones.jpg';
import sneakers from '@/assets/sneakers.jpg';
import matcha from '@/assets/matcha.jpg';
export const productImages = { headphones, sneakers, matcha };
const future = (days: number) => { const date = new Date(); date.setUTCDate(date.getUTCDate() + days); return date.toISOString().slice(0, 10); };
export function makeSeed(): DemoState {
  return {
    sessionId: null,
    users: [
      { id: 'u1', name: 'Priya Sharma', email: 'priya@example.com', city: 'Mumbai', bio: 'A little bit of the world, closer to home. Usually looking for books, skincare and good matcha.', emailConfirmed: true, role: 'user', color: 'rose' },
      { id: 'u2', name: 'Alex Morgan', email: 'alex@example.com', city: 'London', bio: 'Travelling between London and Mumbai. Happy to help with small items.', emailConfirmed: true, role: 'user', color: 'mint' },
      { id: 'u3', name: 'Rohan Mehta', email: 'rohan@example.com', city: 'Bengaluru', bio: 'Tech enthusiast and frequent traveller.', emailConfirmed: true, role: 'user', color: 'peach' },
      { id: 'u4', name: 'Sofia Chen', email: 'sofia@example.com', city: 'Singapore', bio: 'Always planning the next trip.', emailConfirmed: true, role: 'user', color: 'sky' },
      { id: 'u5', name: 'Daniel Lee', email: 'daniel@example.com', city: 'New York', bio: 'Coffee, cameras and new cities.', emailConfirmed: false, role: 'user', color: 'mint' },
      { id: 'admin', name: 'BringMe team', email: 'team@example.com', city: 'London', bio: 'Marketplace moderation.', emailConfirmed: true, role: 'admin', color: 'sky' },
    ],
    requests: [
      { id: 'r1', ownerId: 'u1', title: 'Sony WH-1000XM5 headphones', description: 'Looking for the silver headphones. New and sealed, please. Happy to purchase online for collection.', origin: 'London', destination: 'Mumbai', requiredBy: future(22), category: 'Electronics', status: 'Published', image: headphones, budget: '£249', weight: 0.5, purchasing: 'Either' },
      { id: 'r2', ownerId: 'u3', title: 'New Balance 550 · size UK 8', description: 'White and green colourway, UK size 8. Please keep the original box if space allows.', origin: 'New York', destination: 'Bengaluru', requiredBy: future(28), category: 'Fashion', status: 'Published', image: sneakers, budget: '$110', weight: 1.2, purchasing: 'Traveller may buy it for me' },
      { id: 'r3', ownerId: 'u1', title: 'Ceremonial matcha from Japan', description: 'A 40g tin of ceremonial-grade matcha. Any fresh, sealed tin from a local tea shop would be lovely.', origin: 'Tokyo', destination: 'Delhi', requiredBy: future(32), category: 'Food & drinks', status: 'Published', image: matcha, budget: '¥3,000', weight: 0.2, purchasing: 'Traveller may buy it for me' },
      { id: 'r4', ownerId: 'u4', title: 'Everyday wireless headphones', description: 'Cream wireless headphones for everyday use.', origin: 'Singapore', destination: 'Mumbai', requiredBy: future(25), category: 'Electronics', status: 'Published', image: headphones, weight: 0.5, purchasing: 'I buy it' },
      { id: 'r5', ownerId: 'u3', title: 'Green everyday sneakers', description: 'Looking for a pair of green sneakers.', origin: 'Mumbai', destination: 'Singapore', requiredBy: future(24), category: 'Fashion', status: 'Published', image: sneakers, weight: 1, purchasing: 'Either' },
      { id: 'r6', ownerId: 'u1', title: 'Japanese green tea', description: 'A sealed tin of green tea.', origin: 'Tokyo', destination: 'Mumbai', requiredBy: future(15), category: 'Food & drinks', status: 'Awaiting completion confirmation', image: matcha, weight: 0.2, purchasing: 'Either' },
      { id: 'r7', ownerId: 'u3', title: 'Headphones from London', description: 'Wireless headphones, new in box.', origin: 'London', destination: 'Bengaluru', requiredBy: future(8), category: 'Electronics', status: 'Disputed completion', image: headphones, weight: 0.5, purchasing: 'Either' },
      { id: 'r8', ownerId: 'u5', title: 'Classic sneakers', description: 'A pair of sneakers.', origin: 'New York', destination: 'London', requiredBy: future(-2), category: 'Fashion', status: 'Expired', image: sneakers, weight: 1, purchasing: 'Either' },
    ],
    trips: [
      { id: 't1', ownerId: 'u2', origin: 'London', destination: 'Mumbai', departure: future(8), arrival: future(9), capacity: 3, categories: ['Electronics','Fashion'], constraints: 'No liquids or fragile items', status: 'Published' },
      { id: 't2', ownerId: 'u4', origin: 'New York', destination: 'Bengaluru', departure: future(12), arrival: future(13), capacity: 2, categories: ['Fashion','Electronics'], constraints: 'Small items only', status: 'Published' },
      { id: 't3', ownerId: 'u2', origin: 'Tokyo', destination: 'Delhi', departure: future(16), arrival: future(17), capacity: 4, categories: ['Food & drinks','Beauty'], constraints: 'Sealed products only', status: 'Published' },
      { id: 't4', ownerId: 'u3', origin: 'Singapore', destination: 'Mumbai', departure: future(10), arrival: future(10), capacity: 2, categories: ['Electronics'], constraints: '', status: 'Published' },
      { id: 't5', ownerId: 'u5', origin: 'London', destination: 'Mumbai', departure: future(-9), arrival: future(-8), capacity: 2, categories: ['Fashion'], constraints: '', status: 'Expired' },
      { id: 't6', ownerId: 'u4', origin: 'Delhi', destination: 'Tokyo', departure: future(4), arrival: future(5), capacity: 2, categories: ['Beauty'], constraints: '', status: 'Cancelled' },
    ],
    offers: [
      { id: 'o1', requestId: 'r1', travellerId: 'u2', tripId: 't1', message: 'I’m flying to Mumbai next week and can bring these. We can meet in Bandra after I arrive.', purchasing: 'Requester buys', handover: 'In person', date: future(9), status: 'Pending', history: [] },
      { id: 'o2', requestId: 'r1', travellerId: 'u4', message: 'Happy to help. I have room for a small box.', purchasing: 'Traveller buys', handover: 'In person', date: future(14), status: 'Pending', history: [] },
      ...(['Accepted','Rejected','Withdrawn','Expired','Cancelled'] as const).map((status,i) => ({ id: `o${i+3}`, requestId: i === 0 ? 'r6' : 'r2', travellerId: 'u2', message: 'Happy to bring this along.', purchasing: 'Traveller buys', handover: 'In person', date: future(5), status, history: [] })),
      { id: 'o8', requestId: 'r7', travellerId: 'u4', message: 'I can bring the headphones.', purchasing: 'Traveller buys', handover: 'In person', date: future(2), status: 'Accepted', history: [] },
    ],
    agreements: [
      { id: 'a1', requestId: 'r6', offerId: 'o3', requesterId: 'u1', travellerId: 'u2', status: 'Awaiting completion confirmation', responses: [{ userId: 'u2', action: 'declare', note: 'Handed over the tea this morning.', at: new Date().toISOString() }] },
      { id: 'a2', requestId: 'r7', offerId: 'o8', requesterId: 'u3', travellerId: 'u4', status: 'Disputed completion', responses: [{ userId: 'u4', action: 'declare', note: 'Item handed over.', at: new Date().toISOString() }, { userId: 'u3', action: 'dispute', note: 'The item is a different model. Let’s resolve this in messages.', at: new Date().toISOString() }] },
    ],
    conversations: [{ id: 'c1', requestId: 'r1', participants: ['u1','u2'], messages: [{ id: 'm1', senderId: 'u2', text: 'Hi Priya! I’m travelling from London to Mumbai next week. Happy to bring the headphones along.', at: new Date().toISOString() }, { id: 'm2', senderId: 'u1', text: 'Hi Alex, that would be great! Would an in-person handover in Bandra work for you?', at: new Date().toISOString() }] }, { id: 'c2', requestId: 'r7', participants: ['u3','u4'], messages: [{ id: 'm3', senderId: 'u3', text: 'Can we check the model number together?', at: new Date().toISOString() }] }],
    notifications: [{ id: 'n1', userId: 'u1', title: 'Alex made an offer', text: 'An offer for your Sony headphones is ready to review.', read: false, at: new Date().toISOString() }, { id: 'n2', userId: 'u1', title: 'Confirm your exchange', text: 'Alex has marked Japanese green tea as completed.', read: false, at: new Date().toISOString() }],
    reports: [{ id: 'rep1', userId: 'u3', target: 'r7', reason: 'Item not as agreed', details: 'Different model received.', status: 'Open' }, { id: 'rep2', userId: 'u1', target: 'u5', reason: 'Spam', details: 'Repeated unrelated messages.', status: 'Open' }, { id: 'rep3', userId: 'u4', target: 'r8', reason: 'Misleading listing', details: 'Item information needs review.', status: 'Dismissed', rationale: 'Listing expired.' }], blocks: {}, audit: [],
  };
}
