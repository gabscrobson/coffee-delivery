import { CreditCard } from 'phosphor-react'
import { TextM3 } from '../../../styles/typography'
import { PaymentContainer } from './styles'

export function Payment() {
  return (
    <PaymentContainer>
      <CreditCard size={24} weight="fill" />
      <TextM3>CARTÃO DE CRÉDITO</TextM3>
    </PaymentContainer>
  )
}
