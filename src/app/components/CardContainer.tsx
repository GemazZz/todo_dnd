import { FC } from "react";
import Card from "./Card";
import { TodoProps } from "../props";

interface CardContainerProps {
  todos: TodoProps[];
}

const CardContainer: FC<CardContainerProps> = ({ todos }) => {
  return (
    <div className="relative min-h-[100vh] flex items-center flex-col p-[20px]">
      {todos.map((todo, index) => (
        <Card key={index} color={todo.color} />
      ))}
    </div>
  );
};

export default CardContainer;
