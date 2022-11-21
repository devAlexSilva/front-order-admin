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
          <Cards table='5' quantity={2}/>
          <Cards table='3' quantity={4}/>
          <Cards table='6' quantity={2}/>
        </section>
        <section className='kanban-production'>
          <header>
            <span>👩‍🍳</span>
            <strong>Em Produção</strong>
            <span>(1)</span>
          </header>
          <Cards table='2' quantity={1}/>
          <Cards table='4' quantity={2}/>
        </section>
        <section className='kanban-ready'>
          <header>
            <span>🍽️</span>
            <strong>Pronto</strong>
            <span>(1)</span>
          </header>
          <Cards table='1' quantity={6}/>
        </section>
      </S.Container>
    </>
  )
}