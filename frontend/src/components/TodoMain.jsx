import React from "react";
import { TodoMainWrapper, Header, Quote, TodoBox } from "../styles/TodoMain";

function TodoMain() {
  return (
    <TodoMainWrapper>
      <Header>
        <h1 style={{ color: "#6b6114" }}>Todo List</h1>
        <p style={{ fontSize: "3rem", margin: "-1rem" }}>☀️</p>
      </Header>
      <Quote>
        <p style={{ color: "#888" }}>
          "But I know, somehow, that only when it is dark enough can you see the
          stars." <br /> – Martin Luther King, Jr -
        </p>
      </Quote>
      <TodoBox>
        <div>Today's Date: {new Date().toLocaleDateString()}</div>
        <div>
          <input type="checkbox" id="task1" />
          <label htmlFor="task1">Task 1</label>
        </div>
        <div>
          <input type="checkbox" id="task2" />
          <label htmlFor="task2">Task 2</label>
        </div>
        <div>
          <input type="checkbox" id="task3" />
          <label htmlFor="task3">Task 3</label>
        </div>
      </TodoBox>
    </TodoMainWrapper>
  );
}

export default TodoMain;
