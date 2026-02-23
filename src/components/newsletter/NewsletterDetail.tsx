"use client";

import { Link } from "@/i18n/navigation";

interface Article {
  title: string;
  url: string;
  source: string;
  publishedAt: string;
  takeaway?: string;
  description?: string;
  imageUrl?: string;
}

interface Section {
  title: string;
  articles: Article[];
}

interface Newsletter {
  id: number;
  edition: number;
  title: string;
  slug?: string;
  date: string;
  reading_time: number;
  summary: string;
  executiveSummary: string;
  top3Articles: Article[];
  sections: Section[];
}

function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  } catch {
    return dateStr;
  }
}

function cleanTitle(title: string) {
  return title.replace(/^\[.*?\]\s*/, "");
}

export default function NewsletterDetail({
  newsletter,
  locale,
}: {
  newsletter: Newsletter;
  locale: string;
}) {
  return (
    <article className="newsletter-article" style={{ paddingTop: "80px" }}>
      <style>{`
        .newsletter-article {
          --text-primary: rgba(255, 255, 255, 0.92);
          --text-secondary: rgba(255, 255, 255, 0.68);
          --text-muted: rgba(255, 255, 255, 0.4);
          --text-link: rgba(255, 255, 255, 0.92);
          --border-subtle: rgba(255, 255, 255, 0.08);
          --serif: Georgia, "Times New Roman", Times, serif;
          --sans: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
        }
        .newsletter-article .drop-cap::first-letter {
          float: left;
          font-size: 3.4em;
          line-height: 0.8;
          padding-right: 0.12em;
          padding-top: 0.08em;
          font-weight: 700;
          color: var(--text-primary);
          font-family: var(--serif);
        }
        .newsletter-article a.article-link {
          color: var(--text-link);
          text-decoration: none;
          background-image: linear-gradient(var(--text-muted), var(--text-muted));
          background-size: 100% 1px;
          background-position: 0 100%;
          background-repeat: no-repeat;
          transition: background-size 0.25s ease;
        }
        .newsletter-article a.article-link:hover {
          background-image: linear-gradient(var(--text-primary), var(--text-primary));
        }
      `}</style>

      {/* Header — clean, minimal, left-aligned */}
      <header style={{ padding: "80px 0 0" }}>
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px" }}>
          <Link
            href="/newsletter"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 14,
              fontFamily: "var(--sans)",
              color: "var(--text-muted)",
              textDecoration: "none",
              letterSpacing: "0.02em",
              marginBottom: 48,
            }}
          >
            <span style={{ fontSize: 18, lineHeight: 1 }}>&larr;</span>
            All editions
          </Link>

          {/* Meta line */}
          <div
            style={{
              fontFamily: "var(--sans)",
              fontSize: 13,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
              marginBottom: 20,
            }}
          >
            <span>Edition {newsletter.edition}</span>
            <span style={{ margin: "0 10px", opacity: 0.4 }}>/</span>
            <span>{formatDate(newsletter.date)}</span>
            {newsletter.reading_time > 0 && (
              <>
                <span style={{ margin: "0 10px", opacity: 0.4 }}>/</span>
                <span>{newsletter.reading_time} min read</span>
              </>
            )}
          </div>

          {/* Title */}
          <h1
            style={{
              fontFamily: "var(--serif)",
              fontSize: "clamp(32px, 5vw, 46px)",
              fontWeight: 700,
              lineHeight: 1.18,
              letterSpacing: "-0.02em",
              color: "var(--text-primary)",
              margin: 0,
            }}
          >
            {newsletter.title}
          </h1>
        </div>
      </header>

      {/* Body */}
      <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 24px 120px" }}>

        {/* Executive Summary — the lede */}
        {newsletter.executiveSummary && (
          <div style={{ marginTop: 56 }}>
            <p
              className="drop-cap"
              style={{
                fontFamily: "var(--serif)",
                fontSize: 21,
                lineHeight: 1.58,
                color: "var(--text-secondary)",
                margin: 0,
              }}
            >
              {newsletter.executiveSummary}
            </p>
          </div>
        )}

        {/* Separator — single quiet line */}
        <div
          style={{
            margin: "56px 0",
            height: 1,
            background: "var(--border-subtle)",
          }}
        />

        {/* Top Stories */}
        {newsletter.top3Articles.length > 0 && (
          <section>
            {newsletter.top3Articles.map((article, index) => (
              <div
                key={index}
                style={{
                  marginBottom: index < newsletter.top3Articles.length - 1 ? 52 : 0,
                }}
              >
                {/* Source + Date */}
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 13,
                    color: "var(--text-muted)",
                    marginBottom: 10,
                    letterSpacing: "0.02em",
                  }}
                >
                  {article.source}
                  <span style={{ margin: "0 8px", opacity: 0.4 }}>&middot;</span>
                  {formatDate(article.publishedAt)}
                </div>

                {/* Headline */}
                <h2
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: "clamp(22px, 3.5vw, 28px)",
                    fontWeight: 700,
                    lineHeight: 1.3,
                    letterSpacing: "-0.01em",
                    color: "var(--text-primary)",
                    margin: "0 0 14px",
                  }}
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-link"
                  >
                    {cleanTitle(article.title)}
                  </a>
                </h2>

                {/* Takeaway */}
                {article.takeaway && (
                  <p
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 18,
                      lineHeight: 1.6,
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    {article.takeaway}
                  </p>
                )}
              </div>
            ))}
          </section>
        )}

        {/* Additional Sections */}
        {newsletter.sections.length > 0 && newsletter.sections.map((section, sIndex) => (
          <section key={sIndex}>
            {/* Section divider */}
            <div
              style={{
                margin: "60px 0 48px",
                height: 1,
                background: "var(--border-subtle)",
              }}
            />

            {/* Section title */}
            <h2
              style={{
                fontFamily: "var(--sans)",
                fontSize: 13,
                fontWeight: 600,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "var(--text-muted)",
                margin: "0 0 36px",
              }}
            >
              {section.title}
            </h2>

            {section.articles.map((article, aIndex) => (
              <div
                key={aIndex}
                style={{
                  marginBottom: aIndex < section.articles.length - 1 ? 36 : 0,
                }}
              >
                {/* Headline */}
                <h3
                  style={{
                    fontFamily: "var(--serif)",
                    fontSize: 20,
                    fontWeight: 700,
                    lineHeight: 1.35,
                    color: "var(--text-primary)",
                    margin: "0 0 6px",
                  }}
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="article-link"
                  >
                    {cleanTitle(article.title)}
                  </a>
                </h3>

                {/* Source + Date */}
                <div
                  style={{
                    fontFamily: "var(--sans)",
                    fontSize: 13,
                    color: "var(--text-muted)",
                    letterSpacing: "0.02em",
                    marginBottom: article.description ? 10 : 0,
                  }}
                >
                  {article.source}
                  <span style={{ margin: "0 8px", opacity: 0.4 }}>&middot;</span>
                  {formatDate(article.publishedAt)}
                </div>

                {/* Description */}
                {article.description && (
                  <p
                    style={{
                      fontFamily: "var(--serif)",
                      fontSize: 17,
                      lineHeight: 1.55,
                      color: "var(--text-secondary)",
                      margin: 0,
                    }}
                  >
                    {article.description}
                  </p>
                )}
              </div>
            ))}
          </section>
        ))}

        {/* End mark */}
        <div
          style={{
            marginTop: 72,
            marginBottom: 48,
            textAlign: "center",
            fontSize: 24,
            letterSpacing: "0.4em",
            color: "var(--text-muted)",
            opacity: 0.5,
          }}
        >
          &#9632;
        </div>

        {/* Footer — understated */}
        <footer style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: 14,
              color: "var(--text-muted)",
              lineHeight: 1.6,
              margin: "0 0 16px",
            }}
          >
            Curated by ScamAI — deepfake intelligence, security, and policy.
          </p>
          <Link
            href="/newsletter"
            style={{
              fontFamily: "var(--sans)",
              fontSize: 14,
              color: "var(--text-secondary)",
              textDecoration: "underline",
              textUnderlineOffset: "3px",
              textDecorationColor: "var(--text-muted)",
            }}
          >
            Browse all editions
          </Link>
        </footer>
      </div>
    </article>
  );
}
