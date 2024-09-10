import axios from "axios";
import { getToken } from "../utils/getToken";

const api = axios.create({
  baseURL: "https://blendon-transcripton-backend.coqgvu.easypanel.host/auth",
});

export const login = async (email: string, password: string) => {
  const user = await api.post("/login", { email, password });

  return user;
};

export const logout = async (token: string) => {

  await api.post("/logout", { headers: { Authorization: `Bearer ${getToken()}` } });
};
