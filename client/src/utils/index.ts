import FileSaver from 'file-saver';
import { surpriseMePrompts, negativePrompts } from './constants';

export function getRandomPrompt(prompt: string, negative: boolean = false): string {

    const promps = !negative ? surpriseMePrompts : negativePrompts;

    const randomIndex = Math.floor(Math.random() * promps.length);
    const randomPrompt = promps[randomIndex];

    if (randomPrompt === prompt) return getRandomPrompt(prompt);

    return randomPrompt;
}

export async function downloadImage(_id: string, photo: string) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
}