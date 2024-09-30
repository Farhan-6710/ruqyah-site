// Faq.tsx

"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import FaqSearch from "./FaqSearch";
import FaqAccordion from "./FaqAccordion";
import { FAQ } from "@/types/faq";

const fetchFaqs = async (): Promise<FAQ[]> => {
  const response = await fetch("/api/faqs");
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
};

const Faq: React.FC = () => {
  const {
    data: faqs,
    isLoading,
    error,
  } = useQuery<FAQ[], Error>({
    queryKey: ["faqs"],
    queryFn: fetchFaqs,
  });

  const [filteredFaqs, setFilteredFaqs] = useState<FAQ[]>([]);

  const handleSearch = (query: string) => {
    if (faqs) {
      const lowercasedQuery = query.toLowerCase();
      const matchedFaqs = faqs.filter((faq) =>
        faq.question.toLowerCase().includes(lowercasedQuery)
      );

      // If there are matches, put the first match on top
      if (matchedFaqs.length > 0) {
        const firstMatch = matchedFaqs[0];
        const otherMatches = matchedFaqs.slice(1);
        setFilteredFaqs([firstMatch, ...otherMatches]);
      } else {
        setFilteredFaqs([]);
      }
    }
  };

  if (isLoading) return <div>Loading FAQs...</div>;
  if (error) return <div>Error fetching FAQs: {error.message}</div>;

  const displayFaqs = filteredFaqs.length > 0 ? filteredFaqs : faqs || [];

  return (
    <div className="bg-gradient-to-br from-cyan-100 via-white to-cyan-100 py-10">
      <h2 className="my-4 text-center text-4xl font-semibold uppercase text-emerald-800">
        Most Asked Questions
      </h2>
      <FaqSearch onSearch={handleSearch} />
      <FaqAccordion faqs={displayFaqs} />
    </div>
  );
};

export default Faq;
