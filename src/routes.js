import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";
import Home from './pages/Home';
import Users from './pages/Users';

 function RoutesPaths() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route exact path="/usuarios" element={<Users/>} />
            </Routes>
        </Router>
    );
};

export default RoutesPaths;