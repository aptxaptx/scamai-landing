const NEWS_API_BASE = 'https://newsapi.org/v2';

export interface FetchedArticle {
  title: string;
  description: string | null;
  url: string;
  source: string;
  publishedAt: string;
  imageUrl: string | null;
  content: string | null;
  author: string | null;
}

export class NewsFetcher {
  private domainBlocklist: string[];

  constructor() {
    this.domainBlocklist = [
      'news.ycombinator.com',
      'reddit.com',
      'slashdot.org',
      'medium.com',
      'github.com',
      'stackoverflow.com',
      'substack.com',
      'x.com',
      'twitter.com',
      'discord.com',
      't.me',
      'facebook.com',
      'linkedin.com',
      'youtube.com',
      'tiktok.com',
    ];
  }

  filterBlockedDomains(articles: FetchedArticle[]): FetchedArticle[] {
    return articles.filter((article) => {
      try {
        const hostname = new URL(article.url).hostname.toLowerCase();
        return !this.domainBlocklist.some(
          (blocked) =>
            hostname === blocked || hostname.endsWith('.' + blocked)
        );
      } catch {
        return false;
      }
    });
  }

  async fetchDeepfakeNews(daysBack = 7): Promise<FetchedArticle[]> {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) {
      console.error('NEWS_API_KEY not set');
      return [];
    }

    try {
      const fromDate = new Date();
      fromDate.setDate(fromDate.getDate() - daysBack);
      const fromStr = fromDate.toISOString().split('T')[0];

      const query =
        'deepfake OR faceswap OR "face swap" OR "synthetic media" OR "AI-generated face" OR "fake video" OR "deep fake"';
      const url = `${NEWS_API_BASE}/everything?q=${encodeURIComponent(query)}&language=en&sortBy=publishedAt&from=${fromStr}&pageSize=50&apiKey=${apiKey}`;

      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`NewsAPI error: ${response.status}`);
      }

      const data = await response.json();

      const articles: FetchedArticle[] = (
        data.articles as Array<{
          title: string;
          description: string | null;
          url: string;
          source: { name: string };
          publishedAt: string;
          urlToImage: string | null;
          content: string | null;
          author: string | null;
        }>
      ).map((article) => ({
        title: article.title,
        description: article.description,
        url: article.url,
        source: article.source.name,
        publishedAt: article.publishedAt,
        imageUrl: article.urlToImage,
        content: article.content,
        author: article.author,
      }));

      return this.filterBlockedDomains(articles);
    } catch (error) {
      console.error('NewsAPI fetch error:', error);
      return [];
    }
  }
}
