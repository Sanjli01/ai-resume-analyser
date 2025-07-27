/**
 * Formats a file size in bytes to a human-readable string (KB, MB, GB)
* @param bytes - The size in bytes
@returns A formatted string with the appropriate unit
*/
import clsx, {type ClassValue} from "clsx";
import {twMerge} from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export function formatSize(bytes: number): string {
    if(bytes === 0) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB' , 'MB', 'GB', 'TB'];

    const i = Math.log(bytes) / Math.log(k);

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' KB';
}



export const generateUUID = () => crypto.randomUUID();