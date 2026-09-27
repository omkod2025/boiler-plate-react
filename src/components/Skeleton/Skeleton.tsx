import type { CSSProperties } from 'react'
import styles from './Skeleton.module.css'

type SkeletonProps = {
  width?: CSSProperties['width']
  height?: CSSProperties['height']
  shape?: 'text' | 'rect' | 'circle'
}

/** Placeholder shown while content loads. Decorative, so hidden from screen readers. */
function Skeleton({ width = '100%', height, shape = 'text' }: SkeletonProps) {
  return (
    <span
      className={`${styles.skeleton} ${styles[shape]}`}
      style={{ width, height }}
      aria-hidden="true"
    />
  )
}

export default Skeleton
