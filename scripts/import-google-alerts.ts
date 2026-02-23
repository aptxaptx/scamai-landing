import { insertNewsletter, insertArticles, getAllNewsletters } from '../src/lib/db/newsletters';

async function main() {
  // Get next edition number
  const existing = await getAllNewsletters();
  const maxEdition = existing.reduce((max, n) => Math.max(max, n.edition), 0);
  const edition = maxEdition + 1;

  const top3Articles = [
    {
      title: "'Seeing Is Believing' Is Dead: AI Deepfakes Have Broken Visual Evidence",
      url: "https://www.forbes.com/sites/larsdaniel/2026/02/23/seeing-is-believing-is-dead-ai-deepfakes-have-broken-visual-evidence/",
      source: "Forbes",
      publishedAt: "2026-02-22T23:12:19Z",
      takeaway: "Forbes examines how deepfakes are undermining the admissibility of visual evidence in courts, with Louisiana among the first states to pass legislation.",
    },
    {
      title: "AI in Cybersecurity: 7 Urgent Threats From Phishing to Deepfakes",
      url: "https://techgenyz.com/ai-in-cybersecurity-phishing-deepfakes-scams/",
      source: "Techgenyz",
      publishedAt: "2026-02-22T19:00:54Z",
      takeaway: "Generative AI enables highly targeted phishing, deepfakes, and voice-cloning scams at scale — while defensive AI tools remain limited.",
    },
    {
      title: "China's AI War Machine Exposed: 9,000 PLA RFPs Reveal Space And Undersea Ambitions",
      url: "https://orbitaltoday.com/2026/02/22/chinas-ai-war-machine-exposed-9000-pla-rfps-reveal-space-and-undersea-ambitions/",
      source: "Orbital Today",
      publishedAt: "2026-02-22T17:15:55Z",
      takeaway: "Study reveals Chinese military procurement requests for an intelligent deepfake system capable of building multilingual synthetic media.",
    },
  ];

  const sections = [
    {
      title: "Policy & Regulation",
      articles: [
        {
          title: "Becker introduces bill targeting harmful AI deepfakes",
          url: "https://www.smdailyjournal.com/news/local/becker-introduces-bill-targeting-harmful-ai-deepfakes/article_38fff81e-b8bc-4e72-a220-177e0679463f.html",
          source: "SM Daily Journal",
          publishedAt: "2026-02-23T12:23:12Z",
          description: "New California bill aims to address growing concerns over deepfakes used to commit fraud, spread misinformation, and damage reputations.",
        },
        {
          title: "Hong Kong privacy watchdog joins 60 overseas authorities warning of AI-generated intimate images",
          url: "https://hongkongfp.com/2026/02/23/hong-kong-privacy-watchdog-joins-60-overseas-authorities-warning-of-ai-generated-intimate-images/",
          source: "Hong Kong Free Press",
          publishedAt: "2026-02-23T11:35:50Z",
          description: "Over 60 privacy authorities worldwide issue joint warning against AI-generated deepfake intimate imagery.",
        },
        {
          title: "Penalties proposed for sexually manipulated media",
          url: "https://www.staradvertiser.com/2026/02/23/hawaii-news/penalties-proposed-for-sexually-manipulated-media/",
          source: "Honolulu Star-Advertiser",
          publishedAt: "2026-02-23T10:07:46Z",
          description: "Hawaii SB 1156 proposes criminal penalties for creating sexually explicit deepfake images.",
        },
        {
          title: "Korea privacy watchdog joins global push to curb deepfake harms",
          url: "https://biz.chosun.com/en/en-it/2026/02/23/QYWYNFEWWNDEVHGIDZCWEDERP4/",
          source: "Chosun Biz",
          publishedAt: "2026-02-23T08:55:30Z",
          description: "South Korea joins international coalition pushing to curb the creation and spread of deepfake sexual imagery of minors.",
        },
        {
          title: "Seedance 2.0 Postpones Global Launch Over Copyright Issues",
          url: "https://www.chosun.com/english/industry-en/2026/02/23/LA2HLEHUURAVZORZ7YAQS4FBHY/",
          source: "Chosun",
          publishedAt: "2026-02-22T15:46:05Z",
          description: "Chinese AI video tool faces backlash from Hollywood studios over deepfake controversies, postponing global launch.",
        },
      ],
    },
    {
      title: "Security Breaches",
      articles: [
        {
          title: "After Angel Nuzhat, now Sarah Baloch: How the viral MMS scam funnel traps Indian users",
          url: "https://zeenews.india.com/india//after-angel-nuzhat-now-sarah-baloch-viral-mms-scam-funnel-india-2026-3019975.html",
          source: "Zee News",
          publishedAt: "2026-02-23T07:04:06Z",
          description: "Latest operation in a global deepfake nudity scam funnel targets Indian users through viral MMS campaigns.",
        },
        {
          title: "Identity theft in the age of AI",
          url: "https://mybroadband.co.za/news/industrynews/630352-identity-theft-in-the-age-of-ai.html",
          source: "MyBroadband",
          publishedAt: "2026-02-23T07:01:24Z",
          description: "Digital deepfake impersonation emerges as a major new threat to online identity security.",
        },
        {
          title: "Deepfakes Target NutriScore Co-Developer Serge Hergberg",
          url: "https://www.medscape.com/viewarticle/deepfakes-target-nutriscore-co-developer-serge-hergberg-2026a10005ik",
          source: "Medscape",
          publishedAt: "2026-02-23T07:32:49Z",
          description: "Deepfake videos misuse a prominent nutritionist's name, image, and voice to spread false health claims.",
        },
        {
          title: "Technical report points to fraud in party leader's video",
          url: "https://www.mixvale.com.br/2026/02/22/technical-report-points-to-fraud-in-party-leaders-video-and-raises-tension-over-digital-security-en/",
          source: "Mix Vale",
          publishedAt: "2026-02-22T09:24:29Z",
          description: "Technical forensic report identifies deepfake manipulation in a political leader's video, raising digital security concerns.",
        },
      ],
    },
    {
      title: "Industry & Analysis",
      articles: [
        {
          title: "The thin realities of deepfakes",
          url: "https://www.yoursun.com/charlotte/news/the-thin-realities-of-deepfakes/article_fcff79f9-b5b9-41c7-a9eb-1a1b719fa2e5.html",
          source: "Port Charlotte Sun",
          publishedAt: "2026-02-23T08:12:18Z",
          description: "Analysis of how political deepfakes are eroding public trust in visual media.",
        },
        {
          title: "Deepfakes raise profound ethical questions in science",
          url: "https://geneticliteracyproject.org/2026/02/23/deepfakes-raise-profound-ethical-questions-in-science/",
          source: "Genetic Literacy Project",
          publishedAt: "2026-02-23T05:15:17Z",
          description: "Beyond abuse and misinformation, deepfakes now pose ethical challenges in scientific research and publishing.",
        },
        {
          title: "The Battle for Truth in the Age of Deepfakes",
          url: "https://slguardian.org/the-battle-for-truth-in-the-age-of-deepfakes/",
          source: "Sri Lanka Guardian",
          publishedAt: "2026-02-22T21:32:51Z",
          description: "Multimodal AI systems capable of generating convincing video, audio, and imagery are challenging truth verification.",
        },
        {
          title: "Intelligence officer issues severe warning after Elon Musk's Grok advice",
          url: "https://www.ladbible.com/news/technology/elon-musk-ai-platform-medical-information-severe-warning-702740-20260222",
          source: "LADbible",
          publishedAt: "2026-02-22T13:27:33Z",
          description: "Government demands action from X platform over Grok-generated deepfakes and misinformation.",
        },
      ],
    },
  ];

  const content = {
    title: "Deepfake Weekly: Global Crackdown on AI-Generated Harm",
    edition,
    date: "February 23, 2026",
    readingTime: 6,
    summary: "Legislators worldwide push new deepfake laws, Forbes declares visual evidence dead, and China's military deepfake ambitions exposed.",
    executiveSummary: "This week saw a surge in legislative action against deepfakes worldwide. From California to Hong Kong and South Korea, governments are racing to criminalize AI-generated intimate imagery and fraud. Forbes declared that visual evidence can no longer be trusted in court, while China's military procurement documents revealed plans for multilingual deepfake systems. Meanwhile, AI-powered scam funnels continue to exploit victims across India.",
    top3Articles,
    sections,
    totalArticles: 16,
  };

  const id = await insertNewsletter({
    edition,
    title: content.title,
    date: content.date,
    readingTime: content.readingTime,
    summary: content.summary,
    content,
  });

  await insertArticles(id, sections);

  console.log(`Newsletter created successfully!`);
  console.log(`  ID: ${id}`);
  console.log(`  Edition: ${edition}`);
  console.log(`  Title: ${content.title}`);
  console.log(`  Articles: ${content.totalArticles}`);

  process.exit(0);
}

main().catch((err) => {
  console.error("Failed to create newsletter:", err);
  process.exit(1);
});
