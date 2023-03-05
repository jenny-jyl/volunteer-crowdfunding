import React from 'react';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import "./App.css";
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProjectHomePage from './pages/ProjectHomePage';
import CreateProject from './pages/CreateProject';
import PledgeProject from './pages/PledgeProject';
import EditProject from './pages/EditProject';


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
        path: 'projects/',
        element: <ProjectHomePage />,
      },
      {
        path: '/projects/:id',
        element: <ProjectPage />,
      },
      {
        path: '/login/',
        element: <LoginPage />,
      },
      {
        path: '/signUp/',
        element: <SignUpPage />,
      },
      {
        path: '/create/',
        element: <CreateProject />,
      },
      {
        path: '/pledge/',
        element: <PledgeProject />,
      },
      {
        path: '/edit/',
        element: <EditProject />,
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
