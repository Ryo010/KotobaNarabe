import type { Question, QuizRequest } from '../types/kana.types';
import { api } from "../lib/axios";


export const fetchQuiz = async (payload: QuizRequest) => {
  try {
    const response = await api.post("/generate-questions-kana", payload);
    const questions = response.data as Question[];
    console.log("Quiz API response:", questions);
    return questions;
  } catch (error) {
    console.error("Error fetching quiz:", error);
    throw error;
  }
};