import { useState } from 'react'
import heroImg from '@/assets/hero.png'
import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import Button from '@/components/Button/Button'
import styles from './Hero.module.css'

// Static artwork is hoisted so it is not recreated when the counter re-renders
const artwork = (
  <div className={styles.art}>
    <img src={heroImg} className={styles.base} width="170" height="179" alt="" />
    <img src={reactLogo} className={styles.framework} alt="React logo" />
    <img src={viteLogo} className={styles.vite} alt="Vite logo" />
  </div>
)

function Hero() {
  const [count, setCount] = useState(0)

  return (
    <section className={styles.hero}>
      {artwork}
      <div>
        <h1>Get started</h1>
        <p>
          Edit <code>src/pages/Home/HomePage.tsx</code> and save to test{' '}
          <code>HMR</code>
        </p>
      </div>
      <Button onClick={() => setCount((c) => c + 1)}>Count is {count}</Button>
    </section>
  )
}

export default Hero
