import styled from "styled-components";

const TodoMainWrapper = styled.div`
  padding: 2rem;
  margin: 3rem 10rem;
  border: 0.5rem solid yellow;
  border-radius: 5rem;
  height: 40rem;
`;

const Header = styled.header`
  text-align: center;
`;

const Quote = styled.div`
  font-style: italic;
  margin-top: 20px;
  display: flex;
  justify-content: center;
  p {
    font-size: 1.3rem;
  }
`;

const TodoBox = styled.div`
  width: 80%;
  margin: 20px auto;
  border: 1px solid black;
  padding: 20px;
`;

export { TodoMainWrapper, Header, Quote, TodoBox };
