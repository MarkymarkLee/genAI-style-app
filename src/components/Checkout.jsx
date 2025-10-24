import { useNavigate, useLocation } from 'react-router-dom';

const Checkout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Get the current outfit from location state or use defaults
  const currentOutfit = location.state || {
    top: { name: 'White T-Shirt', price: 29.99 },
    bottom: { name: 'Light Jeans', price: 49.99 }
  };

  const totalPrice = (currentOutfit.top.price + currentOutfit.bottom.price).toFixed(2);

  const handlePurchase = () => {
    // For now, just show an alert and go back
    alert('Purchase completed! Thank you for your order.');
    navigate('/app');
  };

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Checkout
          </h1>
          <p className="text-gray-600">
            Complete your purchase
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Order Summary</h2>

            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <h3 className="font-medium text-gray-800">{currentOutfit.top.name}</h3>
                  <p className="text-sm text-gray-600">Top</p>
                </div>
                <span className="font-semibold text-gray-800">${currentOutfit.top.price}</span>
              </div>

              <div className="flex justify-between items-center py-2 border-b border-gray-200">
                <div>
                  <h3 className="font-medium text-gray-800">{currentOutfit.bottom.name}</h3>
                  <p className="text-sm text-gray-600">Bottom</p>
                </div>
                <span className="font-semibold text-gray-800">${currentOutfit.bottom.price}</span>
              </div>

              <div className="flex justify-between items-center py-4 border-t-2 border-gray-300">
                <span className="text-lg font-bold text-gray-800">Total</span>
                <span className="text-lg font-bold text-gray-800">${totalPrice}</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Payment Information</h2>

            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Card Number
                </label>
                <input
                  type="text"
                  placeholder="1234 5678 9012 3456"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Expiry Date
                  </label>
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    CVV
                  </label>
                  <input
                    type="text"
                    placeholder="123"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name on Card
                </label>
                <input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>

              <button
                type="button"
                onClick={handlePurchase}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-md transition duration-200 mt-6"
              >
                Complete Purchase - ${totalPrice}
              </button>
            </form>

            <button
              onClick={() => navigate('/app')}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium py-2 px-4 rounded-md transition duration-200 mt-4"
            >
              Back to Fitting Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;