import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {OfferForm} from '@/features/details';
export const Route=createFileRoute('/requests/$requestId_/offer')({head:()=>metadata('Make a traveller offer','Propose purchasing, dates and handover for a BringMe request.'),component:Page});
function Page(){const {requestId}=Route.useParams();return <OfferForm requestId={requestId} />;}
