import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Chat from "./components/Chat";
import ProjectDetail from "./components/ProjectDetail.tsx";
import type { Project }  from "./types.ts";



const projects: Project[] = [
  {
    id: "ai-kaksha",
    title: "AI-Kaksha",
    description:
      "AI-powered academic assistant using Retrieval-Augmented Generation.",
    detailed:
      "AI-Kaksha is a full RAG pipeline built using FastAPI and Gemini API. It extracts transcripts, chunks text, generates embeddings, and enables semantic search through vector similarity. The system supports contextual Q&A, automated study guide generation, and efficient backend query handling. Designed for scalability and modularity.",
    tech: ["Python", "FastAPI", "RAG", "Gemini API", "ChromaDB", "NLP"],
    github: "https://github.com/daksh-sanghvii/AI-Kaksha",
  },
  {
    id: "mern-chat",
    title: "MERN Real-Time Chat App",
    description:
      "Full-stack real-time messaging platform with authentication.",
    detailed:
      "A production-style real-time chat system built using the MERN stack. Implemented JWT-based authentication, protected routes, RESTful APIs, and WebSocket communication via Socket.io. Optimized MongoDB schemas for scalability and handled real-time user state synchronization.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Socket.io", "JWT"],
    github: "https://github.com/daksh-sanghvii/Chat-App",
  },
  {
    id: "fraud-detection",
    title: "Credit Card Fraud Detection System",
    description:
      "Machine learning pipeline for fraud detection with 99%+ accuracy.",
    detailed:
      "Designed and implemented an end-to-end fraud detection pipeline using Logistic Regression, Random Forest, and XGBoost. Applied SMOTE to address severe class imbalance, performed feature scaling and hyperparameter tuning, and achieved 99.4% accuracy with high precision and recall. Integrated FastAPI backend for real-time fraud scoring.",
    tech: [
      "Python",
      "XGBoost",
      "SMOTE",
      "Scikit-Learn",
      "FastAPI",
      "Machine Learning",
    ],
    github: "https://github.com/YOUR_USERNAME/Fraud-Detection-System",
  },
];

function Home() {
  return (
    <>
      <Hero name="Hriday Ranawat" />
      <About about="Third-year IT student building AI systems and scalable backends." />
      <Projects projects={projects} />
      <Skills skills={["C++", "Python", "React", "Node.js", "MongoDB", "FastAPI"]} />
      <Chat />
    </>
  );
}

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-[#f5f7fb] dark:bg-[#0d1117] text-gray-900 dark:text-gray-100 transition-colors duration-500">
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      <div className="pt-24 px-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:id" element={<ProjectDetail projects={projects} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;