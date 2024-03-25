export const VisualComponent = ({ title = "Component", method, children }) => {
  return (
    <div
      className={`component bg-gray-800 rounded text-white p-4 border-2 border-gray-400 relative mt-4`}
    >
      <span
        key={Math.random()}
        className="rerender absolute left-3 top-2 text-xs uppercase font-bold text-red-500"
      >
        Render
      </span>
      <div className="flex  flex-row">
        <h2 className="mt-2 font-bold text-lg mb-1">{title}</h2>
        {method && (
          <h2 className="mt-2 font-thin text-lg mb-4 text-teal-400">
            -{method}
          </h2>
        )}
      </div>
      {children}
    </div>
  );
};
