import { useState } from "react";
import Accordian from "./Accordian";

function AccordianList({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="border border-gray_text rounded-md">
      {items.map((item, index) => (
        <Accordian
          key={index}
          title={item.title}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        >
          {item.content}
        </Accordian>
      ))}
    </div>
  );
}

export default AccordianList;
