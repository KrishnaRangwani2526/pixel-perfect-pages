import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Legal} from '@/features/information';
export const Route=createFileRoute('/privacy')({head:()=>metadata('Privacy','BringMe marketplace privacy.'),component:Page});
function Page() {return <Legal kind="privacy"/>;}
