export const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/projects", label: "Projects" },
  { to: "/industries", label: "Industries" },
  { to: "/health-safety", label: "Safety" },
  { to: "/blog", label: "Blog" },
  { to: "/careers", label: "Careers" },
  { to: "/contact", label: "Contact" },
];

export const company = {
  name: "Frost Tulip Construction",
  shortName: "Frost Tulip",
  tagline: "Building Strong Foundations for the Future",
  address: "14 Glenara Avenue, Eastlea, Harare, Zimbabwe",
  phone: "+263 77 123 4567",
  phoneAlt: "+263 242 123 456",
  email: "hello@frosttulip.co.zw",
  projectsEmail: "projects@frosttulip.co.zw",
  whatsapp: "263771234567",
};

export const pageHeroSlides = [
  {
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1600&q=80",
    title: "Tower crane and active construction site",
  },
  {
    src: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1600&q=80",
    title: "Commercial shell construction in progress",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=80",
    title: "Construction team reviewing plans on site",
  },
  {
    src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=80",
    title: "Finished building exterior and structural detail",
  },
];

export const services = [
  {
    id: "residential",
    icon: "home",
    title: "Residential Construction",
    short:
      "Custom homes, cluster developments and renovations built to exacting standards for families and investors.",
    banner: "Modern Zimbabwean family home exterior",
    desc: "From new family homes to high-end cluster developments, we manage every phase of residential building with craftsmanship that lasts generations.",
    items: [
      "New home construction",
      "Renovations and extensions",
      "Roofing and trusses",
      "Boundary walls and gates",
      "Interior finishing",
    ],
    benefits: [
      "Fixed-scope pricing with no surprises",
      "Dedicated site foreman per project",
      "12-month workmanship warranty",
    ],
  },
  {
    id: "commercial",
    icon: "building",
    title: "Commercial Construction",
    short:
      "Offices, warehouses and retail complexes engineered for performance, compliance and longevity.",
    banner: "Commercial office block under construction",
    desc: "We deliver commercial assets that perform: office parks, logistics warehouses, retail centres and industrial structures, including structural steel fabrication and erection.",
    items: [
      "Office buildings",
      "Warehouses and logistics",
      "Retail complexes",
      "Industrial structures",
      "Steel fabrication",
    ],
    benefits: [
      "Programme-driven delivery",
      "Tenant-ready handover",
      "Full statutory compliance",
    ],
  },
  {
    id: "civil",
    icon: "civil",
    title: "Civil Works",
    short:
      "Roads, drainage, foundations and earthworks: the durable infrastructure beneath every development.",
    banner: "Road and drainage civil works site",
    desc: "Our civil division builds the backbone of developments through bulk earthworks, reinforced concrete, stormwater drainage, internal roads and engineered foundations.",
    items: [
      "Drainage systems",
      "Reinforced concrete works",
      "Roadworks and paving",
      "Foundations and piling",
      "Bulk earthworks",
    ],
    benefits: [
      "Survey and setting-out included",
      "Materials testing on site",
      "Geotech-informed design",
    ],
  },
  {
    id: "maintenance",
    icon: "wrench",
    title: "Maintenance and Renovations",
    short:
      "Keeping buildings safe, watertight and valuable through expert upkeep and refurbishment.",
    banner: "Building maintenance and waterproofing works",
    desc: "Protect and extend the life of your asset with planned and reactive maintenance, waterproofing, structural repairs and full refurbishments.",
    items: [
      "Painting and decorating",
      "Waterproofing",
      "Structural repairs",
      "Planned building maintenance",
    ],
    benefits: [
      "Rapid call-out response",
      "Minimal operational disruption",
      "Service-level agreements available",
    ],
  },
  {
    id: "management",
    icon: "clipboard",
    title: "Project Management",
    short:
      "Disciplined oversight of budget, programme, procurement and quality from kick-off to handover.",
    banner: "Project managers reviewing site programme",
    desc: "Whether we build it or coordinate other contractors, our PM team keeps your project on budget, on programme and on spec with transparent reporting throughout.",
    items: [
      "Site supervision",
      "Budget and cost management",
      "Procurement coordination",
      "Quality control and assurance",
    ],
    benefits: [
      "Weekly progress reporting",
      "Single point of accountability",
      "Risk-managed delivery",
    ],
  },
];

export const industries = [
  {
    title: "Residential Housing",
    short: "Family homes, cluster units and estate developments built for comfort and lasting value.",
    image: "Residential housing development",
  },
  {
    title: "Commercial Property",
    short: "Office parks and mixed-use developments designed around tenant performance.",
    image: "Commercial office park",
  },
  {
    title: "Retail Developments",
    short: "Shopping centres and retail units delivered to brand and trading standards.",
    image: "Retail shopping centre",
  },
  {
    title: "Industrial Facilities",
    short: "Warehouses, factories and logistics hubs engineered for heavy-duty use.",
    image: "Industrial warehouse facility",
  },
  {
    title: "Government Projects",
    short: "Public infrastructure and institutional builds delivered to procurement standards.",
    image: "Government civic infrastructure",
  },
  {
    title: "Private Developers",
    short: "Reliable contracting partner for speculative and build-to-sell developments.",
    image: "Private development scheme",
  },
];

