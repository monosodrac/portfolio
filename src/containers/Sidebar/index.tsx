import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={'20'}>Mono Cardoso</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        monosodrac
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full-Stack Python - EBAC | Técnico em Informática para
        Internet - SENAC
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
