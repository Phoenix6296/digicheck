import Dashboard from "./Dashboard/Dashboard"
import Navbar from "./Navbar/Navbar"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from '../../Firebase'
import { SyncLoader } from "react-spinners";

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
      <h1>Admin</h1>
      <Dashboard />
    </div>
  )
}

export default Admin