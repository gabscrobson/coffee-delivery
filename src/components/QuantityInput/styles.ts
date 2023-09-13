import { styled } from 'styled-components'

export const QuantityInputContainer = styled.div`
  flex: 1;
  background: ${(props) => props.theme.baseButton};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.2rem;
  border-radius: 6px;

  padding: 0.5rem;

  input {
    text-align: center;
    width: 100%;
    background: none;
    border: none;
    color: ${(props) => props.theme.baseTitle};

    &:focus {
      outline: none;
    }
  }
`
