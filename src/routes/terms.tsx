import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Legal} from '@/features/information';
export const Route=createFileRoute('/terms')({head:()=>metadata('Terms','BringMe marketplace terms.'),component:Page});
function Page() {return <Legal kind="terms"/>;}
