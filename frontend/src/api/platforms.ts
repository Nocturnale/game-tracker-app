const API_URL = import.meta.env.VITE_API_URL;

export type PlatformOption = {
    id: string;
    name: string;
}

export async function getPlatforms(): Promise<PlatformOption[]>{
    const response = await fetch(`${API_URL}/platforms`);

    if(!response.ok){
        throw new Error('Impossible de récupérer les plateformes')
    }

    return response.json()
}