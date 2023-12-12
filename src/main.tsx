import React from 'react'
import ReactDOM from 'react-dom/client'
import { ApolloProvider } from "@apollo/client"
import {client} from '../apolloClient.ts'
import './index.css'
import { MantineProvider } from '@mantine/core';
// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
import '@mantine/core/styles.css';
import Home from './Pages/Home.tsx';
import { RouterProvider, createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      {
        path: "/chatrooms/:id",
      },
    ],
  },
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
  <MantineProvider>
    <ApolloProvider client={client}>
      <RouterProvider router={router}/>

    </ApolloProvider>
  </MantineProvider>
  </React.StrictMode>,
)
