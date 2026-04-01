import React from 'react';

// Decorative code symbols scattered in the background (like the original site)
const symbols = [
  { top: '12%', left: '5%', text: '[]' },
  { top: '22%', left: '72%', text: '{}' },
  { top: '35%', left: '88%', text: '</>' },
  { top: '48%', left: '15%', text: '()' },
  { top: '60%', left: '80%', text: '[]' },
  { top: '72%', left: '6%', text: '{}' },
  { top: '82%', left: '60%', text: '</>' },
  { top: '18%', left: '42%', text: '()' },
  { top: '90%', left: '85%', text: '[]' },
  { top: '55%', left: '48%', text: '{}' },
  { top: '8%', left: '85%', text: '()' },
  { top: '65%', left: '35%', text: '</>' },
];

const Background = () => {
  return (
    <>
      <div className="page-bg" />
      <div className="code-symbols" aria-hidden="true">
        {symbols.map((s, i) => (
          <span
            key={i}
            className="code-symbol"
            style={{ top: s.top, left: s.left }}
          >
            {s.text}
          </span>
        ))}
      </div>
    </>
  );
};

export default Background;
