import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import Header from './components/Header';

function App() {
  const router = createBrowserRouter([
    {
      path:'/', element:<Home/>,
      children:[
        {path:'/login', element:<Login/>},
        {path:'/signup', element:<Signup/>},
        {path:'/header', element:<Header/>},
        

      ]
    }
  ])
  return (
    <RouterProvider router={router}/>
  );
}

export default App;
