import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Loading = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps = [
    'Generating suggestions...',
    'Generating outfit images...'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/app');
    }, 5000); // 5 seconds

    // Update step every 2.5 seconds
    const stepTimer = setInterval(() => {
      setCurrentStep(prev => (prev + 1) % steps.length);
    }, 2500);

    // Update progress every 100ms (50 updates over 5 seconds)
    const progressTimer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + 2; // 2% every 100ms = 100% in 5 seconds
        return newProgress > 100 ? 100 : newProgress;
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      clearInterval(stepTimer);
      clearInterval(progressTimer);
    };
  }, [navigate, steps.length]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        <div className="mb-8">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-indigo-600 mx-auto"></div>
        </div>

        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Preparing Your Virtual Fitting Room
        </h1>

        <div className="space-y-3">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-indigo-600 rounded-full animate-pulse"></div>
            <p className="text-gray-600">{steps[currentStep]}</p>
          </div>
        </div>

        <div className="mt-8">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-indigo-600 h-2 rounded-full transition-all duration-100 ease-linear"
              style={{width: `${progress}%`}}
            ></div>
          </div>
          <p className="text-sm text-gray-500 mt-2">{Math.round(progress)}% complete</p>
        </div>
      </div>
    </div>
  );
};

export default Loading;