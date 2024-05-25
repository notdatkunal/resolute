import { Router, useNavigate } from 'react-router-dom';
import '../assets/css/components/navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/logo.png'; // Import logo image
import searchIcon from '../assets/images/search-icon.png'; // Import search icon image
import { logout } from '../features/user/userSlice';


export default function NavBar(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.user.isLoggedIn); // Select isLoggedIn state from Redux store


    const login = () =>{
        navigate('/login');
    }

    const signout = () =>{
        debugger;
        dispatch(logout());
        navigate('/');
    }

    const dashboard = () =>{
        navigate('/admin');
    }

    const home  = () =>{
        navigate('/');
    }

    const ARB  = () =>{
        navigate('/')
    }
    
    const medi  = () =>{
        navigate('/')
    }

    const concili  = () =>{
        navigate('/')
    }

    const freeLegalAid  = () =>{
        navigate('/')
    }

    const aboutUs  = () =>{
        navigate('/about');
    }

    const faq  = () =>{
        navigate('/faq');
    }


    
    return(<>
            <nav className="navbar navbar-expand-lg navbar-light bg-light topbar">
                <div className="logo"><a onClick={home}><img src={logo}/></a></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" style={{display:"flex", gap:"6rem", justifyContent:"center", alignItems:"center"}}>
                    {isLoggedIn?<li className="nav-item active">
                            <a className="nav-link" onClick={dashboard}>Dashboard</a>
                        </li>:""}
                        <li className="nav-item active">
                            <a className="nav-link" onClick={home}>Home</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="services.html">Services</a>
                        </li> */}
                    <li className="nav-item dropdown"> {/* Add 'dropdown' class to create a dropdown menu */}
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown" style={{marginTop: "-0.4rem"}}> {/* Dropdown menu content */}
                            <a className="dropdown-item" onClick={ARB}>ARB</a>
                            <a className="dropdown-item" onClick={medi}>Medi</a>
                            <a className="dropdown-item" onClick={concili}>Concili</a>
                            <a className="dropdown-item" onClick={freeLegalAid}>Free Legal Aid</a>
                            {/* <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">More Services</a> */}
                        </div>
                    </li>                
                        {/* <li className="nav-item">
                            <a className="nav-link" href="blog.html">Blog</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" onClick={aboutUs}>About</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="events.html">Events</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link"  onClick={faq}>FAQ</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact Us</a>
                        </li> */}
                        <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0">
                                <div className="search_icon">
                                    <img src={searchIcon}/>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
                <div>
                    {isLoggedIn?<button className="btn btn-dark" onClick={signout}> Log Out </button>
                        :<button className="btn btn-dark" onClick={login}> Log In </button>
                    }
                </div>
         </nav>
    </>);
}