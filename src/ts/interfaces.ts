export interface ServiceDataProps {
  id?: string;
  title: string;
  desc: string;
  url: string;
  img: {
    src: string;
    alt: string;
    size: { w: number; h: number };
  };
}

export interface ProjectFace {
  _id: string;
  title: string;
  address: string;
  desc: string;
  date: string;
  projectType: string;
  status: "completed" | "ongoing";
  previewImages: string[];
}

export interface CertificateFace {
  _id: string;
  title: string;
  desc: string;
  name: string;
  certSrc: string;
  certId: string;
}

export interface TestimonialFace {
  _id: string; // MongoDB ObjectId as a string
  name: string;
  profession: string;
  message: string;
  rate: number; // Represents rating as a number (4.8 in the example)
  date: string; // ISO date string
  profile: string; // URL to the profile image
  email: string;
}

export interface CountryPhoneCode {
  name: string;
  dial_code: string;
  code: string;
}

export type Service_v2Face = {
  _id: string;
  title: string;
  description: string;
  category: string;
  type: string[];
};

export interface PaginationFace {
  totalProjects: number;
  totalPages: number;
  currentPage: number;
  limit: number;
}

export interface ContactFace {
  mail: string;
  primaryPhone: string;
  secondaryPhone: string;
  emergencyContact: string;
  address: {
    line1: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  };
  socialMedia: {
    facebook: string;
    instagram: string;
    linkedin: string;
  };
  meetingTime: {
    start: string;
    end: string;
  };
  meetingDays: string[];
  website: string;
  getFormattedMeetingTime: () => string;
}
