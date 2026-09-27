import { useId, type ReactNode, type SelectHTMLAttributes } from 'react'
import Field from '@/components/Field/Field'
import { fieldDescription } from '@/components/Field/fieldDescription'
import fieldStyles from '@/components/Field/Field.module.css'
import styles from './Select.module.css'

export type SelectOption = { value: string; label: string; disabled?: boolean }

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: ReactNode
  options: SelectOption[]
  /** Adds an empty first option, e.g. "Choose a country" */
  placeholder?: string
  hint?: ReactNode
  error?: ReactNode
}

function Select({
  label,
  options,
  placeholder,
  hint,
  error,
  id,
  className,
  required,
  ...props
}: SelectProps) {
  const autoId = useId()
  const selectId = id ?? autoId

  return (
    <Field id={selectId} label={label} hint={hint} error={error} required={required}>
      <select
        id={selectId}
        className={[fieldStyles.control, styles.select, className ?? ''].join(' ')}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={fieldDescription(selectId, hint, error)}
        {...props}
      >
        {placeholder ? (
          <option value="" disabled>
            {placeholder}
          </option>
        ) : null}
        {options.map((option) => (
          <option key={option.value} value={option.value} disabled={option.disabled}>
            {option.label}
          </option>
        ))}
      </select>
    </Field>
  )
}

export default Select