export const projects = [
  {
    title: "Borrowdale Hills Residence",
    cat: "Residential",
    catKey: "residential",
    status: "Completed",
    statusClass: "completed",
    location: "Harare",
    img: "Modern double-storey home completed",
    year: "2024",
    value: "$480K",
    client: "Private Client",
    scope: "New 5-bedroom home, pool and landscaping",
    desc: "A contemporary family residence featuring exposed concrete, full-height glazing and a cantilevered upper floor. Delivered two weeks ahead of programme.",
  },
  {
    title: "Msasa Logistics Warehouse",
    cat: "Commercial",
    catKey: "commercial",
    status: "Completed",
    statusClass: "completed",
    location: "Harare",
    img: "Steel-frame warehouse completed",
    year: "2023",
    value: "$1.9M",
    client: "Logistics Co.",
    scope: "4,200m2 warehouse plus offices",
    desc: "A 4,200m2 distribution facility with structural steel frame, dock levellers and integrated office block built to international logistics standards.",
  },
  {
    title: "Bulawayo Ring Road Phase 2",
    cat: "Civil Works",
    catKey: "civil",
    status: "Ongoing",
    statusClass: "ongoing",
    location: "Bulawayo",
    img: "Roadworks and paving in progress",
    year: "2025",
    value: "$3.4M",
    client: "Municipal",
    scope: "6.2km dual carriageway plus drainage",
    desc: "Bulk earthworks, sub-base, asphalt surfacing and stormwater drainage across 6.2km of new arterial road. Currently 60% complete.",
  },
  {
    title: "Avondale Retail Court",
    cat: "Commercial",
    catKey: "commercial",
    status: "Completed",
    statusClass: "completed",
    location: "Harare",
    img: "Retail centre completed exterior",
    year: "2023",
    value: "$2.2M",
    client: "Property Developer",
    scope: "12-unit retail centre",
    desc: "A 12-unit neighbourhood retail centre with structured parking, delivered fully tenanted on opening day.",
  },
  {
    title: "Mutare Industrial Park",
    cat: "Industrial",
    catKey: "industrial",
    status: "Ongoing",
    statusClass: "ongoing",
    location: "Mutare",
    img: "Industrial park site progress",
    year: "2025",
    value: "$5.1M",
    client: "Government",
    scope: "3-factory industrial shell scheme",
    desc: "Three heavy-duty factory shells with shared services infrastructure, forming the first phase of a new industrial special economic zone.",
  },
  {
    title: "Lake Chivero Eco Lodge",
    cat: "Residential",
    catKey: "residential",
    status: "Planned",
    statusClass: "planned",
    location: "Mashonaland West",
    img: "Eco lodge architectural concept",
    year: "2026",
    value: "$1.3M",
    client: "Hospitality Group",
    scope: "14-chalet sustainable lodge",
    desc: "A low-impact hospitality development using local stone, solar power and rainwater harvesting. Breaking ground in Q1 2026.",
  },
  {
    title: "Gweru Civic Offices Refurb",
    cat: "Civil Works",
    catKey: "civil",
    status: "Completed",
    statusClass: "completed",
    location: "Gweru",
    img: "Refurbished civic building",
    year: "2022",
    value: "$760K",
    client: "Municipal",
    scope: "Structural refurb plus facade",
    desc: "Full structural refurbishment and facade upgrade of a 1970s civic building, returned to service with modern services and finishes.",
  },
  {
    title: "Highlands Cluster Homes",
    cat: "Residential",
    catKey: "residential",
    status: "Ongoing",
    statusClass: "ongoing",
    location: "Harare",
    img: "Cluster housing development",
    year: "2025",
    value: "$2.8M",
    client: "Developer",
    scope: "16-unit secure cluster",
    desc: "A secure cluster of 16 three-bedroom townhouses with shared landscaped grounds and back-up power. Handover is phased through 2025.",
  },
  {
    title: "Beitbridge Bulk Store",
    cat: "Industrial",
    catKey: "industrial",
    status: "Planned",
    statusClass: "planned",
    location: "Beitbridge",
    img: "Bulk storage facility concept",
    year: "2026",
    value: "$2.0M",
    client: "Private",
    scope: "Bulk dry-goods store",
    desc: "A large-span bulk storage facility near the border post, designed for high throughput and future automation.",
  },
];

