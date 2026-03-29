const { PrismaClient, Prisma } = require("@prisma/client");

const prisma = new PrismaClient();

const roleSeeds = [
  { key: "CLIENT", name: "Client", description: "Customer portal access" },
  { key: "HAIRDRESSER", name: "Hairdresser", description: "Assigned stylist operations" },
  { key: "RECEPTIONIST", name: "Receptionist", description: "Front-desk booking management" },
  { key: "MANAGER", name: "Manager", description: "Branch-level management access" },
  { key: "SUPER_ADMIN", name: "Super Admin", description: "Global system management" }
];

const branchSeeds = [
  {
    slug: "colombo-signature-studio",
    name: "Colombo Signature Studio",
    phone: "+94 11 245 2200",
    email: "colombo@saloonhairwarna.com",
    addressLine1: "12 Ward Place",
    city: "Colombo",
    description: "Flagship branch for premium grooming, colour, and bridal styling."
  },
  {
    slug: "kandy-style-lounge",
    name: "Kandy Style Lounge",
    phone: "+94 81 223 4500",
    email: "kandy@saloonhairwarna.com",
    addressLine1: "24 Dalada Veediya",
    city: "Kandy",
    description: "Kandy branch for family cuts, facials, and signature monthly packages."
  }
];

const stylistSeeds = [
  {
    email: "naduni@saloonhairwarna.com",
    fullName: "Naduni Perera",
    phone: "+94 77 123 4501",
    avatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=600&q=80",
    preferredLanguage: "en",
    jobTitle: "Color Director",
    bio: "Specialist in custom colour finishes and premium hair consultations.",
    branchSlug: "colombo-signature-studio",
    isPrimary: true
  },
  {
    email: "kasun@saloonhairwarna.com",
    fullName: "Kasun Fernando",
    phone: "+94 77 123 4502",
    avatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
    preferredLanguage: "en",
    jobTitle: "Style Specialist",
    bio: "Focused on men’s grooming, haircuts, and finishing services.",
    branchSlug: "colombo-signature-studio",
    isPrimary: false
  },
  {
    email: "aaradhya@saloonhairwarna.com",
    fullName: "Aaradhya Silva",
    phone: "+94 77 123 4503",
    avatarUrl: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=600&q=80",
    preferredLanguage: "en",
    jobTitle: "Bridal Artist",
    bio: "Bridal artist for package planning, trials, and wedding-day looks.",
    branchSlug: "colombo-signature-studio",
    isPrimary: false
  },
  {
    email: "tharindu@saloonhairwarna.com",
    fullName: "Tharindu Jayasinghe",
    phone: "+94 77 123 4504",
    avatarUrl: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=600&q=80",
    preferredLanguage: "en",
    jobTitle: "Hairdresser",
    bio: "Salon hairdresser for cuts, black colouring, and treatment services.",
    branchSlug: "kandy-style-lounge",
    isPrimary: true
  },
  {
    email: "ishari@saloonhairwarna.com",
    fullName: "Ishari Weerasinghe",
    phone: "+94 77 123 4505",
    avatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=600&q=80",
    preferredLanguage: "en",
    jobTitle: "Skin Care Artist",
    bio: "Focuses on cleanup, facial, and massage appointments.",
    branchSlug: "kandy-style-lounge",
    isPrimary: false
  },
  {
    email: "maleesha@saloonhairwarna.com",
    fullName: "Maleesha Ramanayake",
    phone: "+94 77 123 4506",
    avatarUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=600&q=80",
    preferredLanguage: "en",
    jobTitle: "Hairdresser",
    bio: "Supports haircuts, treatments, and package follow-up sessions.",
    branchSlug: "kandy-style-lounge",
    isPrimary: false
  }
];

const categorySeeds = [
  {
    slug: "hair-services",
    name: "Hair Services",
    description: "Hair cutting, colouring, treatment, and straightening services."
  },
  {
    slug: "skin-care",
    name: "Skin Care",
    description: "Cleanup, massage, and facial care services."
  },
  {
    slug: "packages",
    name: "Packages",
    description: "Longer-form packages and manually quoted service bundles."
  }
];

