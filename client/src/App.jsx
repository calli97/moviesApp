import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./Pages/Landing";
import Movies from "./Pages/Movies";
import Detail from "./Pages/Detail";
import Create from "./Pages/Create";
import Navbar from "./Components/Navbar";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { checkLogInUser } from "./redux/features/userSlice/userSlice";
import Profile from "./Pages/Profile";
import Auth from "./Pages/Auth";
import MovieEdit from "./Pages/MovieEdit";

function App() {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.user);
    useEffect(() => {
        console.log(user);
    }, [user]);

    useEffect(() => {
        dispatch(checkLogInUser(localStorage.getItem("token")));
    }, []);

    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route
                    path="/profile"
                    element={
                        user.signIn ? <Profile /> : <Navigate to="/auth" />
                    }
                />
                <Route
                    path="/auth"
                    element={
                        user.signIn ? <Navigate to="/profile" /> : <Auth />
                    }
                />
                <Route path="/movies" element={<Movies />} />
                <Route path="/detail/:movieid" element={<Detail />} />
                <Route path="/edit/:movieid" element={<MovieEdit />} />
                <Route path="/create" element={<Create />} />
            </Routes>
        </div>
    );
}

export default App;
