"use client";

import { useRef, useState, Fragment } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { Transition } from "@headlessui/react";

export default function CodeTabs() {
  const tabsRef = useRef<HTMLDivElement>(null);
  const [selectedTab, setSelectedTab] = useState<number>(0);

  const codeString = `import Trainkore from 'trainkore';
  const trainkore = new Trainkore()

  const chat = await trainkore.chatPrompt.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-4o,
  });

  console.log(chat.choices);`;

  const pythonCode = `Coming Soon`;

  const curlCode = `Coming Soon`;
  return (
    <section>
      <div className="mb-12 mx-auto px-4 sm:px-6">
        <div>
          <TabGroup selectedIndex={selectedTab} onChange={setSelectedTab}>
            {/* Buttons */}
            <div className="flex justify-center">
              <TabList className="relative mb-8 inline-flex flex-wrap justify-center rounded-xl bg-white p-2 shadow-lg shadow-black/[0.03] max-[480px]:max-w-[180px] min-[480px]:mb-12">
                <Tab as={Fragment}>
                  <button
                    className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none ${
                      selectedTab === 0
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 0 ? "text-gray-400" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Z" />
                    </svg>
                    <span>Node.js</span>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button
                    className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none ${
                      selectedTab === 1
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 1 ? "text-gray-400" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M5.936.278A7.983 7.983 0 0 1 8 0a8 8 0 1 1-8 8c0-.722.104-1.413.278-2.064a1 1 0 1 1 1.932.516A5.99 5.99 0 0 0 2 8a6 6 0 1 0 6-6c-.53 0-1.045.076-1.548.21A1 1 0 1 1 5.936.278Zm.132 7.204A2.003 2.003 0 0 0 8 10a2 2 0 1 0-.518-3.932L3.707 2.293a1 1 0 0 0-1.414 1.414l3.775 3.775Z" />
                    </svg>
                    <span>Python</span>
                  </button>
                </Tab>
                {/* <Tab as={Fragment}>
                  <button
                    className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none ${
                      selectedTab === 2
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 2 ? "text-gray-400" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M3 2a1 1 0 0 0-2 0v12a1 1 0 1 0 2 0V2Zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-5 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2Zm5-13a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm4 0a1 1 0 1 0-2 0v12a1 1 0 1 0 2 0V2Z" />
                    </svg>
                    <span>JSON</span>
                  </button>
                </Tab> */}
                <Tab as={Fragment}>
                  <button
                    className={`flex h-8 flex-1 items-center gap-2.5 whitespace-nowrap rounded-lg px-3 text-sm font-medium transition-colors focus-visible:outline-none ${
                      selectedTab === 2
                        ? "bg-gray-800 text-gray-200"
                        : "text-gray-700"
                    }`}
                  >
                    <svg
                      className={`fill-current ${
                        selectedTab === 2 ? "text-gray-400" : "text-gray-500"
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                    >
                      <path d="M.06 10.003a1 1 0 0 1 1.947.455c-.019.08.01.152.078.19l5.83 3.333c.052.03.115.03.168 0l5.83-3.333a.163.163 0 0 0 .078-.188 1 1 0 1 1 1.947-.459 2.161 2.161 0 0 1-1.032 2.384l-5.83 3.331a2.168 2.168 0 0 1-2.154 0l-5.83-3.331A2.162 2.162 0 0 1 .06 10.003Zm7.855-7.981-5.83 3.332a.17.17 0 0 0 0 .295l5.828 3.33a.172.172 0 0 0 .17.002l5.83-3.333a.17.17 0 0 0 0-.294L8.084 2.023a.172.172 0 0 0-.17-.001h.001ZM9.075.285l5.83 3.332c1.458.833 1.458 2.935 0 3.768l-5.83 3.333c-.667.38-1.485.38-2.153-.001l-5.83-3.332c-1.457-.833-1.457-2.935 0-3.767L6.924.285a2.173 2.173 0 0 1 2.15 0h.001Z" />
                    </svg>
                    <span>Curl</span>
                  </button>
                </Tab>
              </TabList>
            </div>

            {/* Tab panels */}

            <TabPanels>
              <div className="relative w-full lg:w-[600px] mx-auto aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div className="relative p-2 mb-8 flex justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                  <span className="text-[13px] font-medium text-white"></span>
                </div>
                <TabPanel as={Fragment} static>
                  <div
                    className={`focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 ${
                      selectedTab === 0 ? "" : "hidden"
                    }`}
                  >
                    <div className="text-left font-medium text-white text-[16px]">
                      <SyntaxHighlighter
                        language="javascript"
                        style={vscDarkPlus}
                        customStyle={{
                          fontFamily: "Source Code Pro, monospace",
                          fontSize: "16px",
                          background: "transparent",
                          padding: "6px",
                          borderRadius: "5px",
                        }}
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel as={Fragment} static>
                  <div
                    className={`focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 ${
                      selectedTab === 1 ? "" : "hidden"
                    }`}
                  >
                    <div className="text-left font-medium text-white text-[16px]">
                      <SyntaxHighlighter
                        language="javascript"
                        style={vscDarkPlus}
                        customStyle={{
                          fontFamily: "Source Code Pro, monospace",
                          fontSize: "16px", //
                          background: "transparent",
                          padding: "6px",
                          borderRadius: "5px",
                        }}
                      >
                        {pythonCode}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </TabPanel>
                {/* <TabPanel as={Fragment} static>
                  <div
                    className={`focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 ${
                      selectedTab === 2 ? "" : "hidden"
                    }`}
                  >
                    <div className="text-left font-medium text-white text-[16px]">
                      <SyntaxHighlighter
                        language="javascript"
                        style={vscDarkPlus}
                        customStyle={{
                          fontFamily: "Source Code Pro, monospace",
                          fontSize: "16px", //
                          background: "transparent",
                          padding: "6px",
                          borderRadius: "5px",
                        }}
                      >
                        {codeString}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </TabPanel> */}
                <TabPanel as={Fragment} static>
                  <div
                    className={`focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300  ${
                      selectedTab === 2 ? "" : "hidden"
                    }`}
                  >
                    <div className="text-left font-medium text-white text-[16px]">
                      <SyntaxHighlighter
                        language="bash" // Use 'bash' or 'shell'
                        style={vscDarkPlus}
                        customStyle={{
                          fontFamily: "Source Code Pro, monospace",
                          fontSize: "16px",
                          background: "transparent",
                          padding: "12px",
                          borderRadius: "5px",
                        }}
                      >
                        {curlCode}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </TabPanel>
              </div>
            </TabPanels>
          </TabGroup>
        </div>
      </div>
    </section>
  );
}
