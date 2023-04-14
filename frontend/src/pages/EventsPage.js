import { useLoaderData } from 'react-router-dom';
import EventList from '../components/EventsList';

function EventsPage() {

    const data=useLoaderData();
    const events = data.events;
  return (
    <EventList events={events}/>
  );
}

export default EventsPage;

export async function loader(){
    const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
      
    } 
    else {
      return response;
    }
};