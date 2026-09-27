import Hero from './components/Hero/Hero'
import ResourceLinks from './components/ResourceLinks/ResourceLinks'
import styles from './HomePage.module.css'

function HomePage() {
  return (
    <>
      <Hero />
      <div className={styles.ticks} />
      <ResourceLinks />
      <div className={styles.ticks} />
      <section className={styles.spacer} />
    </>
  )
}

export default HomePage
