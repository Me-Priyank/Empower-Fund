import Hero from '../components/Hero';
import Challenges from '../components/Challenges';
import CausesSection from '../components/CausesSection';
import ImpactStories from '../components/ImpactStories';
import Partners from '../components/Partners';
import Newsletter from '../components/Newsletter';

export default function Home() {
  return (
    <main>
      <Hero />
      <Challenges />
      <CausesSection />
      <ImpactStories />
      <Partners />
      <Newsletter />
    </main>
  );
}