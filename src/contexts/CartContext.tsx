import { ReactNode, createContext, useState } from 'react'

export interface Coffee {
  id: number
  name: string
  description: string
  tags: string[]
  price: number
  photo: string
}

export interface CartItem extends Coffee {
  quantity: number
}

interface CartContextType {
  cartItems: CartItem[]
  addCoffeeToCart: (coffee: CartItem) => void
  changeCoffeeQuantity: (coffee: CartItem, quantity: number) => void
  removeCoffeeFromCart: (coffee: CartItem) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addCoffeeToCart(coffee: CartItem) {
    const coffeeAlreadyInCart = cartItems.find((item) => item.id === coffee.id)

    if (coffeeAlreadyInCart) {
      const updatedCartItems = cartItems.map((item) =>
        item.id === coffee.id ? coffee : item,
      )

      setCartItems(updatedCartItems)
    } else {
      setCartItems([...cartItems, coffee])
    }
  }

  function removeCoffeeFromCart(coffee: CartItem) {
    const updatedCartItems = cartItems.filter((item) => item.id !== coffee.id)

    setCartItems(updatedCartItems)
  }

  function changeCoffeeQuantity(coffee: CartItem, quantity: number) {
    const updatedCartItems = cartItems.map((item) =>
      item.id === coffee.id ? { ...coffee, quantity } : item,
    )

    setCartItems(updatedCartItems)
  }

  const contextValues = {
    cartItems,
    addCoffeeToCart,
    changeCoffeeQuantity,
    removeCoffeeFromCart,
  }

  return (
    <CartContext.Provider value={contextValues}>
      {children}
    </CartContext.Provider>
  )
}
