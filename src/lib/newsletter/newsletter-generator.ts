import { format } from 'date-fns';
import type { FetchedArticle } from './news-fetcher';

interface GeneratedArticle extends FetchedArticle {
  takeaway: string;
  relevance?: number;
}

interface GeneratedSection {
  title: string;
  summary: string;
  articles: Array<{
    title: string;
    source: string;
    description: string;
    url: string;
    publishedAt: string;
    imageUrl?: string | null;
  }>;
}

export interface GeneratedNewsletter {
  title: string;
  edition: number;
  date: string;
  executiveSummary: string;
  top3Articles: GeneratedArticle[];
  sections: GeneratedSection[];
  totalArticles: number;
  summary: string;
  readingTime: number;
}

interface ExtractedInfo {
  entities: Record<string, number>;
  topics: Record<string, number>;
  actions: Record<string, number>;
  events: Record<string, number>;
}

interface Focus {
  type: string;
  confidence: string;
  topic?: string;
  secondaryTopic?: string;
  entities?: string[];
  event?: string;
  action?: string;
  subject?: string;
  object?: string;
  topics?: string[];
}

export class NewsletterGenerator {
  private ollamaBaseUrl: string;
  private sourceBlacklist: string[];

  constructor() {
    this.ollamaBaseUrl = process.env.OLLAMA_BASE_URL || '';
    this.sourceBlacklist = [
      'fox news',
      'breitbart',
      'infowars',
      'the gateway pundit',
      'natural news',
      'newsmax',
    ];
  }

  private filterBlacklistedSources(articles: FetchedArticle[]): FetchedArticle[] {
    return articles.filter((article) => {
      const sourceLower = (article.source || '').toLowerCase();
      return !this.sourceBlacklist.some((b) => sourceLower.includes(b));
    });
  }

  async generate(
    articles: FetchedArticle[],
    options: {
      title?: string;
      edition?: number;
      date?: Date;
    } = {}
  ): Promise<GeneratedNewsletter> {
    const {
      title = 'Deepfake Weekly',
      edition = this.getEditionNumber(),
      date = new Date(),
    } = options;

    const trustedArticles = this.filterBlacklistedSources(articles);
    const uniqueArticles = this.deduplicateArticles(trustedArticles);
    const top3ArticlesRaw = this.selectTopArticles(uniqueArticles, 3);

    const executiveSummary = await this.generateExecutiveSummary(top3ArticlesRaw);

    const top3Articles: GeneratedArticle[] = await Promise.all(
      top3ArticlesRaw.map(async (article) => ({
        ...article,
        takeaway: await this.generateArticleTakeaway(article),
      }))
    );

    const topArticles = this.selectTopArticles(uniqueArticles, 8);
    const categorized = this.categorizeArticles(topArticles);
    const sections = this.generateSections(categorized);

    // Remove top3 articles from sections to avoid duplication
    const top3Urls = new Set(top3Articles.map((a) => a.url));
    sections.forEach((section) => {
      section.articles = section.articles.filter((a) => !top3Urls.has(a.url));
    });

    const filteredSections = sections.filter((s) => s.articles.length > 0);

    return {
      title,
      edition,
      date: format(date, 'MMMM d, yyyy'),
      executiveSummary,
      top3Articles,
      sections: filteredSections,
      totalArticles: topArticles.length,
      summary: this.generateSummary(topArticles),
      readingTime: 2,
    };
  }

