import axios from "axios";
import { IWordSpelling } from "../interfaces/wordInterfaces";
import { getToken } from "../utils/getToken";

const api = axios.create({
  baseURL: "https://transcripton-1730885afe9f.herokuapp.com/custom-word",
});


export const getAllWords = async () => {

  const words = await api.get("/get-all", {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  return words;
};

export const createWord = async (from: string, to: string ) => {

  await api.post(
    "/create",
    { from, to },
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );
};

export const deleteWord = async (id: number ) => {
  await api.delete(`/delete-one/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });
};

export const getOneWord = async (id: number ) => {
  const word = await api.get(`/get-one/${id}`, {
    headers: { Authorization: `Bearer ${getToken()}` },
  });

  return word;
};

export const updateWord = async (
  id: number,
  from: string,
  to: string
  
) => {
  await api.put(
    `/update-one/${id}`,
    { from, to },
    {
      headers: { Authorization: `Bearer ${getToken()}` },
    }
  );
};
