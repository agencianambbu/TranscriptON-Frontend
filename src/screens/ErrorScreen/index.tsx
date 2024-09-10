import React from "react";
import SadEmoji from "../../assets/sad-emoji.svg";
import { SecondaryButton } from "../../components/SecondaryButton";

import { AiOutlineRedo } from "react-icons/ai";
import { ErrorContainer } from "./styles";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";

export const ErrorScreen = () => {
  const navigate = useNavigate();

  return (
    <>
      <Sidebar />

      <ErrorContainer>
        <img src={SadEmoji} />

        <h1>
          Ops! <br />
          Parece que deu algo de errado com seu arquivo
        </h1>

        <SecondaryButton onClick={() => navigate("/")} icon={AiOutlineRedo}>
          Tente novamente
        </SecondaryButton>
      </ErrorContainer>
    </>
  );
};
