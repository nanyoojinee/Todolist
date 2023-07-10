import styled from "styled-components";

const TaskContainer = styled.div`
  margin: 0.5rem;
`;

const TaskWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Checkbox = styled.input`
  margin-right: 2rem;
  width: 1rem;
  height: 1rem;
  appearance: none;
  border: 2px solid #6b6114;
  border-radius: 50%;
  outline: none;
  cursor: pointer;

  &:checked {
    background-color: #6b6114;
  }
`;

const TaskLabel = styled.label`
  text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
  font-style: ${(props) => (props.completed ? "italic" : "normal")};
`;

const DeleteButton = styled.button`
  margin-left: 1rem;
  background-color: #87ceeb;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #5f9ea0;
  }
`;

const AddTask = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 7rem;
  padding-right: 0.9rem;
`;
const AddButton = styled.button`
  margin-left: 1rem;
  background-color: limegreen;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: darkgreen;
  }
`;

export {
  TaskContainer,
  TaskWrapper,
  Checkbox,
  TaskLabel,
  DeleteButton,
  AddButton,
  AddTask,
};
