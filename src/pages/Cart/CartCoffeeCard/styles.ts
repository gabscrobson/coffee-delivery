import { styled } from 'styled-components'

export const CartCoffeeCardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 0 1.5rem 0;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
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
  gap: 0.5rem;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
`

export const RightContainer = styled.div`
  font-size: 1.25rem;
  color: ${(props) => props.theme.baseSubtitle};
  font-weight: 600;
  display: flex;
  gap: 0.3rem;
`

export const RemoveButton = styled.button`
  background: ${(props) => props.theme.purple};
  color: ${(props) => props.theme.white};
  font-weight: bold;
  border: none;
  height: 100%;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.1rem;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: ${(props) => props.theme.purpleDark};
  }
`
