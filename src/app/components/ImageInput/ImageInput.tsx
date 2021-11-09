import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

function ImageInput() {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event?.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageUrl(newImageURL);
  };

  return (
    <label className={styles.fileUpload}>
      <input
        className={styles.input}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
      />
      ▷ UPLOAD A PICTURE
      {imageUrl && <img src={imageUrl} />}
    </label>
  );
}

export default ImageInput;
