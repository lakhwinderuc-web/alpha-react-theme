import { useState } from 'react';
const Tabbing = ({items}) => {
  return (
      <div className="image-with-accordian__ques-ans">
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
    <div className="image-with-accordian__accordion-item">
      <div
        className="image-with-accordian__accordion-question"
        onClick={() => setOpen(!open)}
        dangerouslySetInnerHTML={{ __html: question }}
      />

      {open && (
        <div
          className="image-with-accordian__accordion-answer"
          dangerouslySetInnerHTML={{ __html: answer }}
        />
      )}
    </div>
  );
}
export default Tabbing;
