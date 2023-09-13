import { styled } from 'styled-components'

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  width: 100%;
`

export const IntroContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
`

export const IntroInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;

  width: 100%;
`

export const IntroInfoTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const IntroInfoQualitiesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
`

export const IntroImage = styled.img`
  width: 50%;
  max-width: 650px;

  @media (max-width: 1000px) {
    display: none;
  }
`

export const CoffeeListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
`

export const CoffeeList = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
  justify-content: center;

  // Lower container width on small devices
  @media (max-width: 800px) {
    grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  }
`
