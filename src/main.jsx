import { createBrowserRouter } from "react-router-dom";
import LoginPage from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";
import App from './App';
import CustomerDetails from "./pages/CustomerDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [{
      path: "/dashboard",
      element: <CustomerDetails />
    }],
  },
]);



export default router;
