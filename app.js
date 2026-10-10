/* Kakinada Internship Finder
   Frontend-only demo: records, accounts and saved items live in this browser's localStorage.
   Admin demo credentials: admin / kakinada123
   Do not use this demo password for any real service. There is no server-side authentication.
*/
const STORAGE = {
  listings: "kif_listings_v1",
  saved: "kif_saved_v1",
  student: "kif_student_v1",
  accounts: "kif_accounts_v1",
  currentUser: "kif_current_user_v1",
  admin: "kif_admin_v1",
  employers: "kif_employer_accounts_v1",
  currentEmployer: "kif_current_employer_v1"
};
const seedListings = [
  {
    id:"krify-web", company:"Krify Foundation", initials:"KF", tone:"blue",
    role:"Web Technologies Intern", category:"IT & Software",
    description:"Public programme page describes frontend and backend web technologies with project-based learning.",
    address:"7-39, Ratan Towers, ADB Road, Kakinada - 533005; near Medicover Hospital, Atchampet.",
    duration:"6 months (source page)", stipend:"Not disclosed", payType:"unknown", mode:"Training / in-person",
    eligibility:"Confirm eligibility with the programme team.", skills:"HTML, CSS, JavaScript, PHP, Node.js",
    contact:"hr@krify.com · +91 7901311111", email:"hr@krify.com", phone:"+91 7901311111",
    source:"https://krify.org/web-technologies.php", apply:"https://krify.org/web-technologies.php",
    map:"https://www.google.com/maps/search/?api=1&query=Krify+Foundation+Ratan+Towers+ADB+Road+Kakinada",
    status:"verified", statusText:"Programme page found", kind:"internship"
  },
  {
    id:"krify-multi", company:"Krify Foundation", initials:"KF", tone:"blue",
    role:"Technology & Business Internship Tracks", category:"IT & Software",
    description:"The official registration page lists interest areas such as testing, AI/ML, UI/UX, web, cybersecurity, HR, finance and project management. Ask which tracks are currently accepting students.",
    address:"7-39, Ratan Towers, ADB Road, Kakinada - 533005; near Medicover Hospital, Atchampet.",
    duration:"Confirm with provider", stipend:"Not disclosed", payType:"unknown", mode:"Training / in-person",
    eligibility:"Confirm current batch, eligibility and terms.", skills:"Choose an area of interest",
    contact:"hr@krify.com · +91 7901311111", email:"hr@krify.com", phone:"+91 7901311111",
    source:"https://www.krify.org/info.php?interest=7", apply:"https://www.krify.org/info.php?interest=7",
    map:"https://www.google.com/maps/search/?api=1&query=Krify+Foundation+Ratan+Towers+Kakinada",
    status:"verified", statusText:"Programme page found", kind:"internship"
  },
  {
    id:"stpi-kakinada", company:"Software Technology Parks of India (STPI)", initials:"ST", tone:"green",
    role:"IT / Startup Opportunity Enquiries", category:"IT & Software",
    description:"STPI Kakinada supports the local IT ecosystem and startup incubation. This is a networking lead, not a confirmed internship vacancy.",
    address:"Collectorate Compound, Kakinada - 533001, Andhra Pradesh.",
    duration:"Not applicable / ask for leads", stipend:"Not applicable", payType:"unknown", mode:"On-site",
    eligibility:"Ask STPI about local member companies and student opportunities.", skills:"IT, software, startup ecosystem",
    contact:"+91 884 6660115 / 123", email:"", phone:"+91 884 6660115",
    source:"https://hyderabad.stpi.in/en/kakinada", apply:"https://hyderabad.stpi.in/en/kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=STPI+Kakinada+Collectorate+Compound",
    status:"verified", statusText:"Official organisation page", kind:"lead"
  },
  {
    id:"vikasa", company:"VIKASA – Training & Placements", initials:"VK", tone:"green",
    role:"Training & Placement Enquiries", category:"Finance, HR & Business",
    description:"District training and placement organisation that shares employment and skill-development information. Ask about current youth programmes, job melas and internships.",
    address:"Kakinada District Collectorate area, Andhra Pradesh. Confirm the current visiting address before travelling.",
    duration:"Varies by programme", stipend:"Depends on opportunity", payType:"unknown", mode:"On-site",
    eligibility:"Depends on each programme or employer.", skills:"IT, ITES, healthcare, technical, marketing and other streams",
    contact:"8790952727 / 9494662925", email:"projectdirector@vikasajobs.com", phone:"8790952727",
    source:"https://kakinada.ap.gov.in/departments/vikasa/", apply:"https://www.vikasajobs.com/",
    map:"https://www.google.com/maps/search/?api=1&query=VIKASA+Kakinada+District+Collectorate",
    status:"verified", statusText:"Official district page", kind:"lead"
  },
  {
    id:"dart-marketing", company:"DART Marketing Solutions", initials:"DM", tone:"orange",
    role:"Digital Marketing Intern — Enquiry", category:"Digital Marketing",
    description:"Local digital marketing agency listed in public business directories. Internship availability has not been confirmed; contact the company directly.",
    address:"3rd Floor, 21-5-8, Indanamvari Street, Salipeta, Rama Rao Peta, Kakinada - 533001.",
    duration:"Not confirmed", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Ask the company about current openings and student eligibility.", skills:"Social media, SEO, content, web design",
    contact:"+91 95026 01531", email:"", phone:"+91 95026 01531",
    source:"https://www.google.com/maps/search/?api=1&query=DART+Marketing+Solutions+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=DART+Marketing+Solutions+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=DART+Marketing+Solutions+Kakinada",
    status:"lead", statusText:"Company lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"smart-chip", company:"Smart Chip Services", initials:"SC", tone:"blue",
    role:"Software & Digital Marketing — Enquiry", category:"IT & Software",
    description:"Local software and digital services provider. This listing is a company lead only, not an advertised internship.",
    address:"1st Floor, City Archade Apartment, 67-15-27/12, opposite JNTUK Main Gate, Nagamalli Thota, Ramanayyapeta, Kakinada - 533003.",
    duration:"Not confirmed", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Ask whether student internships or project training are available.", skills:"Web, software, digital marketing",
    contact:"+91 97018 30018", email:"", phone:"+91 97018 30018",
    source:"https://www.google.com/maps/search/?api=1&query=Smart+Chip+Services+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=Smart+Chip+Services+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=Smart+Chip+Services+Kakinada",
    status:"lead", statusText:"Company lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"ad-aegis", company:"AD aegis Digital Marketing", initials:"AA", tone:"purple",
    role:"Content & Digital Marketing — Enquiry", category:"Digital Marketing",
    description:"Local digital marketing and branding company. Contact to ask whether it accepts interns for content, design, campaigns or social media.",
    address:"Opposite Boat Club Park Road, beside NCC office, Srinivas Nagar, Bank Colony, Ramanayyapeta, Kakinada - 533003.",
    duration:"Not confirmed", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Confirm with company.", skills:"Content marketing, social media, branding",
    contact:"+91 73308 14541", email:"", phone:"+91 73308 14541",
    source:"https://www.google.com/maps/search/?api=1&query=AD+aegis+Digital+Marketing+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=AD+aegis+Digital+Marketing+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=AD+aegis+Digital+Marketing+Kakinada",
    status:"lead", statusText:"Company lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"adobuzz", company:"Adobuzz Analytics", initials:"AB", tone:"orange",
    role:"Marketing & Content — Enquiry", category:"Digital Marketing",
    description:"Kakinada marketing and advertising business listed publicly. Ask about current opportunities in content, social media, SEO or campaign support.",
    address:"Koppula Nageswarao Street, Sarpavaram Junction, near Yathi Restaurant, Ramanayyapeta, Kakinada - 533005.",
    duration:"Not confirmed", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Confirm with company.", skills:"Digital marketing, content, social media",
    contact:"077104 43331", email:"", phone:"077104 43331",
    source:"https://www.google.com/maps/search/?api=1&query=Adobuzz+Analytics+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=Adobuzz+Analytics+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=Adobuzz+Analytics+Kakinada",
    status:"lead", statusText:"Company lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"yexponent", company:"Yexponent", initials:"YX", tone:"green",
    role:"Software / IT Services — Enquiry", category:"IT & Software",
    description:"Software and IT services company with a listed Kakinada presence. No current internship vacancy verified; ask about openings directly.",
    address:"1st Street, Sarpavaram Junction, next to Fuel Station, Lalitha Nagar, Ramanayyapeta, Kakinada - 533005.",
    duration:"Not confirmed", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Confirm with company.", skills:"Software development and IT services",
    contact:"+91 99664 44003", email:"", phone:"+91 99664 44003",
    source:"https://www.google.com/maps/search/?api=1&query=Yexponent+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=Yexponent+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=Yexponent+Kakinada",
    status:"lead", statusText:"Company lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"isan", company:"iSAN Computers Education", initials:"IS", tone:"purple",
    role:"Computer / Software Training — Enquiry", category:"IT & Software",
    description:"Computer education and software training provider. Ask whether any project internship, practical training or placement-linked programme is available.",
    address:"D.No. 2-161/1, 2nd Floor, Thadala Complex, Bhanugudi Junction, Kakinada - 533003.",
    duration:"Depends on course", stipend:"Training fees may apply — confirm first", payType:"unknown", mode:"Training / in-person",
    eligibility:"Depends on the course.", skills:"Programming, AI, data science, networking and more",
    contact:"+91 89789 89444", email:"", phone:"+91 89789 89444",
    source:"https://www.google.com/maps/search/?api=1&query=iSAN+Computers+Education+Bhanugudi+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=iSAN+Computers+Education+Bhanugudi+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=iSAN+Computers+Education+Bhanugudi+Kakinada",
    status:"lead", statusText:"Training provider — programme unconfirmed", kind:"lead"
  },
  {
    id:"learntact", company:"Learntact Learning Center", initials:"LL", tone:"blue",
    role:"Technical Training / Project Enquiry", category:"Engineering & Core",
    description:"Local technical learning centre. Ask whether they offer practical projects, internships or industry-linked training; this is not a confirmed vacancy.",
    address:"1st Floor, Subhamasthu Showroom, D.No. 20-11-40, Majestic Street, Suryanarayana Puram, Kakinada - 533001.",
    duration:"Depends on programme", stipend:"Not disclosed", payType:"unknown", mode:"Training / in-person",
    eligibility:"Confirm with the provider.", skills:"Programming, SQL, cloud/DevOps and CAD-related training",
    contact:"+91 63031 14238", email:"", phone:"+91 63031 14238",
    source:"https://www.google.com/maps/search/?api=1&query=Learntact+Learning+Center+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=Learntact+Learning+Center+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=Learntact+Learning+Center+Kakinada",
    status:"lead", statusText:"Training provider — programme unconfirmed", kind:"lead"
  },
  {
    id:"apollo-health", company:"Apollo Hospitals, Kakinada", initials:"AH", tone:"green",
    role:"Healthcare / Administration — Enquiry", category:"Healthcare & Pharmacy",
    description:"Hospital directory lead for students to ask about formally approved clinical, administration or allied-health placements. No vacancy is confirmed here.",
    address:"13-1-3, Main Road, Surya Rao Peta, Kakinada - 533001.",
    duration:"Depends on department", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Clinical placements may require college approval and specific eligibility.", skills:"Healthcare, administration, allied health",
    contact:"+91 80 6904 9760", email:"", phone:"+91 80 6904 9760",
    source:"https://www.google.com/maps/search/?api=1&query=Apollo+Hospitals+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=Apollo+Hospitals+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=Apollo+Hospitals+Kakinada",
    status:"lead", statusText:"Company lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"medicover-health", company:"Medicover Hospitals, Kakinada", initials:"MH", tone:"green",
    role:"Healthcare / Administration — Enquiry", category:"Healthcare & Pharmacy",
    description:"Hospital directory lead. Contact the hospital and your college to confirm whether approved student placement or internship programmes are available.",
    address:"ADB Road, near Achampet Junction, Panasapadu, Kakinada - 533005.",
    duration:"Depends on department", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Confirm with hospital and educational institution.", skills:"Healthcare and hospital operations",
    contact:"+91 40 6833 4455", email:"", phone:"+91 40 6833 4455",
    source:"https://www.google.com/maps/search/?api=1&query=Medicover+Hospitals+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=Medicover+Hospitals+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=Medicover+Hospitals+Kakinada",
    status:"lead", statusText:"Company lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"trust-health", company:"Trust Multispeciality Hospitals", initials:"TH", tone:"orange",
    role:"Healthcare / Operations — Enquiry", category:"Healthcare & Pharmacy",
    description:"Local hospital lead for checking formally approved allied-health, administration or operations placements. No current vacancy verified.",
    address:"Near Jewel Meadows, Madhavapatnam Road, Sarpavaram / Ramanayyapeta, Kakinada - 533005.",
    duration:"Depends on department", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Confirm directly; clinical roles may require college approval.", skills:"Healthcare, allied health, operations",
    contact:"+91 99515 16000", email:"", phone:"+91 99515 16000",
    source:"https://www.google.com/maps/search/?api=1&query=Trust+Multispeciality+Hospitals+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=Trust+Multispeciality+Hospitals+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=Trust+Multispeciality+Hospitals+Kakinada",
    status:"lead", statusText:"Company lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"epro-placeholder", company:"Add a local engineering company", initials:"EC", tone:"purple",
    role:"Engineering / Core Internship — Add listing", category:"Engineering & Core",
    description:"Starter placeholder for an employer you verify. Use Admin panel to replace this entry with a real company and an official source before publishing.",
    address:"Add a verified Kakinada office address in Admin panel.",
    duration:"Confirm with employer", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Add employer-confirmed eligibility.", skills:"Mechanical, electrical, civil or other core skills",
    contact:"Add verified public contact details", email:"", phone:"",
    source:"https://kakinada.ap.gov.in/departments/vikasa/", apply:"https://kakinada.ap.gov.in/departments/vikasa/",
    map:"https://www.google.com/maps/search/?api=1&query=Engineering+companies+Kakinada",
    status:"lead", statusText:"Placeholder — replace before publishing", kind:"lead"
  },
  {
    id:"food-beverage-placeholder", company:"Add a verified Kakinada food business", initials:"FB", tone:"orange",
    role:"Food & Beverage Internship — Enquiry", category:"Food & Beverage",
    description:"Starter lead for cafes, restaurants, catering teams and food businesses. Contact an employer directly to ask whether it accepts interns; no vacancy is confirmed.",
    address:"Add the employer's verified Kakinada address in the Admin panel.",
    duration:"Confirm with employer", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Confirm age, shift timings, food-safety requirements and college approval with the employer.", skills:"Food service, customer service, teamwork, hygiene",
    contact:"Add verified public contact details", email:"", phone:"",
    source:"https://www.google.com/maps/search/?api=1&query=restaurants+cafes+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=restaurants+cafes+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=restaurants+cafes+Kakinada",
    status:"lead", statusText:"Category starter lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"hotel-hospitality-placeholder", company:"Add a verified Kakinada hotel", initials:"HH", tone:"blue",
    role:"Hotel & Hospitality Internship — Enquiry", category:"Hotel & Hospitality",
    description:"Starter lead for hotels, resorts and hospitality businesses offering possible front-office, guest-relations or operations exposure. Ask the employer about current openings.",
    address:"Add the hotel's verified Kakinada address in the Admin panel.",
    duration:"Confirm with employer", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Confirm shift timings, duties, eligibility and stipend directly.", skills:"Hospitality, guest relations, communication, operations",
    contact:"Add verified public contact details", email:"", phone:"",
    source:"https://www.google.com/maps/search/?api=1&query=hotels+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=hotels+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=hotels+Kakinada",
    status:"lead", statusText:"Category starter lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"bakery-culinary-placeholder", company:"Add a verified Kakinada bakery or caterer", initials:"BC", tone:"orange",
    role:"Bakery & Culinary Internship — Enquiry", category:"Bakery & Culinary",
    description:"Starter lead for bakeries, catering services and kitchens. Ask about supervised training, work hours, safety requirements and whether a stipend is offered.",
    address:"Add a verified business address in the Admin panel.",
    duration:"Confirm with employer", stipend:"Not disclosed", payType:"unknown", mode:"On-site",
    eligibility:"Confirm training terms and food-safety requirements directly.", skills:"Food preparation, baking, kitchen hygiene, teamwork",
    contact:"Add verified public contact details", email:"", phone:"",
    source:"https://www.google.com/maps/search/?api=1&query=bakeries+catering+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=bakeries+catering+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=bakeries+catering+Kakinada",
    status:"lead", statusText:"Category starter lead — vacancy unconfirmed", kind:"lead"
  },
  {
    id:"food-operations-placeholder", company:"Add a verified food delivery or retail business", initials:"FO", tone:"green",
    role:"Food Delivery & Operations Internship — Enquiry", category:"Food Delivery & Operations",
    description:"Starter lead for food delivery operations, inventory, order coordination and food retail. This is not a confirmed vacancy; contact a business to verify opportunities.",
    address:"Add a verified Kakinada office or store address in the Admin panel.",
    duration:"Confirm with employer", stipend:"Not disclosed", payType:"unknown", mode:"On-site / hybrid (confirm)",
    eligibility:"Confirm duties, working hours and stipend with the employer.", skills:"Operations, inventory, coordination, customer service",
    contact:"Add verified public contact details", email:"", phone:"",
    source:"https://www.google.com/maps/search/?api=1&query=food+delivery+businesses+Kakinada", apply:"https://www.google.com/maps/search/?api=1&query=food+delivery+businesses+Kakinada",
    map:"https://www.google.com/maps/search/?api=1&query=food+delivery+businesses+Kakinada",
    status:"lead", statusText:"Category starter lead — vacancy unconfirmed", kind:"lead"
  }
  ,...[
    {id:"retail-ecommerce-placeholder",company:"Add a verified Kakinada retail or e-commerce business",initials:"RE",tone:"blue",role:"Retail & E-commerce Internship — Enquiry",category:"Retail & E-commerce",description:"Starter lead for retail stores and online sellers. Ask about cataloguing, customer support, merchandising and order management; no vacancy is confirmed.",address:"Add a verified business address in Admin panel.",skills:"Customer service, product listings, inventory",query:"retail+stores+ecommerce+Kakinada"},
    {id:"event-management-placeholder",company:"Add a verified Kakinada event company",initials:"EM",tone:"orange",role:"Event Management Internship — Enquiry",category:"Event Management",description:"Starter lead for event planners and venues. Ask about event coordination, vendor management and promotion; vacancy is unconfirmed.",address:"Add a verified company address in Admin panel.",skills:"Planning, coordination, communication",query:"event+management+companies+Kakinada"},
    {id:"journalism-media-placeholder",company:"Add a verified local media organisation",initials:"JM",tone:"blue",role:"Journalism & Media Internship — Enquiry",category:"Journalism & Mass Media",description:"Starter lead for local newsrooms and media teams. Ask about reporting, editing, interviews and digital publishing; no vacancy is confirmed.",address:"Add a verified office address in Admin panel.",skills:"Writing, research, editing",query:"news+media+offices+Kakinada"},
    {id:"photography-placeholder",company:"Add a verified Kakinada photo studio",initials:"PH",tone:"purple",role:"Photography & Videography Internship — Enquiry",category:"Photography & Videography",description:"Starter lead for studios and video production teams. Ask about supervised shoots, editing and portfolio work; vacancy is unconfirmed.",address:"Add a verified studio address in Admin panel.",skills:"Photography, video, editing, lighting",query:"photography+studios+Kakinada"},
    {id:"legal-placeholder",company:"Add a verified legal office",initials:"LA",tone:"blue",role:"Legal Internship — Enquiry",category:"Law & Legal Services",description:"Starter lead for law offices and legal aid organisations. Students should confirm eligibility, supervision and college requirements directly.",address:"Add a verified office address in Admin panel.",skills:"Legal research, documentation, drafting",query:"advocates+law+offices+Kakinada"},
    {id:"banking-insurance-placeholder",company:"Add a verified bank or insurance office",initials:"BI",tone:"green",role:"Banking & Insurance Internship — Enquiry",category:"Banking & Insurance",description:"Starter lead for banking and insurance operations exposure. Ask the organisation about student programmes and approved application channels.",address:"Add a verified branch address in Admin panel.",skills:"Documentation, customer service, spreadsheets",query:"banks+insurance+offices+Kakinada"},
    {id:"qa-testing-placeholder",company:"Add a verified software company",initials:"QA",tone:"blue",role:"Software Testing & QA Internship — Enquiry",category:"Software Testing & QA",description:"Starter lead for software teams offering possible manual testing, bug reporting and QA exposure. Current openings are not confirmed.",address:"Add a verified company address in Admin panel.",skills:"Test cases, bug reports, attention to detail",query:"software+companies+Kakinada"},
    {id:"manufacturing-placeholder",company:"Add a verified manufacturing company",initials:"MF",tone:"orange",role:"Manufacturing & Production Internship — Enquiry",category:"Manufacturing & Production",description:"Starter lead for manufacturing and production operations. Confirm the plant address, safety rules, supervision and eligibility before applying.",address:"Add a verified plant address in Admin panel.",skills:"Production, quality checks, workplace safety",query:"manufacturing+industries+Kakinada"},
    {id:"marine-port-placeholder",company:"Add a verified port or marine business",initials:"MP",tone:"blue",role:"Marine & Port Operations Internship — Enquiry",category:"Marine & Port Operations",description:"Starter lead for port-linked, marine and shipping operations around the Kakinada region. Ask about approved student training and access requirements.",address:"Add a verified office address in Admin panel.",skills:"Logistics, operations, documentation",query:"port+shipping+marine+companies+Kakinada"},
    {id:"fisheries-placeholder",company:"Add a verified fisheries or aquaculture organisation",initials:"FA",tone:"green",role:"Fisheries & Aquaculture Internship — Enquiry",category:"Fisheries & Aquaculture",description:"Starter lead for fisheries, aquaculture and seafood operations in the region. Confirm fieldwork, safety and training terms directly.",address:"Add a verified organisation address in Admin panel.",skills:"Aquaculture, field observation, record keeping",query:"fisheries+aquaculture+Kakinada"},
    {id:"ngo-social-placeholder",company:"Add a verified NGO or community organisation",initials:"NG",tone:"green",role:"NGO & Social Work Internship — Enquiry",category:"NGO & Social Work",description:"Starter lead for community organisations and NGOs. Ask about supervised fieldwork, volunteering, documentation and student internship opportunities.",address:"Add a verified organisation address in Admin panel.",skills:"Community outreach, reporting, teamwork",query:"NGO+social+service+organisations+Kakinada"},
    {id:"real-estate-placeholder",company:"Add a verified real estate office",initials:"RE",tone:"orange",role:"Real Estate & Property Operations — Enquiry",category:"Real Estate & Property",description:"Starter lead for property firms. Ask about digital listings, customer coordination and office operations; vacancy is unconfirmed.",address:"Add a verified office address in Admin panel.",skills:"Customer support, listings, documentation",query:"real+estate+offices+Kakinada"}
  ].map(x=>({...x,tone:x.tone||"blue",duration:"Confirm with employer",stipend:"Not disclosed",payType:"unknown",mode:"On-site (confirm)",eligibility:"Confirm eligibility, duties and stipend directly with the employer.",contact:"Add verified public contact details",email:"",phone:"",source:"https://www.google.com/maps/search/?api=1&query="+x.query,apply:"https://www.google.com/maps/search/?api=1&query="+x.query,map:"https://www.google.com/maps/search/?api=1&query="+x.query,status:"lead",statusText:"Starter lead — vacancy unconfirmed",kind:"lead"}))
];

