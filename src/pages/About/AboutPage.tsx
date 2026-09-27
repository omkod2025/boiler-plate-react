import styles from './AboutPage.module.css'

function AboutPage() {
  return (
    <section className={styles.page}>
      <h1>About</h1>
      <p>
        React + TypeScript boilerplate built with Vite and React Router. Each
        page lives in its own folder under <code>src/pages</code> and is loaded
        on demand.
      </p>
    </section>
  )
}

export default AboutPage
