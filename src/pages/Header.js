import 'bootstrap/dist/css/bootstrap.min.css'
import { withRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';




function Header() {
    return (
      <div >
      <nav className="navbar  navbar-light bg-white navpadding">
                <Link className="navbar-brand brandcolor" to = '/'> Shree Ganesh Pandey Inter college Katghar</Link>
                
                <ul className="nav">
                    
                        <li className='nav-item textcolor'> <Link className = 'nav-link active' to = '/home'> Home  </Link>  </li>
                        <li className='nav-item textcolor'> <Link className = 'nav-link active' to = '/about'>  About </Link> </li>
                        <li className='nav-item textcolor'> <Link className = 'nav-link active' to = '/blog'>  Blogs </Link> </li>
                        <li className='nav-item textcolor'> <Link className = 'nav-link active' to = '/tutorials'> Tutorials  </Link> </li>
                        <li className='nav-item textcolor'> <Link className = 'nav-link active' to = '/gallery'>  Gallery </Link> </li>
                        <li className='nav-item textcolor'> <Link className = 'nav-link active' to = '/contact'>  Contact </Link>  </li>
                        
                   
                </ul>

            </nav>
      </div>
    );
  }
  
  export default withRouter(Header);