// Category-specific enquiry listings. These help students find relevant local employers;
// they are leads to contact, NOT confirmed vacancies or named employer offers.
const categoryEnquirySeeds = [
  ["Data Science & AI","AI / Data Analytics Intern — Enquiry","AI, data analytics and reporting teams","data+analytics+AI+companies+Kakinada","Python, Excel, SQL, data visualisation"],
  ["Cybersecurity","Cybersecurity Intern — Enquiry","IT security and cyber awareness teams","cybersecurity+IT+companies+Kakinada","Networking basics, Linux, security fundamentals"],
  ["Cloud & DevOps","Cloud / DevOps Intern — Enquiry","Cloud support, infrastructure and DevOps teams","cloud+DevOps+IT+companies+Kakinada","Linux, Git, Docker, AWS basics"],
  ["Networking & IT Support","IT Support / Networking Intern — Enquiry","Computer service centres and network support teams","computer+networking+service+centres+Kakinada","Troubleshooting, networking, Windows/Linux"],
  ["Content Writing & Translation","Content Writing Intern — Enquiry","Local businesses needing website, blog and Telugu/English content","digital+marketing+content+agencies+Kakinada","Writing, editing, Telugu/English, research"],
  ["Sales & Customer Support","Sales / Customer Support Intern — Enquiry","Retail, service and customer support teams","sales+customer+support+companies+Kakinada","Communication, customer handling, spreadsheets"],
  ["Finance & Accounting","Accounts / Finance Intern — Enquiry","Accounting offices and business finance teams","accountants+CA+offices+Kakinada","Excel, bookkeeping basics, attention to detail"],
  ["HR & Business Operations","HR / Operations Intern — Enquiry","Recruitment and business administration teams","HR+recruitment+consultants+Kakinada","Communication, documentation, spreadsheets"],
  ["Electrical & Electronics","Electrical / Electronics Intern — Enquiry","Electrical service firms, electronics workshops and maintenance teams","electrical+electronics+service+companies+Kakinada","Electrical basics, safety, troubleshooting"],
  ["Civil & Mechanical","Civil / Mechanical Intern — Enquiry","Civil contractors, design offices and mechanical workshops","civil+contractors+mechanical+workshops+Kakinada","AutoCAD basics, measurements, safety"],
  ["Healthcare & Pharmacy","Healthcare / Pharmacy Intern — Enquiry","Hospitals, clinics and pharmacies; confirm course eligibility","hospitals+clinics+pharmacies+Kakinada","Documentation, patient service; course eligibility required"],
  ["Biotechnology & Life Sciences","Life Sciences / Lab Intern — Enquiry","Diagnostic labs and life-science organisations; confirm eligibility","diagnostic+labs+life+sciences+Kakinada","Lab safety, record keeping, basic biology"],
  ["Design & Video Editing","Video Editing / Creative Intern — Enquiry","Video editors, studios and local marketing teams","video+editing+studios+digital+marketing+Kakinada","Video editing, storytelling, file organisation"],
  ["UI/UX & Graphic Design","UI/UX / Graphic Design Intern — Enquiry","Design studios and businesses needing digital creatives","graphic+design+web+design+agencies+Kakinada","Figma, Canva, layout, visual communication"],
  ["Education & Training","Teaching / Academic Support Intern — Enquiry","Coaching centres and training institutes","coaching+centres+training+institutes+Kakinada","Subject knowledge, communication, lesson support"],
  ["Hospitality & Tourism","Tourism / Guest Experience Intern — Enquiry","Travel desks, tourism operators and guest services","travel+tourism+agencies+Kakinada","Customer service, itinerary support, communication"],
  ["Restaurant Operations","Restaurant Operations Intern — Enquiry","Restaurants seeking support with service, stock and orders","restaurants+Kakinada","Customer service, order coordination, hygiene"],
  ["Nutrition & Food Science","Food Quality / Nutrition Intern — Enquiry","Food businesses and labs; verify qualification requirements","food+testing+labs+nutrition+Kakinada","Food safety, record keeping, nutrition basics"],
  ["Agriculture & Environment","Agriculture / Environment Intern — Enquiry","Agriculture suppliers, environmental groups and field projects","agriculture+environment+organisations+Kakinada","Field records, observation, environmental awareness"],
  ["Logistics & Operations","Logistics / Inventory Intern — Enquiry","Warehouses, distributors and transport businesses","logistics+warehouses+transport+Kakinada","Inventory, Excel, coordination"],
  ["Other","General Student Internship — Enquiry","Local employers across different sectors; ask about student roles","companies+businesses+Kakinada","Communication, teamwork, willingness to learn"]
].map(([category, role, businessType, query, skills], i) => {
  const searchUrl = "https://www.google.com/maps/search/?api=1&query=" + query;
  return {
    id: "category-enquiry-" + i, company: "Kakinada " + category + " Employer Leads",
    initials: category.split(/[\s&/]+/).filter(Boolean).slice(0,2).map(w=>w[0]).join("").toUpperCase(),
    tone: ["blue","green","orange"][i%3], role, category,
    description: "Enquiry lead for " + businessType + ". Use the local search link to identify an organisation, then contact it to ask whether it accepts interns. This is not a confirmed vacancy.",
    address: "Open the local employer search link and confirm the exact address before visiting.",
    duration: "Confirm with employer", stipend: "Not disclosed", payType: "unknown",
    estimate: {label: "Varies by employer", min: null, max: null},
    mode: "On-site (confirm)", eligibility: "Confirm eligibility, duties, work hours and stipend directly with the employer.",
    skills, contact: "Contact the employer through its official public channel.", email: "", phone: "",
    source: searchUrl, apply: searchUrl, map: searchUrl,
    status: "lead", statusText: "Employer enquiry lead — vacancy unconfirmed", kind: "lead"
  };
});


