import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./Pages/Landing";
import Movies from "./Pages/Movies";
import Detail from "./Pages/Detail";
import Create from "./Pages/Create";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/movies" element={<Movies />} />
                <Route path="/detail/:movieid" element={<Detail />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </div>
    );
}

export default App;
