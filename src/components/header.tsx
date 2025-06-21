import { Code2, Github, Linkedin, Twitter } from "lucide-react";
import type { JSX } from "react";

const socialLinks = [
  {
    icon: <Github className="h-5 w-5" />,
    href: "https://github.com/shubhamku044",
    label: "GitHub",
    color: "hover:text-gray-900",
  },
  {
    icon: <Twitter className="h-5 w-5" />,
    href: "https://x.com/shubhamku044",
    label: "Twitter",
    color: "hover:text-blue-500",
  },
  {
    icon: <Linkedin className="h-5 w-5" />,
    href: "https://linkedin.com/in/shubhamku044",
    label: "LinkedIn",
    color: "hover:text-blue-700",
  },
];

export function Header(): JSX.Element {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 p-2">
              <Code2 className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-2xl font-bold text-transparent">
                DSA Learning Hub
              </h1>
              <p className="text-sm text-gray-600">
                Master Data Structures & Algorithms
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            {socialLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className={`rounded-lg bg-gray-100 p-2 text-gray-600 transition-all duration-200 ${link.color} hover:scale-110 hover:bg-gray-200`}
                aria-label={link.label}
                target="_blank"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
