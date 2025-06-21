import "highlight.js/styles/github.css";
import "github-markdown-css/github-markdown-light.css";

import hljs from "highlight.js";
import { BookOpen, Target, Zap } from "lucide-react";
import type { Tokens } from "marked";
import { marked } from "marked";
import { type JSX, useEffect, useState } from "react";

import { Footer, Header } from "./components";

const markdowns = import.meta.glob("./dsa/**/*.md", {
  as: "raw",
  eager: true,
});

const modules = import.meta.glob("./dsa/**/*.ts", { eager: false });

type TopicId = "warm-up" | "arrays" | "strings" | "linked-lists";

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
    // {
    //   id: "arrays" as const,
    //   name: "Arrays",
    //   icon: <Code2 className="h-5 w-5" />,
    //   color: "from-blue-400 to-indigo-600",
    // },
    // {
    //   id: "strings" as const,
    //   name: "Strings",
    //   icon: <BookOpen className="h-5 w-5" />,
    //   color: "from-green-400 to-emerald-600",
    // },
    // {
    //   id: "linked-lists" as const,
    //   name: "Linked Lists",
    //   icon: <Target className="h-5 w-5" />,
    //   color: "from-purple-400 to-violet-600",
    // },
  ];

  const subtopics: Record<TopicId, { id: string; name: string }[]> = {
    "warm-up": [
      { id: "second-largest", name: "Second Largest Element" },
      { id: "star-pattern", name: "Star Pattern" },
    ],
    arrays: [
      { id: "sorting", name: "Sorting Algorithms" },
      { id: "searching", name: "Search Techniques" },
      { id: "two-pointers", name: "Two Pointers" },
    ],
    strings: [
      { id: "pattern-matching", name: "Pattern Matching" },
      { id: "palindromes", name: "Palindromes" },
    ],
    "linked-lists": [
      { id: "traversal", name: "Traversal" },
      { id: "reversal", name: "Reversal" },
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
        const readmePath = `./dsa/${topic}/README.md`;
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
      <Header />
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {
          <div className="mb-12 text-center">
            <div className="mb-6 inline-block rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-1">
              <div className="rounded-xl bg-white px-8 py-6">
                <h2 className="mb-4 text-4xl font-bold text-gray-900">
                  Welcome to Your DSA Journey! 🚀
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-gray-600">
                  Dive into the world of Data Structures and Algorithms with
                  interactive examples, comprehensive explanations, and hands-on
                  coding practice.
                </p>
              </div>
            </div>
          </div>
        }

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
          <div className="overflow-hidden rounded-xl border border-gray-200/50 bg-white shadow-lg">
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
      </div>
    </div>
  );
}

export default App;
