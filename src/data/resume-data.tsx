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
    "Currently, I build anomaly detection, forecasting and agentic analysis systems for the Microsoft Ads marketplace. Previously solved logistics problems using optimization for a large beverage company, and worked on Deep Learning applications in material design and discovery. In my free time, I explore the world of start-ups, watch football, read, and solve cryptic sudokus like ",
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
      school: "Indian Institute of Technology Madras",
      link: "https://www.iitm.ac.in",
      degree: "Dual Degree: B.Tech. in Chemical Engineering & M.Tech. in Data Science (Minor: Systems Engineering), CGPA 9.01",
      start: "2017",
      end: "2022",
    },
  ],
  work: [
    {
      company: "Microsoft",
      link: "https://about.ads.microsoft.com/",
      badges: ["Microsoft Ads"],
      title: "Operational Data Scientist II",
      logo: MonitoLogo,
      start: "2024",
      end: "Now",
      description:
        "Part of the Microsoft Ads Live Marketplace team, building anomaly detection and automated analysis systems, and Live Marketplace owner of Bing Ads Japan (~$250M+ market). Built agentic workflows with reusable tools & skills to automate marketplace analysis and incident investigations. Developed Vantage, an end-to-end app to decompose variance-to-forecast and YoY revenue movements with AI-powered summarisation, saving 20+ analyst hours a week. Built a tool to tune over-firing alerts for a team handling 1500+ alerts a day, and trained time-series forecasting & anomaly-detection models on large-scale marketplace telemetry.",
    },
    {
      company: "Anheuser-Busch InBev",
      link: "https://www.ab-inbev.com/",
      badges: [],
      title: "Data Scientist",
      logo: ParabolLogo,
      start: "2022",
      end: "2024",
      description:
        "Logistics analytics for the Africa BU, driving value with a potential of $12M+ annually. Designed, developed and deployed an automated load optimization & scheduling engine for South Africa (MILP-based, near real-time stock swap recommendations) with potential savings of $10M+ annually. Also built a Route-to-market optimization engine for Botswana and a business case for closing a Distribution Centre.",
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
        "Built a ML framework to assess Credit Risk and determine optimal Credit Limits for India BU, reducing risk exposure by $7M annually. Developed a churn model for critical customers, potentially avoiding $1.2M loss. Received a Pre-Placement Offer.",
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
        "Helped increase the daily soap noodle production of the Santoor soap plant from 28 to 60 metric tonnes, running plant simulations & analysis to find the root cause of production inefficiency.",
    },
    {
      company: "Coca-Cola",
      link: "https://www.hccb.in/",
      badges: [],
      title: "Supply Chain Intern",
      logo: NSNLogo,
      start: "2019",
      end: "2019",
      description: "Recommended changes to the TMS app improving usage efficiency by 50%, and planned a mobility app deployment to cut Proof of Delivery time by 20 days.",
    },
  ],
  skills: [
    "Python",
    "PyTorch",
    "LLMs & Agents",
    "SQL",
    "KQL",
    "PuLP",
    "Time-Series Forecasting",
    "Anomaly Detection",
    "Mixed Integer Optimization",
    "Azure",
    "AI Assisted Development",
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
      description: "A Deep Learning Framework for Materials Property Prediction and Design Using QR Codes. Published in ACS Engineering Au, 2023.",
      logo: ConsultlyLogo,
      link: {
        label: "Paper Link",
        href: "https://doi.org/10.1021/acsengineeringau.3c00055",
      },
    },
    {
      title: "Bayesian Online Changepoint Detection",
      techStack: [
        "Bayesian Inference",
        "Time Series",
        "Recursive Least Squares",
      ],
      description: "Implemented BOCD to estimate generative-parameter changepoints in real time on well-drilling NMR time-series data, integrated with a recursive least squares model.",
      logo: MonitoLogo,
    },
  ],
} as const;
