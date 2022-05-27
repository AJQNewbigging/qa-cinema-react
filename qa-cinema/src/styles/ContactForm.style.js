import styled from "styled-components"; 
export const StyledContactForm = styled.div`
  display: flex;
  border-radius: 20px;
  padding: 5px;
  margin-top: 60px;
  .info {
    font-weight: bold;
    border-style: solid;
    border-width: 10px;
    border-color: white;
    margin-bottom: 30px;
    background: rgb(230, 238, 255); 
    background: linear-gradient(
      90deg,
      rgba(230, 208, 12, 1) 0%,
      rgba(258, 217, 12, 1) 100%
    );
    padding: 30px;
    width: 45%;
    border-radius: 20px;
    
    h3 {
      font-weight: bold;
      margin-bottom: 30px;
    }
    .contact {
      display: flex;
      align-items: center;
      gap: 20px;
      margin-bottom: 20px;
      span {
        font-size: 0.8rem;
        p {
          font-size: 1rem;
        }
      }
    }
  }
  form {




    background-color: #DAA520;
    border-style: solid;
    border-width: 7px;
    border-radius: 5px;
    border-color: white;
    padding: 90px;
    margin: 25px 50px 75px;
    width: 100%;
    h3 {
      font-size: xx-large;
      font-family: 'Ubuntu', sans-serif;
      color: white;
      margin-top: 20px;
      opacity: 3.7;
      margin-bottom: 30px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      label {
        font-size: 0.9rem;
        color: White;
        input,
        textarea {
          margin-top: 10px;
          display: block;
          width: 100%;
          height: 35px;
          border-radius: 5px;
          border: none;
          padding: 5px;
          font-family: 'Poppins';
        }
      }
    }
    button {
      margin-top: 30px;
      padding: 8px 15px;
      border: none;
      font-size: 1rem;
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

