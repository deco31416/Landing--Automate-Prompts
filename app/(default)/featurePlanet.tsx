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

export default function FeaturesPlanet() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="">
          {/* Section header */}
          <div className="mx-auto max-w-3xl pt-12 pb-16 text-center md:pb-20">
            <div className="inline-flex items-center gap-3 pb-3 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-indigo-200/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-indigo-200/50">
              <span className="inline-flex bg-gradient-to-r from-indigo-500 to-indigo-200 bg-clip-text text-transparent">
                Advanced Controls
              </span>
            </div>
            <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
              Auto prompt generation for any model
            </h2>
            <p className="text-lg text-indigo-200/65">
              Dynamically generate prompt for various use cases
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
                    src="/videos/generate.mp4"
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
          <div className="md:grid md:grid-cols-12 md:gap-6 items-center py-12 md:py-20">
            {/* Image */}
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

            {/* Content */}
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
                  Get insights from most important metrics and debug with
                  detailed logs
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
