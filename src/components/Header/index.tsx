import logoImg from '../../assets/logo.png';
import { Container, Content } from './styles';

export function Header() {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="MRV" />
        <button type="button">
          Nova lead
        </button>
      </Content>
    </Container>
  )
}
