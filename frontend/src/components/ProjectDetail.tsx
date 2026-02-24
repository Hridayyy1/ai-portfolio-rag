import { useParams, Link } from "react-router-dom";
import type { Project } from "../types";

type Props = {
  projects: Project[];
};

const ProjectDetail = ({ projects }: Props) => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <div className="text-center py-20">Project not found.</div>;
  }

  return (
    <div className="max-w-4xl mx-auto py-20 font-mono">
      <Link
        to="/"
        className="text-indigo-500 hover:underline text-sm mb-6 inline-block"
      >
        ← Back to projects
      </Link>

      <h1 className="text-3xl text-indigo-500 mb-6">
        {project.title}
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
        {project.detailed}
      </p>

      <div className="flex flex-wrap gap-3 mb-8">
        {project.tech.map((tech, i) => (
          <span
            key={i}
            className="px-3 py-1 text-xs bg-gray-200 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700"
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub Link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-purple-500 text-purple-500 px-5 py-2 rounded-md hover:bg-purple-500 hover:text-white transition"
      >
        View on GitHub →
      </a>
    </div>
  );
};

export default ProjectDetail;