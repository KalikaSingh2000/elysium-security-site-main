export interface Product {
  id: string;
  name: string;
  slug: string;
  category: string;
  subcategory: string;
  shortDescription: string;
  description: string;
  features: string[];
  specifications: Record<string, string>;
  useCases: string[];
  faqs: { question: string; answer: string }[];
  image: string;
  gallery: string[];
  industries: string[];
}

export const productCategories = [
  { id: "biometric-attendance", name: "Biometric & Attendance", icon: "Fingerprint" },
  { id: "entrance-control", name: "Entrance Control", icon: "DoorOpen" },
  { id: "vehicle-access", name: "Vehicle Access & Gate Automation", icon: "Car" },
  { id: "perimeter-security", name: "Perimeter Security", icon: "ShieldAlert" },
  { id: "security-screening", name: "Security Screening", icon: "ScanLine" },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Face Recognition Attendance System",
    slug: "face-recognition-attendance",
    category: "biometric-attendance",
    subcategory: "Face Recognition",
    shortDescription:
      "AI-powered facial recognition for contactless attendance with 99.7% accuracy and anti-spoofing technology.",
    description:
      "Our advanced Face Recognition Attendance System leverages deep learning algorithms to provide instant, contactless identity verification. With a recognition speed under 0.3 seconds and support for up to 50,000 face templates, this system is ideal for enterprises of all sizes. The anti-spoofing module prevents fraudulent attempts using photos or videos.",
    features: [
      "99.7% recognition accuracy",
      "< 0.3s identification speed",
      "50,000 face capacity",
      "Anti-spoofing detection",
      "Mask detection support",
      "Live body detection",
      "Cloud & on-premise deployment",
      "REST API integration",
    ],
    specifications: {
      Display: "7-inch IPS Touch Screen",
      Camera: "Dual HD with IR",
      Capacity: "50,000 faces / 200,000 records",
      "Verification Speed": "< 0.3 seconds",
      "Operating Temp": "-20C to 60C",
      Power: "12V DC / PoE",
      Communication: "TCP/IP, WiFi, 4G",
      Dimensions: "250 x 135 x 30 mm",
    },
    useCases: [
      "Corporate offices",
      "Manufacturing plants",
      "Government buildings",
      "Educational institutions",
    ],
    faqs: [
      {
        question: "Does it work with masks?",
        answer:
          "Yes, our system supports mask detection and can identify individuals even when wearing masks with over 98% accuracy.",
      },
      {
        question: "Can it integrate with existing HR software?",
        answer:
          "Absolutely. We provide REST APIs and pre-built integrations with leading HRMS and payroll platforms.",
      },
      {
        question: "What is the maximum distance for recognition?",
        answer:
          "The system can recognize faces from 0.3m to 3m distance, making it suitable for various installation scenarios.",
      },
    ],
    image: "/uploads/products/face-recognition-attendance.jpg",
    gallery: ["/uploads/products/face-recognition-attendance.jpg"],
    industries: ["corporate", "industrial", "education", "government"],
  },
  {
    id: "2",
    name: "Fingerprint Biometric Device",
    slug: "fingerprint-biometric-device",
    category: "biometric-attendance",
    subcategory: "Fingerprint",
    shortDescription:
      "High-precision optical fingerprint scanner with multi-spectral imaging for reliable authentication.",
    description:
      "Our Fingerprint Biometric Device uses multi-spectral imaging technology to capture fingerprints beneath the skin surface, ensuring reliable authentication even with wet, dry, or worn fingers. Built for high-traffic environments with enterprise-grade durability.",
    features: [
      "Multi-spectral imaging",
      "10,000 fingerprint capacity",
      "< 0.5s verification",
      "IP65 rated",
      "Tamper alarm",
      "Battery backup",
      "Multiple output formats",
    ],
    specifications: {
      Sensor: "Optical Multi-spectral",
      Capacity: "10,000 fingerprints / 100,000 logs",
      FAR: "< 0.0001%",
      FRR: "< 0.1%",
      Display: "3.5-inch TFT",
      Communication: "TCP/IP, USB, RS485",
      Power: "12V DC",
      Dimensions: "195 x 140 x 45 mm",
    },
    useCases: [
      "Factory floors",
      "Warehouse entry",
      "School attendance",
      "Hospital staff management",
    ],
    faqs: [
      {
        question: "Does it work with dirty or wet fingers?",
        answer:
          "Yes, multi-spectral imaging reads beneath the skin surface, so it works reliably with wet, dry, or dirty fingers.",
      },
    ],
    image: "/uploads/products/fingerprint-biometric.png",
    gallery: ["/uploads/products/fingerprint-biometric.png"],
    industries: ["industrial", "education", "healthcare", "logistics"],
  },
  {
    id: "3",
    name: "Palm Recognition Terminal",
    slug: "palm-recognition-terminal",
    category: "biometric-attendance",
    subcategory: "Palm Recognition",
    shortDescription:
      "Contactless palm vein recognition for hygienic, high-security biometric verification.",
    description:
      "Palm vein recognition offers an exceptional level of security by scanning the unique vein patterns inside your palm. Completely contactless and nearly impossible to forge, this technology is perfect for hygiene-sensitive and high-security environments.",
    features: [
      "Contactless palm vein scan",
      "Impossible to forge",
      "Hygienic operation",
      "5,000 palm capacity",
      "Temperature screening optional",
    ],
    specifications: {
      Sensor: "Near-infrared palm vein",
      Capacity: "5,000 palms",
      Speed: "< 0.5s",
      Display: "5-inch LCD",
      Communication: "TCP/IP, WiFi",
      Power: "12V DC / PoE",
    },
    useCases: ["Hospitals", "Cleanrooms", "Laboratories", "High-security facilities"],
    faqs: [],
    image: "/uploads/products/palm-recognition.png",
    gallery: ["/uploads/products/palm-recognition.png"],
    industries: ["healthcare", "corporate", "government"],
  },
  {
    id: "4",
    name: "Boom Barrier System",
    slug: "boom-barrier-system",
    category: "vehicle-access",
    subcategory: "Boom Barriers",
    shortDescription:
      "Heavy-duty automatic boom barriers with RFID/ANPR integration for seamless vehicular access control.",
    description:
      "Our Boom Barrier Systems are engineered for high-traffic vehicular entry and exit points. Available in arm lengths from 3m to 6m, these barriers integrate with RFID readers, ANPR cameras, and ticketing systems for fully automated access control. Built with brushless DC motors for silent, reliable operation.",
    features: [
      "3m to 6m arm lengths",
      "1.5s opening speed",
      "RFID & ANPR integration",
      "Brushless DC motor",
      "Auto-reverse on obstacle",
      "LED arm option",
      "Remote management",
      "10 million cycles",
    ],
    specifications: {
      "Arm Length": "3m / 4.5m / 6m",
      "Opening Time": "1.5s / 3s / 6s",
      Motor: "Brushless DC 24V",
      "Duty Cycle": "100%",
      "Operating Temp": "-40C to 70C",
      "IP Rating": "IP54",
      Power: "220V AC",
      Lifespan: "10 million cycles",
    },
    useCases: ["Parking lots", "Toll plazas", "Industrial gates", "Residential complexes"],
    faqs: [
      {
        question: "What arm length do I need?",
        answer:
          "For single-lane roads, 3m arms suffice. For wider roads, choose 4.5m or 6m arms. Our team will assess your site for the perfect fit.",
      },
    ],
    image: "/uploads/products/boom-barrier-01.jpg",
    gallery: [
      "/uploads/products/boom-barrier-01.jpg",
      "/uploads/products/boom-barrier-02.jpg",
      "/uploads/products/boom-barrier-03.jpg",
      "/uploads/products/boom-barrier-04.jpg",
    ],
    industries: ["corporate", "industrial", "residential", "transport"],
  },
  {
    id: "5",
    name: "Tripod Turnstile",
    slug: "tripod-turnstile",
    category: "entrance-control",
    subcategory: "Turnstiles",
    shortDescription:
      "Compact tripod turnstile with bi-directional passage and multi-credential reader support.",
    description:
      "Our Tripod Turnstiles provide reliable pedestrian access control in a compact, cost-effective form factor. With bi-directional passage and support for cards, QR codes, and biometric readers, they are ideal for lobbies, metro stations, and event venues.",
    features: [
      "Bi-directional passage",
      "30 persons/min throughput",
      "Anti-tailgating",
      "Emergency drop-arm",
      "Multiple reader support",
      "SUS304 stainless steel",
      "LED direction indicators",
    ],
    specifications: {
      Material: "SUS304 Stainless Steel",
      "Lane Width": "550mm",
      Throughput: "30 persons/min",
      "Arm Drop": "Auto on power failure",
      "IP Rating": "IP42",
      Power: "220V AC / 24V DC",
      Dimensions: "480 x 280 x 980 mm",
    },
    useCases: ["Office lobbies", "Metro stations", "Event venues", "Gymnasiums"],
    faqs: [],
    image: "/uploads/products/tripod-turnstile-01.jpg",
    gallery: [
      "/uploads/products/tripod-turnstile-01.jpg",
      "/uploads/products/tripod-turnstile-03.jpg",
      "/uploads/products/tripod-turnstile-04.jpg",
    ],
    industries: ["corporate", "transport", "education"],
  },
  {
    id: "6",
    name: "Flap Barrier Gate",
    slug: "flap-barrier-gate",
    category: "entrance-control",
    subcategory: "Flap Barriers",
    shortDescription:
      "Elegant flap barrier with ultra-fast retractable wings for premium access control environments.",
    description:
      "Flap Barrier Gates offer a premium pedestrian access experience with ultra-fast retractable wings that open in just 0.3 seconds. Their sleek design makes them perfect for corporate headquarters, luxury hotels, and high-end commercial buildings.",
    features: [
      "0.3s opening speed",
      "40 persons/min",
      "Infrared anti-pinch",
      "Sleek glass wings",
      "Fire alarm integration",
      "Anti-tailgating sensors",
      "Customizable finishes",
    ],
    specifications: {
      Material: "SUS304/316 Stainless Steel",
      "Wing Material": "Tempered Glass / Acrylic",
      "Lane Width": "600mm",
      "Opening Speed": "0.3s",
      Throughput: "40 persons/min",
      "IP Rating": "IP42",
      Power: "100-240V AC",
    },
    useCases: ["Corporate HQ", "Hotels", "Convention centers", "Airports"],
    faqs: [],
    image: "/uploads/products/flap-barrier-gate-01.jpg",
    gallery: [
      "/uploads/products/flap-barrier-gate-01.jpg",
      "/uploads/products/flap-barrier-gate-02.jpg",
      "/uploads/products/pedestrian-slide-gate-01.jpg",
    ],
    industries: ["corporate", "transport", "retail"],
  },
  {
    id: "7",
    name: "Speed Gate",
    slug: "speed-gate",
    category: "entrance-control",
    subcategory: "Speed Gates",
    shortDescription:
      "Ultra-premium speed gate with full-height glass panels for maximum security and aesthetics.",
    description:
      "Speed Gates represent the pinnacle of pedestrian access control, combining full-height glass panels with ultra-fast operation. Designed for environments where both aesthetics and security are paramount.",
    features: [
      "Full-height glass panels",
      "< 0.3s response",
      "Anti-climb design",
      "Bi-directional",
      "Integrated controller",
      "Multiple credential support",
    ],
    specifications: {
      Height: "1800mm glass panels",
      "Lane Width": "600-900mm",
      Speed: "< 0.3s",
      Throughput: "45 persons/min",
      Power: "220V AC",
    },
    useCases: ["Premium offices", "Financial institutions", "Tech parks"],
    faqs: [],
    image: "/uploads/products/speed-gate-01.jpg",
    gallery: [
      "/uploads/products/speed-gate-01.jpg",
      "/uploads/products/swing-barrier-gate-01.jpg",
      "/uploads/products/swing-barrier-gate-02.jpg",
    ],
    industries: ["corporate", "government"],
  },
  {
    id: "8",
    name: "Baggage Scanner ESI BG-5030",
    slug: "baggage-scanner-esi-bg-5030",
    category: "security-screening",
    subcategory: "X-Ray Scanners",
    shortDescription:
      "Compact X-ray baggage scanner for hotels, offices, visitor management desks, and light-duty entry screening.",
    description:
      "The ESI BG-5030 is a compact baggage inspection scanner designed for controlled entry points where space is limited but dependable X-ray screening is required. It is well-suited for hotels, corporate lobbies, schools, and small government checkpoints.",
    features: [
      "Compact installation footprint",
      "High-clarity X-ray image output",
      "Operator-friendly inspection console",
      "Continuous conveyor operation",
      "Suitable for hand baggage and parcels",
      "Designed for daily checkpoint screening",
    ],
    specifications: {
      Model: "ESI BG-5030",
      "Tunnel Size": "500 x 300 mm",
      Application: "Small baggage and parcels",
      Imaging: "High-resolution X-ray screening",
      Conveyor: "Motorized belt conveyor",
      Operation: "Operator console with image review",
      Power: "220V AC",
    },
    useCases: [
      "Hotels",
      "Corporate offices",
      "Schools and colleges",
      "Reception checkpoints",
      "Small government facilities",
    ],
    faqs: [
      {
        question: "Is the X-ray radiation safe?",
        answer:
          "Yes, the scanner is designed for routine screening use and operates within standard safety norms for baggage inspection equipment.",
      },
    ],
    image: "/uploads/products/esi-bg-5030.jpg",
    gallery: ["/uploads/products/esi-bg-5030.jpg"],
    industries: ["government", "transport", "corporate"],
  },
  {
    id: "15",
    name: "Baggage Scanner ESI BG-6040 Compact",
    slug: "baggage-scanner-esi-bg-6040-compact",
    category: "security-screening",
    subcategory: "X-Ray Scanners",
    shortDescription:
      "Mid-size X-ray baggage scanner with external operator console for reception, plant, and campus security checks.",
    description:
      "The ESI BG-6040 Compact is built for checkpoints that need a practical tunnel size and a dedicated operator viewing console. It fits well at factory gates, campus entries, public buildings, and medium-traffic visitor screening points.",
    features: [
      "External image display console",
      "Mid-size baggage screening tunnel",
      "Stable conveyor structure",
      "Color image analysis support",
      "Built for medium-duty screening lines",
      "Easy deployment at entry checkpoints",
    ],
    specifications: {
      Model: "ESI BG-6040 Compact",
      "Tunnel Size": "600 x 400 mm",
      Application: "Cabin baggage, backpacks, cartons",
      Imaging: "X-ray image inspection",
      Console: "Integrated external operator monitor",
      Structure: "Heavy-duty conveyor frame",
      Power: "220V AC",
    },
    useCases: [
      "Factories",
      "Office campuses",
      "Public buildings",
      "Visitor entrances",
      "Event security",
    ],
    faqs: [
      {
        question: "What type of baggage can it inspect?",
        answer:
          "It is suitable for backpacks, cabin baggage, office parcels, and medium-size cartons used in daily checkpoint screening.",
      },
    ],
    image: "/uploads/products/esi-bg-6040-compact.jpg",
    gallery: ["/uploads/products/esi-bg-6040-compact.jpg"],
    industries: ["government", "industrial", "corporate"],
  },
  {
    id: "16",
    name: "Baggage Scanner ESI BG-6040",
    slug: "baggage-scanner-esi-bg-6040",
    category: "security-screening",
    subcategory: "X-Ray Scanners",
    shortDescription:
      "Standard 6040 tunnel baggage scanner for routine screening of visitor bags, parcels, and checkpoint carry-ins.",
    description:
      "The ESI BG-6040 is a standard checkpoint baggage scanner designed for routine X-ray screening in government buildings, transport hubs, hospitals, and commercial sites. Its tunnel size supports a wide range of hand-carried baggage and inspection trays.",
    features: [
      "6040 class tunnel format",
      "Smooth conveyor feed",
      "Compact enclosure design",
      "Suitable for high-visibility checkpoints",
      "Consistent image review workflow",
      "Built for daily operational use",
    ],
    specifications: {
      Model: "ESI BG-6040",
      "Tunnel Size": "600 x 400 mm",
      Application: "Carry bags, cartons, laptop bags",
      "Scanner Type": "Checkpoint X-ray baggage scanner",
      Conveyor: "Motorized inlet and outlet belt",
      Installation: "Indoor screening lanes",
      Power: "220V AC",
    },
    useCases: [
      "Hospitals",
      "Court complexes",
      "Transport terminals",
      "Commercial buildings",
      "Administrative offices",
    ],
    faqs: [],
    image: "/uploads/products/esi-bg-6040.jpg",
    gallery: ["/uploads/products/esi-bg-6040.jpg"],
    industries: ["government", "transport", "corporate"],
  },
  {
    id: "17",
    name: "Baggage Scanner ESI BG-1010",
    slug: "baggage-scanner-esi-bg-1010",
    category: "security-screening",
    subcategory: "X-Ray Scanners",
    shortDescription:
      "Large tunnel baggage and cargo scanner for bulky consignments, warehouse screening, and high-capacity checkpoints.",
    description:
      "The ESI BG-1010 is a large tunnel X-ray scanner intended for oversized baggage, cargo-style consignments, and high-throughput inspection areas. It is suitable for logistics hubs, cargo handling zones, industrial plants, and critical infrastructure entry points.",
    features: [
      "Large tunnel inspection area",
      "Dual monitor operator workstation",
      "Suitable for bulky baggage and cargo",
      "Designed for intensive screening workflows",
      "Wide conveyor handling area",
      "High-visibility operator control station",
    ],
    specifications: {
      Model: "ESI BG-1010",
      "Tunnel Size": "1000 x 1000 mm",
      Application: "Oversized baggage and cargo inspection",
      "Operator Station": "Dual-monitor review console",
      Conveyor: "Heavy-duty roller and belt feed",
      Installation: "Cargo and high-capacity checkpoints",
      Power: "220V AC",
    },
    useCases: [
      "Air cargo areas",
      "Warehouse checkpoints",
      "Industrial plants",
      "Critical infrastructure",
      "Large venue logistics",
    ],
    faqs: [
      {
        question: "When should I choose a 1010 model?",
        answer:
          "Choose it when your site needs to screen large cartons, cargo-type consignments, or oversized baggage that cannot pass through compact checkpoint scanners.",
      },
    ],
    image: "/uploads/products/esi-bg-1010.jpg",
    gallery: ["/uploads/products/esi-bg-1010.jpg"],
    industries: ["government", "transport", "industrial"],
  },
  {
    id: "9",
    name: "Door Frame Metal Detector",
    slug: "door-frame-metal-detector",
    category: "security-screening",
    subcategory: "Metal Detectors",
    shortDescription:
      "Multi-zone walk-through metal detector with pinpoint detection and high-traffic throughput.",
    description:
      "Our Door Frame Metal Detectors feature up to 33 independent detection zones for precise localization of metallic threats. With a throughput of 60+ persons per minute and immunity to environmental interference, they are the standard for security checkpoints worldwide.",
    features: [
      "Up to 33 detection zones",
      "Pinpoint location display",
      "60+ persons/min",
      "Auto-calibration",
      "Environmental immunity",
      "Remote programming",
      "Weatherproof option",
    ],
    specifications: {
      Zones: "6 / 18 / 33",
      Sensitivity: "Adjustable 0-255",
      Throughput: "60+ persons/min",
      "Operating Temp": "-20C to 55C",
      Power: "100-240V AC",
      Weight: "65 kg",
    },
    useCases: ["Security checkpoints", "Courts", "Stadiums", "Prisons"],
    faqs: [],
    image: "/uploads/products/door-frame-metal-detector-01.jpg",
    gallery: [
      "/uploads/products/door-frame-metal-detector-01.jpg",
      "/uploads/products/door-frame-metal-detector-02.jpg",
    ],
    industries: ["government", "transport", "education"],
  },
  {
    id: "10",
    name: "Under Vehicle Surveillance System",
    slug: "under-vehicle-surveillance-system",
    category: "perimeter-security",
    subcategory: "UVSS",
    shortDescription:
      "Automated under-vehicle inspection with ANPR integration for comprehensive vehicle security screening.",
    description:
      "The Under Vehicle Surveillance System (UVSS) automatically captures high-resolution images of a vehicle's undercarriage as it passes over the scanner. Integrated with ANPR for complete vehicle identification, it compares images against a baseline to detect anomalies like explosives, contraband, or modifications.",
    features: [
      "Automatic scanning",
      "ANPR integration",
      "Baseline comparison",
      "High-res imaging",
      "Weather resistant",
      "Speed up to 30 km/h",
      "Database storage",
    ],
    specifications: {
      "Scan Width": "2.2m",
      "Vehicle Speed": "Up to 30 km/h",
      Camera: "4 x 5MP line-scan",
      Illumination: "LED array",
      "IP Rating": "IP68",
      "Operating Temp": "-40C to 70C",
      Power: "220V AC",
    },
    useCases: [
      "Military installations",
      "Government buildings",
      "Embassies",
      "Airports",
      "Critical infrastructure",
    ],
    faqs: [],
    image: "/uploads/products/vehicle-inspection-stock.png",
    gallery: ["/uploads/products/vehicle-inspection-stock.png"],
    industries: ["government", "transport"],
  },
  {
    id: "11",
    name: "Hydraulic Bollard System",
    slug: "hydraulic-bollard-system",
    category: "perimeter-security",
    subcategory: "Bollards",
    shortDescription:
      "Crash-rated hydraulic bollards for perimeter protection and anti-ram vehicle mitigation.",
    description:
      "Our Hydraulic Bollards provide crash-rated perimeter protection against vehicle-borne threats. Rising and lowering in under 3 seconds, they allow authorized vehicle passage while maintaining an impenetrable barrier against unauthorized entry.",
    features: [
      "K4/K8/K12 crash rated",
      "3s rise time",
      "Flush-mount design",
      "Integrated lighting",
      "Emergency fast operation",
      "Manual override",
    ],
    specifications: {
      Height: "600mm / 800mm / 1000mm",
      Diameter: "220mm / 275mm",
      "Rise Time": "3-5 seconds",
      "Crash Rating": "K4/K8/K12",
      Power: "380V AC",
    },
    useCases: ["Embassies", "Government complexes", "Pedestrian zones", "VIP areas"],
    faqs: [],
    image: "/uploads/products/hydraulic-bollard-01.jpg",
    gallery: [
      "/uploads/products/hydraulic-bollard-01.jpg",
      "/uploads/products/hydraulic-bollard-02.jpg",
    ],
    industries: ["government", "corporate"],
  },
  {
    id: "12",
    name: "Tyre Killer System",
    slug: "tyre-killer-system",
    category: "perimeter-security",
    subcategory: "Tyre Killers",
    shortDescription:
      "High-security tyre killer with sharp blades for forceful entry prevention at critical checkpoints.",
    description:
      "The Tyre Killer System provides an extreme deterrent against unauthorized vehicle passage. When activated, sharp steel blades rise from the road surface to puncture tyres of any vehicle attempting forced entry.",
    features: [
      "Heavy-duty steel blades",
      "Hydraulic / pneumatic operation",
      "Traffic light integration",
      "Remote control",
      "Manual override",
    ],
    specifications: {
      Width: "3m / 4m / 6m",
      "Blade Count": "3-6 per meter",
      Operation: "Hydraulic / Pneumatic",
      "Rise Time": "1.5s",
      Power: "380V AC",
    },
    useCases: ["Military checkpoints", "High-security zones", "Border control"],
    faqs: [],
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg"],
    industries: ["government", "transport"],
  },
  {
    id: "13",
    name: "Hand-Held Metal Detector",
    slug: "hand-held-metal-detector",
    category: "security-screening",
    subcategory: "HHMD",
    shortDescription:
      "Lightweight handheld metal detector with high sensitivity for secondary screening at security checkpoints.",
    description:
      "Our Hand-Held Metal Detector is designed for quick secondary screening at security checkpoints. Ultra-lightweight and ergonomic, it detects ferrous and non-ferrous metals with pinpoint accuracy.",
    features: [
      "360 degree detection",
      "Audio & vibration alert",
      "Rechargeable battery",
      "16-hour operation",
      "Auto power-off",
      "Holster included",
    ],
    specifications: {
      "Detection Range": "Ferrous: 150mm / Non-ferrous: 100mm",
      Battery: "Rechargeable Li-ion",
      "Operating Time": "16 hours",
      Weight: "340g",
      "Operating Temp": "-15C to 60C",
    },
    useCases: ["Security checkpoints", "Event screening", "Schools", "Courts"],
    faqs: [],
    image: "/uploads/products/handheld-metal-detector-stock.png",
    gallery: ["/uploads/products/handheld-metal-detector-stock.png"],
    industries: ["government", "education", "transport"],
  },
  {
    id: "14",
    name: "Explosive Trace Detector",
    slug: "explosive-trace-detector",
    category: "security-screening",
    subcategory: "Explosive Detectors",
    shortDescription:
      "Advanced explosive trace detection system identifying nanogram-level traces of explosives and narcotics.",
    description:
      "Our Explosive Trace Detector uses Ion Mobility Spectrometry to identify trace amounts of explosives and narcotics at nanogram levels. Fast, portable, and accurate, it is a critical tool for aviation security, border control, and VIP protection.",
    features: [
      "IMS technology",
      "Nanogram-level detection",
      "< 8s analysis",
      "Database of 40+ substances",
      "Touch screen",
      "Portable design",
    ],
    specifications: {
      Technology: "Ion Mobility Spectrometry",
      Detection: "Military & commercial explosives, narcotics",
      "Analysis Time": "< 8 seconds",
      Display: "7-inch touch screen",
      Weight: "5.5 kg",
      Battery: "4 hours continuous",
    },
    useCases: ["Airports", "Border crossings", "VIP events", "Military"],
    faqs: [],
    image: "/placeholder.svg",
    gallery: ["/placeholder.svg"],
    industries: ["government", "transport"],
  },
  {
    id: "18",
    name: "Full Height Turnstile",
    slug: "full-height-turnstile",
    category: "entrance-control",
    subcategory: "Turnstiles",
    shortDescription:
      "Full-height stainless steel turnstile for controlled pedestrian access at high-security sites.",
    description:
      "The Full Height Turnstile provides floor-to-ceiling pedestrian access control for sites that require strong anti-tailgating protection. It supports card, biometric, and controller-based access systems.",
    features: [
      "Full-height anti-tailgating design",
      "Bi-directional passage",
      "Stainless steel construction",
      "Card and biometric integration",
      "Emergency release support",
    ],
    specifications: {
      Material: "Stainless steel",
      Passage: "Bi-directional",
      Integration: "RFID / Biometric / Access controller",
      Operation: "Semi-automatic / Automatic",
      Installation: "Indoor / Covered outdoor",
    },
    useCases: ["Factories", "Stadiums", "Data centers", "Critical infrastructure"],
    faqs: [],
    image: "/uploads/products/full-height-turnstile-01.jpg",
    gallery: ["/uploads/products/full-height-turnstile-01.jpg"],
    industries: ["industrial", "government", "transport"],
  },
  {
    id: "19",
    name: "Swing Barrier Gate",
    slug: "swing-barrier-gate",
    category: "entrance-control",
    subcategory: "Swing Gates",
    shortDescription:
      "Motorized swing barrier for accessible, premium pedestrian entry lanes.",
    description:
      "The Swing Barrier Gate combines a compact stainless steel cabinet with a wide glass or tubular arm. It is suitable for standard and accessible lanes and integrates with common access credentials.",
    features: [
      "Wide accessible passage",
      "Fast motorized operation",
      "Anti-pinch safety sensors",
      "Bi-directional control",
      "Access reader integration",
    ],
    specifications: {
      Material: "Stainless steel",
      "Lane Width": "600-900 mm",
      Direction: "Bi-directional",
      Integration: "RFID / QR / Biometric",
      Power: "100-240V AC",
    },
    useCases: ["Corporate offices", "Hospitals", "Hotels", "Public buildings"],
    faqs: [],
    image: "/uploads/products/swing-gate-01.jpg",
    gallery: [
      "/uploads/products/swing-gate-01.jpg",
      "/uploads/products/swing-barrier-gate-01.jpg",
      "/uploads/products/swing-barrier-gate-02.jpg",
    ],
    industries: ["corporate", "healthcare", "government"],
  },
  {
    id: "20",
    name: "Hydraulic Road Blocker",
    slug: "hydraulic-road-blocker",
    category: "perimeter-security",
    subcategory: "Road Blockers",
    shortDescription:
      "Heavy-duty rising road blocker for high-security vehicle access points.",
    description:
      "The Hydraulic Road Blocker forms a strong physical barrier across the vehicle lane. Its high-visibility face and powered operation make it suitable for controlled entry at sensitive facilities.",
    features: [
      "Heavy-duty steel construction",
      "Hydraulic rising mechanism",
      "High-visibility warning finish",
      "Traffic light integration",
      "Remote and manual controls",
    ],
    specifications: {
      Width: "Project specific",
      Operation: "Hydraulic",
      Finish: "Black and yellow reflective marking",
      Integration: "Access controller / Traffic signal",
      Installation: "Foundation mounted",
    },
    useCases: ["Government sites", "Military facilities", "Industrial gates", "VIP zones"],
    faqs: [],
    image: "/uploads/products/road-blocker-01.jpg",
    gallery: ["/uploads/products/road-blocker-01.jpg"],
    industries: ["government", "industrial", "transport"],
  },
  {
    id: "21",
    name: "Automatic Sliding Gate Operator",
    slug: "automatic-sliding-gate-operator",
    category: "vehicle-access",
    subcategory: "Gate Automation",
    shortDescription:
      "Compact motorized operator for reliable automatic sliding gate control.",
    description:
      "The Automatic Sliding Gate Operator automates residential, commercial, and industrial sliding gates. Multiple motor sizes are available to suit different gate weights and duty cycles.",
    features: [
      "Compact weather-resistant housing",
      "Manual release for power failure",
      "Remote control support",
      "Obstacle safety input",
      "Multiple motor capacities",
    ],
    specifications: {
      Gate: "Sliding gate",
      Operation: "Electromechanical",
      Control: "Remote / Access controller",
      Safety: "Photocell and obstacle input",
      Release: "Manual override",
    },
    useCases: ["Residential gates", "Factories", "Warehouses", "Commercial campuses"],
    faqs: [],
    image: "/uploads/products/sliding-gate-operator-01.jpg",
    gallery: [
      "/uploads/products/sliding-gate-operator-01.jpg",
      "/uploads/products/sliding-gate-operator-02.jpg",
      "/uploads/products/sliding-gate-operator-03.jpg",
    ],
    industries: ["residential", "industrial", "corporate"],
  },
];

export const getProductBySlug = (slug: string) =>
  products.find((product) => product.slug === slug);

export const getProductsByCategory = (category: string) =>
  products.filter((product) => product.category === category);
