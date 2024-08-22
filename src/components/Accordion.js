import AccordionItem from "./AccordionItem";

function Accordion({ data }) {
  return (
    <div className="accordion">
      {data.map((faqData, index) => (
        <AccordionItem
          number={index + 1}
          question={faqData.question}
          answer={faqData.answer}
          key={index}
        />
      ))}
    </div>
  );
}

export default Accordion;
