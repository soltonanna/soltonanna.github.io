import { useCallback, useState } from 'react';

// Shared state for cards that have an inline "Read more" and a "More info" dialog.
const useDetails = () => {
  const [expanded, setExpanded] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleExpanded = useCallback((event) => {
    event?.preventDefault?.();
    setExpanded((value) => !value);
  }, []);
  const openModal = useCallback((event) => {
    event?.preventDefault?.();
    setModalOpen(true);
  }, []);
  const closeModal = useCallback((event) => {
    event?.preventDefault?.();
    setModalOpen(false);
  }, []);

  return { expanded, toggleExpanded, modalOpen, openModal, closeModal };
};

export default useDetails;
