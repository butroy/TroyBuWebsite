import { Project } from '@/types';

export const projects: Project[] = [
  {
    title: 'Comprehensive Review on Vagus Nerve Stimulation (VNS)',
    description:
      'First-authored a landmark systematic review on Vagus Nerve Stimulation, synthesizing extensive clinical and preclinical evidence to create the field\'s most comprehensive analysis and establish an evidence-based roadmap for future research and treatment protocols',
    tags: ['Bioelectronics Medicine', 'Vagus Nerve Stimulation', 'Comprehensive Review','Physiology'],
    image: '/images/projects/vns-review.png',
    timeline: '2025 – 2026',
    featured: true,
  },
  {
    title: 'Roadmap for the Next Generation of Bioelectronic Medicine',
    description:
      'Co-proposed technical framework for next-generation bioelectronic medicine, establishing non-invasive closed-loop neuromodulation approaches for mental health and inflammation diagnostics and precision treatment via autonomic nervous system monitoring',
    tags: ['Bioelectronic Medcine', 'Closed-Loop Neuromodulation','Neuro-Immune Diagnostics'],
    image: '/images/projects/closed-loop-neuromodulation.png',
    timeline: '2024 – 2025',
    featured: true,
  },
  {
    title: 'Magnetoencephalography (MEG) Based Brain-Computer Interface (BCI)',
    description:
      'Developed MEG-RPSnet deep learning model achieving 86% accuracy in decoding hand gestures from noninvasive brain imaging data, matching invasive electrocorticography (ECoG) performance',  
    tags: ['Magnetoencephalography (MEG)', 'BCI', 'Signal Processing','Deep Learning'],
    image: '/images/projects/meg-bci.png',
    timeline: '2022 – 2023',
    featured: true,
  },
  {
    title: 'Cardiac Disease Detection using AI Models',
    description:
      'Mentored graduate students to design deep learning models to classify cardiovascular disease from >800,000 ECG recording, reaching 97% accuracy',  
    tags: ['Cardiovascular Dieseases', 'Mentorship', 'Signal Processing','Deep Learning'],
    image: '/images/projects/cardiac.png',
    timeline: '2024 – 2025',
    featured: false,
  },
  {
    title: 'PTSD Evaluation from Physiological Features and Biomarkers',
    description:
      'Mentoring graduate students to design deep learning models to classify PTSD likelihood after battlefield deployment, providing a more objective evaluation',  
    tags: ['PTSD', 'Mentorship', 'Deep Learning'],
    image: '/images/projects/PTSD.png',
    timeline: '2025 – 2026',
    featured: false,
  },
  {
    title: 'A Bedside Vital Sign Remote Monitoring Device',
    description:
      'Built a bedside vital sign monitoring device that can monitor live heart rate, ANG, and beat-to-beat heart rate variability (HRV) remotely',
    tags:['Signal Processing','Heart Rate Variability','Device Design','Wireless Communication','GUI Design'],
    image: '/images/projects/bedside-monitoring.png',
    timeline: '2023',
    featured: false,
  },
  {
    title: 'Qualcomm Institute Artificial Intelligence Program Instructor',
    description:
      'Instructed biannual AI Development Project for 100+ undergraduates from 9 top universities in South Korean on machine learning algorithms, big data analysis, and applied AI through supervised team projects',
    tags: ['Mentorship', 'Machine Learning', 'AI','Big Data Analysis'],
    image: '/images/projects/qi-ai-program.jpg',
    timeline: '2022 – 2024',
    featured: true,
  },
  {
    title: 'Spasticity Assessment Though Engineering Technology',
    description:
      'Developed an instrumented glove for objective spasticity assessment—a project that fundamentally shaped my understanding of how engineering can directly translate into improved patient outcomes',
    tags: ['Machine Learning', 'Patient-focus'],
    image: '/images/projects/splasticity.png',
    timeline: '2017-2019',
    featured: false,
  },
  {
    title: 'One-Person Food Service',
    description:
      'Solo-operated lunch service handling ingredient sourcing, cooking, delivery, and accounting end-to-end, all while managing academic commitments',
    tags: ['Entrepreneurship', 'Operations Management','Self-reliance','Cooking'],
    image: '/images/projects/food-business.png',
    timeline: '2014-2016',
    featured: true,
  },
  {
    title: 'Local Food Delivery Business and LAX Shuttle Service',
    description:
      'Co-founded Feidish Inc, one of the earlist food delivery service (similar to doordash) in the region; run LAX shuttle service during breaks',
    tags: ['Entrepreneurship','Commercial Negotiation ','Operations Management','Self-reliance','Team Managment'],
    image: '/images/projects/feidish.png',
    timeline: '2015-2016',
    featured: false,
  },
  {
    title: 'Coming-of-Age Challenge: Biking 650 miles in 5 Days at 18',
    description:
      'Rode 650 miles solo over five days including moutain terrian, using only a compass and a map for navigation',
    tags: ['Problem Solving', 'Adventure','Uncertainty Adaptation'],
    image: '/images/projects/bike.png',
    timeline: '2013',
    featured: true,
  },
];
