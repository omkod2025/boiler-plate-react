import { useState } from 'react'
import styles from './Avatar.module.css'

type AvatarProps = {
  name: string
  src?: string
  size?: 'sm' | 'md' | 'lg'
}

const initialsOf = (name: string) =>
  name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? '')
    .join('')

/** Shows the image, or the person's initials when there is no image or it fails */
function Avatar({ name, src, size = 'md' }: AvatarProps) {
  const [failedSrc, setFailedSrc] = useState<string>()
  const showImage = src !== undefined && src !== failedSrc

  return showImage ? (
    <img
      src={src}
      alt={name}
      className={`${styles.avatar} ${styles[size]}`}
      onError={() => setFailedSrc(src)}
    />
  ) : (
    <span role="img" aria-label={name} className={`${styles.avatar} ${styles[size]}`}>
      {initialsOf(name)}
    </span>
  )
}

export default Avatar
