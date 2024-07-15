"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const IntroNumberTheory: React.FC = () => {
  const t = useTranslations('IntroNumberTheory');
  const [number, setNumber] = useState<string>('');
  const [primeResult, setPrimeResult] = useState<string | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<number[]>([]);
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  const checkPrime = () => {
    const num = parseInt(number);
    if (num <= 1) {
      setPrimeResult(t('interactiveSection.resultNotPrime'));
      return;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        setPrimeResult(t('interactiveSection.resultNotPrime'));
        return;
      }
    }
    setPrimeResult(t('interactiveSection.resultPrime'));
  };

  const handleQuizSubmit = () => {
    const questions = t.raw('quiz.questions') as any[];
    let score = 0;
    quizAnswers.forEach((answer, index) => {
      if (answer === questions[index].correctAnswer) {
        score++;
      }
    });
    setQuizScore(score);
    setQuizSubmitted(true);
  };

  return (
    <div className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-8"
        >
          {t('title')}
        </motion.h1>

        {t.raw('sections')?.map((section: any, index: number) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
          >
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{section.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-line">{section.content}</p>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('interactiveSection.title')}</h2>
          <p className="text-gray-700 dark:text-gray-300 mb-4">{t('interactiveSection.instruction')}</p>
          <div className="flex items-center space-x-4 mb-4">
            <input
              type="number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Enter a number"
            />
            <button
              onClick={checkPrime}
              className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
            >
              {t('interactiveSection.checkButton')}
            </button>
          </div>
          {primeResult && (
            <p className="text-lg font-semibold text-center text-gray-900 dark:text-white">
              {number} {primeResult}
            </p>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{t('quiz.title')}</h2>
          {(t.raw('quiz.questions') as any[]).map((q, index) => (
            <div key={index} className="mb-4">
              <p className="text-gray-900 dark:text-white font-semibold mb-2">{q.question}</p>
              {q.options.map((option: string, optionIndex: number) => (
                <label key={optionIndex} className="block text-gray-700 dark:text-gray-300">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={optionIndex}
                    checked={quizAnswers[index] === optionIndex}
                    onChange={() => {
                      const newAnswers = [...quizAnswers];
                      newAnswers[index] = optionIndex;
                      setQuizAnswers(newAnswers);
                    }}
                    className="mr-2"
                    disabled={quizSubmitted}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          {!quizSubmitted ? (
            <button
              onClick={handleQuizSubmit}
              className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-300"
            >
              {t('quiz.submitQuiz')}
            </button>
          ) : (
            <div>
              <p className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                {t('quiz.yourScore')} {quizScore} {t('quiz.outOf')} {(t.raw('quiz.questions') as any[]).length}
              </p>
              <button
                onClick={() => {
                  setQuizSubmitted(false);
                  setQuizAnswers([]);
                }}
                className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-300"
              >
                {t('quiz.tryAgain')}
              </button>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default IntroNumberTheory;