import { GlobalStyles } from './styles/globalstyles';
import {
  Container, 
  Header, 
  Logo, 
  Main, 
  FirstTitle, 
  SecondTitle, 
  Subtitle, 
  AstrounautIllustration, 
  DivButton,
  DivIcons,
} from './styles/styles'
import Button from './components/Button';
import pixelToRem from './utils/pxToRem';
import Icon from './components/Icon';

function App() {
  return (
    <>
      <Container flex='column' margin={pixelToRem(24, 112, 50)}>
        <GlobalStyles/>
        <Header>
          <Logo >
            <img src="/assets/logo.svg" alt="" />
          </Logo>
        </Header>
        <Main>
          <FirstTitle>Finalmente é possível!</FirstTitle>
          <SecondTitle>Sua jornada para Marte começa aqui<span>.</span></SecondTitle>
          <Subtitle>A primeira viagem para Marte estará disponivél apartir do dia 12/03/2028. Inscreva-se em nossa lista de espera. </Subtitle>
          <AstrounautIllustration />

          <DivButton>
          <Button text="Inscreva-se agora" fullWidth />
          </DivButton>
        </Main> 

        <DivIcons
          whileInView="visible"
          initial="initial"
          viewport={{ once: true }}
          variants={{
            initial: { opacity: 0, y: 10 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { duration: 1, delay: 0.3 },
            },
          }}
        >
          <Icon src="../assets/icon-rocket.svg" txt="Foguetes com a mais alta tecnologia e conforto." alt="Rocket" />

          <Icon src="../assets/icon-flag.svg" txt="Mais de 100 missões consecutivas com sucesso." alt="Flag" />

          <Icon src="../assets/icon-telescope.svg" txt="Experiencia única e exclusiva." alt="Telescope" />
        </DivIcons>
      </Container>
        
      </>
  )
}

export default App
