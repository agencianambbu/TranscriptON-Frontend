import React, { createContext, useCallback, useEffect, useState, useContext } from "react";
import { IWordSpelling } from "../interfaces/wordInterfaces";
import { getAllWords } from "../services/backendService";
import { AuthContext } from "./AuthContext";

interface IProps {
  children: React.ReactNode;
}

interface IAppContextProps {
  audioURL: string;
  changeAudioURL: (url: string) => void;
  transcriptedText: any;
  changeTranscriptedText: (text: any) => void;
  activeNavStep: number;
  changeNavStep: (step: number) => void;
  isModalAddActive: boolean;
  changeModalAddState: (isActive: boolean) => void;
  isModalUpdateActive: boolean;
  changeModalUpdateState: (isActive: boolean) => void;
  wordList: IWordSpelling[];
  updateWordList: () => void;
  updateWordId: (id: number) => void;
  wordId: number;
  isModalDeleteActive: boolean;
  changeModalDeleteState: (isActive: boolean) => void;
}

export const AppContext = createContext<IAppContextProps>({} as IAppContextProps);

export const AppProvider: React.FC<IProps> = ({ children }) => {
  const [audioURL, setAudioURL] = useState("");

  const [transcriptedText, setTranscriptedText] = useState({});
  const [activeNavStep, setActiveNavStep] = useState(1);
  const [isModalAddActive, setIsModalAddActive] = useState(false);
  const [isModalUpdateActive, setIsModalUpdateActive] = useState(false);
  const [isModalDeleteActive, setIsModalDeleteActive] = useState(false);
  const [wordList, setWordList] = useState<IWordSpelling[]>([]);
  const [wordId, setWordId] = useState(0);

  useEffect(() => {
    updateWordList();
  }, []);

  const changeAudioURL = useCallback((url: string) => {
    setAudioURL(url);
  }, []);

  const changeTranscriptedText = useCallback((text: any) => {
    setTranscriptedText(text);
  }, []);

  const changeNavStep = useCallback((step: number) => {
    setActiveNavStep(step);
  }, []);

  const changeModalAddState = useCallback((isActive: boolean) => {
    setIsModalAddActive(isActive);
  }, []);

  const changeModalDeleteState = useCallback((isActive: boolean) => {
    setIsModalDeleteActive(isActive);
  }, []);

  const changeModalUpdateState = useCallback((isActive: boolean) => {
    setIsModalUpdateActive(isActive);
  }, []);

  const updateWordList = useCallback(async () => {
    const response = await getAllWords();
    setWordList(response.data);
  }, []);

  const updateWordId = useCallback((id: number) => {
    setWordId(id);
  }, []);

  return (
    <AppContext.Provider
      value={{
        audioURL,
        changeAudioURL,
        transcriptedText,
        changeTranscriptedText,
        activeNavStep,
        changeNavStep,
        changeModalAddState,
        isModalAddActive,
        changeModalUpdateState,
        isModalUpdateActive,
        updateWordList,
        wordList,
        updateWordId,
        wordId,
        changeModalDeleteState,
        isModalDeleteActive,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
