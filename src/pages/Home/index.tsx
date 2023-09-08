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

const coffees = [
  {
    name: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: '/src/assets/coffees/expresso.svg',
    price: 9.9,
    tags: ['tradicional'],
  },
  {
    name: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: '/src/assets/coffees/americano.svg',
    price: 11,
    tags: ['tradicional'],
  },
  {
    name: 'Expresso Cremoso',
    description: 'Expresso com um pouco de leite vaporizado',
    img: '/src/assets/coffees/cremoso.svg',
    price: 12,
    tags: ['tradicional'],
  },
  {
    name: 'Expresso Gelado',
    description: 'Expresso com gelo e um pouco de leite vaporizado',
    img: '/src/assets/coffees/gelado.svg',
    price: 12,
    tags: ['tradicional', 'gelado'],
  },
  {
    name: 'Café com Leite',
    description: 'Café com leite vaporizado',
    img: '/src/assets/coffees/com-leite.svg',
    price: 12,
    tags: ['tradicional', 'com leite'],
  },
  {
    name: 'Latte',
    description: 'Café com leite vaporizado e espuma de leite',
    img: '/src/assets/coffees/latte.svg',
    price: 12,
    tags: ['tradicional', 'com leite'],
  },
]

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
        <IntroImage src="/src/assets/intro-image.png" alt="coffee image" />
      </IntroContainer>

      <CoffeeListContainer>
        <TitleL>Nossos cafés</TitleL>
        <CoffeeList>
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee.name}
              name={coffee.name}
              description={coffee.description}
              img={coffee.img}
              price={coffee.price}
              tags={coffee.tags}
            />
          ))}
        </CoffeeList>
      </CoffeeListContainer>
    </HomeContainer>
  )
}
