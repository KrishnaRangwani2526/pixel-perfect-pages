import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Profile} from '@/features/profile';
export const Route=createFileRoute('/users/$userId')({head:()=>metadata('Traveller profile','View a BringMe member’s profile and email confirmation.'),component:Page});
function Page(){const {userId}=Route.useParams();return <Profile userId={userId} />;}
