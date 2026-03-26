import { create } from "zustand";
import type { Question } from "../types/kana.types";

interface QuizState {
    currentPage: number,
    quizData: Question[],

    setCurrentPage: (currentPage: number) => void,
    setQuizData: (quizData: Question[]) => void,
}

export const useQuizState = create<QuizState>((set, get) => ({
    currentPage: 0,
    quizData: [],

    setCurrentPage: (currentPage) => set({ currentPage }),
    setQuizData: (quizData) => set({ quizData })
}))