// Additional role-level leads for EVERY category. These are searchable employer leads,
// not invented company vacancies. Each apply/source link opens a relevant local employer search.
const expandedRoleCatalog = {
 "IT & Software": ["Frontend Developer Intern", "Web Development Intern", "Python Developer Intern", "Mobile App Development Intern"],
 "Data Science & AI": ["Data Analyst Intern", "Machine Learning Intern", "AI Prompt & Evaluation Intern", "Business Intelligence Intern"],
 "Cybersecurity": ["SOC Analyst Intern", "Security Awareness Intern", "Vulnerability Assessment Trainee", "Digital Forensics Learning Intern"],
 "Cloud & DevOps": ["AWS Cloud Support Intern", "DevOps Automation Intern", "Linux Administrator Trainee", "Container & CI/CD Intern"],
 "Networking & IT Support": ["Desktop Support Intern", "Network Technician Trainee", "Hardware Support Intern", "System Administration Intern"],
 "Digital Marketing": ["SEO Intern", "Social Media Marketing Intern", "Performance Marketing Intern", "Marketing Analytics Intern"],
 "Content Writing & Translation": ["Blog Writing Intern", "Telugu Content Intern", "Website Content Editor Intern", "Copywriting Intern"],
 "Sales & Customer Support": ["Inside Sales Intern", "Customer Success Intern", "Lead Generation Intern", "Customer Support Trainee"],
 "Finance & Accounting": ["Accounts Assistant Intern", "GST & Taxation Intern", "Audit Assistant Trainee", "Financial Research Intern"],
 "HR & Business Operations": ["Recruitment Intern", "HR Operations Intern", "Business Analyst Intern", "Office Administration Intern"],
 "Engineering & Core": ["Quality Control Trainee", "Project Coordination Intern", "Maintenance Engineering Trainee", "Technical Documentation Intern"],
 "Electrical & Electronics": ["Electrical Maintenance Trainee", "Electronics Testing Intern", "PLC Basics Trainee", "Solar Energy Intern"],
 "Civil & Mechanical": ["Civil Site Intern", "AutoCAD Drafting Intern", "Quantity Surveying Trainee", "Mechanical Design Intern"],
 "Healthcare & Pharmacy": ["Hospital Administration Intern", "Pharmacy Operations Trainee", "Medical Records Intern", "Public Health Outreach Intern"],
 "Biotechnology & Life Sciences": ["Laboratory Assistant Trainee", "Microbiology Lab Intern", "Clinical Data Intern", "Quality Documentation Intern"],
 "Design & Video Editing": ["Short-form Video Editor Intern", "Motion Graphics Trainee", "YouTube Production Intern", "Creative Assistant Intern"],
 "UI/UX & Graphic Design": ["UI Design Intern", "UX Research Intern", "Graphic Design Intern", "Brand Identity Design Intern"],
 "Education & Training": ["Teaching Assistant Intern", "EdTech Content Intern", "Student Counsellor Assistant", "Course Content Development Intern"],
 "Hospitality & Tourism": ["Front Office Trainee", "Travel Desk Intern", "Guest Relations Intern", "Tourism Content Intern"],
 "Hotel & Hospitality": ["Hotel Reception Intern", "Housekeeping Operations Trainee", "Reservations Assistant Intern", "Guest Experience Intern"],
 "Food & Beverage": ["Cafe Service Intern", "Food Service Operations Trainee", "Restaurant Customer Experience Intern", "Food Business Marketing Intern"],
 "Bakery & Culinary": ["Bakery Assistant Trainee", "Pastry & Cake Decoration Trainee", "Kitchen Operations Intern", "Food Presentation Intern"],
 "Food Delivery & Operations": ["Order Management Intern", "Delivery Operations Intern", "Inventory Coordinator Trainee", "Customer Order Support Intern"],
 "Restaurant Operations": ["Restaurant Floor Operations Intern", "Billing & POS Assistant Trainee", "Restaurant Inventory Intern", "Food Safety Checklist Trainee"],
 "Nutrition & Food Science": ["Nutrition Education Intern", "Food Quality Documentation Intern", "Food Safety Awareness Intern", "Food Product Research Trainee"],
 "Agriculture & Environment": ["Agriculture Field Intern", "Environmental Awareness Intern", "Nursery & Horticulture Trainee", "Sustainability Reporting Intern"],
 "Logistics & Operations": ["Warehouse Operations Intern", "Supply Chain Assistant Intern", "Dispatch Coordination Trainee", "Inventory Data Entry Intern"],
 "Retail & E-commerce": ["E-commerce Product Listing Intern", "Retail Sales Intern", "Online Order Operations Intern", "Merchandising Assistant Trainee"],
 "Event Management": ["Event Coordination Intern", "Venue Operations Trainee", "Event Promotion Intern", "Vendor Coordination Intern"],
 "Journalism & Mass Media": ["News Research Intern", "Local Reporting Trainee", "Digital Publishing Intern", "Copy Editing Intern"],
 "Photography & Videography": ["Photography Assistant Intern", "Video Shooting Intern", "Photo Editing Intern", "Wedding Production Trainee"],
 "Law & Legal Services": ["Legal Research Intern", "Legal Documentation Trainee", "Case File Assistant Intern", "Legal Aid Outreach Intern"],
 "Banking & Insurance": ["Bank Operations Enquiry Intern", "Insurance Documentation Trainee", "Financial Customer Service Intern", "Risk & Compliance Research Intern"],
 "Software Testing & QA": ["Manual Testing Intern", "Automation Testing Trainee", "Bug Reporting Intern", "Mobile App QA Intern"],
 "Manufacturing & Production": ["Production Planning Trainee", "Quality Assurance Intern", "Industrial Safety Trainee", "Process Improvement Intern"],
 "Marine & Port Operations": ["Shipping Documentation Intern", "Port Logistics Trainee", "Marine Operations Enquiry Intern", "Cargo Coordination Intern"],
 "Fisheries & Aquaculture": ["Aquaculture Field Trainee", "Seafood Quality Documentation Intern", "Fisheries Survey Assistant", "Cold Chain Operations Intern"],
 "NGO & Social Work": ["Community Outreach Intern", "NGO Programme Assistant", "Fundraising Campaign Intern", "Impact Reporting Intern"],
 "Real Estate & Property": ["Property Listing Intern", "Real Estate Digital Marketing Intern", "Site Visit Coordination Trainee", "Property Documentation Intern"],
 "Other": ["General Office Intern", "Research Assistant Intern", "Project Coordinator Intern", "Student Outreach Intern"]
};
const expandedCategorySeeds = Object.entries(expandedRoleCatalog).flatMap(([category, roles]) => roles.map((role, i) => {
  const query = encodeURIComponent(`${category} employers internships Kakinada`);
  const searchUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  return {
    id: `expanded-${category.toLowerCase().replace(/[^a-z0-9]+/g,'-')}-${i+1}`,
    company: `Kakinada ${category} Employer Search`,
    initials: category.split(/[\s&/]+/).filter(Boolean).slice(0,2).map(w=>w[0]).join('').toUpperCase(),
    tone: ["blue","green","orange","purple"][i%4], role, category,
    description: `Role-specific enquiry lead for ${role.toLowerCase()} opportunities. Search relevant local employers, then ask whether they currently accept interns. This is not a confirmed vacancy.`,
    address: "Use the employer search link to find a business and confirm its exact address before visiting.",
    duration: "Confirm with employer", stipend: "Not disclosed", payType: "unknown",
    estimate: {label: "Varies by employer", min: null, max: null}, mode: "On-site / hybrid / remote (confirm)",
    eligibility: "Confirm course eligibility, duties, schedule, stipend and current vacancy directly with the employer.",
    skills: `${category} basics, communication, teamwork, willingness to learn`,
    contact: "Contact the employer through its official public channel.", email: "", phone: "",
    source: searchUrl, apply: searchUrl, map: searchUrl,
    status: "lead", statusText: "Employer search lead — vacancy unconfirmed", kind: "lead"
  };
}));

