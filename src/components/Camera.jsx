import { useNavigate } from 'react-router-dom';

const Camera = () => {
  const navigate = useNavigate();

  const handleConfirm = () => {
    // Navigate to loading page
    navigate('/loading');
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Take Your Photo
          </h1>
          <p className="text-gray-600">
            Position yourself in frame for the best fit
          </p>
        </div>

        {/* Camera preview area - showing init_image for now */}
        <div className="mb-6">
          <div className="relative bg-gray-200 rounded-lg overflow-hidden" style={{ aspectRatio: '3/4' }}>
            <img
              src="/static/images/init_image.png"
              alt="Camera preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 border-2 border-dashed border-gray-400 rounded-lg flex items-center justify-center">
              <div className="text-gray-500 text-sm">
                Camera preview
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <button
            onClick={handleConfirm}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition duration-200"
          >
            Confirm Photo
          </button>

          <button
            onClick={() => navigate('/')}
            className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-lg transition duration-200"
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Camera;