import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/solid';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}

const FAQAccordion: React.FC<FAQAccordionProps> = ({ item, isOpen, onClick }) => {
  return (
    <div className="mb-2">
      <button
        className="w-full bg-[#2D2D2D] hover:bg-[#4D4D4D] transition-colors px-6 py-6 text-left flex justify-between items-center"
        onClick={onClick}
      >
        <span className="text-2xl text-white">{item.question}</span>
        <ChevronDownIcon 
          className={`w-8 h-8 text-white transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      {isOpen && (
        <div className="bg-[#2D2D2D] mt-px px-6 py-6">
          <p className="text-xl text-white">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQAccordion;