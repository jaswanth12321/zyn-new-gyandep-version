
import React from 'react';
import { Faq3 } from '@/components/ui/faq3';

const faqData = {
  heading: "Frequently Asked Questions",
  description: "Find answers to common questions about our software solutions. Can't find what you're looking for? Contact our support team.",
  items: [
    {
      id: "faq-1",
      question: "What kinds of software solutions do you offer?",
      answer: "We offer a wide range of software solutions including custom web and mobile applications, enterprise software, e-commerce platforms, and cloud-based solutions tailored to your specific business needs."
    },
    {
      id: "faq-2",
      question: "How long does it take to develop a custom software solution?",
      answer: "The timeline varies depending on the complexity of the project. Simple applications may take 2-3 months, while more complex enterprise solutions could take 6+ months. We'll provide a detailed timeline during our initial consultation."
    },
    {
      id: "faq-3",
      question: "What is your development methodology?",
      answer: "We follow an agile development approach, which allows for flexibility, iterative progress, and continuous feedback. This ensures that we can adapt to changing requirements and deliver a solution that perfectly meets your needs."
    },
    {
      id: "faq-4",
      question: "How do you handle ongoing maintenance and support?",
      answer: "We offer flexible maintenance and support packages that include regular updates, bug fixes, and technical assistance. Our team is available to ensure your software continues to run smoothly and efficiently."
    },
    {
      id: "faq-5",
      question: "What technologies do you specialize in?",
      answer: "Our team has expertise in a wide range of technologies including React, Angular, Vue.js, Node.js, Python, Java, .NET, AWS, Azure, and more. We choose the best technology stack based on your specific project requirements."
    }
  ],
  supportHeading: "Need Custom Solutions?",
  supportDescription: "Our expert team is ready to discuss your specific requirements and provide tailored software solutions for your business challenges.",
  supportButtonText: "Schedule a Consultation",
  supportButtonUrl: "#contact"
};

const FaqSection = () => {
  return <Faq3 {...faqData} />;
};

export default FaqSection;
