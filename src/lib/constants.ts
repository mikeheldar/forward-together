import { Service, TherapeuticApproach, Testimonial } from '@/types';

export const services: Service[] = [
  { id: 'infertility', name: 'Infertility' },
  { id: 'life-transitions', name: 'Life Transitions' },
  { id: 'postpartum-depression', name: 'Postpartum Depression' },
  { id: 'pregnancy-prenatal-postpartum', name: 'Pregnancy, Prenatal, Postpartum' },
  { id: 'womens-health', name: "Women's Health" },
  { id: 'womens-issues', name: "Women's Issues" },
  { id: 'anxiety', name: 'Anxiety' },
  { id: 'depression', name: 'Depression' },
  { id: 'college-mental-health', name: 'College Mental Health' },
  { id: 'parenting', name: 'Parenting' },
  { id: 'aging', name: 'Aging' },
  { id: 'attachment-issues', name: 'Attachment Issues' },
  { id: 'brain-injury-concussions', name: 'Brain Injury/Concussions' },
  { id: 'family-conflict', name: 'Family Conflict' },
  { id: 'mindfulness', name: 'Mindfulness' },
  { id: 'perfectionism', name: 'Perfectionism' },
  { id: 'separation-anxiety', name: 'Separation Anxiety' },
  { id: 'work-stress', name: 'Work Stress' },
];

export const serviceCategories = {
  'Maternal Mental Health': [
    'pregnancy-prenatal-postpartum',
    'postpartum-depression',
    'parenting',
  ],
  'Women\'s Health': [
    'womens-health',
    'womens-issues',
    'infertility',
  ],
  'Mental Health': [
    'anxiety',
    'depression',
    'college-mental-health',
  ],
  'Life Challenges': [
    'life-transitions',
    'work-stress',
    'aging',
    'family-conflict',
  ],
  'Specialized Support': [
    'attachment-issues',
    'brain-injury-concussions',
    'mindfulness',
    'perfectionism',
    'separation-anxiety',
  ],
};

export const therapeuticApproaches: TherapeuticApproach[] = [
  { id: 'behavioral', name: 'Behavioral Therapy' },
  { id: 'cbt', name: 'Cognitive Behavioral Therapy (CBT)' },
  { id: 'compassion-focused', name: 'Compassion Focused' },
  { id: 'emotionally-focused', name: 'Emotionally Focused' },
  { id: 'supportive', name: 'Supportive Therapy' },
  { id: 'culturally-sensitive', name: 'Culturally Sensitive' },
  { id: 'interpersonal', name: 'Interpersonal' },
];

export const testimonials: Testimonial[] = [
  {
    id: 'emily-r',
    quote: 'Forward Together has been a lifesaver for my postpartum anxiety. Highly recommend Shelly for compassionate support!',
    author: 'Emily R.',
    rating: 5,
    image: '/images/IMG_2286.jpeg',
  },
  {
    id: 'sarah-l',
    quote: 'The therapy sessions helped me navigate grief and find peace. Truly a supportive environment for healing.',
    author: 'Sarah L.',
    rating: 5,
    image: '/images/IMG_2281.jpeg',
  },
];

export const aboutContent = {
  heading: 'Grounded in Compassion. Guided by Connection. Focused on Your Growth.',
  text: 'Welcome. I\'m glad you\'re here! Whether you\'re feeling overwhelmed, navigating a life transition, or simply curious about therapy, you don\'t have to face it alone. I offer a compassionate, collaborative space where you can feel heard, supported, and empowered to grow. I specialize in working with individuals experiencing anxiety, depression, and life stress, with a special focus on supporting women through pregnancy, postpartum, and the many phases of motherhood. You deserve care that\'s grounded in authenticity, empathy, and real connection. Let\'s take the first step forward—together.',
};

export const heroContent = {
  heading: 'Therapy for Women. Support for Every Stage.',
  subheading: 'Our practice offers compassionate, expert care for women navigating anxiety, motherhood, and life\'s transitions in a space that feels safe, grounded, and deeply supportive.',
  features: [
    'Offers Telehealth',
    'Appointments',
    'Accepts Online Payments',
  ],
};

export const faqItems = [
  {
    id: 'do-you-accept-insurance',
    question: 'Do you accept insurance?',
    answer: 'We are out-of-network for most insurance plans but provide superbills to help with reimbursement. Contact your provider to verify coverage.',
  },
  {
    id: 'is-therapy-confidential',
    question: 'Is therapy confidential?',
    answer: 'Yes, your privacy is protected by law. Exceptions apply only when safety concerns arise, which we will discuss in your first session.',
  },
  {
    id: 'how-much-does-therapy-cost',
    question: 'How much does therapy cost?',
    answer: 'Our standard fee is $165 per 50-minute session. Sliding scale options may be available.',
  },
  {
    id: 'what-form-of-payment',
    question: 'What form of payment do you accept?',
    answer: "We accept credit/debit cards, HSA/FSA cards, Apple Pay, and Google Pay. Payment is due at the time of each session. We'll keep a secure card on file through our HIPAA-compliant platform for convenience.",
  },
  {
    id: 'what-to-expect-first-session',
    question: 'What can I expect during my first session?',
    answer: 'Your first appointment is a chance to discuss your goals, ask questions, and establish a plan. The pace is set by you in a safe, supportive environment.',
  },
  {
    id: 'telehealth-available',
    question: 'Are telehealth sessions available?',
    answer: 'Yes! I offer both in-person sessions at my Atlanta office and virtual telehealth sessions for clients across Georgia. Telehealth sessions are conducted via a secure, HIPAA-compliant platform.',
  },
  {
    id: 'what-is-good-faith-estimate',
    question: 'What is a Good Faith Estimate?',
    answer: 'Under the No Surprises Act, you have the right to receive a Good Faith Estimate of what your services may cost. This estimate will be provided before your first session and will outline the expected costs of your treatment.',
  },
];

export const legalNotices = {
  noSurprisesAct: 'You have the right to receive a Good Faith Estimate of what your services may cost.',
  emergencyDisclaimer: 'THE CLIENT PORTAL IS NOT TO BE USED FOR EMERGENCY SITUATIONS. IF YOU OR OTHERS ARE IN IMMEDIATE DANGER OR EXPERIENCING A MEDICAL EMERGENCY, CALL 911 IMMEDIATELY.',
};


