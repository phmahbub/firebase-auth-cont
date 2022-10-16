import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Root from './components/Root';
import Secrete from './components/Secrete';
import PrivateRoute from './components/PrivateRoute';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Root/>,
      children:[
        {path:'/login', element:<Login/>},
        {path:'/signup', element:<Signup/>},
        {path:'/home', element:<Home/>},
        {path:'/', element:<Home/>},
        {path:'/secrete', element:<PrivateRoute><Secrete/></PrivateRoute>},
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
