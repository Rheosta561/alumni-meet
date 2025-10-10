import { Calendar, MapPin, Users, Mic, Music, Trophy, Medal, Star, Award as AwardIcon } from "lucide-react";


import dean from "./assets/img/dean.jpg"
import mahesh from "./assets/img/Events/HomeComing2022.png"
export const EVENT_NAME = "AlumniMeet2025";



// Event info
export const eventInfo = [
  { icon: MapPin, text: "Delhi Technological University Campus", color: "text-red-500" },
  { icon: Users, text: "Open to All DTU Alumni", color: "text-green-600" }
];

// Event highlights
import connect from "./assets/img/connect.jpg"
export const highlights = [
  {
    title: "Keynote Speeches",
    description: "Hear from distinguished alumni and faculty as they share their journeys and insights.",
    image: mahesh,
    icon: Mic,
    iconColor: "text-yellow-300"
  },
  {
    title: "Networking Sessions",
    description: "Connect with fellow alumni, exchange ideas, and explore collaborations.",
    image: connect,
    icon: Users,
    iconColor: "text-green-300"
  },
  {
    title: "Cultural Performances",
    description: "Experience vibrant performances showcasing alumni and student talent.",
    image: "https://www.dtu.ac.in/Web/programme/engifest2020/photo/img10.JPG",
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
  buttonRoute: "https://forms.gle/Vi5FaFvsWkQkpW9g7"
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
    description: "Honoring alumni with sustained excellence and significant lifetime contributions to society.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1485217988980-11786ced9454", // Golden honor moment
    tags: ["Prestige", "Honor", "Legacy"],
    applyLink: "https://forms.gle/Vi5FaFvsWkQkpW9g7"
  },
  {
    title: "Distinguished Alumni Award",
    description: "Recognizing alumni with outstanding achievements in Industry, Government, Academia, or International Impact.",
    icon: Star,
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216", // Professional success
    tags: ["Excellence", "Recognition", "Impact"],
    applyLink: "https://forms.gle/Vi5FaFvsWkQkpW9g7"
  },
  {
    title: "Young Alumni Award",
    description: "Celebrating exceptional alumni under 35 for leadership, innovation, and early career achievements.",
    icon: Medal,
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4", // Young achiever
    tags: ["Youth", "Leadership", "Innovation"],
    applyLink: "https://forms.gle/Vi5FaFvsWkQkpW9g7"},
  {
    title: "Global Impact Award",
    description: "For alumni whose contributions have made a significant difference at an international scale.",
    icon: AwardIcon,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee", // Global change
    tags: ["Global", "Change Maker", "Humanity"],
    applyLink: "https://forms.gle/Vi5FaFvsWkQkpW9g7"},
  {
    title: "Alumni Fellow Award",
    description: "Recognizing outstanding service and commitment towards the DCE-DTU community.",
    icon: Users,
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786", // Team/community spirit
    tags: ["Service", "Community", "Commitment"],
    applyLink: "https://forms.gle/Vi5FaFvsWkQkpW9g7"},
  {
    title: "Alumni Innovation Award",
    description: "Honoring groundbreaking innovations that demonstrate exceptional creativity and real-world impact.",
    icon: Mic,
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c", // Futuristic innovation
    tags: ["Innovation", "Technology", "R&D"],
    applyLink: "https://forms.gle/Vi5FaFvsWkQkpW9g7" },
  {
    title: "Alumni Entrepreneurial Award",
    description: "Recognizing bold entrepreneurial ventures that demonstrate vision, success, and leadership.",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978", // Startup leadership
    tags: ["Entrepreneurship", "Startups", "Leadership"],
    applyLink: "https://forms.gle/Vi5FaFvsWkQkpW9g7"
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
// alumnis 
import raghavJoshi from "./assets/img/new/Raghav Joshi.jpeg"
import sanjayBrahmawar from "./assets/img/new/Sanjay Brahmawar.jpg"
import prateekSharma from "./assets/img/vc.jpg"
import sushantSingh from "./assets/img/new/Sushant Singh Rajput.jpg"
import divyaGarg from "./assets/img/new/Divya Garg.jpg"
import rashmiDaga from "./assets/img/new/Rashmi Daga.jpg"
import sudhirMalhotra from "./assets/img/new/Sudhir Malhotra.jpg"
export const alumniList: Alumni[] = [
  {name : "Vijay Shekhar Sharma", role : "Founder (Paytm)", image: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcSB704gUhazzShMbrquLRzOz2ZWC5gseDvVvQM9cTwN4H4AdTH-OJAhFzIlzA2tGBfH1QDjNyGjy-DKR-oKwv_ZxqvqqdupzbkGf7j5oEB9"},
  { name: "Varun Alagh", role: "Co-Founder (MamaEarth)", image: "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcR46OdKZzy3vXDCcLo2EUKEEJ_6SALqaBQ79jd_655JfL6Z04Z3vnyy3uvdpxqebJa0tCQ7zQ6sFL0QXak6wHZtRxtvXdS9OsHoyUjsyXgH" },
  
  {name : "Sanjay Brahmawar", role : "CEO (QAD)", image: sanjayBrahmawar},
  {name : "Vyomika Singh ", role : "Wing Commander (Indian Air Force)", image: "https://i.pinimg.com/1200x/87/ab/37/87ab37500d83523e3bcf3561d529dcf2.jpg"},

  { name: "Raghav Joshi", role: "Co-Founder (Rebel Foods)", image: raghavJoshi },
  { name: "Prof. Prateek Sharma", role: "Vice Chancellor(DTU)", image: prateekSharma },
{name : "Sushant Singh Rajput", role : "Actor", image: sushantSingh},
  { name: "Divya Garg", role: "Head of HR (Uber)", image: divyaGarg },
  { name: "Rashmi Daga", role: "CEO (FreshMenu)", image: rashmiDaga },
  {name : "Sudhir Malhotra ", role:"Vice President (Renault India)" , image : sudhirMalhotra}
  
];

// Leadership messages
export const leadershipMessages: LeadershipMessage[] = [
  { 
    image : "https://dtu.ac.in/Web/Administrations/Images/vc_ps_n.jpg",
    title: "Message from the Vice Chancellor", 
    message: `Greetings from Delhi Technological University!
It gives me immense pleasure to launch the Alumni Affairs Portal of DTU as a platform that will bring together, strengthen and unify our alumni fraternity across the world. Since its establishment in 1941, DTU (then Delhi Polytechnic) has grown to become India's flagship, research-driven University, known for the excellence of its teaching, its research, co-curricular activities and its service to local, national and international communities.
I firmly believe that with the support of the alumni members of this prestigious institute, we shall achieve the further success in the fields of placements, research, sports and in many activities. This portal will enable us to connect our illustrious alumni to their Alma Mater.
We look forward to welcoming you to the Delhi Technological University` 
  },
  { 
    image: dean,
  title: "Message from the Dean", 
  message: `It is my pleasure to welcome you to the "Alumni Affairs" section of our website, where you will feel right at home. This section will keep you up to date with alumni events conducted by the University.
My firm believes that alumni are the backbone and flag bearers of any institution and in this respect DTU, erstwhile Delhi College of Engineering, has produced innumerable stalwarts and illustrious alumni who have played a significant role in the betterment of society across the globe. Many of you hold key positions of major influence in the society; I would like to appreciate your efforts being done for the development of our society and justifying the time spent by you at this esteemed institution. I am tremendously proud of what all you have been accomplishing for yourself and for your organization. We are really proud of how you and the Institute have grown in all these years. Today, your success has played an integral role in raising DP-DCE-DTU's reputation to where it is now and crossing all geographical boundaries. This platform will also try to bridge the gap between the student community and the alumni community. I hope this platform will bring fruitful results for both the Alma mater and the Alumni Community.
We look forward to your continued success and support to alma mater..` 
}

];


// Legacy stats
export const legacyStats: LegacyStat[] = [
  { icon: Calendar, label: "Years of Tradition", color: "text-blue-600" },
  { icon: Users, label: "Thousands Reconnected", color: "text-green-600" },
  { icon: AwardIcon, label: "Legends Honoured", color: "text-yellow-600" }
];
