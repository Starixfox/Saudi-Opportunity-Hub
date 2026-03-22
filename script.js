// ============================================================
// OPPORTUNITY HUB â€” opportunitiesData.js
// Full dataset: 214 entries
//
// Field reference:
//   id                 -unique string, e.g. "SA-001"
//   title              -opportunity name
//   description_short  -1-3 sentence summary
//   type               -grant | tender | accelerator | investment_program | fellowship | other
//   sponsor_institution-issuing organization name(s)
//   country            -e.g. "Saudi Arabia", "UAE", "Global"
//   eligibility_region -Saudi_only | Saudi_GCC | GCC | Global_including_Saudi
//   eligibility_entities-e.g. "startups, SMEs, researchers"
//   funding_amount     -string description of amount
//   funding_type       -grant | equity | contract | in-kind | mixed
//   application_link   -URL string
//   deadline_date      -human-readable string
//   status             -open | closed_but_recurring | closed
//   language           -e.g. "English", "Arabic"
//   notes              -extra notes string (can be empty "")
//   last_verified      -"YYYY-MM-DD"
//   profiles           -array: ["startup","researcher","government","investor","student"]
//   sectors            -array of sector keys
//                         Valid keys: agriculture | energy | healthcare | environment |
//                         industrial | pharma | chemicals | realestate | financial |
//                         transport | mining | tourism | education | ict | innovation
//   isNew              -true = shown in NEW chip & "Recently added" widget
// ============================================================

