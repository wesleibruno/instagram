'use client'

import Post from './Post'

const DUMMY_POSTS = [
  {
    id: 1,
    user: {
      username: 'mariasilva',
      avatar: '/maria.svg?height=32&width=32'
    },
    image: '/praia.jpg?height=600&width=600',
    likes: 1542,
    caption: 'Curtindo o pôr do sol na praia de Copacabana! 🌅🏖️ #RioDeJaneiro',
    comments: [
      { user: 'joaocarlos', text: 'Que vista maravilhosa! 😍' },
      { user: 'anasantos', text: 'Aproveita, amiga! ☀️' }
    ]
  },
  {
    id: 2,
    user: {
      username: 'pedroferreira',
      avatar: '/pedro.svg?height=32&width=32'
    },
    image: '/feijoada.jpg?height=600&width=600',
    likes: 983,
    caption: 'Feijoada de domingo com a família! 🍛👨‍👩‍👧‍👦 #ComidaBrasileira',
    comments: [
      { user: 'lucianaoliver', text: 'Que delícia! Bom apetite! 😋' },
      { user: 'rafaelcosta', text: 'Nada melhor que feijoada no domingo! 👌' }
    ]
  },
  {
    id: 3,
    user: {
      username: 'carolinarodrigues',
      avatar: '/carolina.svg?height=32&width=32'
    },
    image: '/pantanal.png?height=600&width=600',
    likes: 2105,
    caption: 'Explorando as belezas naturais do Pantanal! 🐊🦜 #Natureza #Brasil',
    comments: [
      { user: 'gabrielsouza', text: 'Que lugar incrível! Preciso conhecer!' },
      { user: 'beatrizlima', text: 'Cuidado com os jacarés! 😅🐊' }
    ]
  }
]

export default function Feed() {
  return (
    <div className="space-y-4 py-4">
      {DUMMY_POSTS.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  )
}

