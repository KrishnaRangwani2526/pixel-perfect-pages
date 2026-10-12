import type { ItemRequest, Trip } from '@/types/marketplace';
/** A trip matches the same-direction city route if it departs today or later and arrives on or before the request deadline. Capacity is a soft check. */
export function matchRoute(request: Pick<ItemRequest, 'origin' | 'destination' | 'requiredBy' | 'weight'>, trip: Pick<Trip, 'origin' | 'destination' | 'departure' | 'arrival' | 'capacity'>, today = new Date().toISOString().slice(0, 10)) {
  const route = request.origin.toLowerCase() === trip.origin.toLowerCase() && request.destination.toLowerCase() === trip.destination.toLowerCase();
  const dates = trip.departure >= today && trip.arrival <= request.requiredBy;
  const weight = trip.capacity >= request.weight;
  return { matches: route && dates, route, dates, weight, strength: weight ? 'Strong' : 'Possible' };
}
