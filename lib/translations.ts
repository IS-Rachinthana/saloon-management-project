export const languages = [
  { code: "en", label: "English" },
  { code: "si", label: "සිංහල" },
  { code: "ta", label: "தமிழ்" }
] as const;

export type LanguageCode = (typeof languages)[number]["code"];

type TranslationShape = {
  siteHeader: {
    brandTag: string;
    nav: {
      services: string;
      branches: string;
      offers: string;
      management: string;
      contact: string;
    };
    openPlatform: string;
    languageLabel: string;
  };
  hero: {
    eyebrow: string;
    title: string;
    highlight: string;
    description: string;
    primaryCta: string;
    secondaryCta: string;
    stats: { value: string; label: string }[];
    imageEyebrow: string;
    imageCaption: string;
    imageAlt: string;
  };
  services: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; description: string }[];
  };
  showcase: {
    eyebrow: string;
    title: string;
    description: string;
    metrics: { label: string; value: string }[];
  };
  offers: {
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
  };
  platform: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; copy: string }[];
  };
  branches: {
    eyebrow: string;
    title: string;
    description: string;
    items: { name: string; hours: string; focus: string }[];
  };
  dashboardPreview: {
    eyebrow: string;
    title: string;
    description: string;
    cards: { title: string; metric: string; detail: string }[];
  };
  team: {
    eyebrow: string;
    title: string;
    description: string;
    members: { name: string; role: string; specialty: string }[];
  };
  lookbook: {
    eyebrow: string;
    title: string;
    description: string;
    items: { title: string; detail: string }[];
  };
  booking: {
    eyebrow: string;
    title: string;
    description: string;
    branchLabel: string;
    dateLabel: string;
    serviceLabel: string;
    timeLabel: string;
    availabilityTitle: string;
    availableNow: string;
    alreadyBooked: string;
    chooseStylist: string;
    callNow: string;
    packageNote: string;
    priceLabel: string;
    durationLabel: string;
    breakLabel: string;
    timeWindowLabel: string;
    visibleDescription: string;
    bookedByLabel: string;
    noOneFree: string;
    backendReady: string;
    subCategoryTitle: string;
    submitLabel: string;
    submitSuccess: string;
    selectedItemsLabel: string;
  };
  signatureExperience: {
    eyebrow: string;
    title: string;
    description: string;
    steps: { title: string; detail: string }[];
  };
  testimonials: {
    eyebrow: string;
    title: string;
    description: string;
    items: { quote: string; name: string; role: string }[];
  };
  bookingCta: {
    eyebrow: string;
    title: string;
    description: string;
    primary: string;
    secondary: string;
    notes: string[];
  };
  contact: {
    eyebrow: string;
    title: string;
    description: string;
    brand: string;
    build: string;
    phase: string;
    platformCta: string;
    whatsappCta: string;
  };
};

