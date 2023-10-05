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
import { ProductsDashboard } from "./pages/dashboard/productsDashboard";
import { SalesDashboard } from "./pages/dashboard/salesDashboard";
import { BalanceDashboard } from "./pages/dashboard/balanceDashboard";
import { EntranceDashboard } from "./pages/dashboard/entranceDashboard";
import { ExpensesDashboard } from "./pages/dashboard/expensesDashboard";


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
      },
      {
        path: '/dashboard/products',
        element: <Private> <ProductsDashboard/> </Private>
      },
      {
        path: '/dashboard/sales',
        element: <Private> <SalesDashboard/> </Private>
      },
      {
        path: '/dashboard/balance',
        element: <Private> <BalanceDashboard/> </Private>
      },
      {
        path: '/dashboard/entrance',
        element: <Private> <EntranceDashboard/> </Private>
      },
      {
        path: '/dashboard/expenses',
        element: <Private> <ExpensesDashboard/> </Private>
      }
    ]
  },
  {
    path: '/login',
    element: <Login/>
  }
])

export {router};