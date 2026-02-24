type Project = {
  title: string;
  description: string;
  tech: string[];
};

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <section id="projects" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-2xl font-mono text-indigo-500 mb-10">
        $ ls projects/
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-indigo-500 transition"
          >
            <h3 className="font-mono text-purple-500 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 text-xs font-mono bg-gray-200 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;