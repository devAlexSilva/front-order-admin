import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 8px;
  margin: 40px auto;
  display: flex;
  gap: 32px;

  section {
  flex: 1;
  border: 1px solid rgba(204, 204, 204, .4);
  padding: 16px;
  margin-bottom: 28px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;

  header {
    padding: 8px;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 8px;

    strong {
      font-weight: 600;
    }

    span {
      font-size: 14px;
      color: #666;
    }
  }
  }
`