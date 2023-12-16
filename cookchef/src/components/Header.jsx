import style from './Header.module.scss';
import logo from '../assets/images/logo.png';

function Header() {


    return (

    <header className={ style.header } >
    <i  class="fa-solid fa-bars"> </i> 
    <div>
        <img src={logo} alt="logo" />
    </div>
    <ul>
        <button>
            panier
        </button>
        <button>
            connexion
        </button>
    </ul>

    </header>
    );
}

export default Header;