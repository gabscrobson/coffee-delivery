import { styled } from 'styled-components'

export const CartCoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
`

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  > img {
    width: 5.5rem;
  }

  > div {
    margin-left: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    > p {
      font-size: 1.4rem;
      color: ${(props) => props.theme.baseTitle};
    }
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const RightContainer = styled.div`
  font-size: 1.25rem;
  color: ${(props) => props.theme.baseSubtitle};
  font-weight: 600;
  display: flex;
  gap: 0.3rem;
`
