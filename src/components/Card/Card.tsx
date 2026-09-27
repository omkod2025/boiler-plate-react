import type { HTMLAttributes, ReactNode } from 'react'
import styles from './Card.module.css'

type CardProps = Omit<HTMLAttributes<HTMLElement>, 'title'> & {
  title?: ReactNode
  description?: ReactNode
  /** Right side of the header, e.g. a Badge or a menu button */
  action?: ReactNode
  footer?: ReactNode
}

function Card({ title, description, action, footer, className, children, ...props }: CardProps) {
  const hasHeader = title || description || action

  return (
    <section className={className ? `${styles.card} ${className}` : styles.card} {...props}>
      {hasHeader ? (
        <header className={styles.header}>
          <div>
            {title ? <h3 className={styles.title}>{title}</h3> : null}
            {description ? <p className={styles.description}>{description}</p> : null}
          </div>
          {action}
        </header>
      ) : null}
      {children ? <div className={styles.body}>{children}</div> : null}
      {footer ? <footer className={styles.footer}>{footer}</footer> : null}
    </section>
  )
}

export default Card
