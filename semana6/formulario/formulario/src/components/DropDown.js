import React from 'react';
// import Etapa1 from './Etapa1';
// import Etapa3 from './Etapa3';
// import { render } from '@testing-library/react';
// console.log(props)
// class DropDown extends React.Component{  
//     render () {
//         const teste = this.props.options.map((option) => {
//         return    <option value={option}>{option}</option>
//         })
//         return (
//         <div>
//             <h4>{this.props.question}</h4>
//             <select>
//                 {teste}
//             </select>
//         </div>
//   );
// }}
function DropDown(props) {
    return (
        <div>
            <h4>{props.question}</h4>
            <select>
                {props.options.map(option => (
                    <option value={option}>{option}</option>
                ))}
            </select>
        </div>
    )
}

export default DropDown;