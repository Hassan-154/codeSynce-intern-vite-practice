import '../style/header.css'
import { useNavigate } from "react-router-dom";
function Header() {

  const navigate = useNavigate();
   //function to clear the local storage
   function signOut() {
    console.log("local storage clear: ")
    localStorage.clear()
    navigate('/login')
  }

  return (
    <div className='header'>
    <h2>Header</h2>
    <div className='button_container'>
      <button onClick={signOut}>Sign Out</button>
    </div>
    </div>
  )
}

export default Header