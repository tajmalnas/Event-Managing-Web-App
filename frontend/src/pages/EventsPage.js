import { useLoaderData,json } from 'react-router-dom';
import EventList from '../components/EventsList';

function EventsPage() {

    const data=useLoaderData();
    const events = data.events;
    if(data.isError){
        return<p>{data.message}</p>
    }
  return (
    <EventList events={events}/>
  );
}

export default EventsPage;

export async function loader(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //throw new Response(JSON.stringify({message:'Could not fetch Data'}),{status:500})
        return json(
            {message:'Could not fetch events.'},
            {status:500}
        )
    } 
    else {
      return response;
    }
};