import './App.css'
import styles from './App.module.css'
import Card from './Card'

function App() {
  return (
    <>
      <h1>Wilkommen</h1>
      <div className={styles.cardcontainer}>
        <Card />
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App
