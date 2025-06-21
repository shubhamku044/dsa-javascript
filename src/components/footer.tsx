import { Github, Linkedin, Twitter } from "lucide-react";
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

export function Footer(): JSX.Element {
  return (
    <footer className="mt-16 border-t border-gray-200 py-8">
      <div className="text-center">
        <p className="mb-4 text-gray-600">
          Built with ❤️ for the developer community
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className={`flex items-center space-x-2 text-gray-600 transition-colors ${link.color}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
              <span className="text-sm font-medium">{link.label}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
