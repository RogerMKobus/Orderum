import styled from 'styled-components';

export const Container = styled.div `
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
    padding-top: 2rem;
    position: absolute;
    display:inline-block;
    left: 210px;
  }
  
  .right{
    padding-top: 2rem;
    position: absolute;
    display:inline-block;
    left: 250px;
  }

`;