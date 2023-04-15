import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, { loader } from './pages/EventsPage';
import EventDetailPage ,{eventsLoader,action as deleteEventAction} from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Roots';
import EventsRoot from './pages/EventsRoot';
import ErrorPage from './pages/ErrorPage';
import NewEventPage ,{action as newEventAction} from './pages/NewEventPage'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<ErrorPage/> ,
    children:[
      {
        index:true,
        element:<HomePage/>
      },
      {
        path:'events',
        element:<EventsRoot/>,
        children:[
          {
            index:true,
            element:<EventsPage/>,
            loader:loader,
          },
          {
            path:':eventId',
            id:'event-detail',
            loader:eventsLoader,
            children:[
              {
                index:true,
                element:<EventDetailPage/>,
                action:deleteEventAction,
                
              },
              {
                path:'edit',
                element:<EditEventPage/>
              }
            ],
          },
          {
            path:'new',
            element:<NewEventPage/>,
            action:newEventAction
          },
        ]
      },
      
    ]
  }
  
])

const App=()=> {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
