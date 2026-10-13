import {createFileRoute} from '@tanstack/react-router';
import {metadata} from '@/components/marketplace';
import {TripForm} from '@/features/listing-forms';
export const Route=createFileRoute('/create-trip')({head:()=>metadata('Create Trip','Manage your BringMe connections and marketplace activity.'),component:Page});
function Page(){return <TripForm />;}
