import React from 'react'


const rangeElements = [
  
]
function RangeInput(props) {
  return (
    <div>
      <p className='text-xl font-normal'>{props.label}</p>

      <div className="flex items-center justify-between mx-auto my-4">
        <span className="font-semibold mr-4">{props.leftText}</span>

        <div className="flex items-center gap-2 min-w-[77%]">
          <input
            type="range"
            min={props.min || 0}
            max={props.max || 10}
            step={props.step || 0.5}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
            className="min-w-[100%] accent-[#137802]"
          />
          <span className="font-semibold">{props.value}</span>
        </div>

        <span className="font-semibold ml-4">{props.rightText}</span>
      </div>
    </div>
  );
}

export default RangeInput;


// function RangeInput(props) {
//   return (
//     <div>
//       <p>{props.text}</p>

//       <div className="flex items-center justify-between mx-auto my-4">
//         <span className="font-semibold mr-4">{props.leftText}</span>

//         <input
//           type="range"
//           min={props.min || 0}
//           max={props.max || 100}
//           value={props.value}
//           name={props.name}           
//           onChange={props.onChange}
//           className="appearance-none slider bg-[#137802] min-w-[80%] rounded-4xl h-2 outline-none cursor-pointer"
//         />

//         <span className="font-semibold ml-4">{props.rightText}</span>
//       </div>
//     </div>
//   );
// }

// export default RangeInput;
