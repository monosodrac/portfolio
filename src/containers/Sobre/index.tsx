import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={'16'}>Sobre mim</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero obcaecati,
      dolor, vitae eveniet nam corporis totam veritatis iusto ad dicta expedita
      pariatur nulla commodi aperiam aliquam, aspernatur quae necessitatibus
      quaerat?
    </Paragrafo>
    <GithubSecao>
      <img src="https://github-readme-stats.vercel.app/api?username=monosodrac&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=monosodrac&layout=compact&langs_count=7&size_weight=.2&count_weight=.8&theme=dracula" />
    </GithubSecao>
  </section>
)

export default Sobre
