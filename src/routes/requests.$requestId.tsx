import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {RequestDetail} from '@/features/details';
export const Route=createFileRoute('/requests/$requestId')({head:()=>metadata('Request details','See the item, route and deadline, then connect with the requester.'),component:Page});
function Page(){const {requestId}=Route.useParams();return <RequestDetail requestId={requestId} />;}
