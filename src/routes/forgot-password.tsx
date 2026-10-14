import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {Auth} from '@/features/auth';
export const Route=createFileRoute('/forgot-password')({validateSearch:(s:Record<string,unknown>):{returnTo?:string;email?:string}=>({...(typeof s['returnTo']==='string'?{returnTo:s['returnTo']}:{}),...(typeof s['email']==='string'?{email:s['email']}:{})}),head:()=>metadata('Forgot Password','Access your BringMe demo account.'),component:Page});
function Page(){const s=Route.useSearch();return <Auth kind="forgot-password" returnTo={s['returnTo']||'/dashboard'} email={s['email']||''}/>;}
