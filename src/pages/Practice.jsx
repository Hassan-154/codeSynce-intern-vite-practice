import React,{useEffect, useState} from 'react'

function Practice() {
    const  [state,setState]= useState(1)

    useEffect(()=>{
            setState(state+1) //2
            console.log( 'useEffect step 1: ' + state)
            setState(state+1) //3
            console.log( 'useEffect step 2: ' + state)
            setState(state+1) //4
            console.log( 'useEFfect step 3: ' + state)
    },[])

    function add()
    {
            setState(state+1)
            console.log( 'useState step 1: ' + state)

            setState(state+1)
            console.log( 'useState step 2: ' + state)
           
            setState(state+1)
            console.log( 'useState step 3: ' + state)
    }
  
//     //to rest when component react rerender
//     const [state, setState] = useState(2);

//     function render()
//     {
//         setState(state+1);
//     }
//     //to test when react does not rerender:
//      let count = 0
//     function updateCount () {
//        count = count +1
//        console.log(count)
//     }
//     //to test that we cant change state outside of any condition
//     //setState(4)
//     //we cant do this because we already declare the initial state.

//     //change the object property value in useState
//     const [obj, setObj] = useState({
//         product: 'shirt',
//         quantity: 20
//     });
//     console.log(obj);
//     function changeOBJ()
//     {
//         //how can we change the property value
//         setObj({
//             ...obj,
//             quantity: 30
//         })
//         console.log( 'after changing the property value: ' + changeOBJ,obj)
//         //how to add new property
//         setObj({
//             ...obj,
//             price: '70$'
//         })
//         console.log( 'after adding new the property: ' + changeOBJ)
//     }


  return (
    <div>
{/* //      <button onClick={updateCount}>update count {count}</button>
//      check the render method 
//     <h1>heading</h1>
//     <h1>current state: {state}</h1>
//     <button onClick={render}>click to change state:</button>
//     call function to change obj property value 
//     <button onClick={changeOBJ}>Change OBJ</button> */}
         <button onClick={add} >add num</button>
         <button onClick={add} >keep record</button>
     </div>
  )
}

export default Practice