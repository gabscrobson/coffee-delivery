import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  background: ${(props) => props.theme.baseCard};
  border-radius: 0.375rem 2.25rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 1rem;

  img {
    margin-top: -2rem;
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
  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
    display: flex;
    align-items: baseline;
    gap: 0.2rem;
  }
`
