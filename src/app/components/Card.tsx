import ToDoInput from "./Common/ToDoInput";

function Card() {
  return (
    <div className="w-[320px] min-h-[180px] bg-[#fef08a] my-[10px] rounded-[5px]">
      <div className="w-[100%] relative my-[10px] flex justify-end px-[20px] py-[10px] gap-[10px]">
        <button className="w-[40px] h-[40px] bg-white rounded-full">X </button>
        <button className="w-[40px] h-[40px] bg-blue-600 rounded-full"></button>
      </div>
      <div className="relative flex gap-[10px] px-[10px]">
        <ToDoInput />
      </div>
      <div>
        <div className="relative flex justify-between items-center px-[10px] m-[10px]">
          <input type="checkbox" />
          <p>Label</p>
          <button>X</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
