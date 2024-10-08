import { useState } from "react";
import { blue, green, pink, yellow } from "../helpers";
import { AddBtnProps } from "../props";

const AddBtn: React.FC<AddBtnProps> = ({ todos, setTodos }) => {
  const [popUp, setPopUp] = useState<boolean>(false);

  const addLocalStorage = (color: string) => {
    const newTodo = { color, id: new Date().getTime(), content: [] };
    const newTodos = [...todos, newTodo];

    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  return (
    <div className="w-[50px] h-[300px] fixed bottom-[25px] right-[25px] flex flex-col items-center z-20">
      {popUp && (
        <div className="flex flex-col gap-[10px]">
          <button
            className="w-[50px] h-[50px] rounded-full"
            style={{ backgroundColor: yellow }}
            onClick={() => addLocalStorage(yellow)}
          ></button>
          <button className="w-[50px] h-[50px] rounded-full" style={{ backgroundColor: green }} onClick={() => addLocalStorage(green)}></button>
          <button className="w-[50px] h-[50px] rounded-full" style={{ backgroundColor: blue }} onClick={() => addLocalStorage(blue)}></button>
          <button className="w-[50px] h-[50px] rounded-full" style={{ backgroundColor: pink }} onClick={() => addLocalStorage(pink)}></button>
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
};

export default AddBtn;
