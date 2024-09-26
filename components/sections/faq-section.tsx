"use client";
import { cutAlong } from "@/app/fonts/font";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const FaqSection = () => {
  return (
    <div className="w-screen border-t-4 border-blue-900">
      <section className="w-screen flex flex-col justify-center items-center border-y-4 bg-blue-900 border-white py-24">
        <div className="flex flex-col justify-center items-center w-9/12 space-y-8">
          <h4 className={`text-7xl ${cutAlong.className} text-white`}>
            {" "}
            FAQ - POZU
          </h4>
          <Accordion type="single" collapsible className="w-full ">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                What is Pozu?
              </AccordionTrigger>
              <AccordionContent>
                Pozu is a platform where users can list pets for sale, adopt
                pets, find pet services like vets or groomers, and shop for
                pet-related products.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                What features does Pozu offer?
              </AccordionTrigger>
              <AccordionContent>
                Pozu provides options to list and adopt pets, find pet services
                near you, purchase pet goods, and access helpful resources for
                pet care.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                Is there a fee to list my pet for sale?
              </AccordionTrigger>
              <AccordionContent>
                Yes, Pozu charges a small fee for pet listings. However,
                adopting pets is free!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                How do I get started on Pozu?
              </AccordionTrigger>
              <AccordionContent>
                Visit https://pozu.com and create an account. You can start
                listing or browsing pets and services right away!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                Can I review pet services on Pozu?
              </AccordionTrigger>
              <AccordionContent>
                Yes! After using a service, you can leave a review to help
                others find the best options for their pets.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                How can I contact Pozu support?
              </AccordionTrigger>
              <AccordionContent>
                You can reach out to our support team via the contact form on
                the website or email us at support@pozu.com.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>
    </div>
  );
};