const opportunitiesData = [
{
    id: "SA-001",
    title: "CST SpaceUp Competition",
    description_short: "Global competition for entrepreneurs developing space-based solutions in environment, infrastructure, and agriculture monitoring. Offers ~$28M in contractual opportunities across six tracks developed with Saudi national partners.",
    type: "tender",
    sponsor_institution: "Communications, Space & Technology Commission (CST) + Saudi Space Agency",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "~USD 28M total contractual opportunities",
    funding_type: "contract",
    application_link: "https://www.cst.gov.sa/en/about/program-and-initiatives/spaceup-competition",
    deadline_date: "2025 edition closed; 2026 edition tentatively planned",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "environment", "agriculture"],
    isNew: false
  },
  {
    id: "SA-002",
    title: "EWC Space Technologies Track (CST)",
    description_short: "Space-specific track within the Entrepreneurship World Cup, organized by CST with Monsha'at and Misk Foundation. Offers USD 100K per winner across four challenge categories.",
    type: "accelerator",
    sponsor_institution: "CST + Monsha'at + Misk Foundation + GEN",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "USD 100K per winning startup (4 winners); total EWC prizes USD 1.5M",
    funding_type: "grant",
    application_link: "https://www.entrepreneurshipworldcup.com",
    deadline_date: "2025 edition concluded; next cycle expected 2026",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "education", "innovation"],
    isNew: false
  },
  {
    id: "SA-003",
    title: "Custodian of the Two Holy Mosques Scholarship - Space Fields",
    description_short: "Government scholarship program with a space-specific track managed via CST. Covers full tuition, living expenses, and medical insurance at top global universities.",
    type: "fellowship",
    sponsor_institution: "Ministry of Education + CST + Saudi Space Agency",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "students",
    funding_amount: "Full tuition + living + medical insurance (varies by university)",
    funding_type: "grant",
    application_link: "https://www.cst.gov.sa/en/about/program-and-initiatives/custodian-of-the-two-holy-mosques-space",
    deadline_date: "Annual cycle; check CST website for current year deadlines",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["student"],
    sectors: ["education", "ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-004",
    title: "RDIA Research Grants- National Priorities",
    description_short: "Multi-program research grants from Saudi RDI Authority supporting basic science, applied research, emerging investigators, and flagship research aligned with national priorities including space-adjacent fields.",
    type: "grant",
    sponsor_institution: "Research, Development and Innovation Authority (RDIA)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "universities, researchers, SMEs, government",
    funding_amount: "Varies by program",
    funding_type: "grant",
    application_link: "https://saudiminds.rdia.gov.sa",
    deadline_date: "Rolling calls per priority area",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "government"],
    sectors: ["energy", "healthcare", "environment", "ict"],
    isNew: false
  },
  {
    id: "SA-005",
    title: "KAUST Innovation Fund",
    description_short: "Early-stage venture capital fund investing in deep-tech startups from KAUST and international spin-ins. Sectors include energy, environment, advanced materials, robotics/ICT, and health.",
    type: "investment_program",
    sponsor_institution: "King Abdullah University of Science and Technology (KAUST)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Seed (<USD 200K) to early-stage (up to USD 2M)",
    funding_type: "equity",
    application_link: "https://innovation.kaust.edu.sa/entrepreneurs/kaust-innovation-ventures/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["energy", "healthcare", "environment", "innovation"],
    isNew: false
  },
  {
    id: "SA-006",
    title: "Jameel Deeptech Initiative",
    description_short: "26-week venture-building initiative offering SAR 2.25M in prize money, transforming R&D STEM projects into market-ready solutions.",
    type: "accelerator",
    sponsor_institution: "Community Jameel + Monsha'at (StartSmart Saudi)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "universities, researchers, startups",
    funding_amount: "SAR 2,250,000 total prize pool",
    funding_type: "grant",
    application_link: "https://deeptech.startsmartsaudi.com",
    deadline_date: "Check website for next call",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-007",
    title: "Misk Accelerator",
    description_short: "Zero-equity 12-week accelerator for seed-stage tech startups seeking to scale in the Saudi market. Provides mentorship, resources, and access to investor networks.",
    type: "accelerator",
    sponsor_institution: "Misk Foundation (Mohammed bin Salman Foundation)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Non-financial (mentorship, network, resources); zero equity",
    funding_type: "in-kind",
    application_link: "https://hub.misk.org.sa/programs/entrepreneurship/misk-accelerator/",
    deadline_date: "Annual cohorts; Cohort 11 in 2025",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "education"],
    isNew: false
  },
  {
    id: "SA-008",
    title: "Monsha'at SME Programs (Accelerators & Grants)",
    description_short: "Suite of accelerator programs and non-dilutive grants from Saudi SME authority, extended to high-tech SMEs including deeptech and advanced tech sectors.",
    type: "grant",
    sponsor_institution: "Monsha'at (General Authority for Small & Medium Enterprises)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Varies by program; non-dilutive grants + in-kind",
    funding_type: "grant",
    application_link: "https://www.monshaat.gov.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["financial", "innovation", "ict"],
    isNew: false
  },
  {
    id: "SA-009",
    title: "Saudi Space Academy Training Programs",
    description_short: "Professional training programs by the Saudi Space Agency covering satellite technology, remote sensing, and space mission operations.",
    type: "fellowship",
    sponsor_institution: "Saudi Space Agency (SSA)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "students, government",
    funding_amount: "Fully funded training programs",
    funding_type: "in-kind",
    application_link: "https://www.ssa.gov.sa/spaceacademyen/",
    deadline_date: "Multiple rounds per year",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["student", "government"],
    sectors: ["education", "ict"],
    isNew: false
  },
  {
    id: "SA-010",
    title: "Neo Space Group - EO Marketplace & Partnerships",
    description_short: "PIF-backed national space company offering partnership and vendor opportunities across satellite communications, Earth observation, and PNT. Saudi's first EO marketplace launched Aug 2025.",
    type: "other",
    sponsor_institution: "Neo Space Group (PIF company)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, investors",
    funding_amount: "Partnership / vendor opportunities",
    funding_type: "mixed",
    application_link: "https://www.neospacegroup.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["ict", "innovation", "agriculture", "environment"],
    isNew: false
  },
  {
    id: "SA-011",
    title: "SVC-backed Venture Capital Funds",
    description_short: "Saudi Venture Capital Company invests in funds that back startups across deeptech, AI, and emerging sectors. Over USD 1B committed since 2018.",
    type: "investment_program",
    sponsor_institution: "Saudi Venture Capital Company (SVC)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_GCC",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Varies by fund (pre-seed to pre-IPO)",
    funding_type: "equity",
    application_link: "https://svc.com.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-012",
    title: "SIDF Industrial Development Financing",
    description_short: "Government industrial development fund offering soft loans up to 75% of project costs for manufacturing and industrial projects, including aerospace-related manufacturing.",
    type: "grant",
    sponsor_institution: "Saudi Industrial Development Fund (SIDF)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "SMEs, startups",
    funding_amount: "Up to 75% of eligible project costs (soft loans)",
    funding_type: "mixed",
    application_link: "https://www.sidf.gov.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["financial", "industrial"],
    isNew: false
  },
  {
    id: "SA-013",
    title: "CST Space Sector Regulations- Public Consultation & Licensing",
    description_short: "CST published comprehensive space sector regulations for public consultation in Dec 2025, covering licensing, space object operations, spaceports, insurance, and national registry.",
    type: "other",
    sponsor_institution: "Communications, Space & Technology Commission (CST)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, government, investors",
    funding_amount: "N/A (regulatory framework)",
    funding_type: "other",
    application_link: "https://www.cst.gov.sa",
    deadline_date: "Finalization expected 2026",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "government", "investor"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-014",
    title: "CST Investor Awareness Workshops (Space)",
    description_short: "Series of investor awareness and engagement initiatives by CST with VCPEA to stimulate private-sector investment in space technologies.",
    type: "other",
    sponsor_institution: "CST + VCPEA",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_GCC",
    eligibility_entities: "investors, startups",
    funding_amount: "N/A (networking / awareness)",
    funding_type: "other",
    application_link: "https://www.cst.gov.sa",
    deadline_date: "Multiple events per year",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["investor", "startup"],
    sectors: ["ict", "financial", "innovation"],
    isNew: false
  },
  {
    id: "SA-015",
    title: "Center for Space Futures (SSA + WEF C4IR)",
    description_short: "Global center hosted by Saudi Space Agency in partnership with the World Economic Forum's C4IR, facilitating public-private dialogue on space innovation and governance.",
    type: "other",
    sponsor_institution: "Saudi Space Agency + World Economic Forum",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, startups, universities, investors",
    funding_amount: "N/A (platform for collaboration)",
    funding_type: "other",
    application_link: "https://ssa.gov.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["government", "startup", "investor", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-016",
    title: "NEOM Space Initiatives",
    description_short: "Partnership and commercial opportunities with NEOM's satellite constellation, ground stations, and space-tech R&D facilities.",
    type: "other",
    sponsor_institution: "NEOM",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, government, investors",
    funding_amount: "N/A (partnership / commercial opportunities)",
    funding_type: "other",
    application_link: "https://www.neom.com/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor", "government"],
    sectors: ["realestate", "environment", "ict", "industrial"],
    isNew: false
  },
  {
    id: "SA-017",
    title: "PIF-backed Space Ventures - Direct Investment",
    description_short: "Investment opportunities through Public Investment Fund's space-focused portfolio including Neo Space Group and related ventures.",
    type: "investment_program",
    sponsor_institution: "Public Investment Fund (PIF)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Varies by deal",
    funding_type: "equity",
    application_link: "https://www.pif.gov.sa/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-018",
    title: "Saudi Space Agency Lunar Exploration Program",
    description_short: "Partnership opportunities for Saudi Arabia's lunar exploration missions and astronaut program.",
    type: "other",
    sponsor_institution: "Saudi Space Agency (SSA)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers, startups, SMEs, government",
    funding_amount: "N/A (partnership opportunities)",
    funding_type: "other",
    application_link: "https://ssa.gov.sa/en/humanSpaceProgram/?path=%2Fhuman-space-program%2F",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "startup", "government"],
    sectors: ["ict", "innovation", "education"],
    isNew: false
  },
  {
    id: "SA-019",
    title: "KAUST Research Grants - Space Technology Track",
    description_short: "Research funding for space-related projects at King Abdullah University of Science and Technology.",
    type: "grant",
    sponsor_institution: "King Abdullah University of Science and Technology (KAUST)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "universities, researchers",
    funding_amount: "Typically USD 50K-500K per grant",
    funding_type: "grant",
    application_link: "https://www.kaust.edu.sa/en/research",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["energy", "environment", "ict", "education"],
    isNew: false
  },
  {
    id: "SA-020",
    title: "KAFD Startup Hub- Space Track",
    description_short: "Incubation and workspace support for space-tech startups at KAFD innovation center.",
    type: "accelerator",
    sponsor_institution: "KAFD + Monsha'at",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs",
    funding_amount: "In-kind (workspace, mentorship, networking)",
    funding_type: "in-kind",
    application_link: "https://www.kafd.sa/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-021",
    title: "ISU Executive Space Course-Riyadh (ESC26)",
    description_short: "Four-day intensive executive program covering key dimensions of the space ecosystem, rescheduled to 12-15 April 2026 in Riyadh with Saudi Space Academy as Knowledge Partner.",
    type: "fellowship",
    sponsor_institution: "International Space University (ISU) + Saudi Space Academy",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, investors, startups, universities",
    funding_amount: "Fee-based program (executive education)",
    funding_type: "other",
    application_link: "https://www.isunet.edu/esc26-saudi-arabia/",
    deadline_date: "12-15 April 2026",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["government", "investor", "startup", "researcher"],
    sectors: ["education", "ict"],
    isNew: false
  },
  {
    id: "SA-022",
    title: "Monsha'at AI Startup Support Program",
    description_short: "Non-dilutive grants of SAR 250K-2.5M covering 70-90% of project costs for Saudi AI startups; 90% coverage rate for female founders.",
    type: "grant",
    sponsor_institution: "Monsha'at",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs",
    funding_amount: "SAR 250K- 2.5M (70-90% cost coverage)",
    funding_type: "grant",
    application_link: "https://www.monshaat.gov.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "financial"],
    isNew: false
  },
  {
    id: "SA-023",
    title: "KACST Satellite R&D Programs",
    description_short: "Saudi Arabia's primary satellite design institution with 17 launched satellites. Offers R&D collaboration, joint development, and technology transfer programs.",
    type: "grant",
    sponsor_institution: "King Abdulaziz City for Science and Technology (KACST)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "universities, researchers, government",
    funding_amount: "Varies by program",
    funding_type: "grant",
    application_link: "https://www.kacst.edu.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-024",
    title: "TAQNIA Space-Satellite Manufacturing JVs",
    description_short: "PIF-owned Saudi Technology Development and Investment Company with satellite manufacturing joint ventures; partner for technology localization and commercial satellite opportunities.",
    type: "other",
    sponsor_institution: "TAQNIA Space (PIF)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, investors",
    funding_amount: "N/A (JV and commercial partnership opportunities)",
    funding_type: "equity",
    application_link: "https://www.taqniaspace.com.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["industrial", "ict"],
    isNew: false
  },
  {
    id: "SA-025",
    title: "Sanabil 500 Global Accelerator",
    description_short: "MENA-focused accelerator run by 500 Global and Sanabil Investments (PIF). Batch 10 graduated December 2025; Batch 11 expected H1 2026.",
    type: "accelerator",
    sponsor_institution: "500 Global + Sanabil Investments (PIF)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups",
    funding_amount: "Investment + program support (terms vary per batch)",
    funding_type: "equity",
    application_link: "https://500.co/founders/mena/seed-accelerator",
    deadline_date: "Batch 11 expected H1 2026; check 500 Global website",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["financial", "innovation"],
    isNew: false
  },
  {
    id: "SA-026",
    title: "stc InspireU Accelerator",
    description_short: "Saudi Telecom Company's startup accelerator; 90+ digital ventures supported since 2017, including HAPS/Zephyr stratospheric connectivity partnership with Airbus.",
    type: "accelerator",
    sponsor_institution: "stc (Saudi Telecom Company)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups",
    funding_amount: "Investment + stc ecosystem access",
    funding_type: "equity",
    application_link: "https://www.stc.com/content/stcgroupwebsite/sa/en/inspire-u/apply-now.html",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "financial"],
    isNew: false
  },
  {
    id: "SA-027",
    title: "Flat6Labs Jeddah Accelerator",
    description_short: "Seed-stage accelerator in Jeddah providing USD 10-20K investment for 10-20% equity, supporting early-stage tech startups.",
    type: "accelerator",
    sponsor_institution: "Flat6Labs",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups",
    funding_amount: "USD 10-20K for 10-20% equity",
    funding_type: "equity",
    application_link: "https://flat6labs.com/Location/ksa/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "financial"],
    isNew: false
  },
  {
    id: "SA-028",
    title: "SDAIA National AI Grants & Pilots",
    description_short: "Grants and pilot programs under Saudi Arabia's SAR 20B National Strategy for Data and AI, supporting AI development including space-data and satellite analytics applications.",
    type: "grant",
    sponsor_institution: "Saudi Data and AI Authority (SDAIA)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs, universities, researchers",
    funding_amount: "Varies by program (part of SAR 20B national strategy)",
    funding_type: "grant",
    application_link: "https://sdaia.gov.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-029",
    title: "AstroLabs Saudi Incubator",
    description_short: "Landing pad and incubation hub for international tech companies entering the Saudi market, with workspace and market-entry support in Riyadh.",
    type: "accelerator",
    sponsor_institution: "AstroLabs",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "In-kind (workspace, legal setup, market entry support)",
    funding_type: "other",
    application_link: "https://www.astrolabs.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-030",
    title: "Alat Electronics & Semiconductor Opportunities",
    description_short: "USD 100B PIF-backed electronics manufacturing company relevant for space-grade components, sensors, and semiconductor supply chain.",
    type: "other",
    sponsor_institution: "Alat (PIF)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, investors",
    funding_amount: "N/A (partnership / commercial opportunities)",
    funding_type: "equity",
    application_link: "https://www.alat.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["industrial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-031",
    title: "RDIA Emerging Investigator Program",
    description_short: "Early-career researcher funding from Saudi RDI Authority for space-adjacent fields including AI, environment, and advanced technology.",
    type: "grant",
    sponsor_institution: "Research, Development and Innovation Authority (RDIA)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "researchers, universities",
    funding_amount: "Varies by project",
    funding_type: "grant",
    application_link: "https://saudiminds.rdia.gov.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["energy", "healthcare", "environment", "education"],
    isNew: false
  },
  {
    id: "SA-032",
    title: "CST Regulatory Sandbox for Space Activities",
    description_short: "Controlled regulatory environment allowing space technology companies to test products and services in Saudi Arabia under relaxed regulations.",
    type: "other",
    sponsor_institution: "Communications, Space & Technology Commission (CST)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, government",
    funding_amount: "N/A (regulatory facilitation)",
    funding_type: "other",
    application_link: "https://www.cst.gov.sa/en/about/program-and-initiatives/Communications-Space-Technology-Regulatory-Sandbox",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-033",
    title: "Saudi Space Agency National Grants Program 2026",
    description_short: "SSA annual grants supporting Saudi entities in space science, technology, and applications R&D with funding up to SAR 5M per project.",
    type: "grant",
    sponsor_institution: "Saudi Space Agency (SSA)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "universities, startups, SMEs, research centers",
    funding_amount: "Up to SAR 5,000,000 per project",
    funding_type: "grant",
    application_link: "https://ssa.gov.sa",
    deadline_date: "Annual cycle; check SSA portal for 2026 dates",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "startup", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-034",
    title: "RDIA Space Technology Innovation Grant",
    description_short: "Research, Development and Innovation Authority grants for space technology R&D projects by Saudi companies and universities, up to SAR 10M.",
    type: "grant",
    sponsor_institution: "Research, Development and Innovation Authority (RDIA)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "universities, startups, SMEs, corporations",
    funding_amount: "Up to SAR 10,000,000",
    funding_type: "grant",
    application_link: "https://saudiminds.rdia.gov.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "startup"],
    sectors: ["energy", "healthcare", "environment", "ict"],
    isNew: false
  },
  {
    id: "SA-035",
    title: "Saudi Space Agency-Commercial Space License Window",
    description_short: "CST/SSA licensing portal for commercial launch operators, satellite operators, and remote sensing companies, following the 2025 Space Regulations.",
    type: "other",
    sponsor_institution: "Saudi Space Agency (SSA) + CST",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations, government",
    funding_amount: "N/A (regulatory / licensing)",
    funding_type: "other",
    application_link: "https://ssa.gov.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "government", "investor"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-036",
    title: "Red Sea Global Innovation Challenge - Sustainability Tech",
    description_short: "Annual open innovation challenge by Red Sea Global inviting startups and scale-ups with satellite-data or EO solutions for sustainable tourism and coastal management.",
    type: "tender",
    sponsor_institution: "Red Sea Global",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Variable / undisclosed (pilot contracts)",
    funding_type: "contract",
    application_link: "https://www.redseaglobal.com",
    deadline_date: "Annual call; check RSG website",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["environment", "tourism", "innovation"],
    isNew: false
  },
  {
    id: "SA-037",
    title: "Aramco Entrepreneurship Center (Wa'ed)-Ventures",
    description_short: "Saudi Aramco's corporate venture and startup support arm offering equity investment and business development support for energy-adjacent and deeptech startups.",
    type: "investment_program",
    sponsor_institution: "Saudi Aramco (Wa'ed Ventures)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_GCC",
    eligibility_entities: "startups",
    funding_amount: "Variable / undisclosed",
    funding_type: "equity",
    application_link: "https://www.waed.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["energy", "financial", "innovation"],
    isNew: false
  },
  {
    id: "SA-038",
    title: "SABIC Ventures-Deeptech Co-investment",
    description_short: "SABIC's corporate venture capital arm investing in advanced materials, chemicals, and manufacturing technology startups with supply chain relevance to space.",
    type: "investment_program",
    sponsor_institution: "SABIC",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Variable / undisclosed",
    funding_type: "equity",
    application_link: "https://ventures.sabic.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["energy", "chemicals", "innovation", "industrial"],
    isNew: false
  },
  {
    id: "SA-039",
    title: "Misk Innovation - Space & DeepTech Cohort",
    description_short: "Misk Foundation cohort program focused on deep technology including space applications, AI, and biotechnology.",
    type: "accelerator",
    sponsor_institution: "Misk Foundation",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, students",
    funding_amount: "Variable / undisclosed (grant + mentorship)",
    funding_type: "grant",
    application_link: "https://hub.misk.org.sa",
    deadline_date: "Annual cohort; dates vary",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "student"],
    sectors: ["ict", "innovation", "education"],
    isNew: false
  },
  {
    id: "SA-040",
    title: "KAFD Fintech & Innovation Hub - Space Finance Track",
    description_short: "King Abdullah Financial District innovation hub offering co-working, acceleration, and investor access for fintech and deeptech companies including space-finance applications.",
    type: "accelerator",
    sponsor_institution: "KAFD",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs",
    funding_amount: "In-kind (workspace, legal setup, market entry support)",
    funding_type: "other",
    application_link: "https://www.kafd.sa/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-041",
    title: "SSA Astronaut Program - Research Payload Opportunities",
    description_short: "Saudi Space Agency astronaut program featuring Rayyanah Barnawi and Ali AlQarni; open calls for research payloads and scientific experiments for future missions.",
    type: "grant",
    sponsor_institution: "Saudi Space Agency (SSA)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "researchers, universities",
    funding_amount: "In-kind (launch and mission support)",
    funding_type: "in-kind",
    application_link: "https://ssa.gov.sa/en/humanSpaceProgram/?path=%2Fhuman-space-program%2F",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-042",
    title: "Monsha'at Export Development Program-Space Products",
    description_short: "Monsha'at export development grants supporting Saudi SMEs in internationalizing products and services, including space technology companies.",
    type: "grant",
    sponsor_institution: "Monsha'at",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Up to 50% of eligible export development costs",
    funding_type: "grant",
    application_link: "https://www.monshaat.gov.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "industrial"],
    isNew: false
  },
  {
    id: "SA-043",
    title: "PIF - ROSHN Smart Cities Technology Partners",
    description_short: "ROSHN, PIF's national housing developer, actively sources smart city technology partners including satellite connectivity and EO data analytics providers.",
    type: "tender",
    sponsor_institution: "ROSHN (PIF)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial contracts (variable)",
    funding_type: "contract",
    application_link: "https://www.roshn.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["realestate", "ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-044",
    title: "KAUST - CEMSE Space Systems Research Group",
    description_short: "Collaboration grants and visiting researcher fellowships within KAUST's Computer, Electrical and Mathematical Science & Engineering Division for space systems.",
    type: "fellowship",
    sponsor_institution: "King Abdullah University of Science and Technology (KAUST)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "researchers, universities, students",
    funding_amount: "Fellowship stipend + research funding (varies)",
    funding_type: "grant",
    application_link: "https://cemse.kaust.edu.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "student"],
    sectors: ["education", "industrial", "environment"],
    isNew: false
  },
  {
    id: "SA-045",
    title: "stc Ventures-Space & Connectivity Investment",
    description_short: "stc Group's corporate venture arm investing in telco-adjacent deeptech including HAPS, satellite connectivity, and IoT startups.",
    type: "investment_program",
    sponsor_institution: "stc Ventures",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_GCC",
    eligibility_entities: "startups",
    funding_amount: "Variable / undisclosed (seed to Series B)",
    funding_type: "equity",
    application_link: "https://stcventures.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["ict", "financial", "innovation"],
    isNew: false
  },
  {
    id: "SA-046",
    title: "NEOM Tech & Digital Company - Vendor Qualification",
    description_short: "NEOM's technology subsidiary actively qualifies global vendors for satellite backhaul, broadband LEO connectivity, and EO data services.",
    type: "tender",
    sponsor_institution: "NEOM Tech & Digital Company",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial contracts (variable)",
    funding_type: "contract",
    application_link: "https://www.neom.com/en-us/about/business",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["realestate", "environment", "ict"],
    isNew: false
  },
  {
    id: "SA-047",
    title: "Supreme Space Council - National Space Strategy Grants",
    description_short: "Strategic implementation grants from the Supreme Space Council for projects directly aligned with the Saudi National Space Policy and Vision 2030 space targets.",
    type: "grant",
    sponsor_institution: "Supreme Space Council",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs, universities, government, corporations",
    funding_amount: "Variable / undisclosed (strategic program funding)",
    funding_type: "grant",
    application_link: "https://ssa.gov.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "SA-048",
    title: "KACST-NASA Joint Research Program",
    description_short: "Bilateral science collaboration between KACST and NASA enabling Saudi researchers to co-publish, share datasets, and participate in joint space science projects.",
    type: "fellowship",
    sponsor_institution: "KACST + NASA",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "researchers, universities",
    funding_amount: "In-kind (research access, data, facilities)",
    funding_type: "in-kind",
    application_link: "https://www.kacst.edu.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher"],
    sectors: ["ict", "innovation", "education"],
    isNew: false
  },
  {
    id: "SA-049",
    title: "Monsha'at National Technology Champions Program",
    description_short: "Flagship program by Monsha'at and Aramco identifying and supporting 100 national technology champions including space-tech startups with grants, mentorship, and corporate access.",
    type: "accelerator",
    sponsor_institution: "Monsha'at + Saudi Aramco",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Grants up to SAR 1M + in-kind support",
    funding_type: "grant",
    application_link: "https://www.monshaat.gov.sa/en",
    deadline_date: "Annual cycle",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "industrial", "financial"],
    isNew: false
  },
  {
    id: "SA-050",
    title: "Vision 2030 Localization Contracts-Space Supply Chain",
    description_short: "Saudi government localization (iktifa) mandate requiring foreign primes to partner with and localize production to Saudi SMEs, creating supply-chain contracts for space components.",
    type: "tender",
    sponsor_institution: "Ministry of Industry + NCIP",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "SMEs, corporations, government",
    funding_amount: "Commercial contracts (variable by project)",
    funding_type: "contract",
    application_link: "https://www.mc.gov.sa/en",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "government"],
    sectors: ["industrial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-001",
    title: "UAE National Space Fund",
    description_short: "AED 3 billion (~USD 820M) fund from the UAE Space Agency supporting international and Emirati companies in space sector engineering, operations, and applications.",
    type: "investment_program",
    sponsor_institution: "UAE Space Agency",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "AED 3B (~USD 820M) total fund",
    funding_type: "equity",
    application_link: "https://www.space.gov.ae",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["ict", "innovation", "financial"],
    isNew: false
  },
  {
    id: "GCC-002",
    title: "UAE Space Economic Zones Program",
    description_short: "Integrated program by the UAE Space Agency to support space startups and SMEs through special economic zones with licensing, tax exemptions, and grants.",
    type: "grant",
    sponsor_institution: "UAE Space Agency",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Grants + tax incentives + facilitation",
    funding_type: "grant",
    application_link: "https://www.space.gov.ae",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-003",
    title: "Mohammed Bin Rashid Innovation Fund",
    description_short: "UAE innovation fund financing projects in priority sectors including space, technology, education, renewable energy, and transport, with AED 2B committed.",
    type: "grant",
    sponsor_institution: "Mohammed Bin Rashid Fund (UAE)",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, universities",
    funding_amount: "Up to AED 10M per project (part of AED 2B fund)",
    funding_type: "mixed",
    application_link: "https://www.mbrif.ae",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher"],
    sectors: ["financial", "innovation", "education"],
    isNew: false
  },
  {
    id: "GCC-004",
    title: "Arab Space Pioneers Programme",
    description_short: "UAE Space Agency program building Arab expertise in space science and technologies, targeting young researchers, scientists, and engineers from Arab nations.",
    type: "fellowship",
    sponsor_institution: "UAE Space Agency",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "students, researchers",
    funding_amount: "Fully funded training + stipend",
    funding_type: "grant",
    application_link: "https://www.space.gov.ae/en/MediaHub/News/arab-space-pioneers-programme",
    deadline_date: "Annual cohort",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["student", "researcher"],
    sectors: ["education", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-005",
    title: "Oman Space Accelerator Program (OSAP)",
    description_short: "First national space accelerator in Oman, supporting 10 innovative space-focused startups through an intensive 3-month program.",
    type: "accelerator",
    sponsor_institution: "Oman Space Authority",
    country: "Oman",
    eligibility_region: "GCC",
    eligibility_entities: "startups",
    funding_amount: "In-kind (mentorship, workspace, network) + potential grant",
    funding_type: "in-kind",
    application_link: "https://mtcit.gov.om",
    deadline_date: "Annual; check MTCIT website",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["innovation", "ict"],
    isNew: false
  },
  {
    id: "GCC-006",
    title: "Bahrain NSSA Research Programs",
    description_short: "Research grants and collaboration opportunities with Bahrain's National Space Science Agency programs.",
    type: "grant",
    sponsor_institution: "National Space Science Agency (NSSA), Bahrain",
    country: "Bahrain",
    eligibility_region: "GCC",
    eligibility_entities: "researchers, universities",
    funding_amount: "Varies by program",
    funding_type: "grant",
    application_link: "https://www.nssa.gov.bh",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["education", "innovation"],
    isNew: false
  },
  {
    id: "GCC-007",
    title: "Qatar Foundation Research Grants-Space Applications",
    description_short: "Research funding for space technology and applications through Qatar Foundation programs, particularly National Priorities Research Program (NPRP).",
    type: "grant",
    sponsor_institution: "Qatar Foundation",
    country: "Qatar",
    eligibility_region: "GCC",
    eligibility_entities: "universities, researchers",
    funding_amount: "USD 100K-2M (varies by NPRP track)",
    funding_type: "grant",
    application_link: "https://www.qnrf.org",
    deadline_date: "Annual cycle",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher"],
    sectors: ["education", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-008",
    title: "Kuwait Space Science Center Collaboration Programs",
    description_short: "Partnership opportunities with Kuwait's space research and satellite ground station facilities.",
    type: "other",
    sponsor_institution: "Kuwait Institute for Scientific Research (KISR)",
    country: "Kuwait",
    eligibility_region: "GCC",
    eligibility_entities: "researchers, universities, government",
    funding_amount: "In-kind (facilities and data sharing)",
    funding_type: "in-kind",
    application_link: "https://www.kisr.edu.kw",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-009",
    title: "GCC Satellite Programs-Regional Partnerships",
    description_short: "Collaboration opportunities for regional satellite programs including data sharing, ground segment partnerships, and joint procurement among GCC member states.",
    type: "other",
    sponsor_institution: "Gulf Cooperation Council (GCC) Secretariat",
    country: "GCC",
    eligibility_region: "GCC",
    eligibility_entities: "government, startups, SMEs",
    funding_amount: "In-kind (data, ground infrastructure)",
    funding_type: "other",
    application_link: "https://www.gcc-sg.org",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government", "startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-010",
    title: "UAE National Space Academy Programs",
    description_short: "UAE Space Agency training programs with 77 graduates from first two phases; expanded in 2025 to build Arab space talent pipeline.",
    type: "fellowship",
    sponsor_institution: "UAE Space Agency",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "students, researchers",
    funding_amount: "Fully funded training",
    funding_type: "in-kind",
    application_link: "https://www.space.gov.ae",
    deadline_date: "Annual cohort",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["student", "researcher"],
    sectors: ["education", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-011",
    title: "UAE Planet X Challenge-Emirates Asteroid Mission",
    description_short: "STEM innovation challenge tied to UAE's MBR Explorer spacecraft mission to the asteroid belt, open to Arab students and young professionals.",
    type: "tender",
    sponsor_institution: "Mohammed Bin Rashid Space Centre (MBRSC)",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "students, researchers",
    funding_amount: "Prizes + recognition (variable)",
    funding_type: "grant",
    application_link: "https://www.space.gov.ae",
    deadline_date: "Check MBRSC website for current cycle",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["student", "researcher"],
    sectors: ["education", "innovation"],
    isNew: false
  },
  {
    id: "GCC-012",
    title: "Sirb SAR Satellite Program-Industry Partnerships",
    description_short: "Three UAE SAR satellites entering Critical Design Review in 2026, creating partnership opportunities in ground segment, analytics, and data distribution.",
    type: "other",
    sponsor_institution: "UAE Space Agency + Industry Partners",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial contracts (variable)",
    funding_type: "contract",
    application_link: "https://www.space.gov.ae",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["ict", "innovation", "environment"],
    isNew: false
  },
  {
    id: "GCC-013",
    title: "MBRSC Space Ventures-Partnerships & Collaboration",
    description_short: "Partnership and commercial collaboration across KhalifaSat, MBZ-SAT, and Hope Probe missions with MBRSC for data products and technology development.",
    type: "other",
    sponsor_institution: "Mohammed Bin Rashid Space Centre (MBRSC)",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, universities",
    funding_amount: "In-kind (data, expertise, joint development)",
    funding_type: "in-kind",
    application_link: "https://www.mbrsc.ae",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation", "financial"],
    isNew: false
  },
  {
    id: "GCC-014",
    title: "Space42 Commercial Services (UAE)",
    description_short: "Abu Dhabi-based AI-powered satellite services and geospatial analytics company offering commercial partnerships and data reseller programs.",
    type: "other",
    sponsor_institution: "Space42 (Abu Dhabi)",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial data and service contracts",
    funding_type: "contract",
    application_link: "https://www.space42.ai",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["ict", "innovation", "environment"],
    isNew: false
  },
  {
    id: "GCC-015",
    title: "UAE Space Agency-Commercial Remote Sensing License",
    description_short: "UAE regulatory license for commercial satellite remote sensing operations, with fast-track pathway for foreign companies establishing operations in UAE.",
    type: "other",
    sponsor_institution: "UAE Space Agency",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "N/A (regulatory / licensing)",
    funding_type: "other",
    application_link: "https://www.space.gov.ae",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-016",
    title: "Hub71 Space Tech Program-Abu Dhabi",
    description_short: "Abu Dhabi's global tech ecosystem offering USD 500K equity-free funding, subsidized housing, and healthcare for space and deeptech startups relocating to Abu Dhabi.",
    type: "accelerator",
    sponsor_institution: "Hub71 + ADGM",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups",
    funding_amount: "USD 500K equity-free + subsidized housing/healthcare",
    funding_type: "grant",
    application_link: "https://www.hub71.com",
    deadline_date: "Cohort-based; rolling applications",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "financial"],
    isNew: false
  },
  {
    id: "GCC-017",
    title: "Dubai Future Accelerators - Space Track",
    description_short: "Dubai Future Foundation accelerator matching global startups with UAE government entities to co-develop solutions in space data, connectivity, and smart cities.",
    type: "accelerator",
    sponsor_institution: "Dubai Future Foundation",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs",
    funding_amount: "In-kind (government pilot contracts, mentorship)",
    funding_type: "in-kind",
    application_link: "https://www.dubaifuture.ae",
    deadline_date: "Annual cohort",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-018",
    title: "In5 Tech Incubator-Dubai (Space & ICT)",
    description_short: "Dubai Internet City incubator offering 6-12 month programs for deeptech and ICT startups including satellite connectivity and EO data analytics companies.",
    type: "accelerator",
    sponsor_institution: "TECOM Group (Dubai)",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups",
    funding_amount: "In-kind (workspace, mentorship, investor access)",
    funding_type: "in-kind",
    application_link: "https://www.infive.ae",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-019",
    title: "Qatar Center for Entrepreneurship (QCE) Space Grants",
    description_short: "Qatar National Research Fund NPRP grants supporting space science and technology research at Qatari universities.",
    type: "grant",
    sponsor_institution: "Qatar Center for Entrepreneurship / QNRF",
    country: "Qatar",
    eligibility_region: "GCC",
    eligibility_entities: "researchers, universities",
    funding_amount: "USD 100K-2M (NPRP standard ranges)",
    funding_type: "grant",
    application_link: "https://www.qnrf.org",
    deadline_date: "Annual cycle",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-020",
    title: "Oman Technology Fund-Space & ICT Investments",
    description_short: "Oman government VC fund investing in technology startups across the GCC and wider MENA, covering satellite applications and smart infrastructure.",
    type: "investment_program",
    sponsor_institution: "Oman Technology Fund",
    country: "Oman",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Variable / undisclosed (seed to Series A)",
    funding_type: "equity",
    application_link: "https://www.otf.om",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-021",
    title: "Bahrain EDB - Space Sector Investment Facilitation",
    description_short: "Bahrain Economic Development Board actively facilitates FDI for space and deeptech companies establishing MENA operations in Bahrain's low-tax environment.",
    type: "other",
    sponsor_institution: "Bahrain Economic Development Board (EDB)",
    country: "Bahrain",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "N/A (investment facilitation + tax incentives)",
    funding_type: "other",
    application_link: "https://www.bahrainedb.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-022",
    title: "Kuwait KFAS Innovation Fund - Space R&D",
    description_short: "Kuwait Foundation for the Advancement of Sciences grants supporting space science, remote sensing, and satellite applications research.",
    type: "grant",
    sponsor_institution: "Kuwait Foundation for the Advancement of Sciences (KFAS)",
    country: "Kuwait",
    eligibility_region: "GCC",
    eligibility_entities: "researchers, universities",
    funding_amount: "Up to KWD 200K (~USD 650K) per project",
    funding_type: "grant",
    application_link: "https://www.kfas.org",
    deadline_date: "Annual call",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GCC-023",
    title: "UAE-Saudi Arabia Space Science Joint Grants",
    description_short: "Bilateral science cooperation grants between UAE Space Agency and Saudi Space Agency supporting joint research and technology projects.",
    type: "grant",
    sponsor_institution: "UAE Space Agency + Saudi Space Agency",
    country: "GCC",
    eligibility_region: "Saudi_GCC",
    eligibility_entities: "researchers, universities, startups",
    funding_amount: "Variable / undisclosed",
    funding_type: "grant",
    application_link: "https://ssa.gov.sa",
    deadline_date: "Irregular; check both agencies",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher", "startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-001",
    title: "SpaceFounders European Accelerator",
    description_short: "European NewSpace accelerator by CNES, ASI, and Bundeswehr University Munich. Zero-equity program with intensive 12-week curriculum for early-stage space startups globally.",
    type: "accelerator",
    sponsor_institution: "CNES + ASI + Bundeswehr University Munich",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "EUR 50K grant + mentorship + zero equity",
    funding_type: "grant",
    application_link: "https://spacefounders.eu",
    deadline_date: "Annual cohort; check website",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["innovation"],
    isNew: false
  },
  {
    id: "GL-002",
    title: "Seraphim Space Accelerator",
    description_short: "World's largest SpaceTech accelerator based in the UK. Supports global startups from pre-seed to Series A with seed investment, mentorship, and access to Seraphim's corporate network.",
    type: "accelerator",
    sponsor_institution: "Seraphim Space",
    country: "United Kingdom",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Seed investment (variable; typically USD 50K-250K) + program support",
    funding_type: "equity",
    application_link: "https://accelerator.seraphim.vc",
    deadline_date: "Cohort-based; rolling applications",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-003",
    title: "Starburst Aerospace Accelerator",
    description_short: "First and only global aerospace and space accelerator with offices in 10 cities. Connects startups with 60+ corporate partners for contracts, pilots, and co-development.",
    type: "accelerator",
    sponsor_institution: "Starburst Aerospace",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "In-kind (introductions, corporate access, potential investment)",
    funding_type: "other",
    application_link: "https://starburst.aero",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["industrial", "innovation"],
    isNew: false
  },
  {
    id: "GL-004",
    title: "EIC Accelerator - Space Challenge",
    description_short: "EU's flagship innovation accelerator offering EUR 0.5M-12.5M in blended finance (grant + equity). Includes dedicated space and dual-use technology tracks.",
    type: "accelerator",
    sponsor_institution: "European Innovation Council (EIC)",
    country: "European Union",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "EUR 0.5M-2.5M grant + up to EUR 10M equity",
    funding_type: "mixed",
    application_link: "https://eic.ec.europa.eu/eic-funding-opportunities/eic-accelerator_en",
    deadline_date: "Multiple cut-offs per year",
    status: "open",
    language: "English",
    notes: "Non-EU companies can apply through EU-registered entities or partnerships.",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-005",
    title: "ESA Business Incubation Centres (ESA BIC)",
    description_short: "Two-year incubation program at 100+ locations across Europe providing up to EUR 60K in zero-equity funding, technical support, and access to ESA expertise.",
    type: "accelerator",
    sponsor_institution: "European Space Agency (ESA)",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Up to EUR 60K zero-equity + technical support",
    funding_type: "grant",
    application_link: "https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Business_Incubation_Centres",
    deadline_date: "Rolling; varies by BIC location",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "financial"],
    isNew: false
  },
  {
    id: "GL-006",
    title: "Techstars Space Accelerator",
    description_short: "Space-focused accelerator in partnership with US Space Force and NASA JPL, investing $120K in next-gen space technology companies globally.",
    type: "accelerator",
    sponsor_institution: "Techstars + US Space Force",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "USD 120K (USD 20K equity-free + USD 100K convertible note)",
    funding_type: "equity",
    application_link: "https://www.techstars.com/accelerators/space",
    deadline_date: "Annual cohort; applications typically open Jan-Apr",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-007",
    title: "ASPACE / ISU Master of Space Studies Scholarship",
    description_short: "Full tuition scholarship for the International Space University's Master of Space Studies program, with specific tracks for students from developing space nations.",
    type: "fellowship",
    sponsor_institution: "International Space University (ISU) / ASPACE",
    country: "France",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "students",
    funding_amount: "Full tuition scholarship + living stipend",
    funding_type: "grant",
    application_link: "https://www.isunet.edu/mss",
    deadline_date: "Annual; typically Jan-Feb application deadline",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["student"],
    sectors: ["education"],
    isNew: false
  },
  {
    id: "GL-008",
    title: "Y Combinator-Space Technology Track",
    description_short: "Leading startup accelerator accepting space-tech companies in twice-yearly batches with $500K investment for 7% equity.",
    type: "accelerator",
    sponsor_institution: "Y Combinator",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "USD 500K for 7% equity",
    funding_type: "equity",
    application_link: "https://www.ycombinator.com",
    deadline_date: "Twice yearly (W and S batches); check YC website",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-009",
    title: "Plug and Play Space Accelerator",
    description_short: "Corporate innovation platform connecting space startups with Fortune 500 partners and investors through 3-month program in Silicon Valley and Munich.",
    type: "accelerator",
    sponsor_institution: "Plug and Play Tech Center",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Variable / undisclosed (potential investment from corporate partners)",
    funding_type: "equity",
    application_link: "https://www.plugandplaytechcenter.com/innovation-services/startups/accelerator-programs",
    deadline_date: "Batch-based; rolling applications",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-010",
    title: "SOSV / HAX Space Hardware Accelerator",
    description_short: "Hardware-focused accelerator for space technology companies, providing $250K funding, Shenzhen manufacturing access, and deep technical mentorship.",
    type: "accelerator",
    sponsor_institution: "SOSV / HAX",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "USD 250K for ~10% equity",
    funding_type: "equity",
    application_link: "https://hax.co",
    deadline_date: "Rolling applications",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["financial", "industrial", "innovation"],
    isNew: false
  },
  {
    id: "GL-011",
    title: "Techstars Earth Accelerator",
    description_short: "Sustainability-focused accelerator accepting space companies working on climate and Earth observation applications with $120K investment.",
    type: "accelerator",
    sponsor_institution: "Techstars",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "USD 120K (USD 20K equity-free + USD 100K convertible note)",
    funding_type: "equity",
    application_link: "https://www.techstars.com/accelerators/space",
    deadline_date: "Annual; check Techstars website",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["environment", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-012",
    title: "Creative Destruction Lab (CDL) Space Stream",
    description_short: "Canadian seed-stage accelerator focusing on massively scalable space ventures with technical mentorship from leading scientists and entrepreneurs.",
    type: "accelerator",
    sponsor_institution: "CDL / University of Toronto",
    country: "Canada",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Investment from CDL network (variable)",
    funding_type: "equity",
    application_link: "https://creativedestructionlab.com/streams/space",
    deadline_date: "Annual; applications in spring",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-013",
    title: "Space Generation Advisory Council (SGAC) Programs",
    description_short: "Global network offering scholarships, competitions, and leadership opportunities for space students and young professionals from all countries.",
    type: "fellowship",
    sponsor_institution: "Space Generation Advisory Council (SGAC)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "students, researchers",
    funding_amount: "Scholarships (up to USD 1K\u20135K) + travel grants",
    funding_type: "grant",
    application_link: "https://spacegeneration.org",
    deadline_date: "Multiple programs throughout the year",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["student", "researcher"],
    sectors: ["education", "innovation"],
    isNew: false
  },
  {
    id: "GL-014",
    title: "UNOOSA Space for Women Program",
    description_short: "United Nations program supporting women in space science and technology through training and mentorship, open to women from all UN member states.",
    type: "fellowship",
    sponsor_institution: "UNOOSA (UN Office for Outer Space Affairs)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "researchers, students",
    funding_amount: "Fully funded training programs",
    funding_type: "in-kind",
    application_link: "https://www.unoosa.org/oosa/en/ourwork/topics/spaceforwomen/index.html",
    deadline_date: "Annual calls; varies by program",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "student"],
    sectors: ["education", "ict"],
    isNew: false
  },
  {
    id: "GL-015",
    title: "World Bank Space Economy Lab Initiatives",
    description_short: "Technical assistance and funding for space applications in development, particularly satellite data for sustainable agriculture, disaster response, and infrastructure.",
    type: "grant",
    sponsor_institution: "World Bank",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, universities, researchers",
    funding_amount: "Variable (project grants USD 100K\u20135M+)",
    funding_type: "grant",
    application_link: "https://www.worldbank.org/en/topic/space",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government", "researcher"],
    sectors: ["agriculture", "environment", "financial"],
    isNew: false
  },
  {
    id: "GL-016",
    title: "ITU Satellite Spectrum and Orbital Slot Programs",
    description_short: "International coordination and regulatory support for satellite operators including spectrum allocation, orbital registration, and coordination procedures.",
    type: "other",
    sponsor_institution: "International Telecommunication Union (ITU)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, corporations",
    funding_amount: "N/A (regulatory support)",
    funding_type: "other",
    application_link: "https://www.itu.int/en/ITU-R/space/Pages/default.aspx",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-017",
    title: "ESA Open Space Innovation Platform (OSIP)",
    description_short: "Anyone worldwide can submit space ideas to ESA; selected ideas receive ESA funding and collaboration support. Open calls target specific technology gaps.",
    type: "grant",
    sponsor_institution: "European Space Agency (ESA)",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, researchers, universities",
    funding_amount: "EUR 10K\u2013200K study / co-activities",
    funding_type: "grant",
    application_link: "https://ideas.esa.int",
    deadline_date: "Rolling open challenges + periodic calls",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-018",
    title: "Horizon Europe \u2013 EUSPA Space Downstream Applications Call 2026",
    description_short: "EUR 15M EU call for space data applications using Copernicus, Galileo, and EGNOS. Non-EU organizations from eligible countries can participate as project partners.",
    type: "grant",
    sponsor_institution: "EU Agency for the Space Programme (EUSPA) / EC",
    country: "European Union",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, universities, researchers",
    funding_amount: "EUR 15M total; EUR 1M\u20135M per project",
    funding_type: "grant",
    application_link: "https://www.euspa.europa.eu/opportunities/horizon-europe",
    deadline_date: "2026 call; check EUSPA for exact dates",
    status: "open",
    language: "English",
    notes: "Saudi partners can join consortia led by EU entities.",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-019",
    title: "Horizon Europe \u2013 Space Research Call (Cluster 4)",
    description_short: "EUR 139M across 20 space technology topics in Horizon Europe 2025 research call. Open to international partners including Saudi institutions through consortium agreements.",
    type: "grant",
    sponsor_institution: "European Commission",
    country: "European Union",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers, startups",
    funding_amount: "EUR 139M total; EUR 2M\u201310M per project",
    funding_type: "grant",
    application_link: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-search;programme=HORIZON",
    deadline_date: "Multiple deadlines; check Funding & Tenders portal",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-020",
    title: "NASA SBIR/STTR Program 2026 BAA",
    description_short: "NASA innovation grants transitioning to BAA format; Phase I ~USD 150K, Phase II ~USD 850K for US-based small businesses. Foreign subsidiaries and partnerships may qualify.",
    type: "grant",
    sponsor_institution: "NASA",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Phase I: ~USD 150K; Phase II: ~USD 850K",
    funding_type: "grant",
    application_link: "https://sbir.nasa.gov",
    deadline_date: "Annual calls; multiple topic areas",
    status: "closed_but_recurring",
    language: "English",
    notes: "Primarily US-focused; Saudi partners can participate through US-registered entities.",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-021",
    title: "Karman Fellowship",
    description_short: "15 mid-career space leaders selected annually from 65+ nations for an intensive leadership and innovation program focused on the future of space exploration.",
    type: "fellowship",
    sponsor_institution: "Karman Space Foundation",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "researchers, government, investors",
    funding_amount: "Fully funded fellowship (travel, accommodation, program)",
    funding_type: "in-kind",
    application_link: "https://www.karmanproject.org/fellowship/",
    deadline_date: "Annual; applications typically Mar\u2013Jun",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "government"],
    sectors: ["education", "innovation"],
    isNew: false
  },
  {
    id: "GL-022",
    title: "Copernicus Masters Competition",
    description_short: "Global innovation competition using Copernicus satellite data to develop applications in environment, transport, climate, agriculture, and security sectors.",
    type: "tender",
    sponsor_institution: "EC / EUSPA / DLR",
    country: "European Union",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, researchers, students",
    funding_amount: "EUR 250K+ in prizes (varies by challenge)",
    funding_type: "grant",
    application_link: "https://www.copernicus-masters.com",
    deadline_date: "Annual; typically May\u2013September application window",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher", "student"],
    sectors: ["agriculture", "environment", "ict"],
    isNew: false
  },
  {
    id: "GL-023",
    title: "SpaceX Rideshare \u2013 Transporter Mission Slots",
    description_short: "Commercial smallsat rideshare launch slots on SpaceX Transporter missions at USD 5,950/kg to SSO. Standard pricing regardless of origin country.",
    type: "other",
    sponsor_institution: "SpaceX",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, universities, government",
    funding_amount: "USD 5,950/kg to SSO (commercial pricing)",
    funding_type: "contract",
    application_link: "https://www.spacex.com/rideshare",
    deadline_date: "Rolling / Open (missions quarterly)",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher", "government"],
    sectors: ["ict", "innovation", "transport"],
    isNew: false
  },
  {
    id: "GL-024",
    title: "Planet Labs \u2013 Ground Breaking Grant Program",
    description_short: "Planet's grant initiative providing free satellite imagery data access to academic institutions, non-profits, and NGOs working on sustainable development and climate challenges.",
    type: "grant",
    sponsor_institution: "Planet Labs",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers",
    funding_amount: "Free data access (commercial value USD 100K+ per year)",
    funding_type: "in-kind",
    application_link: "https://www.planet.com/markets/education-and-research/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher"],
    sectors: ["environment", "ict", "agriculture"],
    isNew: false
  },
  {
    id: "GL-025",
    title: "UNOOSA Space4Development Innovation Labs",
    description_short: "UN Office for Outer Space Affairs program providing technical capacity-building, training, and data access grants for developing and emerging space nations.",
    type: "fellowship",
    sponsor_institution: "UNOOSA",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, universities",
    funding_amount: "In-kind (training, data access, technical support)",
    funding_type: "in-kind",
    application_link: "https://www.unoosa.org/oosa/en/ourwork/topics/capacity-building.html",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["government", "researcher"],
    sectors: ["environment", "ict", "education"],
    isNew: false
  },
  {
    id: "GL-026",
    title: "ITU/BDT Connectivity for Space Applications Fellowship",
    description_short: "ITU Telecommunication Development Sector fellowships for engineers and regulators from developing countries to attend space communications workshops.",
    type: "fellowship",
    sponsor_institution: "International Telecommunication Union (ITU)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, researchers",
    funding_amount: "Fully funded fellowship (travel + accommodation)",
    funding_type: "in-kind",
    application_link: "https://www.itu.int/en/ITU-D/Capacity-Building/Pages/default.aspx",
    deadline_date: "Multiple throughout the year",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["government", "researcher"],
    sectors: ["ict", "education"],
    isNew: false
  },
  {
    id: "GL-027",
    title: "Lockheed Martin Space \u2013 Supply Chain Partners",
    description_short: "Lockheed Martin's international supplier and technology partner program, recruiting non-US suppliers for satellite bus, propulsion, avionics, and ground systems.",
    type: "other",
    sponsor_institution: "Lockheed Martin Space",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "SMEs, corporations",
    funding_amount: "Commercial supply contracts (variable)",
    funding_type: "contract",
    application_link: "https://www.lockheedmartin.com/en-us/suppliers.html",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["industrial", "ict"],
    isNew: false
  },
  {
    id: "GL-028",
    title: "Airbus Defence & Space \u2013 Local Partner Program",
    description_short: "Airbus DS partnership program recruiting local industrial partners in emerging space markets for satellite integration, ground systems, and EO analytics.",
    type: "other",
    sponsor_institution: "Airbus Defence & Space",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial contracts + technology transfer",
    funding_type: "contract",
    application_link: "https://www.airbus.com/en/space",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["industrial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-029",
    title: "Thales Alenia Space \u2013 Partnership & Technology Transfer",
    description_short: "Thales Alenia Space collaboration program for industrial partners, offering technology transfer and joint development for satellite systems.",
    type: "other",
    sponsor_institution: "Thales Alenia Space",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial contracts + technology transfer",
    funding_type: "contract",
    application_link: "https://www.thalesaleniaspace.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["industrial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-030",
    title: "OneWeb / Eutelsat LEO Services \u2013 Reseller Program",
    description_short: "Eutelsat OneWeb LEO satellite broadband reseller and integration partner program; open to regional distributors and connectivity solution providers.",
    type: "other",
    sponsor_institution: "Eutelsat OneWeb",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial reseller agreements",
    funding_type: "contract",
    application_link: "https://www.eutelsat.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-031",
    title: "Space Angels \u2013 Angel Investment Network",
    description_short: "Global angel investment network for space ventures connecting founders with high-net-worth investors; Saudi and GCC founders actively welcomed.",
    type: "investment_program",
    sponsor_institution: "Space Angels",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Angel investment (USD 100K\u20132M typical range)",
    funding_type: "equity",
    application_link: "https://www.spaceangels.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["financial", "innovation"],
    isNew: false
  },
  {
    id: "GL-032",
    title: "Space Capital \u2013 Seed and Series A Fund",
    description_short: "New York-based venture capital fund focused exclusively on space infrastructure, satellite technology, and downstream applications. Actively invests globally.",
    type: "investment_program",
    sponsor_institution: "Space Capital",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "USD 500K\u20135M typical investment range",
    funding_type: "equity",
    application_link: "https://www.spacecapital.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-033",
    title: "AWS Space Accelerator",
    description_short: "Amazon Web Services startup accelerator for space companies offering USD 100K AWS credits, technical mentorship, and go-to-market support.",
    type: "accelerator",
    sponsor_institution: "Amazon Web Services (AWS)",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "USD 100K AWS credits + go-to-market support",
    funding_type: "in-kind",
    application_link: "https://aws.amazon.com/startups",
    deadline_date: "Annual; typically H1 applications",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-034",
    title: "Microsoft for Startups \u2013 Space & AI Track",
    description_short: "Microsoft's global startup program offering up to USD 350K Azure cloud credits, GitHub Enterprise, and technical mentorship for space startups.",
    type: "accelerator",
    sponsor_institution: "Microsoft",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Up to USD 350K in Azure cloud credits + tooling",
    funding_type: "in-kind",
    application_link: "https://www.microsoft.com/en-us/startups",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-035",
    title: "International Astronautical Federation \u2013 Global Space Award",
    description_short: "IAF awards recognizing excellence in space science, engineering, and business; open nominations from all IAF member states including Saudi Arabia.",
    type: "other",
    sponsor_institution: "International Astronautical Federation (IAF)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "researchers, startups, government",
    funding_amount: "Award / recognition (no financial prize)",
    funding_type: "other",
    application_link: "https://www.iafastro.org/activities/honours-and-awards/",
    deadline_date: "Annual; nominations close ~April",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "startup", "government"],
    sectors: ["innovation"],
    isNew: false
  },
  {
    id: "GL-036",
    title: "ISRO NewSpace India \u2013 International Launch Services",
    description_short: "NewSpace India Limited commercial launch services via PSLV and SSLV for smallsats and microsats at competitive pricing; open to international customers.",
    type: "other",
    sponsor_institution: "ISRO / NewSpace India Ltd.",
    country: "India",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, universities, government",
    funding_amount: "Commercial launch pricing (variable by payload mass)",
    funding_type: "contract",
    application_link: "https://www.nsilindia.co.in",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-037",
    title: "Breakthrough Energy Ventures \u2013 Climate & EO Investment",
    description_short: "Bill Gates-backed climate-tech venture fund investing in companies using satellite Earth observation and space data for climate change mitigation.",
    type: "investment_program",
    sponsor_institution: "Breakthrough Energy Ventures",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Series A\u2013C (USD 5M\u201350M typical range)",
    funding_type: "equity",
    application_link: "https://www.breakthroughenergy.org/our-work/ventures",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["energy", "environment", "ict"],
    isNew: false
  },
  {
    id: "GL-038",
    title: "GEO Work Programme \u2013 Earth Observation Applications",
    description_short: "Group on Earth Observations work programme funding member countries' earth observation application projects for sustainable development goals.",
    type: "grant",
    sponsor_institution: "Group on Earth Observations (GEO)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, universities, researchers",
    funding_amount: "Variable (in-kind data access + small project grants)",
    funding_type: "in-kind",
    application_link: "https://earthobservations.org",
    deadline_date: "Annual Work Programme cycle",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government", "researcher"],
    sectors: ["environment", "ict", "agriculture"],
    isNew: false
  },
  {
    id: "GL-039",
    title: "JAXA International Top Young Fellowship (ITYF)",
    description_short: "Japan Aerospace Exploration Agency fellowship for outstanding young space researchers from any country, supporting 1\u20132 year research stays at JAXA.",
    type: "fellowship",
    sponsor_institution: "JAXA (Japan Aerospace Exploration Agency)",
    country: "Japan",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "researchers",
    funding_amount: "Monthly stipend ~JPY 362,000 + research budget",
    funding_type: "grant",
    application_link: "https://www.isas.jaxa.jp/en/researchers/ityf/",
    deadline_date: "Annual; typically Oct\u2013Dec application",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["education", "innovation"],
    isNew: false
  },
  {
    id: "GL-040",
    title: "Startupbootcamp \u2013 Smart City & IoT Program",
    description_short: "Global accelerator program targeting smart city and IoT startups including satellite-connected sensor networks and geospatial analytics.",
    type: "accelerator",
    sponsor_institution: "Startupbootcamp",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "EUR 15K grant + EUR 450K in partner perks + workspace",
    funding_type: "grant",
    application_link: "https://www.startupbootcamp.org",
    deadline_date: "Annual cohorts; multiple verticals",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "realestate"],
    isNew: false
  },
  {
    id: "GL-041",
    title: "SSC (Swedish Space Corporation) \u2013 Commercial Services",
    description_short: "SSC's global network of ground stations available for commercial satellite operations including telemetry, tracking, and command services.",
    type: "other",
    sponsor_institution: "Swedish Space Corporation (SSC)",
    country: "Sweden",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, government",
    funding_amount: "Commercial pricing (variable)",
    funding_type: "contract",
    application_link: "https://www.sscspace.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-042",
    title: "ESA BIC \u2013 Global Network Extensions",
    description_short: "ESA's 23 business incubation centres worldwide providing funding, technical support, and office space; new BICs being established in MENA region.",
    type: "accelerator",
    sponsor_institution: "European Space Agency (ESA)",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Up to EUR 60K zero-equity + technical support",
    funding_type: "grant",
    application_link: "https://esa-bic.de",
    deadline_date: "Rolling; varies by location",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-043",
    title: "CNES Space Entrepreneurship Program \u2013 CONECTUS",
    description_short: "French space agency CNES program providing support for startups using CNES technologies or space data, with international partnership options.",
    type: "accelerator",
    sponsor_institution: "CNES (French Space Agency)",
    country: "France",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Variable support (technical + potential grants)",
    funding_type: "in-kind",
    application_link: "https://conectus.fr",
    deadline_date: "Annual call",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-044",
    title: "World Bank \u2013 Digital Development Partnership (Space)",
    description_short: "World Bank program financing satellite broadband and digital infrastructure in developing and emerging economies.",
    type: "grant",
    sponsor_institution: "World Bank",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, corporations",
    funding_amount: "Variable (concessional loans + IFC investment)",
    funding_type: "loan",
    application_link: "https://www.worldbank.org/en/topic/digitaldevelopment",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government"],
    sectors: ["ict", "financial"],
    isNew: false
  },
  {
    id: "GL-045",
    title: "Google.org \u2013 AI for Earth Grants",
    description_short: "Google.org grants for organizations using AI and satellite imagery to address environmental challenges including desertification, deforestation, and food security.",
    type: "grant",
    sponsor_institution: "Google.org",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers, startups",
    funding_amount: "USD 100K\u20131M per grant + Google Cloud credits",
    funding_type: "grant",
    application_link: "https://www.google.org",
    deadline_date: "Rolling; competitive selection",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher", "startup"],
    sectors: ["environment", "agriculture", "ict"],
    isNew: false
  },
  {
    id: "GL-046",
    title: "Maxar Technologies \u2013 WorldView Legion Data Partnership",
    description_short: "Maxar's commercial satellite imagery reseller and partnership program for WorldView Legion 30cm imagery, open to regional distributors.",
    type: "other",
    sponsor_institution: "Maxar Technologies",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial data partnership agreements",
    funding_type: "contract",
    application_link: "https://www.maxar.com/partners",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["ict", "innovation", "environment"],
    isNew: false
  },
  {
    id: "GL-047",
    title: "Spire Global \u2013 Data Services & API Partnership",
    description_short: "Spire's maritime, aviation, and weather data from 120+ LEO satellites available via API; partnership program for value-added resellers and analytics companies.",
    type: "other",
    sponsor_institution: "Spire Global",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial data subscription agreements",
    funding_type: "contract",
    application_link: "https://spire.com/partners",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "transport", "innovation"],
    isNew: false
  },
  {
    id: "GL-048",
    title: "Astroscale \u2013 Active Debris Removal (ADR) Partnerships",
    description_short: "Astroscale's ADRAS-J and ELSA missions create subcontract and partnership opportunities for space sustainability technology providers globally.",
    type: "other",
    sponsor_institution: "Astroscale",
    country: "Japan",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, universities",
    funding_amount: "Commercial contracts + R&D collaboration",
    funding_type: "contract",
    application_link: "https://astroscale.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher"],
    sectors: ["environment", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-049",
    title: "Arabsat \u2013 Capacity & Partnership Programs",
    description_short: "Arabsat, the Arab regional satellite operator, offers capacity leasing, content distribution partnerships, and commercial services across MENA and beyond.",
    type: "other",
    sponsor_institution: "Arabsat",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations, government",
    funding_amount: "Commercial capacity leasing agreements",
    funding_type: "contract",
    application_link: "https://www.arabsat.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-050",
    title: "SatSure \u2013 AgriTech & Analytics Partnership",
    description_short: "SatSure's satellite-based precision agriculture and infrastructure monitoring platform offers API partnership and reseller programs in MENA.",
    type: "other",
    sponsor_institution: "SatSure Analytics",
    country: "India",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, government",
    funding_amount: "Commercial data/API partnership agreements",
    funding_type: "contract",
    application_link: "https://www.satsure.co/partners",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "government"],
    sectors: ["agriculture", "ict", "environment"],
    isNew: false
  },
  {
    id: "GL-N01",
    title: "ESA \u2013 MENA Space Economy Partnership Program",
    description_short: "New ESA initiative partnering with Saudi and GCC space agencies to develop downstream applications, joint missions, and technology transfer frameworks for MENA markets.",
    type: "grant",
    sponsor_institution: "European Space Agency (ESA) + SSA",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, researchers, government",
    funding_amount: "EUR 2M\u201310M per joint activity (variable by work plan)",
    funding_type: "grant",
    application_link: "https://www.esa.int/Newsroom/Press_Releases",
    deadline_date: "Rolling through 2026\u20132028 program period",
    status: "open",
    language: "English",
    notes: "ESA\u2013Saudi MoU signed 2024; implementation calls ongoing.",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher", "government"],
    sectors: ["ict", "innovation", "financial"],
    isNew: true
  },
  {
    id: "GL-N02",
    title: "UNOOSA Access to Space 4 All (A2S4A) Grant",
    description_short: "UN program funding smallsat development and launch for universities and research institutions in developing and emerging space nations, including Saudi-eligible entities.",
    type: "grant",
    sponsor_institution: "UNOOSA + JAXA + partners",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers",
    funding_amount: "Free launch slot + integration support (commercial value ~USD 1M+)",
    funding_type: "in-kind",
    application_link: "https://www.unoosa.org/oosa/en/ourwork/psa/hsti/kibocube.html",
    deadline_date: "Annual call; next window mid-2026",
    status: "open",
    language: "English",
    notes: "Saudi universities have been awarded slots in past cycles.",
    last_verified: "2026-03-22",
    profiles: ["researcher", "student"],
    sectors: ["education", "innovation"],
    isNew: true
  },
  {
    id: "GL-N03",
    title: "ISAR Aerospace \u2013 Launch Partnership (SPECTRUM Rocket)",
    description_short: "German NewSpace launch provider offering commercial small launch contracts for dedicated LEO missions from 2026; MENA market outreach active.",
    type: "other",
    sponsor_institution: "ISAR Aerospace",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, universities, government",
    funding_amount: "Commercial launch pricing (variable by payload)",
    funding_type: "contract",
    application_link: "https://www.isaraerospace.com",
    deadline_date: "Rolling / Open (first commercial launch Q4 2026)",
    status: "open",
    language: "English",
    notes: "First dedicated small launch provider in Germany; competitive pricing.",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher", "government"],
    sectors: ["industrial", "innovation"],
    isNew: true
  },
  {
    id: "GL-N04",
    title: "Satellogic \u2013 EO Data Partnership MENA",
    description_short: "Satellogic's commercial 70cm multispectral Earth observation data reseller and analytics partnership, with active MENA expansion and Arabic-language support.",
    type: "other",
    sponsor_institution: "Satellogic",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, government",
    funding_amount: "Commercial data partnership agreements",
    funding_type: "contract",
    application_link: "https://satellogic.com/contact/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "Active in Saudi agri-monitoring and infrastructure use cases.",
    last_verified: "2026-03-22",
    profiles: ["startup", "government"],
    sectors: ["agriculture", "environment", "ict"],
    isNew: true
  },
  {
    id: "GL-N05",
    title: "DeepSpace Accelerator \u2013 Cohort 4 (2026)",
    description_short: "New European deep-space and in-orbit services accelerator by ESA BIC and OHB, offering EUR 75K zero-equity funding plus in-orbit test opportunities to global startups.",
    type: "accelerator",
    sponsor_institution: "ESA BIC + OHB",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "EUR 75K zero-equity + in-orbit test slot",
    funding_type: "grant",
    application_link: "https://esa-bic.de",
    deadline_date: "Applications open Q2 2026",
    status: "open",
    language: "English",
    notes: "Saudi applicants explicitly eligible; all regions accepted.",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: true
  },
  {
    id: "GL-012",
    title: "Creative Destruction Lab (CDL) Space Stream",
    description_short: "Canadian seed-stage accelerator focusing on massively scalable space ventures with technical mentorship from leading scientists and entrepreneurs.",
    type: "accelerator",
    sponsor_institution: "CDL / University of Toronto",
    country: "Canada",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Investment from CDL network (variable)",
    funding_type: "equity",
    application_link: "https://creativedestructionlab.com/streams/space",
    deadline_date: "Annual; applications in spring",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-013",
    title: "Space Generation Advisory Council (SGAC) Programs",
    description_short: "Global network offering scholarships, competitions, and leadership opportunities for space students and young professionals from all countries.",
    type: "fellowship",
    sponsor_institution: "Space Generation Advisory Council (SGAC)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "students, researchers",
    funding_amount: "Scholarships (up to USD 1K\u20135K) + travel grants",
    funding_type: "grant",
    application_link: "https://spacegeneration.org",
    deadline_date: "Multiple programs throughout the year",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["student", "researcher"],
    sectors: ["education", "innovation"],
    isNew: false
  },
  {
    id: "GL-014",
    title: "UNOOSA Space for Women Program",
    description_short: "United Nations program supporting women in space science and technology through training and mentorship, open to women from all UN member states.",
    type: "fellowship",
    sponsor_institution: "UNOOSA (UN Office for Outer Space Affairs)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "researchers, students",
    funding_amount: "Fully funded training programs",
    funding_type: "in-kind",
    application_link: "https://www.unoosa.org/oosa/en/ourwork/psa/capacity-building/space-for-women.html",
    deadline_date: "Annual calls; varies by program",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher", "student"],
    sectors: ["education", "ict"],
    isNew: false
  },
  {
    id: "GL-015",
    title: "World Bank Space Economy Lab Initiatives",
    description_short: "Technical assistance and funding for space applications in development, particularly satellite data for sustainable agriculture, disaster response, and infrastructure.",
    type: "grant",
    sponsor_institution: "World Bank",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, universities, researchers",
    funding_amount: "Variable (project grants USD 100K\u20135M+)",
    funding_type: "grant",
    application_link: "https://www.worldbank.org/en/topic/space",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government", "researcher"],
    sectors: ["agriculture", "environment", "financial"],
    isNew: false
  },
  {
    id: "GL-016",
    title: "ITU Satellite Spectrum and Orbital Slot Programs",
    description_short: "International coordination and regulatory support for satellite operators including spectrum allocation, orbital registration, and coordination procedures.",
    type: "other",
    sponsor_institution: "International Telecommunication Union (ITU)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, corporations",
    funding_amount: "N/A (regulatory support)",
    funding_type: "other",
    application_link: "https://www.itu.int/en/ITU-R/space/Pages/default.aspx",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-017",
    title: "ESA Open Space Innovation Platform (OSIP)",
    description_short: "Anyone worldwide can submit space ideas to ESA; selected ideas receive ESA funding and collaboration support. Open calls target specific technology gaps.",
    type: "grant",
    sponsor_institution: "European Space Agency (ESA)",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, researchers, universities",
    funding_amount: "EUR 10K\u2013200K study / co-activities",
    funding_type: "grant",
    application_link: "https://ideas.esa.int",
    deadline_date: "Rolling open challenges + periodic calls",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-018",
    title: "Horizon Europe \u2013 EUSPA Space Downstream Applications Call 2026",
    description_short: "EUR 15M EU call for space data applications using Copernicus, Galileo, and EGNOS. Non-EU organizations from eligible countries can participate as project partners.",
    type: "grant",
    sponsor_institution: "EU Agency for the Space Programme (EUSPA) / EC",
    country: "European Union",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, universities, researchers",
    funding_amount: "EUR 15M total; EUR 1M\u20135M per project",
    funding_type: "grant",
    application_link: "https://www.euspa.europa.eu/funding",
    deadline_date: "2026 call; check EUSPA for exact dates",
    status: "open",
    language: "English",
    notes: "Saudi partners can join consortia led by EU entities.",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-019",
    title: "Horizon Europe \u2013 Space Research Call (Cluster 4)",
    description_short: "EUR 139M across 20 space technology topics in Horizon Europe 2025 research call. Open to international partners including Saudi institutions through consortium agreements.",
    type: "grant",
    sponsor_institution: "European Commission",
    country: "European Union",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers, startups",
    funding_amount: "EUR 139M total; EUR 2M\u201310M per project",
    funding_type: "grant",
    application_link: "https://ec.europa.eu/info/funding-tenders/opportunities/portal/screen/opportunities/topic-search;programme=HORIZON",
    deadline_date: "Multiple deadlines; check Funding & Tenders portal",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-020",
    title: "NASA SBIR/STTR Program 2026 BAA",
    description_short: "NASA innovation grants transitioning to BAA format; Phase I ~USD 150K, Phase II ~USD 850K for US-based small businesses. Foreign subsidiaries and partnerships may qualify.",
    type: "grant",
    sponsor_institution: "NASA",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Phase I: ~USD 150K; Phase II: ~USD 850K",
    funding_type: "grant",
    application_link: "https://sbir.nasa.gov",
    deadline_date: "Annual calls; multiple topic areas",
    status: "closed_but_recurring",
    language: "English",
    notes: "Primarily US-focused; Saudi partners can participate through US-registered entities.",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-021",
    title: "Karman Fellowship",
    description_short: "15 mid-career space leaders selected annually from 65+ nations for an intensive leadership and innovation program focused on the future of space exploration.",
    type: "fellowship",
    sponsor_institution: "Karman Space Foundation",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "researchers, government, investors",
    funding_amount: "Fully funded fellowship (travel, accommodation, program)",
    funding_type: "in-kind",
    application_link: "https://www.karman.org/fellowship",
    deadline_date: "Annual; applications typically Mar\u2013Jun",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher", "government"],
    sectors: ["education", "innovation"],
    isNew: false
  },
  {
    id: "GL-022",
    title: "Copernicus Masters Competition",
    description_short: "Global innovation competition using Copernicus satellite data to develop applications in environment, transport, climate, agriculture, and security sectors.",
    type: "tender",
    sponsor_institution: "EC / EUSPA / DLR",
    country: "European Union",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, researchers, students",
    funding_amount: "EUR 250K+ in prizes (varies by challenge)",
    funding_type: "grant",
    application_link: "https://www.copernicus-masters.com",
    deadline_date: "Annual; typically May\u2013September application window",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher", "student"],
    sectors: ["agriculture", "environment", "ict"],
    isNew: false
  },
  {
    id: "GL-023",
    title: "SpaceX Rideshare \u2013 Transporter Mission Slots",
    description_short: "Commercial smallsat rideshare launch slots on SpaceX Transporter missions at USD 5,950/kg to SSO. Standard pricing regardless of origin country.",
    type: "other",
    sponsor_institution: "SpaceX",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, universities, government",
    funding_amount: "USD 5,950/kg to SSO (commercial pricing)",
    funding_type: "contract",
    application_link: "https://www.spacex.com/rideshare",
    deadline_date: "Rolling / Open (missions quarterly)",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher", "government"],
    sectors: ["ict", "innovation", "transport"],
    isNew: false
  },
  {
    id: "GL-024",
    title: "Planet Labs \u2013 Ground Breaking Grant Program",
    description_short: "Planet's grant initiative providing free satellite imagery data access to academic institutions, non-profits, and NGOs working on sustainable development and climate challenges.",
    type: "grant",
    sponsor_institution: "Planet Labs",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers",
    funding_amount: "Free data access (commercial value USD 100K+ per year)",
    funding_type: "in-kind",
    application_link: "https://www.planet.com/markets/education-and-research/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher"],
    sectors: ["environment", "ict", "agriculture"],
    isNew: false
  },
  {
    id: "GL-025",
    title: "UNOOSA Space4Development Innovation Labs",
    description_short: "UN Office for Outer Space Affairs program providing technical capacity-building, training, and data access grants for developing and emerging space nations.",
    type: "fellowship",
    sponsor_institution: "UNOOSA",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, universities",
    funding_amount: "In-kind (training, data access, technical support)",
    funding_type: "in-kind",
    application_link: "https://www.unoosa.org/oosa/en/ourwork/psa/capacity-building/index.html",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government", "researcher"],
    sectors: ["environment", "ict", "education"],
    isNew: false
  },
  {
    id: "GL-026",
    title: "ITU/BDT Connectivity for Space Applications Fellowship",
    description_short: "ITU Telecommunication Development Sector fellowships for engineers and regulators from developing countries to attend space communications workshops.",
    type: "fellowship",
    sponsor_institution: "International Telecommunication Union (ITU)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, researchers",
    funding_amount: "Fully funded fellowship (travel + accommodation)",
    funding_type: "in-kind",
    application_link: "https://www.itu.int/en/ITU-D/Capacity-Building/Pages/Fellowships.aspx",
    deadline_date: "Multiple throughout the year",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government", "researcher"],
    sectors: ["ict", "education"],
    isNew: false
  },
  {
    id: "GL-027",
    title: "Lockheed Martin Space \u2013 Supply Chain Partners",
    description_short: "Lockheed Martin's international supplier and technology partner program, recruiting non-US suppliers for satellite bus, propulsion, avionics, and ground systems.",
    type: "other",
    sponsor_institution: "Lockheed Martin Space",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "SMEs, corporations",
    funding_amount: "Commercial supply contracts (variable)",
    funding_type: "contract",
    application_link: "https://www.lockheedmartin.com/en-us/who-we-are/suppliers.html",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["industrial", "ict"],
    isNew: false
  },
  {
    id: "GL-028",
    title: "Airbus Defence & Space \u2013 Local Partner Program",
    description_short: "Airbus DS partnership program recruiting local industrial partners in emerging space markets for satellite integration, ground systems, and EO analytics.",
    type: "other",
    sponsor_institution: "Airbus Defence & Space",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial contracts + technology transfer",
    funding_type: "contract",
    application_link: "https://www.airbus.com/en/space",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["industrial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-029",
    title: "Thales Alenia Space \u2013 Partnership & Technology Transfer",
    description_short: "Thales Alenia Space collaboration program for industrial partners, offering technology transfer and joint development for satellite systems.",
    type: "other",
    sponsor_institution: "Thales Alenia Space",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial contracts + technology transfer",
    funding_type: "contract",
    application_link: "https://www.thalesaleniaspace.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["industrial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-030",
    title: "OneWeb / Eutelsat LEO Services \u2013 Reseller Program",
    description_short: "Eutelsat OneWeb LEO satellite broadband reseller and integration partner program; open to regional distributors and connectivity solution providers.",
    type: "other",
    sponsor_institution: "Eutelsat OneWeb",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial reseller agreements",
    funding_type: "contract",
    application_link: "https://www.eutelsat.com/en/partners.html",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-031",
    title: "Space Angels \u2013 Angel Investment Network",
    description_short: "Global angel investment network for space ventures connecting founders with high-net-worth investors; Saudi and GCC founders actively welcomed.",
    type: "investment_program",
    sponsor_institution: "Space Angels",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Angel investment (USD 100K\u20132M typical range)",
    funding_type: "equity",
    application_link: "https://www.spaceangels.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["financial", "innovation"],
    isNew: false
  },
  {
    id: "GL-032",
    title: "Space Capital \u2013 Seed and Series A Fund",
    description_short: "New York-based venture capital fund focused exclusively on space infrastructure, satellite technology, and downstream applications. Actively invests globally.",
    type: "investment_program",
    sponsor_institution: "Space Capital",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "USD 500K\u20135M typical investment range",
    funding_type: "equity",
    application_link: "https://www.spacecapital.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-033",
    title: "AWS Space Accelerator",
    description_short: "Amazon Web Services startup accelerator for space companies offering USD 100K AWS credits, technical mentorship, and go-to-market support.",
    type: "accelerator",
    sponsor_institution: "Amazon Web Services (AWS)",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "USD 100K AWS credits + go-to-market support",
    funding_type: "in-kind",
    application_link: "https://aws.amazon.com/government-education/space/",
    deadline_date: "Annual; typically H1 applications",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-034",
    title: "Microsoft for Startups \u2013 Space & AI Track",
    description_short: "Microsoft's global startup program offering up to USD 350K Azure cloud credits, GitHub Enterprise, and technical mentorship for space startups.",
    type: "accelerator",
    sponsor_institution: "Microsoft",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Up to USD 350K in Azure cloud credits + tooling",
    funding_type: "in-kind",
    application_link: "https://www.microsoft.com/en-us/startups",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-035",
    title: "International Astronautical Federation \u2013 Global Space Award",
    description_short: "IAF awards recognizing excellence in space science, engineering, and business; open nominations from all IAF member states including Saudi Arabia.",
    type: "other",
    sponsor_institution: "International Astronautical Federation (IAF)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "researchers, startups, government",
    funding_amount: "Award / recognition (no financial prize)",
    funding_type: "other",
    application_link: "https://www.iafastro.org/awards",
    deadline_date: "Annual; nominations close ~April",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher", "startup", "government"],
    sectors: ["innovation"],
    isNew: false
  },
  {
    id: "GL-036",
    title: "ISRO NewSpace India \u2013 International Launch Services",
    description_short: "NewSpace India Limited commercial launch services via PSLV and SSLV for smallsats and microsats at competitive pricing; open to international customers.",
    type: "other",
    sponsor_institution: "ISRO / NewSpace India Ltd.",
    country: "India",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, universities, government",
    funding_amount: "Commercial launch pricing (variable by payload mass)",
    funding_type: "contract",
    application_link: "https://www.nsilindia.co.in",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-037",
    title: "Breakthrough Energy Ventures \u2013 Climate & EO Investment",
    description_short: "Bill Gates-backed climate-tech venture fund investing in companies using satellite Earth observation and space data for climate change mitigation.",
    type: "investment_program",
    sponsor_institution: "Breakthrough Energy Ventures",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Series A\u2013C (USD 5M\u201350M typical range)",
    funding_type: "equity",
    application_link: "https://www.breakthroughenergy.org/our-work/ventures",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["energy", "environment", "ict"],
    isNew: false
  },
  {
    id: "GL-038",
    title: "GEO Work Programme \u2013 Earth Observation Applications",
    description_short: "Group on Earth Observations work programme funding member countries' earth observation application projects for sustainable development goals.",
    type: "grant",
    sponsor_institution: "Group on Earth Observations (GEO)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, universities, researchers",
    funding_amount: "Variable (in-kind data access + small project grants)",
    funding_type: "in-kind",
    application_link: "https://earthobservations.org",
    deadline_date: "Annual Work Programme cycle",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government", "researcher"],
    sectors: ["environment", "ict", "agriculture"],
    isNew: false
  },
  {
    id: "GL-039",
    title: "JAXA International Top Young Fellowship (ITYF)",
    description_short: "Japan Aerospace Exploration Agency fellowship for outstanding young space researchers from any country, supporting 1\u20132 year research stays at JAXA.",
    type: "fellowship",
    sponsor_institution: "JAXA (Japan Aerospace Exploration Agency)",
    country: "Japan",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "researchers",
    funding_amount: "Monthly stipend ~JPY 362,000 + research budget",
    funding_type: "grant",
    application_link: "https://www.jaxa.jp/en/researchers/fellowships/ityf/",
    deadline_date: "Annual; typically Oct\u2013Dec application",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher"],
    sectors: ["education", "innovation"],
    isNew: false
  },
  {
    id: "GL-040",
    title: "Startupbootcamp \u2013 Smart City & IoT Program",
    description_short: "Global accelerator program targeting smart city and IoT startups including satellite-connected sensor networks and geospatial analytics.",
    type: "accelerator",
    sponsor_institution: "Startupbootcamp",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "EUR 15K grant + EUR 450K in partner perks + workspace",
    funding_type: "grant",
    application_link: "https://www.startupbootcamp.org",
    deadline_date: "Annual cohorts; multiple verticals",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "realestate"],
    isNew: false
  },
  {
    id: "GL-041",
    title: "SSC (Swedish Space Corporation) \u2013 Commercial Services",
    description_short: "SSC's global network of ground stations available for commercial satellite operations including telemetry, tracking, and command services.",
    type: "other",
    sponsor_institution: "Swedish Space Corporation (SSC)",
    country: "Sweden",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, government",
    funding_amount: "Commercial pricing (variable)",
    funding_type: "contract",
    application_link: "https://www.sscspace.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-042",
    title: "ESA BIC \u2013 Global Network Extensions",
    description_short: "ESA's 23 business incubation centres worldwide providing funding, technical support, and office space; new BICs being established in MENA region.",
    type: "accelerator",
    sponsor_institution: "European Space Agency (ESA)",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "Up to EUR 60K zero-equity + technical support",
    funding_type: "grant",
    application_link: "https://www.esa.int/Enabling_Support/Space_Engineering_Technology/Business_Incubation_Centres/ESA_Business_Incubation_Centres",
    deadline_date: "Rolling; varies by location",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-043",
    title: "CNES Space Entrepreneurship Program \u2013 CONECTUS",
    description_short: "French space agency CNES program providing support for startups using CNES technologies or space data, with international partnership options.",
    type: "accelerator",
    sponsor_institution: "CNES (French Space Agency)",
    country: "France",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs",
    funding_amount: "Variable support (technical + potential grants)",
    funding_type: "in-kind",
    application_link: "https://conectus.fr",
    deadline_date: "Annual call",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-044",
    title: "World Bank \u2013 Digital Development Partnership (Space)",
    description_short: "World Bank program financing satellite broadband and digital infrastructure in developing and emerging economies.",
    type: "grant",
    sponsor_institution: "World Bank",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "government, corporations",
    funding_amount: "Variable (concessional loans + IFC investment)",
    funding_type: "loan",
    application_link: "https://www.worldbank.org/en/topic/digitaldevelopment",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["government"],
    sectors: ["ict", "financial"],
    isNew: false
  },
  {
    id: "GL-045",
    title: "Google.org \u2013 AI for Earth Grants",
    description_short: "Google.org grants for organizations using AI and satellite imagery to address environmental challenges including desertification, deforestation, and food security.",
    type: "grant",
    sponsor_institution: "Google.org",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers, startups",
    funding_amount: "USD 100K\u20131M per grant + Google Cloud credits",
    funding_type: "grant",
    application_link: "https://www.google.org",
    deadline_date: "Rolling; competitive selection",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["researcher", "startup"],
    sectors: ["environment", "agriculture", "ict"],
    isNew: false
  },
  {
    id: "GL-046",
    title: "Maxar Technologies \u2013 WorldView Legion Data Partnership",
    description_short: "Maxar's commercial satellite imagery reseller and partnership program for WorldView Legion 30cm imagery, open to regional distributors.",
    type: "other",
    sponsor_institution: "Maxar Technologies",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial data partnership agreements",
    funding_type: "contract",
    application_link: "https://www.maxar.com/partners",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "investor"],
    sectors: ["ict", "innovation", "environment"],
    isNew: false
  },
  {
    id: "GL-047",
    title: "Spire Global \u2013 Data Services & API Partnership",
    description_short: "Spire's maritime, aviation, and weather data from 120+ LEO satellites available via API; partnership program for value-added resellers and analytics companies.",
    type: "other",
    sponsor_institution: "Spire Global",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial data subscription agreements",
    funding_type: "contract",
    application_link: "https://spire.com/partners",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["ict", "transport", "innovation"],
    isNew: false
  },
  {
    id: "GL-048",
    title: "Astroscale \u2013 Active Debris Removal (ADR) Partnerships",
    description_short: "Astroscale's ADRAS-J and ELSA missions create subcontract and partnership opportunities for space sustainability technology providers globally.",
    type: "other",
    sponsor_institution: "Astroscale",
    country: "Japan",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, universities",
    funding_amount: "Commercial contracts + R&D collaboration",
    funding_type: "contract",
    application_link: "https://astroscale.com/partners",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher"],
    sectors: ["environment", "ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-049",
    title: "Arabsat \u2013 Capacity & Partnership Programs",
    description_short: "Arabsat, the Arab regional satellite operator, offers capacity leasing, content distribution partnerships, and commercial services across MENA and beyond.",
    type: "other",
    sponsor_institution: "Arabsat",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations, government",
    funding_amount: "Commercial capacity leasing agreements",
    funding_type: "contract",
    application_link: "https://www.arabsat.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "government"],
    sectors: ["ict", "innovation"],
    isNew: false
  },
  {
    id: "GL-050",
    title: "SatSure \u2013 AgriTech & Analytics Partnership",
    description_short: "SatSure's satellite-based precision agriculture and infrastructure monitoring platform offers API partnership and reseller programs in MENA.",
    type: "other",
    sponsor_institution: "SatSure Analytics",
    country: "India",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, government",
    funding_amount: "Commercial data/API partnership agreements",
    funding_type: "contract",
    application_link: "https://www.satsure.co/partners",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-12",
    profiles: ["startup", "government"],
    sectors: ["agriculture", "ict", "environment"],
    isNew: false
  },
  {
    id: "GL-N01",
    title: "ESA \u2013 MENA Space Economy Partnership Program",
    description_short: "New ESA initiative partnering with Saudi and GCC space agencies to develop downstream applications, joint missions, and technology transfer frameworks for MENA markets.",
    type: "grant",
    sponsor_institution: "European Space Agency (ESA) + SSA",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, researchers, government",
    funding_amount: "EUR 2M\u201310M per joint activity (variable by work plan)",
    funding_type: "grant",
    application_link: "https://www.esa.int/About_Us/Corporate_news/ESA_signs_MoU_with_Saudi_Space_Agency",
    deadline_date: "Rolling through 2026\u20132028 program period",
    status: "open",
    language: "English",
    notes: "ESA\u2013Saudi MoU signed 2024; implementation calls ongoing.",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher", "government"],
    sectors: ["ict", "innovation", "financial"],
    isNew: true
  },
  {
    id: "GL-N02",
    title: "UNOOSA Access to Space 4 All (A2S4A) Grant",
    description_short: "UN program funding smallsat development and launch for universities and research institutions in developing and emerging space nations, including Saudi-eligible entities.",
    type: "grant",
    sponsor_institution: "UNOOSA + JAXA + partners",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers",
    funding_amount: "Free launch slot + integration support (commercial value ~USD 1M+)",
    funding_type: "in-kind",
    application_link: "https://www.unoosa.org/oosa/en/ourwork/psa/hsti/kibo-abc.html",
    deadline_date: "Annual call; next window mid-2026",
    status: "open",
    language: "English",
    notes: "Saudi universities have been awarded slots in past cycles.",
    last_verified: "2026-03-12",
    profiles: ["researcher", "student"],
    sectors: ["education", "innovation"],
    isNew: true
  },
  {
    id: "GL-N03",
    title: "ISAR Aerospace \u2013 Launch Partnership (SPECTRUM Rocket)",
    description_short: "German NewSpace launch provider offering commercial small launch contracts for dedicated LEO missions from 2026; MENA market outreach active.",
    type: "other",
    sponsor_institution: "ISAR Aerospace",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, universities, government",
    funding_amount: "Commercial launch pricing (variable by payload)",
    funding_type: "contract",
    application_link: "https://www.isaraerospace.com",
    deadline_date: "Rolling / Open (first commercial launch Q4 2026)",
    status: "open",
    language: "English",
    notes: "First dedicated small launch provider in Germany; competitive pricing.",
    last_verified: "2026-03-12",
    profiles: ["startup", "researcher", "government"],
    sectors: ["industrial", "innovation"],
    isNew: true
  },
  {
    id: "GL-N04",
    title: "Satellogic \u2013 EO Data Partnership MENA",
    description_short: "Satellogic's commercial 70cm multispectral Earth observation data reseller and analytics partnership, with active MENA expansion and Arabic-language support.",
    type: "other",
    sponsor_institution: "Satellogic",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, government",
    funding_amount: "Commercial data partnership agreements",
    funding_type: "contract",
    application_link: "https://satellogic.com/partner-with-us/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "Active in Saudi agri-monitoring and infrastructure use cases.",
    last_verified: "2026-03-12",
    profiles: ["startup", "government"],
    sectors: ["agriculture", "environment", "ict"],
    isNew: true
  },
  {
    id: "GL-N05",
    title: "DeepSpace Accelerator \u2013 Cohort 4 (2026)",
    description_short: "New European deep-space and in-orbit services accelerator by ESA BIC and OHB, offering EUR 75K zero-equity funding plus in-orbit test opportunities to global startups.",
    type: "accelerator",
    sponsor_institution: "ESA BIC + OHB",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "EUR 75K zero-equity + in-orbit test slot",
    funding_type: "grant",
    application_link: "https://www.esabic.de/deepspace",
    deadline_date: "Applications open Q2 2026",
    status: "open",
    language: "English",
    notes: "Saudi applicants explicitly eligible; all regions accepted.",
    last_verified: "2026-03-12",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: true
  },
  {
    id: "GL-N06",
    title: "COSPAR Research Fellowship Program 2026",
    description_short: "Committee on Space Research two-year fellowships for outstanding early-career researchers from any country; focus on space physics, remote sensing, and planetary science.",
    type: "fellowship",
    sponsor_institution: "COSPAR (Committee on Space Research)",
    country: "Global",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "researchers",
    funding_amount: "USD 30K\u201360K stipend over 2 years",
    funding_type: "grant",
    application_link: "https://cosparhq.cnes.fr/young-scientists/cospar-for-education/",
    deadline_date: "Annual call; typically Feb\u2013Apr application window",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["education", "ict", "innovation"],
    isNew: true
  },
  {
    id: "SA-N04",
    title: "Saudi Space Agency \u2013 National Remote Sensing Grants",
    description_short: "SSA research grants funding satellite remote sensing projects aligned with Vision 2030 priorities: land use, water resources, urban planning, and disaster monitoring.",
    type: "grant",
    sponsor_institution: "Saudi Space Agency (SSA)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "universities, researchers, government",
    funding_amount: "SAR 500K\u20132M per project (variable by call)",
    funding_type: "grant",
    application_link: "https://ssa.gov.sa/en",
    deadline_date: "Annual call; check SSA website for current round",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "government"],
    sectors: ["ict", "environment", "agriculture"],
    isNew: true
  },
  {
    id: "SA-N05",
    title: "KAUST Entrepreneurship Center \u2013 Venture Fellowship",
    description_short: "12-month residential fellowship for deep-tech founders at KAUST, providing lab access, SAR 180K stipend, mentorship network, and connection to KAUST's investor ecosystem.",
    type: "fellowship",
    sponsor_institution: "King Abdullah University of Science and Technology (KAUST)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, researchers",
    funding_amount: "SAR 180K stipend + lab access + in-kind support",
    funding_type: "grant",
    application_link: "https://innovation.kaust.edu.sa/entrepreneurs/",
    deadline_date: "Annual cohort; check KAUST website for current cycle",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher"],
    sectors: ["financial", "innovation", "education"],
    isNew: true
  },
  {
    id: "SA-N06",
    title: "KACST National Science, Technology & Innovation Plan (NSTIP)",
    description_short: "KACST's flagship multi-year competitive grants scheme for applied R&D including space science, satellite systems, and advanced manufacturing under national strategic sectors.",
    type: "grant",
    sponsor_institution: "King Abdulaziz City for Science and Technology (KACST)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "universities, researchers, government",
    funding_amount: "SAR 1M\u201320M per project (competitive rounds)",
    funding_type: "grant",
    application_link: "https://www.kacst.edu.sa",
    deadline_date: "Multi-year program; rolling calls per technology domain",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "government"],
    sectors: ["energy", "ict", "industrial", "innovation"],
    isNew: true
  },
  {
    id: "SA-N07",
    title: "Saudi Vision 2030 \u2013 Space Sector Localization Tenders",
    description_short: "Procurement tenders from Saudi space entities aimed at localizing 50% of sector value by 2030. Covers satellite components, ground systems, software, and workforce development.",
    type: "tender",
    sponsor_institution: "SSA + CST + Neo Space Group + various PIF entities",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Variable by contract scope",
    funding_type: "contract",
    application_link: "https://www.etimad.sa/tenders",
    deadline_date: "Rolling / Ongoing procurement cycle",
    status: "open",
    language: "Arabic",
    notes: "Main national procurement portal for Saudi government tenders.",
    last_verified: "2026-03-22",
    profiles: ["startup", "government"],
    sectors: ["industrial", "ict", "innovation"],
    isNew: true
  },
  {
    id: "SA-N08",
    title: "PIF \u2013 Space Infrastructure Co-Investment Program",
    description_short: "Public Investment Fund co-investment facility targeting space infrastructure, satellite manufacturing, and downstream services aligned with Vision 2030 economic diversification goals.",
    type: "investment_program",
    sponsor_institution: "Public Investment Fund (PIF)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, investors, corporations",
    funding_amount: "Variable / undisclosed (co-investment vehicle)",
    funding_type: "equity",
    application_link: "https://www.pif.gov.sa/en/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "PIF-backed entities include Neo Space Group, STC, and others.",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "industrial", "ict"],
    isNew: true
  },
  {
    id: "SA-N09",
    title: "Monsha'at \u2013 National Entrepreneurship Competition (NEC) Space Track",
    description_short: "Annual national competition with a dedicated space and advanced tech track, offering SAR 500K prize pool, incubation support, and regulatory fast-track for winning teams.",
    type: "tender",
    sponsor_institution: "Monsha'at (General Authority for Small & Medium Enterprises)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs, students",
    funding_amount: "SAR 500K prize pool + incubation support",
    funding_type: "grant",
    application_link: "https://www.monshaat.gov.sa",
    deadline_date: "Annual competition; check Monsha'at portal for schedule",
    status: "closed_but_recurring",
    language: "Arabic",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "student"],
    sectors: ["innovation", "education"],
    isNew: true
  },
  {
    id: "SA-N10",
    title: "SVC (Saudi Venture Capital) \u2013 Space Tech Co-Investment",
    description_short: "SVC partners with private VCs to co-invest in Saudi-based deep-tech and space startups, offering matching investments to attract international venture capital.",
    type: "investment_program",
    sponsor_institution: "Saudi Venture Capital (SVC)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, investors",
    funding_amount: "SAR 1M\u201310M co-investment per round (variable)",
    funding_type: "equity",
    application_link: "https://svc.com.sa/en",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: true
  },
  {
    id: "SA-N11",
    title: "KAUST \u2013 Industry Collaboration Program (ICP) Space Sector",
    description_short: "Structured collaboration framework between KAUST research groups and industry partners covering joint R&D, IP licensing, and talent development in space-adjacent technologies.",
    type: "grant",
    sponsor_institution: "King Abdullah University of Science and Technology (KAUST)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "In-kind (lab access, research staff, IP licensing support)",
    funding_type: "in-kind",
    application_link: "https://innovation.kaust.edu.sa/industry/kicp/",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher"],
    sectors: ["energy", "environment", "education"],
    isNew: true
  },
  {
    id: "SA-N12",
    title: "Saudi Space Agency \u2013 Bilateral R&D Cooperation Calls",
    description_short: "SSA issues joint R&D calls under its bilateral agreements with NASA, ESA, JAXA, and ISRO, enabling Saudi researchers and companies to participate in shared missions and studies.",
    type: "grant",
    sponsor_institution: "Saudi Space Agency (SSA) + bilateral partners",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "universities, researchers, government",
    funding_amount: "Variable by call; typically USD 100K\u20132M",
    funding_type: "grant",
    application_link: "https://ssa.gov.sa/en",
    deadline_date: "Ad hoc calls per bilateral agreement cycle",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "government"],
    sectors: ["ict", "innovation"],
    isNew: true
  },
  {
    id: "SA-N13",
    title: "CST \u2013 Space-Enabled IoT & Connectivity Sandbox",
    description_short: "Regulatory sandbox by CST for companies testing satellite-based IoT, non-terrestrial networks (NTN), and direct-to-device connectivity solutions in Saudi Arabia.",
    type: "other",
    sponsor_institution: "Communications, Space & Technology Commission (CST)",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Regulatory facilitation + test infrastructure access",
    funding_type: "in-kind",
    application_link: "https://www.cst.gov.sa/en/regulatory-frameworks",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "government"],
    sectors: ["ict", "innovation"],
    isNew: true
  },
  {
    id: "SA-N14",
    title: "ITCC \u2013 Space Digital Twin & Smart City Procurement",
    description_short: "Information Technology & Communications Complex procures satellite EO-based digital twin and smart infrastructure monitoring services for Saudi mega-projects.",
    type: "tender",
    sponsor_institution: "ITCC (Information Technology & Communications Complex)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Variable by contract (multi-million SAR projects)",
    funding_type: "contract",
    application_link: "https://www.itcc.sa",
    deadline_date: "Rolling procurement cycles",
    status: "open",
    language: "Arabic",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "government"],
    sectors: ["realestate", "ict", "innovation"],
    isNew: true
  },
  {
    id: "SA-N15",
    title: "Saudi Aerospace Engineering Industries (SAEI) \u2013 Supplier & R&D Programs",
    description_short: "SAEI supplier development and joint R&D programs for aerospace components, maintenance, and manufacturing, targeting Saudi localization of aerospace and satellite supply chains.",
    type: "other",
    sponsor_institution: "Saudi Aerospace Engineering Industries (SAEI) / SAMI",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial contracts + in-kind development support",
    funding_type: "contract",
    application_link: "https://www.saei.com.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "government"],
    sectors: ["industrial", "ict", "innovation"],
    isNew: true
  },
  {
    id: "SA-N16",
    title: "NEOM \u2013 Space-Enabled Infrastructure Innovation Program",
    description_short: "NEOM technology partner program seeking space-tech solutions for smart infrastructure, autonomous mobility, environmental monitoring, and connectivity in the Line and Trojena.",
    type: "other",
    sponsor_institution: "NEOM Company",
    country: "Saudi Arabia",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Pilot contracts + potential scale-up investment",
    funding_type: "contract",
    application_link: "https://www.neom.com/en-us/our-business/sectors/technology-and-digital",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["realestate", "environment", "ict"],
    isNew: true
  },
  {
    id: "SA-N17",
    title: "SDAIA \u2013 National Data Space & AI Grants",
    description_short: "Saudi Data and Artificial Intelligence Authority grants for satellite data integration, geospatial AI, and National Data Space projects under the National AI Strategy.",
    type: "grant",
    sponsor_institution: "Saudi Data and AI Authority (SDAIA)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs, universities, government",
    funding_amount: "SAR 500K\u20135M per project (competitive rounds)",
    funding_type: "grant",
    application_link: "https://www.sdaia.gov.sa",
    deadline_date: "Rolling calls per strategic theme",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher", "government"],
    sectors: ["ict", "innovation"],
    isNew: true
  },
  {
    id: "SA-N18",
    title: "Aramco Entrepreneurship Center (Wa'ed) \u2013 Deep Tech Program",
    description_short: "Aramco's Wa'ed Ventures offers seed-to-growth investment and business development support to Saudi deep-tech startups, including space-adjacent robotics, sensors, and EO analytics.",
    type: "investment_program",
    sponsor_institution: "Saudi Aramco Entrepreneurship Center (Wa'ed)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups",
    funding_amount: "USD 100K\u20135M equity investment",
    funding_type: "equity",
    application_link: "https://waed.com.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["energy", "industrial", "innovation"],
    isNew: true
  },
  {
    id: "SA-N19",
    title: "TAQNIA Space \u2013 Technology Transfer & Licensing",
    description_short: "TAQNIA Space offers technology transfer, joint development agreements, and IP licensing in satellite systems, remote sensing, and space engineering with Saudi entities.",
    type: "other",
    sponsor_institution: "TAQNIA Space (KACST subsidiary)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Technology transfer licensing agreements (value variable)",
    funding_type: "in-kind",
    application_link: "https://www.taqniaspace.com.sa",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["industrial", "ict", "innovation"],
    isNew: true
  },
  {
    id: "SA-N20",
    title: "Saudi Space Agency \u2013 Space Summer School (SSS)",
    description_short: "Annual intensive summer school for Saudi university students on space mission design, satellite engineering, remote sensing, and space law; offered in partnership with international space agencies.",
    type: "fellowship",
    sponsor_institution: "Saudi Space Agency (SSA)",
    country: "Saudi Arabia",
    eligibility_region: "Saudi_only",
    eligibility_entities: "students",
    funding_amount: "Fully funded program (tuition, accommodation, travel within KSA)",
    funding_type: "in-kind",
    application_link: "https://ssa.gov.sa/en",
    deadline_date: "Annual; applications typically March\u2013April",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["student"],
    sectors: ["education", "ict"],
    isNew: true
  },
  {
    id: "GCC-N02",
    title: "UAE Space Agency \u2013 International Partnership Grants",
    description_short: "UAE Space Agency offers joint research and mission partnership grants under its bilateral agreements, open to GCC entities including Saudi institutions in strategic space domains.",
    type: "grant",
    sponsor_institution: "UAE Space Agency",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "universities, researchers, government",
    funding_amount: "AED 1M\u201310M per joint project",
    funding_type: "grant",
    application_link: "https://www.space.gov.ae/en/projects-and-initiatives",
    deadline_date: "Ad hoc calls; check UAE Space Agency portal",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "government"],
    sectors: ["ict", "innovation"],
    isNew: true
  },
  {
    id: "GCC-N03",
    title: "Mohammed bin Rashid Space Centre \u2013 Research Collaborations",
    description_short: "MBRSC invites research collaboration proposals from GCC and global institutions in planetary science, Earth observation, satellite communications, and astronaut research.",
    type: "grant",
    sponsor_institution: "Mohammed bin Rashid Space Centre (MBRSC)",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "universities, researchers",
    funding_amount: "Variable / undisclosed (project-dependent)",
    funding_type: "grant",
    application_link: "https://www.mbrsc.ae",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["ict", "innovation"],
    isNew: true
  },
  {
    id: "GCC-N04",
    title: "Oman Technology Fund (OTF) \u2013 Space Tech Portfolio",
    description_short: "Oman Technology Fund invests in deep-tech startups including space applications, remote sensing, and satellite-enabled services, with preference for GCC co-founders and MENA market focus.",
    type: "investment_program",
    sponsor_institution: "Oman Technology Fund (OTF)",
    country: "Oman",
    eligibility_region: "GCC",
    eligibility_entities: "startups",
    funding_amount: "USD 250K\u20132M equity (seed to Series A)",
    funding_type: "equity",
    application_link: "https://www.otf.om",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: true
  },
  {
    id: "GCC-N05",
    title: "Qatar Science and Technology Park (QSTP) \u2013 Tech Accelerator",
    description_short: "QSTP technology commercialization accelerator at Qatar Foundation, open to GCC startups with deep-tech solutions including geospatial, AI, and space applications.",
    type: "accelerator",
    sponsor_institution: "Qatar Science and Technology Park (QSTP) / Qatar Foundation",
    country: "Qatar",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs",
    funding_amount: "USD 100K\u2013500K grant + in-kind office & lab",
    funding_type: "grant",
    application_link: "https://www.qstp.org.qa",
    deadline_date: "Annual cohort cycle; check portal for schedule",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation"],
    isNew: true
  },
  {
    id: "GCC-N06",
    title: "Kuwait Foundation for the Advancement of Sciences (KFAS) \u2013 Space Research Grants",
    description_short: "KFAS funds Kuwaiti and GCC research in advanced science and technology, including remote sensing, environmental monitoring, and satellite-based applications relevant to Gulf regions.",
    type: "grant",
    sponsor_institution: "Kuwait Foundation for the Advancement of Sciences (KFAS)",
    country: "Kuwait",
    eligibility_region: "GCC",
    eligibility_entities: "universities, researchers",
    funding_amount: "KWD 20K\u2013200K per project",
    funding_type: "grant",
    application_link: "https://www.kfas.org",
    deadline_date: "Annual call; typically September\u2013November window",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["financial", "environment", "education"],
    isNew: true
  },
  {
    id: "GCC-N07",
    title: "Bahrain Economic Development Board \u2013 Space & Advanced Tech Incentives",
    description_short: "Bahrain EDB offers investment incentives, regulatory facilitation, and market entry support for space-tech and advanced manufacturing companies establishing regional presence in Bahrain.",
    type: "other",
    sponsor_institution: "Bahrain Economic Development Board (EDB)",
    country: "Bahrain",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Tax incentives + regulatory fast-track (in-kind)",
    funding_type: "in-kind",
    application_link: "https://www.bahrainedb.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["industrial", "ict", "innovation", "financial"],
    isNew: true
  },
  {
    id: "GCC-N08",
    title: "UAE National Space Program \u2013 SmallSat Rideshare Opportunities",
    description_short: "UAE Space Agency offers rideshare slots on national satellite missions for UAE and GCC university-built nanosatellites and research payloads as part of its space democratization agenda.",
    type: "other",
    sponsor_institution: "UAE Space Agency",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "universities, researchers",
    funding_amount: "Free/subsidized launch slot (value up to AED 2M)",
    funding_type: "in-kind",
    application_link: "https://www.space.gov.ae/en/projects-and-initiatives/national-space-fund",
    deadline_date: "Call per mission schedule; check UAE Space Agency",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "student"],
    sectors: ["ict", "innovation", "education"],
    isNew: true
  },
  {
    id: "GCC-N09",
    title: "Dubai Future Accelerators \u2013 Space & Connectivity Cohort",
    description_short: "Dubai Future Foundation accelerator matching global and GCC deep-tech startups with Dubai government entities to pilot innovative solutions in space connectivity, smart city, and EO analytics.",
    type: "accelerator",
    sponsor_institution: "Dubai Future Foundation / Dubai Future Accelerators",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups",
    funding_amount: "Pilot contract (AED 50K\u2013500K) + co-investment pathway",
    funding_type: "contract",
    application_link: "https://www.dubaifuture.ae/initiatives/future-design-and-acceleration/dubai-future-accelerators/",
    deadline_date: "Annual cohort; check Dubai Future Foundation portal",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation"],
    isNew: true
  },
  {
    id: "GCC-N10",
    title: "Abu Dhabi Investment Office (ADIO) \u2013 Space Sector Incentive Package",
    description_short: "ADIO offers financial incentives, co-investment matching, and business facilitation for space companies establishing operations or R&D centres in Abu Dhabi, open to GCC-based firms.",
    type: "investment_program",
    sponsor_institution: "Abu Dhabi Investment Office (ADIO)",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Up to AED 5M incentive package (variable by project)",
    funding_type: "mixed",
    application_link: "https://adio.abudhabi",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "innovation"],
    isNew: true
  },
  {
    id: "GCC-N11",
    title: "Thuraya \u2013 MENA Partner & Reseller Program",
    description_short: "Thuraya satellite communications company offers distribution partner and value-added reseller programs for mobile satellite broadband solutions across MENA, targeting GCC enterprises.",
    type: "other",
    sponsor_institution: "Thuraya (subsidiary of Yahsat, UAE)",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Commercial reseller margin + co-marketing support",
    funding_type: "contract",
    application_link: "https://www.thuraya.com/en/where-to-buy/become-a-partner",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "transport"],
    isNew: true
  },
  {
    id: "GCC-N12",
    title: "Qatar Research Fund (QRF) \u2013 National Priority Research Programs",
    description_short: "Qatar National Research Fund competitive grants for applied research in ICT, environment, energy, and health, with explicit eligibility for GCC researchers in satellite-enabled applications.",
    type: "grant",
    sponsor_institution: "Qatar Research Fund (QRF) / Qatar Foundation",
    country: "Qatar",
    eligibility_region: "GCC",
    eligibility_entities: "universities, researchers",
    funding_amount: "USD 200K\u20132M per project",
    funding_type: "grant",
    application_link: "https://www.qrdi.org.qa",
    deadline_date: "Annual calls per program; check QNRF website",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["energy", "healthcare", "environment"],
    isNew: true
  },
  {
    id: "GCC-N13",
    title: "Oman National Research Fund (NRF) \u2013 Strategic R&D Grants",
    description_short: "Oman's National Research Fund supports scientific and applied research in strategic sectors; GCC researchers in space, remote sensing, and environmental monitoring are eligible.",
    type: "grant",
    sponsor_institution: "National Research Fund (NRF), Oman",
    country: "Oman",
    eligibility_region: "GCC",
    eligibility_entities: "universities, researchers",
    funding_amount: "OMR 50K\u2013500K per project",
    funding_type: "grant",
    application_link: "https://orp.moheri.gov.om",
    deadline_date: "Biannual calls; check NRF Oman portal",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["environment", "ict"],
    isNew: true
  },
  {
    id: "GCC-N14",
    title: "G42 Space \u2013 Partnership & Data Ecosystem Program",
    description_short: "G42 Space (Abu Dhabi) offers satellite EO data analytics partnerships and AI integration collaborations targeting agriculture, infrastructure, and climate monitoring across MENA.",
    type: "other",
    sponsor_institution: "G42 Space (G42 Group / Yahsat, UAE)",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations, government",
    funding_amount: "Commercial data licensing + joint development agreements",
    funding_type: "contract",
    application_link: "https://www.space42.ai",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "government"],
    sectors: ["agriculture", "environment", "ict"],
    isNew: true
  },
  {
    id: "GCC-N15",
    title: "UAE ICT Fund \u2013 Space & Connectivity Innovation Grants",
    description_short: "Telecoms Regulatory Authority UAE's ICT Fund supports R&D and innovation in satellite communications, 5G-non-terrestrial networks, and spectrum technologies open to GCC applicants.",
    type: "grant",
    sponsor_institution: "UAE Telecommunications and Digital Government Regulatory Authority (TDRA) ICT Fund",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, universities",
    funding_amount: "AED 250K\u20135M per project",
    funding_type: "grant",
    application_link: "https://tdra.gov.ae/en/ictfund/about/ict-fund-introduction-8ab87eafc9c941d5ac07be0f7b08e184",
    deadline_date: "Annual call; check TDRA portal",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher"],
    sectors: ["financial", "ict", "innovation"],
    isNew: true
  },
  {
    id: "GCC-N16",
    title: "Kuwait Direct Investment Promotion Authority (KDIPA) \u2013 Tech Sector Incentives",
    description_short: "Kuwait KDIPA provides investment facilitation, duty exemptions, and land allocation for technology companies including space-tech setting up operations in Kuwait.",
    type: "other",
    sponsor_institution: "Kuwait Direct Investment Promotion Authority (KDIPA)",
    country: "Kuwait",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations",
    funding_amount: "Tax and duty incentives + facilitation (in-kind)",
    funding_type: "in-kind",
    application_link: "https://www.kdipa.gov.kw",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: true
  },
  {
    id: "GCC-N17",
    title: "Bahrain FinTech Bay \u2013 Space Economy Ecosystem Program",
    description_short: "Bahrain-based innovation hub offering co-working, regulatory sandboxing, and investor connections for space economy, insurtech, and connected infrastructure startups in MENA.",
    type: "accelerator",
    sponsor_institution: "Bahrain FinTech Bay (Bahrain EDB-linked)",
    country: "Bahrain",
    eligibility_region: "GCC",
    eligibility_entities: "startups",
    funding_amount: "In-kind (office, regulatory sandbox, investor access)",
    funding_type: "in-kind",
    application_link: "https://www.bahrainfintechbay.com",
    deadline_date: "Rolling intake",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["financial", "ict", "innovation"],
    isNew: true
  },
  {
    id: "GCC-N19",
    title: "Emirates Mars Mission \u2013 Research Extension Grants",
    description_short: "Following the Hope Probe mission, MBRSC offers small research grants for follow-on Mars atmospheric science studies in partnership with UAE and GCC universities.",
    type: "grant",
    sponsor_institution: "Mohammed bin Rashid Space Centre (MBRSC) / UAE Space Agency",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "universities, researchers",
    funding_amount: "AED 200K\u20131M per study",
    funding_type: "grant",
    application_link: "https://www.mbrsc.ae/missions-and-projects/",
    deadline_date: "Ad hoc calls; check MBRSC announcements",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher"],
    sectors: ["education", "ict", "innovation"],
    isNew: true
  },
  {
    id: "GCC-N20",
    title: "Yahsat \u2013 Commercial Satellite Capacity Partnership (GCC)",
    description_short: "Yahsat offers capacity leasing, managed service partnerships, and technology integration programs for GCC operators and enterprises using its multi-orbit satellite fleet.",
    type: "other",
    sponsor_institution: "Al Yah Satellite Communications (Yahsat), Abu Dhabi",
    country: "UAE",
    eligibility_region: "GCC",
    eligibility_entities: "startups, SMEs, corporations, government",
    funding_amount: "Commercial capacity agreements (variable)",
    funding_type: "contract",
    application_link: "https://www.space42.ai",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "government"],
    sectors: ["ict", "innovation"],
    isNew: true
  },
  {
    id: "GL-N07",
    title: "NASA \u2013 Space Act Agreement (SAA) with International Partners",
    description_short: "NASA's reimbursable and non-reimbursable Space Act Agreements allow non-US entities including Saudi institutions to collaborate on research, technology development, and data sharing.",
    type: "grant",
    sponsor_institution: "NASA (National Aeronautics and Space Administration)",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers, government",
    funding_amount: "Variable / project-dependent (in-kind or cost-share)",
    funding_type: "in-kind",
    application_link: "https://www.nasa.gov/partnerships/how-to-partner/",
    deadline_date: "Rolling / Open \u2013 by proposal to relevant NASA center",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["researcher", "government"],
    sectors: ["ict", "innovation"],
    isNew: true
  },
  {
    id: "GL-N08",
    title: "ESA \u2013 Business Incubation Centre (BIC) Network",
    description_short: "ESA BIC operates 20+ incubators across Europe accepting global applications. Offers EUR 50K non-equity funding, ESA technology access, and mentorship for space-derived startup ideas.",
    type: "accelerator",
    sponsor_institution: "European Space Agency (ESA BIC Network)",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "EUR 50K non-equity + EUR 250K in-kind services",
    funding_type: "grant",
    application_link: "https://access.esa.int/about-access/about-scale-up/business-incubation-centres",
    deadline_date: "Rolling intakes; varies by BIC location",
    status: "open",
    language: "English",
    notes: "Saudi founders can apply via ESA BIC programmes accepting global applicants.",
    last_verified: "2026-03-22",
    profiles: ["startup"],
    sectors: ["ict", "innovation", "financial"],
    isNew: true
  },
  {
    id: "GL-N09",
    title: "JAXA \u2013 International Space Cooperation Program",
    description_short: "JAXA's international partnership program offers research collaboration, data sharing, and joint mission development with global space agencies and institutions including SSA.",
    type: "grant",
    sponsor_institution: "Japan Aerospace Exploration Agency (JAXA)",
    country: "Japan",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers, government",
    funding_amount: "Variable / project-based (in-kind or shared funding)",
    funding_type: "in-kind",
    application_link: "https://global.jaxa.jp/activity/pr/international/",
    deadline_date: "Ad hoc calls; check JAXA international cooperation portal",
    status: "open",
    language: "English",
    notes: "JAXA and SSA have an active MoU covering cooperative activities.",
    last_verified: "2026-03-22",
    profiles: ["researcher", "government"],
    sectors: ["ict", "industrial", "innovation"],
    isNew: true
  },
  {
    id: "GL-N10",
    title: "ISRO \u2013 International Cooperation and Space Research Collaborations",
    description_short: "Indian Space Research Organisation's bilateral cooperation program with Saudi Arabia under the SSA-ISRO MoU, covering joint Earth observation, training, and technology exchange.",
    type: "grant",
    sponsor_institution: "Indian Space Research Organisation (ISRO)",
    country: "India",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "universities, researchers, government",
    funding_amount: "In-kind (data access, training slots, mission participation)",
    funding_type: "in-kind",
    application_link: "https://www.isro.gov.in/international-cooperation",
    deadline_date: "Rolling under bilateral MoU",
    status: "open",
    language: "English",
    notes: "SSA\u2013ISRO MoU covers remote sensing, training, and future launch cooperation.",
    last_verified: "2026-03-22",
    profiles: ["researcher", "government"],
    sectors: ["education", "ict", "innovation"],
    isNew: true
  },
  {
    id: "GL-N11",
    title: "Copernicus Masters \u2013 Challenge for MENA EO Innovation",
    description_short: "Annual European EO startup and innovation competition with a dedicated MENA-focused challenge track, offering EUR 20K prize and ESA fast-track support to winners.",
    type: "tender",
    sponsor_institution: "Copernicus Programme (European Commission / ESA)",
    country: "Europe",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups, SMEs, researchers",
    funding_amount: "EUR 20K prize + ESA BIC fast-track support",
    funding_type: "grant",
    application_link: "https://copernicus-masters.com",
    deadline_date: "Annual; submissions typically June\u2013September",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "researcher"],
    sectors: ["ict", "innovation", "environment"],
    isNew: true
  },
  {
    id: "GL-N12",
    title: "Space Capital \u2013 Deep Space Ventures Fund III",
    description_short: "Space Capital's third fund investing in GPS, geospatial, and space infrastructure layers, with active MENA deal-flow including Saudi-headquartered portfolio targets.",
    type: "investment_program",
    sponsor_institution: "Space Capital",
    country: "United States",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "USD 1M\u201310M Series A/B equity",
    funding_type: "equity",
    application_link: "https://www.spacecapital.com",
    deadline_date: "Rolling / Open",
    status: "open",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict"],
    isNew: true
  },
  {
    id: "GL-N13",
    title: "Seraphim Space \u2013 Space VC Camp (Accelerator)",
    description_short: "Seraphim's global space accelerator offers USD 100K per startup, 13-week programme, and follow-on investment pipeline for hardware and software space ventures from any country.",
    type: "accelerator",
    sponsor_institution: "Seraphim Space (Seraphim Capital, UK)",
    country: "United Kingdom",
    eligibility_region: "Global_including_Saudi",
    eligibility_entities: "startups",
    funding_amount: "USD 100K + potential follow-on VC investment",
    funding_type: "equity",
    application_link: "https://accelerator.seraphim.vc",
    deadline_date: "Annual cohort; check Seraphim Space website",
    status: "closed_but_recurring",
    language: "English",
    notes: "",
    last_verified: "2026-03-22",
    profiles: ["startup", "investor"],
    sectors: ["financial", "ict", "innovation"],
    isNew: true
  }
];



