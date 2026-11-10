export const personalInfo = {
  name: "Maheshwari M.",
  initials: "M",
  headline: "Curious Mind, Engineering Heart.",
  role: "Student Engineer • Learning, Building & Exploring",
  shortIntro: "Hi, I'm Maheshwari — an Electronics and Communication Engineering student exploring the connection between hardware, software, and intelligent technology.",
  institution: "K.S. Institute of Technology (KSIT), Bengaluru",
  department: "Electronics and Communication Engineering",
  currentYear: "2nd Year",
  entryYear: "2025 (via KCET)",
  graduationYear: "Approx. 2029",
  email: "sindhumahesh360@gmail.com", // Placeholder ready to be customized
  linkedin: "https://www.linkedin.com/in/maheshwari-m-30a44437b", // Placeholder
  github: "https://github.com/Maheswari-M89", // Placeholder
};

export const aboutData = {
  paragraphs: [
    "I am a 2nd-year Electronics and Communication Engineering student at K.S. Institute of Technology (KSIT), Bengaluru. My journey into engineering is rooted in curiosity and continuous learning.",
    "Before stepping into the engineering campus, I studied PCMB (Physics, Chemistry, Mathematics, and Biology) and completed my schooling in a Kannada-medium government school. Growing up in this environment gave me a strong appreciation for hard work, genuine curiosity, and the courage to adapt to new learning environments.",
    "In 2025, I began my engineering journey through KCET. Soon after, Python became my very first programming language, unveiling how logical thinking and code can bring hardware to life. I created my LinkedIn profile after PUC and steadily began exploring the expansive world of technology.",
    "Today, I am deeply fascinated by the convergence of electronics and intelligent computing — from microcontrollers and sensor integration to digital system design and AI/ML foundations. I believe true engineering is learned not just from textbooks, but by getting hands dirty with breadboards, code simulations, hackathon sprints, and community engagement."
  ],
  highlights: [
    { label: "Current Focus", val: "2nd Year ECE at KSIT, Bengaluru" },
    { label: "Engineering Entry", val: "KCET 2025" },
    { label: "First Code", val: "Python Programming" },
    { label: "Academic Milestone", val: "2nd Rank in 1st Year Engineering" },
  ]
};

export const timelineMilestones = [
  {
    id: 1,
    title: "School Journey & Strong Foundations",
    period: "Schooling Years",
    tag: "Roots & Curiosity",
    description: "Completed my schooling in a Kannada-medium government school. Built a solid foundation in science, perseverance, and a deep appreciation for learning through curiosity and dedicated study.",
    takeaway: "Taught me resilience, adaptability, and the value of self-driven curiosity."
  },
  {
    id: 2,
    title: "PCMB Pre-University Education",
    period: "PUC",
    tag: "Scientific Inquiry",
    description: "Studied Physics, Chemistry, Mathematics, and Biology (PCMB). Developed rigorous analytical reasoning and an interest in applying scientific principles to real-world challenges.",
    takeaway: "Cultivated a structured problem-solving approach and passion for physical sciences."
  },
  {
    id: 3,
    title: "2025 — Engineering Journey Begins",
    period: "2025",
    tag: "KCET Admission",
    description: "Secured admission to K.S. Institute of Technology (KSIT), Bengaluru, in Electronics and Communication Engineering through the Karnataka Common Entrance Test (KCET).",
    takeaway: "Stepped into the multidisciplinary realm of circuits, signals, and computing systems."
  },
  {
    id: 4,
    title: "First Programming Steps with Python",
    period: "2025",
    tag: "Coding Exploration",
    description: "Discovered programming through Python. Learned core syntax, data structures, and algorithmic logic, unlocking a fascination with software and automation.",
    takeaway: "Opened the door to building smart tech and software-hardware interplay."
  },
  {
    id: 5,
    title: "1st-Year Academic Achievement: 2nd Rank",
    period: "1st Year Engineering",
    tag: "Academic Excellence",
    description: "Earned 2nd Rank in my first year of engineering across the department, validating consistent study habits, academic discipline, and passion for core engineering fundamentals.",
    takeaway: "A proud milestone reinforcing confidence to tackle advanced engineering concepts."
  },
  {
    id: 6,
    title: "Growing Through Hackathons, Projects & NSS",
    period: "Present & Ongoing",
    tag: "Hands-on Growth",
    description: "Actively engaging in hands-on hardware development, 24-hour hackathons (Parivarthana 3rd Place), technical presentations, Digital System Design with Verilog, and NSS community leadership at Nallahalli.",
    takeaway: "Transforming classroom theory into practical systems and community impact."
  }
];

