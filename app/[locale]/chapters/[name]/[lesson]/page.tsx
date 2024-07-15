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

    case "default":
      return <div>Working on this page</div>;
  }
};

export default LessonPage;
