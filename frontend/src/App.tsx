import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Login, Dashboard, Profile} from "./components";

function App() {

    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/dashboard" element={<Dashboard/>}/>
                <Route path="/profile" element={<Profile/>}/>
            </Routes>
        </Router>
    );
}


export default App;
