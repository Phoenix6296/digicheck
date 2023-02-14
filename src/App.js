import styles from './App.module.css'
import User from './Components/User/User'

const App = () => {
  return (
    <div className={`${styles.app}`}>
      <User />
    </div>
  )
}

export default App