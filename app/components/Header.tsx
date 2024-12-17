'use client'

import { Heart, PlusSquare, MessageCircle } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import SearchBar from './SearchBar'

export default function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-gray-300 px-4 py-3">
      <div className="flex justify-between items-center max-w-5xl mx-auto">
        <Link href="/" className="w-28">
          <Image src="/instagram-logo.png" alt="Instagram" width={50} height={10} />
        </Link>
        <div className="flex-1 mx-4 max-w-xs">
          <SearchBar />
        </div>
        <div className="flex space-x-4">
          <Link href="/new-post">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <PlusSquare className="w-6 h-6" />
            </motion.button>
          </Link>
          <Link href="/activity">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <Heart className="w-6 h-6" />
            </motion.button>
          </Link>
          <Link href="/direct">
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
              <MessageCircle className="w-6 h-6" />
            </motion.button>
          </Link>
        </div>
      </div>
    </header>
  )
}

