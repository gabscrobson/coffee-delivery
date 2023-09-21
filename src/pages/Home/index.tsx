import { defaultTheme } from '../../styles/themes/default'
import { TextL, TitleL, TitleXL } from '../../styles/typography'
import { CoffeeCard } from './CoffeeCard'
import { Quality } from '../../components/Quality'
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
              <TextL>Compra simples e segura</TextL>
            </Quality>
            <Quality
              icon={<Package weight="fill" />}
              color={defaultTheme.baseText}
            >
              <TextL>Embalagem mantém o café intacto</TextL>
            </Quality>
            <Quality icon={<Clock weight="fill" />} color={defaultTheme.yellow}>
              <TextL>Entrega rápida e rastreada</TextL>
            </Quality>
            <Quality
              icon={<Coffee weight="fill" />}
              color={defaultTheme.purple}
            >
              <TextL>O café chega fresquinho até você</TextL>
            </Quality>
          </IntroInfoQualitiesContainer>
        </IntroInfoContainer>
        <IntroImage src="/intro-image.png" alt="coffee image" />
      </IntroContainer>

      <CoffeeListContainer>
        <TitleL>Nossos cafés</TitleL>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard key={coffee.id} coffee={coffee} />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
