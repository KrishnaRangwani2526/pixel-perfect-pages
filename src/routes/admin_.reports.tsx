import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Admin} from '@/features/admin';
export const Route=createFileRoute('/admin_/reports')({head:()=>metadata('Moderation reports','Review marketplace reports on BringMe.'),component:Page});
function Page(){return <Admin kind="reports"/>;}
