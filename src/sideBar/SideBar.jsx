import '../style/sideBar.css'
import { Link } from "react-router-dom";
function SideBar() {
  return (
    <div className='sideBar'>
    <ul>
    <li><Link to="home" >Home</Link></li>
    <li><Link to="about" >About</Link></li>
    </ul>
    </div>
  )
}

export default SideBar