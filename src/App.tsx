import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { HeroSection } from "./components/sections/HeroSection";
import { GrowthPartnerSection } from "./components/sections/GrowthPartnerSection";
import { PathToClaritySection } from "./components/sections/path-to-clarity/PathToClaritySection";
import { BuiltForSection } from "./components/sections/BuiltForSection";
import { MeetGroXSection } from "./components/sections/MeetGroXSection";
import { CpaSection } from "./components/sections/CpaSection";
import { SecurityBanner } from "./components/sections/SecurityBanner";
import { TestimonialsSection } from "./components/sections/TestimonialsSection";
import { FinalCtaSection } from "./components/sections/FinalCtaSection";

function App() {
  return (
    <>
      <div className="min-h-screen">
        <Navbar />
        <main>
          <HeroSection />
          <GrowthPartnerSection />
          <PathToClaritySection />
          <BuiltForSection />
          <MeetGroXSection />
          <CpaSection />
          <SecurityBanner />
          <TestimonialsSection />
          <FinalCtaSection />
        </main>
      </div>
      <Footer />
    </>
  );
}

export default App;
