
"use client";
import React from "react";
import { cutAlong, panchoSemibold } from "@/app/fonts/font";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    question: "What is Pozu?",
    answer:
      "Pozu is a comprehensive platform where users can list pets for sale, adopt pets, find pet services like vets or groomers, and shop for pet-related products.",
  },
  {
    question: "What features does Pozu offer?",
    answer:
      "Pozu provides options to list and adopt pets, find pet services near you, purchase pet goods, and access helpful resources for pet care.",
  },
  {
    question: "Is there a fee to list my pet for sale?",
    answer:
      "Yes, Pozu charges a small fee for pet listings. However, adopting pets is free!",
  },
  {
    question: "How do I get started on Pozu?",
    answer:
      "Visit https://pozu.com and create an account. You can start listing or browsing pets and services right away!",
  },
  {
    question: "Can I review pet services on Pozu?",
    answer:
      "Yes! After using a service, you can leave a review to help others find the best options for their pets.",
  },
  {
    question: "How can I contact Pozu support?",
    answer:
      "You can reach out to our support team via the contact form on the website or email us at support@pozu.com.",
  },
];

export const FaqSection: React.FC = () => {
  return (
    <section className="w-full bg-blue-900 border-t-4 border-white py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          className={`text-4xl sm:text-5xl lg:text-6xl ${cutAlong.className} text-white text-center mb-12`}
        >
          FAQ - POZU
        </h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="bg-white rounded-lg overflow-hidden"
            >
              <AccordionTrigger
                className={`text-left p-4 text-blue-900 ${panchoSemibold.className} text-lg sm:text-xl hover:no-underline`}
              >
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="p-4 text-gray-700">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection;
