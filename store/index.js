import { atom } from 'jotai'
import { atomWithStorage } from "jotai/utils";

export const logoAtom = atom({
    email: '',
    password: ''
});

export const accidAtom = atomWithStorage('')
export const isLoggedInAtom = atom(false)
export const userAtom = atom({})
