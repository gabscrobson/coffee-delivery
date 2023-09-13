import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme.baseCard};
  border-radius: 0.375rem 2.25rem;

  height: 19.375rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 1rem;

  img {
    margin-top: -2.5rem;
  }
`

export const TagContainer = styled.div`
  display: inline-block;
  background: ${(props) => props.theme.yellowLight};
  color: ${(props) => props.theme.yellowDark};
  font-weight: 600;
  font-size: 0.9rem;
  border-radius: 0.475rem;
  padding: 0.25rem 0.5rem;
  width: fit-content;
  margin: 0.25rem;
`

export const CardFooterContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const PriceContainer = styled.div`
  display: flex;
  align-items: baseline;
  gap: 0.2rem;
  font-weight: 600;
`

export const AddToCartContainer = styled.div`
  flex: 1;
  max-width: 7.5rem;
  display: flex;
  align-items: center;
  gap: 0.3rem;

  > button {
    width: 2.75rem;
    height: 2.375rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.purpleDark};
    color: ${(props) => props.theme.baseCard};
    border-radius: 6px;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`
