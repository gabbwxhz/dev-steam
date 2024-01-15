import { BsCart4 } from 'react-icons/bs'

import styles from './Navbar.module.css'
import Logo from '../logo/Logo'
import Input from '../input/Input'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input type="text" placeholder="Buscar" fullWidth />
      </div>
      <BsCart4 size="40" />
    </nav>
  )
}
