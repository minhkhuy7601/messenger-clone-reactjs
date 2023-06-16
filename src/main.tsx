import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./pages/Root";
import Users from "./pages/Users";
import Conversations from "./pages/Conversations";
import ConversationID from "./pages/ConversationID";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
  {
    path: "/users",
    element: <Users />,
  },
  {
    path: "/conversations",
    element: <Conversations />,
  },
  {
    path: "/conversation/:id",
    element: <ConversationID />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
