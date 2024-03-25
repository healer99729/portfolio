import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  olympus,
  enjin,
  decormatters,
  epic,
  carrent,
  blitz,
  jobit,
  engin,
  doghouse,
  olympusDao,
  threejs,
  epal,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Blockchain Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Blockchain & Web3 Engineer",
    company_name: "Olympus DAO",
    icon: olympus,
    iconBg: "#000000",
    date: "Jun 2022 - April 2023",
    points: [
      "Took part in the development of the Olympus Pro smart contract development.",
      "Responsible for treasury management logic and api integration for backend apis.",
      "Developed the framework to support the partner's governance process",
      "Collaborated closely with the frontend team, providing technical support and assistance as needed.",
      "Architected a framework to streamline our partner's governance process."
    ],
  },
  {
    title: "Senior Frontend & Blockchain Developer",
    company_name: "Enjin",
    icon: enjin,
    iconBg: "#383E56",
    date: "May 2019 - March 2021",
    points: [
      "Contributed 20+ projects such as health care articles feed web app, Cryptocurrency, Smart Contract.",
      "Built front-end UI/UX using React, Vue and Redux and created back-end services using the Django Framework and Node.js.",
      "Implemented full-text search of articles using Elasticsearch over 100,000 data points",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Build the Crypto exchange module with a Software Engineering team and cut down paperwork by 70%.",
    ],
  },
  {
    title: "Fronend Developer",
    company_name: "Decormatters",
    icon: decormatters,
    iconBg: "#E6DEDD",
    date: "June 2017 - April 2019",
    points: [
      "Contributed over 20+ projects using React, React Native, Ember.js, and Node.js with both of JavaScript and TypeScript.",
      "Developed smart contracts for testing new blockchain features that drove $50000 in product sales.",
      "Worked mostly with startups, in small teams, and involved in all of the project lifecycle phases leading to 25% increase in development.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Epic Games",
    icon: epic,
    iconBg: "#E6DEDD",
    date: "June 2016 - May 2017",
    points: [
      "Developed and maintained over 15+ back-end applications using Python/Django, MySQL, Redis,MongoDB, Google Firebase and several other technologies.",
      "Integrated a back-end application with external API to import data for products by their barcodes; improved user count by more than 45%.",
      "Added a Hot module replacement plugin to Webpack, saving 20 hours per week of development.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Kyrylo proved me wrong.",
    name: "Randy Gelber",
    designation: "CFO",
    company: "Epic Games",
    image: "https://randomuser.me/api/portraits/men/23.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Kyrylo does.",
    name: "Xiaodan Liu",
    designation: "COO",
    company: "Decormatter INC",
    image: "https://randomuser.me/portraits/women/2.jpg",
  },
  {
    testimonial:
      "After Kyrylo optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Steven Joe",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/men/50.jpg",
  },
];

const projects = [
  {
    name: "Epic Games",
    tags: [
      {
        name: "ReactJS Django",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    websiteLink: "https://fortnite.com",
  },
  {
    name: "Blitz",
    tags: [
      {
        name: "ReactJS NodeJS",
        color: "blue-text-gradient",
      },
    ],
    image: blitz,
    websiteLink: "https://www.blitz.gg",
  },
  {
    name: "Epal",
    tags: [
      {
        name: "ReactJS Firebase",
        color: "blue-text-gradient",
      },
    ],
    image: epal,
    websiteLink: "https://www.epal.gg/",
  },
  {
    name: "Decormatters",
    tags: [
      {
        name: "ReactJS Django GraphQL AWS",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    websiteLink: "https://decormatters.com",
  },
  {
    name: "Enjin",
    tags: [
      {
        name: "VueJS Solana",
        color: "blue-text-gradient",
      },
    ],
    image: engin,
    websiteLink: "https://enjin.io",
  },
  {
    name: "Olympus DAO",
    tags: [
      {
        name: "Smart-Contract Web3 Audit",
        color: "blue-text-gradient",
      },
    ],
    image: olympusDao,
    websiteLink: "https://www.olympusdao.finance/",
  },
  {
    name: "Doghouse",
    tags: [
      {
        name: "FastAPI WebGL Unity",
        color: "blue-text-gradient",
      },
    ],
    image: doghouse,
    websiteLink: "https://www.pragmaticplay.com/en/games/the-dog-house-slot/",
  },
];

export { services, technologies, experiences, testimonials, projects };
