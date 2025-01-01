import React, { useState } from 'react';

const Jarvis = () => {
  const [text, setText] = useState("");

  const speak = () => {
    if (!text) {
      alert("Please enter some text for Jarvis to speak.");
      return;
    }

    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 1;
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Sorry, your browser does not support text-to-speech.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Jarvis AI - Speak Function</h1>
      <textarea
        rows="5"
        cols="40"
        placeholder="Type what Jarvis should say..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        style={{ marginBottom: '20px', padding: '10px', fontSize: '16px' }}
      />
      <br />
      <button
        onClick={speak}
        style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
      >
        Speak
      </button>
    </div>
  );
};
console.log("Hello, Sir!");

export default Jarvis;
