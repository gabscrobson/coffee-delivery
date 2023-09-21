import { styled } from 'styled-components'

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 1rem;

  position: fixed;
  top: 0;
  left: 0;
  z-index: 1;

  background-color: ${(props) => props.theme.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

export const HeaderContent = styled.header`
  width: 90%;
  max-width: 1500px;
  margin: auto;

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

const BaseRightButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;

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

    > div {
      filter: brightness(0.95);
    }
  }

  > svg {
    margin-top: -0.05rem;
  }
`

export const LocationButton = styled(BaseRightButton)`
  background-color: ${(props) => props.theme.purpleLight};
  color: ${(props) => props.theme.purple};
`

export const CartButton = styled(BaseRightButton)`
  background-color: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  position: relative;
`

export const CartQuantity = styled.div`
  position: absolute;
  top: calc(-1.25rem / 3);
  right: calc(-1.25rem / 3);

  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  background-color: ${(props) => props.theme.yellowDark};
  color: ${(props) => props.theme.white};
  font-size: 0.75rem;
  font-weight: 700;

  display: flex;
  align-items: center;
  justify-content: center;
`
