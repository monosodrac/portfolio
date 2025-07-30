import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'

import { LinhaLista } from './styles'

const Projetos = () => (
  <section>
    <Titulo fontSize={'16'}>Projetos</Titulo>
    <ul>
      <LinhaLista>
        <Projeto />
      </LinhaLista>
    </ul>
  </section>
)

export default Projetos