const serviceSeeds = [
  {
    code: "0101",
    slug: "hari-cut",
    name: "Hari Cut",
    description: "Classic salon haircut service visible to clients with standard booking support.",
    categorySlug: "hair-services",
    priceLkr: "500.00",
    durationMinutes: 30,
    bufferMinutes: 5
  },
  {
    code: "0102",
    slug: "school-hair-cut",
    name: "School Hair Cut",
    description: "Student haircut option with shorter duration and quick booking flow.",
    categorySlug: "hair-services",
    priceLkr: "350.00",
    durationMinutes: 20,
    bufferMinutes: 5
  },
  {
    code: "0103",
    slug: "bread-cut",
    name: "Bread Cut",
    description: "Fast trim service with visible duration and break time.",
    categorySlug: "hair-services",
    priceLkr: "400.00",
    durationMinutes: 15,
    bufferMinutes: 5
  },
  {
    code: "0104",
    slug: "head-massage",
    name: "Head Massage",
    description: "Massage pricing may change depending on selected product quality.",
    categorySlug: "skin-care",
    priceLkr: "500.00",
    durationMinutes: 15,
    bufferMinutes: 5,
    subItems: [
      {
        code: "0104A",
        name: "Herbal Massage",
        description: "Herbal massage variation under head massage.",
        priceLkr: "500.00",
        durationMinutes: 15,
        breakMinutes: 5,
        timingNotes: "9.00 AM - 7.00 PM"
      },
      {
        code: "0104B",
        name: "Keratin Massage",
        description: "Keratin massage variation under head massage.",
        priceLkr: "700.00",
        durationMinutes: 15,
        breakMinutes: 5,
        timingNotes: "9.00 AM - 7.00 PM"
      },
      {
        code: "0104C",
        name: "Tonic Massage",
        description: "Tonic massage variation under head massage.",
        priceLkr: "500.00",
        durationMinutes: 15,
        breakMinutes: 5,
        timingNotes: "9.00 AM - 7.00 PM"
      },
      {
        code: "0104D",
        name: "Navaratnam Oil",
        description: "Navaratnam oil massage variation under head massage.",
        priceLkr: "500.00",
        durationMinutes: 15,
        breakMinutes: 5,
        timingNotes: "9.00 AM - 7.00 PM"
      }
    ]
  },
  {
    code: "0105",
    slug: "facial-massage",
    name: "Facial Massage",
    description: "Premium facial massage session.",
    categorySlug: "skin-care",
    priceLkr: "2500.00",
    durationMinutes: 50,
    bufferMinutes: 5
  },
  {
    code: "0106",
    slug: "herbal-facial-max-plus",
    name: "Herbal Facial (Max Plus Brand)",
    description: "Herbal facial treatment using Max Plus brand products.",
    categorySlug: "skin-care",
    priceLkr: "3000.00",
    durationMinutes: 60,
    bufferMinutes: 5
  },
  {
    code: "0107",
    slug: "herbal-cleanup",
    name: "Herbal Cleanup",
    description: "Cleanup service with herbal treatment flow.",
    categorySlug: "skin-care",
    priceLkr: "1800.00",
    durationMinutes: 30,
    bufferMinutes: 5
  },
  {
    code: "0108",
    slug: "clean-up",
    name: "Clean Up",
    description: "Quick cleanup service for routine skin care appointments.",
    categorySlug: "skin-care",
    priceLkr: "1500.00",
    durationMinutes: 30,
    bufferMinutes: 5
  },
  {
    code: "0109",
    slug: "face-massage-with-small-cleanup",
    name: "Face Massage with Small Cleanup",
    description: "Compact treatment combining face massage and small cleanup.",
    categorySlug: "skin-care",
    priceLkr: "800.00",
    durationMinutes: 25,
    bufferMinutes: 5
  },
  {
    code: "0110",
    slug: "coloring-hair-black",
    name: "Coloring Hair Black",
    description: "Quick black hair coloring service.",
    categorySlug: "hair-services",
    priceLkr: "1000.00",
    durationMinutes: 10,
    bufferMinutes: 5
  },
  {
    code: "0111",
    slug: "custom-coloring",
    name: "Coloring Hair (Customer can pick the color)",
    description: "Custom color selection item. Booking should use a Call Now style flow.",
    categorySlug: "packages",
    priceLkr: "0.00",
    durationMinutes: 90,
    bufferMinutes: 5
  },
  {
    code: "0112",
    slug: "wedding-day-prince-package",
    name: "Wedding Day Prince's Package (For One Month)",
    description: "Package starts from the beginning of the month and should auto-schedule the listed milestone appointments.",
    categorySlug: "packages",
    priceLkr: "15000.00",
    durationMinutes: 155,
    bufferMinutes: 5,
    subItems: [
      {
        code: "0112WDP1",
        name: "1st Cleanup",
        description: "01st of month should be ready for the 1st Cleanup.",
        priceLkr: "0.00",
        durationMinutes: 30,
        breakMinutes: 5,
        timingNotes: "9.00 AM - 6.00 PM",
        isDefaultSelected: true
      },
      {
        code: "0112WDP2",
        name: "2nd Cleanup",
        description: "15th of month should be ready for the 2nd Cleanup.",
        priceLkr: "0.00",
        durationMinutes: 30,
        breakMinutes: 5,
        timingNotes: "9.00 AM - 6.00 PM",
        isDefaultSelected: true
      },
      {
        code: "0112WDP3",
        name: "3rd Facial",
        description: "25th of month should be ready for the Facial.",
        priceLkr: "0.00",
        durationMinutes: 50,
        breakMinutes: 5,
        timingNotes: "9.00 AM - 6.00 PM",
        isDefaultSelected: true
      },
      {
        code: "0112WDP4",
        name: "4th Hair Cut and Bread Cut",
        description: "29th of month should be ready for the Hair Cut and Bread Cut.",
        priceLkr: "0.00",
        durationMinutes: 45,
        breakMinutes: 5,
        timingNotes: "9.00 AM - 6.00 PM",
        isDefaultSelected: true
      }
    ]
  },
  {
    code: "0113",
    slug: "piercing",
    name: "Piercing",
    description: "Short duration piercing appointment.",
    categorySlug: "skin-care",
    priceLkr: "500.00",
    durationMinutes: 10,
    bufferMinutes: 5
  },
  {
    code: "0114",
    slug: "hari-straight",
    name: "Hari Straight (Boys and Girls)",
    description: "Call-now booking item based on customer requirements and custom pricing.",
    categorySlug: "packages",
    priceLkr: "0.00",
    durationMinutes: 120,
    bufferMinutes: 5
  },
  {
    code: "0115",
    slug: "oil-hair-treatment",
    name: "Oil Hair Treatment",
    description: "Includes head massage with oil, steaming, and hair wash.",
    categorySlug: "hair-services",
    priceLkr: "1800.00",
    durationMinutes: 35,
    bufferMinutes: 5
  },
  {
    code: "0116",
    slug: "full-hair-black-with-wash",
    name: "Full Hair Coloring (Black Color Only) with Wash",
    description: "Full black color treatment with wash and no break time.",
    categorySlug: "hair-services",
    priceLkr: "1200.00",
    durationMinutes: 15,
    bufferMinutes: 0
  },
  {
    code: "0117",
    slug: "full-hair-fashion-colour",
    name: "Full Hair Fashion Colour",
    description: "Extended fashion coloring session.",
    categorySlug: "hair-services",
    priceLkr: "2500.00",
    durationMinutes: 90,
    bufferMinutes: 5
  }
];

