import React, { useEffect, useState } from 'react';
import { Star, GitFork, ExternalLink } from 'lucide-react';
import { GithubIcon } from '../common/BrandIcons';

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}

export const GithubProjects: React.FC = () => {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch('https://api.github.com/users/anushragav-vs/repos?sort=updated&per_page=6');
        if (!res.ok) throw new Error('GitHub API response not ok');
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setRepos(data);
        } else {
          fallbackRepos();
        }
      } catch {
        // Graceful fallback to verified repositories
        fallbackRepos();
      } finally {
        setLoading(false);
      }
    };

    const fallbackRepos = () => {
      setRepos([
        {
          id: 1,
          name: 'SignalFlow-AI',
          description: 'Two-tier fintech cognitive architecture filtering financial news with local SLM and Gemini 3.5 research synthesis.',
          html_url: 'https://github.com/anushragav-vs/SignalFlow-AI',
          stargazers_count: 0,
          forks_count: 0,
          language: 'Python',
          updated_at: '2026-10-15',
        },
        {
          id: 2,
          name: 'ma-crossover-backtester',
          description: 'Python backtesting engine testing 20/50-day moving average crossover on Google stock with zero look-ahead bias.',
          html_url: 'https://github.com/anushragav-vs/ma-crossover-backtester',
          stargazers_count: 0,
          forks_count: 0,
          language: 'Python',
          updated_at: '2026-09-20',
        },
        {
          id: 3,
          name: 'TouchGrass',
          description: 'Lightweight session tracking and wellness reminder utility for developers.',
          html_url: 'https://github.com/anushragav-vs/TouchGrass',
          stargazers_count: 0,
          forks_count: 0,
          language: 'Python',
          updated_at: '2026-08-10',
        },
        {
          id: 4,
          name: 'LingoBuddy',
          description: 'Interactive language learning companion experimenting with conversational prompt structures.',
          html_url: 'https://github.com/anushragav-vs/LingoBuddy',
          stargazers_count: 0,
          forks_count: 0,
          language: 'Python',
          updated_at: '2026-07-05',
        },
      ]);
    };

    fetchRepos();
  }, []);

  return (
    <div className="mt-16 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <GithubIcon className="w-5 h-5 text-aqua-electric" />
          <h3 className="text-xl font-bold text-content-primary">
            Public Repositories
          </h3>
        </div>
        <a
          href="https://github.com/anushragav-vs"
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-mono text-aqua-sky hover:underline flex items-center gap-1"
        >
          <span>View GitHub Profile</span>
          <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-32 rounded-2xl glass-card animate-pulse" />
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {repos.map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl glass-card border border-aqua-electric/15 hover:border-aqua-electric/40 hover:shadow-glow-cyan transition-all flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-sm font-semibold text-content-primary group-hover:text-aqua-electric transition-colors truncate">
                    {repo.name}
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-content-muted group-hover:text-aqua-sky transition-colors shrink-0" />
                </div>
                <p className="text-xs text-content-secondary line-clamp-2">
                  {repo.description || 'Open-source repository by Anush Ragav V S.'}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4 mt-2 border-t border-aqua-electric/10 text-xs font-mono text-content-muted">
                {repo.language && (
                  <span className="flex items-center gap-1.5 text-aqua-sky">
                    <span className="w-2 h-2 rounded-full bg-aqua-electric" />
                    {repo.language}
                  </span>
                )}
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5" />
                    {repo.stargazers_count}
                  </span>
                  <span className="flex items-center gap-1">
                    <GitFork className="w-3.5 h-3.5" />
                    {repo.forks_count}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      )}
    </div>
  );
};
