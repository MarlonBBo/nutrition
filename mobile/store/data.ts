import { create } from 'zustand'


export type Data = {
    name: string;
    age: string;
    height: string;
    weight: string;
    gender: string;
    level: string;
    objective: string;
}

type DataState = {
    data: Data;
    setPageOne: (data: Omit<Data, "gender" | "level" | "objective">) => void;
    setPageTwo: (data: Pick<Data, "gender" | "level" | "objective">) => void;
}

export const useDataStore = create<DataState>((set)=> ({
    data: {
        name:'',
        age: '',
        height:'',
        weight:'',
        gender:'',
        level:'',
        objective: ''
    },

    setPageOne: (data) => set((state) => ({ data: {...state.data, ...data} })),
    setPageTwo: (data) => set((state) => ({ data: {...state.data, ...data} }))
}))