export const skillsData = [
  {
    category: "Programming",
    items: [
      { name: "Python", status: "Building Foundations", desc: "First language learned; scripting, logic building, and data handling" }
    ]
  },
  {
    category: "Emerging Technology",
    items: [
      { name: "AI / ML Basics", status: "Exploring", desc: "Understanding predictive modeling concepts and intelligence at the edge" }
    ]
  },
  {
    category: "Core Engineering",
    items: [
      { name: "Embedded Systems", status: "Learning", desc: "Interfacing microcontrollers (ESP32, Arduino), sensors, and displays" },
      { name: "Digital System Design", status: "Building Foundations", desc: "Combinational and sequential logic, counters, and state machines" },
      { name: "VLSI", status: "Learning", desc: "Hardware description fundamentals, synthesis, and digital architecture" },
      { name: "Verilog HDL", status: "Learning", desc: "Hardware description language modeling and digital simulation" }
    ]
  },
  {
    category: "Professional & Life Skills",
    items: [
      { name: "Teamwork & Collaboration", status: "Practiced", desc: "Collaborating in 24-hour hackathon teams and project groups" },
      { name: "Project Coordination", status: "Practiced", desc: "Managing component assembly, testing cycles, and roles" },
      { name: "Time Management", status: "Practiced", desc: "Balancing academic rank, project prototyping, and NSS camps" },
      { name: "Technical Presentation", status: "Practiced", desc: "Pitching prototypes to academic evaluators and hackathon juries" },
      { name: "Problem Solving", status: "Growing", desc: "Debugging circuit wiring, troubleshooting sensor noise, and logic synthesis" }
    ]
  }
];

