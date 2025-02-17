import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Categories from "./components/Categories/Categories";
import Brands from "./components/Brands/Brands";
import Products from "./components/Products/Products";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";
import NotFound from "./components/NotFound/NotFound";
import Home from "./components/Home/Home";
import { useContext, useEffect } from "react";
import { tokenContext } from "./context/tokenContext";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import AuthView from "./components/AuthView/AuthView";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import BrandDetails from "./components/BrandsDetails/BrandsDetails";
import CategoriesDetails from "./components/CategoriesDetails/CategoriesDetails";
import CheackOut from "./components/CheackOut/CheackOut";
import ResetCode from "./components/ResetCode/ResetCode";
import ResetPage from "./components/ResetPage/ResetPage";
import ForgetPassword from "./components/ForgetPassword/ForgetPassword";

function App() {
  let { setToken } = useContext(tokenContext);
  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"));
    }
  }, []);
  const routes = createBrowserRouter([
    {
      path: "",
      element: <Layout />,
      children: [
        {
          index: true,
          element: (
            <ProtectedRoutes>
              <Home />
            </ProtectedRoutes>
          ),
        },
        {
          path: "categories",
          element: (
            <ProtectedRoutes>
              <Categories />
            </ProtectedRoutes>
          ),
        },
        { path: "brands", element: <Brands /> },
        {
          path: "products",
          element: (
            <ProtectedRoutes>
              <Products />
            </ProtectedRoutes>
          ),
        },
        {
          path: "login",
          element: (
            <AuthView>
              <Login />
            </AuthView>
          ),
        },
        {
          path: "register",
          element: (
            <AuthView>
              <Register />{" "}
            </AuthView>
          ),
        },
        {
          path: "cart",
          element: (
            <ProtectedRoutes>
              <Cart />
            </ProtectedRoutes>
          ),
        },
        {
          path: "productDetails/:id/:categoryId",
          element: (
            <ProtectedRoutes>
              <ProductDetails />
            </ProtectedRoutes>
          ),
        },
        {
          path: "BrandDetails/:id/",
          element: (
            <ProtectedRoutes>
              <BrandDetails />
            </ProtectedRoutes>
          ),
        },
        {
          path: "CategoriesDetails/:id/",
          element: (
            <ProtectedRoutes>
              {" "}
              <CategoriesDetails />{" "}
            </ProtectedRoutes>
          ),
        },
        {
          path: "checkout",
          element: (
            <ProtectedRoutes>
              {" "}
              <CheackOut />{" "}
            </ProtectedRoutes>
          ),
        },
        { path: "reset", element: <ResetCode /> },
        { path: "resetPage", element: <ResetPage /> },
        { path: "forget", element: <ForgetPassword /> },

        { path: "*", element: <NotFound /> },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={routes}></RouterProvider>
    </>
  );
}

export default App;
