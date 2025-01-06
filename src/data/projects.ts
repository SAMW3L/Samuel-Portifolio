import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "SuperMarket Management Platform",
    description: "A Supermarket platform built with React,Typescript, Node.js, and Mysql DB. Features include user authentication, product management, and payment integration.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    technologies: ["React", "Typescript", "Node.js","TailwindCSS", "Mysql DB", "Stripe"],
    githubUrl: "https://github.com/SAMW3L/SuperMarket_Management_System-v01.git",
    liveUrl: "https://super-market-management-system-v01.vercel.app/"
  },
  {
    id: 2,
    title: "A Modern School Website",
    description: "A Modern School Website with Studentsportal Parents portal for managing and monitoring Students Records at schools",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS", "MongoDB"],
    githubUrl: "https://github.com/SAMW3L/school-website-modified.git",
    liveUrl: "https://schoolwebsite-puce.vercel.app/"
  },
  {
    id: 3,
    title: "Tours and safari Booking Website",
    description: "A Modern School Website with Studentsportal Parents portal for managing and monitoring Students Records at schools",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&q=80",
    technologies: ["React", "TypeScript", "TailwindCSS","MongoDB"],
    githubUrl: "https://github.com/SAMW3L/RubabaAdventure.git",
    liveUrl: "https://rubaba-adventure.vercel.app/"
  },
  {
    id: 4,
    title: "Pharmacy Selling and Management System",
    description: "An AI-powered image generation tool that creates unique artwork based on text descriptions.",
    image: "https://media.istockphoto.com/id/1502426074/photo/male-and-female-pharmacists-in-pharmacy.jpg?s=612x612&w=is&k=20&c=pJizsdEp4fjjX9rKeRCpqbdhIHJzAdaAuGBir4sl4NI=",
    technologies: ["React", "TypeSript","JavaScript", "TailwindCSS"],
    githubUrl: "https://github.com/SAMW3L/PHarmPro-v1.git",
    liveUrl: "https://pharmpro-v1.vercel.app/"
  }
];