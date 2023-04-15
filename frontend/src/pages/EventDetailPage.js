import React, { Suspense } from 'react'
import { json, useRouteLoaderData,redirect, defer, Await } from 'react-router-dom'
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';

const EventDetailPage = () => {

    const {event,events} = useRouteLoaderData('event-detail');

    return (
    <>
    <Suspense fallback={<p style={{textAlign:'center'}} >Loading...</p>}>
      <Await resolve={event}>
        {(loadedEvent)=><EventItem event={loadedEvent}/>}
      </Await>
    </Suspense>


    <Suspense fallback={<p style={{textAlign:'center'}} >Loading...</p>}>
      <Await resolve={events}>
        {(loadedEvents)=><EventsList events={loadedEvents}/>}
      </Await>
    </Suspense>
    </>
  )
}

export default EventDetailPage


async function loadEvent(id){
  const response = await fetch('http://localhost:8080/events/'+id);

  if(!response.ok){
    throw json({messge:'Could not fetch details for selected event'},
    {status:500}
    )
  }
  else{
    const resData = await response.json();
    return resData.event;  
  }
}


async function loadEvents(){
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


export async function eventsLoader({request,params}){
  
  const id = params.eventId;

  return defer({
    event:await loadEvent(id),
    events:loadEvents(),
  })


}export async function action({params,request}){
  const eventId = params.eventId
  const response = await fetch('http://localhost:8080/events/' + eventId,{
    method:request.method,
  });

  if(!response.ok){
    throw json({messge:'Could not fetch details for selected event'},{status:500}
    )
  }
  return redirect('/events')
}