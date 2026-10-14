import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {AgreementView} from '@/features/agreements';
export const Route=createFileRoute('/completion/$agreementId')({head:()=>metadata('Exchange confirmation','Confirm or dispute completion and view both participants’ responses.'),component:Page});
function Page(){const {agreementId}=Route.useParams();return <AgreementView agreementId={agreementId} completion/>;}
