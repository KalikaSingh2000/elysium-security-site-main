export interface Solution {
  id: string;
  name: string;
  slug: string;
  icon: string;
  shortDescription: string;
  problem: string;
  challenges: string[];
  solution: string;
  benefits: string[];
  workflow: { step: number; title: string; description: string }[];
  industries: string[];
  relatedProducts: string[];
}

export const solutions: Solution[] = [
  {
    id: "1",
    name: "Attendance & Payroll Automation",
    slug: "attendance-payroll",
    icon: "Clock",
    shortDescription: "Automate employee attendance tracking and payroll processing with biometric-integrated solutions that eliminate buddy punching and manual errors.",
    problem: "Inaccurate attendance records, proxy attendance, manual payroll errors, and complex shift rules create avoidable administrative work and disputes.",
    challenges: ["Buddy punching & proxy attendance", "Manual data entry errors", "Complex shift management", "Multi-location synchronization", "Compliance with labor regulations"],
    solution: "Our integrated Attendance & Payroll solution combines biometric devices (face, fingerprint, palm) with payroll software. Approved attendance data can flow into payroll calculations while retaining workflows for exceptions, shifts, overtime, and leave.",
    benefits: ["Stronger identity assurance", "Less manual payroll preparation", "Real-time attendance visibility", "Automated overtime & shift calculations", "Compliance-ready reports", "Multi-location centralized dashboard"],
    workflow: [
      { step: 1, title: "Capture", description: "Employees authenticate via biometric devices at entry/exit points" },
      { step: 2, title: "Process", description: "Cloud software processes attendance data in real-time" },
      { step: 3, title: "Calculate", description: "Automated payroll calculations with shift, OT, and leave rules" },
      { step: 4, title: "Report", description: "Generate compliance reports and analytics dashboards" },
    ],
    industries: ["corporate", "industrial", "education", "healthcare"],
    relatedProducts: ["1", "2", "3"],
  },
  {
    id: "2",
    name: "Visitor Management System",
    slug: "visitor-management",
    icon: "UserCheck",
    shortDescription: "Digitize and streamline visitor registration, pre-approval, badge printing, and host notifications for a secure and professional front desk experience.",
    problem: "Paper-based visitor logs are inefficient, insecure, and create a poor impression. They don't provide real-time visibility into who is on-premises and lack emergency evacuation data.",
    challenges: ["Long visitor wait times", "No pre-registration capability", "Manual log maintenance", "No real-time tracking", "Emergency evacuation gaps"],
    solution: "Our Visitor Management System replaces paper logs with a digital, touchless experience. Visitors can pre-register online, verify identity via face recognition or ID scan, receive digital badges, and trigger automatic host notifications.",
    benefits: ["Faster, more consistent check-in", "Professional digital experience", "Real-time visitor tracking", "Watchlist screening", "Emergency evacuation lists", "Compliance audit trails"],
    workflow: [
      { step: 1, title: "Pre-Register", description: "Visitors or hosts register visits in advance via web/app" },
      { step: 2, title: "Verify", description: "Identity verification via face recognition or ID scan at kiosk" },
      { step: 3, title: "Notify", description: "Automatic notification sent to host with visitor details" },
      { step: 4, title: "Track", description: "Real-time dashboard shows all visitors on premises" },
    ],
    industries: ["corporate", "government", "education", "healthcare"],
    relatedProducts: ["1"],
  },
  {
    id: "3",
    name: "Parking Automation",
    slug: "parking-automation",
    icon: "ParkingSquare",
    shortDescription: "End-to-end parking management with ANPR, boom barriers, ticketing, and mobile payments for frictionless vehicle flow.",
    problem: "Manual parking management leads to congestion, revenue leakage, unauthorized parking, and poor user experience. Lack of real-time data prevents optimization.",
    challenges: ["Long queues at entry/exit", "Revenue leakage", "Unauthorized parking", "No occupancy visibility", "Manual ticketing errors"],
    solution: "Our Parking Automation solution integrates ANPR cameras, boom barriers, ticketing systems, and mobile payment options for a seamless parking experience. Real-time occupancy tracking and analytics help optimize space utilization.",
    benefits: ["Touchless entry options", "Stronger revenue controls", "Real-time occupancy tracking", "Mobile payment integration", "Automated monthly pass management", "Analytics & reporting"],
    workflow: [
      { step: 1, title: "Detect", description: "ANPR camera reads vehicle plate at entry" },
      { step: 2, title: "Authorize", description: "System checks against registered vehicles or issues ticket" },
      { step: 3, title: "Manage", description: "Real-time tracking of occupancy and vehicle location" },
      { step: 4, title: "Exit", description: "Automated payment and barrier opening at exit" },
    ],
    industries: ["corporate", "retail", "residential", "transport"],
    relatedProducts: ["4"],
  },
  {
    id: "4",
    name: "Crowd Management",
    slug: "crowd-management",
    icon: "Users",
    shortDescription: "Intelligent pedestrian flow management using turnstiles, barriers, and analytics to ensure safe and efficient movement of people.",
    problem: "Uncontrolled crowd movement creates safety hazards, security vulnerabilities, and poor visitor experiences at high-traffic venues.",
    challenges: ["Crowd surges and stampede risk", "Unauthorized access", "Slow throughput at entry points", "No real-time people count", "Emergency evacuation chaos"],
    solution: "Our Crowd Management solution combines physical barriers (turnstiles, flap barriers, speed gates) with intelligent people counting and flow analytics. Real-time dashboards provide occupancy data while automated controls manage the rate of entry.",
    benefits: ["Safe crowd flow management", "Real-time occupancy monitoring", "40+ persons/min throughput", "Emergency quick-release", "Zone-wise people counting", "Historical analytics"],
    workflow: [
      { step: 1, title: "Control", description: "Physical barriers regulate pedestrian flow at entry points" },
      { step: 2, title: "Count", description: "Sensors track real-time people count per zone" },
      { step: 3, title: "Monitor", description: "Dashboard displays occupancy against capacity limits" },
      { step: 4, title: "Alert", description: "Automatic alerts when thresholds are reached" },
    ],
    industries: ["transport", "retail", "education", "corporate"],
    relatedProducts: ["5", "6", "7"],
  },
  {
    id: "5",
    name: "Toll Management",
    slug: "toll-management",
    icon: "Landmark",
    shortDescription: "Automated toll collection and traffic management with RFID, ANPR, and digital payment integration.",
    problem: "Manual toll collection causes traffic congestion, revenue leakage, and high operational costs. It also leads to poor user experience and environmental pollution from idling vehicles.",
    challenges: ["Traffic congestion at toll plazas", "Cash handling risks", "Revenue leakage", "High operational costs", "Vehicle classification errors"],
    solution: "Our Toll Management solution automates the entire toll collection process using RFID tags, ANPR cameras, and digital payment gateways. Vehicles are automatically classified, charged, and permitted through without stopping.",
    benefits: ["Faster lane processing", "Cashless operation", "Automatic vehicle classification", "Real-time revenue tracking", "Reduced manual handling", "Lower idle time"],
    workflow: [
      { step: 1, title: "Identify", description: "RFID/ANPR identifies vehicle and class" },
      { step: 2, title: "Charge", description: "Automatic toll deduction from prepaid account" },
      { step: 3, title: "Pass", description: "Barrier opens for seamless passage" },
      { step: 4, title: "Report", description: "Transaction logged with complete audit trail" },
    ],
    industries: ["transport", "government"],
    relatedProducts: ["4"],
  },
  {
    id: "6",
    name: "Screening & Security Solution",
    slug: "screening-security",
    icon: "Shield",
    shortDescription: "Comprehensive threat detection combining X-ray screening, metal detectors, explosive trace detectors, and UVSS for multi-layered security.",
    problem: "Single-layer security screening leaves gaps that can be exploited. Organizations need a layered approach combining multiple detection technologies to ensure comprehensive threat prevention.",
    challenges: ["Single-point security failures", "High-volume throughput needs", "Diverse threat types", "Operator fatigue", "Integration of multiple systems"],
    solution: "Our Screening & Security Solution creates a multi-layered detection system combining X-ray baggage scanners, door frame metal detectors, handheld detectors, explosive trace detectors, and UVSS into an integrated command center.",
    benefits: ["Multi-layered threat detection", "AI-assisted anomaly detection where supported", "Centralized monitoring", "Throughput-aware screening", "Documented audit trail", "Configuration around applicable requirements"],
    workflow: [
      { step: 1, title: "Screen", description: "Vehicles scanned by UVSS, persons through DFMD" },
      { step: 2, title: "Inspect", description: "Baggage passes through X-ray scanner" },
      { step: 3, title: "Verify", description: "Secondary check with HHMD or ETD if flagged" },
      { step: 4, title: "Clear", description: "All-clear signal with logged records" },
    ],
    industries: ["government", "transport", "corporate"],
    relatedProducts: ["8", "9", "10", "13", "14"],
  },
  {
    id: "7",
    name: "Field Staff Tracking",
    slug: "field-staff-tracking",
    icon: "MapPin",
    shortDescription: "GPS-based mobile workforce management for real-time tracking, task assignment, and attendance of field employees.",
    problem: "Managing field staff without visibility leads to inefficiency, false reporting, and inability to optimize routes or respond to urgent tasks.",
    challenges: ["No real-time location visibility", "False attendance claims", "Inefficient route planning", "Delayed task updates", "Manual expense reporting"],
    solution: "Our Field Staff Tracking solution uses GPS-enabled mobile apps with geofencing to track field employees in real-time. Managers can assign tasks, verify on-site attendance, and monitor progress from a centralized dashboard.",
    benefits: ["Real-time GPS tracking", "Geofenced attendance", "Automated route optimization", "Task assignment & tracking", "Digital expense reporting", "Performance analytics"],
    workflow: [
      { step: 1, title: "Assign", description: "Tasks assigned to field staff via mobile app" },
      { step: 2, title: "Track", description: "GPS tracking shows real-time location and route" },
      { step: 3, title: "Verify", description: "Geofenced check-in confirms on-site presence" },
      { step: 4, title: "Analyze", description: "Dashboard shows performance metrics and optimization opportunities" },
    ],
    industries: ["corporate", "logistics", "industrial"],
    relatedProducts: [],
  },
];

export const getSolutionBySlug = (slug: string) => solutions.find(s => s.slug === slug);
