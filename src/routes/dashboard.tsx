import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Account} from '@/features/account';
export const Route=createFileRoute('/dashboard')({head:()=>metadata('Dashboard','Manage your BringMe connections and marketplace activity.'),component:Page});
function Page(){return <Account kind="dashboard"/>;}