export const translations: Record<LanguageCode, TranslationShape> = {
  en: {
    siteHeader: {
      brandTag: "Salon Brand",
      nav: {
        services: "Services",
        branches: "Branches",
        offers: "Offers",
        management: "Management",
        contact: "Contact"
      },
      openPlatform: "Open Platform",
      languageLabel: "Language"
    },
    hero: {
      eyebrow: "Premium salon website + management platform",
      title: "A bold digital home for",
      highlight: "Saloon Hair Warna",
      description:
        "Launch a premium, mobile-responsive landing page and a salon management system in one full-stack Next.js product. The experience is built for bookings, branches, staff, leave, CRM, offers, and analytics from day one.",
      primaryCta: "Book a consultation",
      secondaryCta: "Explore the salon platform",
      stats: [
        { value: "3", label: "Branch-ready operations" },
        { value: "24/7", label: "Online booking access" },
        { value: "5 roles", label: "Staff permission layers" }
      ],
      imageEyebrow: "Luxury brand launch",
      imageCaption: "Elegant customer journeys from the first scroll to the final appointment.",
      imageAlt: "Premium salon interior"
    },
    services: {
      eyebrow: "Signature services",
      title: "A brand story customers can feel before they even visit.",
      description:
        "The landing page is designed to position Saloon Hair Warna as a premium salon while making booking and branch discovery effortless on phones, tablets, and desktops.",
      items: [
        {
          title: "Signature Coloring",
          description: "Custom color journeys, gloss treatments, and finish rituals tailored for premium salon visits."
        },
        {
          title: "Precision Haircuts",
          description: "Modern cuts for women, men, and teens with consultation-led styling and aftercare guidance."
        },
        {
          title: "Bridal & Event Styling",
          description: "Luxury styling sessions designed for weddings, parties, shoots, and milestone celebrations."
        },
        {
          title: "Hair Spa & Recovery",
          description: "Scalp rituals, nourishing masks, and restorative care programs for healthy long-term results."
        }
      ]
    },
    showcase: {
      eyebrow: "Luxury atmosphere",
      title: "Crafted for a warm, elegant, confidence-building salon brand.",
      description:
        "The visual direction combines earthy gold, soft neutrals, editorial typography, and layered surfaces so the site feels premium without becoming cold or generic.",
      metrics: [
        { label: "Customer comfort", value: "Private consultations" },
        { label: "Style direction", value: "Modern editorial finish" },
        { label: "Service pace", value: "Calm appointment flow" }
      ]
    },
    offers: {
      eyebrow: "Offer engine",
      title: "Promotions, banners, and repeat-visit campaigns built in.",
      description:
        "The system design supports homepage hero offers, monthly campaigns, birthdays, product pushes, and targeted CRM segments.",
      items: [
        "Color + Treatment bundles with limited-time seasonal pricing",
        "Birthday beauty benefits for CRM-driven repeat visits",
        "Branch-led promotions and social-ready landing page highlights"
      ]
    },
    platform: {
      eyebrow: "Salon management system",
      title: "One app for bookings, teams, branches, clients, and growth.",
      description:
        "The platform is shaped as a single Next.js application so phase 1 stays fast to build while keeping the data model strong enough for multi-branch operations.",
      items: [
        {
          title: "Operations Dashboard",
          copy: "Track appointments, walk-ins, approvals, and front-desk actions from one responsive control center."
        },
        {
          title: "Smart Scheduling",
          copy: "Prevent overlaps, respect leave and business hours, and support branch-aware stylist availability."
        },
        {
          title: "Client CRM",
          copy: "Store profiles, photos, style references, birthday data, preferences, and visit history."
        },
        {
          title: "Multi-Branch Control",
          copy: "Manage services, staff, pricing, and performance across every salon branch without duplicate systems."
        },
        {
          title: "Notification Engine",
          copy: "Prepare for in-app, email, and WhatsApp reminders for bookings, offers, birthdays, and campaigns."
        },
        {
          title: "Feedback & Offers",
          copy: "Collect bilingual feedback, promote products, and rotate branded banners across the customer journey."
        }
      ]
    },
    branches: {
      eyebrow: "Branch-ready",
      title: "Prepare for multi-branch growth without rebuilding the system.",
      description:
        "Branch-specific pricing, staff assignment, and business hours are modeled from the beginning, so the app can grow from a single studio to a network.",
      items: [
        {
          name: "Colombo Signature Studio",
          hours: "Mon - Sun | 9.00 AM - 8.00 PM",
          focus: "Luxury coloring, premium consultations, and bridal finishing."
        },
        {
          name: "Kandy Style Lounge",
          hours: "Mon - Sat | 10.00 AM - 7.00 PM",
          focus: "Family cuts, modern styling, and spa recovery sessions."
        },
        {
          name: "Negombo Coastal Bar",
          hours: "Tue - Sun | 9.30 AM - 7.30 PM",
          focus: "Express services, seasonal offers, and product showcases."
        }
      ]
    },
    dashboardPreview: {
      eyebrow: "App preview",
      title: "Responsive dashboard surfaces for every salon role.",
      description:
        "Receptionists, managers, hairdressers, clients, and super admins each get a focused view with role-based access control.",
      cards: [
        {
          title: "Reception View",
          metric: "18 bookings",
          detail: "Day board with walk-ins, approvals, chair allocation, and live queue handling."
        },
        {
          title: "Manager Snapshot",
          metric: "92% utilization",
          detail: "Branch staffing, leave approvals, top services, and peak hours in one place."
        },
        {
          title: "Customer Portal",
          metric: "10 photo slots",
          detail: "Profile images, haircut references, reminder preferences, and booking self-service."
        }
      ]
    },
    team: {
      eyebrow: "Meet the artists",
      title: "A salon brand becomes memorable when the people behind it feel visible.",
      description:
        "This section can later connect to real employee data, but it already gives the landing page a more human and premium editorial feeling.",
      members: [
        { name: "Naduni", role: "Color Director", specialty: "Dimensional color, gloss finishes, and luxury correction work." },
        { name: "Kasun", role: "Style Specialist", specialty: "Precision cuts, men’s grooming, and polished event styling." },
        { name: "Aaradhya", role: "Bridal Artist", specialty: "Bridal styling, textured finishes, and camera-ready hair design." }
      ]
    },
    lookbook: {
      eyebrow: "Hair lookbook",
      title: "Show the salon’s visual taste, not only the service list.",
      description:
        "A premium brand site feels stronger when customers can imagine the finished look. This layout sets up a future gallery for real client photos.",
      items: [
        { title: "Soft dimensional blondes", detail: "Clean lift, soft blending, and glossy movement for modern luxury looks." },
        { title: "Editorial brunette finish", detail: "Rich depth, reflective tone, and sharp shape for elevated everyday elegance." },
        { title: "Bridal texture and shine", detail: "Pinned softness, controlled volume, and camera-ready finishing detail." }
      ]
    },
    booking: {
      eyebrow: "Booking planner",
      title: "Client booking with branch, date, time, service, and hairdresser visibility.",
      description:
        "Built from your item list so clients can see service descriptions, price, duration, break time, available hairdressers, and already-booked slots before choosing.",
      branchLabel: "Select branch",
      dateLabel: "Select date",
      serviceLabel: "Select service",
      timeLabel: "Select time slot",
      availabilityTitle: "Hairdresser availability for this slot",
      availableNow: "Available hairdressers",
      alreadyBooked: "Already booked at this time",
      chooseStylist: "Select this hairdresser",
      callNow: "Call now booking required",
      packageNote: "Automatic package scheduling note",
      priceLabel: "Price",
      durationLabel: "Duration",
      breakLabel: "Break time",
      timeWindowLabel: "Service hours",
      visibleDescription: "Description visible to client",
      bookedByLabel: "Booked by",
      noOneFree: "No hairdresser is free in this slot. The client can still see who is already booked.",
      backendReady: "This frontend is structured so real booking data can replace the sample data after backend integration.",
      subCategoryTitle: "Sub category selection",
      submitLabel: "Submit booking to salon",
      submitSuccess: "Booking request prepared for salon submission.",
      selectedItemsLabel: "Selected sub items"
    },
    signatureExperience: {
      eyebrow: "Signature experience",
      title: "A customer journey designed to feel personal from the first click to the final mirror reveal.",
      description:
        "The landing page now tells a fuller story of how the salon experience feels, not only what the business system can do behind the scenes.",
      steps: [
        { title: "Consult", detail: "Start with branch discovery, service browsing, and a clear booking invitation." },
        { title: "Transform", detail: "Highlight premium coloring, cuts, care rituals, and event-ready styling." },
        { title: "Return", detail: "Bring customers back through offers, reminders, birthday campaigns, and CRM-driven follow-up." }
      ]
    },
    testimonials: {
      eyebrow: "Customer love",
      title: "A more human, trust-building brand presentation.",
      description:
        "Social proof helps the salon feel established, premium, and warm. These story cards can later be connected to real testimonials or reviews.",
      items: [
        {
          quote: "The booking flow felt smooth, the consultation was personal, and the result looked exactly like what I hoped for.",
          name: "Nethmi",
          role: "Color client"
        },
        {
          quote: "It feels like a luxury salon, but the digital experience is also simple and fast. That balance is rare.",
          name: "Shehan",
          role: "Style and grooming client"
        },
        {
          quote: "From reminders to service recommendations, everything feels thoughtful and beautifully branded.",
          name: "Aarathi",
          role: "Bridal styling client"
        }
      ]
    },
    bookingCta: {
      eyebrow: "Ready to book",
      title: "Turn admiration into action with a clearer, stronger booking moment.",
      description:
        "This section gives customers a direct next step while reinforcing branch selection, personalized consultations, and mobile-friendly booking.",
      primary: "Start booking now",
      secondary: "View salon platform",
      notes: ["Choose your branch", "Select your stylist or any available expert", "Book from mobile in minutes"]
    },
    contact: {
      eyebrow: "Ready to launch",
      title: "Your next step can be a branded launch, not another draft.",
      description:
        "This foundation is ready for Supabase Auth, PostgreSQL, Prisma migrations, and your booking engine. It already separates the customer-facing landing page from the internal salon system experience.",
      brand: "Brand: Saloon Hair Warna",
      build: "Primary build: Next.js + TypeScript + Tailwind + Prisma + PostgreSQL",
      phase: "Phase 1 focus: landing page, booking flow, role-based dashboard, branch-ready data model",
      platformCta: "Open the management shell",
      whatsappCta: "WhatsApp consultation"
    }
  },
  si: {
    siteHeader: {
      brandTag: "සැලෝන් වෙළඳ නාමය",
      nav: {
        services: "සේවාවන්",
        branches: "ශාඛා",
        offers: "දීමනා",
        management: "කළමනාකරණය",
        contact: "සම්බන්ධ වන්න"
      },
      openPlatform: "පද්ධතිය විවෘත කරන්න",
      languageLabel: "භාෂාව"
    },
    hero: {
      eyebrow: "ප්‍රිමියම් සැලෝන් වෙබ් අඩවිය + කළමනාකරණ පද්ධතිය",
      title: "සදහා ශක්තිමත් ඩිජිටල් නිවහනක්",
      highlight: "Saloon Hair Warna",
      description:
        "ප්‍රිමියම්, ජංගම හිතකාමී landing page එකක් සහ salon management system එකක් එකම full-stack Next.js solution එකක් ලෙස ආරම්භ කරන්න. මෙය booking, branches, staff, leave, CRM, offers සහ analytics සඳහා මුල් දිනෙන්ම සූදානම්ය.",
      primaryCta: "උපදේශන වෙන්කරන්න",
      secondaryCta: "සැලෝන් පද්ධතිය බලන්න",
      stats: [
        { value: "3", label: "ශාඛා සඳහා සූදානම් මෙහෙයුම්" },
        { value: "24/7", label: "ඔන්ලයින් බුකින් ප්‍රවේශය" },
        { value: "භූමිකා 5", label: "කාර්ය මණ්ඩල අවසර ස්තර" }
      ],
      imageEyebrow: "ලක්සුරි වෙළඳ නාම ආරම්භය",
      imageCaption: "පළමු scroll එකේ සිට අවසන් appointment එක දක්වාම අලංකාර පාරිභෝගික අත්දැකීමක්.",
      imageAlt: "ප්‍රිමියම් සැලෝන් අභ්‍යන්තරය"
    },
    services: {
      eyebrow: "විශේෂ සේවාවන්",
      title: "ගනුදෙනුකරුවන් පැමිණීමට පෙරම දැනෙන වෙළඳ නාම කතාවක්.",
      description:
        "මෙම landing page එක Saloon Hair Warna ප්‍රිමියම් සැලෝන් එකක් ලෙස ඉදිරිපත් කරන අතර mobile, tablet සහ desktop වලින් booking සහ branch discovery ඉතා පහසු කරයි.",
      items: [
        {
          title: "Signature Coloring",
          description: "ප්‍රිමියම් සැලෝන් අත්දැකීම් සඳහා අභිරුචි වර්ණ ගමන් මාර්ග, gloss treatments සහ finish rituals."
        },
        {
          title: "Precision Haircuts",
          description: "කාන්තාවන්, පිරිමි සහ යෞවනයන් සඳහා modern cuts සහ personalized styling guidance."
        },
        {
          title: "Bridal & Event Styling",
          description: "විවාහ, සාද, shoot සහ විශේෂ අවස්ථා සඳහා ලක්සුරි styling sessions."
        },
        {
          title: "Hair Spa & Recovery",
          description: "සෞඛ්‍ය සම්පන්න දිගුකාලීන ප්‍රතිඵල සඳහා scalp rituals සහ restorative care programs."
        }
      ]
    },
    showcase: {
      eyebrow: "ලක්සුරි පරිසරය",
      title: "උණුසුම්, අලංකාර සහ විශ්වාසය ගොඩනගන සැලෝන් වෙළඳ නාමයක් සඳහා සකස් කළ දෘශ්‍යමය ආකෘතියක්.",
      description:
        "මෙම visual direction එක earthy gold, soft neutrals, editorial typography සහ layered surfaces එකට මිශ්‍ර කර premium හැඟීමක් ලබා දෙයි.",
      metrics: [
        { label: "Customer comfort", value: "පුද්ගලික උපදේශන" },
        { label: "Style direction", value: "Modern editorial finish" },
        { label: "Service pace", value: "සන්සුන් appointment flow" }
      ]
    },
    offers: {
      eyebrow: "දීමනා එන්ජිම",
      title: "ප්‍රවර්ධන, banners සහ නැවත පැමිණීමේ campaigns එකම පද්ධතියකින්.",
      description:
        "මෙම පද්ධතිය homepage hero offers, මාසික campaigns, උපන්දිනයේ දීමනා, products promotions සහ CRM segments සඳහා සූදානම්.",
      items: [
        "සීමිත කාලීන seasonal pricing සමඟ color + treatment bundles",
        "CRM මගින් repeat visits සඳහා birthday beauty benefits",
        "ශාඛා මට්ටමේ promotions සහ branded landing page highlights"
      ]
    },
    platform: {
      eyebrow: "සැලෝන් කළමනාකරණ පද්ධතිය",
      title: "Bookings, teams, branches, clients සහ growth සඳහා එකම app එකක්.",
      description:
        "Phase 1 ඉක්මනින් launch කිරීමට සහ future multi-branch operations සදහා ශක්තිමත් data model එකක් තබා ගැනීමට මෙම platform එක single Next.js application එකක් ලෙස ගොඩනගා ඇත.",
      items: [
        {
          title: "Operations Dashboard",
          copy: "Appointments, walk-ins, approvals සහ front-desk actions එකම responsive control center එකකින් අධීක්ෂණය කරන්න."
        },
        {
          title: "Smart Scheduling",
          copy: "Overlaps වලක්වමින් leave, business hours සහ branch-aware stylist availability සැලකිල්ලට ගන්න."
        },
        {
          title: "Client CRM",
          copy: "Profiles, photos, style references, birthdays, preferences සහ visit history එකම තැනක තබාගන්න."
        },
        {
          title: "Multi-Branch Control",
          copy: "අමතර systems නැතිවම සියලු branches සඳහා services, staff, pricing සහ performance කළමනාකරණය කරන්න."
        },
        {
          title: "Notification Engine",
          copy: "Bookings, offers, birthdays සහ campaigns සඳහා in-app, email සහ WhatsApp reminders සූදානම් කරන්න."
        },
        {
          title: "Feedback & Offers",
          copy: "Bilingual feedback එකතු කරමින් products ප්‍රවර්ධනය කරන්න සහ customer journey එක පුරා branded banners පෙන්වන්න."
        }
      ]
    },
    branches: {
      eyebrow: "ශාඛා සඳහා සූදානම්",
      title: "පද්ධතිය නැවත ගොඩනැගීමකින් තොරව multi-branch growth සඳහා සූදානම් වන්න.",
      description:
        "Branch-specific pricing, staff assignment සහ business hours මුල සිටම model කර ඇති නිසා single studio එකකින් network එකකට වර්ධනය විය හැක.",
      items: [
        {
          name: "කොළඹ Signature Studio",
          hours: "සඳුදා - ඉරිදා | 9.00 AM - 8.00 PM",
          focus: "Luxury coloring, premium consultations සහ bridal finishing."
        },
        {
          name: "නුවර Style Lounge",
          hours: "සඳුදා - සෙනසුරාදා | 10.00 AM - 7.00 PM",
          focus: "Family cuts, modern styling සහ spa recovery sessions."
        },
        {
          name: "මීගමුව Coastal Bar",
          hours: "අඟහරුවාදා - ඉරිදා | 9.30 AM - 7.30 PM",
          focus: "Express services, seasonal offers සහ product showcases."
        }
      ]
    },
    dashboardPreview: {
      eyebrow: "App preview",
      title: "සෑම salon role එකක් සඳහාම responsive dashboard surfaces.",
      description:
        "Receptionists, managers, hairdressers, clients සහ super admins සඳහා focused views සහ role-based access control සපයයි.",
      cards: [
        {
          title: "Reception View",
          metric: "බුකින් 18",
          detail: "Walk-ins, approvals, chair allocation සහ live queue handling සඳහා day board එක."
        },
        {
          title: "Manager Snapshot",
          metric: "92% utilization",
          detail: "Branch staffing, leave approvals, top services සහ peak hours එකම තැනක."
        },
        {
          title: "Customer Portal",
          metric: "ඡායාරූප 10",
          detail: "Profile images, haircut references, reminder preferences සහ self-service booking."
        }
      ]
    },
    team: {
      eyebrow: "කලාකරුවන් හමුවන්න",
      title: "සැලෝන් වෙළඳ නාමයක් මතකයේ රැඳෙන්නේ එය පිටුපස සිටින පුද්ගලයින් පෙනී සිටින විටය.",
      description:
        "මෙම කොටස පසුව real employee data සමඟ සම්බන්ධ කළ හැකි අතර, දැනටමත් landing page එකට more human සහ premium editorial feel එකක් ලබා දෙයි.",
      members: [
        { name: "නදුනි", role: "Color Director", specialty: "Dimensional color, gloss finishes සහ luxury correction work." },
        { name: "කසුන්", role: "Style Specialist", specialty: "Precision cuts, men’s grooming සහ polished event styling." },
        { name: "ආරාධ්‍යා", role: "Bridal Artist", specialty: "Bridal styling, textured finishes සහ camera-ready hair design." }
      ]
    },
    lookbook: {
      eyebrow: "Hair lookbook",
      title: "සේවාවන් ලැයිස්තුව පමණක් නොව salon එකේ visual taste එකත් පෙන්වන්න.",
      description:
        "Customers ට finished look එක සිතගැනීමට ඉඩ දෙන විට premium brand site එක තවත් ශක්තිමත් වෙයි. මෙය future real client gallery එකකට මූලික layout එකක් සකස් කරයි.",
      items: [
        { title: "Soft dimensional blondes", detail: "Modern luxury looks සඳහා clean lift, soft blending සහ glossy movement." },
        { title: "Editorial brunette finish", detail: "Elevated everyday elegance සඳහා rich depth, reflective tone සහ sharp shape." },
        { title: "Bridal texture and shine", detail: "Pinned softness, controlled volume සහ camera-ready finishing detail." }
      ]
    },
    booking: {
      eyebrow: "Booking planner",
      title: "ශාඛාව, දිනය, වෙලාව, සේවාව සහ hairdresser visibility සමඟ client booking.",
      description:
        "ඔබගේ item list එක අනුව clients ට service descriptions, price, duration, break time, available hairdressers සහ already-booked slots තෝරාගැනීමට පෙර දැකගත හැක.",
      branchLabel: "ශාඛාව තෝරන්න",
      dateLabel: "දිනය තෝරන්න",
      serviceLabel: "සේවාව තෝරන්න",
      timeLabel: "වෙලා slot එක තෝරන්න",
      availabilityTitle: "මෙම slot එක සඳහා hairdresser availability",
      availableNow: "Available hairdressers",
      alreadyBooked: "මෙම වෙලාවේ දැනටමත් booked",
      chooseStylist: "මෙම hairdresser තෝරන්න",
      callNow: "Call now booking අවශ්‍යයි",
      packageNote: "Automatic package scheduling note",
      priceLabel: "මිල",
      durationLabel: "කාලය",
      breakLabel: "Break time",
      timeWindowLabel: "සේවා වේලාව",
      visibleDescription: "Client ට පෙන්වන description",
      bookedByLabel: "Booked by",
      noOneFree: "මෙම slot එකේ free hairdresser කෙනෙක් නැත. ඒත් client ට already booked අය දැකගත හැක.",
      backendReady: "Backend integration පසු මෙම sample data වෙනුවට real booking data යෙදිය හැකි ලෙස frontend එක සකසා ඇත.",
      subCategoryTitle: "Sub category selection",
      submitLabel: "Booking එක salon වෙත submit කරන්න",
      submitSuccess: "Salon submission සඳහා booking request එක සූදානම් කර ඇත.",
      selectedItemsLabel: "තෝරාගත් sub items"
    },
    signatureExperience: {
      eyebrow: "විශේෂ අත්දැකීම",
      title: "පළමු click එකේ සිට අවසන් mirror reveal එක දක්වාම පුද්ගලික බවක් දැනෙන customer journey එකක්.",
      description:
        "Landing page එක දැන් business system එක පමණක් නොව salon experience එකේ හැඟීමද ඉදිරිපත් කරයි.",
      steps: [
        { title: "Consult", detail: "Branch discovery, service browsing සහ පැහැදිලි booking invitation එකකින් ආරම්භ කරන්න." },
        { title: "Transform", detail: "Premium coloring, cuts, care rituals සහ event-ready styling මතුකර පෙන්වන්න." },
        { title: "Return", detail: "Offers, reminders, birthday campaigns සහ CRM follow-up හරහා නැවත පැමිණීම වැඩි කරන්න." }
      ]
    },
    testimonials: {
      eyebrow: "පාරිභෝගික ආදරය",
      title: "මනුෂ්‍යමය සහ විශ්වාසය ගොඩනගන වෙළඳ නාම ඉදිරිපත් කිරීමක්.",
      description:
        "Social proof නිසා salon එක established, premium සහ උණුසුම් ලෙස දැනේ. පසුකාලීනව මෙය real testimonials සමඟ සම්බන්ධ කළ හැක.",
      items: [
        {
          quote: "Booking process එක smooth වුණා, consultation එක personal වුණා, final result එක මට අවශ්‍ය වූ දේටම ගැළපුණා.",
          name: "නෙත්මි",
          role: "Color client"
        },
        {
          quote: "Luxury salon එකක් වගේම digital experience එකත් simple සහ fast. ඒ balance එක ඇත්තටම විශේෂයි.",
          name: "ශෙහාන්",
          role: "Style and grooming client"
        },
        {
          quote: "Reminders වලින් service suggestions දක්වා හැම දෙයක්ම thoughtful සහ beautifully branded feel එකක් දෙයි.",
          name: "ආරාති",
          role: "Bridal styling client"
        }
      ]
    },
    bookingCta: {
      eyebrow: "දැන් වෙන්කරන්න",
      title: "පාරිභෝගික ආකර්ෂණය පැහැදිලි සහ ශක්තිමත් booking moment එකක් බවට පත් කරන්න.",
      description:
        "මෙම කොටස branch selection, personalized consultations සහ mobile-friendly booking ශක්තිමත් කරමින් direct next step එක ලබා දෙයි.",
      primary: "දැන් booking ආරම්භ කරන්න",
      secondary: "Salon platform බලන්න",
      notes: ["ඔබගේ branch එක තෝරන්න", "ඔබ කැමති stylist හෝ any available expert තෝරන්න", "මිනිත්තු කිහිපයකින් mobile එකෙන් booking කරන්න"]
    },
    contact: {
      eyebrow: "Launch කිරීමට සූදානම්",
      title: "ඔබේ ඊළඟ පියවර තවත් draft එකක් නොව branded launch එකක් විය හැක.",
      description:
        "මෙම foundation එක Supabase Auth, PostgreSQL, Prisma migrations සහ booking engine එක සඳහා සූදානම්. එය customer-facing landing page එක සහ internal salon system experience එක දැනටමත් වෙන් කරයි.",
      brand: "Brand: Saloon Hair Warna",
      build: "Primary build: Next.js + TypeScript + Tailwind + Prisma + PostgreSQL",
      phase: "Phase 1 focus: landing page, booking flow, role-based dashboard, branch-ready data model",
      platformCta: "Management shell විවෘත කරන්න",
      whatsappCta: "WhatsApp උපදේශනය"
    }
  },
  ta: {
    siteHeader: {
      brandTag: "சலூன் பிராண்ட்",
      nav: {
        services: "சேவைகள்",
        branches: "கிளைகள்",
        offers: "சலுகைகள்",
        management: "மேலாண்மை",
        contact: "தொடர்பு"
      },
      openPlatform: "தளத்தை திறக்கவும்",
      languageLabel: "மொழி"
    },
    hero: {
      eyebrow: "பிரீமியம் சலூன் இணையதளம் + மேலாண்மை தளம்",
      title: "ஒரு துணிச்சலான டிஜிட்டல் இல்லம்",
      highlight: "Saloon Hair Warna",
      description:
        "பிரீமியம், மொபைல் பதிலளிக்கும் landing page ஒன்றையும் salon management system ஒன்றையும் ஒரே full-stack Next.js தயாரிப்பாக தொடங்குங்கள். இந்த அனுபவம் booking, branches, staff, leave, CRM, offers மற்றும் analytics ஆகியவற்றுக்காக ஆரம்பத்திலிருந்தே தயாராக உள்ளது.",
      primaryCta: "ஆலோசனையை பதிவு செய்யவும்",
      secondaryCta: "சலூன் தளத்தை பார்க்கவும்",
      stats: [
        { value: "3", label: "கிளை தயாரான செயல்பாடுகள்" },
        { value: "24/7", label: "ஆன்லைன் முன்பதிவு அணுகல்" },
        { value: "5 roles", label: "பணியாளர் அனுமதி அடுக்குகள்" }
      ],
      imageEyebrow: "லக்சுரி பிராண்ட் அறிமுகம்",
      imageCaption: "முதல் scroll முதல் இறுதி appointment வரை அழகான வாடிக்கையாளர் பயணம்.",
      imageAlt: "பிரீமியம் சலூன் உள்தளம்"
    },
    services: {
      eyebrow: "சிறப்பு சேவைகள்",
      title: "வாடிக்கையாளர்கள் வருவதற்கு முன்பே உணரக்கூடிய ஒரு பிராண்ட் கதை.",
      description:
        "இந்த landing page, Saloon Hair Warna-வை ஒரு பிரீமியம் சலூனாக நிலைநிறுத்தி mobile, tablet, desktop அனைத்திலும் booking மற்றும் branch discovery-ஐ எளிதாக்குகிறது.",
      items: [
        {
          title: "Signature Coloring",
          description: "பிரீமியம் சலூன் அனுபவத்திற்காக தனிப்பயன் நிற சேவைகள், gloss treatments மற்றும் finish rituals."
        },
        {
          title: "Precision Haircuts",
          description: "பெண்கள், ஆண்கள், இளைஞர்கள் அனைவருக்கும் modern cuts மற்றும் தனிப்பயன் styling guidance."
        },
        {
          title: "Bridal & Event Styling",
          description: "திருமணம், விழா, shoots மற்றும் சிறப்பு நிகழ்ச்சிகளுக்கான luxury styling sessions."
        },
        {
          title: "Hair Spa & Recovery",
          description: "ஆரோக்கியமான நீண்டகால முடிவுகளுக்கான scalp rituals மற்றும் restorative care programs."
        }
      ]
    },
    showcase: {
      eyebrow: "லக்சுரி சூழல்",
      title: "சூடான, நயமான, நம்பிக்கை ஊட்டும் சலூன் பிராண்டிற்காக வடிவமைக்கப்பட்ட காட்சி உலகம்.",
      description:
        "இந்த visual direction earthy gold, soft neutrals, editorial typography மற்றும் layered surfaces ஆகியவற்றை இணைத்து பிரீமியம் உணர்வை உருவாக்குகிறது.",
      metrics: [
        { label: "Customer comfort", value: "தனிப்பட்ட ஆலோசனைகள்" },
        { label: "Style direction", value: "Modern editorial finish" },
        { label: "Service pace", value: "அமைதியான appointment flow" }
      ]
    },
    offers: {
      eyebrow: "சலுகை இயந்திரம்",
      title: "Promotions, banners மற்றும் மீண்டும் வரவைக்கும் campaigns அனைத்தும் உட்பொதிக்கப்பட்டவை.",
      description:
        "இந்த system homepage hero offers, monthly campaigns, birthday promotions, product pushes மற்றும் CRM segments ஆகியவற்றை ஆதரிக்கிறது.",
      items: [
        "காலவரையற்ற seasonal pricing உடன் color + treatment bundles",
        "CRM ஆதரவு repeat visits க்கான birthday beauty benefits",
        "கிளை அளவிலான promotions மற்றும் branded landing page highlights"
      ]
    },
    platform: {
      eyebrow: "சலூன் மேலாண்மை அமைப்பு",
      title: "Bookings, teams, branches, clients மற்றும் growth க்கு ஒரே app.",
      description:
        "Phase 1-ஐ வேகமாக launch செய்யவும் future multi-branch operations க்கான வலுவான data model-ஐ வைத்திருக்கவும் இந்த platform ஒரு single Next.js application ஆக வடிவமைக்கப்பட்டுள்ளது.",
      items: [
        {
          title: "Operations Dashboard",
          copy: "Appointments, walk-ins, approvals மற்றும் front-desk actions அனைத்தையும் ஒரே responsive control center-ல் கண்காணிக்கவும்."
        },
        {
          title: "Smart Scheduling",
          copy: "Overlaps-ஐ தவிர்த்து leave, business hours மற்றும் branch-aware stylist availability-ஐ கையாளவும்."
        },
        {
          title: "Client CRM",
          copy: "Profiles, photos, style references, birthdays, preferences மற்றும் visit history அனைத்தையும் ஒரே இடத்தில் சேமிக்கவும்."
        },
        {
          title: "Multi-Branch Control",
          copy: "Duplicate systems இல்லாமல் அனைத்து கிளைகளிலும் services, staff, pricing மற்றும் performance-ஐ நிர்வகிக்கவும்."
        },
        {
          title: "Notification Engine",
          copy: "Bookings, offers, birthdays மற்றும் campaigns க்கு in-app, email மற்றும் WhatsApp reminders-ஐ தயார் செய்யவும்."
        },
        {
          title: "Feedback & Offers",
          copy: "Bilingual feedback-ஐ சேகரித்து products-ஐ பிரசாரம் செய்யவும் மற்றும் customer journey முழுவதும் branded banners-ஐ காட்டவும்."
        }
      ]
    },
    branches: {
      eyebrow: "கிளை தயாரானது",
      title: "அமைப்பை மறுபடியும் கட்டாமல் multi-branch வளர்ச்சிக்கு தயாராகுங்கள்.",
      description:
        "Branch-specific pricing, staff assignment மற்றும் business hours ஆரம்பத்திலிருந்தே model செய்யப்பட்டுள்ளதால் single studio-விலிருந்து network-ஆக வளர முடியும்.",
      items: [
        {
          name: "கொழும்பு Signature Studio",
          hours: "திங்கள் - ஞாயிறு | 9.00 AM - 8.00 PM",
          focus: "Luxury coloring, premium consultations மற்றும் bridal finishing."
        },
        {
          name: "கண்டி Style Lounge",
          hours: "திங்கள் - சனி | 10.00 AM - 7.00 PM",
          focus: "Family cuts, modern styling மற்றும் spa recovery sessions."
        },
        {
          name: "நெகோம்போ Coastal Bar",
          hours: "செவ்வாய் - ஞாயிறு | 9.30 AM - 7.30 PM",
          focus: "Express services, seasonal offers மற்றும் product showcases."
        }
      ]
    },
    dashboardPreview: {
      eyebrow: "App preview",
      title: "ஒவ்வொரு salon role க்கும் responsive dashboard surfaces.",
      description:
        "Receptionists, managers, hairdressers, clients மற்றும் super admins ஆகியோருக்கான focused views மற்றும் role-based access control வழங்கப்படுகிறது.",
      cards: [
        {
          title: "Reception View",
          metric: "18 bookings",
          detail: "Walk-ins, approvals, chair allocation மற்றும் live queue handling க்கான day board."
        },
        {
          title: "Manager Snapshot",
          metric: "92% utilization",
          detail: "Branch staffing, leave approvals, top services மற்றும் peak hours அனைத்தும் ஒரே இடத்தில்."
        },
        {
          title: "Customer Portal",
          metric: "10 photos",
          detail: "Profile images, haircut references, reminder preferences மற்றும் self-service booking."
        }
      ]
    },
    team: {
      eyebrow: "கலைஞர்களை சந்திக்கவும்",
      title: "ஒரு சலூன் பிராண்ட் நினைவில் நிற்கும் போது அதன் பின்னுள்ள மனிதர்கள் தெளிவாக தெரிகிறார்கள்.",
      description:
        "இந்த பகுதி பின்னர் real employee data உடன் இணைக்கலாம், ஆனால் இப்போதே landing page-க்கு more human மற்றும் premium editorial feeling ஒன்றை தருகிறது.",
      members: [
        { name: "நதுனி", role: "Color Director", specialty: "Dimensional color, gloss finishes மற்றும் luxury correction work." },
        { name: "கசுன்", role: "Style Specialist", specialty: "Precision cuts, men’s grooming மற்றும் polished event styling." },
        { name: "ஆராத்யா", role: "Bridal Artist", specialty: "Bridal styling, textured finishes மற்றும் camera-ready hair design." }
      ]
    },
    lookbook: {
      eyebrow: "Hair lookbook",
      title: "சேவை பட்டியலை மட்டும் அல்ல, சலூனின் visual taste ஐயும் காட்டுங்கள்.",
      description:
        "வாடிக்கையாளர்கள் இறுதி தோற்றத்தை கற்பனை செய்யும்போது premium brand site இன்னும் வலுவாகிறது. இது எதிர்கால real client gallery க்கான ஒரு அடித்தள layout ஆக உள்ளது.",
      items: [
        { title: "Soft dimensional blondes", detail: "Modern luxury looks க்கான clean lift, soft blending மற்றும் glossy movement." },
        { title: "Editorial brunette finish", detail: "Elevated everyday elegance க்கான rich depth, reflective tone மற்றும் sharp shape." },
        { title: "Bridal texture and shine", detail: "Pinned softness, controlled volume மற்றும் camera-ready finishing detail." }
      ]
    },
    booking: {
      eyebrow: "Booking planner",
      title: "கிளை, தேதி, நேரம், சேவை மற்றும் hairdresser visibility உடன் client booking.",
      description:
        "உங்கள் item list அடிப்படையில் clients க்கு service descriptions, price, duration, break time, available hairdressers மற்றும் already-booked slots ஆகியவை தேர்வு செய்யும் முன் தெரியும்.",
      branchLabel: "கிளையை தேர்வு செய்யவும்",
      dateLabel: "தேதியை தேர்வு செய்யவும்",
      serviceLabel: "சேவையை தேர்வு செய்யவும்",
      timeLabel: "நேர slot ஐ தேர்வு செய்யவும்",
      availabilityTitle: "இந்த slot க்கான hairdresser availability",
      availableNow: "Available hairdressers",
      alreadyBooked: "இந்த நேரத்தில் ஏற்கனவே booked",
      chooseStylist: "இந்த hairdresser ஐ தேர்வு செய்யவும்",
      callNow: "Call now booking தேவை",
      packageNote: "Automatic package scheduling note",
      priceLabel: "விலை",
      durationLabel: "நேர அளவு",
      breakLabel: "Break time",
      timeWindowLabel: "சேவை நேரம்",
      visibleDescription: "Client க்கு காணும் description",
      bookedByLabel: "Booked by",
      noOneFree: "இந்த slot இல் free hairdresser யாரும் இல்லை. ஆனால் client ஏற்கனவே booked ஆனவர்களை பார்க்க முடியும்.",
      backendReady: "Backend integration பிறகு இந்த sample data ஐ real booking data உடன் மாற்றக்கூடிய வகையில் frontend அமைக்கப்பட்டுள்ளது.",
      subCategoryTitle: "Sub category selection",
      submitLabel: "Booking ஐ salon க்கு submit செய்யவும்",
      submitSuccess: "Salon submission க்கான booking request தயார் செய்யப்பட்டது.",
      selectedItemsLabel: "தேர்ந்தெடுக்கப்பட்ட sub items"
    },
    signatureExperience: {
      eyebrow: "சிறப்பு அனுபவம்",
      title: "முதல் click முதல் இறுதி mirror reveal வரை தனிப்பட்டதாக உணரப்படும் customer journey.",
      description:
        "இந்த landing page இப்போது business system என்ன செய்யும் என்பதையே அல்ல, salon experience எப்படி உணரப்படும் என்பதையும் சொல்கிறது.",
      steps: [
        { title: "Consult", detail: "Branch discovery, service browsing மற்றும் தெளிவான booking invitation உடன் தொடங்குங்கள்." },
        { title: "Transform", detail: "Premium coloring, cuts, care rituals மற்றும் event-ready styling ஐ வெளிப்படுத்துங்கள்." },
        { title: "Return", detail: "Offers, reminders, birthday campaigns மற்றும் CRM follow-up மூலம் மீண்டும் வரவழைக்கவும்." }
      ]
    },
    testimonials: {
      eyebrow: "வாடிக்கையாளர் அன்பு",
      title: "மனிதநேயமும் நம்பிக்கையும் கொண்ட பிராண்ட் முன்னிலைப்படுத்தல்.",
      description:
        "Social proof சலூனை established, premium, warm என உணரச் செய்கிறது. பின்னர் இதை real testimonials உடன் இணைக்கலாம்.",
      items: [
        {
          quote: "Booking flow மென்மையாக இருந்தது, consultation மிகவும் personal ஆக இருந்தது, result நான் எதிர்பார்த்ததற்கே துல்லியமாக இருந்தது.",
          name: "நேத்மி",
          role: "Color client"
        },
        {
          quote: "இது ஒரு luxury salon போல உணருகிறது, ஆனால் digital experience மிகவும் எளிமையும் வேகமும் கொண்டது.",
          name: "ஷெஹான்",
          role: "Style and grooming client"
        },
        {
          quote: "Reminders முதல் service suggestions வரை அனைத்தும் thoughtful மற்றும் beautifully branded feel ஒன்றைக் கொடுக்கிறது.",
          name: "ஆராத்தி",
          role: "Bridal styling client"
        }
      ]
    },
    bookingCta: {
      eyebrow: "பதிவு செய்ய தயாராக",
      title: "பாராட்டைச் செயலில் மாற்றும் தெளிவான மற்றும் வலுவான booking moment ஒன்றை உருவாக்குங்கள்.",
      description:
        "இந்த பகுதி branch selection, personalized consultations மற்றும் mobile-friendly booking ஆகியவற்றை வலுப்படுத்தி direct next step ஒன்றை வழங்குகிறது.",
      primary: "இப்போது booking தொடங்குங்கள்",
      secondary: "Salon platform ஐ பாருங்கள்",
      notes: ["உங்கள் branch ஐ தேர்வு செய்யுங்கள்", "உங்கள் stylist அல்லது any available expert ஐ தேர்வு செய்யுங்கள்", "மொபைலில் சில நிமிடங்களில் பதிவு செய்யுங்கள்"]
    },
    contact: {
      eyebrow: "Launch செய்ய தயாராக உள்ளது",
      title: "உங்கள் அடுத்த படி இன்னொரு draft அல்ல, ஒரு branded launch ஆக இருக்கலாம்.",
      description:
        "இந்த foundation Supabase Auth, PostgreSQL, Prisma migrations மற்றும் booking engine க்காக தயாராக உள்ளது. இது customer-facing landing page மற்றும் internal salon system experience ஐ ஏற்கனவே பிரிக்கிறது.",
      brand: "Brand: Saloon Hair Warna",
      build: "Primary build: Next.js + TypeScript + Tailwind + Prisma + PostgreSQL",
      phase: "Phase 1 focus: landing page, booking flow, role-based dashboard, branch-ready data model",
      platformCta: "Management shell திறக்கவும்",
      whatsappCta: "WhatsApp ஆலோசனை"
    }
  }
};
