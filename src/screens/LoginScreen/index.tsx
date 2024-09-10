import React, { useState, useContext } from "react";
import { Container, Form, InputContainer } from "./styles";
import { SubmitHandler } from "react-hook-form";
import User from "../../assets/iconamoon_profile-fill.svg";
import Padlock from "../../assets/mdi_password.svg";
import Arrow from "../../assets/Frame.svg";
import Logo from "../../components/Logo";
import { theme } from "../../theme";
import { AuthContext } from "../../contexts/AuthContext";
import { Navigate, useNavigate } from "react-router-dom";
import { login } from "../../services/authService";
import { toast } from "react-toastify";

interface DataProps {
  email: string;
  password: string;
}

export const LoginScreen = () => {
  const [colorUser, setColorUser] = useState<boolean>(false);
  const [colorPadlock, setColorPadlock] = useState<boolean>(false);

  const { handleSubmit, register, setToken, reset, token } =
    useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<DataProps> = async (data) => {
    await login(data.email, data.password)
      .then((response) => {
        if (response.status === 200) {
          navigate("/");
          localStorage.setItem("token", JSON.stringify(response.data.token));
          setToken(response.data.token);
          reset();
        }
      })
      .catch((error) => {
        toast.error("E-mail ou senha incorretos!");
      });
  };

  if (token) return <Navigate to="/" />;

  if(!handleSubmit){
    return null
  }

    return (
      <>
        <Container>
          <Logo />
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="login">Usuário</label>
              <InputContainer>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="iconamoon:profile-fill"
                    opacity="0.5"
                    fill="#757897"
                    style={colorUser ? { opacity: "1" } : { opacity: "0.5" }}
                  >
                    <path
                      id="Vector"
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M8 7C8 5.93913 8.42143 4.92172 9.17157 4.17157C9.92172 3.42143 10.9391 3 12 3C13.0609 3 14.0783 3.42143 14.8284 4.17157C15.5786 4.92172 16 5.93913 16 7C16 8.06087 15.5786 9.07828 14.8284 9.82843C14.0783 10.5786 13.0609 11 12 11C10.9391 11 9.92172 10.5786 9.17157 9.82843C8.42143 9.07828 8 8.06087 8 7ZM8 13C6.67392 13 5.40215 13.5268 4.46447 14.4645C3.52678 15.4021 3 16.6739 3 18C3 18.7956 3.31607 19.5587 3.87868 20.1213C4.44129 20.6839 5.20435 21 6 21H18C18.7956 21 19.5587 20.6839 20.1213 20.1213C20.6839 19.5587 21 18.7956 21 18C21 16.6739 20.4732 15.4021 19.5355 14.4645C18.5979 13.5268 17.3261 13 16 13H8Z"
                      fill="#757897"
                      style={
                        colorUser
                          ? { fill: theme.colors.secondary }
                          : { fill: "#757897" }
                      }
                    />
                  </g>
                </svg>
                <input
                  type="text"
                  placeholder="Login"
                  {...register("email", {
                    onChange: ({ target }) =>
                      target.value ? setColorUser(true) : setColorUser(false),
                  })}
                />
              </InputContainer>
            </div>
            <div>
              <label htmlFor="login">Senha</label>
              <InputContainer>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g
                    id="mdi:password"
                    opacity="0.5"
                    style={colorPadlock ? { opacity: "1" } : { opacity: "0.5" }}
                  >
                    <path
                      id="Vector"
                      d="M12 17C12.5304 17 13.0391 16.7893 13.4142 16.4142C13.7893 16.0391 14 15.5304 14 15C14 14.4696 13.7893 13.9609 13.4142 13.5858C13.0391 13.2107 12.5304 13 12 13C11.4696 13 10.9609 13.2107 10.5858 13.5858C10.2107 13.9609 10 14.4696 10 15C10 15.5304 10.2107 16.0391 10.5858 16.4142C10.9609 16.7893 11.4696 17 12 17ZM18 8C18.5304 8 19.0391 8.21071 19.4142 8.58579C19.7893 8.96086 20 9.46957 20 10V20C20 20.5304 19.7893 21.0391 19.4142 21.4142C19.0391 21.7893 18.5304 22 18 22H6C5.46957 22 4.96086 21.7893 4.58579 21.4142C4.21071 21.0391 4 20.5304 4 20V10C4 9.46957 4.21071 8.96086 4.58579 8.58579C4.96086 8.21071 5.46957 8 6 8H7V6C7 4.67392 7.52678 3.40215 8.46447 2.46447C9.40215 1.52678 10.6739 1 12 1C12.6566 1 13.3068 1.12933 13.9134 1.3806C14.52 1.63188 15.0712 2.00017 15.5355 2.46447C15.9998 2.92876 16.3681 3.47995 16.6194 4.08658C16.8707 4.69321 17 5.34339 17 6V8H18ZM12 3C11.2044 3 10.4413 3.31607 9.87868 3.87868C9.31607 4.44129 9 5.20435 9 6V8H15V6C15 5.20435 14.6839 4.44129 14.1213 3.87868C13.5587 3.31607 12.7956 3 12 3Z"
                      fill="#757897"
                      style={
                        colorPadlock
                          ? { fill: theme.colors.secondary }
                          : { fill: "#757897" }
                      }
                    />
                  </g>
                </svg>
                <input
                  type="password"
                  placeholder="Senha"
                  {...register("password", {
                    onChange: ({ target }) =>
                      target.value
                        ? setColorPadlock(true)
                        : setColorPadlock(false),
                  })}
                />
              </InputContainer>
            </div>
            <button type="submit">
              Entrar
              <img src={Arrow} alt="Arrow" />
            </button>
          </Form>
        </Container>
      </>
    );
};
