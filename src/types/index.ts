
export interface Video {
  id: string;
  title: string;
  thumbnailUrl: string;
  sourceUrl: string;
  sourcePlatform: string;
  dateAdded: string;
  tags: string[];
  notes?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export type ThemeMode = 'light' | 'dark';
