import ReactDOM from "react-dom";
import "./index.css";
import React from "react";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Home } from "./componet/Home";
import { BookList } from "./componet/BookList";
import { BookIteam } from "./componet/BookIteam";
import { AddBook } from "./componet/AddBook";
import { DetailBook } from "./componet/DetailBook";
import { UpdateBook } from "./componet/UpdateBook";
import App from "./App";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/BookList",
        element: <BookList />,
      },
      {
        path: "/BookIteam",
        element: <BookIteam />,
      },
      {
        path: "/AddBook",
        element: <AddBook />,
      },
      {
        path: "/DetailBook/:id",
        element: <DetailBook />,
      },
      {
        path: "/UpdateBook/:id",
        element: <UpdateBook />,
      },
    ],
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
