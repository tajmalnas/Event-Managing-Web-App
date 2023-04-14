import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage, { loader } from './pages/EventsPage';
import EventDetailPage ,{eventsLoader} from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Roots';
import EventsRoot from './pages/EventsRoot';
import ErrorPage from './pages/ErrorPage';

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
            element:<EventDetailPage/>,
            loader:eventsLoader
          },
          {
            path:'new',
            element:<EventsPage/>
          },
          {
            path:':eventId/edit',
            element:<EditEventPage/>
          }
        ]
      },
      
    ]
  }
  
])

const App=()=> {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
