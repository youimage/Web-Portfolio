import { Palette, Code, Smartphone, Briefcase, Globe, CheckCircle } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      icon: <Palette className="w-6 h-6 text-primary" />,
      title: "Design Tools",
      skills: ["Figma", "Adobe XD", "Sketch", "Photoshop", "Illustrator"],
    },
    {
      icon: <Code className="w-6 h-6 text-primary" />,
      title: "Frontend Development",
      skills: ["HTML5", "CSS3", "JavaScript", "React", "Tailwind CSS"],
    },
    {
      icon: <Smartphone className="w-6 h-6 text-primary" />,
      title: "UI/UX Design",
      skills: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"],
    },
    {
      icon: <Briefcase className="w-6 h-6 text-primary" />,
      title: "Brand Design",
      skills: ["Logo Design", "Brand Identity", "Typography", "Color Theory", "Print Design"],
    },
    {
      icon: <Globe className="w-6 h-6 text-primary" />,
      title: "Web Technologies",
      skills: ["WordPress", "Webflow", "Shopify", "SEO", "Analytics"],
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-primary" />,
      title: "Project Management",
      skills: ["Agile", "Scrum", "Notion", "Slack", "Git"],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                {category.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
