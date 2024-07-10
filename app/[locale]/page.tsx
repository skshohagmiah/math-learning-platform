import ChapterIntroduction from "@/components/chapters/ChapterIntroduction";
import Hero from "@/components/homepage/HeroSection";
import HowItWorks from "@/components/homepage/HowItWork";
import {mathCurriculum} from '@/messages/mathCurriculum.json'


export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <ChapterIntroduction chapters={mathCurriculum!} />
    </main>
  );
}
