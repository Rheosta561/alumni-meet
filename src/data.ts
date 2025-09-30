import { Calendar, MapPin, Users, Mic, Music, Trophy, Medal, Star, Award as AwardIcon } from "lucide-react";

export const EVENT_NAME = "AlumniMeet2025";

// Event info
export const eventInfo = [
  { icon: MapPin, text: "Delhi Technological University Campus", color: "text-red-500" },
  { icon: Users, text: "Open to All DTU Alumni", color: "text-green-600" }
];

// Event highlights
export const highlights = [
  {
    title: "Keynote Speeches",
    description: "Hear from distinguished alumni and faculty as they share their journeys and insights.",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?auto=format&fit=crop&w=800&q=80",
    icon: Mic,
    iconColor: "text-yellow-300"
  },
  {
    title: "Networking Sessions",
    description: "Connect with fellow alumni, exchange ideas, and explore collaborations.",
    image: "https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80",
    icon: Users,
    iconColor: "text-green-300"
  },
  {
    title: "Cultural Performances",
    description: "Experience vibrant performances showcasing alumni and student talent.",
    image: "https://images.unsplash.com/photo-1521336575822-6da63fb45455?auto=format&fit=crop&w=800&q=80",
    icon: Music,
    iconColor: "text-red-300"
  }
];

// Event notification
export const eventNotification = {
  title: "Alumni Meet 2025",
  description: "Join us for the grand celebration of DTU alumni legacy. Reconnect with old friends, attend keynote sessions, and enjoy cultural performances!",
  tags: ["Networking", "Keynote", "Cultural"],
  buttonText: "Register Now",
  buttonRoute: "https://docs.google.com/forms/d/1HGD5vO27g_SzQK2DdD6SHfE8-nPUgYUK7rx4ECzVd9E/edit?ts=68da709f"
};

// Awards
export type Award = {
  title: string;
  description: string;
  icon: React.FC<any>;
  image: string;
  tags: string[];
  applyLink: string; // URL for Apply button
};

export const awards: Award[] = [
  {
    title: "Lifetime Achievement Award",
    description: "Honoring distinguished alumni with extraordinary contributions.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1511376777868-611b54f68947",
    tags: ["Prestige", "Honor", "Legacy"],
    applyLink: "https://docs.google.com/forms/d/1HGD5vO27g_SzQK2DdD6SHfE8-nPUgYUK7rx4ECzVd9E/edit?ts=68da709f"
  },
  {
    title: "Innovation Award",
    description: "Recognizing groundbreaking research and entrepreneurial success.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
    tags: ["Innovation", "Startups", "Tech"],
    applyLink: "https://docs.google.com/forms/d/1HGD5vO27g_SzQK2DdD6SHfE8-nPUgYUK7rx4ECzVd9E/edit?ts=68da709f"
  },
  {
    title: "Service Excellence Award",
    description: "Awarded for exceptional community service and leadership.",
    icon: Medal,
    image: "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca",
    tags: ["Leadership", "Service", "Impact"],
    applyLink: "https://docs.google.com/forms/d/1HGD5vO27g_SzQK2DdD6SHfE8-nPUgYUK7rx4ECzVd9E/edit?ts=68da709f"
  }
];

// About section data
export type Alumni = {
  name: string;
  role: string;
  image?: string;
};

export type LeadershipMessage = {
  title: string;
  message: string;
  image?: string;
};

export type LegacyStat = {
  icon: React.FC<any>;
  label: string;
  color: string;
};

// Alumni
export const alumniList: Alumni[] = [
  { name: "Alumni Name 1", role: "Founder / CEO", image: "" },
  { name: "Alumni Name 2", role: "Scientist / Researcher", image: "" },
  { name: "Alumni Name 3", role: "Entrepreneur", image: "" },
  { name: "Alumni Name 4", role: "Engineer", image: "" },
  { name: "Alumni Name 5", role: "Designer", image: "" }
];

// Leadership messages
export const leadershipMessages: LeadershipMessage[] = [
  { title: "Message from the Vice Chancellor", message: "We take immense pride in witnessing our alumni excel across the globe..." },
  { title: "Message from the Dean", message: "Our alumni are our greatest ambassadors..." }
];

// Legacy stats
export const legacyStats: LegacyStat[] = [
  { icon: Calendar, label: "Years of Tradition", color: "text-blue-600" },
  { icon: Users, label: "Thousands Reconnected", color: "text-green-600" },
  { icon: AwardIcon, label: "Legends Honoured", color: "text-yellow-600" }
];