  private async generateArticleTakeaway(article: FetchedArticle): Promise<string> {
    if (this.ollamaBaseUrl) {
      const prompt = `You are a cybersecurity analyst writing for KYC experts and CISOs. Read this article headline and description, then write ONE concise sentence (15-25 words) explaining why this matters for fraud prevention, identity verification, or compliance teams.

Title: ${article.title}
Description: ${article.description || 'No description available'}

Write only the single sentence takeaway, starting with a verb (e.g., "Highlights...", "Reveals...", "Demonstrates..."):`;

      try {
        const response = await fetch(`${this.ollamaBaseUrl}/api/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: process.env.OLLAMA_MODEL || 'llama3.2',
            prompt,
            stream: false,
            options: { temperature: 0.7, num_predict: 50 },
          }),
          signal: AbortSignal.timeout(15000),
        });

        if (response.ok) {
          const data = await response.json();
          const takeaway = (data.response as string).trim();
          return takeaway.split(/[.!?]/)[0].trim() + '.';
        }
      } catch {
        // Ollama unavailable, use template
      }
    }

    return this.generateTakeaway(article);
  }

  private generateTakeaway(article: FetchedArticle): string {
    const text = `${article.title} ${article.description || ''}`.toLowerCase();

    if (text.match(/scam|fraud|victim|loses|lost|stolen/)) {
      return 'Highlights real-world fraud cases and financial impacts of deepfake attacks.';
    }
    if (text.match(/regulation|policy|law|ban|legislation|government/)) {
      return 'Indicates regulatory changes that may affect compliance requirements.';
    }
    if (text.match(/detect|authentication|verification|tool|technology|solution/)) {
      return 'Showcases new technologies for deepfake detection and identity verification.';
    }
    if (text.match(/breach|attack|security|vulnerability|risk/)) {
      return 'Warns of security vulnerabilities and attack vectors in identity systems.';
    }
    if (text.match(/election|political|democracy|misinformation/)) {
      return 'Illustrates how deepfakes threaten democratic processes and public trust.';
    }

    return 'Provides insights into emerging deepfake threats and mitigation strategies.';
  }

  private deduplicateArticles(articles: FetchedArticle[]): FetchedArticle[] {
    const seen = new Map<string, string>();
    const unique: FetchedArticle[] = [];

    articles.forEach((article) => {
      if (seen.has(article.url)) return;

      const normalizedTitle = article.title
        .toLowerCase()
        .replace(/[^\w\s]/g, '')
        .trim();

      let isDuplicate = false;
      for (const [, existingTitle] of seen.entries()) {
        if (this.similarityScore(normalizedTitle, existingTitle) > 0.8) {
          isDuplicate = true;
          break;
        }
      }

      if (!isDuplicate) {
        seen.set(article.url, normalizedTitle);
        unique.push(article);
      }
    });

    return unique;
  }

  private similarityScore(str1: string, str2: string): number {
    const words1 = new Set(str1.split(/\s+/));
    const words2 = new Set(str2.split(/\s+/));

    const intersection = new Set([...words1].filter((x) => words2.has(x)));
    const union = new Set([...words1, ...words2]);

    return intersection.size / union.size;
  }

  private selectTopArticles(
    articles: FetchedArticle[],
    max: number
  ): FetchedArticle[] {
    return articles
      .map((article) => ({
        ...article,
        relevance: this.calculateRelevance(article),
      }))
      .sort((a, b) => b.relevance - a.relevance)
      .slice(0, max);
  }

  private calculateRelevance(article: FetchedArticle): number {
    const text = `${article.title} ${article.description || ''}`.toLowerCase();
    let score = 0;

    const promoKeywords = [
      'press release', 'announces', 'launches', 'introducing',
      'now available', 'new product', 'partnership', 'collaboration',
      'funding', 'series a', 'series b', 'investment', 'raises',
      'we are excited', 'we are pleased', 'proud to announce',
      'joins', 'appoints', 'hires', 'promotes',
    ];

    let promoCount = 0;
    promoKeywords.forEach((kw) => {
      if (text.includes(kw)) promoCount++;
    });

    if (promoCount >= 2) score -= 5;
    else if (promoCount === 1) score -= 2;

    if (text.includes('deepfake')) score += 3;
    if (text.includes('face swap') || text.includes('faceswap')) score += 3;
    if (text.includes('scam') || text.includes('fraud')) score += 2;
    if (text.includes('breach')) score += 2;
    if (text.includes('ai')) score += 1;
    if (text.includes('security')) score += 1;

    if (text.match(/fraud|scam|phishing|imperson|identity.*theft|financial.*crime/)) score += 2;
    if (text.match(/policy|regulation|legislation|law|compliance|ban|restrict/)) score += 2;
    if (text.match(/detect|authentication|verification|kyc|know.*your.*customer|identity.*verif|proof.*of.*life/)) score += 1;
    if (text.match(/celebrity|hollywood|entertainment|movie|film|actor|actress/) && !text.match(/fraud|scam|crime|victim/)) score -= 1;

    const daysSince =
      (Date.now() - new Date(article.publishedAt).getTime()) /
      (1000 * 60 * 60 * 24);
    if (daysSince < 2) score += 2;
    else if (daysSince < 5) score += 1;

    if (article.imageUrl) score += 1;

    return score;
  }

  private categorizeArticles(
    articles: FetchedArticle[]
  ): Record<string, FetchedArticle[]> {
    const categories: Record<string, FetchedArticle[]> = {
      'Security Breaches': [],
      'Technology & Tools': [],
      'Policy & Regulation': [],
      'Industry News': [],
    };

    articles.forEach((article) => {
      const text = `${article.title} ${article.description || ''}`.toLowerCase();

      if (text.match(/breach|scam|fraud|attack|victim|stolen/)) {
        categories['Security Breaches'].push(article);
      } else if (text.match(/detect|tool|algorithm|research|model|technology/)) {
        categories['Technology & Tools'].push(article);
      } else if (text.match(/law|regulation|policy|government|ban|legislation/)) {
        categories['Policy & Regulation'].push(article);
      } else {
        categories['Industry News'].push(article);
      }
    });

    Object.keys(categories).forEach((key) => {
      if (categories[key].length === 0) delete categories[key];
    });

    return categories;
  }

  private generateSections(
    categorized: Record<string, FetchedArticle[]>
  ): GeneratedSection[] {
    return Object.entries(categorized).map(([category, articles]) => ({
      title: category,
      summary: this.generateSectionSummary(articles),
      articles: articles.map((article) => ({
        title: article.title,
        source: article.source,
        description: this.truncateDescription(article.description, 150),
        url: article.url,
        publishedAt: article.publishedAt,
        imageUrl: article.imageUrl,
      })),
    }));
  }

  private generateSectionSummary(articles: FetchedArticle[]): string {
    const count = articles.length;
    const articleWord = count === 1 ? 'article' : 'articles';
    const info = this.extractInformation(articles);
    const focus = this.determineFocus(articles, info);

    const recentCount = articles.filter((a) => {
      const daysSince =
        (Date.now() - new Date(a.publishedAt).getTime()) /
        (1000 * 60 * 60 * 24);
      return daysSince < 3;
    }).length;

    return this.generateIntelligentSummary(count, articleWord, focus, recentCount);
  }

  private extractInformation(articles: FetchedArticle[]): ExtractedInfo {
    const info: ExtractedInfo = {
      entities: {},
      topics: {},
      actions: {},
      events: {},
    };

    articles.forEach((article) => {
      const text = `${article.title} ${article.description || ''}`;

      const entityPatterns = [
        /\b(Meta|Facebook|Google|Microsoft|Apple|Amazon|OpenAI|Anthropic|DeepMind|Tesla|Twitter|X\.com|TikTok|ByteDance|Nvidia|Intel|AMD)\b/gi,
        /\b(FBI|CIA|Congress|Senate|White House|EU|UN|NATO)\b/gi,
      ];

      entityPatterns.forEach((pattern) => {
        const matches = text.match(pattern);
        if (matches) {
          matches.forEach((entity) => {
            const normalized = entity.trim();
            info.entities[normalized] = (info.entities[normalized] || 0) + 1;
          });
        }
      });

      const actionPatterns = [
        { pattern: /\b(launch|release|unveil|introduce|announce)\w*/gi, action: 'launching' },
        { pattern: /\b(ban|prohibit|restrict|block)\w*/gi, action: 'banning' },
        { pattern: /\b(warn|alert|caution)\w*/gi, action: 'warning about' },
        { pattern: /\b(detect|identify|spot|find)\w*/gi, action: 'detecting' },
        { pattern: /\b(scam|defraud|steal|trick)\w*/gi, action: 'scamming' },
        { pattern: /\b(probe|investigat|examin)\w*/gi, action: 'investigating' },
      ];

      actionPatterns.forEach(({ pattern, action }) => {
        if (pattern.test(text)) {
          info.actions[action] = (info.actions[action] || 0) + 1;
        }
      });
    });

    const extractedTopics = this.extractMeaningfulTopics(articles);
    extractedTopics.forEach((count, topic) => {
      info.topics[topic] = count;
    });

    return info;
  }

  private extractMeaningfulTopics(articles: FetchedArticle[]): Map<string, number> {
    const topics = new Map<string, number>();

    articles.forEach((article) => {
      const titleTopics = this.extractTopicsFromTitle(article.title);
      titleTopics.forEach((topic) => {
        topics.set(topic, (topics.get(topic) || 0) + 1);
      });
    });

    return topics;
  }

  private extractTopicsFromTitle(title: string): string[] {
    const lower = title.toLowerCase();

    const techTypePatterns = [
      { regex: /voice\s+(?:clon(?:e|ing)|deepfake|synthesis)/i, topic: 'voice cloning' },
      { regex: /face\s*swap(?:ping)?/i, topic: 'face swap' },
      { regex: /video\s+(?:manipulation|deepfake)/i, topic: 'video manipulation' },
      { regex: /audio\s+(?:deepfake|synthesis)/i, topic: 'audio deepfake' },
    ];

    for (const { regex, topic } of techTypePatterns) {
      if (regex.test(lower)) return [topic];
    }

    const scenarioPatterns = [
      { regex: /romance\s+scam/i, topic: 'romance scams' },
      { regex: /crypto\s+scam/i, topic: 'crypto scams' },
      { regex: /election\s+(?:interference|manipulation)/i, topic: 'election interference' },
      { regex: /financial\s+(?:scam|fraud)/i, topic: 'financial fraud' },
    ];

    for (const { regex, topic } of scenarioPatterns) {
      if (regex.test(lower)) return [topic];
    }

    const generalPatterns = [
      { regex: /(?:detect|identify|spot).*deepfake|deepfake.*(?:detect|identify)/i, topic: 'deepfake detection' },
      { regex: /(?:regulation|law|legislation).*(?:deepfake|ai)/i, topic: 'AI regulation' },
      { regex: /(?:protect|consent|rights).*(?:personality|identity)/i, topic: 'identity protection' },
    ];

    for (const { regex, topic } of generalPatterns) {
      if (regex.test(lower)) return [topic];
    }

    return ['deepfake technology'];
  }

  private determineFocus(articles: FetchedArticle[], info: ExtractedInfo): Focus {
    const count = articles.length;

    const topTopics = Object.entries(info.topics)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    const topEntities = Object.entries(info.entities)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 3);

    const topActions = Object.entries(info.actions)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2);

    // Diverse topics check
    if (topTopics.length >= 3 && topTopics[0][1] === 1 && topTopics[1][1] === 1 && topTopics[2][1] === 1) {
      return { type: 'diverse', topics: topTopics.map((t) => t[0]), confidence: 'none' };
    }

    if (topTopics.length > 0 && topTopics[0][1] < 2 && count >= 3) {
      return { type: 'diverse', topics: topTopics.slice(0, 3).map((t) => t[0]), confidence: 'none' };
    }

    // Topic-driven
    if (topTopics.length > 0) {
      const [mainTopic, mainCount] = topTopics[0];
      if (mainCount >= count * 0.4) {
        return {
          type: 'topic-driven',
          topic: mainTopic,
          secondaryTopic: topTopics[1]?.[0],
          confidence: mainCount >= count * 0.6 ? 'high' : 'medium',
        };
      }
    }

    // Entity-driven
    if (topEntities.length >= 1) {
      const [entity, entityCount] = topEntities[0];
      if (entityCount >= count * 0.6) {
        return {
          type: 'entity-driven',
          entities: [entity],
          topic: topTopics[0]?.[0] || 'deepfake developments',
          confidence: 'medium',
        };
      }
    }

    // Action-driven
    if (topActions.length > 0) {
      const [action, actionCount] = topActions[0];
      if (actionCount >= count * 0.4) {
        return {
          type: 'action-driven',
          action,
          subject: topEntities[0]?.[0] || 'organizations',
          object: topTopics[0]?.[0] || 'deepfake technology',
          confidence: 'medium',
        };
      }
    }

    // Fallback
    if (topTopics.length > 0) {
      return { type: 'topic-driven', topic: topTopics[0][0], confidence: 'low' };
    }

    return { type: 'generic', confidence: 'low' };
  }

  private generateIntelligentSummary(
    count: number,
    articleWord: string,
    focus: Focus,
    recentCount: number
  ): string {
    let summary = '';

    switch (focus.type) {
      case 'entity-driven':
        if (focus.entities && focus.entities.length >= 1) {
          summary = `${count} ${articleWord} on ${focus.entities[0]}'s ${focus.topic}`;
        }
        break;
      case 'event-driven':
        summary = `${count} ${articleWord} covering the ${focus.event}`;
        break;
      case 'topic-driven':
        if (focus.secondaryTopic && focus.confidence !== 'low') {
          summary = `${count} ${articleWord} on ${focus.topic} and ${focus.secondaryTopic}`;
        } else {
          summary = `${count} ${articleWord} on ${focus.topic}`;
        }
        break;
      case 'action-driven':
        summary = `${count} ${articleWord} on ${focus.subject} ${focus.action} ${focus.object}`;
        break;
      case 'diverse':
        if (focus.topics && focus.topics.length >= 2) {
          summary = `${count} ${articleWord} covering ${focus.topics.join(', ')}`;
        } else {
          summary = `${count} ${articleWord} on various deepfake developments`;
        }
        break;
      default:
        summary = `${count} ${articleWord} on various deepfake developments`;
        break;
    }

    if (recentCount > 0 && recentCount < count) {
      summary += `. ${recentCount} published within the last 3 days`;
    }

    summary += '.';
    return summary;
  }

  private truncateDescription(desc: string | null, maxLength: number): string {
    if (!desc) return '';
    if (desc.length <= maxLength) return desc;
    return desc.substring(0, maxLength).trim() + '...';
  }

  private generateSummary(articles: FetchedArticle[]): string {
    const info = this.extractInformation(articles);
    const focus = this.determineFocus(articles, info);
    const count = articles.length;

    switch (focus.type) {
      case 'topic-driven':
        if (focus.secondaryTopic && focus.confidence === 'high') {
          return `This week's coverage includes ${count} articles examining ${focus.topic} and ${focus.secondaryTopic}.`;
        }
        return `This week's coverage includes ${count} articles on ${focus.topic}.`;
      case 'entity-driven':
        return `This week's coverage includes ${count} articles on ${focus.entities?.[0]}'s ${focus.topic}.`;
      case 'event-driven':
        return `This week's coverage focuses on the ${focus.event}, with ${count} articles.`;
      case 'action-driven':
        return `This week's coverage includes ${count} articles on ${focus.subject} ${focus.action} ${focus.object}.`;
      default: {
        const topTopics = Object.entries(info.topics)
          .sort((a, b) => b[1] - a[1])
          .slice(0, 2)
          .map(([topic]) => topic);

        if (topTopics.length >= 2) {
          return `This week's coverage includes ${count} articles on ${topTopics.join(', ')}, and related developments.`;
        }
        return `This week's coverage includes ${count} articles on deepfake technology and security concerns.`;
      }
    }
  }

  private async generateExecutiveSummary(articles: FetchedArticle[]): Promise<string> {
    if (this.ollamaBaseUrl) {
      const context = articles
        .map((a, i) => `${i + 1}. ${a.title} - ${a.description || 'No description'}`)
        .join('\n');

      const prompt = `You are a seasoned security executive writing a briefing for identity verification leaders and CISOs. Based on these ${articles.length} critical deepfake developments from this week, write a sharp, authoritative paragraph (3-4 sentences).

REQUIREMENTS:
- Write with command and precision - no hedging phrases
- Lead with the most material development
- Connect developments to business risk or operational reality
- Sound like a trusted advisor, not a generic AI assistant
- Avoid clichés: "ever-evolving," "landscape," "underscores," "emphasizes," "critical to"
- Use active voice and specific language

Top ${articles.length} Articles:
${context}

Write the paragraph now - direct, confident, actionable:`;

      try {
        const response = await fetch(`${this.ollamaBaseUrl}/api/generate`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            model: process.env.OLLAMA_MODEL || 'llama3.2',
            prompt,
            stream: false,
            options: { temperature: 0.7, num_predict: 200 },
          }),
          signal: AbortSignal.timeout(20000),
        });

        if (response.ok) {
          const data = await response.json();
          return (data.response as string).trim();
        }
      } catch {
        // Ollama unavailable
      }
    }

    return this.generateTemplateSummary(articles);
  }

  private generateTemplateSummary(articles: FetchedArticle[]): string {
    const info = this.extractInformation(articles);
    const focus = this.determineFocus(articles, info);
    const count = articles.length;

    const hasScam = Object.keys(info.topics).some((t) => t.match(/scam|fraud/));
    const hasRegulation = Object.keys(info.topics).some((t) => t.match(/regulat|policy|law/));
    const hasDetection = Object.keys(info.topics).some((t) => t.match(/detect|verif|authentication/));

    if (focus.type === 'topic-driven' && hasScam) {
      return `This week saw ${count} significant developments in deepfake-related fraud, with ${focus.topic} emerging as a critical threat vector. For KYC and compliance teams, these incidents underscore the urgent need for enhanced identity verification protocols and multi-factor authentication systems. Organizations should prioritize real-time deepfake detection capabilities and staff training to mitigate financial and reputational risks.`;
    }

    if (focus.type === 'topic-driven' && hasRegulation) {
      return `This week brought ${count} key updates in deepfake regulation and policy, particularly around ${focus.topic}. CISOs and compliance officers should note the evolving legal landscape and assess organizational readiness for new authentication requirements. Proactive adoption of advanced verification technologies will be essential for regulatory compliance and fraud prevention.`;
    }

    if (hasDetection) {
      return `This week highlighted ${count} developments in deepfake detection and authentication technologies. For identity verification teams, these advancements offer new tools to combat synthetic identity fraud and account takeover attacks. Organizations should evaluate integrating these detection capabilities into their KYC workflows to strengthen security posture.`;
    }

    const topTopics = Object.entries(info.topics)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 2)
      .map(([topic]) => topic);

    return `This week's deepfake landscape featured ${count} notable incidents and developments, primarily involving ${topTopics.join(' and ') || 'deepfake technology'}. These trends highlight the growing sophistication of synthetic media attacks targeting financial institutions and identity verification systems. KYC teams and CISOs should remain vigilant and consider strengthening authentication protocols to address these evolving threats.`;
  }

  private getEditionNumber(): number {
    const start = new Date('2026-01-01');
    const now = new Date();
    return Math.floor((now.getTime() - start.getTime()) / (7 * 24 * 60 * 60 * 1000)) + 1;
  }
}
