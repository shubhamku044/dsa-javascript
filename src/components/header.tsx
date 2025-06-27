import { Github, Linkedin, Twitter } from "lucide-react";
import type { JSX } from "react";

import { GitHubStarButton } from "./GitHubStarButton";

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

export const Header = (): JSX.Element => {
  const handleLogoClick = () => {
    window.location.hash = '';
    window.location.reload();
  };

  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-3 transition-all duration-200 hover:opacity-80 cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600">
              <span className="text-lg font-bold text-white">🧠</span>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-gray-900">
                DSA Learning Hub
              </h1>
              <p className="text-xs text-gray-500">
                Namaste DSA Course Companion
              </p>
            </div>
          </button>

          <div className="flex items-center gap-4">
            <GitHubStarButton />
            
            <div className="hidden sm:flex items-center gap-2">
              {socialLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  className={`rounded-lg bg-gray-100 p-2 text-gray-600 transition-all duration-200 ${link.color} hover:scale-110 hover:bg-gray-200`}
                  aria-label={link.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