export const testimonials = [
  {
    quote: "Frost Tulip delivered our warehouse ahead of schedule and exactly to budget. Their site discipline and reporting gave us total confidence throughout.",
    name: "T. Moyo",
    role: "Operations Director, Logistics Co.",
  },
  {
    quote: "From the first meeting to handover, the professionalism was outstanding. Our home is beautifully built and the finishing is flawless.",
    name: "R. and C. Ncube",
    role: "Private Homeowners, Borrowdale",
  },
  {
    quote: "A contractor that actually communicates. Weekly reports, no surprises on cost, and a genuine commitment to safety on site.",
    name: "S. Chikomo",
    role: "Property Developer",
  },
  {
    quote: "They handled a complex refurbishment of a live civic building with minimal disruption. Highly recommended for institutional work.",
    name: "Eng. P. Dube",
    role: "Municipal Engineer",
  },
];

export const blogPosts = [
  {
    tag: "Industry News",
    title: "Zimbabwe's infrastructure pipeline: what builders should expect in 2026",
    date: "May 28, 2026",
    read: "6 min",
    img: "Infrastructure skyline editorial",
    excerpt: "From road rehabilitation to industrial SEZs, the public works pipeline is shifting. Here's how contractors can position for it.",
  },
  {
    tag: "Construction Tips",
    title: "Five ways to keep a build on budget without cutting corners",
    date: "May 14, 2026",
    read: "5 min",
    img: "Cost planning and blueprints",
    excerpt: "Value engineering done right protects quality and your wallet. Our PM team shares the levers that matter most.",
  },
  {
    tag: "Safety Insights",
    title: "Building a zero-incident site culture from day one",
    date: "Apr 30, 2026",
    read: "7 min",
    img: "Site safety and PPE",
    excerpt: "Safety is not a checklist. It is a culture. Daily toolbox talks and clear ownership change site behaviour.",
  },
  {
    tag: "Project Update",
    title: "Bulawayo Ring Road Phase 2 reaches 60% completion",
    date: "Apr 18, 2026",
    read: "4 min",
    img: "Roadworks progress photo",
    excerpt: "Our civil team marks a major milestone on the 6.2km arterial, with surfacing now underway across the central section.",
  },
  {
    tag: "Infrastructure",
    title: "Why stormwater drainage makes or breaks a development",
    date: "Apr 2, 2026",
    read: "5 min",
    img: "Drainage civil detail",
    excerpt: "The infrastructure you cannot see is often the most important. A primer on getting drainage right the first time.",
  },
  {
    tag: "Construction Tips",
    title: "Choosing the right roofing system for the Zimbabwean climate",
    date: "Mar 21, 2026",
    read: "6 min",
    img: "Roofing and trusses detail",
    excerpt: "Heat, hail and heavy rains demand the right roof. We compare common systems for durability and value.",
  },
];

export const jobs = [
  { title: "Site Foreman", type: "Full-time", loc: "Harare", dept: "Operations", level: "Senior" },
  { title: "Quantity Surveyor", type: "Full-time", loc: "Harare", dept: "Commercial", level: "Mid" },
  { title: "Civil Engineer", type: "Full-time", loc: "Bulawayo", dept: "Civil Works", level: "Mid" },
  { title: "Health and Safety Officer", type: "Full-time", loc: "Harare", dept: "HSE", level: "Mid" },
  { title: "Skilled Bricklayers (x6)", type: "Contract", loc: "Multiple sites", dept: "Trades", level: "Skilled" },
  { title: "Procurement Coordinator", type: "Full-time", loc: "Harare", dept: "Supply Chain", level: "Mid" },
  { title: "Graduate Trainee Construction", type: "Graduate", loc: "Harare", dept: "Rotational", level: "Entry" },
];

export const awards = [
  "ISO 9001:2015",
  "CIFOZ Member",
  "OSHEMAC Certified",
  "Grade A Contractor",
  "NSSA Compliant",
];

export const values = [
  {
    title: "Quality",
    text: "We hold every detail to a high standard because shortcuts always cost more later.",
  },
  {
    title: "Integrity",
    text: "Honest pricing, straight talk and promises kept. We do what we say we will do.",
  },
  {
    title: "Safety",
    text: "No build is worth an injury. Safety governs how we plan, staff and run every site.",
  },
  {
    title: "Reliability",
    text: "On budget, on programme, on spec. Our clients plan around our delivery with confidence.",
  },
  {
    title: "Innovation",
    text: "We embrace better methods, materials and technology to build smarter and more sustainably.",
  },
];

export const strengths = [
  "Skilled construction team",
  "Efficient project execution",
  "Attention to detail",
  "Strong supplier relationships",
  "Customer satisfaction",
];

export const safetyPillars = [
  "Safety procedures",
  "PPE enforcement",
  "Site compliance",
  "Worker training",
  "Environmental care",
  "Incident reporting",
];
