import { styled } from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: top;
  width: 100%;
  gap: 2rem;

  @media (max-width: 1000px) {
    flex-direction: column;

    > div {
      width: 100%;

      &:first-child {
        margin-bottom: 1rem;
      }
    }
  }
`

export const RightCartContainer = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  > div {
    background: ${(props) => props.theme.baseCard};
    border-radius: 0 25px;
    width: 100%;
    padding: 2rem;
  }
`

export const LeftCartContainer = styled(RightCartContainer)`
  flex: 1;

  > div {
    border-radius: 6px;
  }
`

interface TextInputProps {
  maxWidth?: number
}

export const TextInput = styled.input<TextInputProps>`
  background: ${(props) => props.theme.baseInput};
  border: 2px solid ${(props) => props.theme.baseButton};
  border-radius: 6px;
  padding: 0.7rem;
  margin: 0 1rem 1rem 0;
  width: 100%;
  max-width: ${(props) => (props.maxWidth ? `${props.maxWidth}rem` : '')};
`

export const FormHeader = styled.div`
  display: flex;
  align-items: top;
  gap: 0.5rem;
  margin-bottom: 2rem;

  > div {
    margin-top: -0.07rem;
  }
`

export const CartCoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PaymentOptionsContainer = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));
  justify-content: center;
`
