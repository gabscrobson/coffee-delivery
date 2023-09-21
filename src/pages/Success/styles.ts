import { styled } from 'styled-components'

export const SuccessContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: 2rem;

  @media screen and (max-width: 1035px) {
    flex-direction: column;
    align-items: center;
    gap: 2rem;
  }

  > img {
    width: 100%;
    max-width: 500px;
  }
`

export const LeftSuccessContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.4rem;
  }
`

export const SuccessInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 40rem;
  margin-top: 2rem;

  border: 2.5px solid ${(props) => props.theme.yellow};
  border-radius: 6px 25px;
  padding: 2rem;
`
