import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Erorpage from './Pages/ErorPage';
import Home from './Pages/Home';
import Services from './Pages/Services';
import CaseStudies from './Pages/CaseStudies';

const appRouter = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    errorElement:<Erorpage/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/Services",
        element:<Services/>
      },
      {
        path:"/CaseStudies",
        element:<CaseStudies/>
      }
    ]
  }
])




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={appRouter}/>
  </React.StrictMode>
);

