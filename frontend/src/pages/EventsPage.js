import { useLoaderData,json, defer, Await } from 'react-router-dom';
import EventList from '../components/EventsList';
import { Suspense } from 'react';

function EventsPage() {

    const {events}=useLoaderData();
    
    return(
      <Suspense fallback ={<p style={{textAlign:'center'}} >Loading...</p>}>
        <Await resolve = {events}>
          {(loadedEvents)=><EventList events = {loadedEvents} />}
        </Await>
      </Suspense>
    );
}

export default EventsPage;

async function loadEvent(){
  const response = await fetch('http://localhost:8080/events');

    if (!response.ok) {
        //throw new Response(JSON.stringify({message:'Could not fetch Data'}),{status:500})
        return json(
            {message:'Could not fetch events.'},
            {status:500}
        )
    } 
    else {
       const resData = await response.json();
       return resData.events;
    }
}

export  function loader(){
    return defer({
      events:loadEvent(),
      
    })
};