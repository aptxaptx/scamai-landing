export interface Newsletter {
  id: number;
  edition: number;
  title: string;
  slug: string;
  date: string;
  reading_time: number;
  summary: string;
  published: boolean;
  created_at: string;
}

export interface NewsletterDetail extends Newsletter {
  executiveSummary: string;
  top3Articles: Article[];
  sections: Section[];
  filteredArticles?: Article[];
}

export interface Article {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  takeaway?: string;
  description?: string;
  imageUrl?: string;
}

export interface Section {
  title: string;
  summary?: string;
  articles: Article[];
}

export interface NewsletterArticle {
  id: number;
  newsletter_id: number;
  title: string;
  source: string;
  description: string;
  url: string;
  published_at: string;
  category: string;
}

export interface Stats {
  total: number;
  published: number;
  drafts: number;
}
