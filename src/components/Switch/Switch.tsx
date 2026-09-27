import { useId, type InputHTMLAttributes, type ReactNode } from 'react'
import styles from './Switch.module.css'

type SwitchProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'role'> & {
  label: ReactNode
}

/** An on/off toggle that takes effect immediately (use Checkbox inside forms) */
function Switch({ label, id, className, ...props }: SwitchProps) {
  const autoId = useId()
  const inputId = id ?? autoId

  return (
    <div className={className ? `${styles.switch} ${className}` : styles.switch}>
      <input
        id={inputId}
        type="checkbox"
        role="switch"
        className={styles.input}
        {...props}
      />
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>
    </div>
  )
}

export default Switch
