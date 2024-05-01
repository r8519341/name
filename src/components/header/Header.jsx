import './header.css'
import  logoImg from './../../img/Logo.svg'
function Header(){
    return (
    <header className="header">
        <div className="container">
            <div className="header_row">

                <div className="header_logo">
                    <img src={logoImg} alt="Logo"/>
                    <span >EXXBTC</span>
                </div>
                <nav className="header_nav">
                <ul>
                    <li><a href="#">BUY CRYPTO</a></li>
                    <li><a href="#">MARKET</a></li>
                    <li><a href="#">TRADE</a></li>
                    <li><a href="#">DERIVATIVES</a></li>
                    <li><a href="#">TOOLS</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>


                <div className="nav_button">
                <button><a href="#" className="header_nav-Sign_In">Sign In</a></button>
                <button><a href="#" className="header_nav_Sign_Up">Sign Up</a></button>
                </div>
                
                </nav>


               






            </div>
        </div>


    </header>


    )
}

export default Header;
