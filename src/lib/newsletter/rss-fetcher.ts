import type { FetchedArticle } from './news-fetcher';

/**
 * Parses Google Alerts Atom feeds and other RSS/Atom feeds
 * into the same FetchedArticle format used by NewsFetcher.
 */
export class RSSFetcher {
  /**
   * Fetch and parse articles from a single RSS/Atom feed URL.
   */
  async fetchFeed(feedUrl: string): Promise<FetchedArticle[]> {
    try {
      const response = await fetch(feedUrl);
      if (!response.ok) {
        console.error(`RSS fetch error for ${feedUrl}: ${response.status}`);
        return [];
      }

      const xml = await response.text();
      return this.parseAtomFeed(xml);
    } catch (error) {
      console.error(`RSS fetch error for ${feedUrl}:`, error);
      return [];
    }
  }

  /**
   * Fetch articles from multiple feeds and merge results.
   */
  async fetchFeeds(
    feeds: Array<{ name: string; url: string }>
  ): Promise<FetchedArticle[]> {
    const results = await Promise.allSettled(
      feeds.map((feed) => this.fetchFeed(feed.url))
    );

    const articles: FetchedArticle[] = [];
    for (const result of results) {
      if (result.status === 'fulfilled') {
        articles.push(...result.value);
      }
    }
    return articles;
  }

  /**
   * Parse Atom XML (Google Alerts format) into FetchedArticle[].
   */
  private parseAtomFeed(xml: string): FetchedArticle[] {
    const articles: FetchedArticle[] = [];
    const entries = xml.split('<entry>').slice(1);

    for (const entry of entries) {
      try {
        const title = this.stripHtml(this.extractTag(entry, 'title') || '');
        const rawLink = this.extractAttr(entry, 'link', 'href') || '';
        const url = this.extractRealUrl(rawLink);
        const published = this.extractTag(entry, 'published') || '';
        const content = this.stripHtml(
          this.extractTag(entry, 'content') || ''
        );

        // Extract source from URL hostname
        let source = '';
        try {
          const hostname = new URL(url).hostname.replace(/^www\./, '');
          source = hostname;
        } catch {
          source = 'Unknown';
        }

        if (title && url) {
          articles.push({
            title,
            description: content || null,
            url,
            source,
            publishedAt: published || new Date().toISOString(),
            imageUrl: null,
            content: content || null,
            author: null,
          });
        }
      } catch {
        // Skip malformed entries
      }
    }

    return articles;
  }

  /**
   * Extract the real URL from Google Alerts redirect URLs.
   * Google wraps article URLs like: https://www.google.com/url?...&url=REAL_URL&...
   */
  private extractRealUrl(googleUrl: string): string {
    try {
      const decoded = googleUrl.replace(/&amp;/g, '&');
      const urlObj = new URL(decoded);
      const realUrl = urlObj.searchParams.get('url');
      return realUrl || decoded;
    } catch {
      return googleUrl;
    }
  }

  /** Extract text content of an XML tag. */
  private extractTag(xml: string, tag: string): string | null {
    // Handle both type="html" and plain content
    const regex = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)</${tag}>`, 'i');
    const match = xml.match(regex);
    return match ? match[1].trim() : null;
  }

  /** Extract an attribute value from an XML tag. */
  private extractAttr(
    xml: string,
    tag: string,
    attr: string
  ): string | null {
    const regex = new RegExp(`<${tag}[^>]*${attr}="([^"]*)"`, 'i');
    const match = xml.match(regex);
    return match ? match[1].replace(/&amp;/g, '&') : null;
  }

  /** Strip HTML tags and entities from a string. */
  private stripHtml(html: string): string {
    return html
      // Decode HTML entities first so encoded tags become real tags
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&amp;/g, '&')
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/&middot;/g, '·')
      .replace(/&nbsp;/g, ' ')
      // Then strip all HTML tags
      .replace(/<[^>]*>/g, '')
      .trim();
  }
}
