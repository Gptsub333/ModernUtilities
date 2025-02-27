import React, { useState, useEffect, useRef } from "react";
import io, { Socket } from "socket.io-client";
import axios from "axios";
import { MessageCircle, X, Send, Trash2 } from "lucide-react";

// Define types for chat messages
interface ChatMessage {
    sender: "bot" | "user" | "owner";
    message: string;
}

const B_url: string = import.meta.env.VITE_URL || "http://localhost:5000";
const socket: Socket = io(B_url);

const Chatbot: React.FC = () => {
    const [sessionId, setSessionId] = useState<string>(localStorage.getItem("sessionId") || "");
    const [chat, setChat] = useState<ChatMessage[]>(
        JSON.parse(localStorage.getItem("chat") || "[]") || [
            { sender: "bot", message: "Hi there! How can I assist you today?" },
        ]
    );
    const [message, setMessage] = useState<string>("");
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const chatEndRef = useRef<HTMLDivElement | null>(null);
    const [receivedMessages, setReceivedMessages] = useState<Set<string>>(new Set());

    useEffect(() => {
        if (!sessionId) {
            axios.post<{ sessionId: string }>(`${B_url}/start-session`).then((res) => {
                const newSessionId = res.data.sessionId;
                setSessionId(newSessionId);
                localStorage.setItem("sessionId", newSessionId);
            });
        } else {
            socket.emit("join", sessionId);

            const handleReply = (data: { message: string }) => {
                if (!receivedMessages.has(data.message)) {
                    setChat((prev) => [...prev, { sender: "owner", message: data.message }]);
                    setReceivedMessages((prev) => new Set(prev.add(data.message)));
                }
            };

            socket.on(`reply-${sessionId}`, handleReply);

            return () => {
                socket.off(`reply-${sessionId}`, handleReply);
            };
        }
    }, [sessionId, receivedMessages]);

    useEffect(() => {
        localStorage.setItem("chat", JSON.stringify(chat));
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [chat]);

    const handleSend = async (): Promise<void> => {
        if (!message.trim()) return;

        try {
            await axios.post(`${B_url}/send-message`, { sessionId, message });
            setChat((prev) => [...prev, { sender: "user", message }]);
            setMessage("");
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    const clearSession = (): void => {
        localStorage.removeItem("sessionId");
        localStorage.removeItem("chat");
        setSessionId("");
        setChat([{ sender: "bot", message: "Hi there! How can I assist you today?" }]);
        setReceivedMessages(new Set());
    };

    const getMessageClasses = (sender: "bot" | "user" | "owner"): string => {
        switch (sender) {
            case "user":
                return "bg-gradient-to-r from-green-500 to-green-600 text-white self-end";
            case "owner":
                return "bg-gradient-to-r from-green-300 to-green-500 text-white self-start";
            default:
                return "bg-gray-700 text-white self-start";
        }
    };

    return (
        <section id="chatbot">
            <div className="fixed bottom-3 right-20 flex flex-col items-end z-50">
                {/* Floating button to open chat */}
                {!isOpen && (
                    <button
                        onClick={() => setIsOpen(true)}
                        className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-full shadow-lg focus:outline-none hover:scale-105 transition-transform"
                    >
                        <MessageCircle size={28} />
                    </button>
                )}

                {/* Chat window */}
                {isOpen && (
                    <div className="flex flex-col w-80 max-w-full h-96 bg-gray-900 dark:bg-gray-900  border border-gray-700 rounded-lg shadow-lg overflow-hidden">
                        {/* Header */}
                        <div className="flex items-center justify-between bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2">
                            <h2 className="font-bold text-lg">Chat Support</h2>
                            <button onClick={() => setIsOpen(false)} className="text-white focus:outline-none hover:scale-110 transition-transform">
                                <X size={22} />
                            </button>
                        </div>

                        {/* Messages area */}
                        <div className="flex-1 flex flex-col space-y-2 p-3 overflow-y-auto ">
                            {chat.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`px-3 py-2 max-w-xs rounded-md text-sm break-words ${getMessageClasses(
                                        msg.sender
                                    )}`}
                                >
                                    {msg.message}
                                </div>
                            ))}
                            <div ref={chatEndRef} />
                        </div>

                        {/* Input and Clear Chat Row */}
                        <div className="border-t border-gray-700 bg-gray-900 p-2 flex items-center space-x-2">
                            {/* Input Box */}
                            <input
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Type your message..."
                                onKeyDown={(e) => e.key === "Enter" && handleSend()}
                                className="flex-1 px-2 py-1 text-sm  rounded bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-green-500"
                            />

                            {/* Send Button */}
                            <button
                                onClick={handleSend}
                                className="bg-gradient-to-r from-green-400 to-green-600 text-white p-2 rounded focus:outline-none hover:scale-110 transition-transform"
                            >
                                <Send size={18} />
                            </button>

                            {/* Delete (Clear Chat) Button */}
                            <button
                                onClick={clearSession}
                                className="text-red-400 hover:text-red-600 transition-colors focus:outline-none"
                                title="Clear Chat"
                            >
                                <Trash2 size={22} />
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Chatbot;
