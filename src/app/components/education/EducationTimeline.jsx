export default function EducationTimeline() {

const startDate = new Date(2022, 8, 9);
const endDate = new Date(2028, 1, 27);
const currentDate = new Date();

const length = endDate - startDate;
const progress = currentDate - startDate;

  return (
    <>
  <h3 className="text-teal-500 text-3xl py-1 pb-6 text-center">Min Uddannelsesrejse</h3>
<ul className="steps w-full bg-none">
  <li className="step step-primary">GF 1</li>
  <li className="step step-primary">GF 2</li>
  <li className="step step-primary">HF 1</li>
  <li className="step">HF 2</li>
  <li className="step">HF 3</li>
  <li className="step">HF 4</li>
  <li className="step">HF 5</li>
  <li className="step">HF 6</li>
</ul>
</>
)};