const namedCompanySeeds = [
  {id:"named-trontech-rf",company:"TronTech Labs Pvt Ltd",initials:"TT",tone:"blue",role:"RF & Space Communications Intern",category:"Electrical & Electronics",description:"TronTech Labs' careers page describes an RF and space communications internship working with telemetry and RF modules. Confirm whether applications are currently open.",address:"16-23-43/3, Sambamurthy Nagar, Revenue Ward No.11, Kakinada, Andhra Pradesh 533001",duration:"1–6 months (published programme range; confirm current batch)",stipend:"Not disclosed",payType:"unknown",mode:"On-site (confirm)",eligibility:"Ask the company about current openings and academic requirements.",skills:"Digital electronics, RF, communications, testing",contact:"info@trontechlabs.com",email:"info@trontechlabs.com",phone:"",source:"https://www.trontechlabs.com/careers",apply:"https://www.trontechlabs.com/careers",map:"https://www.google.com/maps/search/?api=1&query=TronTech+Labs+Kakinada",status:"verified",statusText:"Company careers page found — current vacancy unconfirmed",kind:"internship"},
  {id:"named-krify-testing",company:"Krify Foundation",initials:"KF",tone:"blue",role:"Software Testing Intern — Enquiry",category:"Software Testing & QA",description:"Named local technology company with internship/training tracks. Ask whether a software testing internship is available now; this specific role is not confirmed.",address:"7-39, Ratan Towers, ADB Road, Thimmapuram, Kakinada, Andhra Pradesh 533005",duration:"Confirm with provider",stipend:"Not disclosed",payType:"unknown",mode:"In-person / confirm",eligibility:"Confirm current batch and terms.",skills:"Manual testing, test cases, bug reporting",contact:"Use the official programme page",email:"",phone:"",source:"https://www.krify.org/info.php?interest=7",apply:"https://www.krify.org/info.php?interest=7",map:"https://www.google.com/maps/search/?api=1&query=Krify+Foundation+Ratan+Towers+Kakinada",status:"lead",statusText:"Named employer lead — vacancy unconfirmed",kind:"lead"},
  {id:"named-krify-digital",company:"Krify Foundation",initials:"KF",tone:"blue",role:"Digital Marketing Intern — Enquiry",category:"Digital Marketing",description:"Ask the programme team whether digital marketing internship seats are available in the current batch.",address:"7-39, Ratan Towers, ADB Road, Thimmapuram, Kakinada, Andhra Pradesh 533005",duration:"Confirm with provider",stipend:"Not disclosed",payType:"unknown",mode:"In-person / confirm",eligibility:"Confirm current batch and terms.",skills:"SEO, social media, content marketing",contact:"Use the official programme page",email:"",phone:"",source:"https://www.krify.org/info.php?interest=7",apply:"https://www.krify.org/info.php?interest=7",map:"https://www.google.com/maps/search/?api=1&query=Krify+Foundation+Ratan+Towers+Kakinada",status:"lead",statusText:"Named employer lead — vacancy unconfirmed",kind:"lead"},
  {id:"named-nyros-web",company:"Nyros Futureworks Pvt. Ltd.",initials:"NF",tone:"green",role:"Full-Stack Development Intern — Enquiry",category:"IT & Software",description:"Kakinada-based software company. Contact the company to ask about student projects or current internships; this specific opening is not confirmed.",address:"SKS Township, Plot No. 4, Phase II, Ganganapalli, Kakinada, Andhra Pradesh 533006",duration:"Not confirmed",stipend:"Not disclosed",payType:"unknown",mode:"Confirm with employer",eligibility:"Ask about student eligibility, project work and selection process.",skills:"HTML, CSS, JavaScript, backend basics, Git",contact:"Contact the company through its official channels",email:"",phone:"",source:"https://www.google.com/maps/search/?api=1&query=Nyros+Futureworks+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=Nyros+Futureworks+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=Nyros+Futureworks+Kakinada",status:"lead",statusText:"Named employer lead — vacancy unconfirmed",kind:"lead"},
  {id:"named-tarka-python",company:"Tarka Technology Solutions",initials:"TT",tone:"orange",role:"Python Developer Intern — Enquiry",category:"IT & Software",description:"Named software/training business in Kakinada. Ask whether it offers a supervised internship or project placement; no current vacancy confirmed.",address:"70-4-5/2, Koppula Nageswara Rao Street, Sarpavaram Junction, Ramanayyapeta, Kakinada, Andhra Pradesh 533005",duration:"Not confirmed",stipend:"Not disclosed",payType:"unknown",mode:"Confirm with employer",eligibility:"Confirm internship availability and terms directly.",skills:"Python, programming fundamentals, databases",contact:"Contact the business directly",email:"",phone:"",source:"https://www.google.com/maps/search/?api=1&query=Tarka+Technology+Solutions+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=Tarka+Technology+Solutions+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=Tarka+Technology+Solutions+Kakinada",status:"lead",statusText:"Named employer lead — vacancy unconfirmed",kind:"lead"},
  {id:"named-agasthya-cloud",company:"Agasthya Solutions",initials:"AS",tone:"blue",role:"Cloud & DevOps Intern — Enquiry",category:"Cloud & DevOps",description:"Local technology training provider. Ask about current internship/project opportunities and whether they involve practical work with AWS, Git and Docker.",address:"Ground Floor, Nilayam, 2-34-14, Srinaga, Chinta Vari Street, opposite Mamatha Diagnostic Centre, Perrajupeta, Kakinada, Andhra Pradesh 533003",duration:"Confirm with provider",stipend:"Not disclosed",payType:"unknown",mode:"Confirm with provider",eligibility:"Confirm current openings, work duties and terms.",skills:"AWS, Linux, Git, Docker, CI/CD basics",contact:"Contact the provider directly",email:"",phone:"",source:"https://www.google.com/maps/search/?api=1&query=Agasthya+Solutions+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=Agasthya+Solutions+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=Agasthya+Solutions+Kakinada",status:"lead",statusText:"Named employer lead — vacancy unconfirmed",kind:"lead"},
  {id:"named-cyient-engineering",company:"Cyient Ltd.",initials:"CY",tone:"green",role:"Engineering Design Intern — Enquiry",category:"Engineering & Core",description:"Cyient has an engineering/digital services site in Kakinada. Ask its official recruitment team whether student internships are available; this role is not a confirmed opening.",address:"APIIC IT SEZ, Sarpavaram / Madhavapatnam, Kakinada, Andhra Pradesh 533005",duration:"Not confirmed",stipend:"Not disclosed",payType:"unknown",mode:"Confirm with employer",eligibility:"Eligibility depends on official internship requirements.",skills:"Engineering fundamentals, CAD/design or relevant branch skills",contact:"Use official Cyient careers channels",email:"",phone:"",source:"https://www.cyient.com/careers",apply:"https://www.cyient.com/careers",map:"https://www.google.com/maps/search/?api=1&query=Cyient+Kakinada+IT+SEZ",status:"lead",statusText:"Named employer lead — vacancy unconfirmed",kind:"lead"},
  {id:"named-makersmind-marketing",company:"Makers Mind Soft Solutions",initials:"MM",tone:"orange",role:"Digital Marketing & Content Intern — Enquiry",category:"Digital Marketing",description:"Local software and digital marketing business. Ask whether the team currently accepts interns for content, SEO or social media work.",address:"2-152/2, opposite Toyota Showroom, Teacher's Colony, Rayudupalem, Ramanayyapeta, Kakinada, Andhra Pradesh 533005",duration:"Not confirmed",stipend:"Not disclosed",payType:"unknown",mode:"Confirm with employer",eligibility:"Confirm current vacancy and terms directly.",skills:"Content writing, SEO, social media, Canva",contact:"Contact the company directly",email:"",phone:"",source:"https://www.google.com/maps/search/?api=1&query=Makers+Mind+Soft+Solutions+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=Makers+Mind+Soft+Solutions+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=Makers+Mind+Soft+Solutions+Kakinada",status:"lead",statusText:"Named employer lead — vacancy unconfirmed",kind:"lead"},
  {id:"named-skillinduce-ai",company:"Skillinduce Private Limited",initials:"SI",tone:"green",role:"AI / Prompt Engineering Intern — Enquiry",category:"Data Science & AI",description:"Kakinada skill-development organisation with AI-related learning tracks referenced publicly. Ask whether there is a current supervised internship batch.",address:"II Floor, Srishti Building, 64-4-11/7, Pratap Nagar, Kakinada, Andhra Pradesh 533004",duration:"Confirm with provider",stipend:"Not disclosed",payType:"unknown",mode:"Confirm with provider",eligibility:"Ask about current batch, project work and any fees before enrolling.",skills:"AI tools, prompt writing, Python basics",contact:"Contact the provider directly",email:"",phone:"",source:"https://www.google.com/maps/search/?api=1&query=Skillinduce+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=Skillinduce+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=Skillinduce+Kakinada",status:"lead",statusText:"Named employer lead — vacancy unconfirmed",kind:"lead"},
  {id:"named-hie-fullstack",company:"HIE Tech Solutions",initials:"HT",tone:"blue",role:"Python Full-Stack Intern — Enquiry",category:"IT & Software",description:"Named Kakinada software training and placement-focused centre. Ask whether it offers an internship with practical projects or only a paid training course.",address:"2-42-3, 50 Building Center near Kokila Center, Kakinada, Andhra Pradesh 533003",duration:"Confirm with provider",stipend:"Not disclosed",payType:"unknown",mode:"Confirm with provider",eligibility:"Confirm if it is employment, internship or fee-based training before joining.",skills:"Python, HTML, CSS, JavaScript, SQL",contact:"+91 93482 23345 (verify before use)",email:"",phone:"+91 93482 23345",source:"https://www.google.com/maps/search/?api=1&query=HIE+Tech+Solutions+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=HIE+Tech+Solutions+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=HIE+Tech+Solutions+Kakinada",status:"lead",statusText:"Named employer lead — vacancy unconfirmed",kind:"lead"},
  {id:"named-creativecode-java",company:"Creative Code Hub",initials:"CC",tone:"orange",role:"Java / Software Development Intern — Enquiry",category:"IT & Software",description:"Kakinada technical learning centre. Ask whether supervised internships or project-based opportunities are currently available.",address:"Beside Pydah Degree College, opposite Anand Cinemas, Sriram Nagar, Kondayya Palem, Kakinada, Andhra Pradesh 533003",duration:"Confirm with provider",stipend:"Not disclosed",payType:"unknown",mode:"Confirm with provider",eligibility:"Confirm the internship deliverables and any course fees.",skills:"Java, DSA, databases, software fundamentals",contact:"+91 70939 47788 (verify before use)",email:"",phone:"+91 70939 47788",source:"https://www.google.com/maps/search/?api=1&query=Creative+Code+Hub+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=Creative+Code+Hub+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=Creative+Code+Hub+Kakinada",status:"lead",statusText:"Named employer lead — vacancy unconfirmed",kind:"lead"},
  {id:"named-vikasa-placement",company:"VIKASA — Training & Placements",initials:"VK",tone:"green",role:"Job / Internship Referral Enquiry",category:"Finance, HR & Business",description:"District training and placement service that coordinates employer recruitment and job melas. Ask for current openings by qualification and field.",address:"Collectorate area, Kakinada District, Andhra Pradesh; confirm the current visiting location before travelling.",duration:"Varies by employer",stipend:"Depends on employer",payType:"unknown",mode:"Varies",eligibility:"Depends on each employer and role.",skills:"Bring an updated resume and education details",contact:"8790952727 / 9494662925",email:"projectdirector@vikasajobs.com",phone:"8790952727",source:"https://www.vikasajobs.com/",apply:"https://www.vikasajobs.com/",map:"https://www.google.com/maps/search/?api=1&query=VIKASA+Kakinada+Collectorate",status:"verified",statusText:"Official placement service — ask for live vacancies",kind:"lead"}
];


