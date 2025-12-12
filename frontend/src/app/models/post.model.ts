export interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  tags: string[];
  createdAt: string; // ISO string format for simplicity
  updatedAt: string; // ISO string format for simplicity
} 