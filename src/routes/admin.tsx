import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Admin} from '@/features/admin';
export const Route=createFileRoute('/admin')({head:()=>metadata('Admin','Manage your BringMe connections and marketplace activity.'),component:Page});
function Page(){return <Admin />;}
