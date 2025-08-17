'use client';

import { useState } from 'react';
import { ChevronDown, ExternalLink } from 'lucide-react';

interface FAQ {
  question: string;
  answer: string;
}

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItem({ question, answer, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${question}`}
      >
        <h3 className="font-medium text-gray-900">{question}</h3>
        <ChevronDown 
          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`} 
          aria-hidden="true"
        />
      </button>
      <div 
        id={`faq-answer-${question}`}
        className={`transition-all duration-200 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-6 pb-4">
          <p className="text-gray-600 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}

const faqs: FAQ[] = [
  {
    question: "What services do you offer?",
    answer: "I create websites, mobile apps, bots, automations, and fully custom projects to meet your needs."
  },
  {
    question: "How long does a typical project take?",
    answer: "The time it takes depends on the size of the project. It could be as quick as a day or take a few months for larger projects."
  },
  {
    question: "How much will my project cost?",
    answer: "Project costs vary based on complexity and scope. I use a transparent 4-step process: break down tasks, estimate hours, multiply by my hourly rate ($65), and add any extras. Simple projects might cost $500-2000, while complex applications can range $5000-15000+. All rates are in USD"
  },
  {
    question: "Do you offer maintenance after the project is complete?",
    answer: "Yes. You get a 30‑day bug‑fix warranty after launch. After that I offer on‑demand maintenance during business hours at my hourly rate; new features/redesigns are quoted separately."
  }
];

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about working with me
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openFAQ === index}
              onToggle={() => toggleFAQ(index)}
            />
          ))}
        </div>

        <div className="text-center mt-8">
          <div className="space-y-2">
            <a 
              href="/cost-estimation-example" 
              className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200 mr-6"
            >
              See detailed example
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-4">
          <a 
            href="/maintenance" 
            className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 transition-colors duration-200"
          >
            Maintenance details
            <ExternalLink className="w-4 h-4" />
          </a>
          </div>
        </div>
      </div>
    </section>
  );
}