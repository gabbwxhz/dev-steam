import { BsCart4 } from 'react-icons/bs'

import styles from './Navbar.module.css'
import Logo from '../logo/Logo'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <input type="text" />
      <BsCart4 size="40" />
    </nav>
  )
}
