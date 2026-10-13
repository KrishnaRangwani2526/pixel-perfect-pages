import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Profile} from '@/features/profile';
export const Route=createFileRoute('/blocked-users')({head:()=>metadata('Blocked Users','Manage your BringMe connections and marketplace activity.'),component:Page});
function Page(){return <Profile blocked/>;}
