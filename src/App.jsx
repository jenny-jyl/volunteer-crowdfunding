import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import "./App.css";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProjectHomePage from './pages/ProjectHomePage';


const HeaderLayout = () => {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  )
}

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: 'project/',
        element: <ProjectHomePage />,
      },
      // {
      //   path: '/projects/:id',
      //   element: <ProjectPage />,
      // },
      {
        path: '/login/',
        element: <LoginPage />,
      },
      {
        path: '/signUp/',
        element: <SignUpPage />,
      }
    ]
  }

])

function App() {
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App
