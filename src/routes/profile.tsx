import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Profile} from '@/features/profile';
export const Route=createFileRoute('/profile')({head:()=>metadata('Profile','Manage your BringMe connections and marketplace activity.'),component:Page});
function Page(){return <Profile />;}
