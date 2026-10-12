import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Legal} from '@/features/information';
export const Route=createFileRoute('/rules')({head:()=>metadata('Rules','BringMe marketplace rules.'),component:Page});
function Page() {return <Legal kind="rules"/>;}
