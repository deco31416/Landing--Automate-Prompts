"use client";

import VideoThumb from "@/public/images/hero-image-01.jpg";
import ModalVideo from "@/components/modal-video";
import { useRef } from "react";

export default function HeroHome() {
  const videoRef = useRef<HTMLVideoElement>(null);
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1
              className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-5 font-nacelle text-4xl font-semibold text-transparent md:text-5xl"
              data-aos="fade-up"
            >
              Automate Prompts Save 85% cost
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                Auto Prompt Generation, Model Switching, and Evaluation
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-indigo-600 to-indigo-500 bg-[length:100%_100%] bg-[bottom] text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="https://app.trainkore.com"
                  >
                    <span className="relative inline-flex items-center">
                      Try Now
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-800/60 bg-[length:100%_100%] bg-[bottom] text-gray-300 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box] before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] hover:bg-[length:100%_150%] sm:ml-4 sm:w-auto"
                    href="https://calendly.com/anuragcoolkid/trainkore-demo"
                  >
                    Demo
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1104}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="videos//demoVideo.mp4"
            videoWidth={1920}
            videoHeight={1080}
          /> */}
          <video
            ref={videoRef}
            width={1920}
            height={1080}
            loop
            controls
            autoPlay
            muted
          >
            <source src="videos/demoVideo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}

// 'use client';  // Ensures it's a Client Component

// import { Plus_Jakarta_Sans } from 'next/font/google';
// import PageIllustration from "@/components/page-illustration";
// import ModalVideo from "./modal-video";

// // Load the Plus Jakarta Sans font with the necessary weights
// const plusJakartaSans = Plus_Jakarta_Sans({
//   subsets: ['latin'],
//   weight: ['400', '500', '600', '700'],
//   display: 'swap',
// });

// export default function HeroHome() {
//   return (
//     <section className="relative mt-10">
//       <section className="pt-12 bg-gray-50 sm:pt-16">
//         <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="max-w-2xl mx-auto text-center">
//             <h1 className={`px-6 text-base text-gray-600 ${plusJakartaSans.className}`}>
//               Auto Prompt Generation, Model Switching, and Evaluation
//             </h1>
//             <p className={`mt-5 text-4xl leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight ${plusJakartaSans.className}`} style={{ fontWeight: 700 }}>
//               Automate Prompts Save 85% 
//               <span className="relative inline-flex sm:inline">
//                 <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
//                 <span className="relative"> cost </span>
//               </span>
//             </p>

//             <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
//               <a
//                 href="https://app.trainkore.com"
//                 title=""
//                 className={`inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-800 sm:w-auto rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 ${plusJakartaSans.className}`}
//                 role="button"
//               >
//                 Try Now
//               </a>

//               <a
//                 href="https://calendly.com/anuragcoolkid/trainkore-demo"
//                 title=""
//                 className={`inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 bg-transparent border border-gray-400 sm:w-auto sm:mt-0 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 hover:bg-gray-900 hover:text-white ${plusJakartaSans.className}`}
//                 role="button"
//               >
//                 <svg className="w-5 h-5 mr-2" viewBox="0 0 18 18" fill="none" stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
//                   <path
//                     d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z"
//                     strokeWidth="2"
//                     strokeMiterlimit="10"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   />
//                 </svg>
//                 Demo
//               </a>
//             </div>
//           </div>
//         </div>

//         <div className="pb-12 bg-white mt-20">
//           <div className="relative">
//             <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
//             <div className="relative mx-auto">
//               <div className="lg:max-w-6xl lg:mx-auto relative">
//                 {/* Add the gradient background around the video */}
//                 <div className="absolute -inset-4">
//                   <div
//                     className="w-full h-full mx-auto opacity-20 blur-lg filter"
//                     style={{
//                       background: "linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)",
//                     }}
//                   ></div>
//                 </div>
//                 {/* Actual video */}
//                 <div className="relative">
//                   <video
//                     className="transform scale-110 w-full h-96 lg:h-[540px]"
//                     src="videos//demoVideo.mp4"
//                     controls
//                     autoPlay
//                     muted
//                     loop
//                   >
//                     Your browser does not support the video tag.
//                   </video>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </section>
//   );
// }
