import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  width: 100%;
  margin-bottom: 4rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RightButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
`

const BaseRightButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;

  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;

  font-family: 'Roboto', sans-serif;
  font-size: 1.1rem;
  font-weight: 400;
  line-height: 130%;

  transition: 0.2s;

  &:hover {
    filter: brightness(0.95);
  }
`

export const LocationButton = styled(BaseRightButton)`
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purple};
`

export const CartButton = styled(BaseRightButton)`
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
`
