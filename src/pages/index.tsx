import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='text-center'>        
      <header className='min-h-screen bg-black flex flex-col items-center justify-center'>
        <p className='text-winter font-Poppins text-6xl'>Al-Quran Online</p>
        <div className="quran-container">
          
        </div>
        
      </header>
    </div>
  )
}
