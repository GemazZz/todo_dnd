import React, { FC, useEffect } from "react";
import Card from "./Card";
import { TodoProps } from "../props";
import { Reorder } from "framer-motion";

interface CardContainerProps {
  todos: TodoProps[];
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const CardContainer: FC<CardContainerProps> = ({ todos, setTodos }) => {
  useEffect(() => {
    if (todos.length !== 0) {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <div className="relative min-h-[100vh] flex items-center flex-col p-[20px]">
      <Reorder.Group axis="y" values={todos} onReorder={setTodos}>
        {todos.map((todo) => (
          <Reorder.Item key={todo.id} value={todo}>
            <Card todo={todo} setTodos={setTodos} />
          </Reorder.Item>
        ))}
      </Reorder.Group>
    </div>
  );
};

export default CardContainer;
