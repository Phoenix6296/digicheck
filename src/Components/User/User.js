//Import switch and router
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import ShowCertificate from "./ShowCertificate/ShowCertificate";

const User = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/certificate" element={<ShowCertificate />} exact />
            </Routes>
        </div>
    );
};

export default User;