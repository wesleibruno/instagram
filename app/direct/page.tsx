'use client'

import { useState } from 'react'
import Header from '../components/Header'
import Chat from '../components/Chat'

const DUMMY_CHATS = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Alice Johnson' },
]

const DUMMY_MESSAGES = [
  { id: 1, sender: 'John Doe', content: 'Hey, how are you?', timestamp: '10:30 AM' },
  { id: 2, sender: 'me', content: 'I\'m good, thanks! How about you?', timestamp: '10:32 AM' },
  { id: 3, sender: 'John Doe', content: 'Doing great! Want to grab coffee later?', timestamp: '10:35 AM' },
]

export default function DirectPage() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null)

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto max-w-4xl">
        <div className="flex h-[calc(100vh-64px)]">
          <div className="w-1/3 bg-white border-r border-gray-300 overflow-y-auto">
            <h2 className="font-semibold text-xl p-4 border-b border-gray-300">Direct Messages</h2>
            {DUMMY_CHATS.map((chat) => (
              <div
                key={chat.id}
                className={`p-4 cursor-pointer hover:bg-gray-100 ${
                  selectedChat === chat.name ? 'bg-gray-100' : ''
                }`}
                onClick={() => setSelectedChat(chat.name)}
              >
                {chat.name}
              </div>
            ))}
          </div>
          <div className="w-2/3 bg-gray-50">
            {selectedChat ? (
              <Chat recipient={selectedChat} messages={DUMMY_MESSAGES} />
            ) : (
              <div className="flex items-center justify-center h-full">
                <p className="text-gray-500">Select a chat to start messaging</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

