export const Layout = ({ children }) => {
  return (
    <div className="p-6 bg-gray-800 min-h-screen text-white">
      <div className="max-w-2xl mx-auto">
        <header className="text-center">
          <h1 className="text-center font-bold text-2xl mb-4 md:text-4xl md:mt-6">
            Optimización de React
          </h1>
          <p className="mb-8 leading-tight">
            Cómo evitar renderizados innecesarios
          </p>
        </header>
        {children}
      </div>
    </div>
  );
};
