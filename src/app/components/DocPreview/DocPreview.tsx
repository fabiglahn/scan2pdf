import React from 'react';
import styles from './DocPreview.module.css';

type DocPreviewProps = {
  title: string;
  text: string;
};

export default function DocPreview({
  title,
  text,
}: DocPreviewProps): JSX.Element {
  return (
    <div className={styles.container}>
      <h1 className={styles.h1}>Your documents</h1>
      <div className={styles.wrapper}>
        <article className={styles.doc}>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
        <article className={styles.doc}>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
        <article className={styles.doc}>
          <h2>{title}</h2>
          <p>{text}</p>
        </article>
      </div>
    </div>
  );
}
