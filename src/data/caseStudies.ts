export interface CaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  image?: string;
  problem: string;
  solution: string;
  results: string[];
  testimonial?: string;
  testimonialAuthor?: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    title: "Attendance Control for a Multi-Shift Manufacturing Site",
    slug: "manufacturing-attendance",
    client: "Representative deployment scenario",
    industry: "Industrial",
    problem: "A large shift-based workforce needs reliable identity verification, controlled entry, accurate attendance records, and a clean handoff to payroll operations.",
    solution: "Position biometric terminals around real shift flows, define device and network resilience, connect approved attendance data to HR workflows, and document exception handling.",
    results: ["Faster shift entry", "Stronger identity assurance", "Cleaner attendance records", "Defined exception workflow"],
  },
  {
    id: "2",
    title: "Layered Screening for a High-Security Campus",
    slug: "government-security",
    client: "Representative deployment scenario",
    industry: "Government & Infrastructure",
    problem: "A busy campus must screen people, baggage, and vehicles without creating uncontrolled queues or disconnected operating procedures.",
    solution: "Combine baggage screening, metal detection, vehicle inspection, access zoning, and operator workflows within a coordinated checkpoint design.",
    results: ["Clear screening layers", "Better operator visibility", "Controlled restricted zones", "Documented incident response"],
  },
  {
    id: "3",
    title: "Parking Automation for a Commercial Campus",
    slug: "it-park-parking",
    client: "Representative deployment scenario",
    industry: "Corporate",
    image: "/uploads/products/boom-barrier-03.jpg",
    problem: "Peak-hour congestion, inconsistent authorization, and limited occupancy visibility affect tenants, visitors, and facility teams.",
    solution: "Coordinate ANPR or RFID identification, boom barriers, visitor handling, occupancy rules, and management reporting around each lane's traffic pattern.",
    results: ["Smoother vehicle entry", "Consistent authorization", "Improved occupancy visibility", "Clear visitor workflow"],
  },
  {
    id: "4",
    title: "Connected Access for an Education Campus",
    slug: "university-campus-security",
    client: "Representative deployment scenario",
    industry: "Education",
    image: "/uploads/products/tripod-turnstile-01.jpg",
    problem: "Students, employees, contractors, and visitors need different permissions across a large site with multiple entry points.",
    solution: "Design access zones, turnstile lanes, credential rules, visitor registration, and reporting around the campus timetable and emergency procedures.",
    results: ["Clearer access permissions", "Better visitor records", "Reduced manual checking", "Scalable campus standards"],
  },
  {
    id: "5",
    title: "Vehicle Access for a Logistics Facility",
    slug: "highway-toll-automation",
    client: "Representative deployment scenario",
    industry: "Logistics",
    image: "/uploads/products/sliding-gate-operator-01.jpg",
    problem: "A facility needs to separate staff, visitor, delivery, and heavy-vehicle movements while retaining an auditable entry record.",
    solution: "Define vehicle lanes, credential methods, barrier logic, safety devices, exception handling, and reporting before selecting the hardware mix.",
    results: ["Structured lane movement", "Auditable vehicle records", "Safer barrier operation", "Defined exception handling"],
  },
  {
    id: "6",
    title: "Visitor and Restricted-Area Access for Healthcare",
    slug: "hospital-visitor-management",
    client: "Representative deployment scenario",
    industry: "Healthcare",
    problem: "Patients, attendants, staff, vendors, and emergency teams require different access journeys without adding friction to clinical operations.",
    solution: "Combine pre-registration, visitor verification, badge rules, staff access, restricted zones, and emergency overrides within one operating model.",
    results: ["Faster visitor handling", "Clear restricted-area rules", "Improved visit records", "Better staff coordination"],
  },
];

export const getCaseStudyBySlug = (slug: string) => caseStudies.find((study) => study.slug === slug);
