import { useRef, useCallback, useEffect } from 'react';

const useSwipe = (onSwipeLeft, onSwipeRight) => {
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const isDraggingRef = useRef(false);
  const cardRef = useRef(null);

  const SWIPE_THRESHOLD = 50;

  // Update the card's visual position during drag
  const updateCardPosition = useCallback((deltaX) => {
    if (cardRef.current) {
      const rotation = deltaX / 20; // Subtle rotation based on drag distance
      cardRef.current.style.transform = `translateX(${deltaX}px) rotate(${rotation}deg)`;
    }
  }, []);

  // Reset the card to its original position
  const resetCardPosition = useCallback(() => {
    if (cardRef.current) {
      cardRef.current.style.transition = 'transform 0.3s ease-out';
      cardRef.current.style.transform = 'translateX(0) rotate(0deg)';
      setTimeout(() => {
        if (cardRef.current) {
          cardRef.current.style.transition = '';
        }
      }, 300);
    }
  }, []);

  // Handle drag start
  const handleStart = useCallback((clientX) => {
    isDraggingRef.current = true;
    startXRef.current = clientX;
    currentXRef.current = clientX;
    
    if (cardRef.current) {
      cardRef.current.style.transition = '';
      cardRef.current.classList.add('cursor-grabbing');
      cardRef.current.classList.remove('cursor-grab');
    }
  }, []);

  // Handle drag move
  const handleMove = useCallback((clientX) => {
    if (!isDraggingRef.current) return;

    currentXRef.current = clientX;
    const deltaX = clientX - startXRef.current;
    updateCardPosition(deltaX);
  }, [updateCardPosition]);

  // Handle drag end
  const handleEnd = useCallback(() => {
    if (!isDraggingRef.current) return;

    isDraggingRef.current = false;
    const deltaX = currentXRef.current - startXRef.current;

    if (cardRef.current) {
      cardRef.current.classList.remove('cursor-grabbing');
      cardRef.current.classList.add('cursor-grab');
    }

    // Check if swipe threshold is met
    if (Math.abs(deltaX) >= SWIPE_THRESHOLD) {
      if (deltaX < 0 && onSwipeLeft) {
        onSwipeLeft();
      } else if (deltaX > 0 && onSwipeRight) {
        onSwipeRight();
      }
    } else {
      // Snap back if threshold not met
      resetCardPosition();
    }

    startXRef.current = 0;
    currentXRef.current = 0;
  }, [onSwipeLeft, onSwipeRight, resetCardPosition]);

  // Mouse event handlers
  const handleMouseDown = useCallback((e) => {
    e.preventDefault();
    handleStart(e.clientX);
  }, [handleStart]);

  const handleMouseMove = useCallback((e) => {
    handleMove(e.clientX);
  }, [handleMove]);

  const handleMouseUp = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Touch event handlers
  const handleTouchStart = useCallback((e) => {
    handleStart(e.touches[0].clientX);
  }, [handleStart]);

  const handleTouchMove = useCallback((e) => {
    handleMove(e.touches[0].clientX);
  }, [handleMove]);

  const handleTouchEnd = useCallback(() => {
    handleEnd();
  }, [handleEnd]);

  // Add global event listeners for mouse events
  useEffect(() => {
    if (isDraggingRef.current) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return {
    cardRef,
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
};

export default useSwipe;
