// src/types/faq.ts
export type FAQ = {
  id: number;
  question: string;
  answer: string | JSX.Element; // Allow answer to be either a string or a JSX element
};
