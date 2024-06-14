import { Router, useNavigate } from 'react-router-dom';
import '../assets/css/components/navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import logo from '../assets/images/J.W.Swift Logo.png'; // Import logo image
import searchIcon from '../assets/images/search-icon.png'; // Import search icon image
import { logout } from '../features/user/userSlice';


export default function NavBar(){

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const isLoggedIn = useSelector(state => state.user.user.isLoggedIn); // Select isLoggedIn state from Redux store
    const role = useSelector(state => state.user.user.role); // Select isLoggedIn state from Redux store
    

    const login = () =>{
        navigate('/signin');
    }

    const signout = () =>{
        debugger;
        dispatch(logout());
        navigate('/');
    }

    const adminDashboard = () =>{
        navigate('/adminPanel');
    }


    const clientDashboard = (id) =>{
        navigate("/search-case");
    }

    const home  = () =>{
        navigate('/');
    }

    const ARB  = () =>{
        navigate('/arb')
    }
    
    const medi  = () =>{
        navigate('/mediation')
    }

    const concili  = () =>{
        navigate('/conciliation')
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
                <div className='middleMenu'>
                <div className="logo"><a onClick={home}><img src={logo}/></a></div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent" style={{marginLeft:'50px'}}>
                        <ul className="navbar-nav mr-auto" style={{display:"flex", gap:"6rem", justifyContent:"center", alignItems:"center"}}>
                        {isLoggedIn && role == "admin"?<li className="nav-item active">
                                <a className="nav-link" onClick={adminDashboard}>Dashboard</a>
                            </li>:""}
                        {isLoggedIn && role == "arbitrator" || isLoggedIn && role == "bank" ?<li className="nav-item active">
                                <a className="nav-link" onClick={clientDashboard}>Cases</a>
                            </li>:""}
                            <li className="nav-item active">
                                <a className="nav-link" onClick={home}>Home</a>
                            </li>
                            {/* <li className="nav-item">
                                <a className="nav-link" href="services.html">Services</a>
                            </li> */}
                        <li className="nav-item dropdown"> 
                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                            </a>
                            <div className="dropdown-menu dropdown-content" aria-labelledby="navbarDropdown" style={{marginTop: "-0.4rem"}}>
                                <a className="dropdown-item" onClick={ARB}>ARB</a>
                                <a className="dropdown-item" onClick={medi}>Medi</a>
                                <a className="dropdown-item" onClick={concili}>Concili</a>
                                <a className="dropdown-item" onClick={freeLegalAid}>Free Legal Aid</a>
                            </div>
                        </li>                
                        {/* <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#">Services</a>
                        <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">ARB</a></li>
                                <li><a class="dropdown-item" href="#">Medi</a></li>
                                <li><a class="dropdown-item" href="#">Concili</a></li>
                                <li><a class="dropdown-item" href="#">Free Legal Aid</a></li>
                                </ul>
                                </li>                     */}
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
                            {/* <li className="nav-item">
                                <form className="form-inline my-2 my-lg-0">
                                    <div className="search_icon">
                                        <img src={searchIcon}/>
                                    </div>
                                </form>
                            </li> */}
                        </ul>
                    </div>

                    </div>
                <div>
                    {isLoggedIn?<button className="btn btn-dark" onClick={signout}> Log Out </button>
                        :<button className="btn btn-dark" onClick={login}> Log In </button>
                        }
                </div>
                </div>
         </nav>
    </>);
}