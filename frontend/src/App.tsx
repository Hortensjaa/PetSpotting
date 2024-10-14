import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {Login, Dashboard, Profile} from "./components";
import {UserProvider} from "./userProvider.tsx";

function App() {

    return (
        <UserProvider>
            <Router>
                <Routes>
                    <Route path="/login" element={<Login/>}/>
                    <Route path="/dashboard" element={<Dashboard/>}/>
                    <Route path="/profile" element={<Profile/>}/>
                    <Route path="*" element={<Navigate to={"/dashboard"}/>}/>
                </Routes>
            </Router>
        </UserProvider>
    );
}


export default App;
