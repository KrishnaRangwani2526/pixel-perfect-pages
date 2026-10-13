import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Profile} from '@/features/profile';
export const Route=createFileRoute('/users/$userId')({head:()=>metadata('Profile','View your BringMe marketplace connection.'),component:Page});
function Page(){const {userId}=Route.useParams();return <Profile userId={userId} />;}
