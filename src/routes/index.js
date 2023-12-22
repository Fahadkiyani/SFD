import { createBrowserRouter } from "react-router-dom";
import mainRoutes from "./mainRoutes";
import loginRoutes from "./loginRoutes";

export const router = createBrowserRouter([mainRoutes, loginRoutes]);
