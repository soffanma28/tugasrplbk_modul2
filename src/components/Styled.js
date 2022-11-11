import styled from 'styled-components';

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  
  #textInput {
    border: 1px solid #F5F8FA;
    padding: 6px 10px;
    background : #F5F8FA;
    color : #5E6278;
  }
  
  .container {
    display: flex;
    flex-direction: column;
    align-items: start;
  }
  
  .error {
    color: white;
    background: red;
    text-align: start;
    border: 1px solid #F5F8FA;
    margin-top: 20px
  }
  
  .card {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-top: 20px;
    border: 1px solid #F5F8FA;
    padding: 10px;
    background: #F5F8FA;
  }
  p {
    font-family: 'Roboto';
    font-size:1.1 rem;
    color : #5E6278;
  }
  h5 {
    font-size: 0.8rem;
  }
 .kelompok {
    margin: 15px 0 15px 0;
    text-align: start;
    border: 1px solid #F5F8FA;
    padding: 10px;
  }
`;