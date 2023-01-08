const projects = [
  {
    id: 0,
    name: 'Every Daisy of the Week',
    date: 'July 2022',
    type: 'E-Commerce Website',
    description: `Shop specializing in pet-friendly houseplants`,
    role: 'Full Stack Developer, Backend Specialist',
    tech: [
      'Stripe',
      'React / Redux',
      'Express',
      'Sequelize',
      'PostgreSQL',
      'Bootstrap',
      'Javascript'
    ],
    deployed: 'https://every-daisy.onrender.com/',
    github: 'https://github.com/Sassy-Software-Engineers/Grace-Shopper',
    screenshot: ''
  },
  {
    id: 1,
    name: 'Matrix Synth',
    date: 'August 2022 - Present',
    type: 'Personal Interest Project',
    description: `Web synthesizer and matrix sequencer`,
    role: 'Solo Developer',
    tech: ['React / Redux', 'Tone.js', 'Javascript'],
    deployed: 'https://noellehuchette.github.io/matrixsynth/',
    github: 'https://github.com/noellehuchette/matrixsynth',
    screenshot: ''
  },
  {
    id: 2,
    name: 'Webby',
    date: 'August 2022',
    type: 'Social Networking Website',
    description: `Hobby-centric social network`,
    role: 'Full Stack Developer, Frontend Specialist',
    tech: [
      'React / Redux',
      'Firebase',
      'D3',
      'Geoapify',
      'MaterialUI',
      'Javascript'
    ],
    deployed: 'https://webby-social.netlify.app/',
    github: 'https://github.com/THEM-exclamationpoint/Webby',
    screenshot: ''
  }
];

export default projects.reverse();
