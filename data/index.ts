import { supabase } from "@/lib/supabase";

export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Making Own Ai powered Wallet App",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI-Powered SEO Optimization Platform",
    des: "An advanced AI-powered SEO platform built using Next.js, Supabase, Tailwind CSS, Framer Motion, and Shacdn, designed to elevate website visibility effortlessly. This project merges intelligent automation with user-friendly tools, providing businesses with seamless access to top-tier SEO strategies powered by AI. From optimized keyword targeting to real-time analytics, this platform streamlines SEO management to drive organic growth and boost online presence. Explore a new era of smart, intuitive, and impactful SEO.",
    img: "/ai-seo.png",
    iconLists: ["/re.svg", "/tail.svg", "/next.svg", "/fm.svg"],
    link: "https://ai-seo-landing-page-seven.vercel.app/",
  },
  {
    id: 2,
    title: "Anime Infinite Scroll: Dynamic API-Powered Experience with Next.js",
    des: "An immersive anime browsing experience featuring infinite scroll, powered by server actions in Next.js, and enhanced with Tailwind CSS and Framer Motion. This project leverages seamless API integration to provide users with a continuous and visually engaging feed of anime content.",
    img: "/anime-infinte-scroll.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/nextauth.png"],
    link: "https://anime-infinte-scroll.vercel.app/",
  },
  {
    id: 3,
    title:
      "Smart Invoice Manager: Next.js Powered Solution for Modern Businesses",
    des: "A streamlined invoice management app crafted with Next.js, Supabase, NextAuth, Tailwind CSS, and Framer Motion. This application provides a secure, efficient, and user-friendly experience for creating, tracking, and managing invoices, ideal for businesses looking to automate their billing process.",
    img: "/invoice-app.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/next.svg",
      "/ts.svg",
      "/nextauth.png",
    ],
    link: "https://invoice-app-pearl-alpha.vercel.app/",
  },
  {
    id: 4,
    title: "Real-Time Chat App: Secure and Interactive Messaging with Next.js",
    des: "A dynamic chat application built with Next.js, Supabase, NextAuth, Tailwind CSS, and Framer Motion, offering secure, real-time messaging. Designed with a focus on modern aesthetics and fluid animations, this app delivers an engaging and seamless chat experience.",
    img: "/best-chatting.png",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "https://best-chatting-app.vercel.app/",
  },
];

export const testimonials = [
  {
    quote:
      "Absolutely thrilled with the web development services provided by Akshay! He created an exceptional website for my e-commerce business that exceeded all expectations. As a freelance client, I found him professional, responsive, and highly skilled. Highly recommend Akshay for anyone seeking top-notch web development!",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Absolutely thrilled with the web development services provided by Akshay! He created an exceptional website for my e-commerce business that exceeded all expectations. As a freelance client, I found him professional, responsive, and highly skilled. Highly recommend Akshay for anyone seeking top-notch web development!",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Absolutely thrilled with the web development services provided by Akshay! He created an exceptional website for my e-commerce business that exceeded all expectations. As a freelance client, I found him professional, responsive, and highly skilled. Highly recommend Akshay for anyone seeking top-notch web development!",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Absolutely thrilled with the web development services provided by Akshay! He created an exceptional website for my e-commerce business that exceeded all expectations. As a freelance client, I found him professional, responsive, and highly skilled. Highly recommend Akshay for anyone seeking top-notch web development!",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
  {
    quote:
      "Absolutely thrilled with the web development services provided by Akshay! He created an exceptional website for my e-commerce business that exceeded all expectations. As a freelance client, I found him professional, responsive, and highly skilled. Highly recommend Akshay for anyone seeking top-notch web development!",
    name: "Michael Johnson",
    title: "Director of AlphaStream Technologies",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Frontend Engineer Intern",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Mobile App Dev - JSM Tech",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
  },
  {
    id: 3,
    title: "Freelance App Dev Project",
    desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
  },
  {
    id: 4,
    title: "Lead Frontend Developer",
    desc: "Developed and maintained user-facing features using modern frontend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    url: "https://github.com/akshayysuthar",
  },
  {
    id: 2,
    img: "/twit.svg",
    url: "https://x.com/akshayysuthar",
  },
  // {
  //   id: 3,
  //   img: "/link.svg",
  //   url: "https://github.com/akshayysuthar",
  // },
];
