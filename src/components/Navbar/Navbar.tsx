import { NavLink } from 'react-router'
import { navRoutes, routes } from '@/app/routes'
import styles from './Navbar.module.css'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? `${styles.link} ${styles.active}` : styles.link

function Navbar() {
  return (
    <header className={styles.header}>
      <nav aria-label="Main">
        <ul className={styles.list}>
          {navRoutes.map((key) => {
            const { path, label, load } = routes[key]
            // Start fetching the page chunk as soon as the user shows intent
            const preload = () => void load()
            return (
              <li key={key}>
                <NavLink
                  to={path}
                  end
                  className={linkClass}
                  onMouseEnter={preload}
                  onFocus={preload}
                >
                  {label}
                </NavLink>
              </li>
            )
          })}
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
