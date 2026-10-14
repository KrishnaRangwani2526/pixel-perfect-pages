import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Auth} from '@/features/auth';
export const Route=createFileRoute('/login')({validateSearch:(s:Record<string,unknown>):{returnTo?:string;email?:string}=>({...(typeof s['returnTo']==='string'?{returnTo:s['returnTo']}:{}),...(typeof s['email']==='string'?{email:s['email']}:{})}),head:()=>metadata('Login','Access your BringMe demo account.'),component:Page});
function Page(){const s=Route.useSearch();return <Auth kind="login" returnTo={s['returnTo']||'/dashboard'} email={s['email']||''}/>;}
