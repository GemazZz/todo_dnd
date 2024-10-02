import React from "react";
import ToDoInput from "./Common/ToDoInput";
import download from "../icons/download-solid.svg";
import X from "../icons/x-solid.svg";
import Image from "next/image";
import { CardProps } from "../props";

const Card: React.FC<CardProps> = ({ todo, setTodos }) => {
  const toggleTodo = (contentId: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((t) =>
        t.id === todo.id
          ? {
              ...t,
              content: t.content.map((c) => (c.id === contentId ? { ...c, checked: !c.checked } : c)),
            }
          : t
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const deleteTodo = (contentId: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((t) =>
        t.id === todo.id
          ? {
              ...t,
              content: t.content.filter((c) => c.id !== contentId),
            }
          : t
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const deleteContainer = () => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((t) => t.id !== todo.id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const downloadTextFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: "text/plain" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    window.URL.revokeObjectURL(url);
  };

  const downloadText: string[] = [];
  todo.content.map((c) => {
    downloadText.push(c.todo);
  });

  return (
    <div className="w-[320px] min-h-[180px] my-[10px] rounded-[5px]" style={{ background: todo.color }}>
      <div className="w-[100%] relative my-[10px] flex justify-end px-[20px] py-[10px] gap-[10px]">
        <button className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center" onClick={deleteContainer}>
          <Image src={X} alt="x" width={20} />
        </button>
        <button
          className="w-[40px] h-[40px] bg-blue-600 rounded-full flex justify-center items-center"
          onClick={() => {
            console.log(todo.content);
            downloadTextFile(downloadText.toString(), "Todos.txt");
          }}
        >
          <Image src={download} alt="download" width={20} />
        </button>
      </div>
      <div className="relative flex gap-[10px] px-[10px]">
        <ToDoInput id={todo.id} setTodos={setTodos} />
      </div>
      <div>
        {todo.content.map((singleTodo) => (
          <div key={singleTodo.id} className="relative flex justify-between items-center px-[10px] m-[10px]">
            <input type="checkbox" checked={singleTodo.checked} onChange={() => toggleTodo(singleTodo.id)} />
            <p className={`${singleTodo.checked ? "line-through" : ""}`}>{singleTodo.todo}</p>
            <button onClick={() => deleteTodo(singleTodo.id)}>
              <Image src={X} alt="X" width={13} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
