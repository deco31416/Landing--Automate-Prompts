export const metadata = {
  title: "Trainkore",
  description: "Prompting and RAG platform",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";

import SplitCarousel from "@/components/split-carousel";
import Cta from "@/components/cta";
import FeaturesPlanet from "./featurePlanet";
import PromptVersioning from "./promptVersioning";
import CodeView from "./codeView";
import dashboard from "@/public/images/dashboard_dark.png";
import Image from "next/image";
import FeaturesLog from "./featureLog";
import Pricing from "./pricing copy/page";
import RouteCard from "./routeCard";

export default function Home() {
  return (
    <>
      <PageIllustration />
      <Hero />

      <RouteCard />
      {/* <Features /> */}
      <FeaturesPlanet />
      <CodeView />
      <PromptVersioning />
      <SplitCarousel />
      {/* <Workflows /> */}
      <FeaturesLog />

      <Cta />
      {/* <Pricing /> */}
    </>
  );
}