// ============================================================
// PAGINATION CONFIG â€” change PAGE_SIZE to adjust rows per page
// ============================================================
const PAGE_SIZE = 50;

// ============================================================
// APP STATE
// ============================================================
const state = {
  search: '',
  countryGroup: 'all',
  type: 'all',
  status: 'all',
  profile: 'all',
  sector: 'all',
  showNew: false,
  page: 1
};

// Chart instances stored for theme-toggle rebuild
const charts = {};

// ============================================================
// HELPERS
// ============================================================
function getRegionGroup(opp) {
  const id = (opp.id || '').toUpperCase();
  if (id.startsWith('SA-'))  return 'saudi';
  if (id.startsWith('GCC-')) return 'gcc';
  if (id.startsWith('GL-'))  return 'global';
  if (opp.country === 'Saudi Arabia') return 'saudi';
  if (['UAE','Oman','Qatar','Bahrain','Kuwait','GCC'].includes(opp.country)) return 'gcc';
  return 'global';
}

function formatStatusLabel(s) {
  return { open:'Open', closed_but_recurring:'Recurring', closed:'Closed' }[s] || s;
}
function formatTypePill(t) {
  return { grant:'Grant', tender:'Tender', accelerator:'Accelerator',
           investment_program:'Investment', fellowship:'Fellowship', other:'Other' }[t] || t;
}
function getStatusClass(s) {
  return { open:'status-open', closed_but_recurring:'status-recurring', closed:'status-closed' }[s] || 'status-open';
}
function getTypeClass(t) {
  return { grant:'type-grant', tender:'type-tender', accelerator:'type-accel',
           investment_program:'type-invest', fellowship:'type-fellow', other:'type-other' }[t] || 'type-other';
}
function getRegionClass(g) {
  return { saudi:'region-saudi', gcc:'region-gcc', global:'region-global' }[g] || 'region-global';
}
function getRegionLabel(g) {
  return { saudi:'Saudi Arabia', gcc:'GCC', global:'Global' }[g] || 'Global';
}

