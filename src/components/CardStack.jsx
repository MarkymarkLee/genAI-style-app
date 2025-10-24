import { useState } from 'react';
import useSwipe from '../hooks/useSwipe';

const CardStack = ({ item, onNext, onPrev, colorScheme = 'indigo' }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [animationClass, setAnimationClass] = useState('');

  const handleSwipeLeft = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationClass('flick-left');
    
    // Disable pointer events during animation
    if (cardRef.current) {
      cardRef.current.style.pointerEvents = 'none';
    }
    
    setTimeout(() => {
      onNext();
      setAnimationClass('');
      setIsAnimating(false);
      if (cardRef.current) {
        cardRef.current.style.transform = '';
        cardRef.current.style.pointerEvents = '';
      }
    }, 300);
  };

  const handleSwipeRight = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setAnimationClass('flick-right');
    
    // Disable pointer events during animation
    if (cardRef.current) {
      cardRef.current.style.pointerEvents = 'none';
    }
    
    setTimeout(() => {
      onPrev();
      setAnimationClass('');
      setIsAnimating(false);
      if (cardRef.current) {
        cardRef.current.style.transform = '';
        cardRef.current.style.pointerEvents = '';
      }
    }, 300);
  };

  const {
    cardRef,
    handleMouseDown,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  } = useSwipe(handleSwipeLeft, handleSwipeRight);

  // Color scheme styles
  const borderColor = colorScheme === 'indigo' ? 'border-indigo-100' : 'border-pink-100';

  return (
    <div className="w-full">
      <div
        ref={cardRef}
        className={`bg-yellow-50 rounded-lg border-2 ${borderColor} p-6 cursor-grab ${animationClass}`}
        style={{ height: '250px' }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <div className="flex flex-col items-center justify-center h-full">
          {/* Preview Image */}
          <img
            src={item.imageUrl}
            alt={item.name}
            draggable={false}
            className="w-36 h-44 object-cover rounded-md mb-4 shadow-md"
          />
          
          {/* Item Name */}
          <h3 className="text-lg font-semibold text-gray-800 text-center mb-2">
            {item.name}
          </h3>
          
        </div>
      </div>
    </div>
  );
};

export default CardStack;
