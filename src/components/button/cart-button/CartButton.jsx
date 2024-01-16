import { useState } from 'react'
import { BsCart4 } from 'react-icons/bs'

import styles from './CartButton.module.css'
import CartMenu from '@/components/cart-menu/CartMenu'

export default function CartButton({ cart, onRemove }) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <BsCart4
        className={styles.icon}
        size={30}
        onClick={() => {
          setOpen(!open)
        }}
      />
      {open && <CartMenu cart={cart} onRemove={onRemove} />}
    </div>
  )
}
