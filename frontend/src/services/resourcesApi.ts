import { api } from "../lib/axios";

export async function fetchChart(){
  
  try {
    const response = await api.get('/kana-chart');
    console.log(response.data);
    return response.data;
  } catch (error){
    console.error("Error Retrieving charts:", error);
    throw error;
  }

}