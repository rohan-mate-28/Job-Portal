import { useState } from 'react'
import Navbar from './components/shared/Navbar'
 import { RouterProvider } from 'react-router-dom'
import './App.css'
import { createBrowserRouter } from 'react-router-dom'
import Login from './components/auth/Login'
import Signup from './components/auth/Signup'
import Home from './components/Home'
import Jobs from './components/Jobs'
import Browser from './components/Browser'
import Profile from './components/Profile'
import JobDescriptionId from './components/JobDescriptionId'
const appRouter=createBrowserRouter([
  {
    path:'/',
    element:<Home/>
  },
  {
    path:'/login',
    element:<Login/>
  },
  {
    path:'/signup',
    element:<Signup/>
  },
  {
    path:'/jobs',
    element:<Jobs/>
  },
  {
    path:'/description/:id',
    element:<JobDescriptionId/>
  },
  {
    path:'/browser',
    element:<Browser/>
  },
  {
    path:'/profile',
    element:<Profile/>
  }
])
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
       
      <RouterProvider router={appRouter}/> 
    </div>
    </>
  )
}

export default App
