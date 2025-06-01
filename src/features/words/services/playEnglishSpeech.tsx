export const playEnglishSpeech = (text: string) => {
  const synth = window.speechSynthesis;

  const speakNow = () => {
    // ブラウザタブが非アクティブなら無視、いらんかもとおもって消してみるが、迷い中
    // if (document.visibilityState !== "visible") return;

    // 競合防止
    synth.cancel();

    const voices = synth.getVoices();
    const enVoice = voices.find((voice) => voice.lang.startsWith("en"));

    const utterance = new SpeechSynthesisUtterance(text);
    if (enVoice) {
      utterance.voice = enVoice;
    }
    utterance.lang = "en-US";
    synth.speak(utterance);
  };

  if (synth.getVoices().length === 0) {
    synth.onvoiceschanged = () => {
      speakNow();
    };
  } else {
    speakNow();
  }
};
