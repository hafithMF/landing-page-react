import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What is the key to becoming rich?",
    answer: "Learn, work hard, and never give up.",
    value: "item-1",
  },
  {
    question: "When should you start striving for success?",
    answer: "Now! Don’t wait for later.",
    value: "item-2",
  },
  {
    question: "What if you fail?",
    answer: "Get back up, because success requires perseverance.",
    value: "item-3",
  },
  {
    question: "How can you succeed at a young age?",
    answer: "Learn, work hard, and don’t be afraid to try new things.",
    value: "item-4",
  },
  {
    question: "What should students have?",
    answer: "Discipline, big dreams, and real actions.",
    value: "item-5",
  },
];


export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Your future is in your hands, start moving now!{" "}
        <a
          rel="noreferrer noopener"
          href="#"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Back Up
        </a>
      </h3>
    </section>
  );
};
