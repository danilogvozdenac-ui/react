
import './App.css'
import styles from './App.module.css'
import Card from './Card'

function App() {
  const wörter = ['Hund', 'Katze', 'Auto', 'Haus', 'Baum']

  const wort1 = wörter[Math.floor(Math.random() * 5)]
  const wort2 = wörter[Math.floor(Math.random() * 5)]
  const wort3 = wörter[Math.floor(Math.random() * 5)]

  return (
    <>
      <h1>Willkommen</h1>
      <div className={styles.cardcontainer}>
        <Card title="peter" text={wort1} image="https://picsum.photos/200/300" />
        <Card title="susi" text={wort2} image="https://picsum.photos/200/300" />
        <Card title="paul" text={wort3} image="https://picsum.photos/200/300" />
      </div>
    </>
  )
}

export default App
