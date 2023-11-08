import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Register from '../Pages/Register'

export const mainRouter = createBrowserRouter([{
    path: "/",
    element: <Register/>
}])