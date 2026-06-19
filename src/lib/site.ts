// Single source of truth for business info (NAP), services, and SEO content.

export const SITE_URL = "https://renewed-mindset-therapy.vercel.app";

export const BUSINESS = {
  name: "Renewed Mindset Therapy",
  legalName: "Renewed Mindset Therapy, PLLC",
  clinician: "Tiffany Mylett",
  credentials: "LCSW-S",
  title: "Tiffany Mylett, LCSW-S",
  role: "EMDR Certified Therapist & Clinical Supervisor",
  tagline: "Shift from surviving to thriving.",
  phone: "(682) 422-9140",
  phoneHref: "tel:+16824229140",
  fax: "(682) 628-9707",
  email: "Tiffany@RenewedMindset.org",
  emailHref: "mailto:Tiffany@RenewedMindset.org",
  portal: "https://renewedmindsettherapy.clientsecure.me/sign-in",
  address: {
    street: "751 E Debbie Ln Ste. 105",
    city: "Mansfield",
    state: "TX",
    zip: "76063",
    full: "751 E Debbie Ln Ste. 105, Mansfield, TX 76063",
  },
  geo: { lat: 32.5621, lng: -97.1205 },
  hours: [
    { day: "Tuesday", time: "9:00 AM – 3:00 PM" },
    { day: "Wednesday", time: "9:00 AM – 3:00 PM" },
    { day: "Thursday", time: "9:00 AM – 3:00 PM" },
    { day: "Friday", time: "9:00 AM – 12:00 PM" },
  ],
  // For schema.org openingHoursSpecification
  hoursSpec: [
    { days: ["Tuesday", "Wednesday", "Thursday"], opens: "09:00", closes: "15:00" },
    { days: ["Friday"], opens: "09:00", closes: "12:00" },
  ],
  serviceAreas: [
    "Mansfield",
    "Arlington",
    "Grand Prairie",
    "Burleson",
    "Midlothian",
    "Kennedale",
    "Fort Worth",
    "the Dallas–Fort Worth metroplex",
  ],
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  navName: string;
  image: string;
  // SEO
  metaTitle: string;
  metaDescription: string;
  // Hero
  eyebrow: string;
  headline: string;
  intro: string;
  // Content sections
  forYou: string[];
  body: { heading: string; paragraphs: string[] }[];
  bullets?: { heading: string; items: string[] };
  fee?: { label: string; price: string }[];
  featured: boolean;
};

