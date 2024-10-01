"use client";
import { useState } from "react";

function AddBtn() {
  const [popUp, setPopUp] = useState<boolean>(false);

  return (
    <div className="w-[50px] h-[300px] fixed bottom-[25px] right-[25px] flex flex-col items-center z-20 ">
      {popUp && (
        <div className="flex flex-col gap-[10px]">
          <button className="w-[50px] h-[50px] bg-[#fef08a] rounded-full"> </button>
          <button className="w-[50px] h-[50px] bg-[#bbf7d0] rounded-full"></button>
          <button className="w-[50px] h-[50px] bg-[#bfdbfe] rounded-full"></button>
          <button className="w-[50px] h-[50px] bg-[#fecaca] rounded-full  "></button>
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
