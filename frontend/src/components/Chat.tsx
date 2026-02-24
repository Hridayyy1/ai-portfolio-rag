import { useState, useRef, useEffect } from "react";
import axios from "axios";


const BASE_URL = import.meta.env.VITE_API_URL;
type Message = {
  sender: "user" | "bot";
  text: string;
};

const Chat = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const cleanMarkdown = (text: string): string => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "$1")
      .replace(/\*(.*?)\*/g, "$1")
      .replace(/#{1,6}\s/g, "")
      .replace(/`(.*?)`/g, "$1");
  };

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      sender: "user",
      text: input,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await axios.post(`${BASE_URL}/chat`, { message: input });

      const botMessage: Message = {
        sender: "bot",
        text: cleanMarkdown(response.data.response),
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch {
      const errorMessage: Message = {
        sender: "bot",
        text: "Error: Unable to connect to backend.",
      };

      setMessages((prev) => [...prev, errorMessage]);
    }

    setLoading(false);
  };

  return (
    <section id="chat" className="px-6 py-20 max-w-5xl mx-auto">

      {/* VS Code Style Header */}
      <div className="bg-[#161b22] border border-gray-800 rounded-t-lg px-4 py-2 font-mono text-xs text-gray-400 flex items-center justify-between">
        <span>OUTPUT › resume-ai</span>
        <span className="text-green-400">● Connected</span>
      </div>

      {/* Output Panel */}
      <div className="bg-[#0d1117] border-x border-b border-gray-800 rounded-b-lg p-6 h-[450px] flex flex-col font-mono text-sm text-gray-300">

        <div className="flex-1 overflow-y-auto space-y-6">

          {messages.map((msg, index) => (
            <div key={index} className="whitespace-pre-wrap">

              {msg.sender === "user" ? (
                <div>
                  <div className="text-blue-400 mb-1">
                    &gt; User
                  </div>
                  <div className="text-gray-200">
                    {msg.text}
                  </div>
                </div>
              ) : (
                <div>
                  <div className="text-purple-400 mb-1">
                    [AI]
                  </div>
                  <div className="text-gray-300 leading-relaxed">
                    {msg.text}
                  </div>
                </div>
              )}

            </div>
          ))}

          {loading && (
            <div className="text-gray-500 italic">
              AI is thinking...
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Input Area */}
        <div className="mt-6 border-t border-gray-800 pt-4 flex items-center">

          <span className="text-blue-400 mr-3">&gt;</span>

          <input
            type="text"
            className="flex-1 bg-transparent outline-none text-gray-200 placeholder-gray-500"
            placeholder="Type a question about the resume..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />

        </div>

      </div>
    </section>
  );
};

export default Chat;