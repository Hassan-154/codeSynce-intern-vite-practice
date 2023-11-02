import React,{useEffect, useState} from 'react'

function Practice() {
    const  [count,setCount]= useState(0)
    const  [windowWidth, setWindowWidth]= useState(window.innerWidth)

    
    //this will run on every render
   useEffect(()=>{
    console.log('every render: ')
    return () => {
      console.log('I will run first: ')
    }
   })

   //I will run on first render
   useEffect(()=>{
    console.log('first render:')
   }, [])

   //on first render and when ever the dependence change
   useEffect(()=>{
    console.log('first render + dependency change: ' + count )
   }, [count])

   //cleanup in useState
   useEffect(() => {
    //here attach the listener
    console.log('attach the listener: ')
    window.addEventListener( 'resize', updateWindowWidth)
    // return () => {
    //   //remove the listener
    //   console.log('detach the listener: ')
    //   window.removeEventListener( 'resize', updateWindowWidth )
    // };
   },[]);

   function updateWindowWidth() {
    setWindowWidth(window.innerWidth)
   }



    //  useEffect(()=>{
    //      setState(e => e + 1)
    //      console.log( 'useState step 1: ' + state)

    //      setState(e => e + 1)
    //      console.log( 'useState step 2: ' + state)

    //      setState(e => e + 1)
    //      console.log( 'useState step 3: ' + state)
    //  },[])
    //  console.log(state)

    // function add()
    // {
    //         //  setState(e => e + 1)
    //         //  console.log( 'useState step 1: ' + state)

    //         //  setState(e => e + 1)
    //         //  console.log( 'useState step 2: ' + state)

    //         //  setState(e => e + 1)
    //         //  console.log( 'useState step 3: ' + state)
    // }

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

<h1>Count: {count}</h1>
<h1>Window width: {windowWidth}</h1>
         <button onClick={ () => setCount(count+1) } >Increment</button>
         <button onClick={ () => setCount(count-1) } >Decrement</button>
         {/* <button onClick={add} >keep record</button> */}
         <h1></h1>
     </div>
  )
}

export default Practice