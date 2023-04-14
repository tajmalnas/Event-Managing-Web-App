import React from 'react'
import { json, useLoaderData } from 'react-router-dom'
import EventItem from '../components/EventItem';

const EventDetailPage = () => {

    const data = useLoaderData();

    return (
    <>
    <EventItem event={data.event}/>
    </>
  )
}

export default EventDetailPage

export async function eventsLoader({request,params}){
  
  const id = params.eventId;
  
  const response = await fetch('http://localhost:8080/events/'+id);

  if(!response.ok){
    throw json({messge:'Could not fetch details for selected event'},
    {status:500}
    )
  }
  else{
    return response;
  }

}