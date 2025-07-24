export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Tom Brown</h3>
          <p className="text-gray-400 mb-6">Web Designer & UI/UX Specialist</p>
          <div className="flex justify-center space-x-6 mb-8">
            <button
              onClick={() => scrollToSection("home")}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("portfolio")}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Portfolio
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              &copy; 2024 Tom Brown. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
