import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Admin} from '@/features/admin';
export const Route=createFileRoute('/admin/listings')({head:()=>metadata('Moderation listings','Review marketplace listings on BringMe.'),component:Page});
function Page(){return <Admin kind="listings"/>;}
