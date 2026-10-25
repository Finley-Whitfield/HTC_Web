import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type PageLink = {
  label: string;
  href: string;
};

type PageSection = {
  title: string;
  paragraphs?: string[];
  bullets?: string[];
  links?: PageLink[];
};

type CouncilPage = {
  title: string;
  eyebrow: string;
  intro: string;
  sections: PageSection[];
};

const councilSite = "https://www.hemsworthcouncil.co.uk";

const pages: Record<string, CouncilPage> = {
  about: {
    title: "About Hemsworth Town Council",
    eyebrow: "Your local council",
    intro:
      "Hemsworth Town Council serves the communities of Hemsworth, Fitzwilliam and Kinsley. The council is the tier of local government closest to residents and provides local services and representation for the township.",
    sections: [
      {
        title: "The town council",
        paragraphs: [
          "Hemsworth Town Council was formed under the Local Government Act 1972 and came into existence on 1 April 1974. It is the successor body to the former Hemsworth Urban District Council, which was abolished on 31 March 1973.",
          "Town and parish councils are independent from other local authorities and are governed by statute. Their powers are generally discretionary: a council may undertake services for the benefit of the people it serves.",
          "The council funds its work in part through the parish precept, collected as part of council tax. Council assets and liabilities belong to the council, not to individual elected councillors.",
        ],
      },
      {
        title: "Our area",
        paragraphs: [
          "The township comprises five wards: Hemsworth East, Hemsworth South, Hemsworth West, Fitzwilliam and Kinsley. Three councillors serve each ward.",
          "The council aims to maintain a high standard of service in areas for which it has direct responsibility. It consults local residents through meetings, questionnaires, press releases and newsletters.",
        ],
      },
      {
        title: "Quality Parish Status",
        paragraphs: [
          "Hemsworth Town Council was awarded Quality Parish Status in April 2008 and received re-accreditation in 2012.",
        ],
        links: [
          { label: "Meet your councillors", href: "/councillors" },
          { label: "How the council is organised", href: "/council" },
        ],
      },
    ],
  },
  council: {
    title: "Your Town Council",
    eyebrow: "Representation & decision-making",
    intro:
      "The council represents residents across five wards and considers local services, facilities and community needs at public meetings.",
    sections: [
      {
        title: "Council and committees",
        paragraphs: [
          "The published committee structure for 2026/27 includes the Town Council, Leisure and Recreation Committee, Finance Committee and Staffing Committee. Extraordinary meetings may also be called when required.",
          "Committee membership, terms of reference and meeting dates are published by the council. Contact the administration office if you need help finding a current committee paper.",
        ],
        links: [
          { label: "Committee structure", href: "/committee-structure" },
          { label: "Meeting timetable", href: "/committee-timetable" },
          { label: "Agendas and minutes", href: "/meetings" },
        ],
      },
      {
        title: "How decisions are made",
        paragraphs: [
          "Meetings are where councillors discuss council business and make decisions. Members of the public can attend public meetings; published agendas identify the date, venue and business to be considered.",
          "Draft minutes are usually published within 28 days of a council or committee meeting. They are confirmed or approved at the following meeting.",
        ],
      },
      {
        title: "Contact a councillor",
        paragraphs: [
          "The council publishes councillor contact details and registers of interests. If an individual councillor’s contact details are not listed, contact the administration office and your enquiry can be passed on.",
        ],
        links: [{ label: "Councillors and wards", href: "/councillors" }],
      },
    ],
  },
  councillors: {
    title: "Councillors & wards",
    eyebrow: "Your elected representatives",
    intro:
      "The council’s published councillor directory is grouped by ward. The names below are reproduced from the council listing; councillor membership and contact details can change, so confirm current information with the council office.",
    sections: [
      {
        title: "Hemsworth East Ward",
        bullets: [
          "Stan Bates — stan@hemsworthcouncil.co.uk",
          "Gary Kendall",
          "Shaun Middleton — Chair — shaun@hemsworthcouncil.co.uk",
          "Paul Stephens — paul@hemsworthcouncil.co.uk",
          "Becca Rushmer — Vice Chair — becca@hemsworthcouncil.co.uk",
        ],
      },
      {
        title: "Hemsworth South / West Ward",
        bullets: [
          "Kevin Conway — kevin@hemsworthcouncil.co.uk",
          "Dale Dixon — dale@hemsworthcouncil.co.uk",
          "Vickie Middleton — vickie@hemsworthcouncil.co.uk",
          "Ian McGinnies — ian@hemsworthcouncil.co.uk",
          "Valerie Darby",
        ],
      },
      {
        title: "Kinsley and Fitzwilliam Ward",
        bullets: [
          "Carol Whitehead — carol@hemsworthcouncil.co.uk",
          "Alan Dodson — alandodson1958@yahoo.co.uk",
          "Keith Fernie",
          "Peter Hardacre",
          "Maxine Hird — maxine@hemsworthcouncil.co.uk",
        ],
      },
      {
        title: "Ward boundaries & interests",
        paragraphs: [
          "Three councillors serve each of the five township wards: Hemsworth East, Hemsworth South, Hemsworth West, Fitzwilliam and Kinsley. The council listing groups Hemsworth South and West and groups Kinsley and Fitzwilliam together.",
          "Registers of interests are published alongside councillor details on the council’s records page. For the current register or a ward enquiry, contact the Clerk.",
        ],
        links: [
          { label: "Council and committee information", href: "/council" },
          { label: "Contact the council office", href: "/contact" },
        ],
      },
    ],
  },
  services: {
    title: "Council services",
    eyebrow: "Here to help",
    intro:
      "Hemsworth Town Council provides local services and manages community facilities across Hemsworth, Fitzwilliam and Kinsley. Use this guide to find local amenities, resident concessions and council support.",
    sections: [
      {
        title: "Local services",
        paragraphs: [
          "The council’s local facilities include Hemsworth Community Centre, football facilities, Hemsworth Water Park and Playworld, the Boathouse Café, allotments and Fitzwilliam Centre.",
          "Residents of Hemsworth, Fitzwilliam and Kinsley can apply for free Water Park car-parking permits and free Playworld passes. Bring proof of your name and address to Hemsworth Community Centre.",
        ],
        links: [
          { label: "All local facilities", href: "/facilities" },
          { label: "Water Park & Playworld", href: "/water-park" },
          { label: "Community Centre", href: "/community-centre" },
        ],
      },
      {
        title: "Community grants",
        paragraphs: [
          "The grant scheme is open to community organisations based in Hemsworth, Fitzwilliam or Kinsley, and to organisations that can demonstrate how they serve residents of those communities. Membership must be open to township residents.",
        ],
        links: [
          {
            label: "Download the council grant application form",
            href: `${councilSite}/wp-content/uploads/2025/06/Grant-Form-July-2023.docx`,
          },
        ],
      },
      {
        title: "Celebratory presentations",
        paragraphs: [
          "The Town Council makes presentations to township residents celebrating their 80th, 90th or 100th birthday, and each birthday after 100. Contact the administration office or a town councillor with details.",
        ],
        links: [{ label: "Contact the council", href: "/contact" }],
      },
      {
        title: "Wakefield Council services",
        paragraphs: [
          "Benefits, council tax, housing, roads, education, refuse collection, environmental health, anti-social behaviour and planning applications are handled by Wakefield Council rather than Hemsworth Town Council.",
        ],
        links: [{ label: "Who to contact about Wakefield Council services", href: "/wakefield-council" }],
      },
    ],
  },
  facilities: {
    title: "Local facilities",
    eyebrow: "Places & amenities",
    intro:
      "Explore the local facilities operated or supported by Hemsworth Town Council. Opening times and prices can be seasonal, subject to weather or affected by bookings; please check before travelling.",
    sections: [
      {
        title: "Hemsworth Water Park & Playworld",
        paragraphs: [
          "The Water Park has two lakes. The larger lake is used for pedalo rides and has sandy beaches; the smaller lake is a quieter area for wildlife. Fishing is available day and night, and there are grassed areas for picnics and games.",
          "Playworld is an outdoor adventure playground with a tower slide, climbing frames and a toddler sandpit area. It is inspected regularly and may close in wet weather or after rain when surfaces are slippery.",
          "BBQs, camping, paddling and swimming in the lakes are not permitted.",
        ],
        links: [{ label: "Water Park & Playworld details and prices", href: "/water-park" }],
      },
      {
        title: "Community venues",
        paragraphs: [
          "Hemsworth Community Centre offers rooms for hire, full disabled access and on-site parking. The council also lists the Fitzwilliam Centre and football facilities among its local amenities.",
        ],
        links: [
          { label: "Hemsworth Community Centre", href: "/community-centre" },
          { label: "Fitzwilliam Centre", href: "/fitzwilliam-centre" },
          { label: "Football facilities", href: "/football-facilities" },
        ],
      },
      {
        title: "Other local amenities",
        paragraphs: [
          "The Boathouse Café is situated at the Water Park. Allotment information and current local events are also available through the council.",
        ],
        links: [
          { label: "The Boathouse Café", href: "/boathouse-cafe" },
          { label: "Allotments", href: "/allotments" },
          { label: "News & events", href: "/news" },
        ],
      },
    ],
  },
  "services-local-amenities": {
    title: "Services & local amenities",
    eyebrow: "Community services",
    intro:
      "Hemsworth Town Council manages community facilities and offers services to residents of Hemsworth, Fitzwilliam and Kinsley.",
    sections: [
      {
        title: "Council facilities",
        paragraphs: [
          "The council’s local amenities include Hemsworth Community Centre, football facilities, Hemsworth Water Park and Playworld, the Boathouse Café, allotments and Fitzwilliam Centre.",
        ],
        links: [
          { label: "Browse facilities", href: "/facilities" },
          { label: "Community Centre", href: "/community-centre" },
          { label: "Water Park & Playworld", href: "/water-park" },
        ],
      },
      {
        title: "Free permits for local residents",
        paragraphs: [
          "Residents of Hemsworth, Kinsley and Fitzwilliam can obtain free car-parking permits for Hemsworth Water Park and free Playworld passes. Bring something showing your name and address to Hemsworth Community Centre to prove that you live within the parish.",
        ],
      },
      {
        title: "Grants and presentations",
        paragraphs: [
          "Eligible community organisations may apply to the council’s grant scheme. The council also makes celebratory presentations to residents at milestone birthdays.",
        ],
        links: [
          { label: "Grant form and eligibility", href: "/services#grants" },
          { label: "Contact the council", href: "/contact" },
        ],
      },
    ],
  },
  "community-centre": {
    title: "Hemsworth Community Centre",
    eyebrow: "Bullenshaw Road",
    intro:
      "Hemsworth Community Centre is run by Hemsworth Town Council. The centre has full disabled access, on-site parking and rooms available for business and private hire.",
    sections: [
      {
        title: "Opening hours",
        bullets: [
          "Monday to Thursday: 8:00am–4:00pm",
          "Friday: 8:00am–3:30pm",
          "Saturday: 8:00am–10:00am",
          "Opening hours may differ depending on bookings.",
        ],
      },
      {
        title: "Room hire",
        bullets: [
          "Large Function Room: £30 per hour",
          "Half Function Room: £20 per hour",
          "Activity Room: £20 per hour",
          "Town Council Chamber: £20 per hour",
          "Lower Office: £20 per hour",
          "Small Office: £20 per hour",
        ],
        paragraphs: [
          "All prices are subject to VAT. Discounts may apply to precept payers; please enquire by calling 01977 617617.",
          "The centre hosts council administration and community activities. Contact the office to enquire about room availability or to make a booking.",
        ],
      },
      {
        title: "Address & contact",
        paragraphs: [
          "Hemsworth Town Council Community Centre, Bullenshaw Road, Hemsworth, Pontefract, WF9 4NE.",
        ],
        links: [
          { label: "Call 01977 617617", href: "tel:+441977617617" },
          { label: "Email the council", href: "mailto:webenquiry@hemsworthcouncil.co.uk" },
          { label: "Contact and map", href: "/contact" },
        ],
      },
    ],
  },
  "water-park": {
    title: "Hemsworth Water Park & Playworld",
    eyebrow: "Outdoor activities",
    intro:
      "Hemsworth Water Park has two lakes, pedalo rides, fishing, picnic areas and an outdoor adventure playground for children.",
    sections: [
      {
        title: "Water Park",
        paragraphs: [
          "The larger lake is available for pedalo rides and has sandy beaches. The smaller lake is more secluded to attract wildlife. Both lakes are stocked for fishing, which is available during the day and at night.",
          "Grassed areas are available for picnics and games. BBQs, camping, paddling and swimming in the lakes are not permitted.",
        ],
      },
      {
        title: "Playworld",
        paragraphs: [
          "Playworld is an outdoor adventure playground with a tower slide, climbing frames and a toddler sandpit area. Entry is £3 per child.",
          "During term time, Playworld is listed as open at weekends from 10:00am to 5:00pm and closed Monday to Friday. During school holidays, it is listed as open daily from 10:00am to 5:00pm. These times are weather permitting and may change.",
        ],
      },
      {
        title: "Parking & pedaloes",
        bullets: [
          "All-day parking: £3 per vehicle.",
          "Parking charges apply on weekends and school holidays, 9:00am–5:00pm.",
          "Pedalo ride: £8.50 per boat; each boat seats four.",
          "Pedalo opening is weather permitting. Tickets are available at the pedalo pay point; cash and card are accepted.",
        ],
      },
      {
        title: "Fishing permits",
        bullets: [
          "Adult day permit: £4.50 per peg.",
          "Child day permit: £2.50 per peg.",
          "Adult annual permit: £20 for residents; £40 for non-residents.",
          "Child annual permit: £10 for residents; £20 for non-residents.",
          "A rod licence number is required when purchasing any permit.",
        ],
        links: [
          {
            label: "Day fishing rules",
            href: `${councilSite}/wp-content/uploads/2025/06/Day-fishing-rules.pdf`,
          },
          {
            label: "Night fishing rules",
            href: `${councilSite}/wp-content/uploads/2025/06/Night-fishing-rules.pdf`,
          },
        ],
      },
      {
        title: "Free permits for residents",
        paragraphs: [
          "Residents of Hemsworth, Fitzwilliam and Kinsley can obtain free Water Park parking and free Playworld entry. Bring proof of your name and address to Hemsworth Community Centre.",
          "Opening times are subject to weather. During changeable weather, ring 01977 617617 to confirm availability.",
        ],
        links: [{ label: "Community Centre location and hours", href: "/community-centre" }],
      },
      {
        title: "Directions",
        paragraphs: [
          "The Water Park is off the B6273. Coaches must enter via Hoyle Mill Road, opposite the Farmers public house in Kinsley. Cars and pedestrians can enter from Hoyle Mill Road or via the Hemsworth Park Care Centre entrance road from the B6273.",
          "Fitzwilliam railway station is approximately a 10-minute walk away, and a bus stop is directly outside the park. Sat nav address: Hoyle Mill Road, Kinsley, Pontefract, WF9 5JB.",
        ],
      },
    ],
  },
  "boathouse-cafe": {
    title: "The Boathouse Café",
    eyebrow: "At Hemsworth Water Park",
    intro:
      "The former Beach Shop has been transformed into the Boathouse Café, with indoor seating and an outdoor seating area overlooking the park, lake and wildlife.",
    sections: [
      {
        title: "Food & drink",
        paragraphs: [
          "The café serves tea, coffee, milkshakes, iced coffees and smoothies. The council describes its food as freshly cooked to order, with locally sourced and seasonal ingredients where possible.",
          "The minimum card spend is £2.50.",
        ],
        links: [
          {
            label: "Drinks menu",
            href: `${councilSite}/wp-content/uploads/2026/05/Cafe-Summer-Drinks-Menu-2026.jpg`,
          },
          {
            label: "Breakfast menu",
            href: `${councilSite}/wp-content/uploads/2026/05/Cafe-Summer-Breakfast-Menu-2026.jpg`,
          },
          {
            label: "Main menu",
            href: `${councilSite}/wp-content/uploads/2026/05/Cafe-Summer-Main-Menu-2026.jpg`,
          },
        ],
      },
      {
        title: "Opening hours",
        paragraphs: ["The council lists the café as open Monday to Sunday, 9:00am–5:30pm."],
        links: [{ label: "Water Park information", href: "/water-park" }],
      },
    ],
  },
  "football-facilities": {
    title: "Football facilities",
    eyebrow: "Sports & recreation",
    intro:
      "Hemsworth Town Council provides local football facilities, including pitches and changing facilities at Sandygate Lane.",
    sections: [
      {
        title: "Facilities",
        paragraphs: [
          "The council’s facilities information includes football pitches, changing rooms and the Street Snooker football area. Availability, bookings and current charges should be confirmed with the council office.",
        ],
        links: [
          { label: "Contact the council about facilities", href: "/contact" },
          { label: "Other council facilities", href: "/facilities" },
        ],
      },
    ],
  },
  allotments: {
    title: "Allotments",
    eyebrow: "Grow locally",
    intro:
      "Hemsworth Town Council provides allotment facilities for local residents. Contact the council office to ask about plot availability, waiting lists and current charges.",
    sections: [
      {
        title: "Enquiries",
        paragraphs: [
          "For current information about allotment plots and how to apply, contact Hemsworth Town Council by telephone or email.",
        ],
        links: [
          { label: "Call 01977 617617", href: "tel:+441977617617" },
          { label: "Email the council", href: "mailto:webenquiry@hemsworthcouncil.co.uk" },
          { label: "All council contact details", href: "/contact" },
        ],
      },
    ],
  },
  "fitzwilliam-centre": {
    title: "Fitzwilliam Centre",
    eyebrow: "Fitzwilliam",
    intro:
      "The Fitzwilliam Centre is one of the community facilities listed by Hemsworth Town Council for the township it serves.",
    sections: [
      {
        title: "Bookings & enquiries",
        paragraphs: [
          "Contact the Town Council for current opening information, activities, room availability and hire charges.",
        ],
        links: [
          { label: "Call 01977 617617", href: "tel:+441977617617" },
          { label: "Email the council", href: "mailto:webenquiry@hemsworthcouncil.co.uk" },
          { label: "Contact details", href: "/contact" },
        ],
      },
    ],
  },
  meetings: {
    title: "Meetings, agendas & minutes",
    eyebrow: "Council business",
    intro:
      "Find out about council meetings, read agendas and minutes, and access recordings published by Hemsworth Town Council.",
    sections: [
      {
        title: "Agendas & minutes",
        paragraphs: [
          "Draft minutes are usually published within 28 days of each council or committee meeting. The council or committee confirms or approves the draft minutes at its next meeting.",
          "Meeting papers and historic minutes are available in the council’s official archive. Some older records are hosted as downloadable files.",
        ],
        links: [
          {
            label: "Open the council’s agendas and minutes archive",
            href: `${councilSite}/agendas-minutes/`,
          },
          { label: "View the council meeting timetable", href: "/committee-timetable" },
        ],
      },
      {
        title: "Meeting timetable",
        paragraphs: [
          "The published 2026/27 timetable includes annual Town Council and Annual Town Meeting dates, Town Council meetings, and meetings of the Finance, Staffing, and Leisure and Recreation committees. Extraordinary meetings are scheduled when required.",
          "Dates may be changed or meetings cancelled. Check the latest notice and agenda before attending.",
        ],
        links: [{ label: "Meeting timetable", href: "/committee-timetable" }],
      },
      {
        title: "Meeting recordings",
        paragraphs: [
          "The council has published recordings of full council meetings held from February 2022 onward. Recording links and access information are available in the council’s meeting timetable and archive.",
        ],
        links: [
          {
            label: "Recordings and access information",
            href: `${councilSite}/committee-timetable/`,
          },
        ],
      },
    ],
  },
  "committee-timetable": {
    title: "Council meeting timetable",
    eyebrow: "2026/27",
    intro:
      "Hemsworth Town Council publishes an annual timetable for council and committee meetings. Dates can be amended; always check the latest agenda or public notice before attending.",
    sections: [
      {
        title: "Meetings in the timetable",
        bullets: [
          "Annual Town Meeting",
          "Annual Town Council",
          "Town Council",
          "Extraordinary Town Council",
          "Finance Committee",
          "Leisure and Recreation Committee",
          "Staffing Committee",
        ],
        paragraphs: [
          "The published timetable covers May 2026 to May 2027. The council has listed an extraordinary Town Council, Finance Committee and Staffing Committee meeting for 13 August 2026.",
        ],
        links: [
          {
            label: "View the council’s current timetable and meeting recordings",
            href: `${councilSite}/committee-timetable/`,
          },
          { label: "Agendas and minutes", href: "/meetings" },
        ],
      },
    ],
  },
  "committee-structure": {
    title: "Committee structure",
    eyebrow: "Council year 2026/27",
    intro:
      "The Town Council organises its work through the council and standing committees.",
    sections: [
      {
        title: "Committees",
        bullets: [
          "Town Council",
          "Leisure and Recreation Committee",
          "Finance Committee",
          "Staffing Committee",
        ],
        paragraphs: [
          "The council publishes its committee structure and terms of reference. For current committee membership, responsibilities or a copy of the terms of reference, contact the administration office.",
        ],
        links: [
          { label: "Councillor directory", href: "/councillors" },
          { label: "Meeting timetable", href: "/committee-timetable" },
          { label: "Contact the Clerk", href: "/contact" },
        ],
      },
    ],
  },
  finance: {
    title: "Finance & monthly expenditure",
    eyebrow: "Open council records",
    intro:
      "Hemsworth Town Council publishes finance information and monthly expenditure documents so residents can review council spending.",
    sections: [
      {
        title: "Budgets & expenditure",
        paragraphs: [
          "The council’s finance archive contains monthly expenditure and budget records. Documents are published by financial year and can be downloaded from the council archive.",
          "The parish precept is collected as part of council tax and contributes to the cost of local council services.",
        ],
        links: [
          { label: "Open the monthly expenditure archive", href: `${councilSite}/budgets/` },
          { label: "Agendas and minutes", href: "/meetings" },
        ],
      },
      {
        title: "Annual governance & accountability",
        paragraphs: [
          "Annual Governance and Accountability Return documents and public-rights notices are published in the council’s documents and reports archive.",
        ],
        links: [
          {
            label: "Council documents and reports",
            href: `${councilSite}/documents-reports/`,
          },
        ],
      },
    ],
  },
  documents: {
    title: "Documents & reports",
    eyebrow: "Council records",
    intro:
      "Access council meeting papers, finance documents, policies, statements and reports. The linked records below open in the council’s published archive.",
    sections: [
      {
        title: "Meeting papers",
        paragraphs: [
          "Agendas, draft minutes and historic council and committee records are published in the meeting archive. Draft minutes are usually published within 28 days of a meeting.",
        ],
        links: [
          { label: "Agendas & minutes", href: "/meetings" },
          {
            label: "Full agendas and minutes archive",
            href: `${councilSite}/agendas-minutes/`,
          },
        ],
      },
      {
        title: "Finance & governance",
        paragraphs: [
          "Monthly expenditure, budgets, annual governance and accountability documents, and public-rights notices are available through the council’s finance and document pages.",
        ],
        links: [
          { label: "Monthly expenditure & budgets", href: "/finance" },
          {
            label: "Documents and reports archive",
            href: `${councilSite}/documents-reports/`,
          },
        ],
      },
      {
        title: "Policies & statements",
        paragraphs: [
          "The council publishes policies, statements and accessibility information. Contact the Clerk if you need a document in another format; the council states that documents can be made available in audio format on request.",
        ],
        links: [
          { label: "Policies and statements", href: "/policies-statements" },
          { label: "Accessibility", href: "/accessibility" },
        ],
      },
    ],
  },
  news: {
    title: "News & public notices",
    eyebrow: "Latest from the council",
    intro:
      "Council notices, service updates and community events are listed here. Notices can change; follow each link for the original announcement and the latest details.",
    sections: [
      {
        title: "Thursday 12 November 2026",
        paragraphs: [
          "Hemsworth Community Centre will open at 9:30am. The council apologises for any inconvenience.",
        ],
        links: [
          {
            label: "View the council notice",
            href: `${councilSite}/thursday-12th-november-2026/`,
          },
        ],
      },
      {
        title: "Christmas Bingo & Brass Band Evening",
        paragraphs: [
          "Tickets for the 2026 Christmas event go on sale at Hemsworth Community Centre on 19 November.",
        ],
        links: [
          {
            label: "View the event notice",
            href: `${councilSite}/christmas-bingo-brass-band-evening-2026/`,
          },
        ],
      },
      {
        title: "Town Council recruitment",
        paragraphs: [
          "Recruitment notices for the Responsible Finance Officer and Town Clerk roles were published in September 2026. Check the council’s notice page for current status.",
        ],
        links: [
          { label: "Job vacancies", href: `${councilSite}/job-vacancies/` },
        ],
      },
      {
        title: "Other public notices",
        paragraphs: [
          "The council also publishes meeting changes, election notices, audit information and public notices. Older notices may no longer be current.",
        ],
        links: [
          {
            label: "All current news and notices",
            href: `${councilSite}/latest-news/`,
          },
          { label: "Meeting timetable", href: "/committee-timetable" },
        ],
      },
    ],
  },
  contact: {
    title: "Contact Hemsworth Town Council",
    eyebrow: "Administration office",
    intro:
      "Get in touch with Hemsworth Town Council about local services, community facilities, meetings and general enquiries.",
    sections: [
      {
        title: "Visit or write to us",
        paragraphs: [
          "Hemsworth Town Council Community Centre, Bullenshaw Road, Hemsworth, Pontefract, WF9 4NE.",
          "The administration office is open Monday to Thursday, 8:00am–4:00pm, and Friday, 8:00am–3:30pm. Opening hours can vary for public facilities and bookings.",
        ],
      },
      {
        title: "Telephone & email",
        links: [
          { label: "Call 01977 617617", href: "tel:+441977617617" },
          { label: "Email webenquiry@hemsworthcouncil.co.uk", href: "mailto:webenquiry@hemsworthcouncil.co.uk" },
          { label: "Email the Clerk", href: "mailto:clerk@hemsworthcouncil.co.uk" },
        ],
      },
      {
        title: "Which council should I contact?",
        paragraphs: [
          "For benefits, council tax, housing, roads, education, refuse collection, environmental health, anti-social behaviour and planning applications, contact Wakefield Council on 0345 850 6506 or customerservices@wakefield.gov.uk.",
        ],
        links: [
          { label: "Wakefield Council website", href: "https://www.wakefield.gov.uk" },
          { label: "More about council responsibilities", href: "/wakefield-council" },
        ],
      },
    ],
  },
  "wakefield-council": {
    title: "Hemsworth Town Council & Wakefield Council",
    eyebrow: "Which council handles my enquiry?",
    intro:
      "Hemsworth Town Council and Wakefield Council are separate authorities with different responsibilities. Contact the right team to get help more quickly.",
    sections: [
      {
        title: "Contact Wakefield Council for",
        bullets: [
          "Benefits and council tax",
          "Housing",
          "Roads",
          "Education",
          "Refuse collection",
          "Environmental health",
          "Anti-social behaviour",
          "Planning applications",
        ],
        paragraphs: [
          "Wakefield Council customer services: 0345 850 6506 · customerservices@wakefield.gov.uk.",
        ],
        links: [{ label: "Wakefield Council website", href: "https://www.wakefield.gov.uk" }],
      },
      {
        title: "Contact Hemsworth Town Council for",
        bullets: [
          "Hemsworth Town Council meetings and councillors",
          "Hemsworth Community Centre room hire",
          "Hemsworth Water Park and Playworld",
          "Local community services and amenities",
          "Council grants and local facility enquiries",
        ],
        links: [{ label: "Hemsworth Town Council contact details", href: "/contact" }],
      },
    ],
  },
  "policies-statements": {
    title: "Policies & statements",
    eyebrow: "Council governance",
    intro:
      "Hemsworth Town Council publishes policies and statements as part of its commitment to accountable local government.",
    sections: [
      {
        title: "Council documents",
        paragraphs: [
          "Use the council’s policy page and document archive for current versions. If you need a document in an alternative format, contact the council office; documents can be made available in audio format on request.",
        ],
        links: [
          {
            label: "Council policies and statements",
            href: `${councilSite}/policies-statements/`,
          },
          { label: "Documents and reports", href: "/documents" },
          { label: "Accessibility information", href: "/accessibility" },
        ],
      },
    ],
  },
  accessibility: {
    title: "Accessibility",
    eyebrow: "Access for everyone",
    intro:
      "The council states that it is committed to making its website accessible to all and is working toward WCAG 2.1 AA accessibility standards.",
    sections: [
      {
        title: "Accessible information",
        paragraphs: [
          "The council says documents can be provided in audio format on request. Users can also use their browser or device accessibility settings to adjust text size, colours and other display options.",
          "If you have difficulty accessing information or encounter an accessibility issue, contact the council with the page address and a description of the problem.",
        ],
        links: [
          { label: "Report an accessibility issue", href: "/accessibility-issue-form" },
          { label: "Contact the council", href: "/contact" },
        ],
      },
    ],
  },
  "accessibility-issue-form": {
    title: "Report an accessibility issue",
    eyebrow: "Website feedback",
    intro:
      "Tell Hemsworth Town Council about an accessibility issue on this website. Include the page address and explain what went wrong so the council can investigate.",
    sections: [
      {
        title: "Get in touch",
        paragraphs: [
          "The original council website asks residents to provide their name, email address, telephone number and details of the issue. This replacement site does not yet have a secure form-submission service, so email the council directly.",
        ],
        links: [
          {
            label: "Email webenquiry@hemsworthcouncil.co.uk",
            href: "mailto:webenquiry@hemsworthcouncil.co.uk?subject=Website%20accessibility%20issue",
          },
          { label: "Accessibility information", href: "/accessibility" },
        ],
      },
    ],
  },
  "latest-news": {
    title: "Latest news & public notices",
    eyebrow: "Council announcements",
    intro:
      "The latest notices, events and service updates published by Hemsworth Town Council.",
    sections: [],
  },
  "local-events": {
    title: "Local events & activities",
    eyebrow: "Community life",
    intro:
      "Find community events, regular groups and activities published by Hemsworth Town Council and local organisations.",
    sections: [
      {
        title: "Upcoming council events",
        paragraphs: [
          "The council has announced a Christmas Bingo and Brass Band Evening for 2026. Tickets go on sale at Hemsworth Community Centre on 19 November.",
          "The Town Council publishes event notices and seasonal opening updates as dates are confirmed. Check the latest news page for changes.",
        ],
        links: [{ label: "News & public notices", href: "/news" }],
      },
      {
        title: "Regular local activities",
        bullets: [
          "Andys Man Club meets Mondays at Hemsworth Community Centre from 7:00pm.",
          "Hemsworth School Uniform Recycle meets Fridays at Hemsworth Community Centre from 10:00am to 11:00am.",
        ],
      },
    ],
  },
  vacancies: {
    title: "Council vacancies",
    eyebrow: "Work with your local council",
    intro:
      "The council publishes job vacancies and notices about councillor vacancies or co-option when they arise.",
    sections: [
      {
        title: "Job vacancies",
        paragraphs: [
          "Recruitment notices for the Responsible Finance Officer and Town Clerk were published in September 2026. Check the council’s vacancy page to confirm whether applications are still open.",
        ],
        links: [
          {
            label: "Current job vacancies",
            href: `${councilSite}/job-vacancies/`,
          },
          {
            label: "Responsible Finance Officer role description",
            href: `${councilSite}/wp-content/uploads/2026/09/Advert-RFO-2026.docx`,
          },
          {
            label: "Town Clerk role description",
            href: `${councilSite}/wp-content/uploads/2026/09/Advert-Town-Clerk-2026.docx`,
          },
        ],
      },
      {
        title: "Councillor vacancies",
        paragraphs: [
          "When a councillor vacancy occurs, the council publishes a public notice and information about any co-option process. Contact the Clerk for current vacancies.",
        ],
        links: [{ label: "Contact the Clerk", href: "mailto:clerk@hemsworthcouncil.co.uk" }],
      },
    ],
  },
  "documents-reports": {
    title: "Documents & reports",
    eyebrow: "Council records",
    intro: "Browse Hemsworth Town Council’s published records and reports.",
    sections: [],
  },
  budgets: {
    title: "Finance & budgets",
    eyebrow: "Monthly expenditure",
    intro:
      "The council publishes budget and monthly expenditure records for residents to review.",
    sections: [],
  },
  "hemsworth-waterpark-playworld": {
    title: "Hemsworth Water Park & Playworld",
    eyebrow: "Outdoor activities",
    intro:
      "Information about the Water Park lakes, Playworld, fishing, pedaloes, parking, directions and resident permits.",
    sections: [],
  },
  "lakeside-cafe-bar": {
    title: "The Boathouse Café",
    eyebrow: "Food & drink",
    intro:
      "Visit the Boathouse Café at Hemsworth Water Park, with indoor and outdoor seating overlooking the lake and park.",
    sections: [],
  },
  "hemsworth-council-wakefield-council": {
    title: "Hemsworth Town Council & Wakefield Council",
    eyebrow: "Council responsibilities",
    intro:
      "Find out which council to contact about your enquiry.",
    sections: [],
  },
  "hemsworth-town-council-facebook": {
    title: "Hemsworth Town Council on Facebook",
    eyebrow: "Social media",
    intro:
      "The Town Council directs residents to its Facebook page for updates. Social media notices may not replace formal council agendas or public notices.",
    sections: [
      {
        title: "Follow council updates",
        links: [
          {
            label: "Open Hemsworth Town Council’s Facebook page",
            href: "https://www.facebook.com/profile.php?id=61595150529589",
          },
          { label: "Read council news on this website", href: "/news" },
        ],
      },
    ],
  },
  corrections: {
    title: "Corrections & clarifications",
    eyebrow: "Council information",
    intro:
      "The council uses its corrections page to clarify inaccurate or misleading statements about council business.",
    sections: [
      {
        title: "Published clarifications",
        paragraphs: [
          "The council has published clarifications about how it protects staff, its community-centre defibrillator, Water Park facilities, licences and expenditure. Read the council’s current page for the full wording and any updates.",
        ],
        links: [
          {
            label: "Read the council corrections page",
            href: `${councilSite}/corrections/`,
          },
        ],
      },
    ],
  },
  "wakefield-district-council-local-plan-2036": {
    title: "Wakefield District Local Plan 2036",
    eyebrow: "Planning information",
    intro:
      "The council’s Local Plan page links to the Wakefield District Local Plan 2036 examination library and post-hearings correspondence.",
    sections: [
      {
        title: "Local Plan examination",
        paragraphs: [
          "Following Local Plan hearings in November and December 2021, the Inspector issued a post-hearings letter to Wakefield Council. The examination library is maintained by Wakefield Council.",
        ],
        links: [
          {
            label: "Wakefield District Local Plan examination library",
            href: "https://www.wakefield.gov.uk/planning/local-plan-examination/wakefield-district-local-plan-2036-examination/examination-library",
          },
        ],
      },
    ],
  },
  "privacy-policy": {
    title: "Privacy policy",
    eyebrow: "Your information",
    intro:
      "This page is being prepared for the replacement council website. For the current privacy notice and information about how personal data is handled, contact Hemsworth Town Council.",
    sections: [
      {
        title: "Contact the council",
        paragraphs: [
          "Do not send sensitive personal information through this demonstration website. Contact the council office to request its current privacy notice.",
        ],
        links: [
          { label: "Email the council", href: "mailto:webenquiry@hemsworthcouncil.co.uk" },
          { label: "Contact details", href: "/contact" },
        ],
      },
    ],
  },
  newsletters: {
    title: "Council newsletters",
    eyebrow: "News from the township",
    intro:
      "Hemsworth Town Council publishes newsletters and community updates through its document archive.",
    sections: [
      {
        title: "Find newsletters",
        paragraphs: [
          "Browse the council’s documents and reports page for available newsletters and published editions.",
        ],
        links: [
          {
            label: "Council documents and reports",
            href: `${councilSite}/documents-reports/`,
          },
          { label: "Latest news", href: "/news" },
        ],
      },
    ],
  },
  gallery: {
    title: "Hemsworth gallery",
    eyebrow: "Local places",
    intro:
      "Explore photographs of the Water Park, Playworld, community facilities and allotments.",
    sections: [
      {
        title: "Explore our facilities",
        links: [
          { label: "Water Park & Playworld", href: "/water-park" },
          { label: "Community Centre", href: "/community-centre" },
          { label: "Boathouse Café", href: "/boathouse-cafe" },
        ],
      },
    ],
  },
  "thursday-12th-november-2026": {
    title: "Community Centre opening time",
    eyebrow: "Thursday 12 November 2026",
    intro:
      "Hemsworth Community Centre will open at 9:30am on Thursday 12 November 2026. The council apologises for any inconvenience.",
    sections: [
      {
        title: "More information",
        links: [
          { label: "Community Centre details", href: "/community-centre" },
          { label: "Contact the council", href: "/contact" },
        ],
      },
    ],
  },
  "christmas-bingo-brass-band-evening-2026": {
    title: "Christmas Bingo & Brass Band Evening",
    eyebrow: "2026 community event",
    intro:
      "Tickets go on sale on 19 November from Hemsworth Community Centre. The council looks forward to another Christmas event filled with joy and happiness.",
    sections: [
      {
        title: "Tickets & venue",
        paragraphs: [
          "Contact Hemsworth Community Centre for ticket availability and event details.",
        ],
        links: [
          { label: "Community Centre", href: "/community-centre" },
          { label: "Call the council office", href: "tel:+441977617617" },
        ],
      },
    ],
  },
  "job-vacancies": {
    title: "Town Council job vacancies",
    eyebrow: "Recruitment",
    intro:
      "Hemsworth Town Council published recruitment notices for the Responsible Finance Officer and Town Clerk positions in September 2026. Check with the council to confirm current status.",
    sections: [
      {
        title: "Role information",
        links: [
          {
            label: "Responsible Finance Officer notice",
            href: `${councilSite}/wp-content/uploads/2026/09/Advert-RFO-2026.docx`,
          },
          {
            label: "Town Clerk notice",
            href: `${councilSite}/wp-content/uploads/2026/09/Advert-Town-Clerk-2026.docx`,
          },
          { label: "Contact the Clerk", href: "mailto:clerk@hemsworthcouncil.co.uk" },
        ],
      },
    ],
  },
  "queen-elizabeth-ii": {
    title: "Queen Elizabeth II",
    eyebrow: "Council archive",
    intro:
      "This archived council notice commemorates the life of Queen Elizabeth II, 21 April 1926–8 September 2022.",
    sections: [
      {
        title: "Archived information",
        paragraphs: [
          "This historic notice is retained for reference and does not describe current council opening or meeting arrangements.",
        ],
      },
    ],
  },
};

