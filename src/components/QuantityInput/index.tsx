import { Minus, Plus } from 'phosphor-react'
import { IconContainer, QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconContainer>
        <Minus size={16} weight="fill" />
      </IconContainer>
      <input type="number" value={1} />
      <IconContainer>
        <Plus size={16} weight="fill" />
      </IconContainer>
    </QuantityInputContainer>
  )
}
