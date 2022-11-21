import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;

  button {
    margin-top: 24px;
    background: #fff;
    border: 1px solid rgba(204, 204, 204, .4);
    border-radius: 8px;
    height: 128px;
    width: 100%;
  /*
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  */
    display: grid;
    place-content: center;
  }

`