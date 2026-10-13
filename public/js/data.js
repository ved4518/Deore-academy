/**
 * DEORE ACADEMY - CENTRAL DATA STORE
 * Clean structured content for Courses, Results, Batches, Faculty & FAQs
 */

const ACADEMY_DATA = {
  brand: {
    name: "Deore Academy",
    tagline: "For a Better Tomorrow",
    secondaryTagline: "Your Partner in Preparation",
    city: "Nashik, Maharashtra",
    address: "3rd Floor, Shreenath Enclave, Near Ashok Stambh, Gangapur Road, Nashik - 422002",
    phone: "+91 98765 43210",
    altPhone: "+91 94222 18990",
    email: "info@deoreacademy.in",
    workingHours: "Monday - Saturday: 8:00 AM - 8:00 PM, Sunday: 9:00 AM - 2:00 PM",
    socials: {
      instagram: "https://instagram.com",
      facebook: "https://facebook.com",
      youtube: "https://www.youtube.com/@deoreacademynsk",
      linkedin: "https://linkedin.com",
      whatsapp: "https://wa.me/919876543210"
    }
  },

  batches: [
    {
      name: "New Batch",
      course: "UPSC & MPSC Comprehensive",
      modes: ["Classroom"],
      status: "Admissions Open",
      date: "June / July 2027",
      timing: "Morning & Evening Slots Available",
      location: "Ashok Stambh, Nashik Center (In-Person Classroom)"
    }
  ],

  stats: [
    {
      title: "10+ Years",
      subtitle: "of Excellence",
      icon: "award"
    },
    {
      title: "Expert Faculty",
      subtitle: "Experienced Teachers",
      icon: "users"
    },
    {
      title: "Offline Classroom",
      subtitle: "In-Person Coaching",
      icon: "building"
    },
    {
      title: "500+",
      subtitle: "Successful Students",
      icon: "graduation-cap"
    }
  ],

  courses: [
    {
      id: "upsc",
      title: "UPSC",
      subtitle: "IAS • IPS • IRS • IFS",
      badgeColor: "blue",
      category: "Central Services",
      image: "assets/images/upsc-course.jpg",
      alt: "UPSC Classroom Coaching in Nashik",
      duration: "1 Year Foundation",
      mode: "Offline Classroom",
      medium: "English & Marathi",
      eligibility: "Any Graduate / Final Year Students",
      overview: "Comprehensive 360-degree training for Union Public Service Commission Civil Services Examination (CSE) covering Prelims GS + CSAT, Mains 9 Papers, Essay Strategy, and Interview Guidance by retired bureaucrats.",
      aboutExam: {
        heading: "About UPSC Civil Services Examination (CSE)",
        conductingBody: "Union Public Service Commission (UPSC), Government of India",
        intro: "The Union Public Service Commission (UPSC) conducts the Civil Services Examination every year for recruitment to prestigious administrative, diplomatic, police, and revenue positions in the Government of India. Widely recognized as one of India's most prestigious and challenging competitive examinations, a typical examination cycle spans nearly an entire year from Preliminary notifications to the declaration of final merit lists.",
        patternOverview: "The pattern of the UPSC examination is officially structured into two stages called the Preliminary and Main Examination, while in practical execution it is a rigorous three-stage selection system: Preliminary Examination, Main Examination, and Personality Test (Interview). Candidates who qualify Prelims are called for Mains, and successful Mains candidates proceed to the Personality Test stage.",
        stages: [
          {
            stageNumber: "01",
            title: "Preliminary Examination",
            type: "Objective Screening (MCQs)",
            marks: "400 Marks (2 Papers)",
            details: "Paper I: General Studies (GS) - 200 Marks (100 Questions) covering Current Events, Indian History, National Movement, Geography, Polity & Governance, Economy, Environment, and General Science. Paper II: CSAT (Civil Services Aptitude Test) - 200 Marks (80 Questions) covering Comprehension, Reasoning & Numeracy (Qualifying at 33%). Negative marking of 1/3rd marks per wrong answer."
          },
          {
            stageNumber: "02",
            title: "Main Examination",
            type: "Written Descriptive",
            marks: "1750 Marks (9 Papers)",
            details: "Consists of 9 written descriptive papers: Two qualifying language papers (Paper A: Indian Language - 300 Marks, Paper B: English - 300 Marks); and Seven merit-ranking papers: Essay (250 Marks), General Studies I to IV (4 x 250 = 1000 Marks), and Optional Subject Paper 1 & 2 (2 x 250 = 500 Marks)."
          },
          {
            stageNumber: "03",
            title: "Personality Test / Interview",
            type: "Face-to-Face Board Evaluation",
            marks: "275 Marks",
            details: "Conducted at Dholpur House, New Delhi by an expert UPSC Board. Assesses candidate's mental alertness, critical thinking, administrative aptitude, social cohesion, and leadership judgment. Final merit rank is prepared out of 2025 Marks (1750 Mains + 275 Interview)."
          }
        ],
        services: [
          "Indian Administrative Service (IAS)",
          "Indian Police Service (IPS)",
          "Indian Foreign Service (IFS)",
          "Indian Revenue Service (IRS - Customs & IT)",
          "Indian Audit & Accounts Service (IA&AS)",
          "Indian Postal & Defence Accounts Service"
        ],
        syllabusUrl: "docs/Deore-Academy-UPSC-Syllabus.pdf",
        syllabusName: "Deore Academy UPSC Syllabus Explained - Pre cum Mains (Updated for IAS 2026-27)"
      },
      eligibilityAttempts: {
        age: {
          minAge: "21 Years (Completed before August 1st of examination year)",
          general: "21 to 32 Years",
          obc: "21 to 35 Years (3 Years Relaxation)",
          scSt: "21 to 37 Years (5 Years Relaxation)",
          pwd: "Up to 42 Years (10 Years Relaxation)",
          exServicemen: "Up to 37 Years (5 Years Relaxation)"
        },
        education: {
          degree: "Degree from any recognized Indian University or Deemed University, or possess equivalent recognized qualification.",
          degreeMarks: "Candidate's marks, percentage, or class at degree level are not considered (a simple passing degree suffices).",
          finalYear: "Candidates in the final year of graduation can apply and appear for the Preliminary Exam. Proof of degree qualification must be submitted while applying for the Main Examination in August."
        },
        attempts: {
          general: "6 Attempts",
          obc: "9 Attempts",
          scSt: "Unlimited Attempts (No limit up to upper age limit of 37 years)",
          pwd: "9 Attempts (General / OBC) | Unlimited (SC / ST)",
          rule: "Appearing in any one paper of the Preliminary Examination counts as an official attempt."
        },
        summaryBadge: "Age: 21–32 Yrs • Any Graduate • 6/9/Unlimited Attempts"
      },
      subjects: [
        "History, Art & Culture",
        "Indian Polity & Governance",
        "Geography & Environment",
        "Indian Economy & Development",
        "Ethics, Integrity & Aptitude",
        "CSAT & Essay Writing"
      ],
      features: [
        "Daily 3 hours classroom lectures + doubt clearing",
        "Weekly Prelims and Mains Mock Tests with model answers",
        "Comprehensive 22-volume study kit updated annually",
        "Personalized answer evaluation by UPSC Interview appeared mentors"
      ],
      fee: "₹85,000 (Installments available)",
      nextBatch: "15th January, 2026"
    },
    {
      id: "mpsc",
      title: "MPSC State Services (Rajyaseva)",
      category: "state",
      badge: "Class I & II Gazetted",
      duration: "12 Months (Comprehensive)",
      mode: "Offline & Live Hybrid",
      medium: "Marathi & English Medium",
      rating: "4.9",
      reviewsCount: 390,
      fee: "₹65,000",
      description: "Comprehensive Maharashtra State Services program covering Prelims (GS + CSAT) and Mains descriptive pattern with focused guidance on Maharashtra's administration, geography, history, and RTI.",
      features: [
        "Special focus on Maharashtra polity, economy, history & geography",
        "Prelims GS + CSAT regular tests with negative marking simulator",
        "Extensive descriptive answer writing practice for Mains",
        "Interview preparation with retired MPSC members & senior IAS/DySP officers",
        "Bilingual reference notes (Marathi & English) updated annually"
      ],
      subjects: [
        "Maharashtra History & Culture",
        "Maharashtra Geography & Resources",
        "Indian & Maharashtra Economy",
        "Constitution, Polity & Governance",
        "General Science & Agriculture Tech",
        "CSAT (Reasoning, Maths, Marathi/English Comprehension)",
        "Descriptive Marathi & English Languages"
      ],
      eligibility: "Graduate in any discipline from a recognized university",
      eligibilityAttempts: {
        qualification: "Bachelor's degree in any discipline from an accredited Indian University. Final-year students are eligible to apply for Prelims.",
        age: {
          general: "19 to 38 Years",
          obc: "19 to 43 Years",
          scst: "19 to 43 Years",
          ph: "Up to 45 Years"
        },
        attempts: {
          general: "6 Attempts",
          obc: "9 Attempts",
          scst: "No Limit (within age)"
        }
      },
      aboutExam: {
        heading: "About MPSC State Services (Rajyaseva) Exam",
        conductingBody: "Maharashtra Public Service Commission (MPSC), Govt of Maharashtra",
        intro: "MPSC conducts the State Services Examination annually for recruiting Class I and Class II gazetted officers across Maharashtra Government departments (Administrative, Police, Revenue, and Forest). Prestigious posts include Deputy Collector, Deputy Superintendent of Police (DySP / ACP), Tehsildar, Block Development Officer (BDO), and Assistant Commissioner of Sales Tax.",
        patternOverview: "The State Services selection procedure includes three progressive tiers: Preliminary Examination (qualifying screening test held across all Maharashtra districts), Main Examination (in-depth descriptive testing with state specializations), and Personality Test / Interview conducted by the MPSC Board in Mumbai.",
        stages: [
          {
            stageNumber: "01",
            title: "Preliminary Examination",
            type: "Objective Screening (2 Papers)",
            marks: "400 Marks",
            details: "Paper I: General Studies (GS) - 200 Marks (100 Questions) testing Maharashtra & Indian History, Geography, Polity, Economy, and General Science. Paper II: CSAT - 200 Marks (80 Questions, Qualifying with minimum 33% marks). Objective multiple choice format with negative marking."
          },
          {
            stageNumber: "02",
            title: "Main Examination",
            type: "Descriptive Written Papers",
            marks: "1750 Marks",
            details: "In accordance with MPSC's updated descriptive pattern: Language Papers (Marathi & English), Essay Paper, and General Studies Papers (GS 1 to GS 4) with special in-depth reference to Maharashtra's historical, geographical, administrative, and economic context."
          },
          {
            stageNumber: "03",
            title: "Personality Test / Interview",
            type: "MPSC Board Interview",
            marks: "275 Marks",
            details: "Conducted after Main Examination results to test administrative acumen, problem-solving skills, grassroots state awareness, and communication in Marathi/English. Final merit determines gazetted cadre allocation."
          }
        ],
        services: [
          "Deputy Collector (Group A)",
          "Deputy Superintendent of Police / ACP (Group A)",
          "Assistant Commissioner of State Tax (Group A)",
          "Block Development Officer - BDO (Group A)",
          "Tehsildar (Group A)",
          "Assistant Regional Transport Officer - ARTO (Group B)"
        ],
        syllabusUrl: "https://deoreacademy.com/notes/state-service-syllabus2023.pdf",
        syllabusName: "Deore Academy MPSC State Services Syllabus PDF"
      },
      eligibilityAttempts: {
        age: {
          minAge: "19 Years",
          general: "19 to 38 Years",
          obc: "19 to 43 Years (5 Years Relaxation)",
          scSt: "19 to 43 Years (5 Years Relaxation)",
          pwd: "Up to 45 Years",
          sportspersons: "Up to 43 Years"
        },
        education: {
          degree: "Graduation degree in any discipline from a recognized University or equivalent institute.",
          degreeMarks: "Passing degree required; no minimum percentage threshold.",
          finalYear: "Candidates appearing in the final year of their degree can apply and appear for the Preliminary Exam.",
          marathi: "Working proficiency and knowledge of Marathi language is compulsory."
        },
        attempts: {
          general: "6 Attempts",
          obc: "9 Attempts",
          scSt: "Unlimited Attempts (No limit within the prescribed upper age limit)",
          rule: "MPSC guidelines limit attempts for Open (6) and OBC (9); SC/ST aspirants have unlimited attempts up to age 43."
        },
        summaryBadge: "Age: 19–38 Yrs • Graduate • 6/9/Unlimited Attempts"
      },
      subjects: [
        "GS 1: History & Geography (with Maharashtra special reference)",
        "GS 2: Constitution, Polity & Law",
        "GS 3: Human Resource Development & Human Rights",
        "GS 4: Economy, Agriculture & Science Technology",
        "Language Papers: Marathi & English Descriptive"
      ],
      features: [
        "In-depth Maharashtra specific knowledge repository",
        "Daily Marathi editorial & current affairs compilation",
        "Special focus on descriptive answer writing technique",
        "Rigorous mock interviews conducted by ex-MPSC board members"
      ],
      fee: "₹65,000 (Flexible EMI available)",
      nextBatch: "1st February, 2026"
    },
    {
      id: "psi-sti-aso",
      title: "PSI / STI / ASO",
      subtitle: "Combined Preparation",
      badgeColor: "purple",
      category: "Subordinate Services",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      alt: "MPSC Group B PSI STI ASO coaching Nashik",
      duration: "6 - 8 Months",
      mode: "Offline Classroom",
      medium: "Marathi & English",
      eligibility: "Graduation in any discipline",
      overview: "Targeted coaching for MPSC Group B Combined Exam covering Police Sub-Inspector (PSI), State Tax Inspector (STI), and Assistant Section Officer (ASO). Prelims + Mains unified preparation.",
      aboutExam: {
        heading: "About MPSC PSI / STI / ASO Combine Exam",
        conductingBody: "Maharashtra Public Service Commission (MPSC)",
        intro: "MPSC conducts the Joint Preliminary Examination (Combine Exam) for key Group B executive non-gazetted positions: Police Sub-Inspector (PSI), State Tax Inspector (STI), and Assistant Section Officer (ASO). This single joint pre-examination allows candidates to apply for one, two, or all three posts under a unified screening process, saving time, expenses, and duplicate exam cycles.",
        patternOverview: "The exam pattern features a unified 100-mark Preliminary examination followed by independent Main Examinations for each cadre. For PSI, an additional 100-mark ground physical test and 50-mark interview are conducted.",
        stages: [
          {
            stageNumber: "01",
            title: "Combine Preliminary Exam",
            type: "Single Joint Objective Paper",
            marks: "100 Marks (100 MCQs, 1 Hour)",
            details: "Common for PSI, STI, and ASO. Covers Current Affairs (National & International), Indian History, Geography (India & Maharashtra), Indian Polity & Governance, Economy, Environment & Global Warming, and General Science."
          },
          {
            stageNumber: "02",
            title: "Mains Examination",
            type: "Post-Independent Written Papers",
            marks: "200 to 400 Marks",
            details: "Paper 1: Marathi (Language & Grammar) & English (Language & Grammar). Paper 2: General Studies, Intellectual Reasoning, and Special Cadre laws (IPC, CrPC, Evidence Act for PSI; Economics & Taxation for STI; Central & State Governance for ASO)."
          },
          {
            stageNumber: "03",
            title: "Physical Test & Interview (PSI Only)",
            type: "Ground Efficiency + Interview",
            marks: "100 Marks Ground + 50 Marks Interview",
            details: "Conducted exclusively for Police Sub-Inspector (PSI) qualifiers. Physical test is qualifying; interview carries 50 marks. STI and ASO candidates are selected purely based on Main Exam marks."
          }
        ],
        services: [
          "Police Sub-Inspector - PSI (Home Department)",
          "State Tax Inspector - STI (Finance & Sales Tax)",
          "Assistant Section Officer - ASO (Mantralaya Secretariat)",
          "Sub-Registrar / Stamp Inspector (Group B)"
        ],
        syllabusUrl: "https://deoreacademy.com/notes/combine-exam-syllabus.pdf",
        syllabusName: "Deore Academy MPSC Combine Syllabus PDF"
      },
      eligibilityAttempts: {
        age: {
          minAge: "18 / 19 Years",
          general: "18 to 38 Years (PSI: 19 to 31 Years for Open)",
          obc: "18 to 43 Years (PSI: 19 to 34 Years for Reserved)",
          scSt: "18 to 43 Years (PSI: 19 to 34 Years for SC/ST)",
          notes: "Upper age limit for Police Sub-Inspector (PSI) is 31 years for Open and 34 years for Reserved categories."
        },
        education: {
          degree: "Graduation degree in any discipline from a recognized university.",
          degreeMarks: "Simple graduate degree without minimum percentage criterion.",
          marathi: "Fluent knowledge of Marathi language is essential."
        },
        physical: {
          applicable: "Mandatory for Police Sub-Inspector (PSI)",
          menHeight: "165 cm minimum",
          menChest: "79 cm unexpanded (with 5 cm expansion to 84 cm minimum)",
          womenHeight: "157 cm minimum (no chest measurement required)"
        },
        attempts: {
          general: "6 Attempts",
          obc: "9 Attempts",
          scSt: "Unlimited Attempts up to upper age limit",
          rule: "MPSC Group B rules follow standard 6 attempts for General and 9 attempts for OBC."
        },
        summaryBadge: "Age: 18–38 Yrs • Graduate • Physical Criteria for PSI"
      },
      subjects: [
        "General Studies & Mental Ability",
        "Marathi Grammar & Vocabulary",
        "English Grammar & Comprehension",
        "Special Laws for PSI (IPC, CRPC, Evidence Act)",
        "Economics & Taxation for STI"
      ],
      features: [
        "Extensive objective question practice (10,000+ MCQs)",
        "Ground training guidance for PSI physical test",
        "Concise revision notes & formula charts",
        "Weekly topic-wise speed tests"
      ],
      fee: "₹38,000",
      nextBatch: "20th January, 2026"
    },
    {
      id: "saralseva",
      title: "MPSC Saralseva",
      subtitle: "Government Recruitment Exams",
      badgeColor: "orange",
      category: "Recruitment",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      alt: "MPSC Saralseva Group C Coaching",
      duration: "4 - 5 Months",
      mode: "Offline Classroom",
      medium: "Marathi",
      eligibility: "12th Pass / Graduate as per post",
      overview: "Rapid preparation for Talathi, Clerk Typist, Tax Assistant, Forest Guard, Excise Sub-Inspector, and Zilla Parishad examinations with heavy emphasis on Marathi, English, Math, and General Knowledge.",
      aboutExam: {
        heading: "About MPSC Saralseva & Direct Recruitment Exams",
        conductingBody: "Maharashtra Public Service Commission / TCS-IBPS Recruitment Boards",
        intro: "Saralseva is the unified direct recruitment framework utilized across Government of Maharashtra departments, municipal corporations, revenue offices, and zilla parishads for Group B (Junior), Group C, and Group D cadres. Notable exams include Talathi Bharti, Clerk Typist, Tax Assistant, Excise Sub-Inspector, Town Planning Assistants, BMC Ward Officers, and Zilla Parishad recruitment.",
        patternOverview: "Conducted predominantly as a single-stage Computer Based Test (CBT) under TCS / IBPS pattern consisting of 100 multiple choice questions carrying 200 marks, with 2 hours allotted duration.",
        stages: [
          {
            stageNumber: "01",
            title: "Computer Based Written Test (CBT)",
            type: "Objective Examination (100 MCQs)",
            marks: "200 Marks (2 Hours)",
            details: "Comprises 4 equal sections of 25 questions (50 marks each): Marathi Language & Grammar (50 Marks), English Grammar & Vocabulary (50 Marks), General Knowledge & Current Events (50 Marks), and Quantitative Aptitude & Intellectual Reasoning (50 Marks)."
          },
          {
            stageNumber: "02",
            title: "Skill Test / Typing Test (Post-Specific)",
            type: "Typing / Physical as applicable",
            marks: "Qualifying",
            details: "For Clerk Typist posts: Commercial typing test GCC-TBC (Marathi 30 wpm or English 40 wpm). For Forest Guard: Physical endurance walking test. For Technical posts: Practical validation."
          },
          {
            stageNumber: "03",
            title: "Document Verification",
            type: "Scrutiny & Merit Listing",
            marks: "Final Allotment",
            details: "District-wise and department-wise selection is executed strictly based on written exam CBT merit and reservation category verification."
          }
        ],
        services: [
          "Talathi (Revenue Department)",
          "Clerk Typist (All State Departments)",
          "Tax Assistant (Sales Tax & Finance)",
          "Excise Sub-Inspector / Jawan",
          "Zilla Parishad Gramsevak & Health Staff",
          "Municipal Corporation Assistant Ward Officers"
        ],
        syllabusUrl: "https://deoreacademy.com/notes/saralseva-syllabus.pdf",
        syllabusName: "Deore Academy Saralseva Syllabus PDF"
      },
      eligibilityAttempts: {
        age: {
          minAge: "18 Years",
          general: "18 to 38 Years",
          obc: "18 to 43 Years",
          scSt: "18 to 43 Years",
          relaxations: "Additional age relaxations up to 45 years for project-affected, sports persons, and ex-servicemen as per government orders."
        },
        education: {
          degree: "Varies by post category: Talathi requires Graduation in any discipline; Clerk-Typist requires 10th/12th/Graduate with typing certification; Engineering posts require Diploma/Degree in Civil/Mechanical/Electrical.",
          technical: "Clerk-Typist requires GCC-TBC Marathi (30 wpm) or English (40 wpm) plus MS-CIT computer certification.",
          finalYear: "Candidates must possess completed passing certificate as on the last date of official application."
        },
        attempts: {
          general: "Unlimited Attempts",
          obc: "Unlimited Attempts",
          scSt: "Unlimited Attempts",
          rule: "No restriction on the number of attempts; aspirants can apply for all announced recruitments within the age limit."
        },
        summaryBadge: "Age: 18–38 Yrs • 10th/12th/Graduate • Unlimited Attempts"
      },
      subjects: [
        "Marathi Language & Grammar",
        "General English Grammar",
        "Quantitative Aptitude & Reasoning",
        "General Knowledge & Current Affairs"
      ],
      features: [
        "Previous 10 years solved TCS / IBPS pattern papers",
        "Speed math shortcuts and mental calculation tricks",
        "Daily test series on mobile app",
        "Pocket formula book and current affairs capsules"
      ],
      fee: "₹18,000",
      nextBatch: "15th February, 2026"
    },
    {
      id: "group-b-group-c",
      title: "Group B and Group C",
      subtitle: "Combined Examination (Non-Gazetted)",
      badgeColor: "purple",
      category: "Subordinate Services",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      alt: "MPSC Group B and Group C Combined Examination Coaching Nashik",
      duration: "6 - 9 Months",
      mode: "Offline Classroom",
      medium: "Marathi & English",
      eligibility: "Any Graduate / Final Year (Age: 18 - 38 Yrs)",
      overview: "Comprehensive classroom coaching for MPSC Non-Gazetted Group B & Group C Combined Examination (संयुक्त पूर्व व मुख्य परीक्षा). Covers preliminary examination and specialized mains papers for PSI, STI, ASO, Sub-Registrar, Tax Assistant, Clerk-Typist, and Excise Sub-Inspector.",
      aboutExam: {
        heading: "About MPSC Group B & Group C Combined Examination",
        conductingBody: "Maharashtra Public Service Commission (MPSC)",
        intro: "The Maharashtra Public Service Commission conducts the Non-Gazetted Group B and Group C Services Combined Competitive Examination for major administrative executive and ministerial positions across Maharashtra state departments. Aspirants appear for a single joint preliminary screening examination followed by dedicated main exams for their chosen cadres.",
        patternOverview: "The revised MPSC examination pattern features a Single Combined Preliminary Exam (100 Marks, 100 MCQs) followed by the Combined Main Examination comprising Paper 1 (Marathi & English - 200 Marks) and Paper 2 (General Studies & Cadre Specialization - 200 Marks).",
        stages: [
          {
            stageNumber: "01",
            title: "Combined Preliminary Exam (संयुक्त पूर्व परीक्षा)",
            type: "Single Joint Objective Paper (OMR)",
            marks: "100 Marks (100 MCQs, 1 Hour)",
            details: "Common for all Group B and Group C cadres. Covers Current Affairs (Maharashtra, National & Global), History, Geography (Maharashtra & India), Indian Constitution & Polity, Economy & Planning, General Science, and Intellectual Aptitude & Numerical Ability."
          },
          {
            stageNumber: "02",
            title: "Combined Main Exam (संयुक्त मुख्य परीक्षा)",
            type: "Two Objective Papers (400 Marks Total)",
            marks: "Paper 1 (200 M) + Paper 2 (200 M)",
            details: "Paper 1: Marathi (100 Marks) & English (100 Marks) language proficiency and grammar. Paper 2: General Studies, Reasoning, along with cadre-specific acts, administration, and regulatory provisions."
          },
          {
            stageNumber: "03",
            title: "Post-Specific Skill / Physical Test",
            type: "Qualifying Skill & Fitness Tests",
            marks: "Physical (PSI) / Typing (Clerk & Tax Asst)",
            details: "For Police Sub-Inspector (PSI): Physical efficiency ground test (70 Marks qualifying) and 40-mark interview. For Clerk-Typist & Tax Assistant: Typing skill test (Marathi 30 wpm / English 40 wpm). For STI, ASO, Sub-Registrar: Merit based directly on Mains marks."
          }
        ],
        services: [
          "Police Sub-Inspector - PSI (Home Dept - Group B)",
          "State Tax Inspector - STI (Finance Dept - Group B)",
          "Assistant Section Officer - ASO (Mantralaya - Group B)",
          "Sub-Registrar / Stamp Inspector (Revenue Dept - Group B)",
          "Tax Assistant (State Sales Tax Dept - Group C)",
          "Clerk-Typist (Various State Departments - Group C)",
          "Sub-Inspector State Excise (Excise Dept - Group C)",
          "Technical Assistant & Industry Inspector (Group C)"
        ],
        syllabusUrl: "https://deoreacademy.com/notes/combine-exam-syllabus.pdf",
        syllabusName: "Deore Academy MPSC Group B & Group C Combined Syllabus PDF"
      },
      eligibilityAttempts: {
        age: {
          minAge: "18 / 19 Years (Post-dependent)",
          general: "18 to 38 Years (PSI: 19 to 31 Years for Open)",
          obc: "18 to 43 Years (PSI: 19 to 34 Years for Reserved)",
          scSt: "18 to 43 Years (PSI: 19 to 34 Years for SC/ST)",
          notes: "Upper age limit for Police Sub-Inspector (PSI) is 31 years for Open and 34 years for Reserved categories."
        },
        education: {
          degree: "Bachelor's degree in any discipline from a recognized university / appearing in final semester.",
          technical: "For Clerk-Typist & Tax Assistant: GCC-TBC Marathi 30 wpm or English 40 wpm certificate.",
          marathi: "Fluent working knowledge of Marathi language is mandatory."
        },
        physical: {
          applicable: "Mandatory for Police Sub-Inspector (PSI) and Excise Sub-Inspector",
          menHeight: "165 cm minimum",
          menChest: "79 cm unexpanded (with minimum 5 cm expansion)",
          womenHeight: "157 cm minimum (no chest measurement requirement)"
        },
        attempts: {
          general: "6 Attempts",
          obc: "9 Attempts",
          scSt: "Unlimited Attempts up to upper age limit",
          rule: "MPSC guidelines allow 6 attempts for General and 9 attempts for OBC across non-gazetted services."
        },
        summaryBadge: "Age: 18–38 Yrs • Any Graduate • Typing for Clerical Posts"
      },
      subjects: [
        "Maharashtra & Indian History, Geography, Polity & Economy",
        "General Science, Mental Ability & Arithmetic Reasoning",
        "Marathi Language, Grammar & Comprehension",
        "English Language, Grammar & Vocabulary",
        "Cadre Laws & Special Acts (for PSI, STI, ASO & Group C)"
      ],
      features: [
        "Comprehensive syllabus coverage for both Group B & Group C posts",
        "Over 12,000+ topic-wise objective MCQs and test drills",
        "Dedicated batches for Marathi and English grammar mastery",
        "Specialized guidance for typing test and physical standards"
      ],
      fee: "₹42,000",
      nextBatch: "June / July 2027"
    },
    {
      id: "other-competitive-exams",
      title: "Other Competitive Exams",
      subtitle: "SSC • Banking • Railway • Defense",
      badgeColor: "blue",
      category: "Central & State Recruitment",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=800&q=80",
      alt: "SSC, Banking, Railway and Other Competitive Exams Coaching Nashik",
      duration: "4 - 8 Months",
      mode: "Offline Classroom",
      medium: "English, Hindi & Marathi",
      eligibility: "10th / 12th / Graduate (as per exam)",
      overview: "Dedicated coaching for all major central and state recruitment exams including SSC (CGL, CHSL, MTS, GD), Banking (IBPS, SBI PO/Clerk, RRB), Railways (RRB NTPC, Group D), and other competitive examinations with specialized speed-maths, reasoning tricks, and in-house CBT exam lab.",
      aboutExam: {
        heading: "About Central Competitive Exams (SSC, Banking, RRB)",
        conductingBody: "Staff Selection Commission, IBPS, State Bank of India, Railway Recruitment Boards",
        intro: "Dedicated coaching for central recruitment examinations offering secure career prospects across nationalized banks, central government ministries, defense establishments, and Indian Railways. Exams feature fast-paced Computer Based Tests (CBT) emphasizing speed mathematics, logical analysis, English comprehension, and general awareness.",
        patternOverview: "Typically structured into Tier-1 Screening CBT followed by Tier-2 Mains CBT, specialized skill/typing tests, and interview for officer cadres (SBI/IBPS PO).",
        stages: [
          {
            stageNumber: "01",
            title: "Tier-1 Preliminary CBT",
            type: "Speed Test Drill",
            marks: "100 to 200 Marks (60 Minutes)",
            details: "Covers Quantitative Aptitude, Logical Reasoning, English Comprehension, and General Awareness. Tests accuracy and speed under tight sectional time limits."
          },
          {
            stageNumber: "02",
            title: "Tier-2 / Mains Examination",
            type: "Advanced CBT + Descriptive",
            marks: "200 to 390 Marks",
            details: "In-depth testing of advanced mathematical reasoning, data interpretation, financial/banking awareness, computer aptitude, and English essay/letter writing."
          },
          {
            stageNumber: "03",
            title: "Interview / Typing Test",
            type: "Cadre-Specific Evaluation",
            marks: "Officer Interview (50-100 Mks) / Qualifying Typing",
            details: "Interview for PO & Officer posts; typing test for clerical and assistant cadres. Direct national merit ranking."
          }
        ],
        services: [
          "SSC CGL: Income Tax Inspector, Central Excise, CBI Sub-Inspector, Auditor",
          "Banking: Probationary Officer (PO), Specialist Officer (SO), Clerical Cadre",
          "Railways: RRB NTPC Station Master, Goods Guard, Junior Engineer",
          "Defense: Combined Defence Services (CDS), AFCAT, CAPF AC"
        ],
        syllabusUrl: "https://deoreacademy.com/notes/combine-exam-syllabus.pdf",
        syllabusName: "Deore Academy Central Exams Syllabus Compendium"
      },
      eligibilityAttempts: {
        age: {
          minAge: "18 to 20 Years",
          general: "SSC CGL: 18-32 Yrs | Banking PO: 20-30 Yrs | Railways: 18-33 Yrs",
          obc: "3 Years Relaxation across all central recruitment exams",
          scSt: "5 Years Relaxation across all central recruitment exams",
          pwd: "10 Years Relaxation"
        },
        education: {
          degree: "Graduation for SSC CGL, Banking PO, and CDS. 10+2 (12th Pass) for SSC CHSL and Banking Clerk. 10th/ITI for SSC MTS and Railway Group D.",
          degreeMarks: "Most exams require pass degree. Some specialized banking roles specify 60% degree marks.",
          finalYear: "Final-year students eligible for select notifications as specified."
        },
        attempts: {
          general: "SBI PO: 4 Attempts | IBPS, SSC & Railways: Unlimited Attempts",
          obc: "SBI PO: 7 Attempts | IBPS, SSC & Railways: Unlimited Attempts",
          scSt: "Unlimited Attempts across all exams",
          rule: "No attempt limit for SSC, IBPS, or Railway exams; candidates can appear until upper age limit."
        },
        summaryBadge: "Age: 18–32 Yrs • 10th/12th/Graduate • Unlimited/Bank Norms"
      },
      subjects: [
        "Quantitative Aptitude & Vedic Maths Shortcuts",
        "Logical & Analytical Reasoning",
        "General English & Comprehensive Grammar",
        "General Awareness, Current Affairs & Computer Aptitude"
      ],
      features: [
        "Specialized computer lab for CBT exam simulation",
        "Daily speed drills and sectional test series",
        "All-India test ranking and performance analytics",
        "Interview prep and personality development workshops"
      ],
      fee: "₹25,000",
      nextBatch: "1st February, 2026"
    }
  ],

  results: [
    {
      id: 1,
      name: "Aditya Patil",
      rank: "AIR 147",
      exam: "UPSC CSE 2023",
      post: "Indian Administrative Service (IAS)",
      quote: "Deore Academy's guidance was instrumental in my success. The test series feedback pinpointed exactly where I was losing marks.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      hometown: "Nashik"
    },
    {
      id: 2,
      name: "Priya Deshmukh",
      rank: "Rank 1",
      exam: "MPSC Rajyaseva 2022",
      post: "Deputy Collector",
      quote: "The structured approach helped me achieve my dream. The faculty at Deore Academy provided unmatched personal mentorship.",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      hometown: "Malegaon, Nashik"
    },
    {
      id: 3,
      name: "Rahul Jadhav",
      rank: "Rank 3",
      exam: "MPSC PSI 2023",
      post: "Police Sub-Inspector",
      quote: "Best coaching institute in Nashik for MPSC preparation. The legal provisions and ground guidance were spot on.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      hometown: "Sinnar, Nashik"
    },
    {
      id: 4,
      name: "Sneha Kulkarni",
      rank: "Rank 5",
      exam: "MPSC STI 2021",
      post: "State Tax Inspector",
      quote: "Faculty support made all the difference in my journey. The study room culture in Deore Academy keeps you deeply focused.",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80",
      hometown: "Nashik Road"
    },
    {
      id: 5,
      name: "Nitin Shinde",
      rank: "Rank 12",
      exam: "MPSC Rajyaseva 2023",
      post: "Tehsildar",
      quote: "Daily answer writing practice and personal evaluation by Deore Sir transformed my Mains score completely.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
      hometown: "Niphad"
    },
    {
      id: 6,
      name: "Pooja Bhamare",
      rank: "AIR 289",
      exam: "UPSC CSE 2022",
      post: "Indian Police Service (IPS)",
      quote: "From Prelims test drills to mock interviews, Deore Academy stood like a rock. Nashik students don't need to go to Delhi or Pune!",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
      hometown: "Nashik"
    }
  ],

  faculty: [
    {
      name: "Shri. Sachin Deore",
      role: "Director & Lead Mentor",
      experience: "18+ Years Experience",
      subjects: "Indian Polity, Governance & Ethics",
      bio: "Pioneer of civil services mentorship in North Maharashtra. Has mentored over 1,500 successful civil servants across India.",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Prof. Rajesh Wagh",
      role: "Senior Faculty",
      experience: "14+ Years Experience",
      subjects: "History & Maharashtra Special",
      bio: "Former MPSC Interview candidate with profound mastery over modern Indian history, freedom movement, and social reformers of Maharashtra.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Dr. Ananya Joshi",
      role: "Subject Head",
      experience: "10+ Years Experience",
      subjects: "Geography, Ecology & Environment",
      bio: "Ph.D. in Environmental Geography. Known for simplified map-based learning and current environmental conventions.",
      avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=400&q=80"
    },
    {
      name: "Mahesh Desale",
      role: "Economics & CSAT Specialist",
      experience: "9+ Years Experience",
      subjects: "Indian Economy & Quantitative Aptitude",
      bio: "Author of popular civil services economy guidebooks. Specializes in decoding Union & State Budgets and Economic Surveys.",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80"
    }
  ],
  testimonials: [
    {
      id: 1,
      name: "Adesh Patil",
      rating: 5,
      stars: "★★★★★",
      role: "MPSC Aspirant",
      source: "Google Review",
      initials: "AP",
      color: "linear-gradient(135deg, #e5a93c 0%, #b45309 100%)",
      textColor: "#0b1528",
      borderColor: "#e5a93c",
      review: "Best institute for MPSC preparation! The teaching quality is excellent, concepts are explained in a very simple way, and regular tests really help in improving performance. The faculty is supportive, motivating, and always ready to guide students. The study material and current affairs notes are very useful for exams. A perfect place for serious MPSC aspirants. Highly recommended!"
    },
    {
      id: 2,
      name: "Sarthak Kumawat",
      rating: 5,
      stars: "★★★★★",
      role: "MPSC Aspirant",
      source: "Google Review",
      initials: "SK",
      color: "linear-gradient(135deg, #0ea5e9 0%, #0369a1 100%)",
      textColor: "#ffffff",
      borderColor: "#38bdf8",
      review: "One of the best coaching classes for MPSC aspirants. Experienced faculty, disciplined environment, and excellent guidance for both prelims and mains. The mock tests and doubt-solving sessions boosted my confidence a lot. The teachers genuinely care about students' progress and motivation. If you are serious about achieving your government job dream, this is the right place!"
    },
    {
      id: 3,
      name: "Ishwar Kothawade",
      rating: 5,
      stars: "★★★★★",
      role: "UPSC & MPSC Student",
      source: "Google Review",
      initials: "IK",
      color: "linear-gradient(135deg, #8b5cf6 0%, #6d28d9 100%)",
      textColor: "#ffffff",
      borderColor: "#a78bfa",
      review: "When I was trying to choose a coaching institute, while the things like the quality of teaching, the faculty, the facilities and the Learning environment. Here I got all of these all qualities at Deore Academy only. The best guidance and friendly as well as supporting academy in Nashik."
    },
    {
      id: 4,
      name: "Vishwajeet Borse",
      rating: 4,
      stars: "★★★★☆",
      role: "UPSC / MPSC Aspirant",
      source: "Google Review",
      initials: "VB",
      color: "linear-gradient(135deg, #10b981 0%, #047857 100%)",
      textColor: "#ffffff",
      borderColor: "#34d399",
      review: "Top Coaching center for upsc mpsc. All faculty very good. Result oriented Approach. My Experience very good. Join deore Academy."
    },
    {
      id: 5,
      name: "Prathamesh Shinde",
      rating: 5,
      stars: "★★★★★",
      role: "MPSC Rajyaseva Student",
      source: "Google Review",
      initials: "PS",
      color: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
      textColor: "#0b1528",
      borderColor: "#f59e0b",
      review: "One of the finest academies in Nashik for competitive exams. Swapnil Sir's teaching methodology and personal mentorship make even complex topics crystal clear. The daily answer writing practice and regular test series helped me build real exam confidence."
    },
    {
      id: 6,
      name: "Pooja Jadhav",
      rating: 5,
      stars: "★★★★★",
      role: "MPSC Group B & C Aspirant",
      source: "Google Review",
      initials: "PJ",
      color: "linear-gradient(135deg, #ec4899 0%, #be185d 100%)",
      textColor: "#ffffff",
      borderColor: "#f472b6",
      review: "Exceptional guidance for Combine Group B and Group C preparation. The faculty provides detailed concept clarity and exam-oriented tricks. Teachers are always approachable for doubts and the library environment is very peaceful."
    },
    {
      id: 7,
      name: "Chetan Bhamare",
      rating: 5,
      stars: "★★★★★",
      role: "UPSC & MPSC Aspirant",
      source: "Google Review",
      initials: "CB",
      color: "linear-gradient(135deg, #6366f1 0%, #4338ca 100%)",
      textColor: "#ffffff",
      borderColor: "#818cf8",
      review: "Best knowledge hub for civil services preparation in Nashik. Swapnil Sir guides every student like a true mentor. The current affairs sessions and high-yield notes helped me tremendously. Genuine result-oriented coaching!"
    },
    {
      id: 8,
      name: "Snehal Sonawane",
      rating: 5,
      stars: "★★★★★",
      role: "MPSC State Services",
      source: "Google Review",
      initials: "SS",
      color: "linear-gradient(135deg, #14b8a6 0%, #0f766e 100%)",
      textColor: "#ffffff",
      borderColor: "#2dd4bf",
      review: "Great learning experience at Deore Academy. The teachers focus on conceptual foundation and disciplined study routines. Mock test evaluations and personal feedback helped me eliminate mistakes in preliminary and mains tests."
    }
  ],

  faqs: [
    {
      question: "Why should an aspirant choose Deore Academy in Nashik?",
      answer: "Deore Academy offers national-standard civil services coaching right here in Nashik. Our students receive daily answer evaluations, curated study kits, 24x7 air-conditioned reading rooms, and direct mentorship from experienced educators without the exorbitant living expenses of Delhi or Pune."
    },
    {
      question: "Are classes available in both English and Marathi mediums?",
      answer: "Yes. We offer dedicated separate batches and study materials in both English and Marathi mediums for UPSC CSE and MPSC State Services."
    },
    {
      question: "Can working professionals or college students join?",
      answer: "Absolutely. We provide early morning (7:30 AM), late evening (6:00 PM), and weekend intensive batches alongside complete access to high-definition recorded lectures on our student portal."
    },
    {
      question: "How does the personal mentorship program work?",
      answer: "Each student is assigned a dedicated faculty mentor who reviews test performance, tracks weak areas, guides monthly targets, and conducts one-on-one answer improvement sessions."
    },
    {
      question: "Do you offer test series and study material separately?",
      answer: "Yes, students who do not attend full classroom batches can enroll exclusively in our Prelims/Mains Test Series and receive our monthly current affairs magazines and syllabus compilations."
    },

  gallery: [
  {
    "id": "photo-1",
    "title": "UPSC & MPSC GS Foundation Lecture",
    "category": "classrooms",
    "categoryName": "Classroom",
    "location": "Ashok Stambh Main Campus",
    "year": "2026",
    "desc": "Sachin Deore Sir conducting an interactive Indian Polity & Governance concept-building session in the multimedia smart hall.",
    "image": "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-2",
    "title": "Annual Rankers Felicitation Ceremony",
    "category": "felicitation",
    "categoryName": "Felicitation",
    "location": "Nashik City Convention Hall",
    "year": "2025",
    "desc": "Honoring our successful candidates selected as Dy. Collector, Tehsildar & Police Sub-Inspectors in the latest MPSC State Services exam.",
    "image": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-3",
    "title": "IAS Officer Mentorship & Ethics Workshop",
    "category": "seminars",
    "categoryName": "Officer Seminar",
    "location": "Deore Academy Auditorium",
    "year": "2026",
    "desc": "Special masterclass on GS Paper IV (Ethics, Integrity & Aptitude) and Mains case studies conducted by a serving civil servant.",
    "image": "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-4",
    "title": "Quiet Study Library & Abhyasika",
    "category": "library",
    "categoryName": "Study Library",
    "location": "3rd Floor Library Wing",
    "year": "2026",
    "desc": "24x7 peaceful, air-conditioned study cubicles equipped with high-speed internet, civil services journals, and reference books.",
    "image": "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-5",
    "title": "Aspirant Preparation & Syllabus Mapping",
    "category": "classrooms",
    "categoryName": "Classroom",
    "location": "Ashok Stambh Campus",
    "year": "2026",
    "desc": "Dedicated aspirants engaging in syllabus decoding, daily current affairs revision, and NCERT foundation mapping.",
    "image": "https://res.cloudinary.com/dphaascu/image/upload/f_auto,q_auto/gallery-14"
  },
  {
    "id": "photo-6",
    "title": "GS Mains Answer Writing & Evaluation Circle",
    "category": "library",
    "categoryName": "Study Library",
    "location": "Discussion Hall 2",
    "year": "2026",
    "desc": "Aspirants participating in time-bound answer writing drills followed by peer review and structural feedback by faculty mentors.",
    "image": "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-7",
    "title": "Constitution Day (Sanvidhan Diwas) Preamble Pledge",
    "category": "celebrations",
    "categoryName": "Celebrations",
    "location": "Main Academic Hall",
    "year": "2025",
    "desc": "Faculty, staff, and aspirants paying homage to Dr. B.R. Ambedkar and taking the sacred Preamble pledge to serve the nation.",
    "image": "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-8",
    "title": "UPSC / MPSC Mock Interview Panel",
    "category": "seminars",
    "categoryName": "Officer Seminar",
    "location": "Executive Board Room",
    "year": "2026",
    "desc": "Distinguished board comprising retired bureaucrats and senior academicians assessing posture, administrative acumen, and presence of mind.",
    "image": "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-9",
    "title": "State Rankers Trophy Presentation",
    "category": "felicitation",
    "categoryName": "Felicitation",
    "location": "Grand Auditorium",
    "year": "2025",
    "desc": "Proud parents and successful candidates receiving gold medals and merit scrolls for outstanding ranks in MPSC Combine 2024.",
    "image": "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-10",
    "title": "Digital Assessment & Computer Test Center",
    "category": "classrooms",
    "categoryName": "Classroom",
    "location": "Lab Wing B",
    "year": "2026",
    "desc": "Online test interface for Prelims negative marking simulations and sectional speed drills with instant analytics.",
    "image": "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-11",
    "title": "1-on-1 Strategy & Diagnostic Session",
    "category": "library",
    "categoryName": "Study Library",
    "location": "Mentor Consultation Cabin",
    "year": "2026",
    "desc": "Senior faculty reviewing student test scorecards, identifying accuracy leaks, and crafting customized micro-schedules.",
    "image": "https://images.unsplash.com/photo-1577495508048-b635879837f1?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-12",
    "title": "Independence Day Flag Hoisting & National Salute",
    "category": "celebrations",
    "categoryName": "Celebrations",
    "location": "Campus Courtyard",
    "year": "2025",
    "desc": "Tricolor flag hoisting ceremony reflecting our institutional commitment to preparing leaders dedicated to public service.",
    "image": "https://images.unsplash.com/photo-1532375810709-75b1da00537c?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-13",
    "title": "PSI Physical Test & Medical Guidance",
    "category": "seminars",
    "categoryName": "Officer Seminar",
    "location": "Seminar Hall",
    "year": "2026",
    "desc": "Guidance session by serving Police Inspectors on physical endurance standards, running drills, and medical clearances.",
    "image": "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-14",
    "title": "Parents Pride & Toppers Sharing Stories",
    "category": "felicitation",
    "categoryName": "Felicitation",
    "location": "Main Seminar Hall",
    "year": "2025",
    "desc": "Emotional sharing session where parents of selected officers inspire new aspirants on patience, hard work, and resilience.",
    "image": "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-15",
    "title": "Editorial Analysis & Current Affairs Workshop",
    "category": "classrooms",
    "categoryName": "Classroom",
    "location": "Lecture Hall A",
    "year": "2026",
    "desc": "Deep dive into international relations, economic survey, and national policies from leading newspapers and government reports.",
    "image": "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-16",
    "title": "Teachers Day & Guru Vandana Ceremony",
    "category": "celebrations",
    "categoryName": "Celebrations",
    "location": "Main Auditorium",
    "year": "2025",
    "desc": "Aspirants expressing heartfelt gratitude to teachers and mentors who guide them through the grueling civil services journey.",
    "image": "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-17",
    "title": "CSAT Speed Aptitude & Reasoning Bootcamp",
    "category": "classrooms",
    "categoryName": "Classroom",
    "location": "Lecture Hall B",
    "year": "2026",
    "desc": "Targeted problem-solving session helping arts and humanities students master numerical aptitude and logic puzzles.",
    "image": "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80"
  },
  {
    "id": "photo-18",
    "title": "Alumni Officer Interactive Q&A Session",
    "category": "felicitation",
    "categoryName": "Felicitation",
    "location": "Conference Room",
    "year": "2026",
    "desc": "Recently appointed DySP and Revenue Officers interacting with the current batch to share booklists, note-making hacks, and motivation.",
    "image": "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=1000&q=80"
  }
]
};
