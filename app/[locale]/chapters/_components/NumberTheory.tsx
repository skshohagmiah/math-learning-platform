"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";
import Link from "next/link";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useParams } from "next/navigation";

interface Lesson {
  id: string;
  title: string;
  description: string;
  topics: string[];
}

const NumberTheoryLessons: React.FC = () => {
  const t = useTranslations('NumberTheory');
  const lessons: Lesson[] = t.raw('lessons') as Lesson[];
  const [expandedLessons, setExpandedLessons] = useState<string[]>([]);
  const params = useParams()
  const locale = useLocale()

  const toggleLesson = (id: string) => {
    setExpandedLessons(prev =>
      prev.includes(id) ? prev.filter(lessonId => lessonId !== id) : [...prev, id]
    );
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

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg text-gray-700 dark:text-gray-300 mb-12 text-center"
        >
          {t('introduction')}
        </motion.p>

        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 mb-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                {lesson.title}
              </h2>
              <button
                onClick={() => toggleLesson(lesson.id)}
                className="text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-300 focus:outline-none"
              >
                {expandedLessons.includes(lesson.id) ? (
                  <ChevronUp size={24} />
                ) : (
                  <ChevronDown size={24} />
                )}
              </button>
            </div>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {lesson.description}
            </p>
            <AnimatePresence>
              {expandedLessons.includes(lesson.id) && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {t('viewTopics')}
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                    {lesson.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="mb-1">
                        {topic}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            <Link
              href={`/${locale}/chapters/${params.name}/${lesson.id}`}
              className="mt-4 inline-block px-6 py-2 bg-blue-500 text-white font-semibold rounded-full hover:bg-blue-600 transition duration-300"
            >
              {t('startLearning')}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default NumberTheoryLessons;