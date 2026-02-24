import { useEffect, useState } from "react";

type Props = {
  name: string;
};

const Hero = ({ name }: Props) => {
  const [cursor, setCursor] = useState<boolean>(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="flex flex-col items-center text-center py-32 px-6">
      <h1 className="text-5xl md:text-6xl font-bold font-mono">
        <span className="text-indigo-500">&lt;</span>
        {name}
        <span className="text-indigo-500"> /&gt;</span>
        <span className="ml-1 text-indigo-400">
          {cursor ? "|" : " "}
        </span>
      </h1>

      <p className="mt-6 text-gray-600 dark:text-gray-400 font-mono">
        // AI • Full Stack • Systems
      </p>
    </section>
  );
};

export default Hero;