import Dashboard from "./Dashboard/Dashboard"
import Navbar from "./Navbar/Navbar"
import Profile from "./Profile/Profile";
import Feedback from "./Feedback/Feedback";
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { auth } from '../../Firebase'
import { SyncLoader } from "react-spinners";


const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) navigate('/');
      setIsLoading(false);
    })
  }, [navigate, isLoading])

  if (isLoading) {
    return <div style={
      { display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}><SyncLoader loading={isLoading} size={20} /></div>
  }
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} exact />
        <Route path="/profile" element={<Profile />} exact />
        <Route path="/feedback" element={<Feedback />} exact />
      </Routes>
    </div>
  )
}

export default Admin
