import React, { FC } from "react";
import Card from "./Card";
import { TodoProps } from "../props";

interface CardContainerProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const CardContainer: FC<CardContainerProps> = ({ todos, setTodos }) => {
  return (
    <div className="relative min-h-[100vh] flex items-center flex-col p-[20px]">
      {todos.map((todo) => (
        <Card key={todo.id} todo={todo} setTodos={setTodos} />
      ))}
    </div>
  );
};

export default CardContainer;
