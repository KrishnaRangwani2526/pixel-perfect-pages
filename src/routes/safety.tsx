import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Safety} from '@/features/information';
export const Route=createFileRoute('/safety')({head:()=>metadata('Trust and safety','Check marketplace safety, confirmation badges and travel responsibilities.'),component:Page});
function Page() {return <Safety />;}
