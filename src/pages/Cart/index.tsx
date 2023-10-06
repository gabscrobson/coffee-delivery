import { Bank, CreditCard, CurrencyDollar, MapPin, Money } from 'phosphor-react'
import { TextL, TextM, TextM2, TitleM, TitleM2 } from '../../styles/typography'
import {
  CartCoffeeListContainer,
  CartForm,
  ConfirmationContainer,
  FormHeader,
  LeftCartContainer,
  PaymentOptionsContainer,
  RightCartContainer,
  TextInput,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { CartCoffeeCard } from './CartCoffeeCard'
import { Payment } from './Payment'
import { useCart } from '../../hooks/useCart'
import { ZodType, z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'

export const paymentMethods = {
  credit: {
    label: 'Cartão de crédito',
    icon: <CreditCard size={22} color={defaultTheme.purple} />,
  },
  debit: {
    label: 'Cartão de débito',
    icon: <Bank size={22} color={defaultTheme.purple} />,
  },
  money: {
    label: 'Dinheiro',
    icon: <Money size={22} color={defaultTheme.purple} />,
  },
}

export type FormData = {
  cep: string
  rua: string
  numero: string
  complemento: string
  bairro: string
  cidade: string
  uf: string
  pagamento: string
}

export function Cart() {
  const { cartItems, clearCart } = useCart()
  const subTotal = cartItems.reduce((acc, coffee) => acc + coffee.price, 0)
  const deliveryFee = 3.5
  const total = subTotal + deliveryFee
  const navigator = useNavigate()

  // Form validation
  const schema: ZodType<FormData> = z.object({
    cep: z.string().min(8).max(8),
    rua: z.string().min(1).max(255),
    numero: z.string().min(1).max(20),
    complemento: z.string().min(1).max(255),
    bairro: z.string().min(1).max(255),
    cidade: z.string().min(1).max(255),
    uf: z.string().min(1).max(2),
    pagamento: z.string().min(1).max(255),
  })
  const cartForm = useForm<FormData>({
    resolver: zodResolver(schema),
  })
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = cartForm

  const confirmOrder = (data: FormData) => {
    navigator('/success', {
      state: data,
    })
    clearCart()
  }

  function showErrorMessage() {
    const firstError = Object.values(errors)[0]
    console.log('entrou aqui')
    if (firstError) {
      const errorMessage = firstError.message
      console.log(errorMessage)
      toast.error(errorMessage, {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      })
    }
  }

  return (
    <FormProvider {...cartForm}>
      <CartForm onSubmit={handleSubmit(confirmOrder)}>
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
              <TextInput
                type="text"
                maxWidth={12.5}
                placeholder="CEP"
                {...register('cep')}
                borderColor={errors.cep ? 'red' : undefined}
              />
              <TextInput
                type="text"
                placeholder="Rua"
                {...register('rua')}
                borderColor={errors.rua ? 'red' : undefined}
              />
              <TextInput
                type="text"
                maxWidth={12.5}
                placeholder="Número"
                {...register('numero')}
                borderColor={errors.numero ? 'red' : undefined}
              />
              <TextInput
                type="text"
                maxWidth={15}
                placeholder="Complemento"
                {...register('complemento')}
                borderColor={errors.complemento ? 'red' : undefined}
              />
              <TextInput
                type="text"
                maxWidth={12.5}
                placeholder="Bairro"
                {...register('bairro')}
                borderColor={errors.bairro ? 'red' : undefined}
              />
              <TextInput
                type="text"
                maxWidth={15}
                placeholder="Cidade"
                {...register('cidade')}
                borderColor={errors.cidade ? 'red' : undefined}
              />
              <TextInput
                type="text"
                maxWidth={5}
                placeholder="UF"
                {...register('uf')}
                borderColor={errors.uf ? 'red' : undefined}
              />
            </div>
          </div>
          <div>
            <FormHeader>
              <CurrencyDollar size={23} color={defaultTheme.purple} />
              <div>
                <TextM2>Pagamento</TextM2>
                <TextM>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
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
            {cartItems.length > 0 ? (
              <>
                <CartCoffeeListContainer>
                  {cartItems.map((coffee) => (
                    <CartCoffeeCard key={coffee.id} coffee={coffee} />
                  ))}
                </CartCoffeeListContainer>
                <ConfirmationContainer>
                  <div>
                    <TextM2>Subtotal</TextM2>
                    <TextM2>
                      R${' '}
                      {subTotal.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </TextM2>
                  </div>
                  <div>
                    <TextM2>Entrega</TextM2>
                    <TextM2>
                      R${' '}
                      {deliveryFee.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </TextM2>
                  </div>
                  <div>
                    <TitleM2>Total</TitleM2>
                    <TitleM2>
                      R${' '}
                      {total.toLocaleString('pt-BR', {
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2,
                      })}
                    </TitleM2>
                  </div>
                  <button type="submit" onClick={showErrorMessage}>
                    CONFIRMAR PEDIDO
                  </button>
                </ConfirmationContainer>
              </>
            ) : (
              <TextL>
                Seu carrinho esta vazio, adicione itens para continuar
              </TextL>
            )}
          </div>
        </RightCartContainer>
      </CartForm>
    </FormProvider>
  )
}
