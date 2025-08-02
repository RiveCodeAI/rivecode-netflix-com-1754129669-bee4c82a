import { useState, useCallback } from 'react';

interface UseAccordionReturn {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  isItemOpen: (id: string) => boolean;
  closeAll: () => void;
}

export const useAccordion = (initialOpenItems: string[] = []): UseAccordionReturn => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set(initialOpenItems));

  const toggleItem = useCallback((id: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }, []);

  const isItemOpen = useCallback((id: string) => {
    return openItems.has(id);
  }, [openItems]);

  const closeAll = useCallback(() => {
    setOpenItems(new Set());
  }, []);

  return {
    openItems,
    toggleItem,
    isItemOpen,
    closeAll
  };
};