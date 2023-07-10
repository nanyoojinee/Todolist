import React, { useState } from "react";
import {
  TodoMainWrapper,
  Header,
  Quote,
  TodoBox,
  TodayDate,
} from "../styles/TodoMain";
import TodoForm from "./TodoForm";

function TodoMain() {
  const [tasks, setTasks] = useState([]); // 할 일 항목들을 저장하는 배열

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
        <TodayDate>Today's Date: {new Date().toLocaleDateString()}</TodayDate>
        <TodoForm tasks={tasks} setTasks={setTasks} />
      </TodoBox>
    </TodoMainWrapper>
  );
}

export default TodoMain;
