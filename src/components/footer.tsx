import { BookOpen,ExternalLink, Github, Heart } from "lucide-react";
import type { JSX } from "react";

export const Footer = (): JSX.Element => {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Project Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600">
                <span className="text-sm font-bold text-white">🧠</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900">DSA Learning Hub</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Your interactive companion for the Namaste DSA course by Akshay Saini. 
              Built by a fellow student to help the community revise and practice algorithms.
            </p>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-500">Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span className="text-sm text-gray-500">for DSA learners</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://namastedev.com/learn/namaste-dsa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <BookOpen className="h-4 w-4" />
                  Namaste DSA Course
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shubhamku044/dsa-javascript"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/shubhamku044/dsa-javascript/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-gray-600 hover:text-indigo-600 transition-colors"
                >
                  Report Issues
                  <ExternalLink className="h-3 w-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Share & Contribute</h3>
            <p className="text-sm text-gray-600 mb-4">
              Help fellow Namaste DSA students by starring the repo and sharing this resource!
            </p>
            <div className="space-y-2">
              <button
                onClick={() => {
                  const url = 'https://github.com/shubhamku044/dsa-javascript';
                  const text = 'Check out this awesome DSA Learning Hub for Namaste DSA course students! 🧠✨';
                  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
                  window.open(twitterUrl, '_blank');
                }}
                className="flex items-center gap-2 rounded-lg bg-blue-50 px-3 py-2 text-sm text-blue-700 hover:bg-blue-100 transition-colors"
              >
                <span>📱</span>
                Share on Twitter
              </button>
              <div className="text-xs text-gray-500">
                Found this helpful? Consider starring the repo ⭐
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © 2025 DSA Learning Hub. Created by{" "}
              <a
                href="https://github.com/shubhamku044"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:text-indigo-700"
              >
                @shubhamku044
              </a>
            </p>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span>Built with React + Vite + TailwindCSS</span>
              <span>•</span>
              <span>Open Source</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
