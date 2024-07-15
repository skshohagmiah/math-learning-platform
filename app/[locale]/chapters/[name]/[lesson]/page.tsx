import React from "react";
import IntroNumberTheory from "../_components/IntroductoryNumberTheory";

const LessonPage = ({
  params,
}: {
  params: { name: string; lesson: string };
}) => {
  const lesson = params.lesson;

  switch (lesson) {
    case "intro-number-theory":
      return <IntroNumberTheory />;
    default:
      return <div className="h-screen font-bold text-2xl flex items-center justify-center text-rose-500">Working on this page</div>;
  }
};

export default LessonPage;
