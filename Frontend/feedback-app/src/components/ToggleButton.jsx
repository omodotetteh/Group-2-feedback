import React from 'react'

function ToggleButton(props) {
  return (
    <button
      type="button"
      onClick={() => props.onChange(props.name, !props.value)}
      className={`px-6 py-2 rounded-full font-bold transition ${
        props.value ? 'bg-[#137802] text-white' : 'bg-gray-300 text-black'
      }`}
    >
      {props.value ? 'Yes' : 'No'}
    </button>
  )
}

export default ToggleButton

// /* Frame 41 */

// position: absolute;
// width: 88px;
// height: 42px;
// left: 80px;
// top: 1426px;

// background: #137802;
// border-radius: 20px;


// /* Ellipse 3 */

// position: absolute;
// width: 28px;
// height: 28px;
// left: 53px;
// top: calc(50% - 28px/2);

// background: #FFFFFF;


// /* Yes */

// position: absolute;
// width: 28px;
// height: 19px;
// left: 13px;
// top: calc(50% - 19px/2 + 0.5px);

// font-family: 'Rubik';
// font-style: normal;
// font-weight: 600;
// font-size: 16px;
// line-height: 19px;
// /* identical to box height */

// color: #FFFFFF;

