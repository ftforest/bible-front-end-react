//import '../styles/HeaderMafin.css';
import logo_mafin from '../assets/images/mafin/logo-mafin.png';
import '../scss/style.scss';

function HeaderMafin() {
    return (
        <header className="header_mf">
            <div className="header_mf__container">
                <a className="header_mf__logo logo" href="/">
                    <img src={logo_mafin}  alt="logo_mafin" />
                </a>
                <nav className="header_mf__menu menu">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a className="_link menu__link" href="walthmanag">Advantages</a>
                        </li>
                        <li className="menu__item">
                            <a className="_link menu__link" href="usemafinforfree">Calculator</a>
                        </li>
                        <li className="menu__item">
                            <a className="_link menu__link" href="chooselevelofrisk">How it works</a>
                        </li>
                        <li className="menu__item">
                            <a className="_link menu__link" href="yourfunds">Security</a>
                        </li>
                        <li className="menu__item">
                            <a className="_link menu__link" href="avarded">Awards</a>
                        </li>
                        <li className="menu__item">
                            <a className="_link menu__link btn_menu" href="downloadmafin">Download</a>
                        </li>
                        <div id="btn_investing">
                            <div className="btn_primary" id="header_start_investing_menu">START FOR FREE</div>
                        </div>
                    </ul>
                </nav>
                <button className="header_mf__burger icon-menu">
                    <span className="menu-open"></span>
                </button>
            </div>
        </header>
    );
}

export default HeaderMafin;