export const projectsData = [
  {
    id: "arecanut-detection",
    title: "Early Disease Detection System for Arecanut Farmers",
    subtitle: "Hardware-Based Agricultural Prototype with ESP32 & Machine Learning Concepts",
    badge: "Major Project & Hackathon Win",
    awardBadge: "🥉 3rd Place — Parivarthana 24-Hour Hackathon",
    type: "Team Project • 24-Hour Hackathon",
    timeframe: "24-Hour Hackathon & Field Research",
    image: "/images/hackathon_award_stage.jpg",
    gallery: [
      { url: "/images/areca_field_visit.jpg", caption: "Field interaction with arecanut farmers in the plantation grove" },
      { url: "/images/hackathon_award_stage.jpg", caption: "Team on stage receiving 3rd Place trophy at Parivarthana Hackathon (VVCE)" },
      { url: "/images/hackathon_judges_pitch.jpg", caption: "Presenting the working prototype and live telemetry to evaluators" },
      { url: "/images/areca_oled_display.jpg", caption: "Working circuit showing real-time temperature, buzzer, and warning LEDs" },
      { url: "/images/areca_sensor_probe.jpg", caption: "Custom fabricated sensor probe stick for soil and canopy monitoring" },
      { url: "/images/areca_esp32_cam.jpg", caption: "ESP32-CAM module integrated for visual foliage and fruit inspection" },
      { url: "/images/areca_disease_samples.jpg", caption: "Documented real yellow leaf and fruit rot disease specimens from the field" },
      { url: "/images/hackathon_principal_felicitation.jpg", caption: "Team felicitation with certificates and trophy alongside KSIT Principal" }
    ],
    overview: "Built during the rigorous Parivarthana 24-Hour Hackathon at Vidyavardhaka College of Engineering (VVCE), this project tackles a vital challenge faced by Karnataka's arecanut farmers: yield loss caused by yellow leaf disease (YLD) and fruit rot (Koleroga). Our team designed and built a hardware-based telemetry prototype integrating environmental sensors with an ESP32 microcontroller, exploring machine learning concepts for timely risk forecasting.",
    hardwareStack: ["ESP32 Microcontroller", "ESP32-CAM Module", "DHT11 Temp & Humidity Sensor", "Soil Moisture Sensor", "0.96\" OLED Display", "Audio/Visual Alarm (Buzzer & LEDs)"],
    keyFeatures: [
      "Real-time monitoring of soil moisture, ambient humidity, and temperature prone to fungal proliferation.",
      "Integrated ESP32-CAM to explore vision-based early spotting of leaf discoloration.",
      "OLED telemetry display showing immediate ambient parameters and warning thresholds on-field.",
      "Audio-visual buzzer alert triggered when moisture and temperature enter high-risk disease bands.",
      "Field-tested probe housing design designed for easy insertion into farm soil."
    ],
    whatILearned: [
      "Working under time pressure to build a functional prototype within a strict 24-hour window.",
      "Team coordination — distributing circuit assembly, code debugging, and pitch deck preparation.",
      "Sensor and component integration — dealing with voltage levels, signal reading, and wiring in real time.",
      "Building and testing a physical hardware prototype from raw parts to working demonstration.",
      "Presenting ideas and solutions clearly to a technical panel of evaluators and domain experts."
    ]
  },
  {
    id: "alcohol-detection",
    title: "Alcohol Detection System for Cars",
    subtitle: "Automotive Safety Prototype with Breath Analysis & Motor Interlock",
    badge: "First Engineering Project",
    type: "Team Project • KSIT",
    timeframe: "1st Year Engineering",
    image: "/images/alcohol_presentation.jpg",
    gallery: [
      { url: "/images/alcohol_presentation.jpg", caption: "Presenting the Alcohol Detection prototype with teammates in KSIT classroom" },
      { url: "/images/alcohol_prototype.jpg", caption: "Top-down view of the physical circuit: gas sensor, motor drive, buzzer, and power circuit" }
    ],
    overview: "This was my very first hands-on engineering project, undertaken to translate classroom curiosity into physical hardware. Motivated by road safety challenges, the prototype implements an ignition interlock mechanism that detects alcohol vapor and prevents the vehicle's drive motor from starting while sounding a warning buzzer.",
    hardwareStack: ["MQ-3 Alcohol Gas Sensor", "DC Gear Motor & Wheel", "Driver Circuit & Transistor Switching", "Piezo Buzzer", "DC Power Supply & Rocker Switch"],
    keyFeatures: [
      "MQ-3 gas sensor tuned for sensitive detection of alcohol vapor levels.",
      "Automatic motor interlock mechanism to simulate engine immobilization when alcohol is sensed.",
      "Audible piezo alert providing immediate feedback to both driver and surroundings.",
      "Demonstrated how analog sensor thresholds can control electro-mechanical actuators."
    ],
    whatILearned: [
      "Understanding practical project development from concept to soldered prototype.",
      "Learning about physical electronic components, pinouts, and their internal working principles.",
      "Exploring how simple, thoughtful technology can be used to solve pressing real-world safety problems."
    ]
  },
  {
    id: "smart-parking",
    title: "Smart Parking Slot Availability Monitoring System",
    subtitle: "Digital System Design using Verilog HDL & Synchronous Up/Down Counter Logic",
    badge: "Individual Project",
    isIndividual: true,
    type: "Individual Academic Project",
    timeframe: "Digital System Design Coursework",
    image: null, // Verilog HDL interactive circuit visualization
    overview: "This was my individual Digital System Design project. I designed, modeled, and simulated a smart parking slot tracker using Verilog HDL. The core architecture uses a 4-bit synchronous up/down counter that increments when a vehicle enters, decrements when a vehicle exits, maintains an accurate tally of occupied spaces, and computes available parking capacity.",
    hardwareStack: ["Verilog HDL", "Digital System Design", "4-Bit Synchronous Up/Down Counter", "Sequential Logic Simulation", "7-Segment / Status Display Logic"],
    keyFeatures: [
      "100% individual effort showcasing personal grasp of synchronous sequential digital design.",
      "4-bit synchronous up/down counter design guaranteeing glitch-free transition across clock cycles.",
      "Dual sensor edge-detection modeling for separate vehicle Entry and Exit triggers.",
      "Capacity boundary conditions with 'FULL' flag asserting when count reaches max capacity (15 slots) and 'EMPTY' flag at zero.",
      "Real-time available slot subtraction logic computed dynamically."
    ],
    whatILearned: [
      "Core syntax, structural and behavioral modeling paradigms in Verilog HDL.",
      "Foundational Digital System Design concepts: setup/hold timing, clock gating, and state transitions.",
      "Working with synchronous up/down counters and sequential digital logic blocks.",
      "Simulation testing, testbench waveform verification, and systematic logical problem-solving."
    ]
  }
];

