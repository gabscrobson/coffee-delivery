import { styled } from 'styled-components'

export const QualityContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.theme.baseText};
`

export const IconContainer = styled.div<{ color: string; size: string }>`
  color: white;
  min-width: ${(props) => props.size} !important;
  min-height: ${(props) => props.size} !important;
  border-radius: 50%;
  background-color: ${(props) => props.color};

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 1.5rem;
    height: 1.5rem;
    margin-top: 0.2rem;
  }
`
