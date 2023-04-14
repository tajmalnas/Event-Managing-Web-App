import {RouterProvider,createBrowserRouter} from 'react-router-dom';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import EditEventPage from './pages/EditEventPage';
import Root from './pages/Roots';
import EventsRoot from './pages/EventsRoot';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
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
            element:<EventsPage/>
          },
          {
            path:':eventId',
            element:<EventDetailPage/>
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
