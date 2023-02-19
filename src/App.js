// import { useState } from 'react'
import styles from './App.module.css'
import User from './Components/User/User'
import { Routes, Route } from 'react-router-dom'
import Admin from './Components/Admin/Admin'
// import { auth } from './firebase'

const App = () => {

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