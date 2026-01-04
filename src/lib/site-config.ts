import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Forward Together',
  therapist: {
    name: 'Shelly Eisenstadt',
    credentials: 'LCSW',
  },
  contact: {
    phone: '770.609.7539',
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
  },
  simplePractice: {
    portalUrl: process.env.NEXT_PUBLIC_SIMPLEPRACTICE_PORTAL_URL,
    bookingUrl: process.env.NEXT_PUBLIC_SIMPLEPRACTICE_BOOKING_URL,
  },
};


