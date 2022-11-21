import * as S from './styles'

type props = {
  quantity: number,
  table: string,
  }

export const Cards = ({table, quantity}: props) => {
  return (
    <>
      <S.Container>
        <button type='button'>
          <strong>Mesa {table}</strong>
          <span>{quantity} itens</span>
        </button>
      </S.Container>
    </>
  )
}