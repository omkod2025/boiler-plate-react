import { cloneElement, useId, type ReactElement, type ReactNode } from 'react'
import styles from './Tooltip.module.css'

type TooltipProps = {
  content: ReactNode
  /** A single focusable element, e.g. a Button */
  children: ReactElement<{ 'aria-describedby'?: string }>
  placement?: 'top' | 'bottom'
}

/**
 * Shows on hover and keyboard focus. Supplementary text only: never put
 * information here that the user needs to complete a task.
 */
function Tooltip({ content, children, placement = 'top' }: TooltipProps) {
  const tooltipId = useId()

  return (
    <span className={styles.wrapper}>
      {cloneElement(children, { 'aria-describedby': tooltipId })}
      <span role="tooltip" id={tooltipId} className={`${styles.tooltip} ${styles[placement]}`}>
        {content}
      </span>
    </span>
  )
}

export default Tooltip
