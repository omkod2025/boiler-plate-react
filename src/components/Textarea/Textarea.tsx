import { useId, type ReactNode, type TextareaHTMLAttributes } from 'react'
import Field from '@/components/Field/Field'
import { fieldDescription } from '@/components/Field/fieldDescription'
import fieldStyles from '@/components/Field/Field.module.css'
import styles from './Textarea.module.css'

type TextareaProps = TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: ReactNode
  hint?: ReactNode
  error?: ReactNode
}

function Textarea({
  label,
  hint,
  error,
  id,
  className,
  required,
  rows = 4,
  ...props
}: TextareaProps) {
  const autoId = useId()
  const textareaId = id ?? autoId

  return (
    <Field id={textareaId} label={label} hint={hint} error={error} required={required}>
      <textarea
        id={textareaId}
        rows={rows}
        className={[fieldStyles.control, styles.textarea, className ?? ''].join(' ')}
        required={required}
        aria-invalid={error ? true : undefined}
        aria-describedby={fieldDescription(textareaId, hint, error)}
        {...props}
      />
    </Field>
  )
}

export default Textarea
