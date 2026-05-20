import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./pages/home/dashboard.tsx";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from './pages/login/login'
import Main from './pages/main/main'
import Perfil from "./pages/main/main";
const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App/>
  },
  {
    path: "/",
    element: <Login/>
  },
  {
    path: "/main",
    element: <Main/>
  },
  {
    path:"/perfil",
    element: <Perfil/>
  }
])
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
);
