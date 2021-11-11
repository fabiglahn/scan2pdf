import React, { FormEvent, useState } from 'react';
import usePostDocument from '../../utils/usePostDocument';
import styles from './AddDocumentForm.module.css';

type AddDocumentFormProps = {
  text: string;
};

function AddDocumentForm({ text }: AddDocumentFormProps): JSX.Element {
  const [title, setTitle] = useState('');
  const { isLoading, postDocument } = usePostDocument();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    const document = {
      title,
      text,
    };
    await postDocument(document);
    setTitle('');
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        className={styles.input}
        placeholder="Name deiner Datei"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="submit"
        disabled={!title || isLoading}
        className={styles.submit}
      />
    </form>
  );
}

export default AddDocumentForm;
