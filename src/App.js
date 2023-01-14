import React from 'react';
import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './pages/home';
import CarDetails from './pages/carDetails';
import CarBook from './pages/carBook';
function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "carDetails",
      element: <CarDetails />
    },
    {
      path: "carBook",
      element: <CarBook />
    }
  ]);
  return (
    <div className="App">
      <React.StrictMode>
        <RouterProvider router={router} />
      </React.StrictMode>
    </div>
  );
}

export default App;
