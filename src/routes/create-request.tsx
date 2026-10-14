import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {RequestForm} from '@/features/listing-forms';
export const Route=createFileRoute('/create-request')({validateSearch:(s:Record<string,unknown>):{text?:string}=>typeof s['text']==='string'?{text:s['text']}:{},head:()=>metadata('Create a request','Tell BringMe what you need from another country.'),component:Page});
function Page(){const {text}=Route.useSearch();return <RequestForm text={text||''}/>;}
