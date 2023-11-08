import React, { useEffect, useState } from "react";

function FilterApi() {
  const [state, setState] = useState(0);
  const [count, setCount] = useState(0);

  // useEffect(()=>{

  //     setState(e => e + 1)
  //     console.log( 'useState step 1: ' + state)

  //     setState(e => e + 1)
  //     console.log( 'useState step 2: ' + state)

  //     setState(e => e + 1)
  //     console.log( 'useState step 3: ' + state)
  // },[])
  // console.log(state)

  // useEffect(() => {
  //   setInterval(() => {
  //     setState( e => e + 1);
  //     console.log('Inside Interval: ' + (state))
  //   }, 1000);
  //   console.log('OutSide Interval: ' + (state))
  // }, []);

  return (
    <div>
      number count: {state}
      <button
        onClick={() => {
          setState(state + 1);
          setState(state + 1);
          setState((e) => e + 1);
          setState((e) => e + 1);
        }}
      >
        increment {state}
      </button>
    </div>
  );
}

export default FilterApi;
