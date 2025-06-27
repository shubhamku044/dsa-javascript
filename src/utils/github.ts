
const GITHUB_API_URL = 'https://api.github.com/repos/shubhamku044/dsa-javascript';
const STORAGE_KEY = 'github_stars_data';
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

interface GitHubData {
  stars: number;
  forks: number;
  lastFetched: number;
}

export const getGitHubStats = async (): Promise<GitHubData> => {
  const cachedData = localStorage.getItem(STORAGE_KEY);
  
  if (cachedData) {
    try {
      const parsedData: GitHubData = JSON.parse(cachedData);
      const isDataFresh = Date.now() - parsedData.lastFetched < ONE_DAY_MS;
      
      if (isDataFresh) {
        return parsedData;
      }
    } catch (error) {
      console.warn('Failed to parse cached GitHub data:', error);
    }
  }

  try {
    const response = await fetch(GITHUB_API_URL);
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`);
    }
    
    const data = await response.json();
    const gitHubData: GitHubData = {
      stars: data.stargazers_count,
      forks: data.forks_count,
      lastFetched: Date.now(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(gitHubData));
    
    return gitHubData;
  } catch (error) {
    console.error('Failed to fetch GitHub stats:', error);
    
    if (cachedData) {
      try {
        return JSON.parse(cachedData);
      } catch (parseError) {
        console.error('Failed to parse stale cached data:', parseError);
      }
    }
    
    return {
      stars: 1,
      forks: 0,
      lastFetched: Date.now(),
    };
  }
};

export const getGitHubUrl = () => 'https://github.com/shubhamku044/dsa-javascript'; 