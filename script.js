// ============================================================
// OPPORTUNITY HUB — opportunitiesData.js
// Full dataset: 214 entries
//
// Field reference:
//   id                  – unique string, e.g. "SA-001"
//   title               – opportunity name
//   description_short   – 1-3 sentence summary
//   type                – grant | tender | accelerator | investment_program | fellowship | other
//   sponsor_institution – issuing organization name(s)
//   country             – e.g. "Saudi Arabia", "UAE", "Global"
//   eligibility_region  – Saudi_only | Saudi_GCC | GCC | Global_including_Saudi
//   eligibility_entities– e.g. "startups, SMEs, researchers"
//   funding_amount      – string description of amount
//   funding_type        – grant | equity | contract | in-kind | mixed
//   application_link    – URL string
//   deadline_date       – human-readable string
//   status              – open | closed_but_recurring | closed
//   language            – e.g. "English", "Arabic"
//   notes               – extra notes string (can be empty "")
//   last_verified       – "YYYY-MM-DD"
//   profiles            – array: ["startup","researcher","government","investor","student"]
//   sectors             – array of sector keys
//                         Valid keys: agriculture | energy | healthcare | environment |
//                         industrial | pharma | chemicals | realestate | financial |
//                         transport | mining | tourism | education | ict | innovation
//   isNew               – true = shown in NEW chip & "Recently added" widget
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
title: "Custodian of the Two Holy Mosques Scholarship \u2013 Space Fields",
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
title: "RDIA Research Grants \u2013 National Priorities",
description_short: "Multi-program research grants from Saudi RDI Authority supporting basic science, applied research, emerging investigators, and flagship research aligned with national priorities including space-adjacent fields.",
type: "grant",
sponsor_institution: "Research, Development and Innovation Authority (RDIA)",
country: "Saudi Arabia",
eligibility_region: "Saudi_only",
eligibility_entities: "universities, researchers, SMEs, government",
funding_amount: "Varies by program",
funding_type: "grant",
application_link: "
https://saudiminds.rdia.gov.sa
",
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
application_link: "
https://hub.misk.org.sa/programs/entrepreneurship/misk-accelerator/
",
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
application_link: "
https://www.ssa.gov.sa/spaceacademyen/
",
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
title: "Neo Space Group \u2013 EO Marketplace & Partnerships",
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
funding_type: "loan",
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
title: "CST Space Sector Regulations \u2013 Public Consultation & Licensing",
description_short: "CST published comprehensive space sector regulations for public consultation in Dec 2025, covering licensing, space object operations, spaceports, insurance, and national registry.",
type: "other",
sponsor_institution: "Communications, Space & Technology Commission (CST)",
country: "Saudi Arabia",
eligibility_region: "Global_including_Saudi",
eligibility_entities: "startups, SMEs, government, investors",
funding_amount: "N/A (regulatory framework)",
funding_type: "N/A",
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
funding_type: "N/A",
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
funding_type: "N/A",
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
title: "PIF-backed Space Ventures \u2013 Direct Investment",
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
application_link: "
https://ssa.gov.sa/en/humanSpaceProgram/?path=%2Fhuman-space-program%2F
",
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
title: "KAUST Research Grants \u2013 Space Technology Track",
description_short: "Research funding for space-related projects at King Abdullah University of Science and Technology.",
type: "grant",
sponsor_institution: "King Abdullah University of Science and Technology (KAUST)",
country: "Saudi Arabia",
eligibility_region: "Saudi_only",
eligibility_entities: "universities, researchers",
funding_amount: "Typically USD 50K\u2013500K per grant",
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
title: "KAFD Startup Hub \u2013 Space Track",
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
title: "ISU Executive Space Course \u2013 Riyadh (ESC26)",
description_short: "Four-day intensive executive program covering key dimensions of the space ecosystem, rescheduled to 12\u201315 April 2026 in Riyadh with Saudi Space Academy as Knowledge Partner.",
type: "fellowship",
sponsor_institution: "International Space University (ISU) + Saudi Space Academy",
country: "Saudi Arabia",
eligibility_region: "Global_including_Saudi",
eligibility_entities: "government, investors, startups, universities",
funding_amount: "Fee-based program (executive education)",
funding_type: "other",
application_link: "https://www.isunet.edu/esc26-saudi-arabia/",
deadline_date: "12\u201315 April 2026",
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
description_short: "Non-dilutive grants of SAR 250K\u20132.5M covering 70\u201390% of project costs for Saudi AI startups; 90% coverage rate for female founders.",
type: "grant",
sponsor_institution: "Monsha'at",
country: "Saudi Arabia",
eligibility_region: "Saudi_only",
eligibility_entities: "startups, SMEs",
funding_amount: "SAR 250K\u20132.5M (70\u201390% cost coverage)",
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
title: "TAQNIA Space \u2013 Satellite Manufacturing JVs",
description_short: "PIF-owned Saudi Technology Development and Investment Company with satellite manufacturing joint ventures; partner for technology localization and commercial satellite opportunities.",
type: "other",
sponsor_institution: "TAQNIA Space (PIF)",
country: "Saudi Arabia",
eligibility_region: "Global_including_Saudi",
eligibility_entities: "startups, SMEs, investors",
funding_amount: "N/A (JV and commercial partnership opportunities)",
funding_type: "equity",
application_link: "
https://www.taqniaspace.com.sa
",
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
application_link: "
https://500.co/founders/mena/seed-accelerator
",
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
application_link: "
https://www.stc.com/content/stcgroupwebsite/sa/en/inspire-u/apply-now.html
",
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
description_short: "Seed-stage accelerator in Jeddah providing USD 10\u201320K investment for 10\u201320% equity, supporting early-stage tech startups.",
type: "accelerator",
sponsor_institution: "Flat6Labs",
country: "Saudi Arabia",
eligibility_region: "Saudi_only",
eligibility_entities: "startups",
funding_amount: "USD 10\u201320K for 10\u201320% equity",
funding_type: "equity",
application_link: "
https://flat6labs.com/Location/ksa/
",
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
application_link: "
https://saudiminds.rdia.gov.sa
",
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
application_link: "
https://www.cst.gov.sa/en/about/program-and-initiatives/Communications-Space-Technology-Regulatory-Sandbox
",
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
application_link: "
https://saudiminds.rdia.gov.sa
",
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
title: "Saudi Space Agency \u2013 Commercial Space License Window",
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
title: "Red Sea Global Innovation Challenge \u2013 Sustainability Tech",
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
title: "Aramco Entrepreneurship Center (Wa'ed) \u2013 Ventures",
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
title: "SABIC Ventures \u2013 Deeptech Co-investment",
description_short: "SABIC's corporate venture capital arm investing in advanced materials, chemicals, and manufacturing technology startups with supply chain relevance to space.",
type: "investment_program",
sponsor_institution: "SABIC",
country: "Saudi Arabia",
eligibility_region: "Global_including_Saudi",
eligibility_entities: "startups, SMEs",
funding_amount: "Variable / undisclosed",
funding_type: "equity",
application_link: "
https://ventures.sabic.com
",
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
title: "Misk Innovation \u2013 Space & DeepTech Cohort",
description_short: "Misk Foundation cohort program focused on deep technology including space applications, AI, and biotechnology.",
type: "accelerator",
sponsor_institution: "Misk Foundation",
country: "Saudi Arabia",
eligibility_region: "Global_including_Saudi",
eligibility_entities: "startups, students",
funding_amount: "Variable / undisclosed (grant + mentorship)",
funding_type: "grant",
application_link: "
https://hub.misk.org.sa
",
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
title: "KAFD Fintech & Innovation Hub \u2013 Space Finance Track",
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
title: "SSA Astronaut Program \u2013 Research Payload Opportunities",
description_short: "Saudi Space Agency astronaut program featuring Rayyanah Barnawi and Ali AlQarni; open calls for research payloads and scientific experiments for future missions.",
type: "grant",
sponsor_institution: "Saudi Space Agency (SSA)",
country: "Saudi Arabia",
eligibility_region: "Saudi_only",
eligibility_entities: "researchers, universities",
funding_amount: "In-kind (launch and mission support)",
funding_type: "in-kind",
application_link: "
https://ssa.gov.sa/en/humanSpaceProgram/?path=%2Fhuman-space-program%2F
",
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
title: "Monsha'at Export Development Program \u2013 Space Products",
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
title: "PIF \u2013 ROSHN Smart Cities Technology Partners",
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
title: "KAUST \u2013 CEMSE Space Systems Research Group",
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
}
];

