import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Component/Root";
import Home from "./Component/Navber/Home";
import ListedBooks from "./Component/Navber/ListedBooks";
import PagesToRead from "./Component/Navber/PagesToRead";
import About from "./Component/Navber/About";
import Contact from "./Component/Navber/Contact";
import Error from "./Component/ErrorPage/Error";
import BookDitels from "./Component/Main/BookDitels";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listed",
        element: <ListedBooks></ListedBooks>,
        loader: () => fetch("/Data.json"),
      },
      {
        path: "/PageToRead",
        element: <PagesToRead></PagesToRead>,
        loader: () => fetch("/Data.json"),
      },
      {
        path: "/Contact",
        element: <Contact></Contact>,
      },
      {
        path: "/About",
        element: <About></About>,
      },
      {
        path: "book/:id",
        element: <BookDitels></BookDitels>,
        loader: () => fetch("/Data.json"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
