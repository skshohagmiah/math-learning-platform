"use client";

import { useTranslations } from "next-intl";

const HowItWorks: React.FC = () => {
  const t = useTranslations("HowItWorks");

  // Get the number of steps dynamically
  const stepCount = t.raw('steps').length;

  return (
    <section className="py-16 mb-8">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">{t("title")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(stepCount)].map((_, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 mx-auto">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t(`steps.${index}.title`)}
              </h3>
              <p className="text-muted-foreground">
                {t(`steps.${index}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;