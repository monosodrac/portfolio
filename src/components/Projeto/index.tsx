import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Projects } from '../../assets'

import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <>
    {Projects.map((item) => (
      <Card key={item.id}>
        <Titulo>{item.titulo}</Titulo>
        <Paragrafo tipo="secundario">{item.paragrafo}</Paragrafo>
        <LinkBotao href={item.link} target="blank">
          Visualizar
        </LinkBotao>
      </Card>
    ))}
    {/* <Card>
    <Titulo>Projeto Lista de Tarefas</Titulo>
    <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card > */}
  </>
)

export default Projeto
