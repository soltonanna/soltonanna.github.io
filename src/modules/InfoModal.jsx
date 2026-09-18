import React, { useCallback, useEffect, useId, useRef } from 'react';
import ReactDOM from 'react-dom';
import { FiX } from 'react-icons/fi';
import Button from './Button';
import useLockBodyScroll from '../hooks/useLockBodyScroll';
import useEscape from '../hooks/useEscape';

/**
 * Accessible dialog rendered in #modal-root.
 * Desktop: centered panel. Mobile: bottom sheet.
 * `addClass` = wide variant (used for blog posts with screenshots).
 */
export const InfoModal = ({ title, message, onConfirm, addClass }) => {
  const titleId = useId();
  const closeRef = useRef(null);
  const close = useCallback((event) => onConfirm(event || { preventDefault() {} }), [onConfirm]);

  useLockBodyScroll(true);
  useEscape(true, close);

  useEffect(() => {
    const previouslyFocused = document.activeElement;
    closeRef.current?.focus({ preventScroll: true });
    return () => previouslyFocused?.focus?.({ preventScroll: true });
  }, []);

  const root = document.getElementById('modal-root') || document.body;

  return ReactDOM.createPortal(
    <div className={`modal ${addClass ? 'modal--wide' : ''}`}>
      <div className="modal__backdrop" onClick={close} />
      <div className="modal__panel" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <header className="modal__header">
          <h2 id={titleId} className="modal__title">{title}</h2>
          <button ref={closeRef} type="button" className="icon-button" onClick={close} aria-label="Close">
            <FiX />
          </button>
        </header>
        <div className="modal__body prose">{message}</div>
        <footer className="modal__footer">
          <Button onClick={close} variant="secondary">Got It !</Button>
        </footer>
      </div>
    </div>,
    root
  );
};

export default InfoModal;
