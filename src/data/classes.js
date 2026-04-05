// ---------------------------------------------------------------------------
// SETUP INSTRUCTIONS
// ---------------------------------------------------------------------------
// 1. Go to https://dashboard.stripe.com and create a Payment Link for each class.
//    Replace each "YOUR_STRIPE_PAYMENT_LINK_*" below with the URL Stripe gives you.
//
// 2. Replace "YOUR_VENMO_USERNAME" with your Venmo handle (no @ sign needed in the URL).
//
// 3. Update prices below to match what you set in Stripe.
// ---------------------------------------------------------------------------

export const venmoUsername = 'Bojan456';

export const classes = [
  {
    id: 'intro-coding-concepts',
    title: 'Intro to Coding Concepts',
    subtitle: 'Think like a programmer — no experience required',
    level: 'Beginner',
    price: 40,
    duration: '45 min',
    format: '1-on-1 · Live Online',
    description:
      'Not sure if coding is for you? This session covers the core ideas behind programming — how computers think, how problems get broken down, and what writing code actually looks like. No prior experience needed.',
    topics: [
      'What is programming and why Python?',
      'Problem decomposition and logic',
      'Pseudocode and flowcharts',
      'Your first Python script walkthrough',
      'Roadmap for where to go next',
    ],
    stripeLink: 'https://book.stripe.com/5kQbJ29Sn2SA8x3frJd3i00',
    venmoNote: 'Intro to Coding - 1 session',
  },
  {
    id: 'python-fundamentals',
    title: 'Python Fundamentals',
    subtitle: 'Build a solid foundation in Python',
    level: 'Beginner',
    price: 50,
    duration: '60 min',
    format: '1-on-1 · Live Online',
    description:
      'A hands-on introduction to Python for those who are new to programming or switching from another language. We work through real exercises at your pace, building practical skills from the ground up.',
    topics: [
      'Variables, data types, and operators',
      'Control flow: if/else, for/while loops',
      'Functions and code organization',
      'Reading and writing files',
      'Intro to Python libraries',
    ],
    stripeLink: 'YOUR_STRIPE_PAYMENT_LINK_FUNDAMENTALS',
    venmoNote: 'Python Fundamentals - 1 session',
  },
  {
    id: 'python-data-analysis',
    title: 'Python for Data Analysis',
    subtitle: 'Work with real data using pandas & matplotlib',
    level: 'Intermediate',
    price: 60,
    duration: '60 min',
    format: '1-on-1 · Live Online',
    description:
      'Learn to load, clean, analyze, and visualize data using Python\'s most powerful scientific libraries. We work through real datasets so you leave each session with skills you can apply immediately.',
    topics: [
      'NumPy arrays and vectorized operations',
      'Pandas DataFrames: load, filter, transform',
      'Data cleaning and handling missing values',
      'Matplotlib and Seaborn visualizations',
      'Exploratory data analysis workflows',
    ],
    stripeLink: 'YOUR_STRIPE_PAYMENT_LINK_DATA',
    venmoNote: 'Python Data Analysis - 1 session',
  },
  {
    id: 'python-for-science',
    title: 'Python for Scientists & Researchers',
    subtitle: 'Applied Python tailored to your field',
    level: 'Intermediate',
    price: 70,
    duration: '75 min',
    format: '1-on-1 · Live Online',
    description:
      'Designed for scientists, engineers, and researchers who want to use Python in their specific domain. Sessions are customized to your work — from processing field data to automating repetitive tasks in earth science, environmental analysis, or other STEM fields.',
    topics: [
      'Domain-specific Python libraries',
      'Automating repetitive data tasks',
      'Processing and QA/QC of field or lab data',
      'Creating publication-quality figures',
      'Building reproducible research workflows',
    ],
    stripeLink: 'YOUR_STRIPE_PAYMENT_LINK_SCIENCE',
    venmoNote: 'Python for Scientists - 1 session',
  },
];
