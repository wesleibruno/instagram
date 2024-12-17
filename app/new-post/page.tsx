'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Header from '../components/Header'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { ImageIcon } from 'lucide-react'

export default function NewPostPage() {
  const [caption, setCaption] = useState('')
  const [imageUrl, setImageUrl] = useState('')
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você adicionaria a lógica para enviar a nova publicação para o backend
    console.log('Nova publicação:', { imageUrl, caption })
    router.push('/')
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto max-w-2xl py-8">
        <h1 className="text-2xl font-bold mb-4">Criar Nova Publicação</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
            {imageUrl ? (
              <img src={imageUrl} alt="Preview" className="max-w-full h-auto mx-auto" />
            ) : (
              <div className="flex flex-col items-center">
                <ImageIcon className="w-12 h-12 text-gray-400 mb-2" />
                <p className="text-gray-500">Arraste e solte uma imagem ou clique para selecionar</p>
              </div>
            )}
            <input
            placeholder='Escolha uma imagem'
              type="file"
              accept="image/*"
              className="hidden"
              onChange={(e) => {
                const file = e.target.files?.[0]
                if (file) {
                  const reader = new FileReader()
                  reader.onload = (e) => setImageUrl(e.target?.result as string)
                  reader.readAsDataURL(file)
                }
              }}
            />
          </div>
          <Textarea
            placeholder="Escreva uma legenda..."
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
            rows={4}
          />
          <Button type="submit" className="w-full">Publicar</Button>
        </form>
      </main>
    </div>
  )
}

