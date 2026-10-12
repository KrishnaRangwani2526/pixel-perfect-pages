export const policies = { cancelPendingOffers: true, acceptedCancellationRequiresReason: true, disputedCancellationAdminOnly: true, autoCompleteOnSilence: false, phoneVerification: false, reviews: false } as const;
export const prohibitedItems = ['Weapons', 'Illegal substances', 'Prescription medicines', 'Live animals', 'Dangerous goods'];
export const isProhibited = (text: string) => /\b(gun|weapon|cocaine|explosive|prescription medicine|live animal)\b/i.test(text);
export const PUBLIC_REQUEST_FIELDS = ['id','title','description','origin','destination','requiredBy','category','status','image'] as const;
export const PUBLIC_TRIP_FIELDS = ['id','origin','destination','departure','arrival','categories','status'] as const;
export function publicFields<T, K extends keyof T>(value: T, fields: readonly K[]): Pick<T, K> { return Object.fromEntries(fields.map(key => [key, value[key]])) as Pick<T, K>; }
