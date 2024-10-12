import {createBrowserRouter} from "react-router-dom";
import Cookies from 'js-cookie';
import {Dashboard, Login, Profile} from "./components";
import ProtectedRoute from "./ProtectedRoute.tsx";


const isAuthenticated = () => {
    const token = Cookies.get('accessToken')
    console.log(token)
    return !!token;
};

const router = createBrowserRouter(

    [
        {
            path: '/',
            element: <Login />,
            index: true
        },
        {
            element: <ProtectedRoute isAuthenticated={isAuthenticated()} />,
            children: [
                {
                    path: '/profile',
                    element: <Profile />
                },
                {
                    path: '/dashboard',
                    element: <Dashboard />
                },
            ]
        },
        {
            path: '*',
            element: <p>404 Error - Nothing here...</p>
        }
    ]
);

export default router;