import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ModelView from './ModelView';
import CardStack from './CardStack';
import { topData, bottomData } from '../../clothingData';

const MainApp = () => {
  const navigate = useNavigate();
  const [currentTopIndex, setCurrentTopIndex] = useState(0);
  const [currentBottomIndex, setCurrentBottomIndex] = useState(0);

  // Handler for cycling to next top
  const handleNextTop = () => {
    setCurrentTopIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % topData.length;
      console.log('Top:', topData[newIndex].name);
      console.log('Bottom:', bottomData[currentBottomIndex].name);
      return newIndex;
    });
  };

  // Handler for cycling to previous top
  const handlePrevTop = () => {
    setCurrentTopIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + topData.length) % topData.length;
      console.log('Top:', topData[newIndex].name);
      console.log('Bottom:', bottomData[currentBottomIndex].name);
      return newIndex;
    });
  };

  // Handler for cycling to next bottom
  const handleNextBottom = () => {
    setCurrentBottomIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % bottomData.length;
      console.log('Top:', topData[currentTopIndex].name);
      console.log('Bottom:', bottomData[newIndex].name);
      return newIndex;
    });
  };

  // Handler for cycling to previous bottom
  const handlePrevBottom = () => {
    setCurrentBottomIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + bottomData.length) % bottomData.length;
      console.log('Top:', topData[currentTopIndex].name);
      console.log('Bottom:', bottomData[newIndex].name);
      return newIndex;
    });
  };

  // Handler for buying the current outfit
  const handleBuyOutfit = () => {
    const currentOutfit = {
      top: topData[currentTopIndex],
      bottom: bottomData[currentBottomIndex]
    };
    navigate('/checkout', { state: currentOutfit });
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Virtual Fitting Room
          </h1>
          <p className="text-gray-600">
            Swipe the cards to find your perfect outfit
          </p>
        </header>

        {/* Main Layout - Two Column (Always) */}
        <div className="grid grid-cols-2 gap-8 items-start">
          {/* Left Side - Model View */}
          <div className="flex flex-col items-center">
            <ModelView
              topItem={topData[currentTopIndex]}
              bottomItem={bottomData[currentBottomIndex]}
            />

            {/* Buy Outfit Button */}
            <button
              onClick={handleBuyOutfit}
              className="mt-6 bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200 shadow-lg"
            >
              Buy This Outfit - ${(topData[currentTopIndex].price + bottomData[currentBottomIndex].price).toFixed(2)}
            </button>
          </div>

          {/* Right Side - Card Stacks */}
          <div className="space-y-6">
            {/* Tops Card Stack */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Tops
              </h2>
              <CardStack
                item={topData[currentTopIndex]}
                onNext={handleNextTop}
                onPrev={handlePrevTop}
                colorScheme="indigo"
              />
            </div>

            {/* Bottoms Card Stack */}
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Bottoms
              </h2>
              <CardStack
                item={bottomData[currentBottomIndex]}
                onNext={handleNextBottom}
                onPrev={handlePrevBottom}
                colorScheme="pink"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainApp;