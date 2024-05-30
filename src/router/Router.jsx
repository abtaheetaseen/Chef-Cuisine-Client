import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../layout/MainLayouts";
import ErrorPage from "../errorPage/ErrorPage";
import Home from "../pages/Home";
import Login from "../pages/Login";
import AllFoods from "../pages/AllFoods";
import Gallery from "../pages/Gallery";
import Register from "../pages/Register";
import PrivateRoute from "./PrivateRoute";
import AddFoodItem from "../pages/AddFoodItem";
import MyAddedFoodItems from "../pages/MyAddedFoodItems";
import MyOrderedFoodItems from "../pages/MyOrderedFoodItems";
import FoodDetails from "../pages/FoodDetails";
import PurchasePage from "../pages/PurchasePage";
import UpdatePage from "../pages/UpdatePage";
import MyReservation from "../pages/MyReservation";

export const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayouts />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/allFoods",
                element: <AllFoods />
            },
            {
                path: "/gallery",
                element: <Gallery />
            },
            {
                path: "/addFoodItem",
                element: <PrivateRoute>
                    <AddFoodItem />
                </PrivateRoute>
            },
            {
                path: "/myAddedFoodItems",
                element: <PrivateRoute>
                    <MyAddedFoodItems />
                </PrivateRoute>
            },
            {
                path: "/myOrderedFoodItems",
                element: <PrivateRoute>
                    <MyOrderedFoodItems />
                </PrivateRoute>
            },
            {
                path: "/myReservation",
                element: <PrivateRoute>
                    <MyReservation />
                </PrivateRoute>
            },
            {
                path: "/allFoods/:id",
                element: <FoodDetails />,
                loader: ({params}) => fetch(`http://localhost:3000/allFoods/${params.id}`)
            },
            {
                path: "/purchasePage/:id",
                element: <PrivateRoute>
                    <PurchasePage />
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/allFoods/${params.id}`)
            },
            {
                path: "/updatePage/:id",
                element: <PrivateRoute>
                    <UpdatePage />
                </PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:3000/allFoods/${params.id}`)
            }
        ]
    }
])