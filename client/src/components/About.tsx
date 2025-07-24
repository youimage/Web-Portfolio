export default function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                I'm a passionate web designer with over 5 years of experience
                creating digital experiences that blend aesthetics with
                functionality. My journey started with a fascination for how
                design can solve real-world problems and connect people with
                technology.
              </p>
              <p className="mb-6">
                I specialize in modern web design, UI/UX development, and brand
                identity. Whether it's a startup looking for their first website
                or an established company needing a digital refresh, I bring
                creativity and technical expertise to every project.
              </p>
              <p className="mb-8">
                When I'm not designing, you can find me exploring new design
                trends, photographing urban landscapes, or contributing to
                open-source design systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                5+ Years Experience
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                50+ Projects Completed
              </span>
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
                Creative Problem Solver
              </span>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern web designer workspace with laptop and design tools"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
