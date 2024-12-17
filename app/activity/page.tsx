'use client'

import { useParams } from 'next/navigation'
import Image from 'next/image'
import Header from '../components/Header'

const DUMMY_USERS = [
  { id: 1, username: 'mariasilva', name: 'Maria Silva', avatar: '/placeholder.svg?height=32&width=32', posts: 120, followers: 1500, following: 300 },
  { id: 2, username: 'joaocarlos', name: 'João Carlos', avatar: '/placeholder.svg?height=32&width=32', posts: 85, followers: 950, following: 200 },
  { id: 3, username: 'anasantos', name: 'Ana Santos', avatar: '/placeholder.svg?height=32&width=32', posts: 200, followers: 2200, following: 180 },
  { id: 4, username: 'pedroferreira', name: 'Pedro Ferreira', avatar: '/placeholder.svg?height=32&width=32', posts: 65, followers: 780, following: 250 },
  { id: 5, username: 'carolinarodrigues', name: 'Carolina Rodrigues', avatar: '/placeholder.svg?height=32&width=32', posts: 150, followers: 1800, following: 400 },
]

export default function ProfilePage() {
  const params = useParams()
  const username = params.username as string
  const user = DUMMY_USERS.find(u => u.username === username)

  if (!user) {
    return <div>Usuário não encontrado</div>
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto max-w-2xl py-8">
        <div className="flex items-center mb-8">
          <Image
            src={user.avatar}
            alt={user.username}
            width={150}
            height={150}
            className="rounded-full mr-8"
          />
          <div>
            <h1 className="text-3xl font-bold mb-2">{user.username}</h1>
            <div className="flex space-x-4 mb-4">
              <span><strong>{user.posts}</strong> publicações</span>
              <span><strong>{user.followers}</strong> seguidores</span>
              <span><strong>{user.following}</strong> seguindo</span>
            </div>
            <p className="font-semibold">{user.name}</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="aspect-square bg-gray-200"></div>
          ))}
        </div>
      </main>
    </div>
  )
}

