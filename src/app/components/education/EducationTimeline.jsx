import React from 'react';

export default function EducationTimeline() {

  const startDate = new Date(2022, 7, 8);
  const endDate = new Date(2028, 0, 27);
  const currentDate = new Date();

  const length = endDate - startDate;
  const progress = currentDate - startDate;

  return (
    <>
      <h3 className="text-teal-500 text-3xl py-1 pb-6 text-center">Min Uddannelsesrejse</h3>
      <ul className="steps w-full rounded-lg p-4 shadow-lg">
        <li className={`step ${progress >= 0 ? 'step-primary' : ''}`}>GF 1</li>
        <li className={`step ${progress >= (length / 8) * 1 ? 'step-primary' : ''}`}>GF 2</li>
        <li className={`step ${progress >= (length / 8) * 2 ? 'step-primary' : ''}`}>HF 1</li>
        <li className={`step ${progress >= (length / 8) * 3 ? 'step-primary' : ''}`}>HF 2</li>
        <li className={`step ${progress >= (length / 8) * 4 ? 'step-primary' : ''}`}>HF 3</li>
        <li className={`step ${progress >= (length / 8) * 5 ? 'step-primary' : ''}`}>HF 4</li>
        <li className={`step ${progress >= (length / 8) * 6 ? 'step-primary' : ''}`}>HF 5</li>
        <li className={`step ${progress >= (length / 8) * 7 ? 'step-primary' : ''}`}>HF 6</li>
      </ul>
    </>
  );
}
