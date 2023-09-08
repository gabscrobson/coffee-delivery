import { styled } from 'styled-components'

export const QualityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.baseText};
`

export const IconContainer = styled.div<{ color: string }>`
  color: white;
  padding: 0.8rem 1rem;
  background-color: ${(props) => props.color};
  border-radius: 50%;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.2rem;
  }
`
