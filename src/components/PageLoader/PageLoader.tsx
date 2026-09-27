import Spinner from '@/components/Spinner/Spinner'
import styles from './PageLoader.module.css'

function PageLoader() {
  return (
    <div className={styles.loader} role="status" aria-live="polite">
      <Spinner label={null} />
      <span className={styles.label}>Loading…</span>
    </div>
  )
}

export default PageLoader
