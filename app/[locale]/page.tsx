import ChapterIntroduction from "@/components/chapters/ChapterIntroduction";
import Hero from "@/components/homepage/HeroSection";
import HowItWorks from "@/components/homepage/HowItWork";



export default function Home() {
  return (
    <main className="bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900">
      <Hero />
      <ChapterIntroduction />
      <HowItWorks />
    </main>
  );
}
