import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {HowItWorks} from '@/features/information';
export const Route=createFileRoute('/how-it-works')({head:()=>metadata('How BringMe works','Learn how requests, traveller offers and two-party exchanges work.'),component:Page});
function Page() {return <HowItWorks />;}
