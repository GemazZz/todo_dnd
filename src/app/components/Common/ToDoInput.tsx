"use client";

import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TodoProps } from "@/app/props";

interface ToDoInputProps {
  id: number;
  setTodos: React.Dispatch<React.SetStateAction<TodoProps[]>>;
}

const ToDoInput: React.FC<ToDoInputProps> = ({ id, setTodos }) => {
  const [todo, setTodo] = useState<string>("");

  const notify = () => {
    if (todo === "") {
      toast.error("Type something !!!");
    } else {
      const newContent = { id: new Date().getTime(), todo, checked: false };
      setTodos((prevTodos) => {
        const updatedTodos = prevTodos.map((t) => (t.id === id ? { ...t, content: [...t.content, newContent] } : t));
        localStorage.setItem("todos", JSON.stringify(updatedTodos));
        return updatedTodos;
      });
      toast.success("Note successfully added!!!");
      setTodo("");
    }
  };

  return (
    <>
      <input
        type="text"
        placeholder="Type task"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        className="w-[190px] p-[10px] ml-[10px] h-[40px] rounded-[7px]"
      />
      <button className="w-[80px] h-[40px] bg-green-600 rounded-[7px] text-white" onClick={notify}>
        Add
      </button>
      <ToastContainer position="bottom-left" />
    </>
  );
};

export default ToDoInput;
