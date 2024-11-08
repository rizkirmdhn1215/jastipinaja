import Navbar from './components/Navbar'
import Image from 'next/image'
import { DotOrnament } from './components/DotOrnament'

export default function Home() {
  return (
    <main className="h-screen relative overflow-hidden">
      {/* Very light gradient overlay */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.4) 0%, rgba(255,240,240,0.3) 66%, rgba(255,220,220,0.2) 100%)'
        }}
      />
      
      {/* Indonesia map background */}
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/indonesia-map.png"
          alt="Indonesia Map Background"
          fill
          priority
          className="object-cover opacity-75"
          style={{
            filter: 'contrast(2.2) brightness(1.5) saturate(1.4)',
            objectPosition: 'center 60%',
            transform: 'scale(0.7)',
          }}
        />
      </div>
      
      <Navbar />
      <section className="relative w-full h-[calc(100vh-64px)] flex items-center">
        <div className="relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-52">
            {/* Left side - Text content */}
            <div className="md:w-[30%] space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-x-2 whitespace-nowrap">
                  <span className="text-[#9B2C2C]">Semua</span>
                  <span className="text-[#F04B4B]">Barang</span>
                  <span className="text-[#F04B4B]">Bisa</span>
                  <span className="text-[#F04B4B]">Didapatkan</span>
                </h1>
                <h1 className="text-3xl md:text-4xl font-bold flex items-center gap-x-2 whitespace-nowrap">
                  <span className="text-[#9B2C2C]">Dengan</span>
                  <span className="text-[#9B2C2C]">nitip</span>
                  <span className="text-[#9B2C2C]">ke</span>
                  <span className="text-[#F04B4B]">JASTIPINAJA</span>
                </h1>
              </div>
              
              <p className="text-gray-600 text-sm max-w-lg">
                Jastipinaja membawa produk-produk yang kamu inginkan dari berbagai
                daerah langsung ke depan pintu kamu!
              </p>
              
              <div className="flex items-center gap-4 pt-2">
                <Image
                  src="/images/playstore.png"
                  alt="Get it on Google Play"
                  width={130}
                  height={38}
                  className="cursor-pointer"
                />
                <Image
                  src="/images/appstore.png"
                  alt="Download on the App Store"
                  width={130}
                  height={38}
                  className="cursor-pointer"
                />
              </div>
            </div>

            {/* Right side - Phone mockup with ornament */}
            <div className="md:w-[30%] relative flex justify-end pr-12">
              {/* Dot pattern ornament */}
              <DotOrnament />

              {/* Phone mockup */}
              <div className="relative translate-x-12" style={{ width: '200px', height: '400px' }}>
                <div className="absolute inset-0 bg-black rounded-[2rem] border-[10px] border-black overflow-hidden">
                  <div className="relative w-full h-full bg-[#F04B4B] flex items-center justify-center">
                    <Image
                      src="/images/logo-white.png"
                      alt="Jastipinaja Logo"
                      width={90}
                      height={90}
                      className="object-contain"
                    />
                  </div>
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-4 w-28 bg-black rounded-b-3xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
