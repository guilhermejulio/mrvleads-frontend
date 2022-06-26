import logoImg from '../../assets/logo.png';
import { Container, Content } from './styles';

interface HeaderProps {
  onOpenNewInviteModal: () => void;
}

export function Header({ onOpenNewInviteModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="MRV" />
        <button type="button" onClick={onOpenNewInviteModal}>
          New invite
        </button>
      </Content>
    </Container>
  )
}
