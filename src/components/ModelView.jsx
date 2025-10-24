

function get_model_image(top, bottom) {
    return `/static/images/woman/${top}-${bottom}.png`;
}

const ModelView = ({ topItem, bottomItem }) => {
  return (
    <div className="w-full max-w-md mx-auto">
      <div
        className="relative bg-gray-200 rounded-lg overflow-hidden"
        style={{ aspectRatio: '3/8.75' }}
      >
        {/* Base model image */}
        <img
          src={get_model_image(topItem.id, bottomItem.id)}
          alt="Model"
          draggable={false}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 10 }}
        />

      </div>
    </div>
  );
};

export default ModelView;
