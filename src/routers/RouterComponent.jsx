import {
    BrowserRouter as Router,
    Route,
    Routes,
} from "react-router-dom";

// routers
import ProtectedRouter from "./ProtectedRouter/ProtectedRouter";
import UnProtectedRouter from "./UnProtectedRouter/UnProtectedRouter";



const RouterComponent = () => {
    return (
        <Router>
            <Routes >
                <Route element={<ProtectedRouter />}>

                </Route>
                <Route element={<UnProtectedRouter />}>

                </Route>
            </Routes>
        </Router >
    )
}

export default RouterComponent
