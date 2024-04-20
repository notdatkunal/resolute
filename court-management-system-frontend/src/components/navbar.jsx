import { Router, useNavigate } from 'react-router-dom';
import '../assets/css/components/navbar.css'
import { useSelector } from 'react-redux';


export default function NavBar(){

    const navigate = useNavigate();
    const isLoggedIn = useSelector(state => state.isLoggedIn); // Select isLoggedIn state from Redux store


    const login = () =>{
        navigate('/login');
    }

    const home  = () =>{
        navigate('/');
    }

    
    return(<>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="logo"><a href="index.html"><img src="src/assets/images/logo.png"/></a></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto" style={{display:"flex", gap:"6rem", justifyContent:"center", alignItems:"center"}}>
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
                            <a className="dropdown-item" href="#">ARB</a>
                            <a className="dropdown-item" href="#">Medi</a>
                            <a className="dropdown-item" href="#">Concili</a>
                            <a className="dropdown-item" href="#">Free Legal Aid</a>
                            {/* <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">More Services</a> */}
                        </div>
                    </li>                
                        {/* <li className="nav-item">
                            <a className="nav-link" href="blog.html">Blog</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="about.html">About</a>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="events.html">Events</a>
                        </li> */}
                        <li className="nav-item">
                            <a className="nav-link" href="contact.html">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <form className="form-inline my-2 my-lg-0">
                                <div className="search_icon">
                                    <img src="src/assets/images/search-icon.png"/>
                                </div>
                            </form>
                        </li>
                    </ul>
                </div>
                <div>
                    {isLoggedIn?<button className="btn btn-dark" onClick={login}> Sign Out </button>
                        :<button className="btn btn-dark" onClick={login}> Sign In </button>
                    }
                </div>
         </nav>
    </>);
}