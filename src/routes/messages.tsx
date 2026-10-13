import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Messages} from '@/features/messages';
export const Route=createFileRoute('/messages')({head:()=>metadata('Messages','Manage your BringMe connections and marketplace activity.'),component:Page});
function Page(){return <Messages />;}
