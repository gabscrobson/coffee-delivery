import { TextM3 } from '../../../styles/typography'
import { PaymentContainer, PaymentLabel } from './styles'

interface PaymentProps {
  id: string
  method: string
  icon: JSX.Element
}

export function Payment({ id, method, icon }: PaymentProps) {
  return (
    <PaymentContainer>
      <input type="radio" name="payment" id={id} />
      <PaymentLabel htmlFor={id}>
        {icon}
        <TextM3>{method}</TextM3>
      </PaymentLabel>
    </PaymentContainer>
  )
}
