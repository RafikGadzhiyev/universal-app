import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router";

import router from "./router";

import './index.css'

const rootNode = document.getElementById('root')
const domTree = createRoot(rootNode!)

domTree
  .render(
    <StrictMode>
      <RouterProvider router={router}/>
    </StrictMode>,
  )
