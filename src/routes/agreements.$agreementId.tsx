import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {AgreementView} from '@/features/agreements';
export const Route=createFileRoute('/agreements/$agreementId')({head:()=>metadata('Agreement','View your BringMe marketplace connection.'),component:Page});
function Page(){const {agreementId}=Route.useParams();return <AgreementView agreementId={agreementId} />;}
