import type { ReactNode } from 'react'

/** ids of the hint/error text, for aria-describedby on the control */
export function fieldDescription(
  id: string,
  hint?: ReactNode,
  error?: ReactNode,
) {
  const ids = [error ? `${id}-error` : '', hint ? `${id}-hint` : '']
  return ids.filter(Boolean).join(' ') || undefined
}
