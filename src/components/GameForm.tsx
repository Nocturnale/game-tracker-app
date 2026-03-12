import { addGame } from "../services/gameService";
import { STATUS_OPTIONS, PRIORITY_OPTIONS, DEVICES, type Device, type Status, type Priority, type Game } from "../type"
import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";

interface GameFormProps {
    readonly onGameAdded: (newGame : Game) => void;
    initialGame?: Game
}

export default function GameForm({initialGame, onGameAdded}: GameFormProps){

    const [title, setTitle] = useState(initialGame?.title ||"");
    const [device, setDevice]= useState<Device>("pc");

    const [status, setStatus] = useState<Status>(initialGame?.status ||"À faire");
    const [playedHours, setPlayedHours] = useState(initialGame?.playedHours ||0);
    const [rating, setRating] = useState(initialGame?.rating ||0);
    
    const [estimatedHours, setEstimatedHours] = useState(initialGame?.estimatedHours || 0);
    const [priority, setPriority] = useState<Priority>(initialGame?.priority ||"Moyenne");

    const navigate = useNavigate();

    useEffect(() => {
         console.log("initialGame", initialGame);
        if (initialGame) {
                setDevice(initialGame.device);
            }
    }, [initialGame]);

    const handleSubmit = async (e:React.SyntheticEvent<HTMLFormElement>) =>{
        e.preventDefault()

        const newGame = await addGame({
            title,
            device,
            status,
            playedHours,
            rating,
            estimatedHours,
            priority
        })

        onGameAdded(newGame)
        navigate("/");
    }
    return (
        <>
            <h2>Ajouter un jeu</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="inputNom" >Nom du jeu</label>
            <input type="text"
                id="inputNom"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            <label htmlFor="device">Plateforme</label>
            <select id="device" value={device} onChange={(e) => setDevice(e.target.value as Device)}>
                
                {DEVICES.map(device =>(
                    <option key={device.value}
                        value={device.value}
                        >
                            {device.label}
                        </option>
                ))}
            </select>
            <label htmlFor="inputStatut">Statut</label>
            <select id="inputStatut" value={status} onChange={(e) => setStatus(e.target.value as Status)}>
                <option>-- Choisir un statut --</option>
                {STATUS_OPTIONS.map(status => (
                <option key={status} value={status}>
                    {status}
                </option>
                ))}
            </select>
            
            {/* Si statut en cours, terminé abandonné*/}
            <label htmlFor="heuresJouees">Nombre d'heures jouées</label>
            <input type="number"
                id="heuresJouees"
                value={playedHours}
                onChange={(e)=> setPlayedHours(Number(e.target.value))}
            />
            <label htmlFor="inputRating">Note</label>
            <input type="number"
                min="1"
                max="10"
                value={rating}
                onChange={(e)=> setRating(Number(e.target.value))}
                
            />

            {/* Si statut à faire*/}
            <label htmlFor="heuresEstimees" >Nombre d'heures estimées</label>
            <input type="number"
                id="heuresEstimees"
                value={estimatedHours}
                onChange={(e)=> setEstimatedHours(Number(e.target.value))}
            />
            <label htmlFor="inputPriorite">Priorité</label>
            <select id="inputPriorite" 
                value={priority}
                onChange={(e)=> setPriority(e.target.value as Priority)}>
                {PRIORITY_OPTIONS.map(priority =>(
                    <option key={priority}
                        value={priority}>
                            {priority}
                        </option>
                ))}
            </select>
            <button type="submit">
                {initialGame ? "Mettre à jour" : "Ajouter"}
            </button>
        </form>
        </>
        
    )
}