import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';
import Progress from '../../components/Progress/Progress';
import AddDocumentForm from '../../components/AddDocumentForm/AddDocumentForm';
import useRecognizeText from '../../utils/useRecognizeText';

function Scan(): JSX.Element {
  const [imageURL, setImageURL] = useState<string | null>(null);
  const { text, progress, recognize } = useRecognizeText();

  return (
    <div className={styles.container}>
      {text ? <p>{text}</p> : <ImageInput onImageUpload={setImageURL} />}
      {text && <AddDocumentForm text={text} />}
      {!text && progress && (
        <Progress progress={progress.progress} status={progress.status} />
      )}
      {!progress && (
        <button
          className={styles.scan}
          disabled={imageURL === null}
          onClick={() => {
            if (imageURL) {
              recognize(imageURL);
            }
          }}
        >
          SCAN
        </button>
      )}
      <a href="#" className={styles.link}>
        Docs
      </a>
    </div>
  );
}

export default Scan;
