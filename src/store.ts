import { create } from "zustand";
import { devtools } from "zustand/middleware";


type GodState = {
    modal: boolean,
    openModal: () => void,
    closeModal: () => void,
}

export const useGodStore = create<GodState>()(
    
    devtools((set) => ({
        modal: false,

        openModal: () => {
            set(() =>({
                modal: true
            }))
        },

        closeModal: () => {
            set(() => ({
                modal: false
            }))
        }
    }))
)