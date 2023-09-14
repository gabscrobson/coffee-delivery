import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartButton,
  HeaderContainer,
  LocationButton,
  RightButtonsContainer,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src="/logo.svg" alt="logo" />
      </NavLink>
      <RightButtonsContainer>
        <LocationButton>
          <MapPin size={24} weight="fill" />
          Porto Alegre, RS
        </LocationButton>
        <NavLink to="/cart" title="Cart">
          <CartButton>
            <ShoppingCart size={24} weight="fill" />
          </CartButton>
        </NavLink>
      </RightButtonsContainer>
    </HeaderContainer>
  )
}
