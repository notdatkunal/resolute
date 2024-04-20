import { createBrowserRouter } from 'react-router-dom'
import './App.css'
import ErrorPage from './components/error-page'
import Home from './components'
import Login from './components/login'
import SearchCase from './components/search-case'

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
  }

])

export default App
