import { create } from "zustand";
import type { Question } from "../types/kana.types";

interface QuizState {
    currentPage: number,
    quizData: Question[],
    currentQuestion: number,
    score: number,

    setCurrentPage: (currentPage: number) => void,
    setQuizData: (quizData: Question[]) => void,
    setCurrentQuestion: (currentQuestion: number) => void,
    setScore: (score: number) => void,
}

export const useQuizState = create<QuizState>((set) => ({
    currentPage: 0,
    quizData: [],
    currentQuestion: 0,
    score: 0,

    setCurrentPage: (currentPage) => set({ currentPage }),
    setQuizData: (quizData) => set({ quizData }),
    setCurrentQuestion: (currentQuestion) => set({ currentQuestion}),
    setScore: (score) => set({ score})
}))