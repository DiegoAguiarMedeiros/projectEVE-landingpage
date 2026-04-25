import Divider from '@mui/material/Divider';

import { HeroSection } from 'src/sections/hero';
import { TrustBar } from 'src/sections/trust-bar';
import { HowItWorksSection } from 'src/sections/how-it-works';
import { FeaturesSection } from 'src/sections/features';
import { FeatureSpotlightSection } from 'src/sections/feature-spotlight';
import { TestimonialsSection } from 'src/sections/testimonials';
import { PricingSection } from 'src/sections/pricing';
import { SecuritySection } from 'src/sections/security';
import { FaqSection } from 'src/sections/faq';
import { FinalCtaSection } from 'src/sections/final-cta';

// ----------------------------------------------------------------------

export default function LandingPage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <Divider />
      <HowItWorksSection id="how-it-works" />
      <Divider />
      <FeaturesSection id="features" />
      <Divider />
      <FeatureSpotlightSection />
      <Divider />
      <TestimonialsSection />
      <Divider />
      <PricingSection id="pricing" />
      <Divider />
      <SecuritySection />
      <Divider />
      <FaqSection id="faq" />
      <FinalCtaSection />
    </>
  );
}
