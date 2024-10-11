import React, { useEffect } from "react";
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
  // Load the Instagram embed script
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

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
          className="data-[state=open]:bg-emerald-800 data-[state=open]:text-white hover:bg-emerald-800 hover:text-white"
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
                        {index === 0 ? (
                          // YouTube video
                          <iframe
                            src={video.url}
                            title={video.title}
                            className="w-full h-full"
                            allowFullScreen
                          ></iframe>
                        ) : (
                          // Instagram video
                          <iframe
                            src={video.url}
                            title={video.title}
                            className="w-full h-full"
                            allowFullScreen
                          ></iframe>
                        )}
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
