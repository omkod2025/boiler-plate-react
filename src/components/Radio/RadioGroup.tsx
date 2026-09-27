import { useId, type ReactNode } from 'react'
import optionStyles from '@/components/Checkbox/Checkbox.module.css'
import styles from './RadioGroup.module.css'

export type RadioOption = {
  value: string
  label: ReactNode
  hint?: ReactNode
  disabled?: boolean
}

type RadioGroupProps = {
  label: ReactNode
  options: RadioOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  /** Form field name. Generated when omitted. */
  name?: string
  direction?: 'vertical' | 'horizontal'
}

function RadioGroup({
  label,
  options,
  value,
  defaultValue,
  onChange,
  name,
  direction = 'vertical',
}: RadioGroupProps) {
  const autoId = useId()
  const groupName = name ?? autoId

  return (
    <fieldset className={styles.group}>
      <legend className={styles.legend}>{label}</legend>
      <div className={`${styles.options} ${styles[direction]}`}>
        {options.map((option) => {
          const inputId = `${autoId}-${option.value}`
          const hintId = option.hint ? `${inputId}-hint` : undefined
          return (
            <div key={option.value} className={optionStyles.option}>
              <input
                id={inputId}
                type="radio"
                name={groupName}
                value={option.value}
                className={optionStyles.input}
                disabled={option.disabled}
                aria-describedby={hintId}
                {...(value === undefined
                  ? { defaultChecked: option.value === defaultValue }
                  : { checked: option.value === value })}
                onChange={() => onChange?.(option.value)}
              />
              <div>
                <label htmlFor={inputId} className={optionStyles.label}>
                  {option.label}
                </label>
                {option.hint ? (
                  <p id={hintId} className={optionStyles.hint}>
                    {option.hint}
                  </p>
                ) : null}
              </div>
            </div>
          )
        })}
      </div>
    </fieldset>
  )
}

export default RadioGroup
