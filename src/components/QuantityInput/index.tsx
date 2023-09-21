import { Minus, Plus } from 'phosphor-react'
import { IconWrapper, QuantityInputContainer } from './styles'

interface QuantityInputProps {
  quantity: number
  onIncrease: () => void
  onDecrease: () => void
}

export function QuantityInput({
  quantity,
  onIncrease,
  onDecrease,
}: QuantityInputProps) {
  return (
    <QuantityInputContainer>
      <IconWrapper onClick={onDecrease}>
        <Minus size={16} weight="fill" />
      </IconWrapper>
      <input type="number" value={quantity} />
      <IconWrapper onClick={onIncrease}>
        <Plus size={16} weight="fill" />
      </IconWrapper>
    </QuantityInputContainer>
  )
}
