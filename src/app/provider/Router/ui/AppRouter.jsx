import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "../config/routes.jsx";
import { LazyWrapper } from "@/shared/ui/index.js";

const router = createBrowserRouter(routes);

const AppRouter = () => (
  <LazyWrapper>
    <RouterProvider router={router} />
  </LazyWrapper>
);

export default AppRouter;