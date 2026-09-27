import { useId, type InputHTMLAttributes, type ReactNode } from 'react'
import Field from '@/components/Field/Field'
import { fieldDescription } from '@/components/Field/fieldDescription'
import fieldStyles from '@/components/Field/Field.module.css'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: ReactNode
  hint?: ReactNode
  error?: ReactNode
}

function Input({ label, hint, error, id, className, required, ...props }: InputProps) {
  const autoId = useId()
  const inputId = id ?? autoId

  return (
    <Field id={inputId} label={label} hint={hint} error={error} required={required}>
      <input
        id={inputId}
        className={className ? `${fieldStyles.control} ${className}` : fieldStyles.control}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={fieldDescription(inputId, hint, error)}
        {...props}
      />
    </Field>
  )
}

export default Input