// ============================================================
// SORT
// ============================================================
function deadlineSortKey(opp) {
  const d = (opp.deadline_date || '').toLowerCase();
  if (!d || d.includes('rolling') || d.includes('open')) return 9000;
  if (d.includes('recurring') || d.includes('closed'))   return 9500;
  const yr = d.match(/20(\d\d)/);
  if (yr) {
    const y = 2000 + parseInt(yr[1]);
    const moMatch = d.match(/\b(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i);
    const mo = moMatch ? {jan:0,feb:1,mar:2,apr:3,may:4,jun:5,jul:6,aug:7,sep:8,oct:9,nov:10,dec:11}[moMatch[1].toLowerCase()] : 6;
    return y * 100 + mo;
  }
  return 8000;
}

function sortOpportunities(list) {
  const ro = { saudi:0, gcc:1, global:2 };
  return [...list].sort((a, b) => {
    const rA = ro[getRegionGroup(a)] ?? 3;
    const rB = ro[getRegionGroup(b)] ?? 3;
    return rA !== rB ? rA - rB : deadlineSortKey(a) - deadlineSortKey(b);
  });
}

// ============================================================
// FILTER
// ============================================================
function profileMatchesEntities(entities, profile) {
  if (!entities || profile === 'all') return true;
  const e = entities.toLowerCase();
  if (profile === 'startup')    return e.includes('startup') || e.includes('sme');
  if (profile === 'researcher') return e.includes('researcher') || e.includes('universit');
  if (profile === 'government') return e.includes('government') || e.includes('public sector') || e.includes('corporation');
  if (profile === 'investor')   return e.includes('investor');
  if (profile === 'student')    return e.includes('student');
  return true;
}

function filterOpportunities() {
  return opportunitiesData.filter(opp => {
    if (state.countryGroup !== 'all' && getRegionGroup(opp) !== state.countryGroup) return false;
    if (state.sector !== 'all') {
      const s = opp.sectors || [];
      if (s.length > 0 && !s.includes(state.sector)) return false;
    }
    if (state.type   !== 'all' && opp.type   !== state.type)   return false;
    if (state.status !== 'all' && opp.status !== state.status) return false;
    if (state.profile !== 'all') {
      const entities  = (opp.eligibility_entities || '').toLowerCase();
      const profiles  = opp.profiles || [];
      if (!profiles.includes(state.profile) && !profileMatchesEntities(entities, state.profile)) return false;
    }
    if (state.showNew && !opp.isNew) return false;
    if (state.search) {
      const q = state.search.toLowerCase();
      if (!(opp.title || '').toLowerCase().includes(q) &&
          !(opp.sponsor_institution || '').toLowerCase().includes(q) &&
          !(opp.description_short || '').toLowerCase().includes(q)) return false;
    }
    return true;
  });
}

// ============================================================
// RENDER TABLE + PAGINATION
// ============================================================
function renderTable() {
  const tbody = document.getElementById('oppsTableBody');
  const paginationEl = document.getElementById('pagination');
  if (!tbody) return;

  const filtered   = sortOpportunities(filterOpportunities());
  const total      = filtered.length;
  const totalPages = Math.max(1, Math.ceil(total / PAGE_SIZE));

  state.page = Math.max(1, Math.min(state.page, totalPages));

  const start    = (state.page - 1) * PAGE_SIZE;
  const end      = Math.min(start + PAGE_SIZE, total);
  const pageData = filtered.slice(start, end);

  const countEl = document.getElementById('resultsCount');
  if (countEl) {
    if (total === 0) {
      countEl.textContent = '0 opportunities';
    } else if (total === opportunitiesData.length) {
      countEl.textContent = total + ' opportunities';
    } else {
      countEl.textContent = total + ' of ' + opportunitiesData.length + ' opportunities';
    }
  }

  if (total === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="empty-state">' +
      '<div class="empty-icon">\uD83D\uDD0D</div>' +
      '<div class="empty-title">No matches found</div>' +
      '<div class="empty-sub">Try adjusting filters or clearing the search</div>' +
      '</td></tr>';
    if (paginationEl) paginationEl.innerHTML = '';
    return;
  }

  tbody.innerHTML = pageData.map(opp => {
    const group    = getRegionGroup(opp);
    const newBadge = opp.isNew ? '<span class="badge-new">NEW</span>' : '';
    const deadline = opp.deadline_date || 'Rolling / Open';
    return '<tr data-id="' + opp.id + '" tabindex="0" role="button" aria-label="View details for ' + opp.title + '">' +
      '<td class="col-title">' +
        '<div class="title-wrap">' +
          '<a href="' + (opp.application_link || '#') + '" target="_blank" rel="noopener noreferrer" class="opp-title-link" onclick="event.stopPropagation()">' + opp.title + '</a>' + newBadge +
        '</div>' +
        '<div class="opp-sponsor">' + opp.sponsor_institution + '</div>' +
      '</td>' +
      '<td><span class="pill ' + getTypeClass(opp.type) + '">' + formatTypePill(opp.type) + '</span></td>' +
      '<td><span class="region-tag ' + getRegionClass(group) + '">' + getRegionLabel(group) + '</span></td>' +
      '<td class="col-eligibility">' + (opp.eligibility_entities || '&mdash;') + '</td>' +
      '<td class="col-funding">' + (opp.funding_amount || '&mdash;') + '</td>' +
      '<td><span class="status-badge ' + getStatusClass(opp.status) + '">' + formatStatusLabel(opp.status) + '</span></td>' +
      '<td class="col-deadline">' + deadline + '</td>' +
    '</tr>';
  }).join('');

  tbody.querySelectorAll('tr[data-id]').forEach(row => {
    row.addEventListener('click', () => openPanel(row.dataset.id));
    row.addEventListener('keydown', e => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); openPanel(row.dataset.id); }
    });
  });

  renderPagination(totalPages, total, start, end);
}

