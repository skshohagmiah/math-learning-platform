'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import * as LucideIcons from 'lucide-react';

interface Lesson {
  id: string;
  title: string;
  explanation: string;
}

interface ChapterLessonsProps {
  chapter: {
    id: string;
    title: string;
    icon: keyof typeof LucideIcons;
    lessons: Lesson[];
  };
}

const getZigZagPosition = (index: number) => {
  const top = index * 25; // Increase the top position for each lesson
  const left = index % 2 === 0 ? 10 : 60; // Alternate between left and right
  return { top: `${top}vh`, left: `${left}%` };
};

const ChapterLessons: React.FC<ChapterLessonsProps> = ({ chapter }) => {
  const Icon = LucideIcons[chapter.icon];

  return (
    <div className="mx-auto px-4 py-12 relative min-h-screen">
      <div className="text-center mb-12">
        <motion.div
          className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-full p-8 inline-block mb-4"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          {Icon && <Icon size={64} className="text-white" />}
        </motion.div>
        <h2 className="text-4xl font-bold">{chapter.title}</h2>
      </div>
      <div className="relative h-full">
        {chapter?.chapters?.map((lesson, index) => {
          const position = getZigZagPosition(index);

          return (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="absolute bg-white border dark:bg-slate-800 rounded-lg shadow-lg p-6 w-72 h-72 flex items-center justify-center flex-col"
              style={position}
            >
              <div className="flex items-center mb-2">
                <motion.div
                  className="bg-gradient-to-br from-green-400 to-blue-500 rounded-full p-4 inline-block mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-semibold text-white">{index + 1}</h3>
                </motion.div>
                <h3 className="text-xl font-semibold ml-4">{lesson.title}</h3>
              </div>
              <p className="text-gray-600 text-center mb-4">{lesson.explanation}</p>
              <Link href={`/lesson/${chapter.id}/${lesson.id}`}>
                <motion.button
                  className="bg-green-500 text-white px-6 py-2 rounded-full font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Lesson
                </motion.button>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterLessons;
