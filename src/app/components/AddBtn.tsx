"use client";
import { useState } from "react";
import { blue, green, pink, yellow } from "./helpers";

function AddBtn() {
  const [popUp, setPopUp] = useState<boolean>(false);
  const addLocalStorage = (color: string) => {
    const todos: string | null = localStorage.getItem("todos");
    if (todos) {
      const parsedTodos: object[] = JSON.parse(todos);
      const newTodos = [...parsedTodos, { color }];
      localStorage.setItem("todos", JSON.stringify(newTodos));
    } else {
      const newTodos = [{ color }];
      localStorage.setItem("todos", JSON.stringify(newTodos));
    }
  };

  return (
    <div className="w-[50px] h-[300px] fixed bottom-[25px] right-[25px] flex flex-col items-center z-20 ">
      {popUp && (
        <div className="flex flex-col gap-[10px]">
          <button className={`w-[50px] h-[50px] bg-[${yellow}] rounded-full`} onClick={() => addLocalStorage(yellow)}></button>
          <button className={`w-[50px] h-[50px] bg-[${green}] rounded-full`} onClick={() => addLocalStorage(green)}></button>
          <button className={`w-[50px] h-[50px] bg-[${blue}] rounded-full`} onClick={() => addLocalStorage(blue)}></button>
          <button className={`w-[50px] h-[50px] bg-[${pink}] rounded-full`} onClick={() => addLocalStorage(pink)}></button>
        </div>
      )}
      <button
        className="w-[50px] h-[50px] absolute bottom-0 bg-[#202c34] m-[10px] rounded-full flex justify-center items-center"
        onClick={() => setPopUp(!popUp)}
      >
        <p className="text-white text-[24px]">+</p>
      </button>
    </div>
  );
}

export default AddBtn;
