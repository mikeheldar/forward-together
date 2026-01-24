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
  },
  {
    id: 'sarah-l',
    quote: 'The therapy sessions helped me navigate grief and find peace. Truly a supportive environment for healing.',
    author: 'Sarah L.',
    rating: 5,
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
    id: 'what-is-therapy',
    question: 'What is therapy?',
    answer: 'Therapy is a collaborative process where you work with a trained professional to explore your thoughts, feelings, and behaviors in a safe, confidential environment. It provides support, guidance, and tools to help you navigate life\'s challenges and achieve your personal goals.',
  },
  {
    id: 'how-long-are-sessions',
    question: 'How long are therapy sessions?',
    answer: 'Individual therapy sessions typically last 50-60 minutes. The frequency of sessions depends on your needs and goals, and we\'ll work together to determine what works best for you.',
  },
  {
    id: 'do-you-take-insurance',
    question: 'Do you accept insurance?',
    answer: 'I am an out-of-network provider. This means I don\'t directly bill insurance companies, but I can provide you with a superbill that you can submit to your insurance for potential reimbursement. Please check with your insurance provider about your out-of-network mental health benefits.',
  },
  {
    id: 'what-is-good-faith-estimate',
    question: 'What is a Good Faith Estimate?',
    answer: 'Under the No Surprises Act, you have the right to receive a Good Faith Estimate of what your services may cost. This estimate will be provided before your first session and will outline the expected costs of your treatment.',
  },
  {
    id: 'how-do-i-get-started',
    question: 'How do I get started?',
    answer: 'You can request an appointment through the Client Portal or by contacting me directly. We\'ll start with an initial consultation to discuss your needs and determine if we\'re a good fit for working together.',
  },
  {
    id: 'telehealth-available',
    question: 'Are telehealth sessions available?',
    answer: 'Yes! I offer both in-person sessions at my Atlanta office and virtual telehealth sessions for clients across Georgia. Telehealth sessions are conducted via a secure, HIPAA-compliant platform.',
  },
];

export const legalNotices = {
  noSurprisesAct: 'You have the right to receive a Good Faith Estimate of what your services may cost.',
  emergencyDisclaimer: 'THE CLIENT PORTAL IS NOT TO BE USED FOR EMERGENCY SITUATIONS. IF YOU OR OTHERS ARE IN IMMEDIATE DANGER OR EXPERIENCING A MEDICAL EMERGENCY, CALL 911 IMMEDIATELY.',
};


