type Props = {
  about: string;
};

const About = ({ about }: Props) => {
  return (
    <section id="about" className="px-6 py-20 max-w-4xl mx-auto">
      <h2 className="text-2xl font-mono text-indigo-500 mb-6">
        $ whoami
      </h2>

      <div className="bg-white dark:bg-[#161b22] border border-gray-200 dark:border-gray-800 rounded-lg p-8 font-mono text-gray-700 dark:text-gray-400 leading-relaxed">
        {about}
      </div>
    </section>
  );
};

export default About;