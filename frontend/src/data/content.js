export const projects = [
  {
    title: "Bookify",
    type: "Full-Stack Platform · Thesis Project",
    description: "Book recommendation and online reading platform. Content-based recommendations using TF-IDF and cosine similarity, with cold-start handling for new users and a full review system.",
    stack: ["Django REST Framework", "React", "PostgreSQL", "TF-IDF / Cosine Similarity"],
    link: "https://github.com/Sujana-deve/bookify-book-recommendation",
    visual: "bookify"
  },
  {
    title: "FashionHub",
    type: "E-commerce Platform",
    description: "Django e-commerce app with cart, checkout, product reviews, authentication, password reset, order history, and eSewa sandbox payment integration.",
    stack: ["Django", "PostgreSQL", "eSewa Payments", "Auth & Reviews"],
    link: "https://github.com/Sujana-deve/Shopiing-app",
    visual: "fashionhub"
  },
  {
    title: "Lead Scoring Automation",
    type: "Marketing Automation",
    description: "Django dashboard built around time-decay lead scoring — exponential decay, 30-day half-life, compound bonuses, CSV uploads, filtering, and a results interface.",
    stack: ["Python", "Django", "Pandas"],
    link: "https://github.com/Sujana-deve/automation-tool",
    visual: "leadscoring"
  },
  {
    title: "QuickBites",
    type: "Full-Stack Web App",
    description: "Food ordering platform where users browse items, customize cart selections, and follow a straightforward checkout flow.",
    stack: ["React", "Django", "Tailwind CSS"],
    link: "https://github.com/Sujana-deve/foodApp",
    visual: "quickbites"
  },
  {
    title: "Bulk SMS Campaign Engine",
    type: "Backend Automation",
    description: "SMS application to schedule messages, organize contact groups, and track delivery logs for automated messaging flows.",
    stack: ["Django", "Python", "Database Models"],
    link: "https://github.com/Sujana-deve/sms-campaign-engine",
    visual: "smscampaign"
  },
  {
    title: "Blogging App",
    type: "Content Platform",
    description: "Blogging engine where users create accounts, write posts with markdown formatting, and comment on articles.",
    stack: ["Django ORM", "Auth Middleware", "Python"],
    link: "https://github.com/Sujana-deve/blogging-app",
    visual: "blogapp"
  }
];

export const certifications = [
  {
    title: "Python (Basic)",
    issuer: "HackerRank",
    date: "2025",
    blurb: "Certified on core Python fundamentals: data structures, control flow, and functions.",
    image: "/certs/python-basic.jpg",
    verifyUrl: ""
  },
  {
    title: "Software Engineer",
    issuer: "HackerRank",
    date: "2025",
    blurb: "Certified across problem-solving, data structures, and software engineering fundamentals.",
    image: "/certs/software-engineer.jpg",
    verifyUrl: ""
  },
  {
    title: "Tech Quiz Coordinator",
    issuer: "College Tech Expo",
    date: "2025",
    blurb: "Organized and ran the technical quiz event at the college tech expo.",
    image: "/certs/quiz-coordinator.jpg",
    verifyUrl: ""
  }
];

export const skills = {
  Frontend: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
  Backend: ["Python", "Django", "RESTful APIs", "Database Design", "User Authentication"],
  "Tools & Workflow": ["Git", "GitHub", "VS Code", "npm"],
  "Emerging Tech": ["AI Integration Basics", "Prompt Design", "Workflow Helpers"]
};