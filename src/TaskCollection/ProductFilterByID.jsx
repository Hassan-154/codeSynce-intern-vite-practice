import React, { useState, useEffect } from "react";

function ProductFilterByID() {
  const [width, setWIdth] = useState(window.innerWidth);
  const [input, setInput] = useState("");
  // //create an object
  // let obj = {
  //     shirt:[
  //         {brand: 'BreakOut', size: 'large', price: 150},
  //         {brand: 'BreakOut', size: 'large', price: 150},
  //         {brand: 'BreakOut', size: 'large', price: 150}
  //     ]
  // }

  // useEffect(() => {
  //     console.log('attach the listener: ')
  //     window.addEventListener( 'resize', updateWindowWidth)
  //     return () => {
  //        console.log('remove the listener: ')
  //        window.removeEventListener( 'resize', updateWindowWidth )
  //     };
  // });

  // function updateWindowWidth()
  // {
  //     setWIdth(window.innerWidth)
  // }

  useEffect(() => {
    setTimeout(() => {
      console.log("I am running after 1.5 second: ");
    }, 1500);
    return () => {};
  }, [input]);

  return (
    <div>
      <div>
        ProductFilterByIDccknwklen
        <input onChange={(e) => setInput(e.target.value)}></input>
      </div>
    </div>
  );
}

export default ProductFilterByID;
