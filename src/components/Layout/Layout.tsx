import { Outlet, useNavigation } from 'react-router'
import Navbar from '@/components/Navbar/Navbar'
import styles from './Layout.module.css'

function Layout() {
  // True only while a lazy page chunk is still downloading
  const isNavigating = useNavigation().state === 'loading'

  return (
    <>
      <Navbar />
      <main className={styles.main} aria-busy={isNavigating}>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
