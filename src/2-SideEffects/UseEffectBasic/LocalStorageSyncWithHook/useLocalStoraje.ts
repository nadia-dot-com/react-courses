import { useState, useEffect } from "react";
import { logTagged } from "utils/logTagged";

export type UseLocalStorage = {
    storageValue: number;
}


export function useLocalStorage(storageKey: string): UseLocalStorage {
    const [value, setValue] = useState(parseInt(localStorage.getItem(storageKey) ?? '0', 10));

        useEffect(function readFromStorage() {
             try {
                 const stringValue = localStorage.getItem(storageKey) ?? '0';
                 logTagged('Read', stringValue);
                 const parsed = parseInt(stringValue, 10)
                 setValue(isNaN(parsed) ? 0: parsed)
             } catch (error) {
                 console.error('could not read from local storage');
                 console.error(error);
             }
         }, [storageKey]);
     
         useEffect(
             function writeToStorage() {
                 if (value === null) {
                     return;
                 }
                 try {
                     const stringValue = String(value);
                     logTagged('Write', stringValue);
                     localStorage.setItem(storageKey, stringValue);
                 } catch (error) {
                     console.error('could not read from local storage');
                     console.error(error);
                 }
             },
             [storageKey, value])
    

    return {
        storageValue: value,
    }
} 