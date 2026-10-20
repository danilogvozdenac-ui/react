import styles from './Card.module.css'

export default function Card() {
  return (
    <div className={styles.card}>
      <h2>Susi</h2>
      <img src="https://picsum.photos/200/300" alt="Hero" />
    </div>
  )
}