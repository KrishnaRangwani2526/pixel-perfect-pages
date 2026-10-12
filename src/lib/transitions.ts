import type { ListingStatus } from '@/types/marketplace';
export const transitions: Record<ListingStatus, readonly string[]> = {
  Draft: ['edit', 'publish', 'cancel'], Published: ['edit', 'offer', 'accept', 'cancel'], 'Offer accepted': ['propose-change', 'declare', 'cancel'], 'In progress': ['declare', 'cancel'], 'Awaiting completion confirmation': ['confirm', 'dispute', 'remind', 'cancel'], 'Mutually completed': [], 'Disputed completion': ['admin-close'], Cancelled: [], Expired: [], Restricted: ['admin-restore'],
};
export const canTransition = (status: ListingStatus, action: string) => transitions[status].includes(action);
