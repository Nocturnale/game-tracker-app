import { Link } from 'react-router-dom';
import logoGame from '../assets/icon-gc.png';

export default function Header(){
    return (
        <header className="header">
            <nav className="nav-list">
                <img src={logoGame} alt="Logo appli game tracker" />
                <span>game tracking</span>
                <ul className="nav-menu">
                    <li><Link to="/">Liste des jeux</Link></li>
                    <li><Link to="/ajouter">Ajouter jeu</Link></li>

                </ul>
                
                
            </nav>
        </header>
    )
}