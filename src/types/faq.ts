export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  isOpen?: boolean;
}

export interface FAQSection {
  title: string;
  description?: string;
  items: FAQItem[];
}

export interface FAQAccordionProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export interface FAQState {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  closeAll: () => void;
}