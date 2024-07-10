"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import * as LucideIcons from "lucide-react";
import { Button } from "../ui/button";
import { useLocale } from "next-intl";

interface Chapter {
  id: string;
  title: string;
  icon: keyof typeof LucideIcons;
  description: string;
}

interface ChapterIntroductionProps {
  chapters: Chapter[];
}

const ChapterIntroduction: React.FC<ChapterIntroductionProps> = ({
  chapters,
}) => {
  const locale = useLocale();

  return (
    <div className="mx-auto px-4 py-12 my-4 min-h-screen relative">
      <h2 className="text-4xl font-bold mb-12 text-center">Math Chapters</h2>
      <div className="flex items-center justify-center gap-8 flex-wrap">
        {chapters?.map((chapter, index) => {
          const IconComponent = LucideIcons[chapter.icon];

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border dark:bg-slate-800 rounded-lg shadow-xl p-4 w-80 h-80 flex items-center justify-center flex-col mb-12"
            >
              <div className="flex items-center mb-2">
                {IconComponent && (
                  <IconComponent className="w-10 h-10 mr-2 text-blue-500" />
                )}
                <h3 className="text-xl font-semibold">{chapter.title}</h3>
              </div>
              <p className="text-muted-foreground text-center mb-4">
                {chapter.description}
              </p>
              <Link href={`${locale}/chapters/${chapter.id}`}>
                <Button className="inline-block rounded-full bg-blue-500 text-white py-2 px-8 text-center hover:bg-blue-600 transition duration-300">
                  Explore Chapter
                </Button>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default ChapterIntroduction;
