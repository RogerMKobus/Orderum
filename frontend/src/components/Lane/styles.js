import styled from "styled-components";

export const Container = styled.div `
  display: flex;
  padding: 0 15px;
  height: 100%;
  width: 100%;
  
  .space{
    justify-content: space-between;
    border-left: 1px solid rgba(0, 0, 0, 0.05);
    width: 25%;
    padding: 0 15px;
    font-size:18px;
  }

  h2 {
      font-weight: bold;
      font-size: 25px;
      padding: 10px;
    }
`;