import React from 'react';
import styles from './DocPreview.module.css';

export type Document = {
  id?: number;
  title: string;
  text: string;
};

function DocPreview({ title, text }: Document): JSX.Element {
  return (
    <div>
      <h2>{title}</h2>
      <p className={styles.text}>{text}</p>
    </div>
  );
}

export default DocPreview;
