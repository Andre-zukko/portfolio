import Logo from "./Logo"
import Nav from "./Nav"

const NavBar = () => {

  return <header className="border-b flex justify-between items-center flex-wrap">
    <Logo/>
    <Nav/>
  </header>
  
}

export default NavBar