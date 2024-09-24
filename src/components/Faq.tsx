"use client";

import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQ } from "@/types/faq";

const Faq: React.FC = () => {
  const [faqs, setFaqs] = useState<FAQ[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const response = await fetch("/api/faqs"); // Adjust the API endpoint accordingly
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setFaqs(data);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchFaqs();
  }, []);

  if (loading) return <div>Loading FAQs...</div>;

  return (
    <div className="bg-gradient-to-br from-cyan-100 via-white to-cyan-100 py-10">
      <h2 className="my-4 text-center text-4xl font-semibold uppercase text-emerald-800">
        Most Asked Questions
      </h2>
      <Accordion
        type="single"
        collapsible
        className="accordion-section max-w-4xl mx-auto mt-8"
      >
        {faqs.map((faq: FAQ) => (
          <AccordionItem
            key={faq.id}
            value={`item-${faq.id}`}
            className={`transition-colors duration-200 ${"data-[state=open]:bg-cyan-100 hover:bg-cyan-100 duration-300"}`}
          >
            <AccordionTrigger className="px-8 text-xl xs:text-lg sm:text-2xl text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-8 text-lg sm:text-lg">
              {/* Check if the answer is a string or an object */}
              {typeof faq.answer === "string" ? (
                faq.answer
              ) : (
                <div>
                  {/* Render videos if the answer is an object with type 'video' */}
                  {faq.answer.type === "video" && (
                    <div className="flex flex-col md:flex-row justify-between w-full">
                      {faq.answer.videos.map((video, index) => (
                        <div
                          key={index}
                          className="aspect-video w-full md:w-1/2 p-2"
                        >
                          <iframe
                            src={video.url}
                            title={video.title}
                            className="w-full h-full"
                            allowFullScreen
                          ></iframe>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
