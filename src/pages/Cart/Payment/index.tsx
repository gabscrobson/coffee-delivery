import { TextM3 } from '../../../styles/typography'
import { PaymentContainer } from './styles'

interface PaymentProps {
  method: string
  icon: JSX.Element
}

export function Payment({ method, icon }: PaymentProps) {
  return (
    <PaymentContainer>
      {icon}
      <TextM3>{method}</TextM3>
    </PaymentContainer>
  )
}
