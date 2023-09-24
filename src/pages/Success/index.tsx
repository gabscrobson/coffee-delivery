import { Clock, CurrencyDollar, MapPin } from 'phosphor-react'
import { Quality } from '../../components/Quality'
import { TitleL2 } from '../../styles/typography'
import {
  LeftSuccessContainer,
  SuccessContainer,
  SuccessInfoContainer,
} from './styles'
import { defaultTheme } from '../../styles/themes/default'
import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { FormData } from '../Cart'

interface LocationType {
  state: FormData
}

export function Success() {
  const { state } = useLocation() as LocationType
  const { rua, numero, bairro, cidade, uf, pagamento } = state
  const navigator = useNavigate()

  useEffect(() => {
    if (!state) {
      navigator('/')
    }
  }, [state, navigator])

  return (
    <SuccessContainer>
      <LeftSuccessContainer>
        <TitleL2>Uhu! Pedido confirmado</TitleL2>
        <p>Agora é so aguardar que logo o café chegará até você</p>

        <SuccessInfoContainer>
          <Quality
            icon={<MapPin weight="fill" />}
            color={defaultTheme.purple}
            size="small"
          >
            Entrega em Rua {rua}, {numero} {bairro} - {cidade}, {uf}
          </Quality>
          <Quality
            icon={<Clock weight="fill" />}
            color={defaultTheme.yellow}
            size="small"
          >
            <b>20-30 min</b>
          </Quality>
          <Quality
            icon={<CurrencyDollar weight="fill" />}
            color={defaultTheme.yellowDark}
            size="small"
          >
            <b>{pagamento}</b>
          </Quality>
        </SuccessInfoContainer>
      </LeftSuccessContainer>
      <img src="/success.svg" alt="success" />
    </SuccessContainer>
  )
}
