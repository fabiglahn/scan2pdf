import React, { useState } from 'react';
import ImageInput from '../../components/ImageInput/ImageInput';
import styles from './Scan.module.css';

function Scan() {
  const [imageURL, setImageURL] = useState<string | null>(null);

  return (
    <div className={styles.container}>
      <ImageInput onImageUpload={setImageURL} />
      <button className={styles.scan} disabled={imageURL === null}>
        SCAN
      </button>
      <a href="#" className={styles.link}>
        Docs
      </a>
    </div>
  );
}

export default Scan;
