import { FiMinus, FiPlus } from "react-icons/fi";

function Accordian({ title, children, isOpen, handleToggle }) {
  return (
    <div className="w-[300px] p-2 pl-10 border-b-2">
      <div className="flex justify-between text-gray-800 font-semibold">
        <h3>{title}</h3>
        <button onClick={handleToggle}>
          {isOpen ? <FiMinus /> : <FiPlus />}
        </button>
      </div>
      {isOpen && <p className="text-gray  text-sm">{children}</p>}
    </div>
  );
}

export default Accordian;
