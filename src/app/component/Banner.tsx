const Banner = () => {
    return (
      <section className="relative bg-gray-200 h-96 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold text-gray-800">Welcome to E-Shop</h1>
          <p className="text-gray-600 mt-4">Discover amazing deals on your favorite products.</p>
          <button className="mt-6 px-6 py-2 bg-primary text-white rounded-lg">
            Shop Now
          </button>
        </div>
      </section>
    );
  };
  
  export default Banner;
  