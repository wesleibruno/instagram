'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Send } from 'lucide-react'

interface Message {
  id: number
  sender: string
  content: string
  timestamp: string
}

interface ChatProps {
  recipient: string
  messages: Message[]
}

export default function Chat({ recipient, messages: initialMessages }: ChatProps) {
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [newMessage, setNewMessage] = useState('')

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim() === '') return

    const newMsg: Message = {
      id: messages.length + 1,
      sender: 'me',
      content: newMessage,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }

    setMessages([...messages, newMsg])
    setNewMessage('')
  }

  return (
    <div className="flex flex-col h-full">
      <div className="bg-white border-b border-gray-300 p-4">
        <h2 className="font-semibold text-lg">{recipient}</h2>
      </div>
      <div className="flex-grow overflow-y-auto p-4 space-y-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg ${
                message.sender === 'me' ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              <p>{message.content}</p>
              <p className="text-xs mt-1 opacity-75">{message.timestamp}</p>
            </div>
          </div>
        ))}
      </div>
      <form onSubmit={handleSendMessage} className="bg-white border-t border-gray-300 p-4">
        <div className="flex items-center">
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
            placeholder="Type a message..."
            className="flex-grow px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
          aria-label='Send message'
            type="submit"
            className="ml-2 bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  )
}

