import React, { useState, useEffect } from 'react';
import questions from './questions';
import Timer from '../components/Timer';

const IQTestPage = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [remainingTime, setRemainingTime] = useState(1800); // Start with 30 minutes
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [error, setError] = useState('');

  const handleStartTest = () => {
    setTestStarted(true);
    setIsActive(true);
  };

  const handleSubmit = () => {
    if (Object.keys(selectedAnswers).length < questions.length) {
      setError('Please answer all questions before submitting.');
      return;
    }
    setIsActive(false);
    setShowResults(true);
  };

  const handleTimeUp = () => {
    setIsActive(false);
    setShowResults(true);
  };

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers(prev => ({ ...prev, [questionId]: answer }));
    const question = questions.find(q => q.id === questionId);
    if (question.answer === answer) {
      setCorrectAnswers(prev => prev + 1);
    }
  };

  const calculateIQ = (correctAnswers, remainingTime) => {
    const baseIQ = 100;
    const maxTime = 1800; // Max time is 30 minutes (1800 seconds)
    const timeTaken = maxTime - remainingTime; // Calculate time taken
    const timeFactor = Math.min(timeTaken / maxTime, 1); // Normalize time taken to a 0-1 range
    const score = baseIQ + (correctAnswers * 10) - (timeFactor * 20); // Adjusted formula
    return Math.round(score);
  };

  const getIQCategory = (iq) => {
    if (iq < 70) return 'Extremely Low';
    if (iq >= 70 && iq < 85) return 'Below Average';
    if (iq >= 85 && iq <= 115) return 'Average';
    if (iq > 115 && iq <= 130) return 'Above Average';
    if (iq > 130 && iq <= 145) return 'Gifted';
    if (iq > 145) return 'Highly Gifted';
    return 'Unknown';
  };

  const iqScore = calculateIQ(correctAnswers, remainingTime);
  const iqCategory = getIQCategory(iqScore);

  return (
    <div className="bg-gray-100 min-h-screen px-4 py-8">
      <div className="max-w-7xl mx-auto">
        {!testStarted ? (
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6">IQ Test Instructions</h1>
            <p className="text-lg text-gray-700 mb-4">
              Welcome to the IQ Test. This test is designed to measure your intellectual abilities and potential.
              Please read the following instructions carefully before you start:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-6 text-left mx-auto max-w-2xl">
              <li>The test consists of multiple-choice questions.</li>
              <li>Select the answer that you think is correct.</li>
              <li>There is no time limit, but try to complete the test in a reasonable amount of time.</li>
              <li>Your results will be calculated based on the number of correct answers and the time taken to complete the test.</li>
            </ul>
            <button
              className="bg-indigo-600 text-white py-2 px-6 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
              onClick={handleStartTest}
            >
              Start Test
            </button>
          </div>
        ) : (
          <div>
            {!showResults ? (
              <>
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6 text-center">IQ Test</h1>
                <Timer isActive={isActive} onTimeUpdate={setRemainingTime} onTimeUp={handleTimeUp} initialTime={1800} />
                <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
                  {questions.map((q) => (
                    <div key={q.id} className="mb-6">
                      <p className="text-lg font-medium text-gray-700 mb-4">{q.question}</p>
                      {q.options.map((option, index) => (
                        <div key={index} className="flex items-center mb-2">
                          <input
                            type="radio"
                            name={`question-${q.id}`}
                            id={`option-${q.id}-${index}`}
                            className="text-indigo-600 focus:ring-indigo-500"
                            onChange={() => handleAnswerChange(q.id, option)}
                          />
                          <label
                            className="ml-3 text-gray-600"
                            htmlFor={`option-${q.id}-${index}`}
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                    </div>
                  ))}
                  {error && <p className="text-red-500">{error}</p>}
                  <button
                    className="w-full bg-indigo-600 text-white py-2 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </div>
              </>
            ) : (
              <div className="text-center">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-6">Your Results</h1>
                <p className="text-lg text-gray-700 mb-4">
                  You answered {correctAnswers} out of {questions.length} questions correctly.
                </p>
                <p className="text-lg text-gray-700 mb-4">
                  Time taken: {Math.floor((1800 - remainingTime) / 60)}:{(1800 - remainingTime) % 60 < 10 ? `0${(1800 - remainingTime) % 60}` : (1800 - remainingTime) % 60} minutes
                </p>
                <p className="text-2xl font-bold text-gray-900 mb-4">
                  Your IQ Score: {iqScore}
                </p>
                <p className="text-2xl font-bold mb-4" style={{ color: getIQCategory(iqScore) }}>
                  Category: {iqCategory}
                </p>
                <button
                  className="bg-indigo-600 text-white py-2 px-6 rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-4"
                  onClick={() => window.location.reload()}
                >
                  Restart Test
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default IQTestPage;
