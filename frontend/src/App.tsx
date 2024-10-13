import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {Login, Dashboard, Profile} from "./components";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/login" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/profile" element={<Profile/>}/>
                <Route path="*" element={<Navigate to={"/dashboard"}/>}/>
            </Routes>
        </Router>
    );
}


export default App;
