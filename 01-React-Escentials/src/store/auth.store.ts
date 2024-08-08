import { create } from "zustand";

interface authState {
    status : "Autenticado" | "No autenticado" | "Chequeando";
    token?: string | null;
    user?: {
        name: string;
        email: string;
    } | null;

    login: (email: string, password: string) => void;
    logout: () => void;

}


export const useAuthStore = create<authState>()((set) => ({
    status: "Chequeando",
    token: undefined,
    user: undefined,

    login: (email: string, password: string) => {

        set({
            status:"Autenticado",
            token: "BA123",
            user: {
                name: "John Doe",
                email: email
            }

        })
    },

    logout: () => {
        set({ status: "No autenticado", token: undefined, user: undefined });
    },
}) )