import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Chat from "./components/Chat";

type Project = {
  title: string;
  description: string;
  tech: string[];
};

const portfolioData: {
  name: string;
  about: string;
  projects: Project[];
  skills: string[];
} = {
  name: "Hriday Ranawat",
  about:
    "Third-year IT student at VJTI. I build AI systems, full-stack applications, and scalable backend architectures. Currently exploring RAG systems and real-time systems.",
  projects: [
  {
    title: "AI-Kaksha",
    description:
      "AI-powered academic assistant using RAG, FastAPI and Gemini for semantic search and intelligent Q&A.",
    tech: ["Python", "FastAPI", "RAG", "NLP"],
  },
  {
    title: "MERN Chat App",
    description:
      "Real-time full-stack chat application with JWT authentication and Socket.io.",
    tech: ["React", "Node.js", "MongoDB", "Socket.io"],
  },
  {
    title: "Credit Card Fraud Detection System",
    description:
  "Built an end-to-end fraud detection pipeline achieving 99.4% accuracy using XGBoost. Addressed severe class imbalance with SMOTE, optimized hyperparameters, and deployed a FastAPI service for real-time inference.",
    tech: ["Python", "XGBoost", "SMOTE", "FastAPI", "Machine Learning"],
  },
],
  skills: ["C++", "Python", "React", "Node.js", "MongoDB", "FastAPI", "DSA"],
};

function App() {
  const [darkMode, setDarkMode] = useState<boolean>(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#f5f7fb] dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="pt-24">
        <Hero name={portfolioData.name} />
        <About about={portfolioData.about} />
        <Projects projects={portfolioData.projects} />
        <Skills skills={portfolioData.skills} />
        <Chat />
      </div>
    </div>
  );
}

export default App;