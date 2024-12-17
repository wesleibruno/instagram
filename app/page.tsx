import Header from './components/Header'
import Feed from './components/Feed'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Header />
      <main className="flex-grow container mx-auto max-w-2xl">
        <Feed />
      </main>
    </div>
  )
}

