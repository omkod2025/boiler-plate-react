import reactLogo from '@/assets/react.svg'
import viteLogo from '@/assets/vite.svg'
import styles from './ResourceLinks.module.css'

type ResourceLink = { href: string; label: string } & (
  | { img: string }
  | { sprite: string }
)

// Static data lives at module level: built once, never per render
const docsLinks: ResourceLink[] = [
  { href: 'https://vite.dev/', label: 'Explore Vite', img: viteLogo },
  { href: 'https://react.dev/', label: 'Learn more', img: reactLogo },
]

const socialLinks: ResourceLink[] = [
  { href: 'https://github.com/vitejs/vite', label: 'GitHub', sprite: 'github-icon' },
  { href: 'https://chat.vite.dev/', label: 'Discord', sprite: 'discord-icon' },
  { href: 'https://x.com/vite_js', label: 'X.com', sprite: 'x-icon' },
  { href: 'https://bsky.app/profile/vite.dev', label: 'Bluesky', sprite: 'bluesky-icon' },
]

function SpriteIcon({ id, className }: { id: string; className: string }) {
  return (
    <svg className={className} role="presentation" aria-hidden="true">
      <use href={`/icons.svg#${id}`} />
    </svg>
  )
}

function LinkList({ links }: { links: ResourceLink[] }) {
  return (
    <ul className={styles.list}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} target="_blank" rel="noreferrer">
            {'img' in link ? (
              <img className={styles.linkIcon} src={link.img} alt="" />
            ) : (
              <SpriteIcon id={link.sprite} className={styles.linkIcon} />
            )}
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  )
}

function ResourceLinks() {
  return (
    <section className={styles.section}>
      <div className={styles.docs}>
        <SpriteIcon id="documentation-icon" className={styles.icon} />
        <h2>Documentation</h2>
        <p>Your questions, answered</p>
        <LinkList links={docsLinks} />
      </div>
      <div className={styles.social}>
        <SpriteIcon id="social-icon" className={styles.icon} />
        <h2>Connect with us</h2>
        <p>Join the Vite community</p>
        <LinkList links={socialLinks} />
      </div>
    </section>
  )
}

export default ResourceLinks
