import { useContext, useEffect, useState } from "react";
import { Container, InfoContainer } from "../HomeScreen/styles";
import { IoIosReturnLeft } from "react-icons/io";
import { theme } from "../../theme";
import { Actions, AudioContainer, ResultText} from "./styles";
import { SecondaryButton } from "../../components/SecondaryButton";
import { AppContext } from "../../contexts/AppContext";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/Sidebar";
import JoditEditor from "jodit-react";
import { AudioPlayer } from 'react-audio-play';


export const ResultScreen = () => {
  const { transcriptedText, changeNavStep, audioURL } = useContext(AppContext);

  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (copied) {
      setTimeout(() => {
        setCopied(false);
      }, 2000);
    }

    changeNavStep(3);
  }, [copied]);

  const [content, setContent] = useState(transcriptedText);

  const config = {
    readonly: false,
  };

  const handleUpdate = ({ target }: any) => {
    const editorContet = target.value;
    setContent(editorContet);
  };

  return (
    <>
      <Sidebar />

      <div style={{ maxWidth: "1120px", margin: "auto" }}>
        <Container>
        <InfoContainer style={{marginBottom: 0}}>
            <h1>Aqui está o resultado da sua transcrição!</h1>
            <p>
            Após editar sua transcrição, copie e cole todo o texto em um arquivo do Word.
            </p>
          </InfoContainer>

         <AudioContainer>  
         <AudioPlayer sliderColor={theme.colors.secondary} src={audioURL} />
          </AudioContainer>

          <ResultText>
            <JoditEditor
              value={content}
              config={config}
              onBlur={handleUpdate}
              onChange={(newContent) => {}}
            />
          </ResultText>

          <Actions>
            <SecondaryButton
              onClick={() => {
                navigate("/");
              }}
              icon={<IoIosReturnLeft size={25} color={theme.colors.tertiary} />}
            >
              Nova transcrição
            </SecondaryButton>
          </Actions>
        </Container>
      </div>
    </>
  );
};