// Named food-sector employers in Kakinada. Restaurant contacts are employer leads,
// not promises of vacancies; only listings linked to a live job ad are marked as posted.
const namedFoodSeeds = [
 {id:"food-mahindra-floor-supervisor",company:"Mahindra Mithaiwala Pvt. Ltd.",initials:"MM",tone:"orange",role:"Cafe Floor Supervisor",category:"Restaurant Operations",description:"A job listing has been published for a cafe floor supervisor. Duties include coordinating service staff, customer service, stock and hygiene. Verify that the vacancy is still open before applying.",address:"2-1-15, Bhanugudi Junction, Kondayya Palem, Kakinada, Andhra Pradesh 533003",duration:"Full-time role",stipend:"₹18,000–₹20,000/month (as advertised; reconfirm)",payType:"salary",mode:"On-site",eligibility:"Relevant hospitality/service experience may be expected; check the job ad.",skills:"Customer service, staff coordination, hygiene, inventory",contact:"+91 79012 99111 (business contact; verify hiring enquiries)",email:"",phone:"+91 79012 99111",source:"https://in.indeed.com/q-food-l-kakinada%2C-andhra-pradesh-jobs.html",apply:"https://in.indeed.com/q-food-l-kakinada%2C-andhra-pradesh-jobs.html",map:"https://www.google.com/maps/search/?api=1&query=Mahindra+Mithaiwala+Bhanugudi+Kakinada",status:"lead",statusText:"Job ad found — confirm it is still open",kind:"job"},
 {id:"food-pydah-canteen-supervisor",company:"Pydah College of Engineering",initials:"PC",tone:"blue",role:"Canteen Supervisor",category:"Food Delivery & Operations",description:"A Kakinada job listing describes supervising canteen operations, food quality and hygiene, stock, staff and wastage. Confirm the current opening and hiring contact with the college.",address:"Pydah College of Engineering, Kakinada, Andhra Pradesh",duration:"Full-time role",stipend:"₹20,000–₹30,000/month (as advertised; reconfirm)",payType:"salary",mode:"On-site",eligibility:"Experience and qualification requirements should be confirmed with the employer.",skills:"Canteen operations, food safety, stock control, team supervision",contact:"Apply through the job listing or contact the college",email:"",phone:"",source:"https://in.indeed.com/q-food-l-kakinada%2C-andhra-pradesh-jobs.html",apply:"https://in.indeed.com/q-food-l-kakinada%2C-andhra-pradesh-jobs.html",map:"https://www.google.com/maps/search/?api=1&query=Pydah+College+of+Engineering+Kakinada",status:"lead",statusText:"Job ad found — confirm it is still open",kind:"job"},
 {id:"food-hungry-birds",company:"Hungry Birds Restaurant",initials:"HB",tone:"orange",role:"Restaurant Service / Kitchen Helper — Enquiry",category:"Restaurant Operations",description:"Named local restaurant lead. Ask the restaurant directly about service crew, kitchen helper, steward, cashier or trainee cook roles; no current vacancy verified.",address:"BVS Patrudu Street, G O Colony, Kakinada, Andhra Pradesh 533003",duration:"Ask employer",stipend:"Not disclosed",payType:"unknown",mode:"On-site / shift-based",eligibility:"Confirm shift timings, age requirements and experience with the restaurant.",skills:"Customer service, food hygiene, teamwork",contact:"+91 94923 63738 · enquiry@hungrybirdz.in",email:"enquiry@hungrybirdz.in",phone:"+91 94923 63738",source:"https://hungry-birdz.in/",apply:"https://hungry-birdz.in/",map:"https://www.google.com/maps/search/?api=1&query=Hungry+Birds+Restaurant+Kakinada",status:"lead",statusText:"Employer lead — vacancy unconfirmed",kind:"lead"},
 {id:"food-suruchi-bhanugudi",company:"Suruchi Foods — Bhanugudi Junction",initials:"SF",tone:"orange",role:"Bakery / Sweets Counter Assistant — Enquiry",category:"Bakery & Culinary",description:"Sweets, bakery and snack business. Ask about counter staff, packing, bakery helper, order desk or trainee roles; vacancy is not confirmed.",address:"Bhanugudi Junction, opposite Padmapriya Cinema Hall, G O Colony, Kakinada, Andhra Pradesh 533003",duration:"Ask employer",stipend:"Not disclosed",payType:"unknown",mode:"On-site",eligibility:"Confirm working hours and role requirements directly.",skills:"Customer service, packaging, hygiene, basic calculations",contact:"+91 884 237 3644 (public business listing; confirm hiring enquiries)",email:"",phone:"+91 884 237 3644",source:"https://www.google.com/maps/search/?api=1&query=Suruchi+Foods+Bhanugudi+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=Suruchi+Foods+Bhanugudi+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=Suruchi+Foods+Bhanugudi+Kakinada",status:"lead",statusText:"Employer lead — vacancy unconfirmed",kind:"lead"},
 {id:"food-homebite-suruchi",company:"HomeBite — Sri Baktha Anjaneya Suruchi Foods",initials:"HB",tone:"orange",role:"Sweets / Bakery Packing Assistant — Enquiry",category:"Bakery & Culinary",description:"Sweets and bakery outlet near Boat Club. Ask whether it has openings for packing, counter sales, bakery support or order handling; no vacancy verified.",address:"69-4-3, opposite Boat Club, Pithapuram Road, Ramanayyapeta, Kakinada, Andhra Pradesh 533003",duration:"Ask employer",stipend:"Not disclosed",payType:"unknown",mode:"On-site",eligibility:"Confirm with employer.",skills:"Packaging, customer service, hygiene, teamwork",contact:"+91 884 236 6644 (public business listing; verify before use)",email:"",phone:"+91 884 236 6644",source:"https://www.google.com/maps/search/?api=1&query=HomeBite+Suruchi+Foods+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=HomeBite+Suruchi+Foods+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=HomeBite+Suruchi+Foods+Kakinada",status:"lead",statusText:"Employer lead — vacancy unconfirmed",kind:"lead"},
 {id:"food-fresh-choice",company:"Fresh Choice — Patisserie",initials:"FC",tone:"orange",role:"Cafe Crew / Bakery Assistant — Enquiry",category:"Bakery & Culinary",description:"Bakery and cafe business in Ramanayyapeta. Ask about cafe service, bakery support, cashier or trainee opportunities; availability not verified.",address:"Main Road, Boat Club Park Road, opposite Tipsy Topsy, Ramanayyapeta, Kakinada, Andhra Pradesh 533005",duration:"Ask employer",stipend:"Not disclosed",payType:"unknown",mode:"On-site / shifts",eligibility:"Confirm role, shifts and eligibility with the store.",skills:"Cafe service, customer support, hygiene, teamwork",contact:"+91 79958 88739 (public business listing; verify hiring enquiries)",email:"",phone:"+91 79958 88739",source:"https://freshchoice.in/",apply:"https://freshchoice.in/",map:"https://www.google.com/maps/search/?api=1&query=Fresh+Choice+Patisserie+Kakinada",status:"lead",statusText:"Employer lead — vacancy unconfirmed",kind:"lead"},
 {id:"food-fresh-bake",company:"Fresh Bake",initials:"FB",tone:"orange",role:"Bakery Helper / Cake Packing — Enquiry",category:"Bakery & Culinary",description:"Local bakery near D-Mart, Godarigunta. Ask directly about bakery helper, cake decoration trainee, packing or counter sales roles; no opening confirmed.",address:"D. No. 3-16-196/1, beside D-Mart, Godarigunta, Kakinada, Andhra Pradesh 533003",duration:"Ask employer",stipend:"Not disclosed",payType:"unknown",mode:"On-site",eligibility:"Confirm experience requirements and shift timings.",skills:"Food hygiene, packing, attention to detail, customer service",contact:"+91 75573 66999 (public business listing; verify before use)",email:"",phone:"+91 75573 66999",source:"https://www.google.com/maps/search/?api=1&query=Fresh+Bake+Godarigunta+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=Fresh+Bake+Godarigunta+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=Fresh+Bake+Godarigunta+Kakinada",status:"lead",statusText:"Employer lead — vacancy unconfirmed",kind:"lead"},
 {id:"food-burgerking",company:"Burger King — Subash Road",initials:"BK",tone:"red",role:"Restaurant Crew / Cashier — Enquiry",category:"Food Delivery & Operations",description:"Quick-service restaurant in central Kakinada. Ask in-store or through official channels about crew member, cashier, kitchen and shift supervisor roles; local vacancy not confirmed.",address:"Door No. 13/1/22/1, Main Road, opposite Chandna Brothers, Subash Road, Kakinada, Andhra Pradesh 533001",duration:"Ask employer",stipend:"Not disclosed",payType:"unknown",mode:"On-site / shifts",eligibility:"Confirm age, shift availability and role criteria with the hiring team.",skills:"Customer service, teamwork, food safety, POS/cash handling",contact:"+91 86559 24734 (store number; ask for hiring contact)",email:"",phone:"+91 86559 24734",source:"https://stores.burgerking.in/burger-king-fast-food-restaurant-subash-road-kakinada-244103/Home",apply:"https://stores.burgerking.in/burger-king-fast-food-restaurant-subash-road-kakinada-244103/Home",map:"https://www.google.com/maps/search/?api=1&query=Burger+King+Subash+Road+Kakinada",status:"lead",statusText:"Employer lead — vacancy unconfirmed",kind:"lead"},
 {id:"food-rasa-cafe",company:"Rasa Cafe & Restaurant",initials:"RC",tone:"orange",role:"Cafe Service / Kitchen Trainee — Enquiry",category:"Restaurant Operations",description:"Cafe and restaurant in Ramanayyapeta. Ask about service crew, cashier, kitchen helper or hospitality trainee roles; no active vacancy verified.",address:"D. No. 70-14-9/16, Sundarasiva Colony, Siddartha Nagar, Ramanayyapeta, Kakinada, Andhra Pradesh 533003",duration:"Ask employer",stipend:"Not disclosed",payType:"unknown",mode:"On-site",eligibility:"Confirm directly with the restaurant.",skills:"Hospitality, customer service, hygiene, teamwork",contact:"+91 99924 06999 · rasacaferestaurant@gmail.com",email:"rasacaferestaurant@gmail.com",phone:"+91 99924 06999",source:"https://www.rasacafeandrestaurant.com/",apply:"https://www.rasacafeandrestaurant.com/",map:"https://www.google.com/maps/search/?api=1&query=Rasa+Cafe+Restaurant+Kakinada",status:"lead",statusText:"Employer lead — vacancy unconfirmed",kind:"lead"},
 {id:"food-kshatriya",company:"Kshatriya Foods",initials:"KF",tone:"orange",role:"Kitchen Helper / Restaurant Service — Enquiry",category:"Restaurant Operations",description:"Local restaurant near JNTU 2nd Gate. Ask about kitchen helper, food preparation assistant, steward or service roles; current vacancy not verified.",address:"Door No. 67-11-7/C, 5th Cross Road, opposite JNTU 2nd Gate, Ramanayyapeta, Kakinada, Andhra Pradesh 533003",duration:"Ask employer",stipend:"Not disclosed",payType:"unknown",mode:"On-site / shifts",eligibility:"Confirm role and shift requirements directly.",skills:"Food preparation support, hygiene, teamwork",contact:"Use the business listing to confirm current contact details",email:"",phone:"",source:"https://www.google.com/maps/search/?api=1&query=Kshatriya+Foods+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=Kshatriya+Foods+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=Kshatriya+Foods+Kakinada",status:"lead",statusText:"Employer lead — vacancy unconfirmed",kind:"lead"},
 {id:"food-devi-fisheries",company:"Devi Fisheries Limited — Unit 3",initials:"DF",tone:"blue",role:"Seafood Processing / Quality Assistant — Enquiry",category:"Fisheries & Aquaculture",description:"Seafood processing and export facility. Ask the recruitment team about production helper, packing, quality-control trainee or food-safety documentation roles; no current opening verified.",address:"APSP Camp, Panasapadu, Kakinada, Andhra Pradesh 533005",duration:"Ask employer",stipend:"Not disclosed",payType:"unknown",mode:"On-site / shift-based",eligibility:"Confirm qualification, safety requirements and current hiring needs.",skills:"Food safety, quality checks, packing, hygiene, record keeping",contact:"+91 884 234 4848 (public business listing; verify hiring enquiries)",email:"",phone:"+91 884 234 4848",source:"https://www.google.com/maps/search/?api=1&query=Devi+Fisheries+Limited+Panasapadu+Kakinada",apply:"https://www.google.com/maps/search/?api=1&query=Devi+Fisheries+Limited+Panasapadu+Kakinada",map:"https://www.google.com/maps/search/?api=1&query=Devi+Fisheries+Limited+Panasapadu+Kakinada",status:"lead",statusText:"Employer lead — vacancy unconfirmed",kind:"lead"},
 {id:"food-pattabhi-agro",company:"Pattabhi Agro Foods Pvt. Ltd.",initials:"PA",tone:"green",role:"Food Production / Computer Operator / Supervisor",category:"Manufacturing & Production",description:"Pattabhi Agro Foods has published a recruitment notice for roles including supervisors and computer operators at Peddapuram in Kakinada District. Confirm the notice is current and the role remains open before travelling.",address:"Peddapuram, Kakinada District, Andhra Pradesh",duration:"As per role",stipend:"Contact employer",payType:"unknown",mode:"On-site",eligibility:"The published notice lists different qualifications by role; review the current notice carefully.",skills:"Production operations, basic computer use, record keeping or supervision",contact:"+91 92810 59745 (as published in recruitment notice; reconfirm)",email:"",phone:"+91 92810 59745",source:"https://www.pattabhiagro.com/pafpl/PattabhiAgro/pattabhi_agro_walkin_poster.html",apply:"https://www.pattabhiagro.com/pafpl/PattabhiAgro/pattabhi_agro_walkin_poster.html",map:"https://www.google.com/maps/search/?api=1&query=Pattabhi+Agro+Foods+Peddapuram",status:"lead",statusText:"Recruitment notice found — confirm current status",kind:"job"}
];

