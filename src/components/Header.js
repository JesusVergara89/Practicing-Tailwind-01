const Header = () => {
  return (
    <header className="bg-teal-700 text-white p-4 sticky top-0 z-10">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          <a className="" href="#hero">🚀 ACME Rockets</a>
        </h1>
        <div>
            <button id="mobile-open-button" className="text-3xl sm:hidden focus:outline-none">
                &#9776;
            </button>
            <nav className="hidden sm:block space-x-8 text-xl" aria-label="main">
                <a href="#rockets" className="hover:opacity-90" >Our Rocktes</a>
                <a href="#testimonials" className="hover:opacity-90" >Testimonials</a>
                <a href="#contact" className="hover:opacity-90" >Contac Us</a>
            </nav>
        </div>
      </section>
    </header>
  );
};

export default Header;
