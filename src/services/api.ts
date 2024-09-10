import axios from "axios";
import { IWordSpelling } from "../interfaces/wordInterfaces";
const APIKey = "585a987dcf9241a4b7b481db08346463";
const refreshInterval = 5000;

const assembly = axios.create({
  baseURL: "https://api.assemblyai.com/v2",
  headers: {
    authorization: APIKey,
    "content-type": "application/json",
  },
});

export const getTranscript = async (
  wordList: IWordSpelling[],
  audioURL: string,
  callback: any
) => {
  let adaptedWordList = [];

  for (let x = 0; x < wordList.length; x++) {
    adaptedWordList.push({
      from: [wordList[x].from],
      to: wordList[x].to,
    });
  }

  const response = await assembly.post("/transcript", {
    audio_url: audioURL,
    language_code: "pt",
    disfluencies: false,
    punctuate: true,
    format_text: true,
    custom_spelling: adaptedWordList,
  });

  const checkCompletionInterval = setInterval(async () => {
    const transcript = await assembly.get(`/transcript/${response.data.id}`);
    const transcriptStatus = transcript.data.status;

    if (transcriptStatus === "completed") {
      let transcriptText = transcript.data.text;
      clearInterval(checkCompletionInterval);
      callback(transcriptText);
    } else {
    }
  }, refreshInterval);
};
