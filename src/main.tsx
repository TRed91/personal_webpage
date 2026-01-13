import { createRoot } from 'react-dom/client'
import './index.css'
import routes from './routes'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {StrictMode} from "react";

const router = createBrowserRouter(routes);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>,
)
