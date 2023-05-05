import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from './Components/Home/Home';
import Statistics from './Components/Statistics/Statistics';
import JobDetails from './Components/JobDetails/JobDetails';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs';
import ErrorPage from './Components/ErrorPage';
import Blog from './Components/Blog'


const router = createBrowserRouter([
  {
    path:"/",
    element:<App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
        loader: ()=>fetch('features.json')
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/:id",
        element:<JobDetails></JobDetails>,
        loader:() => fetch(`/features.json`)
      },
      {
        path:"/applied",
        element:<AppliedJobs></AppliedJobs>
      },
      {
        path:"/blog",
        element:<Blog></Blog>
      }
    ]
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
