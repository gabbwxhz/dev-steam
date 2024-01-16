import styles from './Navbar.module.css'
import Logo from '../logo/Logo'
import Input from '../input/Input'
import CartButton from '../button/cart-button/CartButton'

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <Logo />
      <div className={styles.search}>
        <Input type="text" placeholder="Buscar" fullWidth />
      </div>
      <CartButton />
    </nav>
  )
}
