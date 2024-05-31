import { Navigate, createBrowserRouter } from 'react-router-dom'
import './App.css'
import ErrorPage from './components/error-page'
import Home from './components'
import Login from './components/login'
import SearchCase from './components/case/search-case'
// import CaseHistory from './components/case-history'
import Dashboard from './components/dashboard'
import AdminDashboard from './components/Admin/dashboard'
import { ToastContainer } from 'react-toastify'
import AboutUs from './components/about'
import Faq from './components/faq'
import { useSelector } from 'react-redux'
import UnauthorizedPage from './components/unauthorized'
import ARB from './components/arb'
import Medi from './components/medi'
import Conciliation from './components/conciliation'

const App = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/faq',
    element: <Faq></Faq>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/about',
    element: <AboutUs></AboutUs>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/arb',
    element: <ARB></ARB>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/mediation',
    element: <Medi></Medi>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/conciliation',
    element: <Conciliation></Conciliation>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/login',
    element: <Login></Login>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/search-case',
    element: <PrivateRoute>
      <SearchCase />
    </PrivateRoute>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/unauthorized',
    element: <UnauthorizedPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/case/:id',
    element: <PrivateRoute>
      <Dashboard />
    </PrivateRoute>,
    errorElement: <ErrorPage />,
  },
  {
    path: '/admin',
    element: <AdminPrivateRoute>
      <AdminDashboard />
    </AdminPrivateRoute>,
    errorElement: <ErrorPage />,
  },
]);

// Private Route component for authenticated users
function PrivateRoute({ children }) {
  debugger;
  // const { isLoggedIn } = useAuth(); // Assuming isLoggedIn state from AuthContext
  const isLoggedIn = useSelector((state)=> state.user.user.isLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

// Admin Private Route component for authorized admins (optional)
function AdminPrivateRoute({ children }) {
  debugger;
  // const { isAdmin } = useAuth(); // Assuming isAdmin state from AuthContext (optional)
  const isLoggedIn  = useSelector((state)=> state.user.user.isLoggedIn);
  const isAdmin = useSelector((state) => state.user.user.role);

  if (!isLoggedIn && isAdmin != "admin") {
    return <Navigate to="/unauthorized" replace />; // Redirect to unauthorized page
  } else if(!isLoggedIn){
    return <Navigate to="/login" replace />;
  }

  return <PrivateRoute>{children}</PrivateRoute>; // Nested PrivateRoute for combined protection
}

export default App
