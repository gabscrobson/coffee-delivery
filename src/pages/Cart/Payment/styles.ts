import { styled } from 'styled-components'

export const PaymentContainer = styled.div`
  input[type='radio'] {
    display: none;
  }

  input:checked + label {
    background: ${(props) => props.theme.purpleLight};
    border: 1px solid ${(props) => props.theme.purple};
  }
`

export const PaymentLabel = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 1rem;
  background: ${(props) => props.theme.baseButton};
  border-radius: 6px;
  color: ${(props) => props.theme.baseSubtitle};
  cursor: pointer;
  transition: 0.2s;
  border: 1px solid transparent;

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }
`
