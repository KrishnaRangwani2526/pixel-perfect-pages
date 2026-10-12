import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Legal} from '@/features/information';
export const Route=createFileRoute('/prohibited-items')({head:()=>metadata('Prohibited Items','BringMe marketplace prohibited items.'),component:Page});
function Page() {return <Legal kind="prohibited-items"/>;}
