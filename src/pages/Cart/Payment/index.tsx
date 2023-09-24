import { useFormContext } from 'react-hook-form'
import { TextM3 } from '../../../styles/typography'
import { PaymentContainer, PaymentLabel } from './styles'

interface PaymentProps {
  id: string
  method: string
  icon: JSX.Element
}

export function Payment({ id, method, icon }: PaymentProps) {
  const { register } = useFormContext()

  return (
    <PaymentContainer>
      <input type="radio" id={id} value={method} {...register('pagamento')} />
      <PaymentLabel htmlFor={id}>
        {icon}
        <TextM3>{method}</TextM3>
      </PaymentLabel>
    </PaymentContainer>
  )
}