// ============================================================
// PAGINATION CONFIG — change PAGE_SIZE to adjust rows per page
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

  // Clamp page
  state.page = Math.max(1, Math.min(state.page, totalPages));

  const start    = (state.page - 1) * PAGE_SIZE;
  const end      = Math.min(start + PAGE_SIZE, total);
  const pageData = filtered.slice(start, end);

  // Result count label
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

  // Empty state
  if (total === 0) {
    tbody.innerHTML = '<tr><td colspan="7" class="empty-state">' +
      '<div class="empty-icon">\uD83D\uDD0D</div>' +
      '<div class="empty-title">No matches found</div>' +
      '<div class="empty-sub">Try adjusting filters or clearing the search</div>' +
      '</td></tr>';
    if (paginationEl) paginationEl.innerHTML = '';
    return;
  }

  // Render rows
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

  // Row click → detail panel
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

  const sectorDisplay = (opp.sectors || []).map(s => SECTOR_LABELS[s] || s).join(', ') || '—';

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
// KPI COUNTERS — calculated from opportunitiesData
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
// CHARTS — built entirely from opportunitiesData
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

  // ── By type ──
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

  // ── By region ──
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

  // ── By status ──
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

  // ── Top sponsors ──
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
      setTimeout(initCharts, 50); // rebuild with new theme colours
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

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      state.search = searchInput.value.trim();
      state.page = 1;
      renderTable();
    });
  }

  // Sector
  const sectorFilter = document.getElementById('sectorFilter');
  if (sectorFilter) {
    sectorFilter.addEventListener('change', () => {
      state.sector = sectorFilter.value;
      state.page = 1;
      renderTable();
    });
  }

  // Country
  const countryFilter = document.getElementById('countryFilter');
  if (countryFilter) {
    countryFilter.addEventListener('change', () => {
      state.countryGroup = countryFilter.value;
      state.page = 1;
      renderTable();
    });
  }

  // Type
  const typeFilter = document.getElementById('typeFilter');
  if (typeFilter) {
    typeFilter.addEventListener('change', () => {
      state.type = typeFilter.value;
      state.page = 1;
      renderTable();
    });
  }

  // Status
  const statusFilter = document.getElementById('statusFilter');
  if (statusFilter) {
    statusFilter.addEventListener('change', () => {
      state.status = statusFilter.value;
      state.page = 1;
      renderTable();
    });
  }

  // Profile chips
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

  // Reset
  const resetBtn = document.getElementById('resetFilters');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      resetAllFilters();
      renderTable();
    });
  }

  // Panel close
  const panelClose = document.getElementById('panelClose');
  if (panelClose) panelClose.addEventListener('click', closePanel);

  const overlay = document.getElementById('panelOverlay');
  if (overlay) overlay.addEventListener('click', closePanel);

  document.addEventListener('keydown', e => { if (e.key === 'Escape') closePanel(); });

  // Feedback form
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
