import { useId, type InputHTMLAttributes, type ReactNode } from 'react'
import styles from './Checkbox.module.css'

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & {
  label: ReactNode
  hint?: ReactNode
}

function Checkbox({ label, hint, id, className, ...props }: CheckboxProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const hintId = hint ? `${inputId}-hint` : undefined

  return (
    <div className={className ? `${styles.option} ${className}` : styles.option}>
      <input
        id={inputId}
        type="checkbox"
        className={styles.input}
        aria-describedby={hintId}
        {...props}
      />
      <div>
        <label htmlFor={inputId} className={styles.label}>
          {label}
        </label>
        {hint ? (
          <p id={hintId} className={styles.hint}>
            {hint}
          </p>
        ) : null}
      </div>
    </div>
  )
}

export default Checkbox
