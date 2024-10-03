import type { Metadata } from "next";
import { getDocPages } from "@/components/mdx/utils";
import { notFound } from "next/navigation";
import { CustomMDX } from "@/components/mdx/mdx";
import PageIllustration from "@/components/page-illustration";
import DocumentationProvider from "./documentation-provider";
import Sidebar from "./sidebar";
import Hamburger from "./hamburger";
import PageNavigation from "@/components/page-navigation";

function updatedDate(dateString: string) {
  const date = new Date(dateString);
  const now = new Date();
  const diffTime = Math.abs(now.getTime() - date.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata | undefined> {
  const post = getDocPages().find((post) => post.slug === params.slug);

  if (!post) {
    return;
  }

  const { title, summary: description } = post.metadata;

  return {
    title,
    description,
  };
}

export default async function DocumentationPage({
  params,
}: {
  params: { slug: string };
}) {
  const allDocs = getDocPages();
  // Sort pages by date
  allDocs.sort((a, b) => {
    return new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
      ? 1
      : -1;
  });
  const post = allDocs.find((post) => post.slug === params.slug);
  const currentIndex = allDocs.findIndex((post) => post.slug === params.slug);

  if (!post) notFound();

  const prevPost = currentIndex > 0 ? allDocs[currentIndex - 1] : null;
  const nextPost =
    currentIndex < allDocs.length - 1 ? allDocs[currentIndex + 1] : null;

  return (
    <DocumentationProvider>
      <section className="relative">
        <PageIllustration />
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          {/* Main content */}
          <div className="flex justify-between pb-12 pt-32 md:pb-20 md:pt-40">
            {/* Sidebar */}
            <Sidebar docs={allDocs} />

            {/* Page container */}
            <div className="w-full grow">
              <div className="md:pl-6 lg:pl-12">
                <div className="ml-auto max-w-[740px]">
                  <article className="border-b border-gray-200 pb-10">
                    {/* Main area */}
                    <div className="min-w-0">
                      {/* Mobile hamburger + breadcrumbs */}
                      <div className="mb-8 flex items-center md:hidden">
                        {/* Hamburger button */}
                        <Hamburger />
                        {/* Breadcrumbs */}
                        <div className="ml-3 flex min-w-0 items-center whitespace-nowrap text-sm">
                          <span className="text-gray-600">Documentation</span>
                          <svg
                            className="!mx-2 shrink-0 -rotate-90 fill-gray-400"
                            width={11}
                            height={7}
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="m2 .94 3.5 3.5L9 .94 10.06 2 5.5 6.56.94 2 2 .94Z" />
                          </svg>
                          <span className="truncate font-medium">
                            {post.metadata.title}
                          </span>
                        </div>
                      </div>
                      {/* Article content */}
                      <div>
                        <header className="mb-10">
                          <h1 className="mb-3 text-3xl font-bold">
                            {post.metadata.title}
                          </h1>
                          <p className="text-lg text-gray-700">
                            {post.metadata.summary}
                          </p>
                        </header>
                        <div className="prose max-w-none text-gray-700 prose-headings:scroll-mt-24 prose-headings:font-bold prose-headings:text-gray-900 prose-a:font-medium prose-a:text-blue-500 prose-a:no-underline hover:prose-a:underline prose-strong:font-medium prose-strong:text-gray-900 prose-code:rounded prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:font-mono prose-code:text-gray-900 prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:border prose-pre:border-gray-700 prose-pre:bg-gray-900">
                          <CustomMDX source={post.content} />
                        </div>
                      </div>
                    </div>
                  </article>
                  {/* Page navigation */}
                  <PageNavigation
                    prevArticle={prevPost}
                    nextArticle={nextPost}
                  />
                  {/* Feedback */}
                  <div className="text-center">
                    <div className="mt-6 inline-flex items-center justify-center rounded-xl bg-white px-3 py-2 shadow-lg shadow-black/[0.03]">
                      <div className="mr-3 text-sm text-gray-700">
                        Did this page help you?
                      </div>
                      <div className="flex gap-2">
                        <button className="btn-sm rounded bg-white px-2 py-0 shadow hover:bg-gray-50">
                          <svg
                            className="mr-1 fill-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={13}
                          >
                            <path d="M6.731 5.5h3.225a1.883 1.883 0 0 1 1.575.75 1.9 1.9 0 0 1 .45 1.575l-.6 3.45A2.009 2.009 0 0 1 9.431 13H3V7l1.784-5.625A.5.5 0 0 1 5.234 1a1.3 1.3 0 0 1 .882.176A1.314 1.314 0 0 1 6.73 2.5v3ZM2 7H.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H2V7Z" />
                          </svg>
                          Yes
                        </button>
                        <button className="btn-sm rounded bg-white px-2 py-0 shadow hover:bg-gray-50">
                          <svg
                            className="mr-1 rotate-180 fill-gray-400"
                            xmlns="http://www.w3.org/2000/svg"
                            width={12}
                            height={13}
                          >
                            <path d="M6.731 5.5h3.225a1.883 1.883 0 0 1 1.575.75 1.9 1.9 0 0 1 .45 1.575l-.6 3.45A2.009 2.009 0 0 1 9.431 13H3V7l1.784-5.625A.5.5 0 0 1 5.234 1a1.3 1.3 0 0 1 .882.176A1.314 1.314 0 0 1 6.73 2.5v3ZM2 7H.5a.5.5 0 0 0-.5.5v5a.5.5 0 0 0 .5.5H2V7Z" />
                          </svg>
                          No
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </DocumentationProvider>
  );
}
