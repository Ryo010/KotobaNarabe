import { create } from "zustand";

interface QuizState {
    currentPage: number,


    setCurrentPage: (currentPage: number) => void;
}

export const useQuizState = create<QuizState>((set, get) => ({
    currentPage: 0,

    setCurrentPage: (currentPage) => set({ currentPage }),
}))