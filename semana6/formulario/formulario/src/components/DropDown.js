import React from 'react';

function DropDown(props) {
  return (
    <div>
        <h4>{props.question}</h4>
        <select>
            {props.options.map(option => (
                <option value={option}>{option}</option>
            )
            )}
        </select>
    </div>
  );
}

export default DropDown;