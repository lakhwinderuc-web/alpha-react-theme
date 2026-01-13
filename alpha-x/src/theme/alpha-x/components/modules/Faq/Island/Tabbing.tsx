import { useState } from 'react';
const Tabbing = ({items}) => {
  return (
      <div className="faq-accordion__list">
      {items.map((item, i) => (
        <AccordianItem key={i} item={item} />
      ))}
    </div>
  )
}

function AccordianItem({ item }) {
  const [open, setOpen] = useState(false);

  // Safely extract question and answer with fallbacks
  const question = item?.questionGroup?.question || "<h4>Default Question</h4>";
  const answer = item?.answerGroup?.answer || "<p>Default Answer</p>";

  return (
    <div className="faq-accordion__item faq-accordion__item-current">
     <div className="faq-accordion__item-title">
      <div
        onClick={() => setOpen(!open)}
        dangerouslySetInnerHTML={{ __html: question }}
     />
     <svg  onClick={() => setOpen(!open)}
     className="faq-accordion__toggle-arrow" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#151367">
	<path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5"></path>
</svg>
      </div>
 

      {open && (
        <div
          className="faq-accordion__answer"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    
    </div>
  );
}
export default Tabbing;
