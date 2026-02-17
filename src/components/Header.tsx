import logoGame from '../assets/icon-gc.png';

export default function Header(){
    return (
        <header className="header">
            <nav className="nav-list">
                <img src={logoGame} alt="Logo appli game tracker" />
                <span>game tracking</span>
                <ul className="nav-menu">
                    <li>Liste jeux</li>
                    <li>Nouvelle entrée</li>
                </ul>
            </nav>
        </header>
    )
}