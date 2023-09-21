import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../components/QuantityInput'
import {
  ButtonsContainer,
  CartCoffeeCardContainer,
  LeftContainer,
  RemoveButton,
  RightContainer,
} from './styles'
import { CartItem } from '../../../contexts/CartContext'
import { useCart } from '../../../hooks/useCart'
import { useState } from 'react'

interface CartCoffeeCardProps {
  coffee: CartItem
}

export function CartCoffeeCard({ coffee }: CartCoffeeCardProps) {
  const [quantity, setQuantity] = useState(coffee.quantity)
  const { changeCoffeeQuantity, removeCoffeeFromCart } = useCart()

  function handleIncreaseQuantity() {
    setQuantity(quantity + 1)
    changeCoffeeQuantity(coffee, quantity + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
      changeCoffeeQuantity(coffee, quantity - 1)
    }
  }

  function handleRemoveCoffeeFromCart() {
    removeCoffeeFromCart(coffee)
  }

  return (
    <CartCoffeeCardContainer>
      <LeftContainer>
        <img src={`/coffees/${coffee.photo}`} alt={coffee.name} />
        <div>
          <p>{coffee.name}</p>
          <ButtonsContainer>
            <QuantityInput
              quantity={quantity}
              onIncrease={handleIncreaseQuantity}
              onDecrease={handleDecreaseQuantity}
            />
            <RemoveButton onClick={handleRemoveCoffeeFromCart}>
              <Trash size={20} />
              <span>Remover</span>
            </RemoveButton>
          </ButtonsContainer>
        </div>
      </LeftContainer>
      <RightContainer>
        <p>R$</p>
        <p>
          {coffee.price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </RightContainer>
    </CartCoffeeCardContainer>
  )
}
