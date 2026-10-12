import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Explore} from '@/features/explore';
export const Route=createFileRoute('/explore/requests')({head:()=>metadata('Explore requests','Browse published requests by item, city, route and date.'),component:Page});
function Page() {return <Explore kind="requests"/>;}
