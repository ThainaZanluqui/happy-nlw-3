import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    display: flex;
    align-items: stretch;

`;

export const Content  = styled.div`
  display: flex;
  flex-direction: column;


  place-content: center;

  width: 100%;
  max-width: 500px;

  background: #FFFFFF;

  border: 1px solid #d3e2e5;
  box-sizing: border-box;

  padding: 64px 80px;

  .back {
    position: absolute;
    left: 93.68%;
    right: 2.99%;
    top: 4.88%;
    bottom: 89.27%;

    background: #ebf2f5;
    border-radius: 16px;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: background-color 0.2s;
  }

  .back:hover {
    background-color: #D3E2E5;
  }

  form {
    margin: 80px 0;
    width: 340px;

    h1 {
      border: 0;

      width: 100%;

      font-size: 36px;
      color: #5C8599;
      font-weight: 700;

      margin-bottom: 40px;
    }

    input {
      margin-top: 24px;

      width: 100%;
      height: 64px;
      padding: 0 16px;
      background: #F5F8FA;
      
      border-radius: 20px;
      outline: none;
      
      border: 1px solid #D3E2E5;
      color: #5C8599;

      display: flex;
      flex-direction: row;
      justify-content: space-between;

      &::placeholder {
        color: #8FA7B2;
      }
    }

    .changePass {
      text-decoration: none;
      display: block;
      color: #8FA7B3;

      margin-top: 30px;

      transition: color 0.2s;

    }

    .changePass:hover {
      color: #5C8599;
    }

    button {
      margin-top: 30px;

      width: 100%;
      height: 64px;
      border: 0;
      cursor: pointer;
      background: #3CDC8C;
      border-radius: 20px;
      color: #FFFFFF;
      font-weight: 800;

      display: flex;
      justify-content: center;
      align-items: center;

      transition: background-color 0.2s;
    }

    button:hover {
      background: #36CF82;
    }

    button:disabled, button:disabled:hover {
      cursor: default;
      background: #6BE3BF;
    }
  }

`
export const Background = styled.div`
  display: flex;
  flex-direction: column;

  place-content: center;

  flex: 1;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
  background-size: cover;

  img {
    padding-bottom: 100px;
  }

  strong, span {

    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: 24px;
    line-height: 34px;
    font-weight: 800;
  }

`

