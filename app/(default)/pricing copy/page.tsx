"use client"; // Ensures it's a Client Component
import { Plus_Jakarta_Sans } from "next/font/google";

// Load the Plus Jakarta Sans font with the necessary weights
const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export default function Pricing() {
  return (
    <section className="py-12 bg-gray-50 sm:py-16 lg:py-20">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center xl:max-w-4xl">
          <h4
            className={`text-3xl font-bold text-gray-900 sm:text-4xl xl:text-5xl ${plusJakartaSans.className}`}
          >
            Model agnostic template for every model
          </h4>
        </div>

        <div className="relative mt-12 lg:mt-20 lg:max-w-5xl lg:mx-auto">
          <div className="absolute -inset-2">
            <div
              className="w-full h-full mx-auto opacity-30 blur-lg filter"
              style={{
                background:
                  "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
              }}
            ></div>
          </div>

          <div className="relative grid grid-cols-1 px-16 py-12 overflow-hidden text-center bg-white sm:grid-cols-2 gap-y-12 lg:grid-cols-4 rounded-2xl gap-x-20">
            <div className="flex flex-col items-center">
              <p
                className={`text-3xl font-bold text-gray-800 lg:mt-3 lg:order-2 ${plusJakartaSans.className}`}
              >
                Prompt Generation
              </p>
              <h3
                className={`mt-5 text-sm font-bold tracking-widest text-gray-800 uppercase lg:mt-0 lg:order-1 ${plusJakartaSans.className}`}
              >
                Auto
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <p
                className={`text-3xl font-bold text-gray-800 lg:mt-3 lg:order-2 ${plusJakartaSans.className}`}
              >
                Model Switching
              </p>
              <h3
                className={`mt-5 text-sm font-bold tracking-widest text-gray-800 uppercase lg:mt-0 lg:order-1 ${plusJakartaSans.className}`}
              >
                Optimized
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <p
                className={`text-3xl font-bold text-gray-800 lg:mt-3 lg:order-2 ${plusJakartaSans.className}`}
              >
                Monitor Usage
              </p>
              <h3
                className={`mt-5 text-sm font-bold tracking-widest text-gray-800 uppercase lg:mt-0 lg:order-1 ${plusJakartaSans.className}`}
              >
                Observability
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <p
                className={`text-3xl font-bold text-gray-800 lg:mt-3 lg:order-2 ${plusJakartaSans.className}`}
              >
                Prompt Evaluation
              </p>
              <h3
                className={`mt-5 text-sm font-bold tracking-widest text-gray-800 uppercase lg:mt-0 lg:order-1 ${plusJakartaSans.className}`}
              >
                Iteratively
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
