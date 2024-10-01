"use client";

import { useEffect, useState } from "react";
import Card from "./Card";

interface TodoProps {
  color: string;
}

const CardContainer: React.FC = () => {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    const todos = localStorage.getItem("todos");
    const parsedTodos = todos ? JSON.parse(todos) : [];
    setTodos(parsedTodos);
  }, []);

  return (
    <div className="relative min-h-[100vh] flex items-center flex-col p-[20px]">
      {todos.map((todo, index) => (
        <Card key={index} color={todo.color} />
      ))}
    </div>
  );
};

export default CardContainer;
