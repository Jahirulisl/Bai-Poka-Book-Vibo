import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

// Create and render a browser router in main.jsx START

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
  },
]);

// Create and render a browser router in main.jsx END

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <RouterProvider router={router} />
  </StrictMode>,
)
