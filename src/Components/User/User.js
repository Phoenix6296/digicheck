//Import switch and router
import { Route, Routes } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Home from "./Home/Home";
import ShowCertificate from "./ShowCertificate/ShowCertificate";
import Signup from "./Signup/Signup";
import Login from "./Login/Login";
import ForgotPassword from "./ForgotPassword/ForgotPassword";

const User = () => {
    return (
        <div>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} exact />
                <Route path="/certificate" element={<ShowCertificate />} exact />
                <Route path="/signup" element={<Signup />} exact />
                <Route path="/login" element={<Login />} exact />
                <Route path="/login/forgot_password" element={<ForgotPassword />} exact />
            </Routes>
        </div>
    );
};

export default User;