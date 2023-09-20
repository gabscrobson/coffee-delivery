import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

export function QuantityInput() {
  return (
    <QuantityInputContainer>
      <IconWrapper>
        <Minus size={16} weight="fill" />
      </IconWrapper>
      <input type="number" value={1} />
      <IconWrapper>
        <Plus size={16} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
