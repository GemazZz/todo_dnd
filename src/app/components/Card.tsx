import ToDoInput from "./Common/ToDoInput";
import download from "../icons/download-solid.svg";
import X from "../icons/x-solid.svg";
import Image from "next/image";

interface CardProps {
  color: string;
}

const Card: React.FC<CardProps> = ({ color }) => {
  return (
    <div className={`w-[320px] min-h-[180px] bg-[${color}] my-[10px] rounded-[5px]`}>
      <div className="w-[100%] relative my-[10px] flex justify-end px-[20px] py-[10px] gap-[10px]">
        <button className="w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center">
          <Image src={X} alt="x" width={20} />
        </button>
        <button className="w-[40px] h-[40px] bg-blue-600 rounded-full flex justify-center items-center">
          <Image src={download} alt="download" width={20} />
        </button>
      </div>
      <div className="relative flex gap-[10px] px-[10px]">
        <ToDoInput />
      </div>
      <div>
        <div className="relative flex justify-between items-center px-[10px] m-[10px]">
          <input type="checkbox" />
          <p>Labeasdl</p>
          <button>X</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
