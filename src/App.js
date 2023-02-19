import { useState, useEffect } from 'react'
import styles from './App.module.css'
import User from './Components/User/User'
import { Routes, Route } from 'react-router-dom'
import Admin from './Components/Admin/Admin'
import { auth } from './Firebase'

const App = () => {
  const [userName, setUserName] = useState(null);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => { user ? setUserName(user.displayName) : setUserName("Not resolved") });
    return unsubscribe;
  }, [userName]);

  return (
    <div className={`${styles.app}`}>
      <Routes>
        <Route path="/*" element={<User />} exact />
        <Route path="/admin/*" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App