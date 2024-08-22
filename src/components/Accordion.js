import { useState } from "react";
import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  const [curOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faqData, index) => (
        <AccordionItem
          number={index + 1}
          question={faqData.question}
          answer={faqData.answer}
          curOpen={curOpen}
          onOpen={setIsOpen}
          key={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
