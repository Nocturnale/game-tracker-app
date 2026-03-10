import { addGame } from "../services/gameService";
import { STATUS_OPTIONS, PRIORITY_OPTIONS, DEVICES, type Device, type Status, type Priority, type Game } from "../type"
import { useState } from "react";
    import { useNavigate } from "react-router-dom";

interface GameFormProps {
    readonly onGameAdded: (newGame : Game) => void;
}

export default function GameForm({onGameAdded}: GameFormProps){

    const [title, setTitle] = useState("");
    const [device, setDevice]= useState<Device>("pc");
    const [status, setStatus] = useState<Status>("À faire");
    const [playedHours, setPlayedHours] = useState(0);
    const [rating, setRating] = useState(0);
    
    const [estimatedHours, setEstimatedHours] = useState(0);
    const [priority, setPriority] = useState<Priority>("Moyenne");

    const navigate = useNavigate();

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
            <select id="device" onChange={(e) => setDevice(e.target.value as Device)}>
                {DEVICES.map(device =>(
                    <option key={device.value}
                        value={device.value}
                        >
                            {device.label}
                        </option>
                ))}
            </select>
            <label htmlFor="inputStatut">Statut</label>
            <select id="inputStatut" onChange={(e) => setStatus(e.target.value as Status)}>
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
                onChange={(e)=> setPlayedHours(Number(e.target.value))}
            />
            <label htmlFor="inputRating">Note</label>
            <input type="number"
                min="1"
                max="10"
                onChange={(e)=> setRating(Number(e.target.value))}
            />

            {/* Si statut à faire*/}
            <label htmlFor="heuresEstimees" >Nombre d'heures estimées</label>
            <input type="number"
                id="heuresEstimees"
                onChange={(e)=> setEstimatedHours(Number(e.target.value))}
            />
            <label htmlFor="inputPriorite">Priorité</label>
            <select id="inputPriorite" onChange={(e)=> setPriority(e.target.value as Priority)}>
                {PRIORITY_OPTIONS.map(priority =>(
                    <option key={priority}
                        value={priority}>
                            {priority}
                        </option>
                ))}
            </select>
            <button type="submit">Envoyer</button>
        </form>
        </>
        
    )
}