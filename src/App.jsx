import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { About, Cocktail, Error, HomeLayout, Landing, Newsletter,SinglePageError } from './pages';
import { loader as landingLoader } from './pages/Landing';
import {loader as singlepageloader} from './pages/Cocktail';
import {action as newsletterAction} from './pages/Newsletter';
import { QueryClient,QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions:{
    queries:{
      staleTime: 1000 * 60 * 5,
    }
  }
})
const router = createBrowserRouter([
    {
        path: '/',
        element: <HomeLayout />,
        errorElement: <Error/>,
        children: [
            {
                index: true,
                element: <Landing />,
                loader: landingLoader(queryClient),
                errorElement: <SinglePageError/>,
            },
            {
                path: '/cocktail/:id',
                element: <Cocktail />,
                loader: singlepageloader,
                errorElement: <SinglePageError/>
            },
            {
                path: '/newsletter',
                element: <Newsletter />,
                action: newsletterAction
            },
            {
                path: 'about',
                element: <About />,
                children:[
                  {
                    index: true,
                    element: <h3>our company</h3>
                },
                {
                  path: 'person',
                  element: <h3>our person</h3>
              },
                ]
            }
        ]
    }
]);
const App = () => {
    return (
      <QueryClientProvider client={queryClient}>
       <RouterProvider router={router} />;
      </QueryClientProvider>
    )
    
};
export default App;
