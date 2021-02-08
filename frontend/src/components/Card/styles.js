import styled from 'styled-components';

export const Container = styled.div `
  width: 100%;
  position: relative;
  background: #FFF;
  border-radius: 5px;
  margin: 15px 0 ;
  box-shadow: 0 1px 4px 0 rgba(192, 208, 230, 0.8);
  border-top: 20px solid rgba(230, 236, 245, 0.4);

  p {
    padding: 15px;
  }

  h4, .inline {
    display:inline-flex;
  }

  .edit{
    height: 12%;
    width:10%;
    margin: 1rem 0;
    position: absolute;
    left: 70%;
  }
  
  .right{
    height: 12%;
    width:10%;
    margin: 1rem 0;
    position: absolute;
    left: 85%;
  }

`;