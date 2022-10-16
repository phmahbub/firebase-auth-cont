import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';
import Root from './components/Root';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Root/>,
      children:[
        {path:'/login', element:<Login/>},
        {path:'/signup', element:<Signup/>},
        {path:'/home', element:<Home/>},
        {path:'/', element:<Home/>},
      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
