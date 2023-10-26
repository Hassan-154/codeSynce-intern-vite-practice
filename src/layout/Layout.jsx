import Header from '../header/Header'
import SideBar from '../sideBar/SideBar'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <div>
      <Header/>
      <SideBar/>
      <Outlet/>
    </div>
  )
}

export default Layout