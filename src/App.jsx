import { BrowserRouter, Routes, Route, NavLink } from "react-router-dom";
import InputScreen from "./InputScreen";
import ReportScreen from "./ReportScreen";

function App() {
    return (
        <BrowserRouter basename="/game-chart/">
            <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
                <NavLink to="/" end style={{ marginRight: "1rem" }}>
                    Input
                </NavLink>
                <NavLink to="/report">Report</NavLink>
            </nav>
            <Routes>
                <Route path="/" element={<InputScreen />} />
                <Route path="/report" element={<ReportScreen />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
