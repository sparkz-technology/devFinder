import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import AppLayout from './ui/AppLayout'
import Error from './ui/Error'
import NotFound from './ui/NotFound'
export default function App() {
  const router =createBrowserRouter([
    { path: '/', element: <AppLayout/>,errorElement: <Error message="Something went wrong"/> },
    { path: '/:path(.*)', element: <NotFound/>,errorElement: <Error message="Something went wrong"/> },
  ])
  return (
    <RouterProvider router={router}/>
  )
}
