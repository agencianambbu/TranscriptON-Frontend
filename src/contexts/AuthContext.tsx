import React, { createContext, useState } from "react";
import {
  useForm,
  UseFormHandleSubmit,
  FieldValues,
  UseFormRegister,
  UseFormReset,
  SubmitHandler,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

interface IProps {
  children: React.ReactNode;
}

interface AuthProps {
  handleSubmit?: UseFormHandleSubmit<FieldValues, any>;
  register: UseFormRegister<FieldValues>;
  token: string;
  setToken: (item: string) => void;
  reset: UseFormReset<FieldValues>;
}

export const AuthContext = createContext<AuthProps>({} as AuthProps);

export const AppAuthProvider: React.FC<IProps> = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    mode: "all",
  });

  return (
    <AuthContext.Provider
      value={{
        handleSubmit,
        register,
        token,
        setToken,
        reset,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
