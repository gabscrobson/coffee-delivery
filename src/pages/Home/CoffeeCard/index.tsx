import { TextM, TitleM, TitleXL } from '../../../styles/typography'
import { CoffeeCardContainer, TagContainer } from './styles'

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
      <TitleXL>R$ {price}</TitleXL>
    </CoffeeCardContainer>
  )
}
