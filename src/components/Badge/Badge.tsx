import type { HTMLAttributes } from 'react'
import styles from './Badge.module.css'

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: 'neutral' | 'accent' | 'success' | 'warning' | 'danger'
}

function Badge({ tone = 'neutral', className, ...props }: BadgeProps) {
  return (
    <span className={[styles.badge, styles[tone], className ?? ''].join(' ')} {...props} />
  )
}

export default Badge
