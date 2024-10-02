"use client";

import { useEffect, useState } from "react";
import AddBtn from "./components/AddBtn";
import CardContainer from "./components/CardContainer";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { TodoProps } from "./props";

export default function Home() {
  const [todos, setTodos] = useState<TodoProps[]>([]);

  useEffect(() => {
    const todosFromLocalStorage = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(todosFromLocalStorage);
  }, []);

  return (
    <div className="min-h-[120vh] relative flex flex-col justify-between">
      <Header />
      <AddBtn todos={todos} setTodos={setTodos} />
      <CardContainer todos={todos} setTodos={setTodos} />
      <Footer />
    </div>
  );
}
