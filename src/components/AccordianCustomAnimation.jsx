import { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`text-green ${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

function AccordionCustomAnimation({ items }) {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <div className="w-[590px] mt-10 ml-10 px-10">
      {items.map((item, index) => (
        <Accordion
          className="border-b border-b-gray_line"
          key={index}
          open={open === index + 1}
          animate={CUSTOM_ANIMATION}
          icon={<Icon id={index + 1} open={open} />}
        >
          <AccordionHeader onClick={() => handleOpen(index + 1)}>
            <h1 className="font-poppins font-semibold text-gray_text text-xl">
              {item.title}
            </h1>
          </AccordionHeader>
          <AccordionBody>
            <p className="text-xl font-avenir">{item.content}</p>
          </AccordionBody>
        </Accordion>
      ))}
    </div>
  );
}

export default AccordionCustomAnimation;
