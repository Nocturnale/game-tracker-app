
export type Priority = "Basse" | "Moyenne" | "Haute";
export type Status = "À faire" | "En cours" | "Terminé" | "Abandonné";
export type Device = typeof DEVICES[number]["value"]

export const STATUS_OPTIONS: Status[] = [
  "À faire",
  "En cours",
  "Terminé",
  "Abandonné"
];

export const PRIORITY_OPTIONS: Priority[] = [
  "Basse",
  "Moyenne",
  "Haute"
]
export const DEVICES = [
  {label: "PC",value: "pc"},
  {label: "Game Boy", value: "gameboy"},
  {label: "Game Boy Color",value: "gameboyColor"},  
  {label: "Game Boy Advance",value: "gameboyAdvance"},
  {label: "DS",value: "ds"},
  {label: "3DS",value: "3ds"},
  {label: "Playstation",value: "playstation"},
  {label: "Playstation 2",value: "playstation2"},
  {label: "NES",value: "nes"},  
  {label: "Super NES",value: "superNes"},  
  {label: "N64",value: "n64"},
  {label: "Switch",value: "switch"},
  {label: "Switch 2",value: "switch2"},
  {label: "Wii",value: "wii"},{label: "Wii U",value: "wiiU"},
  {label: "Xbox",value: "xbox"},
  {label: "Mobile",value: "mobile"},
  {label: "Flash",value: "flash"}
] as const;

export interface Game {
  id: number;
  title: string;
  playedHours: number;
  estimatedHours:number;
  rating: number;
  priority: Priority;
  status: Status;
  device: Device;
}
 