// ============================================================
// PAGINATION RENDERER
// ============================================================
function getPageNumbers(cur, total) {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const pages = [1];
  if (cur > 3) pages.push('...');
  for (let p = Math.max(2, cur - 1); p <= Math.min(total - 1, cur + 1); p++) pages.push(p);
  if (cur < total - 2) pages.push('...');
  pages.push(total);
  return pages;
}

function renderPagination(totalPages, total, start, end) {
  const el = document.getElementById('pagination');
  if (!el) return;

  if (totalPages <= 1) { el.innerHTML = ''; return; }

  const cur = state.page;
  let html = '<button class="page-btn" id="pgPrev" aria-label="Previous page"' + (cur === 1 ? ' disabled' : '') + '>&#8592;</button>';

  let lastEllipsis = false;
  getPageNumbers(cur, totalPages).forEach(p => {
    if (p === '...') {
      if (!lastEllipsis) html += '<span class="page-ellipsis">&hellip;</span>';
      lastEllipsis = true;
    } else {
      lastEllipsis = false;
      html += '<button class="page-btn' + (p === cur ? ' active' : '') + '" data-page="' + p + '" aria-label="Page ' + p + '" aria-current="' + (p === cur ? 'page' : 'false') + '">' + p + '</button>';
    }
  });

  html += '<button class="page-btn" id="pgNext" aria-label="Next page"' + (cur === totalPages ? ' disabled' : '') + '>&#8594;</button>';
  html += '<span class="page-info">Showing ' + (start + 1) + '&ndash;' + end + ' of ' + total + '</span>';

  el.innerHTML = html;

  el.querySelectorAll('[data-page]').forEach(btn => {
    btn.addEventListener('click', () => {
      state.page = parseInt(btn.dataset.page);
      renderTable();
      scrollToSection();
    });
  });

  const prev = el.querySelector('#pgPrev');
  const next = el.querySelector('#pgNext');
  if (prev) prev.addEventListener('click', () => { if (state.page > 1) { state.page--; renderTable(); scrollToSection(); } });
  if (next) next.addEventListener('click', () => { if (state.page < totalPages) { state.page++; renderTable(); scrollToSection(); } });
}

