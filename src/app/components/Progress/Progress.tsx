import React from 'react';
import { RecognizeProgress } from '../../utils/ocr';
import styles from './Progress.module.css';

function Progress({ status, progress }: RecognizeProgress): JSX.Element {
  return (
    <aside className={styles.container}>
      <p>{(progress * 100).toFixed(0)}%</p>
      {status}
      <progress value={progress} max={100} />
    </aside>
  );
}

export default Progress;
