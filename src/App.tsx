import { createBrowserRouter, Routes, Route } from "react-router-dom"
import { Home } from "./pages/home"
import { Layout } from "./components/Layout";
import { Sobre } from "./pages/sobre";
import { Services } from "./pages/services";
import { Consertos } from "./pages/consertos";
import { Products } from "./pages/products";
import { Contact } from "./pages/contato";
import { ProductDetail } from "./pages/products/detail";
import { Login } from "./pages/login";
import { Register } from "./pages/usersRegister";
import { Dashboard } from "./pages/dashboard";
import { Private } from "./routes/Private";


const router = createBrowserRouter([
  {
    element: <Layout/>,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/sobre',
        element: <Sobre/>
      },
      {
        path: '/services',
        element: <Services/>
      },
      {
        path: '/consertos',
        element: <Consertos/>
      },
      {
        path: '/products',
        element: <Products/>
      },
      {
        path: '/products/:id',
        element: <ProductDetail/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/cadastrar',
        element: <Private> <Register/> </Private>
      },
      {
        path: '/dashboard',
        element: <Private> <Dashboard/> </Private>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])

export {router};