function scrollToSection() {
  const sec = document.getElementById('opportunities');
  if (sec) sec.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

// ============================================================
// DETAIL PANEL
// ============================================================
let activePanelId = null;

const SECTOR_LABELS = {
  agriculture:'Agriculture & Food Processing', energy:'Energy',
  healthcare:'Healthcare & Life Sciences',    environment:'Environment Services',
  industrial:'Industrial & Manufacturing',    pharma:'Pharma & Biotech',
  chemicals:'Chemicals',                      realestate:'Real Estate',
  financial:'Financial Services',             transport:'Transport & Logistics',
  mining:'Mining & Metals',                   tourism:'Tourism & Quality of Life',
  education:'Education',                      ict:'ICT',
  innovation:'Innovation & Entrepreneurship'
};

function openPanel(id) {
  const opp = opportunitiesData.find(o => o.id === id);
  if (!opp) return;

  activePanelId = id;
  const panel   = document.getElementById('detailPanel');
  const overlay = document.getElementById('panelOverlay');
  if (!panel || !overlay) return;

  const group = getRegionGroup(opp);

  document.getElementById('panelTitle').textContent = opp.title;
  document.getElementById('panelBadges').innerHTML =
    '<span class="pill ' + getTypeClass(opp.type) + '">' + formatTypePill(opp.type) + '</span> ' +
    '<span class="region-tag ' + getRegionClass(group) + '">' + getRegionLabel(group) + '</span> ' +
    '<span class="status-badge ' + getStatusClass(opp.status) + '">' + formatStatusLabel(opp.status) + '</span>' +
    (opp.isNew ? ' <span class="badge-new">NEW</span>' : '');

  document.getElementById('panelDesc').textContent = opp.description_short || '';

  const sectorDisplay = (opp.sectors || []).map(s => SECTOR_LABELS[s] || s).join(', ') || 'â€”';

  const fields = [
    ['Sponsor / Institution', opp.sponsor_institution],
    ['Sector(s)',             sectorDisplay],
    ['Funding Amount',        opp.funding_amount],
    ['Funding Type',          opp.funding_type],
    ['Eligibility',           opp.eligibility_entities],
    ['Deadline / Timing',     opp.deadline_date || 'Rolling / Open'],
    ['Language',              opp.language],
    opp.notes ? ['Notes', opp.notes] : null,
    ['Last Verified',         opp.last_verified]
  ].filter(Boolean);

  document.getElementById('panelFields').innerHTML = fields.map(([label, value]) =>
    '<div class="panel-field">' +
      '<div class="panel-field-label">' + label + '</div>' +
      '<div class="panel-field-value">' + (value || '&mdash;') + '</div>' +
    '</div>'
  ).join('');

  const linkBtn = document.getElementById('panelLink');
  if (linkBtn) {
    linkBtn.href = opp.application_link || '#';
    linkBtn.textContent = opp.application_link ? 'Visit official page \u2192' : 'No link available';
  }

  document.querySelectorAll('#oppsTableBody tr').forEach(r => r.classList.remove('panel-active'));
  const activeRow = document.querySelector('#oppsTableBody tr[data-id="' + id + '"]');
  if (activeRow) activeRow.classList.add('panel-active');

  panel.classList.add('open');
  overlay.classList.add('visible');
  document.body.classList.add('panel-open');
  panel.setAttribute('aria-hidden', 'false');
  document.getElementById('panelClose').focus();
}

function closePanel() {
  activePanelId = null;
  const panel   = document.getElementById('detailPanel');
  const overlay = document.getElementById('panelOverlay');
  if (panel)   { panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true'); }
  if (overlay) overlay.classList.remove('visible');
  document.body.classList.remove('panel-open');
  document.querySelectorAll('#oppsTableBody tr').forEach(r => r.classList.remove('panel-active'));
}

// ============================================================
// KPI COUNTERS
// ============================================================
function updateKPIs() {
  const totals = { saudi: 0, gcc: 0, global: 0 };
  opportunitiesData.forEach(o => { totals[getRegionGroup(o)]++; });

  animateCount('kpiSaudi',  totals.saudi);
  animateCount('kpiGcc',    totals.gcc);
  animateCount('kpiGlobal', totals.global);
  animateCount('kpiTotal',  opportunitiesData.length);

  const aboutTotal = document.getElementById('aboutTotalCount');
  if (aboutTotal) aboutTotal.textContent = opportunitiesData.length + ' opportunities';

  const snap = document.getElementById('landscapeSnapshot');
  if (snap) {
    snap.innerHTML =
      '<strong style="color:var(--text);">Dataset snapshot (March 2026):</strong> ' +
      opportunitiesData.length + ' opportunities tracked across Saudi Arabia (' + totals.saudi + '), ' +
      'GCC (' + totals.gcc + '), and global programs (' + totals.global + ') ' +
      'spanning grants, tenders, accelerators, investment programs, and fellowships ' +
      'across 15 key sectors aligned with Vision 2030.';
  }
}

function animateCount(elId, target) {
  const el = document.getElementById(elId);
  if (!el) return;
  let cur = 0;
  const step = Math.max(1, Math.floor(target / 40));
  const timer = setInterval(() => {
    cur = Math.min(cur + step, target);
    el.textContent = cur;
    if (cur >= target) clearInterval(timer);
  }, 20);
}

// ============================================================
// RECENTLY ADDED WIDGET
// ============================================================
function renderRecentlyAdded() {
  const container = document.getElementById('recentlyAddedList');
  if (!container) return;

  const newEntries = opportunitiesData.filter(o => o.isNew).slice(0, 12);
  if (newEntries.length === 0) {
    container.innerHTML = '<p class="no-recent">No new entries at this time. Check back soon.</p>';
    return;
  }

  container.innerHTML = newEntries.map(opp => {
    const group = getRegionGroup(opp);
    return '<div class="changelog-item">' +
      '<div class="changelog-item-title">' +
        '<a href="' + (opp.application_link || '#') + '" class="changelog-link" target="_blank" rel="noopener noreferrer">' + opp.title + '</a>' +
      '</div>' +
      '<div class="changelog-item-meta">' +
        '<span class="pill ' + getTypeClass(opp.type) + ' pill-xs">' + formatTypePill(opp.type) + '</span>' +
        '<span class="region-tag ' + getRegionClass(group) + ' tag-xs">' + getRegionLabel(group) + '</span>' +
        '<span class="status-badge ' + getStatusClass(opp.status) + ' badge-xs">' + formatStatusLabel(opp.status) + '</span>' +
        '<span class="changelog-date">Added ' + (opp.last_verified || 'recently') + '</span>' +
      '</div>' +
    '</div>';
  }).join('');
}

// ============================================================
// CHARTS
// ============================================================
function destroyCharts() {
  Object.keys(charts).forEach(k => {
    if (charts[k]) { charts[k].destroy(); delete charts[k]; }
  });
}

function initCharts() {
  if (typeof Chart === 'undefined') return;
  destroyCharts();

  const isDark    = document.documentElement.getAttribute('data-theme') !== 'light';
  const textColor = isDark ? '#7c89ab' : '#64748b';
  const gridColor = isDark ? '#1e2840' : '#e2e8f0';
  const bgColor   = isDark ? '#0f1420' : '#ffffff';

  Chart.defaults.color       = textColor;
  Chart.defaults.borderColor = gridColor;
  Chart.defaults.font.family = "'Space Grotesk', 'Inter', sans-serif";

  const data = opportunitiesData;

  const typeCounts = {};
  data.forEach(o => { typeCounts[o.type] = (typeCounts[o.type] || 0) + 1; });
  const typeLabels = { grant:'Grant', tender:'Tender / Competition', accelerator:'Accelerator',
                       investment_program:'Investment Program', fellowship:'Fellowship', other:'Other' };
  const typeColors = ['#00a651','#f5a623','#4f9cf9','#a855f7','#f97316','#7c89ab'];

  const typeEl = document.getElementById('typeChart');
  if (typeEl) {
    charts.type = new Chart(typeEl, {
      type: 'doughnut',
      data: {
        labels: Object.keys(typeCounts).map(k => typeLabels[k] || k),
        datasets: [{ data: Object.values(typeCounts), backgroundColor: typeColors,
                     borderColor: bgColor, borderWidth: 3, hoverBorderWidth: 3, hoverOffset: 6 }]
      },
      options: {
        responsive: true, maintainAspectRatio: true, cutout: '62%',
        plugins: {
          legend: { position: 'right', labels: { padding: 14, boxWidth: 12, font: { size: 12 } } },
          tooltip: { callbacks: { label: ctx => ' ' + ctx.label + ': ' + ctx.raw + ' (' + Math.round(ctx.raw / data.length * 100) + '%)' } }
        }
      }
    });
  }

  const regionCounts = { saudi: 0, gcc: 0, global: 0 };
  data.forEach(o => { regionCounts[getRegionGroup(o)]++; });

  const regionEl = document.getElementById('regionChart');
  if (regionEl) {
    charts.region = new Chart(regionEl, {
      type: 'bar',
      data: {
        labels: ['Saudi Arabia', 'GCC', 'Global'],
        datasets: [{ label: 'Opportunities',
                     data: [regionCounts.saudi, regionCounts.gcc, regionCounts.global],
                     backgroundColor: ['#00a651','#f5a623','#4f9cf9'],
                     borderRadius: 6, borderSkipped: false }]
      },
      options: {
        responsive: true, maintainAspectRatio: true, indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { display: false }, ticks: { color: textColor, font: { size: 13, weight: '500' } } }
        }
      }
    });
  }

  const statusCounts = { open: 0, closed_but_recurring: 0, closed: 0 };
  data.forEach(o => { statusCounts[o.status] = (statusCounts[o.status] || 0) + 1; });

  const statusEl = document.getElementById('statusChart');
  if (statusEl) {
    charts.status = new Chart(statusEl, {
      type: 'bar',
      data: {
        labels: ['Open', 'Recurring', 'Closed'],
        datasets: [{ label: 'Count',
                     data: [statusCounts.open, statusCounts.closed_but_recurring, statusCounts.closed || 0],
                     backgroundColor: ['#34d97b','#f5c842','#ef9090'],
                     borderRadius: 6, borderSkipped: false }]
      },
      options: {
        responsive: true, maintainAspectRatio: true,
        plugins: { legend: { display: false } },
        scales: {
          y: { grid: { color: gridColor }, ticks: { color: textColor } },
          x: { grid: { display: false }, ticks: { color: textColor, font: { size: 13, weight: '500' } } }
        }
      }
    });
  }

  const sponsorCounts = {};
  data.forEach(o => {
    const name = (o.sponsor_institution || 'Unknown').split(/[+,(]/)[0].trim();
    sponsorCounts[name] = (sponsorCounts[name] || 0) + 1;
  });
  const topSponsors = Object.entries(sponsorCounts).sort((a, b) => b[1] - a[1]).slice(0, 8);

  const sponsorEl = document.getElementById('sponsorChart');
  if (sponsorEl) {
    charts.sponsor = new Chart(sponsorEl, {
      type: 'bar',
      data: {
        labels: topSponsors.map(([k]) => k.length > 30 ? k.slice(0, 28) + '\u2026' : k),
        datasets: [{ label: 'Programs', data: topSponsors.map(([, v]) => v),
                     backgroundColor: '#00a651', borderRadius: 5, borderSkipped: false }]
      },
      options: {
        responsive: true, maintainAspectRatio: true, indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { grid: { color: gridColor }, ticks: { color: textColor } },
          y: { grid: { display: false }, ticks: { color: textColor, font: { size: 11 } } }
        }
      }
    });
  }
}

