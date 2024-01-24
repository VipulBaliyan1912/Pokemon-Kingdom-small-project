import React from 'react';

export function Button({ loading, className, handleClick, title, styles }) {
  return (
    <button className={className} style={styles} onClick={handleClick}>
      {loading ? 'Loading...' : title}
    </button>
  );
}
