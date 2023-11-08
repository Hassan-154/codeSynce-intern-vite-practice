import React,{useState, useEffect} from 'react'
import '../style/copyBoxWithCheck.css'
function CopyBoxWithCheck() {
    const [state1, setState1] = useState([
        { value: 1, condition: false },
        { value: 2, condition: false },
        { value: 3, condition: false },
        { value: 4, condition: false },
        { value: 5, condition: false },
      ]);
      const [state2, setState2] = useState([]);
      const [disable1, setDisable1] = useState(true);
      const [disable2, setDisable2] = useState(true);

      useEffect(() => {
        const checkButton1 = state1.some(item => item.condition);
        setDisable1(!checkButton1);
        const checkButton2 = state2.some(item => item.condition);
        setDisable2(!checkButton2);
      }, [state1,state2]);

      function keepEyeOnCheck1(itemValue) {
        const updatedState = state1.map(item => {
          if (item.value === itemValue) {
            return {...item, condition: !item.condition };
          }
            return item;
        });
        setState1(updatedState);
      }

      function keepEyeOnCheck2(itemValue) {
        const updatedState = state2.map(item => {
          if (item.value === itemValue) {
            return {...item, condition: !item.condition };
          }
          return item;
        });
        setState2(updatedState);
      }

      function moveToBox2()
      {
        console.log('this')
        const itemsToMove = state1.filter((item) => item.condition);
        setState2((prevItems) => [...prevItems, ...itemsToMove]);
        setState1((prevState) => prevState.filter((item) => !item.condition));
      }

      function moveToBox1()
      {
        const itemsToMove = state2.filter((item) => item.condition);
        setState1((prevItems) => [...prevItems, ...itemsToMove]);
        setState2((prevState) => prevState.filter((item) => !item.condition));
      }

  return (
    <div className='copyBoxWithCheck'>
    {/* container 1 */}
    {/* box 1 */}
    <div className='item-check box-check'>
    <ul>
    {state1.map((item) => (
  <div className='check-field' key={item.value}>
  <input
    type="checkbox"
    checked={item.condition}
    onChange={() => keepEyeOnCheck1(item.value)}
  />
    <p>{item.value}</p>
  </div>
))}
    </ul>
    </div>
    {/* button 1 */}
    <div className={disable1 ? 'moveButtonDisable' : 'moveButton'} ><button onClick={moveToBox2}>Move to Box 2</button></div>
    {/* button 2 */}
    <div className={disable2 ? 'moveButtonDisable' : 'moveButton'} ><button onClick={moveToBox1}>Move to Box 1</button></div>
    {/* container 2 */}
    {/* box 2 */}
    <div className='item-check box-check'>  
    <ul>
    {state2.map((item) => (
  <div className='check-field' key={item.value}>
  <input
    type="checkbox"
    checked={item.condition}
    onChange={() => keepEyeOnCheck2(item.value)}
  />
    <p>{item.value}</p>
  </div>
))}
    </ul>
    </div>
    </div>
  )
}

export default CopyBoxWithCheck