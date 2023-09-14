import { styled } from 'styled-components'

export const TitleXL = styled.h1`
  font-family: 'Baloo 2', sans-serif;
  font-size: 3rem;
  line-height: 130%;
  font-weight: extra-bold;
  color: ${(props) => props.theme.baseTitle};
`

export const TitleL = styled(TitleXL)`
  font-size: 2rem;
  color: ${(props) => props.theme.baseSubtitle};
`

export const TitleM = styled(TitleL)`
  font-size: 1.5rem;
`

export const TitleS = styled(TitleXL)`
  font-size: 1.25rem;
  font-weight: bold;
`

export const TitleXS = styled(TitleXL)`
  font-size: 1rem;
  font-weight: bold;
`

export const TextL = styled.p`
  font-family: 'Roboto', sans-serif;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${(props) => props.theme.baseLabel};
`

export const TextM = styled(TextL)`
  font-size: 1rem;
`

export const TextM2 = styled(TextM)`
  font-size: 1.125rem;
  color: ${(props) => props.theme.baseSubtitle};
  font-weight: lighter;
`

export const TextM3 = styled(TextM)`
  color: ${(props) => props.theme.baseSubtitle};
`

export const TextS = styled(TextL)`
  font-size: 0.875rem;
`

export const TextXS = styled(TextL)`
  font-size: 0.75rem;
`

export const Tag = styled.span`
  font-family: 'Roboto', sans-serif;
  font-size: 0.625rem;
  font-weight: bold;
`
