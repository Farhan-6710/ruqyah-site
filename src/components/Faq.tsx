"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { FAQ } from "@/types/faq";

const Faq: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: "How can I watch product tutorials?",
      answer: (
        <div className="flex flex-col md:flex-row justify-between w-full">
          <div className="aspect-video w-full md:w-1/2 p-2">
            <iframe
              src="https://www.youtube.com/embed/video1" // Replace with your video URL
              title="Product Tutorial 1"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
          <div className="aspect-video w-full md:w-1/2 p-2">
            <iframe
              src="https://www.youtube.com/embed/video2" // Replace with your video URL
              title="Product Tutorial 2"
              className="w-full h-full"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      question: "What is Ruqyah?",
      answer:
        "Ruqyah is the practice of reciting specific verses from the Quran to seek protection and healing from harmful entities, as mentioned in Surah Al-Isra (17:82): 'And We send down of the Qur'an that which is healing and mercy for the believers.'",
    },
    {
      id: 3,
      question: "Is Ruqyah supported by Hadith?",
      answer:
        "Yes, there are several Hadiths that support Ruqyah. For instance, the Prophet Muhammad (peace be upon him) said, 'There is no harm in Ruqyah as long as it does not involve shirk' (Sunan Ibn Majah).",
    },
    {
      id: 4,
      question: "Can Ruqyah be performed on oneself?",
      answer:
        "Yes, one can perform Ruqyah on themselves using Quranic verses such as Ayat al-Kursi (Surah Al-Baqarah, 2:255) for protection.",
    },
    {
      id: 5,
      question: "What are some recommended verses for Ruqyah?",
      answer:
        "Commonly recited verses include Surah Al-Fatiha, Surah Al-Baqarah (2:255), and Surah Al-Ikhlas, which are known for their protective qualities.",
    },
    {
      id: 6,
      question: "How often should I perform Ruqyah?",
      answer:
        "It is recommended to perform Ruqyah regularly, especially during times of distress or after experiencing negative events. The Prophet (peace be upon him) advised, 'Make Ruqyah a part of your daily routine.'",
    },
    {
      id: 7,
      question: "Is there a specific time to perform Ruqyah?",
      answer:
        "While Ruqyah can be performed at any time, it is especially beneficial during the night, as stated in Surah Al-Isra (17:79): 'And during a portion of the night, pray with it as additional [worship] for you.'",
    },
    {
      id: 8,
      question: "Can I use Ruqyah for my family?",
      answer:
        "Yes, you can perform Ruqyah for your loved ones. The Prophet (peace be upon him) often recited Ruqyah for his family and companions, emphasizing the importance of seeking healing together.",
    },
    {
      id: 9,
      question: "Are there any prohibited practices in Ruqyah?",
      answer:
        "Any practices that involve shirk (associating partners with Allah) or un-Islamic rituals are strictly prohibited in Ruqyah, as emphasized in the Hadith: 'Avoid all practices that do not conform to the teachings of Islam.'",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-cyan-100 via-white to-cyan-100 py-10">
      <h2 className="my-4 text-center text-4xl font-semibold uppercase">
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
            className={`transition-colors duration-200 ${"data-[state=open]:bg-gray-100 hover:bg-gray-100 duration-300"}`}
          >
            <AccordionTrigger className="px-8 text-sm xs:text-lg sm:text-2xl">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-8 sm:text-lg">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default Faq;
