import { TextL } from '../../../styles/typography'
import { IconContainer, QualityContainer } from './styles'

interface QualityProps {
  icon: JSX.Element
  color: string
  children: string
}

export function Quality({ icon, color, children }: QualityProps) {
  return (
    <QualityContainer>
      <IconContainer color={color}>
        <span>{icon}</span>
      </IconContainer>
      <TextL>{children}</TextL>
    </QualityContainer>
  )
}
