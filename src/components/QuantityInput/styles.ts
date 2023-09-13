import { styled } from 'styled-components'

export const QuantityInputContainer = styled.div`
  flex: 1;
  max-width: 5rem;
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

export const IconContainer = styled.button.attrs({ type: 'button' })`
  background: none;
  border: none;
  color: ${(props) => props.theme.purple};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${(props) => props.theme.purpleDark};
  }
`
