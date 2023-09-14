import { CurrencyDollar, MapPin } from 'phosphor-react'
import { TextM, TextM2, TitleM } from '../../styles/typography'
import {
  CartCoffeeListContainer,
  CartContainer,
  FormHeader,
  LeftCartContainer,
  PaymentOptionsContainer,
  RightCartContainer,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { CartCoffeeCard } from './CartCoffeeCard'
import { Payment } from './Payment'

export function Cart() {
  return (
    <CartContainer>
      <LeftCartContainer>
        <TitleM>Complete seu pedido</TitleM>
        <div>
          <FormHeader>
            <MapPin size={23} color={defaultTheme.yellowDark} />
            <div>
              <TextM2>Endereço de entrega</TextM2>
              <TextM>
                Informe o endereço de entrega onde deseja receber seu pedido
              </TextM>
            </div>
          </FormHeader>
        </div>
        <div>
          <FormHeader>
            <CurrencyDollar size={23} color={defaultTheme.purple} />
            <div>
              <TextM2>Pagamento</TextM2>
              <TextM>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </TextM>
            </div>
          </FormHeader>
          <PaymentOptionsContainer>
            <Payment />
            <Payment />
            <Payment />
          </PaymentOptionsContainer>
        </div>
      </LeftCartContainer>
      <RightCartContainer>
        <TitleM>Cafés selecionados</TitleM>
        <div>
          <CartCoffeeListContainer>
            <CartCoffeeCard />
            <CartCoffeeCard />
            <CartCoffeeCard />
            <CartCoffeeCard />
          </CartCoffeeListContainer>
        </div>
      </RightCartContainer>
    </CartContainer>
  )
}
