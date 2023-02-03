import './App.css';
import Home from './pages/Home';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from './components/Navbar';
import AddStudentForm from './components/AddStudentForm';
import ManageStudents from './pages/ManageStudents';
import SideNav from './components/SideNav';
import ViewStudentForm from './pages/ViewStudentForm';
import EditStudentForm from './pages/EditStudentForm';

const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <SideNav />
      <Outlet />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/addStudent",
        element: <AddStudentForm />
      },
      {
        path: "/manage",
        element: <ManageStudents />
      },
    ]
  },
  {
    path: "/view",
    element: <ViewStudentForm />
  },
  {
    path: "/edit",
    element: <EditStudentForm />
  }
])

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
