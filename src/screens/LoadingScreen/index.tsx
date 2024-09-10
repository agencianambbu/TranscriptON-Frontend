import React, { useContext, useEffect, useState } from "react";
import { Container } from "../HomeScreen/styles";
import Exclamation from "../../assets/exclamation.svg";
import { Info, Loading } from "./styles";
import { AppContext } from "../../contexts/AppContext";
import { getTranscript } from "../../services/api";
import { useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import { theme } from "../../theme";
import { Sidebar } from "../../components/Sidebar";

export const LoadingScreen = () => {
  const {
    audioURL,
    changeTranscriptedText,
    changeNavStep,
    wordList,
  } = useContext(AppContext);

  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);

  const getTranscription = () => {


    try {
      getTranscript(wordList, audioURL, function (x: string) {
        setData(x);
      });
    } catch (error) {
      navigate("/error");
    }
  };

  useEffect(() => {
    if (!data) {
      getTranscription();
    }

    if (data) {
      changeTranscriptedText(data);
      navigate("/result");
    }

    changeNavStep(2);
  }, [data]);

  return (
    <>
      <Sidebar />
      <Container>
        <Loading>
          <ClipLoader
            color={theme.colors.secondary}
            loading={true}
            size={120}
            aria-label="Loading Spinner"
          />

          <h1>Carregando sua transcrição</h1>
          <p>Aguarde enquanto sua transcrição está sendo processada.</p>
        </Loading>

        <Info>
          <img src={Exclamation} />
          <h3>Não feche essa aba!</h3>
          <p>
            O processo costuma demorar 1/3 do tempo total do material. <br />
            Ex : Um áudio de 1:00:00 levará aproximadamente 00:20:00.
          </p>
        </Info>
      </Container>
      \
    </>
  );
};
