import React, { useState } from "react";

const TextToSpeech = ({ englishText, spanishText }) => {
  const [isEnglish, setIsEnglish] = useState(true);
  const synth = window.speechSynthesis;

  const speak = (text, lang, voiceName) => {
    if (text !== "") {
      const utterance = new SpeechSynthesisUtterance(text);
      const voices = synth.getVoices();
      const voice = voices.find(
        (voice) => voice.name === voiceName && voice.lang === lang
      );

      if (voice) {
        utterance.voice = voice;
        utterance.rate = 0.85;
        synth.speak(utterance);
      } else {
        console.error(`Voice "${voiceName}" not found for "${lang}".`);
      }
    }
  };

  const handleButtonClick = (text, lang, voiceName) => {
    speak(text, lang, voiceName);
  };

  const toggleLanguage = () => {
    synth.cancel(); // Stop the current reading
    setIsEnglish(!isEnglish);
    setTimeout(() => {
      // Start reading in the other language after a short delay
      handleButtonClick(
        isEnglish ? spanishText : englishText,
        isEnglish ? "es-ES" : "en-US",
        isEnglish ? "Mónica" : "Samantha"
      );
    }, 100);
  };

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    padding: "2rem",
    backgroundColor: "#f5f5f5",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    maxWidth: "500px",
    margin: "0 auto",
  };

  const buttonStyle = {
    backgroundColor: "#4CAF50",
    border: "none",
    color: "white",
    padding: "10px 20px",
    textAlign: "center",
    textDecoration: "none",
    display: "inline-block",
    fontSize: "16px",
    margin: "10px",
    cursor: "pointer",
    borderRadius: "4px",
  };

  return (
    <div style={containerStyle}>
      <h2>{isEnglish ? "English" : "Spanish"}</h2>
      <p>{isEnglish ? englishText : spanishText}</p>
      <button
        style={buttonStyle}
        onClick={() =>
          handleButtonClick(
            isEnglish ? englishText : spanishText,
            isEnglish ? "en-US" : "es-ES",
            isEnglish ? "Samantha" : "Mónica"
          )
        }
      >
        Read {isEnglish ? "English" : "Spanish"} Text
      </button>
      <br />
      <button style={buttonStyle} onClick={toggleLanguage}>
        Switch to {isEnglish ? "Spanish" : "English"}
      </button>
    </div>
  );
};

export default TextToSpeech;
