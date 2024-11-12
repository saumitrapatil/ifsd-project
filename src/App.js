import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tracker from './components/Tracker.js';
import Home from './components/Home.js';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/app',
      element: <Tracker />
    },
    {
      path: '/team',
      element: <Team />
    },
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
