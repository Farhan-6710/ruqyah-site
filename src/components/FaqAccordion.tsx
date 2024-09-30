// FaqAccordion.tsx

import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQ } from "@/types/faq";

interface FaqAccordionProps {
  faqs: FAQ[];
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ faqs }) => {
  return (
    <Accordion
      type="single"
      collapsible
      className="accordion-section max-w-4xl mx-auto mt-8"
    >
      {faqs.map((faq) => (
        <AccordionItem
          key={faq.id}
          value={`item-${faq.id}`}
          className={`transition-colors duration-200 ${"data-[state=open]:bg-cyan-100 hover:bg-cyan-100 duration-300"}`}
        >
          <AccordionTrigger className="px-8 text-xl xs:text-lg sm:text-2xl text-left">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="px-8 text-lg sm:text-lg">
            {typeof faq.answer === "string" ? (
              faq.answer
            ) : (
              <div>
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
  );
};

export default FaqAccordion;
