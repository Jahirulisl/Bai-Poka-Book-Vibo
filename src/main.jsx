import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Create and render a browser router in main.jsx START

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Home from './Components/Home/Home';
import DashBoard from './Components/DashBoard/DashBoard';
import BookDetail from './Components/BookDetail/BookDetail';
import ListedBooks from './Components/ListedBooks/ListedBooks';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
       path:'books/:bookId',
       element:<BookDetail></BookDetail>,
       loader:()=>fetch('booksData.json') //do not load all the books for one book.

      },
      {
        path:'dashboard',
        element:<DashBoard></DashBoard>
      },

      {
        path:'/listedBooks',
        element: <ListedBooks></ListedBooks>,
         //worst way to 
        loader: () => fetch('booksData.json') //do not load all data for same
      }
    ]

  },
]);

// Create and render a browser router in main.jsx END

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
  </StrictMode>,
)

