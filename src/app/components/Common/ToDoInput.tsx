"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ToDoInput() {
  const [todo, setTodo] = useState<string>("");
  const notify = () => {
    if (todo === "") {
      toast.error("Type something !!!");
    } else {
      toast.success("Note succesfully added!!!");
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
}

export default ToDoInput;
