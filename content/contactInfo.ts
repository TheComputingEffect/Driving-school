export interface BranchInfo {
  name: string;
  address: string;
  locality: string;
  region: string;
  postalCode: string;
  country: string;
  latitude: number;
  longitude: number;
  mapUrl: string;
  mapEmbedUrl: string;
  phone: string;
}

export interface ContactInfoType {
  businessName: string;
  email: string;
  phone: string;
  phoneFormatted: string;
  whatsapp: string;
  whatsappLink: string;
  operatingHours: {
    weekdays: string;
    weekdaysOpens: string;
    weekdaysCloses: string;
    sunday: string;
    sundayOpens: string;
    sundayCloses: string;
  };
  branches: {
    main: BranchInfo;
    branch2: BranchInfo;
  };
  socialLinks: {
    facebook?: string;
    instagram?: string;
    youtube?: string;
  };
}

export const contactInfo: ContactInfoType = {
  businessName: "K. Priyadharshini Driving School",
  email: "kpriyadharshinidrivingschool@gmail.com",
  phone: "+919843407878",
  phoneFormatted: "+91 98434 07878",
  whatsapp: "+919843407878",
  whatsappLink: "https://wa.me/919843407878?text=Hello,%20I%20am%20interested%20in%20enquiring%20about%20driving%20classes.",
  operatingHours: {
    weekdays: "Mon–Sat : 6:00 AM – 5:30 PM",
    weekdaysOpens: "06:00",
    weekdaysCloses: "17:30",
    sunday: "Sunday  : 8:00 AM – 2:00 PM",
    sundayOpens: "08:00",
    sundayCloses: "14:00",
  },
  branches: {
    main: {
      name: "Main Branch (Kovaipudur)",
      address: "Near TV Sekaran School, Kovaipudur, Coimbatore – 641042",
      locality: "Kovaipudur",
      region: "Tamil Nadu",
      postalCode: "641042",
      country: "IN",
      latitude: 10.947387,
      longitude: 76.934937,
      mapUrl: "https://www.google.com/maps/dir/11.0303932,76.9606784/10.947387,76.934937/@10.9476389,76.9345314,19.34z/data=!4m4!4m3!1m1!4e1!1m0?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D",
      mapEmbedUrl: "https://maps.google.com/maps?q=10.947387,76.934937&t=&z=15&ie=UTF8&iwloc=&output=embed",
      phone: "+919843407878"
    },
    branch2: {
      name: "Branch 2 (Sivananda Colony)",
      address: "15, Sivananda Colony, Tatabad, Coimbatore, Tamil Nadu 641012",
      locality: "Sivananda Colony",
      region: "Tamil Nadu",
      postalCode: "641012",
      country: "IN",
      latitude: 11.0245468,
      longitude: 76.9588406,
      mapUrl: "https://www.google.com/maps/dir/11.0303932,76.9606784/K.Priyadharshini+Driving+School,+bus+Stand,+Valluvar+St,+opposite+No.+5,+Sivananda+Colony,+Tatabad,+Coimbatore,+Tamil+Nadu+641012/@11.0231057,76.9577944,17z/data=!4m17!1m7!3m6!1s0x3ba859384c7f4ee3:0xf4b722a85bb6878c!2sK.Priyadharshini+Driving+School!8m2!3d11.0245468!4d76.9588406!16s%2Fg%2F11zgmf6ysh!4m8!1m1!4e1!1m5!1m1!1s0x3ba859384c7f4ee3:0xf4b722a85bb6878c!2m2!1d76.9588406!2d11.0245468?entry=ttu&g_ep=EgoyMDI2MDcwNy4wIKXMDSoASAFQAw%3D%3D",
      mapEmbedUrl: "https://maps.google.com/maps?q=11.0245468,76.9588406&t=&z=15&ie=UTF8&iwloc=&output=embed",
      phone: "+919345145678"
    }
  },
  socialLinks: {
    facebook: "https://facebook.com/kpriyadharshinidrivingschool",
    instagram: "https://instagram.com/kpriyadharshinidrivingschool",
  }
};