const pageAliases: Record<string, string> = {
  "services-local-amenities": "services",
  "latest-news": "news",
  "documents-reports": "documents",
  "agendas-minutes": "meetings",
  "contact-us": "contact",
  budgets: "finance",
  "hemsworth-waterpark-playworld": "water-park",
  "lakeside-cafe-bar": "boathouse-cafe",
  "hemsworth-council-wakefield-council": "wakefield-council",
  queen: "queen-elizabeth-ii",
};

const preRenderedSlugs = [
  "about",
  "council",
  "councillors",
  "services",
  "meetings",
  "news",
  "documents",
  "contact",
];

const resolvePage = (slug: string) => pages[pageAliases[slug] ?? slug];

export function generateStaticParams() {
  return preRenderedSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = resolvePage(slug);
  if (!page) return {};

  return {
    title: `${page.title} | Hemsworth Town Council`,
    description: page.intro,
  };
}

export default async function CouncilInformationPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page = resolvePage(slug);
  if (!page) notFound();

  return (
    <>
      <div className="announcement">
        <span className="announcement-dot" aria-hidden="true" />
        <span>Hemsworth · Fitzwilliam · Kinsley</span>
      </div>
      <header className="information-header">
        <Link className="information-brand" href="/" aria-label="Hemsworth Town Council home">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 44 44" fill="none">
              <path d="M22 3 39 13v18L22 41 5 31V13L22 3Z" stroke="currentColor" strokeWidth="1.5" />
              <path d="m13 29 9-16 9 16M17 23h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="brand-copy"><strong>HEMSWORTH</strong><small>TOWN COUNCIL</small></span>
        </Link>
        <nav className="information-nav" aria-label="Main navigation">
          <Link href="/about">About</Link>
          <Link href="/council">Your council</Link>
          <Link href="/services">Services</Link>
          <Link href="/meetings">Meetings</Link>
          <Link href="/news">News</Link>
          <Link href="/documents">Documents</Link>
          <Link className="information-nav-cta" href="/contact">Contact us</Link>
        </nav>
      </header>
      <main className="information-page">
        <div className="information-hero">
          <p className="eyebrow"><span className="eyebrow-line dark" /> {page.eyebrow}</p>
          <h1>{page.title}</h1>
          <p>{page.intro}</p>
        </div>
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link><span aria-hidden="true">/</span><span>{page.title}</span>
        </nav>
        <div className="information-content">
          {page.sections.map((section) => (
            <section className="information-section" key={section.title} id={section.title.toLowerCase().replaceAll(/[^a-z0-9]+/g, "-")}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {section.bullets && (
                <ul>
                  {section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              )}
              {section.links && (
                <div className="information-links">
                  {section.links.map((link) => {
                    const external = /^https?:|^mailto:|^tel:/i.test(link.href);
                    return external ? (
                      <a key={link.label} href={link.href} target={link.href.startsWith("http") ? "_blank" : undefined} rel={link.href.startsWith("http") ? "noreferrer" : undefined}>
                        {link.label}<span aria-hidden="true">↗</span>
                      </a>
                    ) : (
                      <Link key={link.label} href={link.href}>
                        {link.label}<span aria-hidden="true">↗</span>
                      </Link>
                    );
                  })}
                </div>
              )}
            </section>
          ))}
          <aside className="information-source">
            <strong>Need more information?</strong>
            <p>Call Hemsworth Town Council on <a href="tel:+441977617617">01977 617617</a> or email <a href="mailto:webenquiry@hemsworthcouncil.co.uk">webenquiry@hemsworthcouncil.co.uk</a>.</p>
            <Link href="/contact">Contact the council <span aria-hidden="true">↗</span></Link>
          </aside>
        </div>
      </main>
      <footer className="information-footer">
        <div>
          <Link href="/" className="information-footer-brand">Hemsworth Town Council</Link>
          <span>Serving Hemsworth, Fitzwilliam and Kinsley</span>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/services">Services</Link>
          <Link href="/meetings">Meetings</Link>
          <Link href="/documents">Documents</Link>
          <Link href="/contact">Contact</Link>
        </nav>
      </footer>
    </>
  );
}
