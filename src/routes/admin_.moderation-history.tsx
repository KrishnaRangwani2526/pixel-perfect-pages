import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Admin} from '@/features/admin';
export const Route=createFileRoute('/admin/moderation-history')({head:()=>metadata('Moderation moderation-history','Review marketplace moderation-history on BringMe.'),component:Page});
function Page(){return <Admin kind="moderation-history"/>;}
