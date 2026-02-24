type Props = {
  skills: string[];
};

const Skills = ({ skills }: Props) => {
  return (
    <section id="skills" className="px-6 py-20 max-w-6xl mx-auto">
      <h2 className="text-2xl font-mono text-indigo-500 mb-8">
        $ tech_stack
      </h2>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-xs font-mono bg-gray-200 dark:bg-gray-800 rounded-md border border-gray-300 dark:border-gray-700 hover:border-indigo-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;