export const SERVICES: Service[] = [
  {
    slug: "emdr-therapy",
    name: "EMDR Therapy in Mansfield, TX",
    shortName: "EMDR Therapy",
    navName: "EMDR Therapy",
    image: "/images/emdr.jpg",
    metaTitle: "EMDR Therapy in Mansfield, TX | Renewed Mindset Therapy",
    metaDescription:
      "Certified EMDR therapy in Mansfield, TX with Tiffany Mylett, LCSW-S. An evidence-based approach to heal trauma, anxiety, panic, and PTSD. Book a consultation today.",
    eyebrow: "Evidence-Based Trauma Treatment",
    headline: "EMDR Therapy that helps your brain finish healing",
    intro:
      "Eye Movement Desensitization and Reprocessing (EMDR) is one of the most researched, effective treatments for trauma. As an EMDR Certified Therapist™ in Mansfield, Tiffany helps you reprocess painful experiences so they lose their grip — without having to relive every detail.",
    forYou: [
      "Trauma & PTSD",
      "Anxiety & panic",
      "Depression & low self-esteem",
      "Grief & loss",
      "Phobias & performance anxiety",
      "Disturbing memories that won't quiet down",
    ],
    body: [
      {
        heading: "What is EMDR?",
        paragraphs: [
          "EMDR is an evidence-based therapy supported by more than 26 randomized controlled studies. The VA/DoD Clinical Practice Guideline names it one of only three trauma-focused psychotherapies with the strongest evidence from clinical trials.",
          "It works on a simple premise drawn from the Adaptive Information Processing model: when something overwhelming happens, the memory can get \"stuck\" — frozen with the original images, beliefs, emotions, and body sensations. EMDR helps your brain reprocess that memory so it can finally file it away as something that happened, rather than something that keeps happening.",
        ],
      },
      {
        heading: "How does it actually work?",
        paragraphs: [
          "During reprocessing, you briefly bring up a target memory while following a form of bilateral stimulation — typically guided eye movements, tapping, or tones. This dual attention lets the brain do what it does naturally during REM sleep: link the disturbing material to more adaptive information already stored in your mind.",
          "Over time, the memory becomes less vivid and less distressing. The negative belief it created (\"I'm not safe,\" \"It was my fault,\" \"I'm not enough\") softens, and a healthier, truer belief takes root.",
        ],
      },
    ],
    bullets: {
      heading: "The 8 phases of EMDR",
      items: [
        "History-taking & treatment planning",
        "Preparation & resourcing",
        "Assessment of the target memory",
        "Desensitization of the negative event",
        "Installation of the positive belief",
        "Body scan",
        "Closure",
        "Reevaluation",
      ],
    },
    fee: [
      { label: "Initial Evaluation (90 min)", price: "$225" },
      { label: "EMDR Reprocessing Session (90 min)", price: "$215" },
    ],
    featured: true,
  },
  {
    slug: "trauma-therapy",
    name: "Trauma Therapy in Mansfield, TX",
    shortName: "Trauma Therapy",
    navName: "Trauma & PTSD",
    image: "/images/calm5.jpg",
    metaTitle: "Trauma & PTSD Therapy in Mansfield, TX | Renewed Mindset Therapy",
    metaDescription:
      "Trauma-informed therapy in Mansfield, TX for PTSD, abuse, accidents, and overwhelming life events. Work with EMDR Certified therapist Tiffany Mylett, LCSW-S.",
    eyebrow: "Trauma-Informed Care",
    headline: "Heal the root, not just the symptoms",
    intro:
      "Trauma isn't only the event — it's what stays behind in your nervous system afterward. Renewed Mindset Therapy offers specialized, trauma-informed care in Mansfield that addresses both the symptoms you feel today and the root cause underneath them.",
    forYou: [
      "Post-Traumatic Stress (PTSD)",
      "Childhood & developmental trauma",
      "Abuse & neglect",
      "Accidents & medical trauma",
      "First responder & military trauma",
      "Single-incident or complex trauma",
    ],
    body: [
      {
        heading: "A safe place to put it down",
        paragraphs: [
          "Tiffany's first priority is always safety — emotional and physical. Before any deep processing begins, you'll build skills and resources together so you feel grounded and in control. Healing trauma should never mean being re-traumatized.",
          "As a Certified Christian Trauma Care Provider, Tiffany can integrate faith into your care when that's meaningful to you — and she warmly respects clients of every spiritual background.",
        ],
      },
      {
        heading: "Why understanding your nervous system matters",
        paragraphs: [
          "Many trauma responses — hypervigilance, numbness, panic, the inability to \"just relax\" — make complete sense once you understand the neurophysiology behind them. Tiffany helps you understand what your body is doing and why, so you can stop blaming yourself and start working with your nervous system instead of against it.",
          "Using EMDR alongside somatic and HeartMath® biofeedback approaches, she helps you discharge what's stuck and restore a felt sense of calm.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "anxiety-therapy",
    name: "Anxiety & Panic Therapy in Mansfield, TX",
    shortName: "Anxiety Therapy",
    navName: "Anxiety & Panic",
    image: "/images/calm1.jpg",
    metaTitle: "Anxiety & Panic Disorder Therapy in Mansfield, TX | Renewed Mindset",
    metaDescription:
      "Therapy for anxiety, panic attacks, and chronic stress in Mansfield, TX. Tiffany Mylett, LCSW-S blends EMDR, CBT, and HeartMath® biofeedback to help you find calm.",
    eyebrow: "Calm Your Nervous System",
    headline: "Quiet the alarm that won't switch off",
    intro:
      "When anxiety runs the show, even ordinary days feel exhausting. Renewed Mindset Therapy helps adults and teens in Mansfield calm the body's alarm system, understand what's driving it, and build real, lasting relief.",
    forYou: [
      "Generalized anxiety",
      "Panic attacks & panic disorder",
      "Social anxiety",
      "Chronic stress & burnout",
      "Health & performance anxiety",
      "Racing thoughts & overthinking",
    ],
    body: [
      {
        heading: "More than coping skills",
        paragraphs: [
          "Coping skills matter — and you'll learn plenty of them. But Tiffany also helps you reach the root of the anxiety so relief doesn't depend on white-knuckling every situation. Often, today's anxiety is connected to older experiences your brain never fully processed; EMDR can resolve those at the source.",
          "Sessions combine practical tools (CBT, Rational Emotive Behavior Therapy, motivational interviewing) with deeper reprocessing work, tailored to what you actually need.",
        ],
      },
      {
        heading: "Training your body toward calm",
        paragraphs: [
          "As a HeartMath® Certified Practitioner, Tiffany uses heart-rate-variability and coherence biofeedback to help you regulate your nervous system in real time. You'll learn to shift out of fight-or-flight on purpose — a skill you keep for life.",
        ],
      },
    ],
    featured: true,
  },
  {
    slug: "individual-therapy",
    name: "Individual Therapy in Mansfield, TX",
    shortName: "Individual Therapy",
    navName: "Individual Therapy",
    image: "/images/individual.jpg",
    metaTitle: "Individual Therapy & Counseling in Mansfield, TX | Renewed Mindset",
    metaDescription:
      "Personalized individual therapy for teens and adults in Mansfield, TX. Feel safe, secure, and seen with Tiffany Mylett, LCSW-S. In-person & Texas telehealth.",
    eyebrow: "One-on-One Counseling",
    headline: "Therapy that helps you feel safe, secure & seen",
    intro:
      "Individual therapy is a collaborative space built around you. Whether you're navigating a hard season or working toward lasting change, Tiffany meets teens (16+) and adults with warmth, expertise, and a plan tailored to your goals.",
    forYou: [
      "Depression & low mood",
      "Self-esteem & self-worth",
      "Life transitions & stress",
      "Grief & loss",
      "Spirituality & faith concerns",
      "Coping skills & emotional regulation",
    ],
    body: [
      {
        heading: "A plan that's truly yours",
        paragraphs: [
          "No two people walk in with the same story, so no two treatment plans look alike. Tiffany draws from a range of evidence-based modalities — EMDR, CBT, Rational Emotive Behavior Therapy, somatic and interpersonal approaches — and weaves them together around your unique situation and goals.",
          "Her aim is refreshingly direct: to help you get what you came for and, ultimately, to put herself out of business in your life.",
        ],
      },
      {
        heading: "Faith-integrated when you want it",
        paragraphs: [
          "As a Certified Christian Trauma Care Provider, Tiffany can incorporate faith into your sessions if that's important to you. She also deeply respects clients of all spiritual backgrounds and adapts her approach to honor yours.",
        ],
      },
    ],
    fee: [
      { label: "Initial Evaluation (90 min)", price: "$225" },
      { label: "Ongoing Session (45–52 min)", price: "$140" },
    ],
    featured: true,
  },
  {
    slug: "christian-counseling",
    name: "Faith-Integrated Christian Counseling in Mansfield, TX",
    shortName: "Christian Counseling",
    navName: "Faith-Based Counseling",
    image: "/images/about.jpg",
    metaTitle: "Christian Counseling & Faith-Based Therapy in Mansfield, TX",
    metaDescription:
      "Faith-integrated Christian counseling in Mansfield, TX with Tiffany Mylett, LCSW-S, a Certified Christian Trauma Care Provider. Clinically sound, spiritually grounded.",
    eyebrow: "Faith & Clinical Care Together",
    headline: "Where clinical excellence meets your faith",
    intro:
      "For clients who want their faith woven into the healing process, Tiffany offers Christian counseling that is both clinically rigorous and spiritually grounded — never one at the expense of the other.",
    forYou: [
      "Trauma & spiritual struggles",
      "Anxiety & faith questions",
      "Grief and lament",
      "Identity & worth in faith",
      "Forgiveness & relationships",
      "Integrating belief with healing",
    ],
    body: [
      {
        heading: "Trained to hold both",
        paragraphs: [
          "As a Certified Christian Trauma Care Provider and EMDR Certified Therapist™, Tiffany is equipped to honor your faith while delivering proven, evidence-based treatment. Scripture and prayer can be part of your sessions when you want them to be.",
          "And if you don't share that faith, that's completely welcome too — these sessions are by invitation, never imposition. Tiffany respects clients of all spiritual backgrounds.",
        ],
      },
    ],
    featured: false,
  },
  {
    slug: "emdr-consultation",
    name: "EMDR Consultation for Therapists",
    shortName: "EMDR Consultation",
    navName: "EMDR Consultation",
    image: "/images/consultation.jpg",
    metaTitle: "EMDR Consultation for Therapists | EMDRIA Certification Path",
    metaDescription:
      "EMDR consultation with Tiffany Mylett, an EMDRIA Approved Consultant in Training™. For clinicians pursuing EMDR Certification. Individual & group consultation available.",
    eyebrow: "For Fellow Clinicians",
    headline: "EMDR consultation toward your certification",
    intro:
      "Already completed your EMDRIA-approved basic training? Tiffany offers consultation as an EMDRIA Approved Consultant in Training™ to support licensed clinicians on the path to becoming a Certified EMDR Therapist.",
    forYou: [
      "Newly-trained EMDR clinicians",
      "Therapists pursuing EMDRIA Certification",
      "LCSWs, LPCs & LMFTs",
      "Clinicians wanting case support",
      "Group & individual formats",
      "Building confidence with the protocol",
    ],
    body: [
      {
        heading: "Consultation that meets EMDRIA requirements",
        paragraphs: [
          "Tiffany provides consultation under the oversight of Susan Reed, LCSW-S, MSW, an EMDRIA Approved Trainer. Hours completed with Tiffany count toward the consultation requirement for EMDRIA Certification.",
          "Certification through EMDRIA requires full licensure (LCSW, LPC, or LMFT), at least two years of clinical experience, a minimum of 20 consultation hours, 50+ EMDR sessions across 25+ clients, continuing education, and recommendation letters. Tiffany will help you navigate every step.",
        ],
      },
    ],
    fee: [
      { label: "Group Consultation (10 hours, paid upfront)", price: "$250" },
      { label: "Individual Consultation (per hour, monthly)", price: "$60" },
    ],
    featured: false,
  },
];

export const FAQS = [
  {
    q: "Do you accept insurance?",
    a: "Renewed Mindset Therapy is an out-of-network provider and does not contract directly with insurance plans. However, Tiffany provides superbills you can submit for out-of-network reimbursement, and partners with Mentaya to help you understand your benefits. Going out-of-network avoids the visit limits, required diagnoses, and confidentiality trade-offs that come with insurance.",
  },
  {
    q: "What are your fees?",
    a: "Initial Evaluation (90 min): $225. Standard therapy session (45–52 min): $140. Extended EMDR session (90 min): $215. Couples/Marital therapy (90 min): $215. A no-show or late cancellation is charged the full appointment fee.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "Major credit cards, cash, checks, Care Credit, and HSA/FSA accounts are all accepted.",
  },
  {
    q: "Do you offer online / virtual therapy?",
    a: "Yes. Teletherapy is available for Texas residents through a HIPAA-compliant platform connected to the electronic medical record. In-person sessions are offered at the Mansfield office.",
  },
  {
    q: "What ages do you work with?",
    a: "Tiffany works with clients ages 16 and up. Clients under 18 whose parents are divorced require consent from both parents, or from the custodial parent with legal authority.",
  },
  {
    q: "Do you prescribe medication?",
    a: "No. As a Licensed Clinical Social Worker, Tiffany evaluates and treats through psychotherapy and will refer you to a physician or psychiatric provider if medication may be helpful.",
  },
  {
    q: "How often will we meet, and for how long?",
    a: "Therapy typically begins weekly and moves to biweekly as you make progress. The overall length depends on your goals — the aim is always to help you reach them and move forward, not to keep you in therapy indefinitely.",
  },
  {
    q: "Why is there a charge for late cancellations?",
    a: "Because Tiffany keeps a waitlist, a late cancellation means another client misses a chance to be seen. The policy keeps everyone accountable so openings can be filled.",
  },
];

export const CREDENTIALS = [
  "Licensed Clinical Social Worker & Supervisor (LCSW-S), Texas",
  "EMDR Certified Therapist™ (EMDRIA)",
  "EMDRIA Approved Consultant in Training™",
  "HeartMath® Certified Practitioner (HRV & HRC Biofeedback)",
  "Certified Christian Trauma Care Provider",
  "Board Approved Clinical Supervisor",
];

export const MODALITIES = [
  "EMDR (Eye Movement Desensitization & Reprocessing)",
  "Cognitive Behavioral Therapy (CBT)",
  "Rational Emotive Behavior Therapy (REBT)",
  "Somatic Experiencing",
  "Interpersonal Psychotherapy",
  "Motivational Interviewing",
  "HeartMath® Biofeedback",
  "Christian / Faith-Integrated Counseling",
];

export const AFFILIATIONS = [
  "EMDR International Association (EMDRIA)",
  "DFW West EMDRIA Regional Network",
  "JPSH EMDR Volunteer Project for Pandemic Response",
];

export const TOOLKIT = [
  {
    title: "Set Boundaries, Find Peace",
    author: "Nedra Glover Tawwab, LCSW",
    note: "A warm, practical introduction to setting healthy boundaries with family, friends, colleagues — and yourself.",
  },
  {
    title: "The Set Boundaries Workbook",
    author: "Nedra Glover Tawwab, LCSW",
    note: "Hands-on exercises to build boundary awareness and practice it across real-life situations.",
  },
  {
    title: "Your Brain's Not Broken",
    author: "Tamara Rosier, PhD",
    note: "Strategies for navigating emotions, motivation, and time with an ADHD brain.",
  },
  {
    title: "Tapping In",
    author: "Laurel Parnell, PhD",
    note: "A step-by-step guide to activating your healing resources through bilateral stimulation — great for EMDR clients.",
  },
];
