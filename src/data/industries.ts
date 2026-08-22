export interface Industry {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  painPoints: string[];
  recommendedProducts: string[];
  recommendedSolutions: string[];
}

export const industries: Industry[] = [
  {
    id: "corporate", name: "Corporate & IT", slug: "corporate", icon: "Building2",
    description: "Modern corporate campuses need seamless access control, attendance automation, and visitor management that projects a professional image while maintaining security.",
    painPoints: ["Buddy punching and attendance fraud", "Unauthorized visitor access", "Parking congestion", "Multi-building access management"],
    recommendedProducts: ["1", "6", "7", "4"],
    recommendedSolutions: ["1", "2", "3"],
  },
  {
    id: "industrial", name: "Industrial & Manufacturing", slug: "industrial", icon: "Factory",
    description: "Factories and industrial facilities require rugged, reliable systems that can withstand harsh environments while managing complex shift patterns and zone-based access.",
    painPoints: ["Complex shift management", "Hazardous zone access control", "Contractor management", "Equipment theft"],
    recommendedProducts: ["2", "4", "5"],
    recommendedSolutions: ["1", "7"],
  },
  {
    id: "education", name: "Education & Campus", slug: "education", icon: "GraduationCap",
    description: "Schools, colleges, and universities need to balance security with a welcoming environment, managing student attendance, visitor access, and campus safety.",
    painPoints: ["Student safety concerns", "Unauthorized campus entry", "Manual attendance tracking", "Parent communication gaps"],
    recommendedProducts: ["1", "5", "9"],
    recommendedSolutions: ["1", "2", "4"],
  },
  {
    id: "healthcare", name: "Healthcare", slug: "healthcare", icon: "Heart",
    description: "Hospitals and healthcare facilities require hygienic, contactless solutions that manage patient flow, staff attendance, and restrict access to sensitive areas.",
    painPoints: ["Infection control from touch-based systems", "Restricted area access", "Staff shift management", "Emergency lockdown capability"],
    recommendedProducts: ["1", "3", "6"],
    recommendedSolutions: ["1", "2"],
  },
  {
    id: "government", name: "Government & Defense", slug: "government", icon: "Landmark",
    description: "Government facilities demand the highest security standards with multi-layered screening, crash-rated perimeter protection, and comprehensive surveillance.",
    painPoints: ["Multi-layered security requirements", "Vehicle-borne threats", "Classified area access", "Regulatory compliance"],
    recommendedProducts: ["8", "9", "10", "11", "14"],
    recommendedSolutions: ["6", "5"],
  },
  {
    id: "transport", name: "Transport & Infrastructure", slug: "transport", icon: "Train",
    description: "Airports, metro stations, railways, and toll plazas need high-throughput systems that process thousands of passengers and vehicles daily without delays.",
    painPoints: ["High passenger volumes", "Security screening bottlenecks", "Revenue leakage at toll points", "Crowd management"],
    recommendedProducts: ["5", "6", "8", "9"],
    recommendedSolutions: ["4", "5", "6"],
  },
  {
    id: "residential", name: "Residential & Townships", slug: "residential", icon: "Home",
    description: "Gated communities and residential complexes need convenient yet secure access for residents, visitors, and delivery personnel with integrated parking management.",
    painPoints: ["Unauthorized entry", "Visitor verification", "Parking management", "Delivery management"],
    recommendedProducts: ["4", "1"],
    recommendedSolutions: ["2", "3"],
  },
  {
    id: "retail", name: "Retail & Commercial", slug: "retail", icon: "ShoppingBag",
    description: "Retail environments need to balance open customer access with loss prevention, staff management, and footfall analytics.",
    painPoints: ["Shoplifting and theft", "Staff attendance management", "Customer flow analytics", "Parking for customers"],
    recommendedProducts: ["1", "6"],
    recommendedSolutions: ["1", "3", "4"],
  },
  {
    id: "logistics", name: "Logistics & Warehousing", slug: "logistics", icon: "Truck",
    description: "Warehouses and logistics hubs manage constant vehicle and personnel movement, requiring automated gate management and real-time tracking of field staff.",
    painPoints: ["Vehicle queue management", "Unauthorized warehouse access", "Field staff visibility", "Loading dock management"],
    recommendedProducts: ["2", "4"],
    recommendedSolutions: ["1", "3", "7"],
  },
];

export const getIndustryBySlug = (slug: string) => industries.find(i => i.slug === slug);
