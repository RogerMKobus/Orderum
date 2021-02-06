import styled from 'styled-components';

export const Container = styled.div `
  flex: 0 0 500px;
  text-align: center;
  width: 100%;
  position: absolute;
  
  h1{
    margin: 10px;
    font-size: 50px;
  }

  label{
    font-size:20px;
    font-weight:bold;
  }

  input{
    width: 40%;
    height: 35px;
    display:block;
    font-size:20px;
    margin: 10px auto;
    padding-left: 5px;
    border: 1px solid #b8b8b8;
    border-radius: 5px;
  }

  .buttonClass{
    margin: 20px;
    width: 150px;
    height: 50px;
    font-weight: bold;
  }

  .date{
    text-align: center;
    width: 100%;
    height: 35px;
    font-size:20px;
    margin: 10px auto;
    padding-left: 5px;
  }

  .select{
    height: 40px;
    overflow: unset;
    caret-color: transparent;
    width: 40%;
    font-size:20px;
    margin: 10px auto;
    padding-left: 5px;
  }

  .Select__value-container { height: 40px; }
`;