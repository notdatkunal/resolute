import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import ErrorPage from './components/error-page'
import Home from './components'
import Login from './components/login'
import SearchCase from './components/case/search-case'
// import CaseHistory from './components/case-history'
import Dashboard from './components/dashboard'
import AdminDashboard from './components/Admin/dashboard'

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login></Login>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search-case',
    element: <SearchCase></SearchCase>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/case/:id',
    element: <Dashboard></Dashboard>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin/',
    element: <AdminDashboard></AdminDashboard>,
    errorElement: <ErrorPage />,
  }

])

export default App
