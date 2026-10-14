import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {TripForm} from '@/features/listing-forms';
export const Route=createFileRoute('/trips/$tripId_/edit')({head:()=>metadata('Edit your trip','Update your journey and carrying preferences.'),component:Page});
function Page(){const {tripId}=Route.useParams();return <TripForm tripId={tripId} />;}
