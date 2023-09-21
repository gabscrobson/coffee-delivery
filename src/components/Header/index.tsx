import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  CartButton,
  CartQuantity,
  HeaderContainer,
  HeaderContent,
  LocationButton,
  RightButtonsContainer,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useCart } from '../../hooks/useCart'

export function Header() {
  const [userLocation, setUserLocation] = useState<string>('Carregando...')

  useEffect(() => {
    // get the user's current location
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords
        // use a reverse geocoding service to get the city and state information
        const response = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`,
        )
        const data = await response.json()
        const city =
          data.address.city || data.address.town || data.address.village || ''
        const state = data.address.state || ''
        setUserLocation(`${city}, ${state}`)
      },
      (error) => {
        console.error(error)
        setUserLocation('Localização indisponível')
      },
    )
  }, [])

  const { cartItems } = useCart()
  const cartItemsQuantity = cartItems.length

  return (
    <HeaderContainer>
      <HeaderContent>
        <NavLink to="/" title="Home">
          <img src="/logo.svg" alt="logo" />
        </NavLink>
        <RightButtonsContainer>
          <LocationButton>
            <MapPin size={24} weight="fill" />
            {userLocation}
          </LocationButton>
          <NavLink to="/cart" title="Cart">
            <CartButton>
              {/* <CartQuantity>{}</CartQuantity> */}
              {cartItemsQuantity > 0 && (
                <CartQuantity>{cartItemsQuantity}</CartQuantity>
              )}
              <ShoppingCart size={24} weight="fill" />
            </CartButton>
          </NavLink>
        </RightButtonsContainer>
      </HeaderContent>
    </HeaderContainer>
  )
}
