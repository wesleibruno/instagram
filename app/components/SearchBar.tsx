'use client'

import { useState, useEffect, useRef } from 'react'
import { Search } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

const DUMMY_USERS = [
  { id: 1, username: 'mariasilva', name: 'Maria Silva', avatar: '/maria.svg?height=32&width=32' },
  { id: 2, username: 'joaocarlos', name: 'João Carlos', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 3, username: 'anasantos', name: 'Ana Santos', avatar: '/placeholder.svg?height=32&width=32' },
  { id: 4, username: 'pedroferreira', name: 'Pedro Ferreira', avatar: '/pedro.svg?height=32&width=32' },
  { id: 5, username: 'carolinarodrigues', name: 'Carolina Rodrigues', avatar: '/carolina.svg?height=32&width=32' },
]

export default function SearchBar() {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<typeof DUMMY_USERS>([])
  const searchRef = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  useEffect(() => {
    if (searchTerm) {
      const filteredUsers = DUMMY_USERS.filter(user =>
        user.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      setSearchResults(filteredUsers)
    } else {
      setSearchResults([])
    }
  }, [searchTerm])

  const handleUserClick = (username: string) => {
    router.push(`/profile/${username}`)
    setIsOpen(false)
    setSearchTerm('')
  }

  return (
    <div className="relative" ref={searchRef}>
      <div className="flex items-center bg-gray-100 rounded-md">
        <Search className="w-5 h-5 text-gray-400 ml-3" />
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-full px-3 py-2 bg-transparent focus:outline-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onFocus={() => setIsOpen(true)}
        />
      </div>
      {isOpen && searchResults.length > 0 && (
        <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-md shadow-lg mt-1 max-h-64 overflow-y-auto">
          {searchResults.map(user => (
            <div 
              key={user.id} 
              className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
              onClick={() => handleUserClick(user.username)}
            >
              <Image
                src={user.avatar}
                alt={user.username}
                width={32}
                height={32}
                className="rounded-full mr-3"
              />
              <div>
                <p className="font-semibold">{user.username}</p>
                <p className="text-sm text-gray-500">{user.name}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

