import { TextM, TextM2, TitleL, TitleM } from '../../../styles/typography'
import {
  CardFooterContainer,
  CoffeeCardContainer,
  TagContainer,
} from './styles'

interface CoffeeCardProps {
  img: string
  name: string
  description: string
  tags: string[]
  price: number
}

export function CoffeeCard({
  img,
  name,
  description,
  tags,
  price,
}: CoffeeCardProps) {
  return (
    <CoffeeCardContainer>
      <img src={img} alt={name} />
      <div>
        {tags.map((tag) => (
          <TagContainer key={tag}>{tag.toUpperCase()}</TagContainer>
        ))}
      </div>
      <TitleM>{name}</TitleM>
      <TextM>{description}</TextM>
      <CardFooterContainer>
        <div>
          <TextM2>R$</TextM2>
          <TitleL>
            {price.toLocaleString('pt-BR', {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </TitleL>
        </div>
      </CardFooterContainer>
    </CoffeeCardContainer>
  )
}
