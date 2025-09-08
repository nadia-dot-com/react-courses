import { generateUniqueId as id } from "hooks/generateUniqueId";

export interface ItemData {
    id: string;
    emoji: string;
}

export const ITEMS: ItemData[] = [
    { id: id(), emoji: '🗾' },
    { id: id(), emoji: '🎑' },
    { id: id(), emoji: '🏞' },
    { id: id(), emoji: '🌅' },
    { id: id(), emoji: '🌄' },
    { id: id(), emoji: '🌠' },
    { id: id(), emoji: '🎇' },
    { id: id(), emoji: '🎆' },
    { id: id(), emoji: '🌇' },
    { id: id(), emoji: '🌆' },
    { id: id(), emoji: '🏙' },
    { id: id(), emoji: '🌃' },
    { id: id(), emoji: '🌌' },
    { id: id(), emoji: '🌉' },
    { id: id(), emoji: '🌁' },
]