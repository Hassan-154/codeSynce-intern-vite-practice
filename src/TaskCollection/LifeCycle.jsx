import React,{useState, useEffect, useMemo} from 'react'

function LifeCycle() {

    const [transitions, setTransitions] = useState(false);
    const [input, setInput] = useState("");
    const [start, setStart] = useState(false);

    useEffect(() => {
      console.log('now useEFfect Upper part run:')
        return () => {
          console.log('welcome to speed typing.. .')
          setTimeout(()=> {
            if(input == 't')
            {
              console.log('you win:')
            }
            else{
              console.log('you lose:')
            }
            setInput('');
          },3000)
        };
      },[start]);

      const serverUrl = 'https://localhost:1234';

      //react can do multiple times synchronizing and stop synchronizing  when component mount
      //if we do not define cleanUp function that react automatically will return empty cleanUp
function ChatRoom({ roomId }) {
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.connect();
    return () => {
      connection.disconnect();
    };
  }, [roomId]);
  // ...
}



  return (
    <div>
      <div className={ transitions ? 'example' : 'example'}>
        {/* <h1>Welcome to speed typing.. .</h1>
        <input placeholder='' onChange={(e) => setInput(e.target.value)}></input>
        <button onClick={() => setStart(true)} >check now</button> */}
        <button onClick={ChatRoom} >connect to chat room</button>
      </div>
    </div>
  )
}

export default LifeCycle