import App from "../components/App";
import { createBrowserRouter} from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Test from "../components/Test";

const Router = createBrowserRouter([
    {
        path: "/",
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