const sampleBookingSeeds = [
  {
    customerName: "Nethmi",
    customerPhone: "+94 77 000 1001",
    bookingDate: "2026-03-29T00:00:00.000Z",
    bookingTime: "09:00",
    branchSlug: "colombo-signature-studio",
    stylistEmail: "naduni@saloonhairwarna.com",
    serviceCode: "0101"
  },
  {
    customerName: "Shehan",
    customerPhone: "+94 77 000 1002",
    bookingDate: "2026-03-29T00:00:00.000Z",
    bookingTime: "10:00",
    branchSlug: "colombo-signature-studio",
    stylistEmail: "kasun@saloonhairwarna.com",
    serviceCode: "0117"
  },
  {
    customerName: "Aarathi",
    customerPhone: "+94 77 000 1003",
    bookingDate: "2026-03-29T00:00:00.000Z",
    bookingTime: "10:00",
    branchSlug: "colombo-signature-studio",
    stylistEmail: "aaradhya@saloonhairwarna.com",
    serviceCode: "0112",
    subItemCodes: ["0112WDP1"]
  },
  {
    customerName: "Dilki",
    customerPhone: "+94 77 000 1004",
    bookingDate: "2026-03-29T00:00:00.000Z",
    bookingTime: "11:00",
    branchSlug: "colombo-signature-studio",
    stylistEmail: "naduni@saloonhairwarna.com",
    serviceCode: "0110"
  },
  {
    customerName: "Piumi",
    customerPhone: "+94 77 000 1005",
    bookingDate: "2026-03-29T00:00:00.000Z",
    bookingTime: "09:00",
    branchSlug: "kandy-style-lounge",
    stylistEmail: "ishari@saloonhairwarna.com",
    serviceCode: "0106"
  },
  {
    customerName: "Kavin",
    customerPhone: "+94 77 000 1006",
    bookingDate: "2026-03-29T00:00:00.000Z",
    bookingTime: "10:00",
    branchSlug: "kandy-style-lounge",
    stylistEmail: "tharindu@saloonhairwarna.com",
    serviceCode: "0102"
  }
];

