import { createBrowserRouter } from "react-router-dom";
import Home from "../Component/Home/Home";
import Question from "../Component/Question/Question";
import SignIn from "../Component/SignIn/SignIn";
import SignUp from "../Component/SignUp/SignUp";
import Main from "../layout/Main";
import Profile from "../Component/Profile/Profile";



export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home></Home>,

            },
            {
                path: '/question',
                element: <Question />,

            },
            {
                path: '/signin',
                element: <SignIn></SignIn>,

            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,

            },
            {
                path: '/Profile',
                element: <Profile />,

            }
        ]
    }

])