import "highlight.js/styles/github.css";
import "github-markdown-css/github-markdown-light.css";

import hljs from "highlight.js";
import { BookOpen, Code2, Link,Search, Target, Zap } from "lucide-react";
import type { Tokens } from "marked";
import { marked } from "marked";
import { type JSX, useEffect, useState } from "react";

import { Footer, Header, HeroSection } from "./components";

const markdowns = import.meta.glob("./dsa/**/*.md", {
  as: "raw",
  eager: true,
});

const modules = import.meta.glob("./dsa/**/*.ts", { eager: false });

type TopicId = "warm-up" | "arrays-level-0" | "strings" | "linked-list-level-0" | "searching-and-sorting-level-0";

const renderer = new marked.Renderer();
renderer.code = function ({ text, lang }: Tokens.Code): string {
  const validLang = lang && hljs.getLanguage(lang) ? lang : "plaintext";
  const highlighted = hljs.highlight(text, { language: validLang }).value;
  return `<pre><code class="hljs language-${validLang}">${highlighted}</code></pre>`;
};

marked.setOptions({
  gfm: true,
  breaks: true,
});

marked.use({ renderer });

function App(): JSX.Element {
  const [topic, setTopic] = useState<TopicId | null>(() => {
    const hash = window.location.hash.substring(1);
    if (!hash) return null;
    const [t] = hash.split("/");
    return (t as TopicId) || null;
  });

  const [subtopic, setSubtopic] = useState<string | null>(() => {
    const hash = window.location.hash.substring(1);
    if (!hash) return null;
    const [, st] = hash.split("/");
    return st || null;
  });
  const [readme, setReadme] = useState<string>("");

  const topics = [
    {
      id: "warm-up" as const,
      name: "Warm Up",
      icon: <Zap className="h-5 w-5" />,
      color: "from-orange-400 to-pink-500",
    },
    {
      id: "arrays-level-0" as const,
      name: "Arrays (Level 0)",
      icon: <Code2 className="h-5 w-5" />,
      color: "from-blue-400 to-indigo-600",
    },
    {
      id: "linked-list-level-0" as const,
      name: "Linked Lists (Level 0)",
      icon: <Link className="h-5 w-5" />,
      color: "from-purple-400 to-violet-600",
    },
    {
      id: "searching-and-sorting-level-0" as const,
      name: "Search & Sort (Level 0)",
      icon: <Search className="h-5 w-5" />,
      color: "from-green-400 to-emerald-600",
    },
    {
      id: "strings" as const,
      name: "Strings",
      icon: <BookOpen className="h-5 w-5" />,
      color: "from-cyan-400 to-teal-600",
    },
  ];

  const subtopics: Record<TopicId, { id: string; name: string }[]> = {
    "warm-up": [
      { id: "second-largest", name: "Second Largest Element" },
      { id: "star-pattern", name: "Star Pattern" },
      { id: "count-digits", name: "Count digits" },
      { id: "palindrome-number", name: "Palindrome Number" },
      { id: "reverse-number", name: "Reverse Number" },
    ],
    "arrays-level-0": [
      { id: "best-time-buy-and-sell-stock", name: "Best Time to Buy and Sell Stock" },
      { id: "remove-duplicates", name: "Remove Duplicates from Sorted Array" },
      { id: "remove-element", name: "Remove Element" },
      { id: "reverse-string", name: "Reverse String" },
    ],
    "linked-list-level-0": [
      { id: "design-linked-list", name: "Design Linked List" },
      { id: "linked-list-cycle", name: "Linked List Cycle" },
      { id: "middle-of-linked-list", name: "Middle of the Linked List" },
      { id: "reverse-linked-list", name: "Reverse Linked List" },
    ],
    "searching-and-sorting-level-0": [
      { id: "binary-search", name: "Binary Search" },
      { id: "bubble-sort", name: "Bubble Sort" },
      { id: "insertion-sort", name: "Insertion Sort" },
      { id: "selection-sort", name: "Selection Sort" },
    ],
    strings: [
      { id: "manipulation", name: "String Manipulation" },
    ],
  };

  useEffect(() => {
    if (topic && subtopic) {
      window.location.hash = `${topic}/${subtopic}`;
    } else if (topic) {
      window.location.hash = topic;
    } else {
      window.location.hash = "";
    }
  }, [topic, subtopic]);

  useEffect(() => {
    const loadReadme = async (): Promise<void> => {
      if (topic && subtopic) {
        const readmePath = `./dsa/${topic}/${subtopic}/README.md`;
        try {
          const readmeContent = markdowns[readmePath] as string;
          if (readmeContent) {
            const parsedContent = marked.parse(readmeContent);
            console.log(`📄 Loaded README for ${topic}/${subtopic}`);
            if (typeof parsedContent === "string") {
              setReadme(parsedContent);
            } else {
              console.warn("Parsed content is not string:", parsedContent);
              setReadme("");
            }
          } else {
            console.warn(`No content found for ${readmePath}`);
            setReadme("");
          }
        } catch (error) {
          console.error(
            `Error loading README for ${topic}/${subtopic}:`,
            error,
          );
          setReadme("");
        }
      } else if (topic) {
        const readmePath = `./dsa/${topic}/README.md`;
        try {
          const readmeContent = markdowns[readmePath] as string;
          if (readmeContent) {
            const parsedContent = marked.parse(readmeContent);
            console.log(`📄 Loaded README for ${topic}`);
            if (typeof parsedContent === "string") {
              setReadme(parsedContent);
            } else {
              console.warn("Parsed content is not string:", parsedContent);
              setReadme("");
            }
          } else {
            console.warn(`No content found for ${readmePath}`);
            setReadme("");
          }
        } catch (error) {
          console.error(`Error loading README for ${topic}:`, error);
          setReadme("");
        }
      }
    };

    loadReadme();

    if (topic && subtopic) {
      const modulePath = `./dsa/${topic}/${subtopic}/index.ts`;
      const moduleLoader = modules[modulePath];
      if (moduleLoader) {
        moduleLoader()
          .then(() => {
            console.log(`✅ Executed: ${modulePath}`);
          })
          .catch((error) => {
            console.error(`❌ Error importing ${modulePath}:`, error);
          });
      }
    }
  }, [topic, subtopic]);

  useEffect(() => {
    if (import.meta.hot) {
      import.meta.hot.accept(() => {
        console.log("🔄 Hot update detected");

        if (topic && subtopic) {
          const readmePath = `./dsa/${topic}/README.md`;
          const readmeContent = markdowns[readmePath] as string;
          if (readmeContent) {
            const parsedContent = marked.parse(readmeContent);
            console.log(`📝 Updated README content for ${topic}/${subtopic}`);
            if (typeof parsedContent === "string") {
              setReadme(parsedContent);
            }
          }

          const modulePath = `./dsa/${topic}/${subtopic}/index.ts`;
          const moduleLoader = modules[modulePath];
          if (moduleLoader) {
            moduleLoader().then(() => {
              console.log(`🔥 Re-executed after HMR: ${modulePath}`);
            });
          }
        }
      });
    }
  }, [topic, subtopic]);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {!topic && <HeroSection />}
      
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {topic && (
          <>
            <div className="mb-8">
              <h3 className="mb-6 flex items-center text-xl font-semibold text-gray-900">
                <BookOpen className="mr-2 h-6 w-6 text-indigo-600" />
                Choose Your Topic
              </h3>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {topics.map((topicItem) => (
                  <button
                    key={topicItem.id}
                    onClick={() => {
                      setTopic(topicItem.id);
                      setSubtopic(null);
                    }}
                    className={`group relative overflow-hidden rounded-xl bg-gradient-to-r p-6 ${topicItem.color} text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                      topic === topicItem.id
                        ? "ring-opacity-50 scale-105 ring-4 ring-white"
                        : ""
                    }`}
                  >
                    <div className="mb-3 flex items-center justify-between">
                      {topicItem.icon}
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                        <div className="h-3 w-3 rounded-full bg-white"></div>
                      </div>
                    </div>
                    <h4 className="text-lg font-semibold">{topicItem.name}</h4>
                    <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </button>
                ))}
              </div>
            </div>

            {topic && subtopics[topic] && (
              <div className="mb-8">
                <h3 className="mb-6 flex items-center text-xl font-semibold text-gray-900">
                  <Target className="mr-2 h-6 w-6 text-purple-600" />
                  Subtopics in {topics.find((t) => t.id === topic)?.name}
                </h3>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {subtopics[topic].map((subtopicItem) => (
                    <button
                      key={subtopicItem.id}
                      onClick={() => setSubtopic(subtopicItem.id)}
                      className={`group rounded-lg border-2 p-4 text-left transition-all duration-200 ${
                        subtopic === subtopicItem.id
                          ? "border-indigo-500 bg-indigo-50 text-indigo-900"
                          : "border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50/50"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{subtopicItem.name}</span>
                        <div
                          className={`h-3 w-3 rounded-full transition-colors ${
                            subtopic === subtopicItem.id
                              ? "bg-indigo-500"
                              : "bg-gray-300 group-hover:bg-indigo-400"
                          }`}
                        ></div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {readme && (
              <div className="overflow-hidden rounded-xl border border-gray-200/50 bg-white shadow-lg mb-12">
                <div className="border-b border-gray-200 bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4">
                  <h3 className="flex items-center text-lg font-semibold text-gray-900">
                    <BookOpen className="mr-2 h-5 w-5 text-indigo-600" />
                    Documentation
                  </h3>
                </div>
                <div className="p-6">
                  <div
                    className="markdown-body prose prose-lg max-w-none"
                    dangerouslySetInnerHTML={{ __html: readme }}
                  />
                </div>
              </div>
            )}
            
            <Footer />
          </>
        )}
        
        {!topic && (
          <div className="mb-8">
            <h3 className="mb-6 flex items-center text-xl font-semibold text-gray-900">
              <BookOpen className="mr-2 h-6 w-6 text-indigo-600" />
              Choose Your Topic
            </h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {topics.map((topicItem) => (
                <button
                  key={topicItem.id}
                  onClick={() => {
                    setTopic(topicItem.id);
                    setSubtopic(null);
                  }}
                  className={`group relative overflow-hidden rounded-xl bg-gradient-to-r p-6 ${topicItem.color} text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}
                >
                  <div className="mb-3 flex items-center justify-between">
                    {topicItem.icon}
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
                      <div className="h-3 w-3 rounded-full bg-white"></div>
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold">{topicItem.name}</h4>
                  <div className="absolute inset-0 bg-white/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {!topic && <Footer />}
    </div>
  );
}

export default App;
