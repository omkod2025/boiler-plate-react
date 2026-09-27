import styles from './Spinner.module.css'

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg'
  /** Accessible label. Pass `null` when a parent already announces loading. */
  label?: string | null
}

function Spinner({ size = 'md', label = 'Loading' }: SpinnerProps) {
  return label === null ? (
    <span className={`${styles.spinner} ${styles[size]}`} aria-hidden="true" />
  ) : (
    <span
      className={`${styles.spinner} ${styles[size]}`}
      role="status"
      aria-label={label}
    />
  )
}

export default Spinner
