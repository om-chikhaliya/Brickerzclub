import {
  BotMessageSquare,
  Fingerprint,
  ShieldHalf,
  BatteryCharging,
  PlugZap,
  GlobeLock,
} from "lucide-react";
import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Features", href: "#Features" },
  { label: "Workflow", href: "#Workflow" },
  { label: "Pricing", href: "#Pricing" },
  { label: "Testimonials", href: "#Testimonials" },
];

export const testimonials = [
  {
    user: "Alice Williams",
    company: "Blockchain Enterprises",
    image: user1,
    text: "The blockchain tools provided exceeded our expectations. The team's expertise enabled us to deploy secure smart contracts quickly and efficiently.",
  },
  {
    user: "Carlos Martinez",
    company: "Crypto Innovations",
    image: user2,
    text: "Working with this team was a game-changer for our decentralized app. Their innovative solutions and deep understanding of blockchain technology were crucial to our success.",
  },
  {
    user: "Sophia Lee",
    company: "Chain Solutions Inc.",
    image: user3,
    text: "The team helped us navigate the complexities of blockchain development with ease. Their attention to security and scalability set us up for long-term success.",
  },
  {
    user: "James Cooper",
    company: "DeFi Labs",
    image: user4,
    text: "We partnered with the team to build our blockchain platform, and they delivered outstanding results. Their technical expertise and commitment to quality are unparalleled.",
  },
  {
    user: "Olivia Harris",
    company: "SmartChain Technologies",
    image: user5,
    text: "I am thoroughly impressed by the blockchain solutions the team delivered. They made deploying our smart contracts straightforward and secure. I highly recommend them.",
  },
  {
    user: "Ethan Clark",
    company: "Ledger Innovations",
    image: user6,
    text: "From start to finish, the team was professional, knowledgeable, and dedicated. Thanks to their work, our blockchain project is now running smoothly and securely.",
  },
];

export const features = [
  {
    icon: BotMessageSquare,
    text: "Smart Contract Builder",
    description:
      "Easily create and deploy smart contracts with a user-friendly interface designed for efficiency.",
  },
  {
    icon: Fingerprint,
    text: "Multi-Chain Compatibility",
    description:
      "Build blockchain applications that run seamlessly across multiple blockchain networks, including Ethereum and Binance Smart Chain.",
  },
  {
    icon: ShieldHalf,
    text: "Pre-Built Templates",
    description:
      "Kickstart your blockchain projects with a variety of pre-built templates for different use cases.",
  },
  {
    icon: BatteryCharging,
    text: "Real-Time Testing",
    description:
      "Test your blockchain application in real-time as you develop, ensuring faster debugging and iterations.",
  },
  {
    icon: PlugZap,
    text: "Team Collaboration",
    description:
      "Collaborate with your team in real-time on blockchain projects, enabling seamless communication and productivity.",
  },
  {
    icon: GlobeLock,
    text: "Integrated Analytics",
    description:
      "Track and analyze transactions, smart contract performance, and user interactions with an integrated analytics dashboard.",
  },
];

export const checklistItems = [
  {
    title: "Seamless Code Integration",
    description:
      "Effortlessly integrate and manage smart contracts with automated version control and conflict resolution.",
  },
  {
    title: "Smart Contract Auditing",
    description:
      "Securely audit and review blockchain code for vulnerabilities, ensuring reliability before deployment.",
  },
  {
    title: "AI-Driven Optimization",
    description:
      "Utilize AI to optimize blockchain performance, enhancing scalability and reducing gas fees.",
  },
  {
    title: "Instant Code Deployment",
    description:
      "Deploy your smart contracts to the blockchain in minutes, with real-time collaboration and feedback.",
  },
];

export const pricingOptions = [
  {
    title: "Starter",
    price: "$0",
    features: [
      "Deploy up to 3 smart contracts",
      "5 GB Transaction History",
      "Basic Blockchain Analytics",
      "Testnet Access",
    ],
  },
  {
    title: "Developer",
    price: "$15",
    features: [
      "Deploy up to 10 smart contracts",
      "20 GB Transaction History",
      "Advanced Blockchain Analytics",
      "Mainnet Access",
    ],
  },
  {
    title: "Enterprise",
    price: "$500",
    features: [
      "Unlimited Smart Contract Deployments",
      "Unlimited Transaction History",
      "Priority Blockchain Network Access",
      "Dedicated Support & Custom Solutions",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Documentation" },
  { href: "#", text: "Tutorials" },
  { href: "#", text: "API Reference" },
  { href: "#", text: "Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Events" },
  { href: "#", text: "Meetups" },
  { href: "#", text: "Conferences" },
  { href: "#", text: "Hackathons" },
  { href: "#", text: "Jobs" },
];
