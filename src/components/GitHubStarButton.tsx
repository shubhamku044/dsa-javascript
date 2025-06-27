import { ExternalLink,GitFork, Star } from "lucide-react";
import { useEffect, useState } from "react";

import { getGitHubStats, getGitHubUrl } from "../utils/github";

interface GitHubStats {
  stars: number;
  forks: number;
}

export const GitHubStarButton = () => {
  const [stats, setStats] = useState<GitHubStats>({ stars: 1, forks: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await getGitHubStats();
        setStats({ stars: data.stars, forks: data.forks });
      } catch (error) {
        console.error("Failed to load GitHub stats:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  const handleStarClick = () => {
    window.open(getGitHubUrl(), '_blank');
  };

  return (
    <div className="flex items-center gap-2">
      {/* Star Button */}
      <button
        onClick={handleStarClick}
        className="group flex items-center gap-2 rounded-lg border-2 border-gray-300 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition-all duration-200 hover:border-yellow-400 hover:bg-yellow-50 hover:text-yellow-700 hover:shadow-md"
      >
        <Star className="h-4 w-4 transition-colors group-hover:fill-yellow-400 group-hover:text-yellow-500" />
        <span>Star</span>
        <div className="flex h-5 items-center rounded bg-gray-100 px-2 text-xs font-semibold text-gray-600 group-hover:bg-yellow-100 group-hover:text-yellow-800">
          {loading ? "..." : stats.stars}
        </div>
        <ExternalLink className="h-3 w-3 opacity-50" />
      </button>

      {/* Fork Button */}
      <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-600">
        <GitFork className="h-4 w-4" />
        <span className="text-xs font-medium">{loading ? "..." : stats.forks}</span>
      </div>
    </div>
  );
}; 