const categories = [
 "IT & Software", "Data Science & AI", "Cybersecurity", "Cloud & DevOps", "Networking & IT Support",
 "Digital Marketing", "Content Writing & Translation", "Sales & Customer Support", "Finance & Accounting",
 "HR & Business Operations", "Engineering & Core", "Electrical & Electronics", "Civil & Mechanical",
 "Healthcare & Pharmacy", "Biotechnology & Life Sciences", "Design & Video Editing", "UI/UX & Graphic Design",
 "Education & Training", "Hospitality & Tourism", "Hotel & Hospitality", "Food & Beverage", "Bakery & Culinary", "Food Delivery & Operations", "Restaurant Operations", "Nutrition & Food Science", "Agriculture & Environment", "Logistics & Operations", "Retail & E-commerce", "Event Management", "Journalism & Mass Media", "Photography & Videography", "Law & Legal Services", "Banking & Insurance", "Software Testing & QA", "Manufacturing & Production", "Marine & Port Operations", "Fisheries & Aquaculture", "NGO & Social Work", "Real Estate & Property", "Other"
];
const $ = s => document.querySelector(s);
const $$ = s => [...document.querySelectorAll(s)];
const escapeHtml = value => String(value ?? "").replace(/[&<>"']/g, ch => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
const getStore = (key, fallback) => { try { const value=localStorage.getItem(key); return value ? JSON.parse(value) : fallback; } catch { return fallback; } };
const setStore = (key, value) => localStorage.setItem(key, JSON.stringify(value));
let listings = getStore(STORAGE.listings, null);
// Seed first-time users and safely add new category leads to existing browser data.
// This fixes older installs where localStorage prevented newly added categories from appearing.
if (!Array.isArray(listings) || !listings.length) {
  listings = [...seedListings, ...namedCompanySeeds, ...namedFoodSeeds, ...categoryEnquirySeeds, ...expandedCategorySeeds].map(x=>({...x}));
  setStore(STORAGE.listings,listings);
} else {
  const knownIds = new Set(listings.map(x=>x.id));
  const missingSeeds = [...seedListings, ...namedCompanySeeds, ...namedFoodSeeds, ...categoryEnquirySeeds, ...expandedCategorySeeds].filter(x=>!knownIds.has(x.id));
  if (missingSeeds.length) {
    listings = [...listings, ...missingSeeds.map(x=>({...x}))];
    setStore(STORAGE.listings,listings);
  }
}
let savedIds = getStore(STORAGE.saved, []);
let student = getStore(STORAGE.student, null);
let accounts = getStore(STORAGE.accounts, []);
let currentUser = getStore(STORAGE.currentUser, null);
let adminLoggedIn = getStore(STORAGE.admin, false) === true;
let employerAccounts = getStore(STORAGE.employers, []);
let currentEmployer = getStore(STORAGE.currentEmployer, null);
let savedOnly = false;
let activeModal = null;
let toastTimer;
function toast(message){const el=$("#toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2800);}
function mapsUrl(item){return item.map || "https://www.google.com/maps/search/?api=1&query="+encodeURIComponent((item.company||"")+" "+(item.address||"Kakinada"));}
function safeExternal(url){try{const u=new URL(url);return ["http:","https:"].includes(u.protocol)?u.href:"#";}catch{return "#";}}
function refreshCounts(){$("#savedCount").textContent=savedIds.length;$("#listingStat").textContent=listings.length;$("#year").textContent=new Date().getFullYear();}
function populateCategories(){const select=$("#categoryFilter");const current=select.value;select.innerHTML='<option value="">All categories</option>'+categories.map(c=>`<option>${escapeHtml(c)}</option>`).join("");select.value=current;}
function estimateRange(item){
 // Indicative student-internship ranges only; not a company offer or verified pay.
 const category=String(item.category||"").toLowerCase();
 if(/food|bakery|culinary|restaurant|hospitality|tourism/.test(category)) return {label:"₹2,000–₹8,000/month",low:2000,high:8000};
 if(/healthcare|pharmacy|biotechnology|life sciences/.test(category)) return {label:"₹2,000–₹8,000/month",low:2000,high:8000};
 if(/digital marketing|content writing|design|video editing|ui\/ux/.test(category)) return {label:"₹3,000–₹10,000/month",low:3000,high:10000};
 if(/it & software|data science|cybersecurity|cloud|networking/.test(category)) return {label:"₹5,000–₹15,000/month",low:5000,high:15000};
 if(/engineering|electrical|civil|mechanical/.test(category)) return {label:"₹3,000–₹10,000/month",low:3000,high:10000};
 if(/finance|hr|business|sales|customer support|education|retail|event|journalism|media|photography|legal|law|banking|insurance|manufacturing|marine|port|fisheries|aquaculture|ngo|social work|real estate|property|logistics/.test(category)) return {label:"₹2,000–₹8,000/month",low:2000,high:8000};
 return {label:"₹2,000–₹8,000/month",low:2000,high:8000};
}
function salaryAmount(item){
 const text=String(item.stipend||"").replace(/,/g,"");
 if(/not disclosed|not applicable|depends on|training fees/i.test(text)) return null;
 if(!/(₹|rs\.?|inr|\bper month\b|\/month|monthly|stipend|salary)/i.test(text)) return null;
 const matches=[...text.matchAll(/\d+(?:\.\d+)?/g)].map(m=>Number(m[0])).filter(Number.isFinite);
 if(!matches.length) return null;
 return matches.length>1 ? (matches[0]+matches[1])/2 : matches[0];
}
function filterSalaryAmount(item){
 const actual=salaryAmount(item);
 if(actual!==null)return actual;
 if(item.payType==="unknown" && !/not applicable|training fees/i.test(String(item.stipend||""))){const r=estimateRange(item);return (r.low+r.high)/2;}
 return null;
}
function companyLogo(item){return `<div class="company-logo ${escapeHtml(item.tone||"blue")}">${escapeHtml(item.initials||item.company?.slice(0,2)||"K")}</div>`;}
function renderCard(item){
 const isSaved=savedIds.includes(item.id);
 const status=item.status==="verified"?'<span class="tag verified">Source found</span>':'<span class="tag lead">Vacancy unconfirmed</span>';
 const category=item.category||"Other";
 const pay=item.payType==="paid"?"Paid / disclosed":item.payType==="unpaid"?"Unpaid":"Not disclosed";
 const stipend= item.stipend || "Not disclosed";
 const estimate=(item.payType==="unknown" && !/not applicable|training fees/i.test(String(stipend)))?estimateRange(item):null;
 return `<article class="internship-card">
  <div class="card-top"><div class="company-identity">${companyLogo(item)}<div><strong>${escapeHtml(item.company)}</strong><small>${escapeHtml(item.category||"Other")}</small></div></div><button class="save-btn ${isSaved?"saved":""}" data-save="${escapeHtml(item.id)}" title="${isSaved?"Remove saved item":"Save internship"}" aria-label="${isSaved?"Unsave":"Save"} ${escapeHtml(item.role)}">${isSaved?"♥":"♡"}</button></div>
  <div class="card-tags"><span class="tag category">${escapeHtml(category)}</span>${status}</div>
  <h3>${escapeHtml(item.role)}</h3><p class="card-description">${escapeHtml(item.description)}</p>
  <div class="card-details">
   <div class="detail-item"><span class="detail-icon">⌖</span><div><b>Location</b>${escapeHtml((item.address||"Kakinada").split(",").slice(-2).join(",").trim())}</div></div>
   <div class="detail-item"><span class="detail-icon">◷</span><div><b>Duration</b>${escapeHtml(item.duration||"Not confirmed")}</div></div>
   <div class="detail-item"><span class="detail-icon">⌘</span><div><b>Work mode</b>${escapeHtml(item.mode||"Confirm")}</div></div>
   <div class="detail-item"><span class="detail-icon">↗</span><div><b>Pay details</b>${escapeHtml(pay)}</div></div>
  </div>
  <div class="card-footer"><div class="salary-highlight ${item.payType==="paid"||item.payType==="disclosed"?"salary-known":item.payType==="unpaid"?"salary-unpaid":"salary-unknown"}"><span class="salary-icon">₹</span><div class="salary-copy"><small>STIPEND / SALARY</small><strong>${escapeHtml(stipend)}</strong><em>${item.payType==="paid"||item.payType==="disclosed"?"Pay listed — confirm details":item.payType==="unpaid"?"Unpaid opportunity":"Ask employer to confirm pay"}</em>${estimate?`<div class="salary-estimate"><span>Typical estimate</span><b>${escapeHtml(estimate.label)}</b><small>Indicative only · not employer-confirmed</small></div>`:""}</div></div><div class="card-actions"><button class="btn btn-soft" data-details="${escapeHtml(item.id)}">Details</button><a class="btn btn-primary" href="${escapeHtml(safeExternal(item.apply||item.source||"#"))}" target="_blank" rel="noopener noreferrer">Apply ↗</a></div></div>
 </article>`;
}
function getFiltered(){
 const q=$("#searchInput").value.trim().toLowerCase();
 const cat=$("#categoryFilter").value, mode=$("#modeFilter").value, pay=$("#payFilter").value, sort=$("#sortFilter").value;
 let result=listings.filter(item=>{
  const searchable=[item.company,item.role,item.category,item.description,item.address,item.skills,item.eligibility].join(" ").toLowerCase();
  if(q&&!searchable.includes(q))return false;
  if(cat&&item.category!==cat)return false;
  if(mode&&item.mode!==mode)return false;
  if(pay==="paid"&&!(item.payType==="paid"||item.payType==="disclosed"))return false;
  if(pay==="unpaid"&&item.payType!=="unpaid")return false;
  if(pay==="unknown"&&item.payType!=="unknown")return false;
  const amount=filterSalaryAmount(item);
  if(pay==="0-5000"&&(amount===null||amount>5000))return false;
  if(pay==="5000-10000"&&(amount===null||amount<=5000||amount>10000))return false;
  if(pay==="10000-20000"&&(amount===null||amount<=10000||amount>20000))return false;
  if(pay==="20000-plus"&&(amount===null||amount<=20000))return false;
  if(savedOnly&&!savedIds.includes(item.id))return false;
  return true;
 });
 if(sort==="company")result.sort((a,b)=>a.company.localeCompare(b.company));
 if(sort==="role")result.sort((a,b)=>a.role.localeCompare(b.role));
 if(sort==="salary-high")result.sort((a,b)=>(filterSalaryAmount(b)??-1)-(filterSalaryAmount(a)??-1));
 if(sort==="salary-low")result.sort((a,b)=>(filterSalaryAmount(a)??Infinity)-(filterSalaryAmount(b)??Infinity));
 return result;
}
function renderListings(){
 const result=getFiltered();
 $("#internshipGrid").innerHTML=result.map(renderCard).join("");
 $("#emptyState").classList.toggle("hidden",result.length>0);
 $("#internshipGrid").classList.toggle("hidden",result.length===0);
 $("#resultsText").textContent=`Showing ${result.length} of ${listings.length} directory entries`;
 $("#allViewBtn").classList.toggle("active",!savedOnly);$("#savedViewBtn").classList.toggle("active",savedOnly);
 refreshCounts();
}
function renderCompanies(){
 const unique=[];const seen=new Set();
 listings.forEach(x=>{if(!seen.has(x.company)){seen.add(x.company);unique.push(x);}});
 $("#companyGrid").innerHTML=unique.slice(0,12).map(item=>`<article class="company-card"><div class="company-identity">${companyLogo(item)}<div><strong>${escapeHtml(item.company)}</strong><small>${escapeHtml(item.category||"Local organisation")}</small></div></div><p>${escapeHtml(item.status==="verified"?"Official programme or organisation source located.":"Directory lead only — ask whether internships are available.")}</p><div class="company-address">⌖ ${escapeHtml(item.address||"Kakinada")}</div><div class="company-links"><a href="${escapeHtml(safeExternal(mapsUrl(item)))}" target="_blank" rel="noopener noreferrer">View map ↗</a><a href="${escapeHtml(safeExternal(item.source||"#"))}" target="_blank" rel="noopener noreferrer">Source ↗</a></div></article>`).join("");
}
function renderAll(){populateCategories();renderListings();renderCompanies();}
function toggleSave(id){if(savedIds.includes(id)){savedIds=savedIds.filter(x=>x!==id);toast("Removed from saved list.");}else{savedIds.push(id);toast("Saved on this device.");}setStore(STORAGE.saved,savedIds);renderListings();}
function showModal(content){$("#modalContent").innerHTML=content;$("#modalBackdrop").classList.remove("hidden");activeModal=true;document.body.style.overflow="hidden";}
function closeModal(){$("#modalBackdrop").classList.add("hidden");activeModal=null;document.body.style.overflow="";}
function showDetails(id){
 const item=listings.find(x=>x.id===id);if(!item)return;
 const status=item.status==="verified"?"Programme / organisation source found":"Company lead only — current vacancy not confirmed";
 showModal(`<div class="eyebrow">OPPORTUNITY DETAILS</div><h2 id="modalTitle">${escapeHtml(item.role)}</h2><p class="modal-intro">${escapeHtml(status)}. Confirm all details directly before applying.</p>
 <div class="detail-modal-company">${companyLogo(item)}<div><strong>${escapeHtml(item.company)}</strong><small>${escapeHtml(item.category||"Other")} · ${escapeHtml(item.mode||"Confirm work mode")}</small></div></div>
 <div class="detail-block"><h4>About this opportunity</h4><p>${escapeHtml(item.description)}</p></div>
 <div class="detail-grid"><div class="detail-block"><h4>Address</h4><p>${escapeHtml(item.address||"Not provided")}</p></div><div class="detail-block"><h4>Stipend / salary</h4><p>${escapeHtml(item.stipend||"Not disclosed")}</p>${item.payType==="unknown"&&!/not applicable|training fees/i.test(String(item.stipend||""))?`<p><b>Typical estimate:</b> ${escapeHtml(estimateRange(item).label)}<br><small>Indicative only; not confirmed by this employer.</small></p>`:""}</div><div class="detail-block"><h4>Duration</h4><p>${escapeHtml(item.duration||"Not confirmed")}</p></div><div class="detail-block"><h4>Eligibility</h4><p>${escapeHtml(item.eligibility||"Confirm with organisation")}</p></div><div class="detail-block"><h4>Skills / area</h4><p>${escapeHtml(item.skills||"Confirm with organisation")}</p></div><div class="detail-block"><h4>Public contact</h4><p>${escapeHtml(item.contact||"See source website")}</p></div></div>
 <div class="detail-block"><h4>Source / verification</h4><p>${escapeHtml(item.statusText||status)}<br>${escapeHtml(item.source||"No source supplied")}</p></div>
 <div class="detail-actions"><a class="btn btn-primary" href="${escapeHtml(safeExternal(item.apply||item.source||"#"))}" target="_blank" rel="noopener noreferrer">Open application / source ↗</a><a class="btn btn-outline" href="${escapeHtml(safeExternal(mapsUrl(item)))}" target="_blank" rel="noopener noreferrer">Google Maps ↗</a><button class="btn btn-soft" data-save="${escapeHtml(item.id)}">${savedIds.includes(item.id)?"♥ Saved":"♡ Save listing"}</button></div>
 <p class="modal-note">Safety tip: never pay a recruiter or training provider without independently checking the programme, terms and receipt policy. Never send OTPs or banking passwords.</p>`);
}
function loginModal(mode="login"){
 if(currentUser){profileModal();return;}
 const signup=mode==="signup";
 showModal(`<div class="eyebrow">STUDENT SPACE</div><h2 id="modalTitle">${signup?"Create your student account":"Welcome back"}</h2><p class="modal-intro">${signup?"Create a profile to save opportunities and track your interests.":"Log in to view and update your student profile."} This frontend demo stores data only in this browser.</p>
 <form id="studentAuthForm"><div class="form-field"><label for="authEmail">Email address</label><input id="authEmail" type="email" required maxlength="120" autocomplete="email" value="${escapeHtml(student?.email||"")}" placeholder="you@example.com"></div>
 <div class="form-field"><label for="authPassword">Password</label><input id="authPassword" type="password" required minlength="4" maxlength="100" autocomplete="${signup?"new-password":"current-password"}" placeholder="At least 4 characters"></div>
 ${signup?`<div class="form-field"><label for="authName">Full name</label><input id="authName" required maxlength="70" autocomplete="name" placeholder="Your full name"></div><div class="form-field"><label for="authCourse">Course / qualification</label><input id="authCourse" maxlength="100" placeholder="Diploma, B.Tech, BPT..."></div>`:""}
 <button class="btn btn-primary" type="submit">${signup?"Create account":"Log in"}</button></form>
 <p class="modal-note">${signup?'Already registered? <button class="text-link" type="button" id="switchAuthMode">Log in</button>':'New student? <button class="text-link" type="button" id="switchAuthMode">Create an account</button>'}</p>
 <p class="modal-note">Demo only: passwords are stored in this browser and are not securely protected. Do not use a real or reused password.</p>`);
 $("#switchAuthMode").addEventListener("click",()=>loginModal(signup?"login":"signup"));
 $("#studentAuthForm").addEventListener("submit",e=>{
  e.preventDefault();const email=$("#authEmail").value.trim().toLowerCase();const password=$("#authPassword").value;
  if(signup){
   if(accounts.some(a=>a.email===email)){toast("An account with this email already exists. Please log in.");return;}
   const account={id:"student-"+Date.now(),email,password,name:$("#authName").value.trim(),course:$("#authCourse").value.trim(),skills:"",phone:"",college:"",city:"Kakinada",createdAt:new Date().toISOString()};
   accounts.push(account);setStore(STORAGE.accounts,accounts);currentUser=account.id;setStore(STORAGE.currentUser,currentUser);student=account;setStore(STORAGE.student,student);updateLoginButton();profileModal();toast("Account created. Welcome to Kakinada Internship Finder!");
  }else{
   const account=accounts.find(a=>a.email===email&&a.password===password);
   if(!account){toast("Email or password is incorrect. If you are new, create an account.");return;}
   currentUser=account.id;student=account;setStore(STORAGE.currentUser,currentUser);setStore(STORAGE.student,student);updateLoginButton();profileModal();toast("Logged in successfully.");
  }
 });
}
function updateLoginButton(){const btn=$("#loginOpenBtn");if(btn)btn.textContent=currentUser?"My profile":"Login / Sign up";}
function profileModal(){
 const account=accounts.find(a=>a.id===currentUser);
 if(!account){currentUser=null;setStore(STORAGE.currentUser,null);updateLoginButton();loginModal();return;}
 student=account;setStore(STORAGE.student,student);
 showModal(`<div class="eyebrow">YOUR STUDENT SPACE</div><h2 id="modalTitle">My profile</h2><p class="modal-intro">Manage your details so you can keep your local opportunity search organised.</p>
 <form id="studentProfileForm"><div class="form-grid">
 <div class="form-field"><label for="profileName">Full name</label><input id="profileName" required maxlength="70" value="${escapeHtml(account.name||"")}"></div>
 <div class="form-field"><label for="profileEmail">Email address</label><input id="profileEmail" type="email" disabled value="${escapeHtml(account.email||"")}"></div>
 <div class="form-field"><label for="profilePhone">Phone (optional)</label><input id="profilePhone" type="tel" maxlength="20" value="${escapeHtml(account.phone||"")}" placeholder="Your contact number"></div>
 <div class="form-field"><label for="profileCourse">Course / qualification</label><input id="profileCourse" maxlength="100" value="${escapeHtml(account.course||"")}" placeholder="Diploma, B.Tech, BPT..."></div>
 <div class="form-field"><label for="profileCollege">College / institute</label><input id="profileCollege" maxlength="120" value="${escapeHtml(account.college||"")}" placeholder="Your college name"></div>
 <div class="form-field"><label for="profileCity">Preferred location</label><input id="profileCity" maxlength="80" value="${escapeHtml(account.city||"Kakinada")}" placeholder="Kakinada"></div>
 <div class="form-field full"><label for="profileSkills">Skills and job interests</label><textarea id="profileSkills" maxlength="500" placeholder="e.g. AWS, digital marketing, food service">${escapeHtml(account.skills||"")}</textarea></div>
 </div><button class="btn btn-primary" type="submit">Save profile</button></form>
 <div class="detail-actions" style="margin-top:14px"><button class="btn btn-soft" id="profileSavedBtn" type="button">View saved opportunities (${savedIds.length})</button><button class="btn btn-outline" id="studentLogoutBtn" type="button">Log out</button></div>
 <p class="modal-note">Your profile and saved listings stay in this browser. They are not shared with employers and will not sync across devices.</p>`);
 $("#studentProfileForm").addEventListener("submit",e=>{e.preventDefault();Object.assign(account,{name:$("#profileName").value.trim(),phone:$("#profilePhone").value.trim(),course:$("#profileCourse").value.trim(),college:$("#profileCollege").value.trim(),city:$("#profileCity").value.trim(),skills:$("#profileSkills").value.trim()});accounts=accounts.map(a=>a.id===account.id?account:a);setStore(STORAGE.accounts,accounts);student=account;setStore(STORAGE.student,student);toast("Profile updated successfully.");profileModal();});
 $("#profileSavedBtn").addEventListener("click",()=>{closeModal();savedOnly=true;renderListings();$("#internships").scrollIntoView({behavior:"smooth"});});
 $("#studentLogoutBtn").addEventListener("click",()=>{currentUser=null;student=null;setStore(STORAGE.currentUser,null);setStore(STORAGE.student,null);updateLoginButton();closeModal();toast("You have logged out.");});
}
function employerAuthModal(mode="login"){
 const signup=mode==="signup";
 showModal(`<div class="eyebrow">EMPLOYER PORTAL</div><h2 id="modalTitle">${signup?"Create company account":"Company login"}</h2><p class="modal-intro">Companies can create a profile and publish internship or entry-level job listings. This demo stores accounts and posts only in this browser.</p>
 <form id="employerAuthForm"><div class="form-field"><label for="empEmail">Work email *</label><input id="empEmail" type="email" required maxlength="120" autocomplete="email" placeholder="hr@company.com"></div>
 <div class="form-field"><label for="empPassword">Password *</label><input id="empPassword" type="password" required minlength="4" maxlength="100" placeholder="At least 4 characters"></div>
 ${signup?`<div class="form-field"><label for="empName">Company name *</label><input id="empName" required maxlength="100" placeholder="Your registered business name"></div><div class="form-field"><label for="empContact">Contact person *</label><input id="empContact" required maxlength="70" placeholder="HR / hiring manager"></div><div class="form-field"><label for="empPhone">Public contact number</label><input id="empPhone" type="tel" maxlength="30" placeholder="Phone number"></div><div class="form-field full"><label for="empAddress">Company address *</label><textarea id="empAddress" required maxlength="300" placeholder="Kakinada, Andhra Pradesh"></textarea></div><div class="form-field full"><label for="empWebsite">Website (optional)</label><input id="empWebsite" type="url" maxlength="300" placeholder="https://example.com"></div>`:""}
 <button class="btn btn-primary" type="submit">${signup?"Create company account":"Log in"}</button></form>
 <p class="modal-note">${signup?'Already registered? <button class="text-link" type="button" id="switchEmployerMode">Log in</button>':'New company? <button class="text-link" type="button" id="switchEmployerMode">Create an account</button>'}</p>
 <p class="modal-note">Demo only: do not use a reused password. Posts are not sent to a server and are visible only in this browser until you deploy a backend.</p>`);
 $("#switchEmployerMode").addEventListener("click",()=>employerAuthModal(signup?"login":"signup"));
 $("#employerAuthForm").addEventListener("submit",e=>{e.preventDefault();const email=$("#empEmail").value.trim().toLowerCase(),password=$("#empPassword").value;
 if(signup){if(employerAccounts.some(a=>a.email===email)){toast("Company email already registered. Please log in.");return;}const account={id:"employer-"+Date.now(),email,password,company:$("#empName").value.trim(),contact:$("#empContact").value.trim(),phone:$("#empPhone").value.trim(),address:$("#empAddress").value.trim(),website:$("#empWebsite").value.trim(),createdAt:new Date().toISOString()};employerAccounts.push(account);setStore(STORAGE.employers,employerAccounts);currentEmployer=account.id;setStore(STORAGE.currentEmployer,currentEmployer);employerDashboard();toast("Company account created!");}
 else{const account=employerAccounts.find(a=>a.email===email&&a.password===password);if(!account){toast("Company email or password is incorrect.");return;}currentEmployer=account.id;setStore(STORAGE.currentEmployer,currentEmployer);employerDashboard();toast("Company logged in.");}
 });
}
function employerDashboard(){
 const company=employerAccounts.find(a=>a.id===currentEmployer);if(!company){currentEmployer=null;setStore(STORAGE.currentEmployer,null);employerAuthModal();return;}
 const own=listings.filter(x=>x.postedBy===company.id);const rows=own.map(x=>`<div class="admin-item"><div><b>${escapeHtml(x.role)}</b><small>${escapeHtml(x.category)} · ${escapeHtml(x.stipend||"Pay not disclosed")} · ${escapeHtml(x.statusText||"Company post")}</small></div><button class="btn btn-outline" data-company-delete="${escapeHtml(x.id)}">Remove</button></div>`).join("");
 showModal(`<div class="eyebrow">COMPANY DASHBOARD</div><h2 id="modalTitle">${escapeHtml(company.company)}</h2><p class="modal-intro">${escapeHtml(company.address)} · Contact: ${escapeHtml(company.contact)}</p><div class="admin-toolbar"><p><b>${own.length}</b> listing(s) posted by your company</p><button class="btn btn-primary" id="companyAddPostBtn">＋ Post internship / job</button></div><div class="modal-list">${rows||'<p class="empty-state">You have not posted any opportunities yet. Click “Post internship / job” to add your first listing.</p>'}</div><div class="detail-actions" style="margin-top:14px"><button class="btn btn-outline" id="companyEditProfileBtn">Edit company profile</button><button class="btn btn-quiet" id="companyLogoutBtn">Log out</button></div><p class="modal-note">Local demo: posts are saved to this browser only. Company identity and vacancies are not independently verified.</p>`);
 $("#companyAddPostBtn").addEventListener("click",()=>companyPostForm());
 $("#companyEditProfileBtn").addEventListener("click",()=>employerProfileForm());
 $("#companyLogoutBtn").addEventListener("click",()=>{currentEmployer=null;setStore(STORAGE.currentEmployer,null);closeModal();toast("Company logged out.");});
}
function employerProfileForm(){const a=employerAccounts.find(x=>x.id===currentEmployer);if(!a)return;showModal(`<div class="eyebrow">COMPANY PROFILE</div><h2 id="modalTitle">Edit company profile</h2><form id="employerProfileForm"><div class="form-grid"><div class="form-field"><label>Company name *</label><input id="epName" required maxlength="100" value="${escapeHtml(a.company)}"></div><div class="form-field"><label>Contact person *</label><input id="epContact" required maxlength="70" value="${escapeHtml(a.contact)}"></div><div class="form-field"><label>Public phone</label><input id="epPhone" maxlength="30" value="${escapeHtml(a.phone||"")}"></div><div class="form-field"><label>Website</label><input id="epWebsite" type="url" maxlength="300" value="${escapeHtml(a.website||"")}"></div><div class="form-field full"><label>Company address *</label><textarea id="epAddress" required maxlength="300">${escapeHtml(a.address)}</textarea></div></div><button class="btn btn-primary" type="submit">Save profile</button> <button class="btn btn-outline" type="button" id="epCancel">Cancel</button></form>`);$("#employerProfileForm").addEventListener("submit",e=>{e.preventDefault();Object.assign(a,{company:$("#epName").value.trim(),contact:$("#epContact").value.trim(),phone:$("#epPhone").value.trim(),website:$("#epWebsite").value.trim(),address:$("#epAddress").value.trim()});employerAccounts=employerAccounts.map(x=>x.id===a.id?a:x);setStore(STORAGE.employers,employerAccounts);toast("Company profile updated.");employerDashboard();});$("#epCancel").addEventListener("click",employerDashboard);}
function companyPostForm(){const a=employerAccounts.find(x=>x.id===currentEmployer);if(!a)return;showModal(`<div class="eyebrow">NEW OPPORTUNITY</div><h2 id="modalTitle">Post an internship / job</h2><p class="modal-intro">Please provide accurate role details. New company posts are labelled unverified until independently checked.</p><form id="companyPostForm"><div class="form-grid"><div class="form-field"><label>Company name</label><input value="${escapeHtml(a.company)}" disabled></div><div class="form-field"><label for="cpRole">Role title *</label><input id="cpRole" required maxlength="120" placeholder="e.g. Digital Marketing Intern"></div><div class="form-field"><label for="cpCategory">Category</label><select id="cpCategory">${categories.map(c=>`<option>${escapeHtml(c)}</option>`).join("")}</select></div><div class="form-field"><label for="cpMode">Work mode</label><select id="cpMode"><option>On-site</option><option>Hybrid</option><option>Remote</option></select></div><div class="form-field"><label for="cpDuration">Duration / employment</label><input id="cpDuration" maxlength="80" placeholder="e.g. 3 months"></div><div class="form-field"><label for="cpPay">Stipend / salary</label><input id="cpPay" maxlength="80" placeholder="e.g. ₹5,000/month or Negotiable"></div><div class="form-field full"><label for="cpAddress">Work location *</label><textarea id="cpAddress" required maxlength="300">${escapeHtml(a.address)}</textarea></div><div class="form-field full"><label for="cpDesc">Role description *</label><textarea id="cpDesc" required maxlength="800" placeholder="Responsibilities, learning outcomes, working hours..."></textarea></div><div class="form-field full"><label for="cpSkills">Skills / eligibility</label><textarea id="cpSkills" maxlength="300" placeholder="Course, skills, year of study..."></textarea></div><div class="form-field"><label for="cpContact">Hiring contact</label><input id="cpContact" maxlength="150" value="${escapeHtml(a.contact)}"></div><div class="form-field"><label for="cpPhone">Public phone</label><input id="cpPhone" maxlength="40" value="${escapeHtml(a.phone||"")}"></div><div class="form-field full"><label for="cpApply">Application link (optional)</label><input id="cpApply" type="url" maxlength="500" placeholder="https://..."></div></div><button class="btn btn-primary" type="submit">Publish listing</button> <button class="btn btn-outline" type="button" id="cpCancel">Cancel</button></form>`);
 $("#companyPostForm").addEventListener("submit",e=>{e.preventDefault();const applyRaw=$("#cpApply").value.trim(),apply=applyRaw?safeExternal(applyRaw):(a.website?safeExternal(a.website):"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(a.company+" Kakinada"));if(apply==="#"){toast("Please use a valid http or https application link.");return;}const stipend=$("#cpPay").value.trim()||"Not disclosed";const item={id:"company-post-"+Date.now(),company:a.company,initials:a.company.split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase(),tone:"blue",role:$("#cpRole").value.trim(),category:$("#cpCategory").value,description:$("#cpDesc").value.trim(),address:$("#cpAddress").value.trim(),duration:$("#cpDuration").value.trim()||"Not specified",stipend,payType:/unpaid/i.test(stipend)?"unpaid":/₹|rs\.?|inr|paid/i.test(stipend)?"paid":"unknown",mode:$("#cpMode").value,eligibility:$("#cpSkills").value.trim()||"See role description",skills:$("#cpSkills").value.trim(),contact:$("#cpContact").value.trim()||a.contact,phone:$("#cpPhone").value.trim()||a.phone||"",email:a.email,source:a.website||apply,apply,map:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(a.company+" "+$("#cpAddress").value.trim()),status:"lead",statusText:"Employer-submitted listing — not independently verified",kind:"company-post",postedBy:a.id,createdAt:new Date().toISOString()};listings.unshift(item);setStore(STORAGE.listings,listings);renderAll();toast("Your listing has been published in this browser.");employerDashboard();});$("#cpCancel").addEventListener("click",employerDashboard);
}
function adminLoginModal(){
 if(adminLoggedIn){adminPanel();return;}
 showModal(`<div class="eyebrow">DIRECTORY MANAGEMENT</div><h2 id="modalTitle">Admin panel</h2><p class="modal-intro">Demo-only admin login. These credentials are visible in app.js and do not provide real security.</p><form id="adminLoginForm"><div class="form-field"><label for="adminUser">Username</label><input id="adminUser" required autocomplete="username" placeholder="admin"></div><div class="form-field"><label for="adminPass">Password</label><input id="adminPass" required type="password" autocomplete="current-password" placeholder="Demo password"></div><button class="btn btn-primary" type="submit">Open admin panel</button></form><p class="modal-note">Demo credentials: <b>admin</b> / <b>kakinada123</b>. Change these only for a classroom demo; never publish sensitive data in frontend code.</p>`);
 $("#adminLoginForm").addEventListener("submit",e=>{e.preventDefault();if($("#adminUser").value==="admin"&&$("#adminPass").value==="kakinada123"){adminLoggedIn=true;setStore(STORAGE.admin,true);adminPanel();}else toast("Incorrect demo credentials.");});
}
function adminPanel(){
 const rows=listings.map(x=>`<div class="admin-item"><div><b>${escapeHtml(x.role)}</b><small>${escapeHtml(x.company)} · ${escapeHtml(x.status==="verified"?"Source found":"Lead / unverified")}</small></div><div style="display:flex;gap:6px;flex-shrink:0"><button class="btn btn-soft" data-edit="${escapeHtml(x.id)}">Edit</button><button class="btn btn-outline" data-delete="${escapeHtml(x.id)}">Delete</button></div></div>`).join("");
 showModal(`<div class="eyebrow">DIRECTORY MANAGEMENT</div><h2 id="modalTitle">Admin panel</h2><p class="modal-intro">Add or update directory entries on this browser. Only mark a listing verified after checking its official source and vacancy details.</p><div class="admin-toolbar"><p>${listings.length} total entries</p><button class="btn btn-primary" id="addListingBtn">＋ Add listing</button></div><div class="modal-list">${rows}</div><div class="admin-toolbar"><button class="btn btn-outline" id="exportBtn">Export JSON backup</button><button class="btn btn-quiet" id="adminLogoutBtn">Log out</button></div><p class="modal-note">This is local browser storage, not a shared database. Export your entries regularly. Admin access can be bypassed by someone who can edit the page or browser storage.</p>`);
}
function listingForm(id=null){
 const item=id?listings.find(x=>x.id===id):{};
 if(id&&!item)return;
 showModal(`<div class="eyebrow">LISTING EDITOR</div><h2 id="modalTitle">${id?"Edit listing":"Add a listing"}</h2><p class="modal-intro">Enter factual information only. Use an official source link and set vacancy status honestly.</p>
 <form id="listingForm"><div class="form-grid">
 <div class="form-field"><label for="fCompany">Company / organisation *</label><input id="fCompany" required maxlength="100" value="${escapeHtml(item.company||"")}"></div>
 <div class="form-field"><label for="fRole">Position / programme *</label><input id="fRole" required maxlength="120" value="${escapeHtml(item.role||"")}"></div>
 <div class="form-field"><label for="fCategory">Category</label><select id="fCategory">${categories.map(c=>`<option ${item.category===c?"selected":""}>${escapeHtml(c)}</option>`).join("")}</select></div>
 <div class="form-field"><label for="fMode">Work mode</label><select id="fMode">${["On-site","Hybrid","Remote","Training / in-person"].map(c=>`<option ${item.mode===c?"selected":""}>${c}</option>`).join("")}</select></div>
 <div class="form-field full"><label for="fAddress">Full address *</label><textarea id="fAddress" required maxlength="300">${escapeHtml(item.address||"")}</textarea></div>
 <div class="form-field"><label for="fDuration">Duration</label><input id="fDuration" maxlength="80" value="${escapeHtml(item.duration||"Not confirmed")}"></div>
 <div class="form-field"><label for="fStipend">Stipend / salary</label><input id="fStipend" maxlength="80" value="${escapeHtml(item.stipend||"Not disclosed")}"></div>
 <div class="form-field"><label for="fPay">Pay status</label><select id="fPay">${[["unknown","Not disclosed"],["paid","Paid / disclosed"],["unpaid","Unpaid"]].map(([v,l])=>`<option value="${v}" ${(item.payType||"unknown")===v?"selected":""}>${l}</option>`).join("")}</select></div>
 <div class="form-field"><label for="fStatus">Verification status</label><select id="fStatus"><option value="lead" ${item.status!=="verified"?"selected":""}>Lead — vacancy unconfirmed</option><option value="verified" ${item.status==="verified"?"selected":""}>Official source found</option></select></div>
 <div class="form-field full"><label for="fDescription">Description</label><textarea id="fDescription" maxlength="500">${escapeHtml(item.description||"")}</textarea></div>
 <div class="form-field full"><label for="fEligibility">Eligibility</label><input id="fEligibility" maxlength="250" value="${escapeHtml(item.eligibility||"Confirm with organisation")}"></div>
 <div class="form-field full"><label for="fSkills">Skills / area</label><input id="fSkills" maxlength="250" value="${escapeHtml(item.skills||"")}"></div>
 <div class="form-field"><label for="fContact">Public contact</label><input id="fContact" maxlength="150" value="${escapeHtml(item.contact||"")}"></div>
 <div class="form-field"><label for="fPhone">Phone (public)</label><input id="fPhone" maxlength="40" value="${escapeHtml(item.phone||"")}"></div>
 <div class="form-field full"><label for="fSource">Official source URL *</label><input id="fSource" type="url" required maxlength="500" value="${escapeHtml(item.source||"")}"></div>
 <div class="form-field full"><label for="fApply">Application URL (or source URL) *</label><input id="fApply" type="url" required maxlength="500" value="${escapeHtml(item.apply||item.source||"")}"></div>
 </div><button class="btn btn-primary" type="submit">${id?"Save changes":"Add listing"}</button> <button class="btn btn-outline" type="button" id="cancelListingBtn">Cancel</button></form>`);
 $("#listingForm").addEventListener("submit",e=>{
  e.preventDefault();
  const company=$("#fCompany").value.trim(),role=$("#fRole").value.trim(),address=$("#fAddress").value.trim(),source=safeExternal($("#fSource").value.trim()),apply=safeExternal($("#fApply").value.trim());
  if(source==="#"||apply==="#"){toast("Please enter valid HTTP or HTTPS links.");return;}
  const newItem={
   ...(item||{}),id:id||("custom-"+Date.now()),company,role,category:$("#fCategory").value,mode:$("#fMode").value,address,
   duration:$("#fDuration").value.trim()||"Not confirmed",stipend:$("#fStipend").value.trim()||"Not disclosed",payType:$("#fPay").value,
   status:$("#fStatus").value,statusText:$("#fStatus").value==="verified"?"Official source supplied by admin — verify current vacancy":"Company lead — vacancy unconfirmed",
   description:$("#fDescription").value.trim(),eligibility:$("#fEligibility").value.trim(),skills:$("#fSkills").value.trim(),
   contact:$("#fContact").value.trim(),phone:$("#fPhone").value.trim(),source,apply,
   map:"https://www.google.com/maps/search/?api=1&query="+encodeURIComponent(address),
   initials:company.split(/\s+/).map(w=>w[0]).join("").slice(0,2).toUpperCase(),tone:"blue",kind:"lead"
  };
  if(id)listings=listings.map(x=>x.id===id?newItem:x);else listings.unshift(newItem);
  setStore(STORAGE.listings,listings);renderAll();adminPanel();toast(id?"Listing updated.":"Listing added.");
 });
 $("#cancelListingBtn").addEventListener("click",adminPanel);
}
function exportBackup(){
 const blob=new Blob([JSON.stringify({exportedAt:new Date().toISOString(),listings},null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob);const a=document.createElement("a");a.href=url;a.download="kakinada-internship-listings.json";a.click();URL.revokeObjectURL(url);toast("JSON backup exported.");
}
function resetFilters(){$("#searchInput").value="";$("#categoryFilter").value="";$("#modeFilter").value="";$("#payFilter").value="";$("#sortFilter").value="featured";savedOnly=false;renderListings();}
$("#searchInput").addEventListener("input",renderListings);
["categoryFilter","modeFilter","payFilter","sortFilter"].forEach(id=>$("#"+id).addEventListener("change",renderListings));
$("#clearFiltersBtn").addEventListener("click",resetFilters);$("#emptyResetBtn").addEventListener("click",resetFilters);
$("#heroSearchBtn").addEventListener("click",()=>{$("#searchInput").value=$("#heroSearch").value;renderListings();$("#internships").scrollIntoView({behavior:"smooth"});});
$("#heroSearch").addEventListener("keydown",e=>{if(e.key==="Enter")$("#heroSearchBtn").click();});
$("#allViewBtn").addEventListener("click",()=>{savedOnly=false;renderListings();});
$("#savedViewBtn").addEventListener("click",()=>{savedOnly=true;renderListings();$("#internships").scrollIntoView({behavior:"smooth"});});
$("#savedNavBtn").addEventListener("click",()=>{$("#savedViewBtn").click();});
$("#loginOpenBtn").addEventListener("click",()=>{if(currentUser)profileModal();else loginModal();});$("#employerOpenBtn").addEventListener("click",()=>{if(currentEmployer)employerDashboard();else employerAuthModal();});$("#adminOpenBtn").addEventListener("click",adminLoginModal);
$("#modalCloseBtn").addEventListener("click",closeModal);
$("#modalBackdrop").addEventListener("click",e=>{if(e.target===$("#modalBackdrop"))closeModal();});
document.addEventListener("keydown",e=>{if(e.key==="Escape"&&activeModal)closeModal();});
document.addEventListener("click",e=>{
 const companyDelete=e.target.closest("[data-company-delete]");if(companyDelete){const item=listings.find(x=>x.id===companyDelete.dataset.companyDelete);if(item&&item.postedBy===currentEmployer&&confirm("Remove this company listing?")){listings=listings.filter(x=>x.id!==item.id);setStore(STORAGE.listings,listings);renderAll();employerDashboard();toast("Listing removed.");}return;}
 const save=e.target.closest("[data-save]");if(save){e.preventDefault();toggleSave(save.dataset.save);if(activeModal&&$("#modalContent").querySelector("[data-details]"))showDetails(save.dataset.details);return;}
 const detail=e.target.closest("[data-details]");if(detail){showDetails(detail.dataset.details);return;}
 const edit=e.target.closest("[data-edit]");if(edit){listingForm(edit.dataset.edit);return;}
 const del=e.target.closest("[data-delete]");if(del){const item=listings.find(x=>x.id===del.dataset.delete);if(item&&confirm(`Delete "${item.role}" from this browser?`)){listings=listings.filter(x=>x.id!==del.dataset.delete);savedIds=savedIds.filter(x=>x!==del.dataset.delete);setStore(STORAGE.listings,listings);setStore(STORAGE.saved,savedIds);renderAll();adminPanel();toast("Listing deleted.");}return;}
 if(e.target.closest("#addListingBtn")){listingForm();return;}
 if(e.target.closest("#exportBtn")){exportBackup();return;}
 if(e.target.closest("#adminLogoutBtn")){adminLoggedIn=false;setStore(STORAGE.admin,false);closeModal();toast("Admin demo logged out.");}
});
updateLoginButton();
renderAll();
