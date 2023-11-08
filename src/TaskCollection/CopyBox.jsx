import React,{useState} from 'react'
import '../style/copyBox.css'
function CopyBox() {
    const [box1, setBox1] = useState([1,2,3,4,5]);
    const [box2, setBox2] = useState([]);
    
    const [holdBox1, setHoldBox1] = useState([]);
    const [holdBox2, setHoldBox2] = useState([]);

    function selectItemBox1(item)
    {
        //remove item existence
        if(holdBox1.includes(item))
        {
            setHoldBox1(holdBox1.filter((iterate) => iterate !== item))
        }
        //add that item
        else
        {
            setHoldBox1([...holdBox1, item])
        }
    }
    function selectItemBox2(item)
    {
         //remove item existence
         if(holdBox2.includes(item))
         {
             setHoldBox2(holdBox2.filter((iterate) => iterate !== item))
         }
         //add that item
         else
         {
             setHoldBox2([...holdBox2, item])
         }
    }

    function moveItemToBox1()
    {
        setBox2([...box2,...holdBox1])
        //now remove that items from box1
        const updatedBox1 = box1.filter(item => !holdBox1.includes(item));
        setBox1(updatedBox1);
        setHoldBox1([]);
    }

    function moveItemToBox2()
    {
        setBox1([...box1,...holdBox2])
        const updatedBox2 = box2.filter(item => !holdBox2.includes(item) )
        setBox2(updatedBox2)
        setHoldBox2([]);
    }

  return (
    <div className='copyBox'>
    {/* container 1 */}
    {/* box 1 */}
    <div className='item box'>
    <ul>
        {box1.map((item) => (
            <li key={item}>
            <input onClick={()=> selectItemBox1(item)} type="checkbox"/>
            <label >{item}</label>
            </li>
        ))}
    </ul>
    </div>
    {/* button 1 */}
    <div className='item'><button onClick={moveItemToBox1}>button 1</button></div>
    {/* button 2 */}
    <div className='item'><button onClick={moveItemToBox2}>button 2</button></div>
    {/* container 2 */}
    <div className='item box'>
    <ul>
        {box2.map((item) => (
            <li key={item}>
            <input onClick={()=> selectItemBox2(item)}  type="checkbox"/>
            <label>{item}</label>
            </li>
        ))}
    </ul>
    </div>
    </div>
  )
}

export default CopyBox