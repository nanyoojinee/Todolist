import styled from "styled-components";

const TodoMainWrapper = styled.div`
  padding: 2rem;
  padding-bottom: 5rem;
  margin: 3rem 10rem;
  margin-bottom: 15rem;
  border: 0.5rem solid yellow;
  border-radius: 5rem;
  height: auto;
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
  margin: 2rem auto;
  padding: 2rem;
  padding-bottom: 4rem;
  background-color: #ffffe0; /* 연한 흰색에 가까운 노란색 */
  border-radius: 1rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
`;

const TodayDate = styled.div`
  margin-bottom: 2rem;
  display: flex;
  justify-content: center;
  font-size: 1.3rem;
`;
export { TodoMainWrapper, Header, Quote, TodoBox, TodayDate };
