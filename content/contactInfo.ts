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
  email: "info@kpriyadharshinidrivingschool.in",
  phone: "+919842212345",
  phoneFormatted: "+91 98422 12345",
  whatsapp: "+919842212345",
  whatsappLink: "https://wa.me/919842212345?text=Hello,%20I%20am%20interested%20in%20booking%20a%20free%20demo%20driving%20class.",
  operatingHours: {
    weekdays: "Mon–Sat : 6:00 AM – 8:00 PM",
    weekdaysOpens: "06:00",
    weekdaysCloses: "20:00",
    sunday: "Sunday  : 8:00 AM – 2:00 PM",
    sundayOpens: "08:00",
    sundayCloses: "14:00",
  },
  branches: {
    main: {
      name: "Main Branch (Kovaipudur)",
      address: "24/A, Main Road, Kovaipudur, Coimbatore, Tamil Nadu 641042",
      locality: "Kovaipudur",
      region: "Tamil Nadu",
      postalCode: "641042",
      country: "IN",
      latitude: 10.9348,
      longitude: 76.9288,
      mapUrl: "https://maps.google.com/?q=K.Priyadharshini+Driving+School+Kovaipudur+Coimbatore",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.9463943033575!2d76.9266113!3d10.9348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8596b!2sKovaipudur%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1700000000000",
      phone: "+919842212345"
    },
    branch2: {
      name: "Branch 2 (Sivananda Colony)",
      address: "15, Sivananda Colony, Tatabad, Coimbatore, Tamil Nadu 641012",
      locality: "Sivananda Colony",
      region: "Tamil Nadu",
      postalCode: "641012",
      country: "IN",
      latitude: 11.0264,
      longitude: 76.9628,
      mapUrl: "https://maps.google.com/?q=K.Priyadharshini+Driving+School+Sivananda+Colony+Coimbatore",
      mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2758129037!2d76.9606!3d11.0264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ab!2sSivananda%20Colony%2C%20Coimbatore!5e0!3m2!1sen!2sin!4v1700000000001",
      phone: "+919842212345"
    }
  },
  socialLinks: {
    facebook: "https://facebook.com/kpriyadharshinidrivingschool",
    instagram: "https://instagram.com/kpriyadharshinidrivingschool",
  }
};
