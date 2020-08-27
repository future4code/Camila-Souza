import React from 'react';

function Question(props) {
  return (
    <div>
        <h4>{props.question}</h4>
        <input onChange={props.onChange} value={props.value} />
    </div>
  );
}

export default Question;