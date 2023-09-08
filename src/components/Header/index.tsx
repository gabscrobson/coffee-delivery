import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartButton,
  HeaderContainer,
  LocationButton,
  RightButtonsContainer,
} from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <img src="/src/assets/logo.svg" alt="logo" />
      <RightButtonsContainer>
        <LocationButton type="button">
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <CartButton type="button">
          <ShoppingCart size={24} weight="fill" />
        </CartButton>
      </RightButtonsContainer>
    </HeaderContainer>
  )
}
