export const blogCategories = [
  'Parent Guidance',
  'Evidence-Based Practice',
  'School Collaboration',
  'Funding Navigation',
  'Early Intervention',
  'Myth Busting',
] as const;

export type BlogCategory = (typeof blogCategories)[number];

export interface BlogFAQ {
  question: string;
  answer: string;
}

export interface BlogSource {
  label: string;
  url: string;
}

export interface ContentSection {
  id: string;
  heading: string;
  body: string;
}

export interface BlogPost {
  title: string;
  slug: string;
  excerpt: string;
  category: BlogCategory;
  readTime: string;
  publishedAt: string;
  dateModified: string;
  seoKeyword: string;
  seoTitle: string;
  seoDescription: string;
  locationIntent?: string;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  author: {
    name: string;
    type: 'Organization' | 'Person';
    url?: string;
  };
  keyHighlights: string[];
  sections: ContentSection[];
  faqs: BlogFAQ[];
  sources: BlogSource[];
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}

export const blogPosts: BlogPost[] = [
  {
    title: 'What Is EIDBI in Minnesota? A Complete Guide for Parents',
    slug: 'what-is-eidbi-minnesota-parent-guide',
    excerpt:
      'Learn how Minnesota\'s EIDBI benefit works, who qualifies, what services it covers, and how to get started — explained in plain language for families.',
    category: 'Funding Navigation',
    readTime: '10 min read',
    publishedAt: '2026-03-10',
    dateModified: '2026-03-10',
    seoKeyword: 'EIDBI Minnesota',
    seoTitle: 'What Is EIDBI in Minnesota? A Complete Guide for Parents',
    seoDescription:
      'Understand Minnesota\'s EIDBI benefit: eligibility, covered services, the CMDE process, EIDBI vs ABA, and how to start. Written by Dakota Autism Center.',
    locationIntent: 'Minnesota',
    image: {
      src: '/images/blog/eidbi-minnesota-guide.webp',
      alt: 'Mother and young child learning together in a warm, supportive home setting',
      width: 2400,
      height: 1600,
    },
    author: {
      name: 'Dakota Autism Center',
      type: 'Organization',
      url: 'https://dakotaautismcenter.com',
    },
    keyHighlights: [
      'EIDBI is a Minnesota Medicaid benefit — not private insurance — covering ABA and developmental therapy for children under 21 with autism.',
      'Eligibility requires an ASD diagnosis, enrollment in Medical Assistance (MA), MinnesotaCare, TEFRA, or PMAP, and a CMDE evaluation showing medical necessity.',
      'Services include 1:1 therapy, family training, coordinated care across home, center, school, and community settings.',
      'A CMDE (Comprehensive Multi-Disciplinary Evaluation) must be completed before services can begin.',
      'Minnesota now requires all EIDBI agencies to obtain provisional licensure by May 31, 2026.',
    ],
    sections: [
      {
        id: 'what-is-eidbi',
        heading: 'What Is EIDBI?',
        body: `<p>EIDBI stands for <strong>Early Intensive Developmental and Behavioral Intervention</strong>. It is a benefit administered by the <a href="https://mn.gov/dhs/people-we-serve/children-and-families/services/eidbi/" target="_blank" rel="noopener noreferrer">Minnesota Department of Human Services (DHS)</a> that funds medically necessary therapy for children and young adults under age 21 who have Autism Spectrum Disorder (ASD) or a related condition.</p>
<p>Unlike private insurance coverage for ABA therapy, EIDBI is a <strong>state Medicaid benefit</strong>. It is available to families enrolled in Minnesota Health Care Programs — including Medical Assistance (MA), MinnesotaCare, TEFRA, and Prepaid Medical Assistance Program (PMAP) plans.</p>
<p>The goal of EIDBI is to improve developmental outcomes by providing intensive, evidence-based interventions that address communication, social skills, adaptive behavior, and emotional regulation. Critically, the benefit also funds <strong>family education and caregiver training</strong>, recognizing that progress in therapy must extend into the home and community to be meaningful.</p>
<p>Because EIDBI is a Minnesota-specific program, families who move to or from Minnesota should be aware that equivalent benefits may not exist in other states, and coverage rules differ significantly from private insurance ABA plans.</p>`,
      },
      {
        id: 'who-is-eligible',
        heading: 'Who Is Eligible for EIDBI in Minnesota?',
        body: `<p>To qualify for EIDBI services in Minnesota, a child or young adult must meet all of the following criteria:</p>
<ul>
<li><strong>Diagnosis:</strong> The individual has a diagnosis of Autism Spectrum Disorder (ASD) or a related condition as defined by DHS.</li>
<li><strong>Age:</strong> The individual is under 21 years old.</li>
<li><strong>Insurance:</strong> The individual is enrolled in a qualifying Minnesota Health Care Program — Medical Assistance (MA), MinnesotaCare, TEFRA, or a PMAP plan.</li>
<li><strong>Medical necessity:</strong> A Comprehensive Multi-Disciplinary Evaluation (CMDE) must demonstrate that EIDBI services are medically necessary.</li>
</ul>
<p>Families who have <strong>private insurance only</strong> (such as employer-sponsored plans) do not qualify for EIDBI. However, many families have both private insurance and Medical Assistance, and it is possible to coordinate coverage between the two. If you are unsure whether your child qualifies, the best first step is to contact an EIDBI provider like <a href="/contact-us">Dakota Autism Center</a> for a free eligibility check.</p>
<p>It is worth noting that a medical diagnosis of ASD alone is not enough to start services — the CMDE evaluation is a required clinical step that determines treatment scope and authorization.</p>`,
      },
      {
        id: 'what-services-does-eidbi-cover',
        heading: 'What Services Does EIDBI Cover?',
        body: `<p>EIDBI covers a range of evidence-based therapeutic and support services. The specific services authorized for each child depend on the findings of their CMDE and their Individual Treatment Plan (ITP). Common EIDBI services include:</p>
<ul>
<li><strong>Comprehensive Multi-Disciplinary Evaluation (CMDE):</strong> The initial assessment that evaluates your child's developmental needs across multiple domains and establishes medical necessity.</li>
<li><strong>Individual Treatment Plan (ITP):</strong> A personalized plan developed by a qualified clinician that outlines therapy goals, service intensity, and the treatment approach.</li>
<li><strong>Adaptive Behavior Treatment (ABA Therapy):</strong> Evidence-based 1:1 or group therapy focused on building communication, social, adaptive, and behavioral skills. This is the core service most families receive.</li>
<li><strong>Family and Caregiver Training:</strong> Structured coaching for parents and caregivers to reinforce strategies at home, during mealtimes, outings, and daily routines.</li>
<li><strong>Observation and Direction:</strong> Clinical supervisors monitor therapy sessions, track progress, ensure treatment fidelity, and adjust programs in real time.</li>
<li><strong>Coordinated Care:</strong> Collaboration between your child's EIDBI team, school, medical providers, and other support systems to maintain consistent goals.</li>
</ul>
<p>Services can be delivered in multiple settings — including your home, a center-based clinic, your child's school, community environments, and via telehealth when appropriate. The flexibility of EIDBI settings is one of the benefit's strongest features, allowing therapy to happen where skills are most naturally practiced.</p>`,
      },
      {
        id: 'eidbi-vs-aba',
        heading: 'EIDBI vs ABA Therapy: What Is the Difference?',
        body: `<p>This is one of the most common questions families ask, and the answer often surprises people: <strong>EIDBI and ABA are not competing alternatives</strong>. They exist on different levels.</p>
<p><strong>ABA (Applied Behavior Analysis)</strong> is a <em>therapy methodology</em> — a specific, evidence-based approach to teaching skills and reducing challenging behaviors. It is the most widely researched intervention for autism and is used by providers across the United States.</p>
<p><strong>EIDBI</strong> is a <em>funding mechanism</em> — a Minnesota state Medicaid benefit that pays for ABA therapy and other developmental interventions. Think of EIDBI as the vehicle that delivers ABA services to families who qualify through Minnesota Health Care Programs.</p>
<p>Here is a simple way to understand the relationship:</p>
<ul>
<li><strong>ABA therapy funded by private insurance</strong> = Your employer or marketplace plan covers ABA under its behavioral health benefits.</li>
<li><strong>ABA therapy funded by EIDBI</strong> = Minnesota Medicaid covers ABA (and related services) through the EIDBI benefit for qualifying families.</li>
</ul>
<p>The therapy your child receives can look identical in both cases — the difference is <em>who is paying for it</em> and the specific documentation and authorization process required. Some families qualify for both private insurance and EIDBI, and in those situations, benefits can be coordinated to maximize coverage.</p>
<p>At <a href="/eidbi">Dakota Autism Center</a>, we provide the same high-quality ABA therapy regardless of how it is funded. Our clinical team manages all authorization and billing so families can focus on their child's progress rather than paperwork.</p>`,
      },
      {
        id: 'how-to-get-started',
        heading: 'How to Get Started with EIDBI Services',
        body: `<p>Starting EIDBI services involves several steps, but the process is more straightforward than most families expect — especially when your provider handles the administrative work. Here is what the typical journey looks like:</p>
<ol>
<li><strong>Contact an EIDBI provider:</strong> Reach out to a Minnesota-enrolled EIDBI agency like <a href="/contact-us">Dakota Autism Center</a>. Our intake team will verify your child's eligibility, confirm insurance enrollment, and explain the process.</li>
<li><strong>Gather documentation:</strong> You will need your child's ASD diagnosis (from a psychologist, developmental pediatrician, or equivalent), Medical Assistance enrollment information, and any relevant medical or school records.</li>
<li><strong>Schedule the CMDE:</strong> A qualified professional conducts the Comprehensive Multi-Disciplinary Evaluation. This assessment reviews your child's developmental strengths and challenges and determines whether EIDBI services are medically necessary.</li>
<li><strong>Develop the Individual Treatment Plan (ITP):</strong> Based on the CMDE results, your clinical team creates a personalized ITP with specific, measurable goals for therapy.</li>
<li><strong>DHS authorization:</strong> The CMDE and ITP are submitted to DHS for review and authorization. Your provider manages this step and follows up to prevent delays.</li>
<li><strong>Begin therapy:</strong> Once authorized, therapy begins according to the schedule and settings outlined in the ITP — whether that is at home, in a center, at school, or in community environments.</li>
</ol>
<p>The timeline from first contact to therapy start is typically <strong>several weeks</strong>, depending on documentation readiness and DHS review periods. At Dakota Autism Center, we proactively gather documentation and follow up with DHS to keep the process moving as quickly as possible.</p>`,
      },
      {
        id: 'what-to-expect-cmde',
        heading: 'What to Expect During a CMDE Evaluation',
        body: `<p>The CMDE (Comprehensive Multi-Disciplinary Evaluation) is the clinical cornerstone of the EIDBI process. It is required before any EIDBI services can be authorized, and understanding what it involves can help families feel more prepared.</p>
<p>During a CMDE, a <strong>qualified professional</strong> (such as a licensed psychologist, developmental pediatrician, or clinical specialist designated by DHS guidelines) evaluates your child across multiple developmental domains:</p>
<ul>
<li><strong>Social communication and interaction</strong> — How your child communicates, responds to social cues, and engages with peers and adults.</li>
<li><strong>Adaptive behavior and self-care</strong> — Daily living skills like dressing, eating, hygiene, and navigating routines.</li>
<li><strong>Behavioral health</strong> — Patterns of challenging behavior, emotional regulation, and responses to change or sensory input.</li>
<li><strong>Cognitive and play skills</strong> — Problem-solving, imaginative play, and learning readiness.</li>
</ul>
<p>The evaluation typically includes direct observation of your child, standardized assessment tools, a review of existing records and reports, and detailed input from you as the parent or caregiver. <strong>Your perspective is a critical part of the CMDE</strong> — no one knows your child better than you, and the evaluation team relies on your insights about daily challenges, strengths, and priorities.</p>
<p>The CMDE results in a comprehensive report that outlines your child's needs and forms the clinical basis for the Individual Treatment Plan. It is also the document DHS reviews to authorize services, so accuracy and thoroughness matter.</p>
<p>At Dakota Autism Center, our clinical team conducts CMDEs as part of our intake process, and we guide families through every step — from scheduling to understanding results.</p>`,
      },
      {
        id: 'dakota-eidbi-services',
        heading: 'How Dakota Autism Center Delivers EIDBI Services',
        body: `<p>Dakota Autism Center is an enrolled EIDBI provider in Minnesota, offering the full range of services covered under the benefit. What sets our approach apart is how we deliver these services — with an emphasis on warmth, relationship-based care, and naturalistic teaching.</p>
<p>Here is what families can expect when they choose Dakota Autism Center for EIDBI:</p>
<ul>
<li><strong>Personalized goal-setting:</strong> We pair EIDBI requirements with individualized goals shaped by your child's sensory profile, communication style, and your family's priorities — not a one-size-fits-all curriculum.</li>
<li><strong>Naturalistic teaching:</strong> Skills are taught in meaningful, real-world contexts — during play, mealtimes, outings, and social interactions — so learning transfers naturally beyond therapy sessions.</li>
<li><strong>Deep family partnership:</strong> Our clinicians build practical routines with caregivers so progress continues at home. We view parents as the experts on their children and collaborate accordingly.</li>
<li><strong>Cross-setting coordination:</strong> We actively coordinate with schools, medical providers, and other support systems to keep goals aligned across every environment where your child learns.</li>
<li><strong>Full administrative support:</strong> We handle CMDE scheduling, DHS authorization, documentation, and billing — so you can focus on your child instead of paperwork.</li>
</ul>
<p>Whether your child receives services at our <a href="/center-based-aba-therapy">center</a>, <a href="/in-home-aba-therapy">at home</a>, or across multiple settings, the quality of care and clinical oversight remains the same.</p>
<p>Ready to learn if your child qualifies? <a href="/contact-us"><strong>Contact us today</strong></a> or call <a href="tel:612-284-5382"><strong>(612) 284-5382</strong></a> for a free eligibility check.</p>`,
      },
    ],
    faqs: [
      {
        question: 'Is EIDBI the same as ABA therapy?',
        answer:
          'Not exactly. EIDBI is a Minnesota Medicaid funding benefit, while ABA is a therapy methodology. EIDBI funds ABA therapy (among other developmental services) for qualifying families. The therapy itself can look identical whether funded by EIDBI or private insurance — the difference is the payment source and authorization process.',
      },
      {
        question: 'How long does it take to start EIDBI services?',
        answer:
          'The timeline from first contact to therapy start is typically several weeks. This includes verifying eligibility, completing the CMDE evaluation, developing the ITP, and obtaining DHS authorization. At Dakota Autism Center, we work proactively to minimize delays at every step.',
      },
      {
        question: 'Can my child receive EIDBI and private insurance ABA at the same time?',
        answer:
          'In some cases, yes. Families who have both Medical Assistance and private insurance may be able to coordinate benefits. The specifics depend on your insurance plans and your child\'s needs. Our team can help you understand how to maximize your coverage.',
      },
      {
        question: 'What if my child is not yet diagnosed with autism?',
        answer:
          'An ASD diagnosis is required for EIDBI eligibility. If your child has not yet been diagnosed, we can point you toward diagnostic resources in Minnesota. Once a diagnosis is confirmed, our team can begin the EIDBI intake process immediately.',
      },
      {
        question: 'Does EIDBI cover telehealth therapy sessions?',
        answer:
          'Yes. EIDBI services can be delivered via telehealth when clinically appropriate. The specific telehealth options available depend on your child\'s ITP and the type of service being provided. Your clinical team will determine the best mix of in-person and telehealth sessions.',
      },
    ],
    sources: [
      {
        label: 'Minnesota DHS — EIDBI Overview',
        url: 'https://mn.gov/dhs/people-we-serve/children-and-families/services/eidbi/',
      },
      {
        label: 'Minnesota DHS — EIDBI Eligibility and Covered Services',
        url: 'https://www.dhs.state.mn.us/main/idcplg?IdcService=GET_DYNAMIC_CONVERSION&RevisionSelectionMethod=LatestReleased&dDocName=dhs-296057',
      },
      {
        label: 'CDC — Autism Spectrum Disorder Treatment and Intervention',
        url: 'https://www.cdc.gov/autism/treatment/index.html',
      },
      {
        label: 'National Institute of Mental Health — Autism Spectrum Disorder',
        url: 'https://www.nimh.nih.gov/health/topics/autism-spectrum-disorders-asd',
      },
    ],
  },
];
