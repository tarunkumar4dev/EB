export type BlogPost = {
    slug: string;
    title: string;
    excerpt: string;
    cover?: string;
    author: string;
    date: string;      // ISO
    tags: string[];
    content: string;   // markdown-ish/plain for now
  };
  
  export const BLOG_POSTS: BlogPost[] = [
    {
      slug: "cbse-class-10-strategy",
      title: "Class 10 Board Prep: 30-Day Action Plan",
      excerpt:
        "A crisp, no-nonsense roadmap for the final month—daily targets, mock tests, and revision loops.",
      cover: "",
      author: "Team Education Beast",
      date: "2025-09-28",
      tags: ["CBSE", "Class 10", "Strategy"],
      content: `
  ## Why this plan works
  - Tight feedback loops
  - Mixed practice
  - Realistic mock timing
  
  ### Daily Template
  1. 90-min core topic
  2. 45-min mixed practice
  3. 30-min past paper
  4. 15-min wrong answers review
  
  > Tip: Track errors in a small notebook. Patterns appear fast.
  `,
    },
    {
      slug: "class-12-accounts-ledger-cheatsheet",
      title: "Class 12 Accounts: Ledger & Journal Cheat Sheet",
      excerpt:
        "Quick rules, common pitfalls, and a 15-minute warm-up before each Accounts session.",
      author: "Team Education Beast",
      date: "2025-09-22",
      tags: ["Class 12", "Accounts"],
      content: `
  ### Golden Rules
  - Debit the receiver, Credit the giver
  - Debit what comes in, Credit what goes out
  
  ### Rapid Drill (15 min)
  - 5 journal entries
  - 2 ledgers
  - 1 trial balance
  `,
    },
  ];
  