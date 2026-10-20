import './App.css'
import styles from './App.module.css'
import Card from './Card'

function App() {
  return (
    <>
      <h1>Wilkommen</h1>
      <div className={styles.cardcontainer}>
        <Card title="peter" text="Das ist Peter" image="https://picsum.photos/200/300" />
        <Card title="susi" text="Das ist Susi" image="https://picsum.photos/200/300"/>
        <Card  title="paul" text="Das ist Paul" image="https://picsum.photos/200/300"/>
      </div>
    </>
  )
}

export default App
