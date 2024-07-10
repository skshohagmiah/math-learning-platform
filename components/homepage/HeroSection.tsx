'use client';

import { useEffect, useState } from 'react';
import { useLocale, useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';
import { motion, AnimatePresence } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Button } from '../ui/button';
import Link from 'next/link';

const Hero: React.FC = () => {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState('');

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const steps = [
    {
      type: 'intro',
      title: "Introduction to Derivatives",
      content: "We'll learn about derivatives, which measure the rate of change of a function.",
      equation: "f(x) = x^2",
    },
    {
      type: 'explanation',
      title: "What is a Derivative?",
      content: "The derivative of a function at a point is the slope of the tangent line to the function at that point.",
      equation: "\\frac{d}{dx} f(x) = \\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}",
    },
    {
      type: 'visual',
      title: "Visualizing Derivatives",
      content: "Let's look at the graph of f(x) = x² and its derivative f'(x) = 2x.",
      chartData: [
        { x: -2, fx: 4, fpx: -4 },
        { x: -1, fx: 1, fpx: -2 },
        { x: 0, fx: 0, fpx: 0 },
        { x: 1, fx: 1, fpx: 2 },
        { x: 2, fx: 4, fpx: 4 },
      ],
    },
    {
      type: 'practice',
      title: "Practice: Find the Derivative",
      content: "What is the derivative of f(x) = x³ + 2x + 1?",
      equation: "\\frac{d}{dx} (x^3 + 2x + 1) = ?",
      correctAnswer: "3x^2 + 2",
    },
  ];

  const handleNextStep = () => {
    setStep((prevStep) => (prevStep + 1) % steps.length);
    setUserAnswer('');
    setFeedback('');
  };

  const handleSubmit = () => {
    if (userAnswer.replace(/\s/g, '') === steps[step]?.correctAnswer?.replace(/\s/g, '')) {
      setFeedback("Correct! Great job!");
    } else {
      setFeedback("Not quite. Try again!");
    }
  };

  const renderStepContent = (step:any) => {
    switch (step.type) {
      case 'intro':
      case 'explanation':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="mb-4">{step.content}</p>
            <BlockMath math={step.equation} />
          </div>
        );
      case 'visual':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="mb-4">{step.content}</p>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={step.chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="x" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="fx" stroke="#8884d8" name="f(x) = x²" />
                <Line type="monotone" dataKey="fpx" stroke="#82ca9d" name="f'(x) = 2x" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        );
      case 'practice':
        return (
          <div>
            <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
            <p className="mb-4">{step.content}</p>
            <BlockMath math={step.equation} />
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full p-2 border rounded mt-4 text-gray-800"
              placeholder="Enter your answer (e.g., 2x + 1)"
            />
            <button
              onClick={handleSubmit}
              className="mt-4 bg-green-500 text-white px-4 py-2 rounded"
            >
              Submit
            </button>
            {feedback && (
              <p className={`mt-4 ${feedback.includes('Correct') ? 'text-green-500' : 'text-red-500'}`}>
                {feedback}
              </p>
            )}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section className=" py-16">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-6xl font-extrabold mb-6 text-center"
        >
         {locale === 'bn' ? <span className='text-blue-500'>{t('colorfulTitle')}</span> : ''} {t('title')} {locale === 'en' ? <span className='text-blue-500'>{t('colorfulTitle')}</span> : ''}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm md:text-2xl mb-12 text-center"
        >
          {t('description')}
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white dark:bg-slate-800 dark:text-white text-gray-900 p-8 rounded-2xl shadow-2xl max-w-4xl mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="mb-6"
            >
              {renderStepContent(steps[step])}
            </motion.div>
          </AnimatePresence>
          <div className="flex justify-between mt-8">
            <button
              onClick={() => setStep((prevStep) => (prevStep - 1 + steps.length) % steps.length)}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              Previous
            </button>
            <button
              onClick={handleNextStep}
              className="bg-blue-600 text-white px-6 py-3 rounded-full text-lg font-semibold shadow-md hover:bg-blue-700 transition duration-300 transform hover:scale-105"
            >
              {step === steps.length - 1 ? 'Start Over' : 'Next'}
            </button>
          </div>
        </motion.div>
         <Link href={'/chapters'} className='flex items-center justify-center mt-8'>
         <Button className='py-8 px-12 rounded-full border-b-4'>Start Learning Math</Button>
         </Link>
      </div>
    </section>
  );
};

export default Hero;