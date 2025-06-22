import React, { useState } from 'react';
import axios from 'axios';
import { Url } from '../../../Env';

export const ChatInterface: React.FC = () => {
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState<string[]>([]);

    const handleSend = async () => {
        if (!input.trim()) return; // Prevent sending empty messages

        setMessages([...messages, `You: ${input}`]);
        const response = await axios.post(Url.CHAT, { message: input });
        setMessages((prev) => [...prev, `Gemini: ${response.data.reply}`]);
        setInput('');
    };

    return (
        <div className="p-4 max-w-xl mx-auto">
            <h1 className="text-xl font-bold mb-4">Gemini Chat</h1>
            <div className="border rounded p-2 h-64 overflow-y-auto mb-4 bg-gray-50">
                {messages.map((msg, idx) => <p key={idx}>{msg}</p>)}
            </div>
            <div className="flex gap-2">
                <input
                    type="text"
                    className="border p-2 flex-1 rounded"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <button className="bg-blue-500 text-white px-4 rounded" onClick={handleSend}>Send</button>
            </div>
         </div>
    );
};