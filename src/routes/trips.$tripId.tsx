import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {TripDetail} from '@/features/details';
export const Route=createFileRoute('/trips/$tripId')({head:()=>metadata('Trip details','See a traveller’s route and compatible requests.'),component:Page});
function Page(){const {tripId}=Route.useParams();return <TripDetail tripId={tripId} />;}
