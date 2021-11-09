import React from 'react';

function Styleguide() {
  return (
    <div>
      <h2>COLORS</h2>
      <ul>
        <li style={{ color: 'var(--color-primary)' }}>Primary</li>
        <li style={{ color: 'var(--color-secondary)' }}>Secondary</li>
        <li style={{ color: 'var(--color-tertiary)' }}>Tertiary</li>
        <li style={{ color: 'var(--color-quarternary)' }}>Quarternary</li>
        <li style={{ color: 'var(--color-background)' }}>Background</li>
      </ul>
      <div>
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
