import { defaultTheme } from '../../styles/themes/default'
import { TextL, TitleL, TitleXL } from '../../styles/typography'
import { CoffeeCard } from './CoffeeCard'
import { Quality } from './Quality'
import {
  CoffeeList,
  CoffeeListContainer,
  HomeContainer,
  IntroContainer,
  IntroImage,
  IntroInfoContainer,
  IntroInfoQualitiesContainer,
  IntroInfoTextContainer,
} from './styles'
import { Clock, Coffee, Package, ShoppingCart } from 'phosphor-react'
import { coffees } from '../../data/coffees'

export function Home() {
  return (
    <HomeContainer>
      <IntroContainer>
        <IntroInfoContainer>
          <IntroInfoTextContainer>
            <TitleXL>
              Encontre o café perfeito para qualquer hora do dia
            </TitleXL>
            <TextL>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </TextL>
          </IntroInfoTextContainer>
          <IntroInfoQualitiesContainer>
            <Quality
              icon={<ShoppingCart weight="fill" />}
              color={defaultTheme.yellowDark}
            >
              Compra simples e segura
            </Quality>
            <Quality
              icon={<Package weight="fill" />}
              color={defaultTheme.baseText}
            >
              Embalagem mantém o café intacto
            </Quality>
            <Quality icon={<Clock weight="fill" />} color={defaultTheme.yellow}>
              Entrega rápida e rastreada
            </Quality>
            <Quality
              icon={<Coffee weight="fill" />}
              color={defaultTheme.purple}
            >
              O café chega fresquinho até você
            </Quality>
          </IntroInfoQualitiesContainer>
        </IntroInfoContainer>
        <IntroImage src="/intro-image.png" alt="coffee image" />
      </IntroContainer>

      <CoffeeListContainer>
        <TitleL>Nossos cafés</TitleL>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.id}
              name={coffee.name}
              description={coffee.description}
              img={'/coffees/' + coffee.photo}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
