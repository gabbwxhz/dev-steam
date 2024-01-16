import styles from './CartMenu.module.css'
import CartOption from '../cart-option/CartOption'
import Button from '../button/Button'

export default function CartMenu({ cart, onRemove }) {
  const calculateTotalPrice = () => {
    return cart.reduce((prev, current) => prev + current.price, 0)
  }

  return (
    <div className={styles.menu}>
      <div className={styles.options}>
        {cart.length === 0 && (
          <p className={styles.productAlert}>Nenhum produto no seu carrinho.</p>
        )}
        {cart.map((cartInfo, pos) => (
          <CartOption
            image={cartInfo.image}
            name={cartInfo.name}
            price={cartInfo.price}
            onRemove={() => onRemove(pos)}
            key={`cart-info-${pos}`}
          />
        ))}
      </div>
      <div className={styles.priceline}>
        <h2>Total</h2>
        <h2 className={styles.price}>R$ {calculateTotalPrice().toFixed(2)}</h2>
      </div>
      <Button fullWidth>Finalizar Compra</Button>
    </div>
  )
}
