"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { useTranslations, useLocale } from "next-intl";
import { Card } from "../ui/card";

type IconType = (props: React.ComponentProps<'svg'>) => JSX.Element;

interface Chapter {
  id: string;
  title: string;
  icon: keyof typeof LucideIcons;
  description: string;
}

const ChapterIntroduction: React.FC = () => {
  const t = useTranslations('MathChapters');
  const locale = useLocale();
  const chapters: Chapter[] = t.raw('chapters') as Chapter[];

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-12">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {chapters?.map((chapter, index) => {
            const IconComponent = LucideIcons[chapter.icon] as IconType;
            return (
              <motion.div
                key={chapter.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <Card className="p-6 w-full h-full flex items-center justify-center flex-col dark:bg-slate-800">
                  <div className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4 mx-auto">
                    {typeof IconComponent === 'function' && <IconComponent className="w-8 h-8 text-white" />}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white text-center mb-2">
                    {chapter.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center mb-4">
                    {chapter.description}
                  </p>
                  <Link 
                    href={`/${locale}/chapters/${chapter.id}`}
                    className="block w-full text-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-4 px-8 rounded-full border-b-4 transition duration-300"
                  >
                    {t('exploreChapter')}
                  </Link>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChapterIntroduction;