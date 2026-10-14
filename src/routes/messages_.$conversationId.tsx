import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Messages} from '@/features/messages';
export const Route=createFileRoute('/messages_/$conversationId')({head:()=>metadata('Your conversation','Coordinate a BringMe offer or agreement with the other participant.'),component:Page});
function Page(){const {conversationId}=Route.useParams();return <Messages conversationId={conversationId} />;}
