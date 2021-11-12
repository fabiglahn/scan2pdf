import React from 'react';
import styles from './SearchBar.module.css';

export default function SearchBar(): JSX.Element {
  return (
    <div className={styles.searchbar}>
      <input type="text" placeholder="Search" className={styles.search} />
      <input type="submit" value="Search" className={styles.submit} />
    </div>
  );
}
