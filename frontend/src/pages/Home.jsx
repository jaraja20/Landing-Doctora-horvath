import { HomeHero } from "@/components/home/HomeHero";
import { BeyondAreas } from "@/components/home/BeyondAreas";
import { TimelineHome } from "@/components/home/TimelineHome";
import { PurposeBand } from "@/components/home/PurposeBand";
import { PrecedentBrief } from "@/components/home/PrecedentBrief";
import { Initiatives } from "@/components/home/Initiatives";
import { PressContent } from "@/components/home/PressContent";
import { FinalCta } from "@/components/home/FinalCta";

export default function Home() {
  return (
    <main data-testid="home-page">
      <HomeHero />
      <BeyondAreas />
      <TimelineHome />
      <PurposeBand />
      <PrecedentBrief />
      <Initiatives />
      <PressContent />
      <FinalCta />
    </main>
  );
}