export const projectLessons = [
  {
    title: "Component Working",
    desc: "Demystifying datasheets, pin configurations, voltage tolerances, and how raw silicon behaves under real operating conditions.",
    icon: "Cpu"
  },
  {
    title: "Learning Through Building",
    desc: "Realizing that theory only becomes intuitive when you troubleshoot real breadboards, wire loose contacts, and verify waveforms.",
    icon: "Wrench"
  },
  {
    title: "Teamwork & Coordination",
    desc: "Understanding the synergy of divided roles — uniting hardware assembly, code logic, and clear presentation into one cohesive delivery.",
    icon: "Users"
  },
  {
    title: "Time Management",
    desc: "Delivering working solutions within 24-hour hackathon crunches while maintaining clarity, precision, and calm focus.",
    icon: "Clock"
  },
  {
    title: "Presenting Technical Ideas",
    desc: "Communicating complex circuit schemas and engineering benefits simply and persuasively to professors and industry judges.",
    icon: "Presentation"
  },
  {
    title: "Concept to Prototype",
    desc: "Experiencing the immense joy of taking a problem sketch on paper and turning it into a physical, functioning device.",
    icon: "Sparkles"
  }
];

export const achievementsData = [
  {
    rank: "🥈 2nd Rank",
    title: "2nd Rank in 1st-Year Engineering",
    institution: "K.S. Institute of Technology (KSIT), Bengaluru",
    year: "Academic Year 2024-2025",
    description: "Secured second rank across the department during the foundational first year of engineering studies, reflecting strong academic commitment, problem-solving grasp, and consistent performance across core engineering subjects.",
    tag: "Academic Excellence"
  },
  {
    rank: "🥉 3rd Place",
    title: "3rd Place — Parivarthana 24-Hour Hackathon",
    institution: "Vidyavardhaka College of Engineering (VVCE), Mysuru",
    year: "2026",
    description: "Won 3rd prize among diverse competing collegiate teams for developing the 'Early Disease Detection System for Arecanut Farmers', completing a working hardware telemetry probe within a continuous 24-hour development sprint.",
    tag: "Technical Hackathon",
    projectLinked: "Early Disease Detection System for Arecanut Farmers"
  }
];

export const nssCampData = {
  campName: "Samanvaya",
  location: "Nallahalli",
  organization: "National Service Scheme (NSS) • KSIT Unit",
  motto: "Not Me, But You",
  reflection: "The Samanvaya NSS Special Camp at Nallahalli was an eye-opening chapter beyond traditional lecture halls. Living in the village community, sharing daily duties, and engaging with rural citizens taught me profound lessons about empathy, collective responsibility, ground realities, and the societal purpose of education.",
  activities: [
    {
      title: "Public Awareness Activities",
      desc: "Interacting directly with village elders and families to raise awareness on health, hygiene, and rural welfare initiatives.",
      icon: "Megaphone"
    },
    {
      title: "Village Cleaning & Swachhata",
      desc: "Organizing community cleanliness drives across village roads, encouraging waste segregation and environmental tidiness.",
      icon: "Sparkles"
    },
    {
      title: "Plantation Activities",
      desc: "Planting saplings and fostering green cover in the village premises to support environmental sustainability.",
      icon: "Trees"
    },
    {
      title: "Cultural & Creative Activities",
      desc: "Participating in traditional rangoli art, street skits, and cultural programs to foster community bonding.",
      icon: "Palette"
    },
    {
      title: "Cooking & Camp Duties",
      desc: "Preparing meals together for fellow volunteers, sharing camp responsibilities, and practicing mutual support.",
      icon: "UtensilsCrossed"
    },
    {
      title: "Games & Team Exercises",
      desc: "Organizing outdoor games and youth activities that bridged college students with local village children.",
      icon: "Smile"
    }
  ]
};

