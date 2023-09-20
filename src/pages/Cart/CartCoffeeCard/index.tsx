import { Trash } from 'phosphor-react'
import { QuantityInput } from '../../../components/QuantityInput'
import {
  ButtonsContainer,
  CartCoffeeCardContainer,
  LeftContainer,
  RemoveButton,
  RightContainer,
} from './styles'

interface CartCoffeeCardProps {
  name: string
  img: string
  price: number
}

export function CartCoffeeCard({ name, img, price }: CartCoffeeCardProps) {
  return (
    <CartCoffeeCardContainer>
      <LeftContainer>
        <img src={img} alt={name} />
        <div>
          <p>{name}</p>
          <ButtonsContainer>
            <QuantityInput />
            <RemoveButton>
              <Trash size={20} />
              Remover
            </RemoveButton>
          </ButtonsContainer>
        </div>
      </LeftContainer>
      <RightContainer>
        <p>R$</p>
        <p>
          {price.toLocaleString('pt-BR', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
          })}
        </p>
      </RightContainer>
    </CartCoffeeCardContainer>
  )
}
