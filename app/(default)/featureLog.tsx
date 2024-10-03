"use client"; // Ensures it's a Client Component

import { Plus_Jakarta_Sans } from "next/font/google";
import Image from "next/image";
import traincoreImage from "@/public/images/Dashboard Cache Page SS.png";
import FeatIllustration from "@/public/images/Screenshot 2024-04-18 190424.png";

// Load the Plus Jakarta Sans font with the necessary weights
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function FeaturesLog() {
  return (
    <section
      className={`mb-0 relative before:absolute before:inset-0 before:-z-20 bg-gradient-to-r from-transparent via-gray-800/50  ${plusJakartaSans.className}`}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-6 md:py-10">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pt-12 pb-16 text-center md:pb-20">
            <h2 className="text-3xl font-bold text-gray-200 md:text-4xl">
              Iterative Logs and performance analysis
            </h2>
            <p className="text-white mt-5">
              Get the input,output, rating , prompts , metadata and many more
            </p>
          </div>

          {/* Planet */}
          <div data-aos="zoom-y-out">
            <div className="text-center">
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.0),transparent)]">
                <div
                  className="mx-auto max-w-8xl"
                  data-aos="zoom-y-out"
                  data-aos-delay={600}
                >
                  <video
                    className="transform scale-110"
                    src="/videos/log.mov"
                    controls
                    autoPlay
                    muted
                    loop
                  >
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>

          {/* Grid */}
          {/* <div className="md:grid md:grid-cols-12 md:gap-6 items-center py-12 md:py-20">
          
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="fade-up"
              data-aos-anchor="[data-aos-id-features-home]"
            >
              <div className="relative inline-flex rounded-full before:absolute before:inset-0 before:-z-10 before:scale-[.85] before:animate-[pulse_4s_cubic-bezier(.4,0,.6,1)_infinite] before:bg-gradient-to-b before:from-blue-900 before:to-sky-700/50 before:blur-3xl after:absolute after:inset-0 after:rounded-[inherit] after:[background:radial-gradient(closest-side,theme(colors.blue.800),transparent)]">
                <Image
                  className="md:max-w-none rounded-md"
                  src={FeatIllustration}
                  width={600}
                  height={520}
                  alt="Features illustration"
                />
              </div>
            </div>

          
            <div
              className="max-w-xl text-center lg:text-left md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
              data-aos="fade-right"
              data-aos-anchor="[data-aos-id-features-home]"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16">
                <div className="mx-auto max-w-3xl pb-6">
                  <h2 className="text-2xl font-bold text-gray-200 md:text-3xl">
                    Observability Suite
                  </h2>
                </div>
                <p className="text-xl text-gray-400 mb-4">
                  Get insights from most important metrics and debug with detailed logs 
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
