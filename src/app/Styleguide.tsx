import React from 'react';

function Styleguide() {
  return (
    <div style={{ margin: '0px', display: 'grid', gap: '5rem' }}>
      <h2>COLORS</h2>
      <div style={{ display: 'flex', gap: '0.5rem' }}>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'var(--color-primary)',
            }}
          ></div>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'var(--color-secondary)',
            }}
          ></div>
        </div>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'var(--color-tertiary)',
            }}
          ></div>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              background: 'var(--color-quarternary)',
            }}
          ></div>
        </div>
        <div style={{ display: 'grid', gap: '0.5rem' }}>
          <div
            style={{
              width: '2rem',
              height: '2rem',
              borderRadius: '50%',
              border: '0.1px solid var(--color-primary)',
              background: 'var(--color-background)',
            }}
          ></div>
        </div>
      </div>
      <div style={{ display: 'grid', gap: '0.5rem' }}>
        <h2>FONT</h2>
        <p>Lato</p>
      </div>
      <div>
        <h1>HEADLINES</h1>
        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Headline 4</h4>
        <h5>Headline 5</h5>
        <p>Paragraph</p>
        <p
          style={{
            color: 'var(--color-quarternary',
          }}
        >
          Link
        </p>
      </div>
      <div
        style={{
          display: 'flex',
          gap: 10,
        }}
      >
        <div
          style={{
            width: 100,
            height: 30,
            background: 'var(--color-primary)',
            borderRadius: 50,
          }}
        />
        <div
          style={{
            width: 30,
            height: 30,
            background: 'var(--color-quarternary)',
            borderRadius: 50,
          }}
        />
      </div>
    </div>
  );
}

export default Styleguide;
