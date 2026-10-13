import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Admin} from '@/features/admin';
export const Route=createFileRoute('/admin_/reports_/$reportId')({head:()=>metadata('Admin','View your BringMe marketplace connection.'),component:Page});
function Page(){const {reportId}=Route.useParams();return <Admin reportId={reportId} kind="reports"/>;}
