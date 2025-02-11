import { createBrowserRouter } from "react-router-dom";
import { Root, Home, Men, Women, Kids, AddToCart, AuthRoot, Login, SingleProduct } from "../pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        element: <Home />,
        index: true,
      },
      {
        path: "Men",
        element: <Men />,
      },
      {
        path: "Women",
        element: <Women />,
      },
      {
        path: "Kids",
        element: <Kids />,
      },
      {
        path: "AddToCart",
        element: <AddToCart />,
      },
      {
        path: "/SingleProduct/:id",
        element: <SingleProduct />,
      },
      {
        path: "*",
        element: <p>404 Error- Nothing here...</p>,
      },
    ],
  },
  {
    path: "login",
    element: <AuthRoot />,
    children: [
      {
        element: <Login/>,
        index: true,
      },
      {
        path: "*",
        element: <p>404 Error- Nothing here...</p>,
      },
    ],}

]);

export default router;