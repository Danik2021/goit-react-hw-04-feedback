import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// components
import { Section } from 'components/Section/Section';

const App = () => {
  let [good, setGood] = useState(0);
  let [neutral, setNeutral] = useState(0);
  let [bad, setBad] = useState(0);

  const handleFeedback = type => {
    switch (type) {
      case 'good':
        setGood(prevGood => (prevGood += 1));
        break;
      case 'neutral':
        setNeutral(prevNeutral => (prevNeutral += 1));
        break;
      case 'bad':
        setBad(prevBad => (prevBad += 1));
        break;
      default:
        console.log('Nothing to do!');
    }
  };

  const countTotalFeedback = (good, bad, neutral) => {
    return good + neutral + bad;
  };

  const countPositivePercentage = (total, good) => {
    return total ? Math.round((good / total) * 100) : 0;
  };

  const total = countTotalFeedback(good, bad, neutral);
  const positivePercentage = countPositivePercentage(total, good);

  return (
    <>
      <Section
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        positivePercentage={positivePercentage}
        onLeaveFeedback={handleFeedback}
      />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
