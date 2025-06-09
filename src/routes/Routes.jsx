import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllItems from "../pages/AllItems";
import AddItem from "../pages/AddItem";
import MyItems from "../pages/MyItems";
import UpdateItem from "../pages/UpdateItem";
import RecoveredItems from "../pages/RecoveredItems";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ItemDetails from "../pages/ItemDetails";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/allItems", element: <AllItems /> },
      { path: "/addItems", element: <AddItem /> },
      { path: "/myItems", element: <MyItems /> },
      { path: "/updateItems/:id", element: <UpdateItem /> },
      { path: "/allRecovered", element: <RecoveredItems /> },
      { path: "/items/:id", element: <ItemDetails /> },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "*", element: <NotFound /> },
    ]
  }
]);

export default function Routes() {
  return <RouterProvider router={router} />;
}
