import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon, GoodreadsIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Raj Jain",
  initials: "RJ",
  location: "Bengaluru, India, IST",
  locationLink: "https://www.google.com/maps/place/Bengaluru",
  about:
    "👋Hi, There!",
  summary:
    "Currently, I solve operations problems using data for a large beverage company. Previously worked on Deep Learning applications in material design and discovery. In my free time, I explore the world of start-ups, watch football, read, and solve cryptic sudokus like ",
  avatarUrl: "https://avatars.githubusercontent.com/u/125467983?v=4",
  personalWebsiteUrl: "",
  contact: {
    email: "imrajjain2109@gmail.com",
    tel: "",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/imrajjain",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/imrajjain/",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/jainRajma",
        icon: XIcon,
      },
      {
        name: "Goodreads",
        url: "https://www.goodreads.com/user/show/55855190-raj-jain",
        icon: GoodreadsIcon,
      }
    ],
  },
  education: [
    {
      school: "Indian Institue of Technology Madras",
      link: "https://www.iitm.ac.in",
      degree: "Bachelor's Degree in Chemical Engineering,\nMaster's in Data Science",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Anheuser-Busch InBev",
      link: "https://www.ab-inbev.com/",
      badges: [],
      title: "Data Scientist",
      logo: ParabolLogo,
      start: "2022",
      end: "Now",
      description:
        "Designed & Developed multiple solutions to optimize cost in the logistics space in Africa, resulting in $10M+ savings annually. Projects: Load Optimization Engine, Supply Chain Network Design, Fleet Resource Management.",
    },
    {
      company: "Anheuser-Busch InBev",
      link: "https://www.ab-inbev.com/",
      badges: [],
      title: "Data Science Intern",
      logo: ClevertechLogo,
      start: "2021",
      end: "2021",
      description:
        "Built a ML framework to assess the Credit Risk and determine optimal Credit Limits for India BU, Optimized credit limits to reduce risk exposure by $ 7M annually.",
    },
    {
      company: "Wipro Consumer Care",
      link: "https://wiproconsumercare.com/brands-india/",
      badges: [],
      title: "Process Engineer Intern",
      logo: JojoMobileLogo,
      start: "2020",
      end: "2020",
      description:
        "Worked on increasing the daily soap noodle production of CVSP1 plant from 28 to 60 metric tonnes, Ran plant simulations & analysis to find out the root cause and bottlenecks to be replaced.",
    },
    {
      company: "Coca-Cola",
      link: "https://www.hccb.in/",
      badges: [],
      title: "Supply Chain Intern",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description: "Worked on deploying an internal transport management app by conducting user research and UI improvements.",
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "Tensorflow",
    "MLFlow",
    "Keras",
    "Pandas",
    "MATLAB",
    "Adobe Illustrator",
  ],
  projects: [
    {
      title: "QRChEM",
      techStack: [
        "Deep Neural Nets",
        "AutoEncoders",
        "Molecular Modeling",
        "Conv Nets",
      ],
      description: "A Deep Learning Framework for Materials Property Prediction and Design Using QR Codes",
      logo: ConsultlyLogo,
      link: {
        label: "Paper Link",
        href: "https://doi.org/10.1021/acsengineeringau.3c00055",
      },
    }, 
  ],
} as const;
