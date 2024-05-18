import { useRef, useState } from "react";
import PageHeading from "@/components/Common/PageHeading";
import classes from "./style.module.scss";

const AudioTestPage = () => {
  const mediaRecorder = useRef(null);
  const chunks = useRef([]);
  const [audio, setAudio] = useState("");
  const [isRecording, setIsRecording] = useState(false);

  const handleClick = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      console.log("Method getUserMedia supported.");
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          setAudio("");
          setIsRecording(true);
          chunks.current = [];
          mediaRecorder.current = new MediaRecorder(stream);
          mediaRecorder.current.ondataavailable = (e) => {
            chunks.current.push(e.data);
          };
          mediaRecorder.current.onstop = () => {
            setIsRecording(false);
            const blob = new Blob(chunks.current, { type: "audio/ogg; codecs=opus" });
            const audioURL = window.URL.createObjectURL(blob);
            setAudio(audioURL);
          };
          mediaRecorder.current.start();
          console.log("Recorder State:", mediaRecorder.current.state);
          setTimeout(() => {
            mediaRecorder.current.stop();
          }, 10000);
        })
        .catch((err) => {
          console.error(`The following getUserMedia error occurred: ${err}`);
        });
    } else {
      console.error("Method getUserMedia not supported on your browser!");
      alert("Method getUserMedia not supported on your browser!");
    }
  };

  return (
    <div className={classes.page}>
      <PageHeading>Micro Test</PageHeading>
      <div className={classes.container}>
        <p>Speak loudly into the microphone for 10 seconds so we can record it</p>
        <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <audio src={audio} controls></audio>
          <button className="btn btn-primary" onClick={handleClick} disabled={isRecording}>
            {isRecording ? "Recording audio from your micro" : "Test your micro"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AudioTestPage;
