import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { TextM, TextM2, TitleM } from '../../styles/typography'
import {
  CartCoffeeListContainer,
  CartContainer,
  FormHeader,
  LeftCartContainer,
  PaymentOptionsContainer,
  RightCartContainer,
  TextInput,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { CartCoffeeCard } from './CartCoffeeCard'
import { Payment } from './Payment'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={16} color={defaultTheme.purple} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={16} color={defaultTheme.purple} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={16} color={defaultTheme.purple} />,
  },
}

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
          <div>
            <TextInput type="text" maxWidth={12.5} placeholder="CEP" />
            <TextInput type="text" placeholder="Rua" />
            <TextInput type="text" maxWidth={12.5} placeholder="Número" />
            <TextInput type="text" maxWidth={15} placeholder="Complemento" />
            <TextInput type="text" maxWidth={12.5} placeholder="Bairro" />
            <TextInput type="text" maxWidth={15} placeholder="Cidade" />
            <TextInput type="text" maxWidth={5} placeholder="UF" />
          </div>
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
            <Payment
              id="credit"
              method={paymentMethods.credit.label}
              icon={paymentMethods.credit.icon}
            />
            <Payment
              id="debit"
              method={paymentMethods.debit.label}
              icon={paymentMethods.debit.icon}
            />
            <Payment
              id="money"
              method={paymentMethods.money.label}
              icon={paymentMethods.money.icon}
            />
          </PaymentOptionsContainer>
        </div>
      </LeftCartContainer>
      <RightCartContainer>
        <TitleM>Cafés selecionados</TitleM>
        <div>
          <CartCoffeeListContainer>
            <CartCoffeeCard
              name="americano"
              img={'/coffees/' + 'americano.svg'}
            />
            <CartCoffeeCard
              name="americano"
              img={'/coffees/' + 'americano.svg'}
            />
            <CartCoffeeCard
              name="americano"
              img={'/coffees/' + 'americano.svg'}
            />
            <CartCoffeeCard
              name="americano"
              img={'/coffees/' + 'americano.svg'}
            />
          </CartCoffeeListContainer>
        </div>
      </RightCartContainer>
    </CartContainer>
  )
}
