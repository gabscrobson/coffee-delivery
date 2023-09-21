import { ReactNode } from 'react'
import { IconContainer, QualityContainer } from './styles'

interface QualityProps {
  icon: JSX.Element
  color: string
  children: ReactNode
  size?: 'small' | 'medium' | 'large'
}

export function Quality({
  icon,
  color,
  size = 'medium',
  children,
}: QualityProps) {
  const sizeMap = {
    small: '2.8rem',
    medium: '3.3rem',
    large: '4rem',
  }

  return (
    <QualityContainer>
      <IconContainer color={color} size={sizeMap[size]}>
        <span>{icon}</span>
      </IconContainer>
      {children}
    </QualityContainer>
  )
}
