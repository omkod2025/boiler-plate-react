import type { ReactNode } from 'react'
import styles from './Alert.module.css'

type AlertProps = {
  tone?: 'info' | 'success' | 'warning' | 'danger'
  title?: ReactNode
  children?: ReactNode
  /** Shows a close button when provided */
  onDismiss?: () => void
}

function Alert({ tone = 'info', title, children, onDismiss }: AlertProps) {
  // Errors and warnings interrupt screen readers; the rest are announced politely
  const role = tone === 'danger' || tone === 'warning' ? 'alert' : 'status'

  return (
    <div role={role} className={`${styles.alert} ${styles[tone]}`}>
      <div className={styles.content}>
        {title ? <p className={styles.title}>{title}</p> : null}
        {children ? <div className={styles.body}>{children}</div> : null}
      </div>
      {onDismiss ? (
        <button type="button" className={styles.dismiss} onClick={onDismiss} aria-label="Dismiss">
          ×
        </button>
      ) : null}
    </div>
  )
}

export default Alert
