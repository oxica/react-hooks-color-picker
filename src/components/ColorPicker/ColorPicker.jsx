import { useState } from 'react';
import s from './ColorPicker.module.css';

export default function ColorPicker({ options }) {
  const [activeOptionIdx, setActiveOptionIdx] = useState(0);

  const makeOptionClassName = index => {
    return index === activeOptionIdx ? s.active : s.option;
  };

  return (
    <div className="container">
      <h2 className="title">Color Picker</h2>
      <p>Color: {options[activeOptionIdx].label}</p>
      <div>
        {options.map(({ label, color }, index) => (
          <button
            key={label}
            className={makeOptionClassName(index)}
            style={{ backgroundColor: color }}
            onClick={() => setActiveOptionIdx(index)}
          ></button>
        ))}
      </div>
    </div>
  );
}
