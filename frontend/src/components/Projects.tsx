import { Link } from "react-router-dom";
import type { Project } from "/Users/hridayranawat/Desktop/ai-portfolio/frontend/src/types.ts";

type Props = {
  projects: Project[];
};

const Projects = ({ projects }: Props) => {
  return (
    <section id="projects" className="py-20 max-w-6xl mx-auto">
      <h2 className="text-2xl font-mono text-indigo-500 mb-10">
        $ ls projects/
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <Link
            to={`/project/${project.id}`}
            key={project.id}
            className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg p-6 hover:border-indigo-500 transition cursor-pointer"
          >
            <h3 className="font-mono text-purple-500 mb-3">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {project.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Projects;