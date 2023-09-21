import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../components/QuantityInput'
import { TextM, TextM2, TitleL, TitleM } from '../../../styles/typography'
import {
  AddToCartContainer,
  CardFooterContainer,
  CoffeeCardContainer,
  PriceContainer,
  TagContainer,
} from './styles'
import { Coffee } from '../../../contexts/CartContext'
import { useCart } from '../../../hooks/useCart'
import { useState } from 'react'

interface CoffeeCardProps {
  coffee: Coffee
}

export function CoffeeCard({ coffee }: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)
  const { addCoffeeToCart } = useCart()

  function handleIncreaseQuantity() {
    setQuantity(quantity + 1)
  }

  function handleDecreaseQuantity() {
    if (quantity > 1) {
      setQuantity(quantity - 1)
    }
  }

  function handleAddCoffeeToCart() {
    addCoffeeToCart({ ...coffee, quantity })
    setQuantity(1)
  }

  return (
    <CoffeeCardContainer>
      <img src={`/coffees/${coffee.photo}`} alt={coffee.name} />
      <div>
        {coffee.tags.map((tag) => (
          <TagContainer key={tag}>{tag.toUpperCase()}</TagContainer>
        ))}
      </div>
      <TitleM>{coffee.name}</TitleM>
      <TextM>{coffee.description}</TextM>
      <CardFooterContainer>
        <PriceContainer>
          <TextM2>R$</TextM2>
          <TitleL>
            {coffee.price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TitleL>
        </PriceContainer>
        <AddToCartContainer>
          <QuantityInput
            quantity={quantity}
            onIncrease={handleIncreaseQuantity}
            onDecrease={handleDecreaseQuantity}
          />
          <button onClick={handleAddCoffeeToCart}>
            <ShoppingCart size={22} weight="fill" />
          </button>
        </AddToCartContainer>
      </CardFooterContainer>
    </CoffeeCardContainer>
  )
}
