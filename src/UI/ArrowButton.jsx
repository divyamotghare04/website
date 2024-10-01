import { GoArrowRight } from "react-icons/go";

function ArrowButton({ content, color, textColor }) {
  return (
    <button
      className={`flex items-center justify-between border-2 w-[290px] h-[58px]`}
      style={{
        borderColor: color,
      }}
    >
      <div
        className="flex-1 font-avenir font-extrabold text-xl"
        style={{
          color: color,
        }}
      >
        <p>{content}</p>
      </div>
      <div
        className="w-[60px] h-full flex items-center justify-center"
        style={{
          backgroundColor: color,
          color: textColor,
        }}
      >
        <GoArrowRight size={24} />
      </div>
    </button>
  );
}

export default ArrowButton;