// ============================================================
// NAV HIGHLIGHT
// ============================================================
function initNavHighlight() {
  const sections = document.querySelectorAll('section[id]');
  const links    = document.querySelectorAll('.navbar-links a[href^="#"]');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        links.forEach(l => l.classList.remove('active'));
        const active = document.querySelector('.navbar-links a[href="#' + entry.target.id + '"]');
        if (active) active.classList.add('active');
      }
    });
  }, { rootMargin: '-40% 0px -55% 0px' });
  sections.forEach(s => observer.observe(s));
}

// ============================================================
// THEME TOGGLE
// ============================================================
function initTheme() {
  const html = document.documentElement;
  const btn  = document.querySelector('[data-theme-toggle]');
  const icon = document.getElementById('themeIcon');
  let currentTheme = 'dark';
  html.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme, icon);

  if (btn) {
    btn.addEventListener('click', () => {
      currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', currentTheme);
      updateThemeIcon(currentTheme, icon);
      setTimeout(initCharts, 50);
    });
  }
}

function updateThemeIcon(theme, icon) {
  if (!icon) return;
  if (theme === 'dark') {
    icon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
    icon.setAttribute('aria-label', 'Switch to light mode');
  } else {
    icon.innerHTML = '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
    icon.setAttribute('aria-label', 'Switch to dark mode');
  }
}

