import {
  BadgeIndianRupee,
  Building2,
  CheckCircle2,
  Factory,
  FileCheck2,
  Headphones,
  Home,
  Leaf,
  MapPin,
  PlugZap,
  Sprout,
  SunMedium,
  Wrench
} from "lucide-react";

export const brand = {
  name: "Shubham Traders",
  tagline: "Your Trusted Partner for End-to-End Solar Solutions",
  location: "Kasrawad, Khargone, Madhya Pradesh",
  phones: ["+91 79998 58950", "+91 90741 03184"],
  email: "Shubhamsolarau@gmail.com",
  instagram: "@au_shubham_solar",
  whatsapp: "917999858950"
};

export const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services/residential-solar" },
  { label: "Projects", href: "/projects" },
  { label: "Subsidies", href: "/government-subsidies" },
  { label: "Calculator", href: "/solar-calculator" },
  { label: "Contact", href: "/contact" }
];

export const metrics = [
  { value: "3500+", label: "KW Installed" },
  { value: "550+", label: "Happy Customers" },
  { value: "2021", label: "Established" },
  { value: "EPC", label: "End-to-End Services" }
];

export const trustBar = [
  "550+ Happy Clients",
  "3500+ KW Installed",
  "24x7 Support",
  "Government Approved",
  "Subsidy Assistance",
  "25-Year Performance Warranty"
];

export const services = [
  {
    title: "Residential Solar",
    slug: "residential-solar",
    icon: Home,
    audience: "Homes, apartments and residential societies",
    summary: "Rooftop solar systems built for lower electricity bills, subsidy eligibility and long-term household savings.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
    points: ["Site survey and shadow analysis", "Subsidy and net metering support", "Premium modules and inverter options", "25-year performance planning"]
  },
  {
    title: "Commercial Solar",
    slug: "commercial-solar",
    icon: Building2,
    audience: "Schools, hospitals, showrooms, warehouses and offices",
    summary: "Commercial rooftop solar solutions designed to reduce monthly operating cost and improve energy predictability.",
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80",
    points: ["Load study and ROI report", "Documentation and approvals", "Fast installation scheduling", "Monitoring and maintenance support"]
  },
  {
    title: "Industrial Solar",
    slug: "industrial-solar",
    icon: Factory,
    audience: "Factories, processing units and large facilities",
    summary: "High-capacity solar EPC delivery for industrial loads, power cost optimization and scalable plant operations.",
    image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80",
    points: ["Engineering-led plant design", "Premium BOS and safety systems", "Generation monitoring", "O&M support for uptime"]
  },
  {
    title: "Agricultural Solar",
    slug: "agricultural-solar",
    icon: Sprout,
    audience: "Farmers, nurseries, pumps and agro enterprises",
    summary: "Solar pump and farm energy solutions aligned with agriculture needs and government scheme assistance.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    points: ["Solar pump planning", "PM Kusum guidance", "Farm load estimation", "Reliable rural service support"]
  }
];

