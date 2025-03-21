
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: string): string {
  const d = new Date(date);
  const now = new Date();
  const diffInDays = Math.floor((now.getTime() - d.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) return "today";
  if (diffInDays === 1) return "yesterday";
  if (diffInDays < 7) return `${diffInDays} days ago`;
  if (diffInDays < 30) return `${Math.floor(diffInDays / 7)} weeks ago`;
  if (diffInDays < 365) return `${Math.floor(diffInDays / 30)} months ago`;
  return `${Math.floor(diffInDays / 365)} years ago`;
}

export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.substring(0, maxLength) + "...";
}

export function getPlatformIcon(platform: string): string {
  switch (platform.toLowerCase()) {
    case 'youtube':
      return '🎬';
    case 'instagram':
      return '📸';
    case 'tiktok':
      return '🎵';
    case 'twitter':
    case 'x':
      return '🐦';
    case 'linkedin':
      return '💼';
    default:
      return '🌐';
  }
}

export function generateId(): string {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
}

export const demoVideos: Video[] = [
  {
    id: "v1",
    title: "Interview Questions 2025",
    thumbnailUrl: "/lovable-uploads/fe501efc-e617-481e-ac64-1e0684812ed9.png",
    sourceUrl: "https://instagram.com",
    sourcePlatform: "Instagram",
    dateAdded: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["TCS preparation", "CodingLife", "InterviewTips", "ProgrammingJourney"],
    notes: "The post provides guidance on preparing for the TCS interview process, including tips for the NQT test and various interview rounds."
  },
  {
    id: "v2",
    title: "Secret Website for Jobs",
    thumbnailUrl: "/lovable-uploads/3381f2a6-adb1-4a14-9cb0-a1717cbfe42d.png",
    sourceUrl: "https://instagram.com",
    sourcePlatform: "Instagram",
    dateAdded: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["Jobs", "Careers", "Recruiting"],
    notes: "This website helps find hidden job opportunities."
  },
  {
    id: "v3",
    title: "75 Hard Coding Challenge",
    thumbnailUrl: "/lovable-uploads/3381f2a6-adb1-4a14-9cb0-a1717cbfe42d.png",
    sourceUrl: "https://instagram.com",
    sourcePlatform: "Instagram",
    dateAdded: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["Coding", "Challenge", "Programming"],
    notes: "75 days of consistent coding to improve skills"
  },
  {
    id: "v4",
    title: "LinkedIn Profile Optimization",
    thumbnailUrl: "/lovable-uploads/3381f2a6-adb1-4a14-9cb0-a1717cbfe42d.png",
    sourceUrl: "https://linkedin.com",
    sourcePlatform: "LinkedIn",
    dateAdded: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["LinkedIn", "Career", "JobSearch"],
    notes: "Tips to optimize your LinkedIn profile for job search"
  },
  {
    id: "v5",
    title: "Mock Interview Techniques",
    thumbnailUrl: "/lovable-uploads/3381f2a6-adb1-4a14-9cb0-a1717cbfe42d.png",
    sourceUrl: "https://youtube.com",
    sourcePlatform: "YouTube",
    dateAdded: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["Interview", "MockInterview", "JobPrep"],
    notes: "Practice techniques for technical interviews"
  },
  {
    id: "v6",
    title: "Storage Tips for Developers",
    thumbnailUrl: "/lovable-uploads/3381f2a6-adb1-4a14-9cb0-a1717cbfe42d.png",
    sourceUrl: "https://twitter.com",
    sourcePlatform: "Twitter",
    dateAdded: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    tags: ["Storage", "Tips", "Development"],
    notes: "How to efficiently store data in your applications"
  }
];
