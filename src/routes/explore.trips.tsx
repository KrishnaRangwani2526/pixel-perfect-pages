import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Explore} from '@/features/explore';
export const Route=createFileRoute('/explore/trips')({head:()=>metadata('Explore trips','Find published trips and connect with travellers going your way.'),component:Page});
function Page() {return <Explore kind="trips"/>;}
