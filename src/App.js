import styles from './App.module.css'
import User from './Components/User/User'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Admin from './Components/Admin/Admin'

const App = () => {
  const navigate = useNavigate()
  return (
    <div className={`${styles.app}`}>
      <Routes>
        <Route path="/*" element={<User />} exact />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  )
}

export default App