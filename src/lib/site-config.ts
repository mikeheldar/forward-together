import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Forward Together',
  therapist: {
    name: 'Shelly Eisenstadt',
    credentials: 'LCSW, PMH-C',
  },
  contact: {
    phone: '404-793-6419',
    email: 'shelly@forwardtogetherga.com',
    address: {
      street: '5775 Glenridge Drive, Building B, Suite 310',
      city: 'Atlanta',
      state: 'GA',
      zip: '30328-5380',
    },
    locationName: 'Marietta, GA',
  },
  pricing: {
    individualSession: 165,
    coupleSession: 200,
  },
  city: 'Marietta',
  psychologyTodayUrl: 'https://www.psychologytoday.com/us/therapists/shelly-eisenstadt-marietta-ga/1115290',
  freeConsultation: 'free 15-minute consultation',
  simplePractice: {
    portalUrl: process.env.NEXT_PUBLIC_SIMPLEPRACTICE_PORTAL_URL,
    bookingUrl: process.env.NEXT_PUBLIC_SIMPLEPRACTICE_BOOKING_URL,
  },
};


