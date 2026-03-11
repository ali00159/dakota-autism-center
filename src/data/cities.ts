export interface CityData {
  slug: string;
  cityName: string;
  stateAbbr: string;
  stateFull: string;
  coordinates: { lat: number; lng: number };
  nearbyAreas: string[];
  zipCodes: string[];
  distanceFromOffice: string;
  heroDescription: string;
  aboutParagraphs: string[];
  servicesAvailable: ('center-based' | 'in-home' | 'eidbi')[];
  faqs: { question: string; answer: string }[];
}

export const primaryLocation = {
  name: 'Dakota Autism Center',
  street: '331 2nd Ave S, Suite 436',
  city: 'Minneapolis',
  region: 'MN',
  postalCode: '55401',
  country: 'US',
  phoneDisplay: '(612) 284-5382',
  phoneE164: '+16122845382',
  faxDisplay: '(612) 284-5080',
  email: 'info@dakotaautismcenter.com',
  mapsQuery: '331 2nd Ave S Suite 436 Minneapolis MN 55401',
};

export const cities: CityData[] = [
  {
    slug: 'aba-therapy-in-bloomington-mn',
    cityName: 'Bloomington',
    stateAbbr: 'MN',
    stateFull: 'Minnesota',
    coordinates: { lat: 44.8408, lng: -93.2983 },
    nearbyAreas: ['Richfield', 'Edina', 'Burnsville', 'Eagan', 'Savage'],
    zipCodes: ['55420', '55425', '55431', '55435', '55437', '55438'],
    distanceFromOffice: '~12 miles south',
    heroDescription:
      'Dakota Autism Center brings evidence-based ABA therapy to families in Bloomington, MN — one of the largest and most diverse communities in the south metro. Whether your child needs center-based programming at our Minneapolis location or in-home support closer to your Bloomington neighborhood, our clinical team builds individualized plans that fit your family.',
    aboutParagraphs: [
      'Bloomington is home to over 90,000 residents and one of the most culturally diverse populations in the Twin Cities. Families here represent dozens of language backgrounds and cultural traditions — and that diversity shapes how we approach care. At Dakota Autism Center, we provide culturally responsive ABA therapy that respects your family\'s values, communication preferences, and daily routines.',
      'Many Bloomington families balance school schedules at districts like ISD 271 with therapy appointments, extracurricular activities, and work commutes along I-494 and I-35W. We work around your schedule — offering flexible session times at our Minneapolis center and in-home ABA options that bring support directly to your door in neighborhoods near Penn-American, East Bloomington, and the West Bloomington corridor.',
      'Whether your child is preparing for kindergarten readiness, working on social skills for school, or developing communication and daily living skills, our Board Certified Behavior Analysts (BCBAs) create treatment plans tailored to each child\'s strengths and goals. Bloomington families can also access EIDBI services through Dakota Autism Center for comprehensive early intervention.',
    ],
    servicesAvailable: ['center-based', 'in-home', 'eidbi'],
    faqs: [
      {
        question: 'Do you provide in-home ABA therapy in Bloomington?',
        answer:
          'Yes. Our Registered Behavior Technicians (RBTs) provide 1:1 in-home ABA therapy across Bloomington neighborhoods. Sessions take place in your home, focusing on skills like communication, social interaction, and daily routines in a familiar environment.',
      },
      {
        question: 'How far is your center from Bloomington?',
        answer:
          'Our Minneapolis center at 331 2nd Ave S is approximately 12 miles north of Bloomington — typically a 20–25 minute drive via I-35W. Many Bloomington families combine center visits with their regular commute into Minneapolis.',
      },
      {
        question: 'Do you accept insurance for Bloomington families?',
        answer:
          'Yes. We accept most major insurance plans including Blue Cross Blue Shield, UnitedHealthcare, Aetna, Cigna, and Medicaid. Our intake team verifies your benefits before services begin so there are no surprises.',
      },
      {
        question: 'What ages do you serve?',
        answer:
          'We primarily serve children ages 2–12, with our center-based program designed for preschool-age children. In-home ABA and EIDBI services are available for a wider age range. Contact us to discuss your child\'s specific needs.',
      },
      {
        question: 'Can my child attend school and ABA therapy at the same time?',
        answer:
          'Absolutely. Many Bloomington families coordinate part-time ABA therapy around their child\'s school schedule at Bloomington Public Schools. We offer flexible morning, afternoon, and full-day scheduling options.',
      },
    ],
  },
  {
    slug: 'aba-therapy-in-hopkins-mn',
    cityName: 'Hopkins',
    stateAbbr: 'MN',
    stateFull: 'Minnesota',
    coordinates: { lat: 44.9252, lng: -93.4083 },
    nearbyAreas: ['St. Louis Park', 'Minnetonka', 'Golden Valley', 'Edina', 'Eden Prairie'],
    zipCodes: ['55305', '55343'],
    distanceFromOffice: '~10 miles west',
    heroDescription:
      'Families in Hopkins, MN deserve autism therapy that fits seamlessly into their lives. Dakota Autism Center provides ABA therapy and EIDBI services for children in the Hopkins area — with options for structured center-based programming at our Minneapolis location or personalized in-home sessions right in your Hopkins neighborhood.',
    aboutParagraphs: [
      'Hopkins is a close-knit community of roughly 19,000 residents sitting at the crossroads of several major west-metro suburbs. Known for its walkable downtown, Raspberry Festival tradition, and strong sense of community, Hopkins offers families a small-town feel with easy access to Twin Cities resources. Dakota Autism Center is proud to extend our services to this welcoming community.',
      'Hopkins Public Schools (ISD 270) serves a diverse student body, and many families here are navigating special education plans, IEPs, and therapy coordination simultaneously. Our BCBAs work collaboratively with school teams when appropriate, ensuring that the skills your child develops in ABA therapy carry over to the classroom and playground. We understand the transition points Hopkins families face — from early childhood programs into elementary school and beyond.',
      'With convenient access via Highway 7 and Excelsior Boulevard, getting to our Minneapolis center is straightforward for Hopkins families. For those who prefer home-based support, our in-home ABA team serves Hopkins and surrounding neighborhoods, bringing therapy to the environment where your child is most comfortable.',
    ],
    servicesAvailable: ['center-based', 'in-home', 'eidbi'],
    faqs: [
      {
        question: 'Is Hopkins within your in-home ABA service area?',
        answer:
          'Yes. Hopkins is well within our in-home service area. Our RBTs travel to Hopkins homes regularly and provide consistent, scheduled sessions focused on your child\'s individualized goals.',
      },
      {
        question: 'How do I get to your center from Hopkins?',
        answer:
          'Our Minneapolis center is about 10 miles east of Hopkins. Most families take Highway 7 east to I-394, which leads directly into downtown Minneapolis — roughly a 15–20 minute drive depending on traffic.',
      },
      {
        question: 'Do you coordinate with Hopkins Public Schools?',
        answer:
          'When families request it, our BCBAs can collaborate with school teams to support skill generalization. While we are not a school-based provider, we can align therapy goals with your child\'s IEP or educational plan to reinforce consistency across settings.',
      },
      {
        question: 'What is EIDBI and is it available for Hopkins families?',
        answer:
          'EIDBI (Early Intensive Developmental and Behavioral Intervention) is a Minnesota Medical Assistance benefit that covers comprehensive early intervention services. Yes, Hopkins families enrolled in Medical Assistance can access EIDBI through Dakota Autism Center.',
      },
      {
        question: 'How quickly can my child start ABA therapy?',
        answer:
          'After you submit an intake form, our team typically responds within one business day. From there, the timeline depends on insurance authorization and scheduling — but most families begin services within 2–4 weeks of completing intake.',
      },
    ],
  },
  {
    slug: 'aba-therapy-in-eden-prairie-mn',
    cityName: 'Eden Prairie',
    stateAbbr: 'MN',
    stateFull: 'Minnesota',
    coordinates: { lat: 44.8547, lng: -93.4708 },
    nearbyAreas: ['Minnetonka', 'Chanhassen', 'Bloomington', 'Hopkins', 'Shakopee'],
    zipCodes: ['55344', '55346', '55347'],
    distanceFromOffice: '~16 miles southwest',
    heroDescription:
      'Eden Prairie families looking for high-quality ABA therapy have a trusted partner in Dakota Autism Center. We provide center-based ABA therapy, in-home behavioral support, and EIDBI services designed to meet the unique needs of children across the Eden Prairie community — from early learners to school-age children building independence.',
    aboutParagraphs: [
      'Ranked consistently among the best places to live in the United States, Eden Prairie is a thriving southwest-metro community of over 64,000 residents. Families here benefit from excellent parks, a nationally recognized school district (ISD 272), and a strong network of family-oriented services. Dakota Autism Center is honored to support Eden Prairie families navigating autism and developmental services.',
      'Eden Prairie\'s growth means that many families are new to the area — and new to the process of finding autism services in Minnesota. Our intake team walks every family through the steps, from insurance verification to clinical assessment, making the process as smooth as possible. Whether you\'re coming from the Town Center area, near Bryant Lake, or the southern neighborhoods along Highway 212, we make accessing ABA therapy straightforward.',
      'For Eden Prairie families, we offer both center-based ABA therapy at our Minneapolis location (accessible via I-494 and I-35W) and in-home services delivered by trained RBTs. Many families appreciate the flexibility to combine both settings — structured learning at the center paired with reinforcement of skills at home. Our EIDBI program is also available to qualifying families in Eden Prairie.',
    ],
    servicesAvailable: ['center-based', 'in-home', 'eidbi'],
    faqs: [
      {
        question: 'Do you offer in-home ABA therapy in Eden Prairie?',
        answer:
          'Yes. Our in-home ABA team serves Eden Prairie families throughout the city. Sessions are conducted in your home by a trained RBT under BCBA supervision, targeting your child\'s specific developmental goals.',
      },
      {
        question: 'What is the commute from Eden Prairie to your center?',
        answer:
          'Our Minneapolis center is approximately 16 miles northeast of Eden Prairie. Most families take I-494 to I-35W or Highway 62, which is about a 25–30 minute drive. Some families opt for in-home services to avoid the commute entirely.',
      },
      {
        question: 'Can you help us navigate the insurance process?',
        answer:
          'Absolutely. Our intake coordinator handles insurance verification, prior authorization, and benefits explanation before services begin. We work with most major plans and Minnesota Medical Assistance.',
      },
      {
        question: 'Is your therapy culturally responsive?',
        answer:
          'Yes. Dakota Autism Center was founded on the principle that effective ABA therapy must be culturally responsive. We adapt our approach to align with your family\'s language, values, and cultural practices — which is especially important in Eden Prairie\'s increasingly diverse community.',
      },
      {
        question: 'What outcomes can we expect from ABA therapy?',
        answer:
          'Outcomes depend on each child\'s baseline and goals, but families commonly see improvements in communication, social interaction, daily living skills, emotional regulation, and school readiness. Our BCBAs track measurable progress and adjust treatment plans regularly.',
      },
    ],
  },
  {
    slug: 'aba-therapy-in-edina-mn',
    cityName: 'Edina',
    stateAbbr: 'MN',
    stateFull: 'Minnesota',
    coordinates: { lat: 44.8897, lng: -93.3499 },
    nearbyAreas: ['Richfield', 'Bloomington', 'St. Louis Park', 'Hopkins', 'Minneapolis'],
    zipCodes: ['55410', '55416', '55424', '55435', '55436', '55439'],
    distanceFromOffice: '~8 miles southwest',
    heroDescription:
      'Dakota Autism Center serves families in Edina, MN with personalized ABA therapy and EIDBI services. Edina\'s central location in the southwest metro makes it easy to access our Minneapolis center for structured programming — and our in-home ABA team brings therapy directly to your Edina neighborhood for children who thrive in familiar surroundings.',
    aboutParagraphs: [
      'Edina is a community that invests deeply in education and family wellbeing. With a nationally ranked school district (ISD 273), expansive park systems, and a strong network of family services, Edina families have high expectations for the care their children receive. At Dakota Autism Center, we meet those expectations with rigorous, evidence-based ABA therapy guided by experienced BCBAs who are passionate about your child\'s progress.',
      'Many Edina families come to us during critical transition periods — a child entering preschool, starting kindergarten, or moving into elementary school. Our team specializes in building skills that support these transitions: social communication, emotional regulation, following routines, and engaging with peers. We also support families dealing with challenging behaviors at home by teaching replacement strategies that work in real-world settings.',
      'Edina\'s proximity to our Minneapolis center (about 8 miles via France Avenue or I-35W) makes center-based ABA accessible for families who want a structured clinical environment. For families who prefer in-home services, our therapists serve neighborhoods across Edina — from Country Club and Indian Hills to Grandview and South Harriet Park. EIDBI services are also available to eligible Edina residents.',
    ],
    servicesAvailable: ['center-based', 'in-home', 'eidbi'],
    faqs: [
      {
        question: 'How close is Dakota Autism Center to Edina?',
        answer:
          'Our center at 331 2nd Ave S in Minneapolis is approximately 8 miles from central Edina. Families typically drive via France Avenue or I-35W, reaching us in about 15–20 minutes.',
      },
      {
        question: 'Do you provide services in Edina homes?',
        answer:
          'Yes. Our in-home ABA program is fully available in Edina. A Registered Behavior Technician comes to your home for scheduled sessions, working on goals designed by your child\'s supervising BCBA.',
      },
      {
        question: 'What makes your ABA approach different?',
        answer:
          'Dakota Autism Center emphasizes culturally responsive, family-centered care. We don\'t apply a one-size-fits-all model — instead, we build therapy plans around your child\'s strengths, your family\'s values, and the environments where your child spends the most time.',
      },
      {
        question: 'Do you work with preschool-age children from Edina?',
        answer:
          'Yes. Our center-based program is specifically designed for preschool-age children (typically ages 2–6) in a structured, classroom-like setting that promotes social skills, communication, and school readiness.',
      },
      {
        question: 'Can both parents be involved in the therapy process?',
        answer:
          'Absolutely. Parent involvement is a core part of our model. We provide parent coaching, regular progress updates, and collaborative goal-setting so both parents can support skill-building at home.',
      },
    ],
  },
  {
    slug: 'aba-therapy-in-st-paul-mn',
    cityName: 'St. Paul',
    stateAbbr: 'MN',
    stateFull: 'Minnesota',
    coordinates: { lat: 44.9537, lng: -93.0900 },
    nearbyAreas: ['Minneapolis', 'Maplewood', 'Roseville', 'West St. Paul', 'Woodbury'],
    zipCodes: ['55101', '55102', '55103', '55104', '55105', '55106', '55107', '55108', '55116', '55117', '55130'],
    distanceFromOffice: '~10 miles east',
    heroDescription:
      'St. Paul families searching for quality ABA therapy can count on Dakota Autism Center. As Minnesota\'s capital city and one of the most diverse communities in the state, St. Paul deserves autism services that are clinically excellent and culturally informed. We offer center-based, in-home ABA, and EIDBI options designed for St. Paul children and their families.',
    aboutParagraphs: [
      'St. Paul is a city of neighborhoods — over 300,000 residents spanning communities like Frogtown, the East Side, Highland Park, Midway, and Payne-Phalen. Each neighborhood has its own character, and many are home to significant immigrant and refugee populations. Dakota Autism Center was built to serve families exactly like those in St. Paul: culturally diverse, resilient, and looking for autism support that respects their background and language.',
      'Navigating autism services in St. Paul can be complex. Between Saint Paul Public Schools (SPPS) special education programs, county-based services, and private therapy providers, families often feel overwhelmed. Our intake team simplifies the process — helping with insurance verification, explaining the difference between ABA and EIDBI, and connecting families to the right level of care. We also support Somali, Oromo, Spanish-speaking, and other multilingual families with culturally adapted approaches.',
      'St. Paul families can access our center-based ABA program at our Minneapolis location (about 10 miles west via I-94) or choose in-home ABA therapy delivered in your St. Paul home. In-home sessions are especially popular with East Side and North End families who prefer therapy in a setting their child already knows. Our EIDBI program is available to St. Paul residents enrolled in Minnesota Medical Assistance.',
    ],
    servicesAvailable: ['center-based', 'in-home', 'eidbi'],
    faqs: [
      {
        question: 'Do you serve all St. Paul neighborhoods?',
        answer:
          'Yes. Our in-home ABA team serves families across St. Paul — including the East Side, West Side, North End, Frogtown, Midway, Highland Park, Mac-Groveland, and surrounding neighborhoods.',
      },
      {
        question: 'How do I get to your center from St. Paul?',
        answer:
          'Our Minneapolis center is about 10 miles west of downtown St. Paul. Most families take I-94 westbound, arriving in approximately 15–20 minutes depending on traffic.',
      },
      {
        question: 'Do you have staff who speak languages other than English?',
        answer:
          'We are committed to culturally responsive care and work to match families with providers who understand their cultural context. While staff language availability varies, we actively recruit multilingual team members and use professional interpretation services when needed.',
      },
      {
        question: 'Can I use Medical Assistance (Medicaid) for ABA therapy?',
        answer:
          'Yes. We accept Minnesota Medical Assistance. St. Paul families with MA coverage can access both ABA therapy and EIDBI services through Dakota Autism Center. Our team handles the authorization process on your behalf.',
      },
      {
        question: 'What if my child already receives services through the school district?',
        answer:
          'Many children receive both school-based special education and private ABA therapy. These services complement each other — school addresses educational goals while ABA focuses on behavioral and developmental targets. Our BCBAs can coordinate with your child\'s school team if you choose.',
      },
    ],
  },
  {
    slug: 'aba-therapy-in-minnetonka-mn',
    cityName: 'Minnetonka',
    stateAbbr: 'MN',
    stateFull: 'Minnesota',
    coordinates: { lat: 44.9211, lng: -93.4687 },
    nearbyAreas: ['Hopkins', 'Eden Prairie', 'Plymouth', 'Wayzata', 'St. Louis Park'],
    zipCodes: ['55305', '55343', '55345'],
    distanceFromOffice: '~13 miles west',
    heroDescription:
      'Dakota Autism Center provides trusted ABA therapy for families in Minnetonka, MN. From structured center-based programming to flexible in-home sessions, we design therapy around your child\'s needs and your family\'s schedule. Minnetonka families also have access to our EIDBI program for comprehensive early intervention services.',
    aboutParagraphs: [
      'Minnetonka is a well-established west-metro community of over 53,000 residents, known for its excellent schools, lake-centered recreation, and family-friendly neighborhoods. The Minnetonka Public School District (ISD 276) is recognized statewide for academic excellence, and many families here are proactive about seeking supplemental support for children with developmental needs — including ABA therapy for autism.',
      'Finding the right ABA provider is a significant decision for Minnetonka families. Dakota Autism Center differentiates itself through individualized care, family involvement, and cultural responsiveness. Our BCBAs don\'t just design clinical programs — they partner with parents to set meaningful goals, track progress with measurable data, and adjust strategies as your child grows. Therapy should evolve alongside your child, and that\'s exactly how we operate.',
      'Minnetonka\'s location along I-494 and Highway 7 provides easy access to our Minneapolis center for families who prefer center-based ABA. For families closer to Lake Minnetonka, Williston, or the Ridgedale area, our in-home ABA team brings therapy directly to you. We also serve families in nearby Wayzata, Deephaven, and Excelsior through our in-home program.',
    ],
    servicesAvailable: ['center-based', 'in-home', 'eidbi'],
    faqs: [
      {
        question: 'Is in-home ABA therapy available in Minnetonka?',
        answer:
          'Yes. Minnetonka is within our in-home service area. Our RBTs provide consistent, scheduled sessions in your home, working on individualized goals under the supervision of a Board Certified Behavior Analyst.',
      },
      {
        question: 'What is the drive time from Minnetonka to your center?',
        answer:
          'Our Minneapolis center is about 13 miles east of Minnetonka. Families typically take I-394 or Highway 7 east, arriving in approximately 20–25 minutes.',
      },
      {
        question: 'Do you offer part-time ABA therapy options?',
        answer:
          'Yes. We offer both part-time and full-time scheduling options. Many Minnetonka families choose part-time ABA to complement their child\'s preschool or school schedule. Your child\'s BCBA recommends the appropriate intensity based on clinical assessment.',
      },
      {
        question: 'How is progress measured in ABA therapy?',
        answer:
          'We use ongoing data collection during every session to track your child\'s progress on specific skill targets. Your BCBA reviews this data regularly, provides progress reports, and adjusts the treatment plan as goals are met or new priorities emerge.',
      },
      {
        question: 'Do you serve families in nearby Wayzata and Excelsior?',
        answer:
          'Yes. Our in-home ABA program extends to Wayzata, Excelsior, Deephaven, and other Lake Minnetonka communities. Contact us to confirm service availability in your specific area.',
      },
    ],
  },
  {
    slug: 'aba-therapy-in-plymouth-mn',
    cityName: 'Plymouth',
    stateAbbr: 'MN',
    stateFull: 'Minnesota',
    coordinates: { lat: 45.0105, lng: -93.4555 },
    nearbyAreas: ['Maple Grove', 'Minnetonka', 'Golden Valley', 'New Hope', 'Wayzata'],
    zipCodes: ['55441', '55442', '55446', '55447'],
    distanceFromOffice: '~14 miles northwest',
    heroDescription:
      'Plymouth, MN families seeking ABA therapy have a dedicated partner in Dakota Autism Center. As the seventh-largest city in Minnesota, Plymouth is home to thousands of families — and a growing number are looking for effective, accessible autism services. We provide center-based ABA, in-home therapy, and EIDBI services tailored to each child.',
    aboutParagraphs: [
      'Plymouth is one of the largest cities in the Twin Cities metro, with over 81,000 residents and a reputation for strong schools, safe neighborhoods, and extensive park and trail systems. The Wayzata School District (ISD 284) and Robbinsdale Area Schools (ISD 281) serve Plymouth students, and families here are accustomed to seeking out the best opportunities for their children — including specialized therapy when needed.',
      'The growing diversity of Plymouth\'s population means more families are discovering autism services for the first time. Dakota Autism Center provides a welcoming entry point: our intake process is straightforward, we handle insurance verification, and our clinicians take the time to explain what ABA therapy involves before your child begins. For families who are new to autism services or transitioning from another provider, we make the process transparent and stress-free.',
      'Plymouth families can choose center-based ABA at our Minneapolis location (about 14 miles southeast via I-394) or in-home ABA therapy delivered in your Plymouth home. In-home sessions work well for families in the Northwest Plymouth, Parkers Lake, and Medicine Lake neighborhoods who want to minimize commute time. We also provide EIDBI services to qualifying Plymouth residents through Minnesota Medical Assistance.',
    ],
    servicesAvailable: ['center-based', 'in-home', 'eidbi'],
    faqs: [
      {
        question: 'Do you provide ABA therapy at homes in Plymouth?',
        answer:
          'Yes. Our in-home ABA team regularly serves Plymouth families. We send trained RBTs to your home for scheduled therapy sessions, supervised by a BCBA who designs and oversees your child\'s individualized program.',
      },
      {
        question: 'How far is your center from Plymouth?',
        answer:
          'Our Minneapolis center is approximately 14 miles southeast of Plymouth. Most families take I-394 east, arriving in about 20–25 minutes. For families who prefer not to commute, our in-home program is a convenient alternative.',
      },
      {
        question: 'What insurance plans do you accept?',
        answer:
          'We accept most major insurance plans including Blue Cross Blue Shield, UnitedHealthcare, Aetna, Cigna, and Minnesota Medical Assistance (Medicaid). Our intake team verifies your specific benefits before services begin.',
      },
      {
        question: 'At what age should my child start ABA therapy?',
        answer:
          'Research shows that earlier intervention leads to better outcomes. While we serve children across a range of ages, beginning ABA therapy as early as age 2–3 can be particularly impactful for building foundational communication, social, and adaptive skills.',
      },
      {
        question: 'Can I tour your center before enrolling?',
        answer:
          'Yes. We welcome families to visit our Minneapolis center to see the environment, meet team members, and learn about our programs. Contact us to schedule a visit at a time that works for your family.',
      },
    ],
  },
];
