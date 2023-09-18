import { styled } from 'styled-components'

export const PaymentContainer = styled.div`
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

  &:hover {
    background: ${(props) => props.theme.baseHover};
  }
`
