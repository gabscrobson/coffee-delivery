import { CartCoffeeCardContainer } from './styles'

interface CartCoffeeCardProps {
  name: string
  img: string
}

export function CartCoffeeCard({ name, img }: CartCoffeeCardProps) {
  return (
    <CartCoffeeCardContainer>
      <img src={img} alt={name} />
    </CartCoffeeCardContainer>
  )
}
