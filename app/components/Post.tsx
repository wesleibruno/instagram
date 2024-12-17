'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Heart, MessageCircle, Send, Bookmark } from 'lucide-react'
import { motion } from 'framer-motion'

interface PostProps {
  post: {
    user: {
      username: string
      avatar: string
    }
    image: string
    likes: number
    caption: string
    comments: Array<{
      user: string
      text: string
    }>
  }
}

export default function Post({ post }: PostProps) {
  const [liked, setLiked] = useState(false)
  const [bookmarked, setBookmarked] = useState(false)
  const [likeCount, setLikeCount] = useState(post.likes)
  const [showComments, setShowComments] = useState(false)

  const handleLike = () => {
    if (liked) {
      setLikeCount(likeCount - 1)
    } else {
      setLikeCount(likeCount + 1)
    }
    setLiked(!liked)
  }

  const handleBookmark = () => {
    setBookmarked(!bookmarked)
  }

  return (
    <div className="bg-white border border-gray-300 rounded-sm">
      <div className="flex items-center p-4">
        <Image
          src={post.user.avatar}
          alt={post.user.username}
          width={32}
          height={32}
          className="rounded-full mr-3"
        />
        <span className="font-semibold">{post.user.username}</span>
      </div>
      <Image src={post.image} alt="Post content" width={600} height={600} className="w-full" />
      <div className="p-4">
        <div className="flex justify-between mb-4">
          <div className="flex space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={handleLike}
              className="focus:outline-none"
            >
              <Heart className={`w-6 h-6 ${liked ? 'text-red-500 fill-current' : ''}`} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowComments(!showComments)}
              className="focus:outline-none"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="focus:outline-none"
            >
              <Send className="w-6 h-6" />
            </motion.button>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleBookmark}
            className="focus:outline-none"
          >
            <Bookmark className={`w-6 h-6 ${bookmarked ? 'text-yellow-500 fill-current' : ''}`} />
          </motion.button>
        </div>
        <p className="font-semibold mb-2">{likeCount.toLocaleString('pt-BR')} curtidas</p>
        <p>
          <span className="font-semibold mr-2">{post.user.username}</span>
          {post.caption}
        </p>
        {showComments && (
          <div className="mt-2">
            {post.comments.map((comment, index) => (
              <p key={index}>
                <span className="font-semibold mr-2">{comment.user}</span>
                {comment.text}
              </p>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

