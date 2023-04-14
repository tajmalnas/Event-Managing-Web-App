import React from 'react'
import { Outlet } from 'react-router-dom'
import EventNavigation from '../components/EventsNavigation'
const EventsRoot = () => {
  return (
    <>
        <EventNavigation/>
        <Outlet/>
    </>
  )
}

export default EventsRoot