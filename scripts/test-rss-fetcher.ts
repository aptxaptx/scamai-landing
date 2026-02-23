import { RSSFetcher } from '../src/lib/newsletter/rss-fetcher';

async function main() {
  const fetcher = new RSSFetcher();

  const deepfake = await fetcher.fetchFeed('https://www.google.com/alerts/feeds/07444114088075802697/6311992675371346504');
  console.log(`Deepfake feed: ${deepfake.length} articles`);
  deepfake.slice(0, 3).forEach(a => console.log(`  - ${a.title} | ${a.source}`));

  const age = await fetcher.fetchFeed('https://www.google.com/alerts/feeds/07444114088075802697/10048729549441548054');
  console.log(`\nAge Verification feed: ${age.length} articles`);
  age.slice(0, 3).forEach(a => console.log(`  - ${a.title} | ${a.source}`));

  const regulation = await fetcher.fetchFeed('https://www.google.com/alerts/feeds/07444114088075802697/6311992675371345189');
  console.log(`\nDeepfake Regulation feed: ${regulation.length} articles`);
  regulation.slice(0, 3).forEach(a => console.log(`  - ${a.title} | ${a.source}`));

  console.log(`\nTotal: ${deepfake.length + age.length + regulation.length} articles from 3 feeds`);
  process.exit(0);
}

main().catch(err => { console.error(err); process.exit(1); });
