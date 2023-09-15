import { createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/home"
/*import { Admin } from "./pages/admin"
import { Login } from "./pages/login"
import { Networks } from "./pages/networks"
import { Private } from "./routes/Private"
import { ErrorPage } from "./pages/error"*/
import { Layout } from "./components/Layout";
import { Sobre } from "./pages/sobre";
import { Services } from "./pages/services";
import { Consertos } from "./pages/consertos";
import { Products } from "./pages/products";
import { Contact } from "./pages/contato";
import { ProductDetail } from "./pages/products/detail";


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
      }
    ]
  }
 /* {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/admin',
    element: <Private> <Admin/> </Private>
  },
  {
    path: '/admin/social',
    element: <Private> <Networks/> </Private>
  },
  {
    path: '*',
    element: <ErrorPage/>
  }*/
])

export {router};