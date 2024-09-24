// src/types/faq.ts

export type Video = {
  url: string;
  title: string;
};

export type Answer = 
  | string 
  | { type: "video"; videos: Video[] };

export type FAQ = {
  id: number;
  question: string;
  answer: Answer; // Updated to use the new Answer type
};