async function main() {
  for (const role of roleSeeds) {
    await prisma.role.upsert({
      where: { key: role.key },
      update: {
        name: role.name,
        description: role.description
      },
      create: role
    });
  }

  for (const branch of branchSeeds) {
    await prisma.branch.upsert({
      where: { slug: branch.slug },
      update: {
        name: branch.name,
        phone: branch.phone,
        email: branch.email,
        addressLine1: branch.addressLine1,
        city: branch.city,
        description: branch.description,
        isActive: true
      },
      create: {
        ...branch,
        isActive: true
      }
    });
  }

  const hairdresserRole = await prisma.role.findUniqueOrThrow({
    where: { key: "HAIRDRESSER" }
  });

  for (const stylist of stylistSeeds) {
    const branch = await prisma.branch.findUniqueOrThrow({
      where: { slug: stylist.branchSlug }
    });

    const user = await prisma.user.upsert({
      where: { email: stylist.email },
      update: {
        fullName: stylist.fullName,
        phone: stylist.phone,
        avatarUrl: stylist.avatarUrl,
        preferredLanguage: stylist.preferredLanguage
      },
      create: {
        email: stylist.email,
        fullName: stylist.fullName,
        phone: stylist.phone,
        avatarUrl: stylist.avatarUrl,
        preferredLanguage: stylist.preferredLanguage
      }
    });

    const employee = await prisma.employee.upsert({
      where: { userId: user.id },
      update: {
        jobTitle: stylist.jobTitle,
        bio: stylist.bio,
        isActive: true
      },
      create: {
        userId: user.id,
        jobTitle: stylist.jobTitle,
        bio: stylist.bio,
        isActive: true
      }
    });

    await prisma.userRole.upsert({
      where: {
        userId_roleId_branchId: {
          userId: user.id,
          roleId: hairdresserRole.id,
          branchId: branch.id
        }
      },
      update: {},
      create: {
        userId: user.id,
        roleId: hairdresserRole.id,
        branchId: branch.id
      }
    });

    await prisma.employeeBranch.upsert({
      where: {
        employeeId_branchId: {
          employeeId: employee.id,
          branchId: branch.id
        }
      },
      update: {
        isPrimary: stylist.isPrimary
      },
      create: {
        employeeId: employee.id,
        branchId: branch.id,
        isPrimary: stylist.isPrimary
      }
    });
  }

  for (const category of categorySeeds) {
    await prisma.serviceCategory.upsert({
      where: { slug: category.slug },
      update: {
        name: category.name,
        description: category.description
      },
      create: category
    });
  }

  for (const serviceSeed of serviceSeeds) {
    const category = await prisma.serviceCategory.findUniqueOrThrow({
      where: { slug: serviceSeed.categorySlug }
    });

    const service = await prisma.service.upsert({
      where: { slug: serviceSeed.slug },
      update: {
        code: serviceSeed.code,
        categoryId: category.id,
        name: serviceSeed.name,
        description: serviceSeed.description,
        durationMinutes: serviceSeed.durationMinutes,
        bufferMinutes: serviceSeed.bufferMinutes,
        isActive: true
      },
      create: {
        code: serviceSeed.code,
        slug: serviceSeed.slug,
        categoryId: category.id,
        name: serviceSeed.name,
        description: serviceSeed.description,
        durationMinutes: serviceSeed.durationMinutes,
        bufferMinutes: serviceSeed.bufferMinutes,
        isActive: true
      }
    });

    if (serviceSeed.subItems?.length) {
      for (const subItem of serviceSeed.subItems) {
        await prisma.serviceSubItem.upsert({
          where: { code: subItem.code },
          update: {
            serviceId: service.id,
            name: subItem.name,
            description: subItem.description,
            priceLkr: new Prisma.Decimal(subItem.priceLkr),
            durationMinutes: subItem.durationMinutes,
            breakMinutes: subItem.breakMinutes,
            timingNotes: subItem.timingNotes,
            isDefaultSelected: Boolean(subItem.isDefaultSelected)
          },
          create: {
            serviceId: service.id,
            code: subItem.code,
            name: subItem.name,
            description: subItem.description,
            priceLkr: new Prisma.Decimal(subItem.priceLkr),
            durationMinutes: subItem.durationMinutes,
            breakMinutes: subItem.breakMinutes,
            timingNotes: subItem.timingNotes,
            isDefaultSelected: Boolean(subItem.isDefaultSelected)
          }
        });
      }
    }
  }

  const branches = await prisma.branch.findMany();
  const services = await prisma.service.findMany();

  for (const branch of branches) {
    await prisma.branchService.createMany({
      data: services.map((service) => {
        const seeded = serviceSeeds.find((item) => item.slug === service.slug);

        return {
          branchId: branch.id,
          serviceId: service.id,
          priceLkr: new Prisma.Decimal(seeded ? seeded.priceLkr : "0.00"),
          isVisible: true
        };
      }),
      skipDuplicates: true
    });
  }

  const existingBookings = await prisma.bookingRequest.count();
  if (existingBookings === 0) {
    for (const bookingSeed of sampleBookingSeeds) {
      const branch = await prisma.branch.findUniqueOrThrow({
        where: { slug: bookingSeed.branchSlug }
      });
      const stylistUser = await prisma.user.findUniqueOrThrow({
        where: { email: bookingSeed.stylistEmail }
      });
      const stylist = await prisma.employee.findUniqueOrThrow({
        where: { userId: stylistUser.id }
      });
      const service = await prisma.service.findUniqueOrThrow({
        where: { code: bookingSeed.serviceCode }
      });

      const bookingRequest = await prisma.bookingRequest.create({
        data: {
          branchId: branch.id,
          assignedEmployeeId: stylist.id,
          bookingDate: new Date(bookingSeed.bookingDate),
          bookingTime: bookingSeed.bookingTime,
          customerName: bookingSeed.customerName,
          customerPhone: bookingSeed.customerPhone,
          status: "SUBMITTED"
        }
      });

      const bookingService = await prisma.bookingRequestService.create({
        data: {
          bookingRequestId: bookingRequest.id,
          serviceId: service.id,
          serviceCode: service.code,
          serviceName: service.name,
          priceSnapshot: new Prisma.Decimal(
            serviceSeeds.find((item) => item.code === service.code)?.priceLkr ?? "0.00"
          ),
          durationMinutes: service.durationMinutes,
          breakMinutes: service.bufferMinutes,
          category: (
            serviceSeeds.find((item) => item.code === service.code)?.categorySlug ?? "general"
          )
        }
      });

      if (bookingSeed.subItemCodes?.length) {
        for (const subItemCode of bookingSeed.subItemCodes) {
          const subItem = await prisma.serviceSubItem.findUniqueOrThrow({
            where: { code: subItemCode }
          });

          await prisma.bookingRequestSubItem.create({
            data: {
              bookingRequestServiceId: bookingService.id,
              serviceSubItemId: subItem.id,
              subItemCode: subItem.code,
              subItemName: subItem.name,
              priceSnapshot: subItem.priceLkr,
              durationMinutes: subItem.durationMinutes,
              breakMinutes: subItem.breakMinutes
            }
          });
        }
      }

      await prisma.bookingStatusHistory.create({
        data: {
          bookingRequestId: bookingRequest.id,
          status: "SUBMITTED",
          note: "Seeded booking request for initial branch availability."
        }
      });
    }
  }

  console.log("Seed completed: branches, stylists, services, sub-items, and sample booking requests are ready.");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
