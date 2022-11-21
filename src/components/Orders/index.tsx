import { Cards } from '../Cards'
import * as S from './styles'

export const Orders = () => {
  return (
    <>
      <S.Container>
        <section className='kanban-wait'>
          <header>
            <span>⏳</span>
            <strong>Fila de Espera</strong>
            <span>(1)</span>
          </header>
          <Cards />
          <Cards />
          <Cards />
        </section>
        <section className='kanban-production'>
          <header>
            <span>⏳</span>
            <strong>Em Produção</strong>
            <span>(1)</span>
          </header>
          <Cards />
          <Cards />
        </section>
        <section className='kanban-ready'>
          <header>
            <span>⏳</span>
            <strong>Pronto</strong>
            <span>(1)</span>
          </header>
          <Cards />
        </section>
      </S.Container>
    </>
  )
}