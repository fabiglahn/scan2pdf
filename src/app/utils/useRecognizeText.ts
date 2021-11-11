import { useState } from 'react';
import { recognizeText, RecognizeProgress } from './ocr';

function useRecognizeText() {
  const [text, setText] = useState<string | null>(null);
  const [progress, setProgress] = useState<RecognizeProgress | null>(null);

  const recognize = (imageURL: string) => {
    recognizeText(imageURL, setProgress).then(setText);
  };

  return { text, progress, recognize };
}

export default useRecognizeText;
