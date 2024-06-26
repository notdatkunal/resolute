import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './store.js'
import { ToastContainer } from 'react-toastify'



const storePersistor = persistor;

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={storePersistor}>
        <RouterProvider router={App}>
        </RouterProvider>
      </PersistGate>
    </Provider>
    <ToastContainer></ToastContainer>
  </React.StrictMode>,
)
