import styled from 'styled-components'

export const Header = styled.header`
  background-color: #d73035;
  display: flex;
  height: 198px;
`

export const Content = styled.div`
  width: 100%;
  max-width: 1290px;
  padding: 0 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .page-details {
    h1 {
      color: #fff;
      font-size: 32px;
    }

    h2 {
      color: #fff;
      font-weight: 400;
      font-size: 16px;
      opacity: .9;
      margin-top: 6px;
    }
  }
`