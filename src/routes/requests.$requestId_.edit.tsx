import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {RequestForm} from '@/features/listing-forms';
export const Route=createFileRoute('/requests/$requestId_/edit')({head:()=>metadata('Edit your request','Review and update your BringMe item request.'),component:Page});
function Page(){const {requestId}=Route.useParams();return <RequestForm requestId={requestId} />;}
