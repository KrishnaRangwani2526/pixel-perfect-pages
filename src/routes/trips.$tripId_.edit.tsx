import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {TripForm} from '@/features/listing-forms';
export const Route=createFileRoute('/trips/$tripId_/edit')({head:()=>metadata('TripForm','View your BringMe marketplace connection.'),component:Page});
function Page(){const {tripId}=Route.useParams();return <TripForm tripId={tripId} />;}
