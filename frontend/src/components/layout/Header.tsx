import logoGame from '../../assets/icon-gc.png'

export default function Header(){
    return (
        <header className="bg-[#ff5757] text-white">
            <nav className="flex items-center justify-between px-6 py-4">
                <div className="flex items-center gap-3">
                    <img 
                        src={logoGame} 
                        alt="Logo appli game tracker"
                        className="h-10 w-10" />
                    <span className="text-xl font-bold">game tracking</span>
                </div>
                <ul className="flex items-center gap-6">
                    <li>Liste des jeux</li>
                    <li>Ajouter jeu</li>
                </ul>
            </nav>
        </header>
    )
}