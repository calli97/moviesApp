import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Movies from "./Pages/Movies";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/movies" element={<Movies />} />
            </Routes>
        </div>
    );
}

export default App;
