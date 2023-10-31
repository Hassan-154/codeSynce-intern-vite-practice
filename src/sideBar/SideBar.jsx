import "../style/sideBar.css";
import { Link } from "react-router-dom";
function SideBar() {
//array of object
 const path  = [
  {
    path: 'home',
    page: 'Home'
  },
  {
    path: 'about',
    page: 'About'
  }
 ]
  return (
       <div className="sideNavMenu">
      {
        path.map( pick => (
         <ul key={pick}>
          <li><Link to={pick.path}>{pick.page}</Link></li>
         </ul>
        ))
      }
    </div>
  );
}

export default SideBar;
