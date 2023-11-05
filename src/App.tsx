import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import Store from './Store'
import { Provider } from 'react-redux'

import AppLayout from './ui/AppLayout'
import Error from './ui/Error'
import NotFound from './ui/NotFound'
import Profile from './pages/Profile'
import Container from './pages/Container'
import About from './pages/About'
export default function App() {
  const router =createBrowserRouter([
    { path: '/', element: <AppLayout/>,errorElement: <Error message="Something went wrong"/> ,children: [
      { path: '/', element: <Container/>,errorElement: <Error message="Something went wrong"/> },
      { path: '/:id', element: <Profile/>,errorElement: <Error message="Something went wrong"/> },
      { path: '/about', element: <About/>,errorElement: <Error message="Something went wrong"/>,},
      { path: '*', element: <NotFound/>,errorElement: <Error message="Something went wrong"/>}
    ] },
  ])
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 1000 * 60 * 5,
        refetchOnWindowFocus: false,
      },
    },
  })
  
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={Store}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}/>
    </Provider>
    </QueryClientProvider>
  )
}