// ============================================================
// MOBILE MENU
// ============================================================
function initMobileMenu() {
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');
  if (!hamburger || !navLinks) return;

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('mobile-open');
    hamburger.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      navLinks.classList.remove('mobile-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================
// TOOLTIPS
// ============================================================
function initTooltips() {
  const tooltip = document.createElement('div');
  tooltip.className = 'tooltip-box';
  tooltip.setAttribute('role', 'tooltip');
  document.body.appendChild(tooltip);

  document.querySelectorAll('[data-tooltip]').forEach(el => {
    el.addEventListener('mouseenter', () => {
      tooltip.textContent = el.dataset.tooltip;
      tooltip.classList.add('visible');
    });
    el.addEventListener('mousemove', e => {
      tooltip.style.left = (e.clientX + 12) + 'px';
      tooltip.style.top  = (e.clientY - 8)  + 'px';
    });
    el.addEventListener('mouseleave', () => tooltip.classList.remove('visible'));
  });
}

// ============================================================
// SCROLL ANIMATIONS
// ============================================================
function initScrollAnimations() {
  const els = document.querySelectorAll('.kpi-card, .who-item, .insight-card, .audience-card');
  if (!els.length) return;
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  els.forEach(el => { el.classList.add('fade-up'); observer.observe(el); });
}

// ============================================================
// RESET FILTERS
// ============================================================
function resetAllFilters() {
  state.search = '';
  state.countryGroup = 'all';
  state.type   = 'all';
  state.status = 'all';
  state.profile = 'all';
  state.sector = 'all';
  state.showNew = false;
  state.page = 1;

  ['sectorFilter','countryFilter','typeFilter','statusFilter'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = 'all';
  });
  const si = document.getElementById('searchInput');
  if (si) si.value = '';

  document.querySelectorAll('.profile-chip').forEach(c => c.classList.remove('active'));
  const allChip = document.querySelector('.profile-chip[data-profile="all"]');
  if (allChip) allChip.classList.add('active');
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileMenu();
  updateKPIs();
  renderTable();
  renderRecentlyAdded();
  initNavHighlight();
  initTooltips();
  initScrollAnimations();
  setTimeout(initCharts, 100);

  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.search = searchInput.value.trim();
      state.page = 1;
      renderTable();
    });
  }

  const sectorFilter = document.getElementById('sectorFilter');
  if (sectorFilter) {
    sectorFilter.addEventListener('change', () => {
      state.sector = sectorFilter.value;
      state.page = 1;
      renderTable();
    });
  }

  const countryFilter = document.getElementById('countryFilter');
  if (countryFilter) {
    countryFilter.addEventListener('change', () => {
      state.countryGroup = countryFilter.value;
      state.page = 1;
      renderTable();
    });
  }

  const typeFilter = document.getElementById('typeFilter');
  if (typeFilter) {
    typeFilter.addEventListener('change', () => {
      state.type = typeFilter.value;
      state.page = 1;
      renderTable();
    });
  }

  const statusFilter = document.getElementById('statusFilter');
  if (statusFilter) {
    statusFilter.addEventListener('change', () => {
      state.status = statusFilter.value;
      state.page = 1;
      renderTable();
    });
  }

  document.querySelectorAll('.profile-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const value = chip.dataset.profile;
      if (value === 'new') {
        state.showNew = !state.showNew;
        chip.classList.toggle('active', state.showNew);
      } else {
        document.querySelectorAll('.profile-chip:not([data-profile="new"])').forEach(c => c.classList.remove('active'));
        state.profile = (state.profile === value) ? 'all' : value;
        if (state.profile !== 'all') chip.classList.add('active');
      }
      state.page = 1;
      renderTable();
    });
  });

  const resetBtn = document.getElementById('resetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetAllFilters();
      renderTable();
    });
  }

  const panelClose = document.getElementById('panelClose');
  if (panelClose) panelClose.addEventListener('click', closePanel);

  const overlay = document.getElementById('panelOverlay');
  if (overlay) overlay.addEventListener('click', closePanel);

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

  const feedbackForm = document.getElementById('feedbackForm');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const text = document.getElementById('feedbackText')?.value?.trim();
      if (!text) return;
      const success = document.getElementById('formSuccess');
      if (success) {
        success.style.display = 'block';
        this.reset();
        setTimeout(() => { success.style.display = 'none'; }, 5000);
      }
    });
  }
});
