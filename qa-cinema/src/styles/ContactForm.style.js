import styled from "styled-components"; 
export const StyledContactForm = styled.div`
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  border-radius: 20px;
  padding: 5px;
  margin-top: 60px;
  .info {
    background: rgb(42, 139, 223);
    background: linear-gradient(
      90deg,
      rgba(42, 139, 223, 1) 0%,
      rgba(148, 187, 233, 1) 100%
    );
    padding: 30px;
    width: 45%;
    border-radius: 20px;
    h3 {
      font-weight: 500;
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
    padding: 60px;
    width: 100%;
    h3 {
      opacity: 0.7;
      margin-bottom: 30px;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      label {
        font-size: 0.9rem;
        input,
        textarea {
          margin-top: 10px;
          display: block;
          width: 100%;
          height: 35px;
          border-radius: 5px;
          border: none;
          color: ${({ theme }) => theme.colors.white};
          background-color: ${({ theme }) => theme.colors.grey};
          padding: 5px;
          font-family: 'Poppins';
        }
      }
    }
    button {
      margin-top: 30px;
      padding: 8px 15px;
      background-color: ${({ theme }) => theme.colors.blue};
      border: none;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.white};
      border-radius: 5px;
      cursor: pointer;
      &:hover {
        opacity: 0.7;
      }
    }
  }
`;

