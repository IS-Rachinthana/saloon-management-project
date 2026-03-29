export type BookingService = {
  id: string;
  code: string;
  name: string;
  description: string;
  price: string;
  startAm: string;
  endPm: string;
  duration: string;
  breakTime: string;
  category: "standard" | "call_now" | "package";
  notes?: string[];
  subItems?: {
    id: string;
    code: string;
    name: string;
    description: string;
    price: string;
    duration: string;
    breakTime: string;
    timing?: string;
  }[];
};

export type Stylist = {
  id: string;
  name: string;
  role: string;
  image: string;
};

export type BranchBookingData = {
  id: string;
  name: string;
  stylists: Stylist[];
  bookings: {
    date: string;
    time: string;
    stylistId: string;
    serviceName: string;
    customerName: string;
  }[];
};

export const bookingServices: BookingService[] = [
  {
    id: "hari-cut",
    code: "0101",
    name: "Hari Cut",
    description: "Classic salon haircut service visible to clients with standard booking support.",
    price: "LKR 500.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "30 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  },
  {
    id: "school-hair-cut",
    code: "0102",
    name: "School Hair Cut",
    description: "Student haircut option with shorter duration and quick booking flow.",
    price: "LKR 350.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "20 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  },
  {
    id: "bread-cut",
    code: "0103",
    name: "Bread Cut",
    description: "Fast trim service with visible duration and break time.",
    price: "LKR 400.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "15 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  },
  {
    id: "head-massage",
    code: "0104",
    name: "Head Massage",
    description: "Massage pricing may change depending on selected product quality.",
    price: "From LKR 500.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "15 Minutes",
    breakTime: "5 Minutes",
    category: "standard",
    notes: ["According to the product quality, the massage price will be changed."],
    subItems: [
      {
        id: "herbal-massage",
        code: "0104A",
        name: "Herbal Massage",
        description: "Herbal massage variation under head massage.",
        price: "LKR 500.00",
        duration: "15 Minutes",
        breakTime: "5 Minutes",
        timing: "9.00 AM - 7.00 PM"
      },
      {
        id: "keratin-massage",
        code: "0104B",
        name: "Keratin Massage",
        description: "Keratin massage variation under head massage.",
        price: "LKR 700.00",
        duration: "15 Minutes",
        breakTime: "5 Minutes",
        timing: "9.00 AM - 7.00 PM"
      },
      {
        id: "tonic-massage",
        code: "0104C",
        name: "Tonic Massage",
        description: "Tonic massage variation under head massage.",
        price: "LKR 500.00",
        duration: "15 Minutes",
        breakTime: "5 Minutes",
        timing: "9.00 AM - 7.00 PM"
      },
      {
        id: "navaratnam-oil",
        code: "0104D",
        name: "Navaratnam Oil",
        description: "Navaratnam oil massage variation under head massage.",
        price: "LKR 500.00",
        duration: "15 Minutes",
        breakTime: "5 Minutes",
        timing: "9.00 AM - 7.00 PM"
      }
    ]
  },
  {
    id: "facial-massage",
    code: "0105",
    name: "Facial Massage",
    description: "Premium facial massage session.",
    price: "LKR 2,500.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "50 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  },
  {
    id: "herbal-facial",
    code: "0106",
    name: "Herbal Facial (Max Plus Brand)",
    description: "Herbal facial treatment using Max Plus brand products.",
    price: "LKR 3,000.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "60 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  },
  {
    id: "herbal-cleanup",
    code: "0107",
    name: "Herbal Cleanup",
    description: "Cleanup service with herbal treatment flow.",
    price: "LKR 1,800.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "30 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  },
  {
    id: "cleanup",
    code: "0108",
    name: "Clean Up",
    description: "Quick cleanup service for routine skin care appointments.",
    price: "LKR 1,500.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "30 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  },
  {
    id: "face-massage-small-cleanup",
    code: "0109",
    name: "Face Massage with Small Cleanup",
    description: "Compact treatment combining face massage and small cleanup.",
    price: "LKR 800.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "25 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  },
  {
    id: "coloring-black",
    code: "0110",
    name: "Coloring Hair Black",
    description: "Quick black hair coloring service.",
    price: "LKR 1,000.00",
    startAm: "9.00 AM",
    endPm: "6.00 PM",
    duration: "10 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  },
  {
    id: "custom-coloring",
    code: "0111",
    name: "Coloring Hair (Customer can pick the color)",
    description: "Custom color selection item. Booking should use a Call Now style flow.",
    price: "Call Now",
    startAm: "9.00 AM",
    endPm: "6.00 PM",
    duration: "90 Minutes",
    breakTime: "5 Minutes",
    category: "call_now",
    notes: ["Call Now button should be used instead of direct online checkout.", "Customized packages and prices are manually entered by the salon owner."]
  },
  {
    id: "wedding-package",
    code: "0112",
    name: "Wedding Day Prince’s Package (For One Month)",
    description: "Package starts from the beginning of the month and should auto-schedule the listed milestone appointments.",
    price: "LKR 15,000.00",
    startAm: "9.00 AM",
    endPm: "6.00 PM",
    duration: "155 Minutes",
    breakTime: "5 Minutes",
    category: "package",
    notes: [
      "01st of month: 1st Cleanup",
      "15th of month: 2nd Cleanup",
      "25th of month: 3rd Facial",
      "29th of month: Hair Cut and Bread Cut"
    ],
    subItems: [
      {
        id: "wdp-1",
        code: "0112WDP1",
        name: "1st Cleanup",
        description: "01st of month should be ready for the 1st Cleanup.",
        price: "Included",
        duration: "30 Minutes",
        breakTime: "5 Minutes",
        timing: "9.00 AM - 6.00 PM"
      },
      {
        id: "wdp-2",
        code: "0112WDP2",
        name: "2nd Cleanup",
        description: "15th of month should be ready for the 2nd Cleanup.",
        price: "Included",
        duration: "30 Minutes",
        breakTime: "5 Minutes",
        timing: "9.00 AM - 6.00 PM"
      },
      {
        id: "wdp-3",
        code: "0112WDP3",
        name: "3rd Facial",
        description: "25th of month should be ready for the Facial.",
        price: "Included",
        duration: "50 Minutes",
        breakTime: "5 Minutes",
        timing: "9.00 AM - 6.00 PM"
      },
      {
        id: "wdp-4",
        code: "0112WDP4",
        name: "4th Hair Cut and Bread Cut",
        description: "29th of month should be ready for the Hair Cut and Bread Cut.",
        price: "Included",
        duration: "45 Minutes",
        breakTime: "5 Minutes",
        timing: "9.00 AM - 6.00 PM"
      }
    ]
  },
  {
    id: "piercing",
    code: "0113",
    name: "Piercing",
    description: "Short duration piercing appointment.",
    price: "LKR 500.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "10 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  },
  {
    id: "hari-straight",
    code: "0114",
    name: "Hari Straight (Boys and Girls)",
    description: "Call-now booking item based on customer requirements and custom pricing.",
    price: "Call Now",
    startAm: "9.00 AM",
    endPm: "6.00 PM",
    duration: "Custom",
    breakTime: "Custom",
    category: "call_now",
    notes: ["Call Now button should be used for scheduling.", "Salon owner enters custom package details and price manually."]
  },
  {
    id: "oil-hair-treatment",
    code: "0115",
    name: "Oil Hair Treatment",
    description: "Includes head massage with oil, steaming, and hair wash.",
    price: "LKR 1,800.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "35 Minutes",
    breakTime: "5 Minutes",
    category: "standard",
    notes: ["Head massage with oil – 15 minutes", "Steaming your hair – 10 minutes", "Wash your hair – 10 minutes"]
  },
  {
    id: "full-hair-black-with-wash",
    code: "0116",
    name: "Full Hair Coloring (Black Color Only) with Wash",
    description: "Full black color treatment with wash and no break time.",
    price: "LKR 1,200.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "15 Minutes",
    breakTime: "No Break Time",
    category: "standard"
  },
  {
    id: "full-hair-fashion-colour",
    code: "0117",
    name: "Full Hair Fashion Colour",
    description: "Extended fashion coloring session.",
    price: "LKR 2,500.00",
    startAm: "9.00 AM",
    endPm: "7.00 PM",
    duration: "90 Minutes",
    breakTime: "5 Minutes",
    category: "standard"
  }
];

export const bookingBranches: BranchBookingData[] = [
  {
    id: "colombo",
    name: "Colombo Signature Studio",
    stylists: [
      { id: "naduni", name: "Naduni", role: "Color Director", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80" },
      { id: "kasun", name: "Kasun", role: "Style Specialist", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80" },
      { id: "aaradhya", name: "Aaradhya", role: "Bridal Artist", image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80" }
    ],
    bookings: [
      { date: "2026-03-29", time: "09:00", stylistId: "naduni", serviceName: "Hari Cut", customerName: "Nethmi" },
      { date: "2026-03-29", time: "10:00", stylistId: "kasun", serviceName: "Full Hair Fashion Colour", customerName: "Shehan" },
      { date: "2026-03-29", time: "10:00", stylistId: "aaradhya", serviceName: "Bridal Styling Trial", customerName: "Aarathi" },
      { date: "2026-03-29", time: "11:00", stylistId: "naduni", serviceName: "Coloring Hair Black", customerName: "Dilki" }
    ]
  },
  {
    id: "kandy",
    name: "Kandy Style Lounge",
    stylists: [
      { id: "tharindu", name: "Tharindu", role: "Hairdresser", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80" },
      { id: "ishari", name: "Ishari", role: "Skin Care Artist", image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80" },
      { id: "maleesha", name: "Maleesha", role: "Hairdresser", image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80" }
    ],
    bookings: [
      { date: "2026-03-29", time: "09:00", stylistId: "ishari", serviceName: "Herbal Facial", customerName: "Piumi" },
      { date: "2026-03-29", time: "10:00", stylistId: "tharindu", serviceName: "School Hair Cut", customerName: "Kavin" }
    ]
  }
];

export const bookingTimes = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];
