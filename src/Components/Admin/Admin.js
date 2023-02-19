import Dashboard from "./Dashboard/Dashboard"
import Navbar from "./Navbar/Navbar"
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import { auth } from '../../Firebase'
import { SyncLoader } from "react-spinners";
import Profile from "./Profile/Profile"
import Feedback from "./Feedback/Feedback"

const Admin = () => {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      user ? console.log(user, "Admin.js") : navigate('/');
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
        <Route path="/" element={navigate('/admin/dashboard')} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </div>
  )
}

export default Admin