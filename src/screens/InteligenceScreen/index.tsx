import React, { useContext, useEffect, useState } from "react";

import {
  Container,
  FromToContainer,
  InfoContainer,
  Table,
  Tip,
  Title,
} from "./styles";

import TipImg from "../../assets/tip.svg";
import { GrAddCircle } from "react-icons/gr";
import { FaTrash } from "react-icons/fa";
import ArrowRight from "../../assets/arrow-right.svg";

import { SecondaryButton } from "../../components/SecondaryButton";
import { theme } from "../../theme";
import { AppContext } from "../../contexts/AppContext";
import { Sidebar } from "../../components/Sidebar";
import { IWordSpelling } from "../../interfaces/wordInterfaces";
import { deleteWord, getAllWords, updateWord } from "../../services/backendService";
import { toast } from "react-toastify";

export const InteligenceScreen = () => {
  const {
    changeModalAddState,
    changeNavStep,
    wordList,
    updateWordList,
    changeModalUpdateState,
    updateWordId,
    changeModalDeleteState,
  } = useContext(AppContext);

  useEffect( () => {
    changeNavStep(4);
    updateWordList()
  }, []);

  const handleDeleteWord = async (id: number) => {
    updateWordId(id);
    changeModalDeleteState(true);
  };

  const handleUpdateWord = async (id: number) => {
    changeModalUpdateState(true);
    updateWordId(id);
  };

  return (
    <>
      <Sidebar />
      <Container>
        <InfoContainer>
          <h1>Inteligência ortográfica</h1>
          <p>
            O TranscriptON possui uma funcionalidade para{" "}
            <span>aprimoramento continuo de suas transcrições</span>. Os
            usuários do sistema podem identificar eventuais erros em palavras
            transcritas e, através da inteligência ortográfica da ferramenta,
            vamos ensinando as correções a serem aplicadas nas palavras,
            reduzindo assim os erros retornados a cada nova transcrição e
            tornando o TranscriptON em uma ferramenta mais eficiente.
          </p>
        </InfoContainer>

        <Tip>
          <img src={TipImg} />

          <div>
            <h2>Dica</h2>
            <p>
              Quando houver variações da mesma palavra com grafia diferente,
              deve-se adicionar uma nova linha.
            </p>
          </div>
        </Tip>

        {wordList.length > 0 && (
          <FromToContainer>
            <Title>
              <h3>De</h3>

              <h3>Para</h3>
            </Title>

            <Table>
              {wordList.map((it: IWordSpelling) => (
                <>
                  <div key={it.id}>
                    <div onClick={() => handleUpdateWord(it.id!)}>
                      <p>{it.from}</p>
                      <img src={ArrowRight} />

                      <p>{it.to.split("@").join(" ")}</p>
                    </div>
                    <FaTrash
                      onClick={() => handleDeleteWord(it.id!)}
                      className="delete"
                      color="red"
                    />
                  </div>
                </>
              ))}
            </Table>
          </FromToContainer>
        )}

        <SecondaryButton
          icon={<GrAddCircle color={theme.colors.tertiary} />}
          onClick={() => changeModalAddState(true)}
        >
          Adicionar palavra
        </SecondaryButton>
      </Container>
    </>
  );
};
