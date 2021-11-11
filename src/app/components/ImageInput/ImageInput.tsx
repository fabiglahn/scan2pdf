import React, { ChangeEvent, useState } from 'react';
import styles from './ImageInput.module.css';

type ImageInputProps = {
  onImageUpload: (url: string) => void;
};

function ImageInput({ onImageUpload }: ImageInputProps) {
  const [imageURL, setImageURL] = useState<string | null>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files || event.target.files.length === 0) {
      return;
    }
    const file = event?.target.files[0];
    const newImageURL = URL.createObjectURL(file);
    setImageURL(newImageURL);
    onImageUpload(newImageURL);
  };

  return (
    <label className={styles.fileUpload}>
      <input
        className={styles.input}
        type="file"
        accept="image/png, image/jpeg"
        onChange={handleChange}
      />
      {imageURL ? (
        <img src={imageURL} className={styles.preview} />
      ) : (
        <p>▷ UPLOAD A PICTURE</p>
      )}
    </label>
  );
}

export default ImageInput;
