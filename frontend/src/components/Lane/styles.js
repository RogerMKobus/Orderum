import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  padding: 0 15px;
  height: 100%;
  flex: 0 0 320px;

  .space{
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    margin: 0 50px;
    padding: 0 15px;
    flex: 0 0 320px;
    font-size:18px;
  }

  h2 {
      font-weight: bold;
      font-size: 25px;
      padding: 10px;
    }
`;