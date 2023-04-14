import React from 'react'
import { Link } from 'react-router-dom'

const DUMMY = [
    {id:'e1',title:'some event'},
    {id:'e2',title:'other event'},
]

const EventsPage = () => {
  return (
    <>
        <h1>EventsPage</h1>
        {DUMMY.map((event)=>
            <li>
                <Link to={event.id}>{event.title}</Link>
            </li>
        )}
    </>
  )
}

export default EventsPage