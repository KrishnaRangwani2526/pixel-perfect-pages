import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Admin} from '@/features/admin';
export const Route=createFileRoute('/admin_/audit-history')({head:()=>metadata('Moderation audit-history','Review marketplace audit-history on BringMe.'),component:Page});
function Page(){return <Admin kind="audit-history"/>;}
