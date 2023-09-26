import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// screens
import Home from "../screens/Home/Home";

const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path={"/"} element={<Home />} />
            </Routes>
        </Router>
    );
};

export default RouterComponent;
