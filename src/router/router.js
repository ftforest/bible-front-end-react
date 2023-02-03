import App from "../components/App";
import { createBrowserRouter} from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Test from "../components/Test";
import HeaderMafin from "../components/HeaderMafin";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <HeaderMafin/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "app",
        element: <App/>,
        errorElement: <ErrorPage/>,
    },
    {
        path: "test/:id",
        element: <Test/>,
        errorElement: <ErrorPage/>,
    },
]);

export default Router;