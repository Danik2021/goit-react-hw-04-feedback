import React from 'react';

export const FeedbackOptions = ({ onLeaveFeedback }) => {
  return (
    <div className="buttons">
      <button onClick={() => onLeaveFeedback('good')}>Good</button>
      <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
      <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
    </div>
  );
};
