import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Admin} from '@/features/admin';
export const Route=createFileRoute('/admin_/users')({head:()=>metadata('Moderation users','Review marketplace users on BringMe.'),component:Page});
function Page(){return <Admin kind="users"/>;}
