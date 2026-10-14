import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {AgreementView} from '@/features/agreements';
export const Route=createFileRoute('/agreements/$agreementId')({head:()=>metadata('Your agreement','Review your agreed item, purchasing and handover details.'),component:Page});
function Page(){const {agreementId}=Route.useParams();return <AgreementView agreementId={agreementId} />;}
