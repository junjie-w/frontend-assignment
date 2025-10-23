import React from 'react';
import './TextWithHighlights.scss';

interface TextWithHighlightsProps {
  text: string
  query: string
}

export const TextWithHighlights: React.FC<TextWithHighlightsProps> = ({ 
  text, 
  query, 
}) => {
  if (!query) return <>{text}</>;

  const lowerText = text.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const idx = lowerText.indexOf(lowerQuery);

  if (idx === -1) return <>{text}</>;

  return (
    <>
      {text.slice(0, idx)}
      <span className="uniwise-highlight">
        {text.slice(idx, idx + query.length)}
      </span>
      {text.slice(idx + query.length)}
    </>
  );
};
