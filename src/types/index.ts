export interface Service {
  id: string;
  name: string;
  category?: string;
  description?: string;
}

export interface TherapeuticApproach {
  id: string;
  name: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  rating?: number;
}

export interface ContactInfo {
  phone: string;
  email: string;
  address: {
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  locationName: string;
}

export interface SiteConfig {
  name: string;
  therapist: {
    name: string;
    credentials: string;
  };
  contact: ContactInfo;
  pricing: {
    individualSession: number;
  };
  simplePractice?: {
    portalUrl?: string;
    bookingUrl?: string;
  };
}