export const galleryPhotos = [
  {
    id: "g1",
    src: "/images/hackathon_award_stage.jpg",
    title: "Parivarthana Hackathon Award Ceremony",
    category: "Hackathons & Presentations",
    caption: "Receiving the 3rd Place award and trophy on stage at Vidyavardhaka College of Engineering.",
    section: "hackathon"
  },
  {
    id: "g2",
    src: "/images/areca_field_visit.jpg",
    title: "Field Visit with Arecanut Farmers",
    category: "Projects & Prototypes",
    caption: "Ground interaction with local arecanut farmers in the grove to understand real-world disease challenges.",
    section: "project"
  },
  {
    id: "g3",
    src: "/images/hackathon_judges_pitch.jpg",
    title: "Hackathon Evaluation & Jury Pitch",
    category: "Hackathons & Presentations",
    caption: "Presenting our sensor telemetry prototype and answering questions from the judging panel.",
    section: "hackathon"
  },
  {
    id: "g4",
    src: "/images/areca_oled_display.jpg",
    title: "OLED Sensor Interface Close-Up",
    category: "Projects & Prototypes",
    caption: "Hardware circuit running real-time temperature diagnostics on a 0.96-inch OLED display.",
    section: "project"
  },
  {
    id: "g5",
    src: "/images/areca_sensor_probe.jpg",
    title: "Arecanut Field Sensor Probe",
    category: "Projects & Prototypes",
    caption: "Fabricated probe rod housing moisture and humidity sensors for on-field soil and trunk testing.",
    section: "project"
  },
  {
    id: "g6",
    src: "/images/areca_esp32_cam.jpg",
    title: "ESP32-CAM Foliage Vision Unit",
    category: "Projects & Prototypes",
    caption: "ESP32-CAM module wired to evaluate visual symptom detection for yellow leaf disease.",
    section: "project"
  },
  {
    id: "g7",
    src: "/images/alcohol_presentation.jpg",
    title: "Alcohol Detection System Presentation",
    category: "Projects & Prototypes",
    caption: "Demonstrating our first engineering safety prototype with teammates in the KSIT classroom.",
    section: "project"
  },
  {
    id: "g8",
    src: "/images/alcohol_prototype.jpg",
    title: "Alcohol Detection Circuit Prototype",
    category: "Projects & Prototypes",
    caption: "Close-up of the MQ-3 gas sensor, motor interlock wheel, buzzer, and power circuit.",
    section: "project"
  },
  {
    id: "g9",
    src: "/images/hackathon_team_trophy.jpg",
    title: "Team Trophy Celebration",
    category: "Hackathons & Presentations",
    caption: "Team holding the 3rd Place trophy and certificates in front of the Parivarthana stage banner.",
    section: "hackathon"
  },
  {
    id: "g10",
    src: "/images/hackathon_principal_felicitation.jpg",
    title: "Felicitation by KSIT Principal",
    category: "Hackathons & Presentations",
    caption: "Presenting the Parivarthana Hackathon trophy to our college Principal and faculty mentors.",
    section: "hackathon"
  },
  {
    id: "g11",
    src: "/images/hackathon_campus_presentation.jpg",
    title: "Campus Project Showcase",
    category: "Hackathons & Presentations",
    caption: "Showcasing project documentation, brochures, and prototype to fellow students at KSIT.",
    section: "hackathon"
  },
  {
    id: "g12",
    src: "/images/nss_memento_award.jpg",
    title: "NSS Camp Memento Recognition",
    category: "NSS & Campus Life",
    caption: "Receiving the NSS Special Camp certificate and memento on stage at the valedictory function.",
    section: "nss"
  },
  {
    id: "g13",
    src: "/images/nss_health_camp.jpg",
    title: "Community Outreach & Elder Assistance",
    category: "NSS & Campus Life",
    caption: "Assisting a village elder during the community health and welfare initiative at Nallahalli.",
    section: "nss"
  },
  {
    id: "g14",
    src: "/images/nss_village_cleaning.jpg",
    title: "Village Road Cleanliness Drive",
    category: "NSS & Campus Life",
    caption: "Volunteering alongside peers to clear waste along Nallahalli village roads.",
    section: "nss"
  },
  {
    id: "g15",
    src: "/images/nss_awareness_drive.jpg",
    title: "Public Awareness March",
    category: "NSS & Campus Life",
    caption: "Marching through Nallahalli with informational placards advocating environmental cleanliness.",
    section: "nss"
  },
  {
    id: "g16",
    src: "/images/nss_cultural_art.jpg",
    title: "Rangoli & Cultural Participation",
    category: "NSS & Campus Life",
    caption: "Designing traditional floor rangoli during cultural celebration activities at the college.",
    section: "nss"
  },
  {
    id: "g17",
    src: "/images/nss_group_delegation.jpg",
    title: "KSIT Student Delegation",
    category: "NSS & Campus Life",
    caption: "Group photo with faculty and student peers during an institutional outreach visit.",
    section: "nss"
  },
  {
    id: "g18",
    src: "/images/areca_disease_samples.jpg",
    title: "Arecanut Field Specimen Inspection",
    category: "Projects & Prototypes",
    caption: "Studying diseased fruit samples with internal rot to understand visual symptoms.",
    section: "project"
  }
];

