import React, { useState } from 'react';
import styles from './DocPreview.module.css';

export type Document = {
  id?: number;
  title: string;
  text: string;
};

function DocPreview({ title, text }: Document): JSX.Element {
  const [isCollapsed, setIsCollapsed] = useState(true);
  return (
    <article>
      <h3 className={styles.title}>{title}</h3>
      <details
        className={styles.text}
        open={!isCollapsed}
        onToggle={() => setIsCollapsed(!isCollapsed)}
      >
        <summary className={styles.disclosure}>
          {isCollapsed ? `${text.substring(0, 20)}...` : text}
        </summary>
      </details>
    </article>
  );
}

export default DocPreview;
