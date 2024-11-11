import { GoArrowRight } from "react-icons/go";

function ArrowButton({ content, color, textColor }) {
  return (
    <button
      className={`flex items-center justify-between border-2 xxl:w-[25rem] xxl:h-[5rem] xl:w-[19rem] xl:h-[3.7rem] lg:w-[15rem] lg:h-[3rem]`}
      style={{
        borderColor: color,
      }}
    >
      <div
        className="flex-1 font-avenir font-extrabold xxl:text-2xl text-xl"
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