export const projects = [
  { title: "Baidyanath Seoni", slug: "baidyanath-seoni", location: "Seoni, Madhya Pradesh", client: "Baidyanath", capacity: "1000 KW", type: "Industrial", savings: "High-tension energy cost optimization", roi: "Approx. 4-5 years", image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80" },
  { title: "Falcon Pipes", slug: "falcon-pipes", location: "Madhya Pradesh", client: "Falcon Pipes", capacity: "870 KW", type: "Industrial", savings: "Reduced daytime grid consumption", roi: "Approx. 4 years", image: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=1200&q=80" },
  { title: "Vallabh Pumps", slug: "vallabh-pumps", location: "Madhya Pradesh", client: "Vallabh Pumps", capacity: "550 KW", type: "Industrial", savings: "Improved manufacturing energy economics", roi: "Approx. 4-5 years", image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80" },
  { title: "Indore Tools", slug: "indore-tools", location: "Indore, Madhya Pradesh", client: "Indore Tools", capacity: "250 KW", type: "Commercial", savings: "Lower operational electricity spend", roi: "Approx. 4 years", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80" },
  { title: "Gurukripa Nursery", slug: "gurukripa-nursery", location: "Khargone, Madhya Pradesh", client: "Gurukripa Nursery", capacity: "75 KW", type: "Agricultural", savings: "Solar support for agriculture operations", roi: "Approx. 3-5 years", image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80" },
  { title: "Sandipani Academy", slug: "sandipani-academy", location: "Madhya Pradesh", client: "Sandipani Academy", capacity: "45 KW", type: "Commercial", savings: "Lower institutional power bills", roi: "Approx. 4 years", image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80" }
];

export const reasons = [
  { title: "Government Subsidy Support", icon: BadgeIndianRupee },
  { title: "In-House Engineering", icon: Wrench },
  { title: "Premium Components", icon: SunMedium },
  { title: "Fast Installation", icon: PlugZap },
  { title: "Complete Documentation", icon: FileCheck2 },
  { title: "Net Metering Assistance", icon: CheckCircle2 },
  { title: "After-Sales Support", icon: Headphones },
  { title: "Local Madhya Pradesh Team", icon: MapPin }
];

export const subsidyPages = [
  {
    title: "PM Surya Ghar Yojana",
    slug: "pm-surya-ghar",
    summary: "Guidance for residential rooftop solar subsidy, documentation, application flow and installation readiness.",
    eligibility: ["Residential electricity connection", "Suitable rooftop space", "Valid electricity bill and bank details"],
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "PM Kusum Yojana",
    slug: "pm-kusum",
    summary: "Solar pump and agriculture solar support for farmers seeking lower diesel and grid dependency.",
    eligibility: ["Agricultural usage", "Pump or farm power requirement", "Scheme documentation as applicable"],
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Net Metering",
    slug: "net-metering",
    summary: "End-to-end support for net metering paperwork, DISCOM coordination and approval tracking.",
    eligibility: ["Grid-connected solar project", "Eligible consumer category", "DISCOM-compliant system design"],
    image: "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Solar Subsidies",
    slug: "solar-subsidies",
    summary: "A practical subsidy hub for residential, agriculture and institution solar buyers in Madhya Pradesh.",
    eligibility: ["Consumer category eligibility", "Correct system capacity", "Complete documentation"],
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Financing",
    slug: "financing",
    summary: "EMI and solar financing support for customers who want to start saving without a heavy upfront burden.",
    eligibility: ["KYC documents", "Income or business proof", "Project quotation and site report"],
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Documentation",
    slug: "documentation",
    summary: "Checklist-driven support for solar permissions, subsidy documents, net metering and commissioning files.",
    eligibility: ["Electricity bill", "Identity proof", "Property or business documents"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
  }
];

export const testimonials = [
  { name: "Industrial Client", role: "Manufacturing Unit", quote: "The Shubham Traders team handled engineering, documentation and installation with strong discipline. The project was delivered with clarity at every stage." },
  { name: "Residential Customer", role: "Khargone", quote: "Our rooftop solar process became simple because their team supported subsidy, net metering and commissioning end to end." },
  { name: "Agriculture Customer", role: "Nursery Owner", quote: "They understood farm usage and recommended a practical solar system instead of overselling capacity." }
];

export const faqs = [
  { q: "How much rooftop area is required for solar?", a: "A typical 1 KW rooftop solar system needs around 80 to 100 sq. ft. of shadow-free space, depending on module type and site conditions." },
  { q: "Does Shubham Traders help with subsidy?", a: "Yes. The team supports subsidy eligibility checks, documentation, application guidance and project execution steps." },
  { q: "What is the payback period for solar?", a: "Most rooftop and commercial systems recover cost in approximately 3 to 6 years depending on tariff, usage pattern, subsidy and system size." },
  { q: "Do you provide net metering assistance?", a: "Yes. Net metering documentation, DISCOM coordination and commissioning support are included in EPC support." },
  { q: "Which areas do you serve?", a: "Shubham Traders is based in Kasrawad, Khargone and serves residential, commercial, industrial and agricultural customers across Madhya Pradesh." }
];

export const blogPosts = [
  { title: "How to Choose the Right Solar System Size", slug: "choose-right-solar-system-size", category: "Solar Guides", excerpt: "A practical guide to matching solar capacity with monthly electricity bills, rooftop space and future usage." },
  { title: "PM Surya Ghar: What Homeowners Should Prepare", slug: "pm-surya-ghar-homeowner-checklist", category: "Government Subsidies", excerpt: "Documents, eligibility checks and installation readiness for residential solar subsidy planning." },
  { title: "Net Metering Explained for Madhya Pradesh Buyers", slug: "net-metering-madhya-pradesh", category: "Net Metering", excerpt: "Understand how exported solar units are adjusted and why documentation matters before installation." }
];

export const calculatorDefaults = {
  tariff: 8,
  costPerKw: 62000,
  subsidyPerKw: 18000,
  annualGenerationPerKw: 1450
};

export const images = {
  hero: "https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&w=2200&q=85",
  engineers: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1400&q=80",
  dashboard: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1400&q=80",
  maintenance: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1400&q=80",
  battery: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=1400&q=80"
};

export const iconMap = { Leaf };
