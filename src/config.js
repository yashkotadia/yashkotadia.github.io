module.exports = {
  siteTitle: 'Yash Kotadia | Computer Science Grad Student',
  siteDescription:
    'Yash is a computer science graduate student who is trying to solve real-life problem coding one line at a time.',
  siteKeywords:
    'yash kotadia',
  siteUrl: 'https://yashkotadia.github.io',
  siteLanguage: 'en_US',
  name: 'Yash Kotadia',
  location: 'Tempe, AZ',
  email: 'yashkotadia@gmail.com',
  github: 'https://github.com/yashkotadia',
  twitterHandle: '@yashbrats',
  socialMedia: [
    {
      name: 'GitHub',
      url: 'https://github.com/yashkotadia',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/yash-kotadia/',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/yashbrats',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,

  colors: {
    green: '#64ffda',
    navy: '#0a192f',
    darkNavy: '#020c1b',
  },

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};
