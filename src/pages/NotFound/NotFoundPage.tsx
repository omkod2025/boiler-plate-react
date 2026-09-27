import { Link } from 'react-router'
import { routes } from '@/app/routes'
import styles from './NotFoundPage.module.css'

function NotFoundPage() {
  return (
    <section className={styles.page}>
      <h1>404</h1>
      <p>This page does not exist.</p>
      <Link to={routes.home.path} className={styles.link}>
        Back to home
      </Link>
    </section>
  )
}

export default NotFoundPage
