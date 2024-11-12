'use client';

import Navbar from './components/Navbar'
import Image from 'next/image'
import { DotOrnament } from './components/DotOrnament'
import { motion } from 'framer-motion';

// Add these animation variants outside your component
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

// Add these new animation variants
const slideIn = {
  initial: { x: -60, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: { duration: 0.6 }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Half-circle gradient effect - softer edges */}
      <div 
        className="absolute left-0 top-20 h-[250px] w-[125px] z-10"
        style={{
          background: 'radial-gradient(circle at -25% 50%, #FFDCDC 0%, rgba(255,220,220,0.9) 30%, rgba(255,220,220,0.7) 50%, transparent 70%)',
          pointerEvents: 'none',
          mixBlendMode: 'multiply'
        }}
      />
      
      {/* Indonesia map background */}
      <div className="absolute inset-0 -z-20 -mt-20">
        <Image
          src="/images/indonesia-map.png"
          alt="Indonesia Map Background"
          fill
          priority
          className="object-cover opacity-75"
          style={{
            filter: 'contrast(2.2) brightness(1.5) saturate(1.4)',
            objectPosition: 'center',
            transform: 'scale(0.4) translateY(-100px)',
          }}
        />
      </div>
      
      <Navbar />
      <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center"
        style={{
          background: 'linear-gradient(to top, rgba(239, 68, 68, 0.4) 0%, rgba(239, 68, 68, 0.1) 40%, #FFFFFF 60%)'
        }}
      >
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col md:flex-row items-center justify-center gap-52">
            {/* Left side - Text content */}
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              animate="animate"
              className="md:w-[30%] space-y-4"
            >
              <motion.div variants={fadeIn} className="space-y-2">
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
              </motion.div>
              
              <motion.p variants={fadeIn} className="text-gray-600 text-sm max-w-lg">
                Jastipinaja membawa produk-produk yang kamu inginkan dari berbagai
                daerah langsung ke depan pintu kamu!
              </motion.p>
              
              <motion.div variants={fadeIn} className="flex items-center gap-4 pt-2">
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
              </motion.div>
            </motion.div>

            {/* Right side - Phone mockup with ornament */}
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-[30%] relative flex justify-end pr-12"
            >
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
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* New Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-screen bg-[#F04B4B] px-4 md:px-8 lg:px-16 flex items-center relative overflow-visible"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Left side - Image */}
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 md:order-1 flex justify-center"
            >
              <Image src="/images/illus.png" alt="Shopping Illustration" width={400} height={400} className="h-auto" />
            </motion.div>

            {/* Right side - Content */}
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="order-1 md:order-2 text-white"
            >
              <motion.h2 variants={fadeIn} className="text-3xl font-bold mb-8">
                Kenapa belanja di JASTIPINAJA?
              </motion.h2>
              
              <div className="space-y-6">
                {/* Feature items */}
                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/mobil.png"  // Add your icon
                      alt="Promo Icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Banyak Promo Dan Gratis Ongkir Tiap Hari</h3>
                    <p className="text-white/80">Belanja dari berbagai daerah jadih lebih mudah dan hemat dengan JastipinAja.
                    Coba Sekarang dan rasakan kemudahannya! </p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/secure.png"  // Add your icon
                      alt="Secure Icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Garansi Barang Aman</h3>
                    <p className="text-white/80">Kami berkomitmen untuk memberikan keamanan produk pada kondisi terbaik.
                    Ada garansi setiap kamu belanja loh..</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/cube.png"  // Add your icon
                      alt="Tracking Icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Produk langsung dari lokasinya</h3>
                    <p className="text-white/80">Temulkan ribauan pilihan produk dari berbagai toko dan tempat yang berbeda
                    Praktis,tanpa keluar rumah</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeIn} className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/store.png"  // Add your icon
                      alt="Support Icon"
                      width={24}
                      height={24}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Bantu Pengusaha meningkatkan pesan bolak balik</h3>
                    <p className="text-white/80">Tiap kamu belanja di JastipinAja,kamu telah berkontribusi pada Ekonomi Digital</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* New Pink Gradient Section */}
      <section className="w-full min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFF1F1 30%, #FFE4E4 60%, #FFD6D6 100%)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
          {/* Top Content */}
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="md:w-1/2">
              <Image
                src="/images/gojek.png"
                alt="Delivery Man"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
            <div className="md:w-1/2 space-y-3">
              <h2 className="text-3xl font-bold text-[#9B2C2C]">
                Diantar <span className="text-[#F04B4B]">Hari ini</span> atau <span className="text-[#F04B4B]">Besok</span>?
              </h2>
              <h2 className="text-3xl font-bold text-[#9B2C2C]">Bisa Banget Lohh</h2>
              <p className="text-[#9B2C2C] text-sm">
                Pesan belanjaan lebih praktis karena pilih waktu pengiriman sesuai yang kamu mau! Nikmati pengalaman belanja online mudah dan fleksibel dari JastipinAja
              </p>
            </div>
          </div>

          {/* Bottom Content */}
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-3">
              <h2 className="text-3xl font-bold text-[#9B2C2C]">
                Pesanan Dibelanjakan <span className="text-[#F04B4B]">Jastiper</span> Terlatih
              </h2>
              <p className="text-[#9B2C2C] text-sm">
                Jastiper adalah Shopper terlatih yang berpengalaman dan membelanjakan dan mengantar pesananmu sampai ke rumah. Jastiper memiliki sertifikasi dan standar operasional yang sesuai standar tinggi pelayanan
              </p>
            </div>
            <div className="md:w-1/2 flex justify-end">
              <Image
                src="/images/ibuk.png"
                alt="Shopping Woman"
                width={250}
                height={250}
                className="object-contain"
              />
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 right-[-40px]">
            <div className="w-40 h-20 flex gap-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-1 h-8 bg-[#F04B4B] transform rotate-45" />
              ))}
            </div>
          </div>
          <div className="absolute bottom-[-16px] left-[-40px] translate-y-[20px]">
            <div className="w-40 h-20 flex gap-4">
              {[...Array(10)].map((_, i) => (
                <div key={i} className="w-1 h-8 bg-[#F04B4B] transform -rotate-45" />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full bg-[#F04B4B] relative px-4 md:px-8 lg:px-16 py-20"
      >
        <div className="max-w-7xl mx-auto">
          <motion.h2 
            variants={fadeIn}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="text-4xl font-bold text-white text-center mb-20"
          >
            Proses Belanja di JASTIPINAJA
          </motion.h2>

          {/* Process Steps */}
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 relative"
          >
            {/* Each step */}
            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-6 relative"
            >
              <div className="absolute left-6">
                <div className="bg-[#F04B4B] text-white font-bold text-xl w-10 h-10 rounded-xl flex items-center justify-center">
                  1
                </div>
              </div>
              
              <div className="pt-4">
                <div className="h-[180px] flex items-center justify-center mb-4">
                  <Image
                    src="/images/step1.png"
                    alt="Step 1"
                    width={150}
                    height={150}
                    className="object-contain w-[150px] h-[150px]"
                  />
                </div>
                <p className="text-gray-600 text-sm text-left font-bold">
                  Memesankan barang yang ingin kita melalui marketplace pilihan dan memilih jastiper yang sesuai dengan lokasi
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-6 relative"
            >
              <div className="absolute  left-6">
                <div className="bg-[#F04B4B] text-white font-bold text-xl w-10 h-10 rounded-xl flex items-center justify-center">
                  2
                </div>
              </div>
              
              <div className="pt-4">
                <div className="h-[180px] flex items-center justify-center mb-4">
                  <Image
                    src="/images/step2.png"
                    alt="Step 2"
                    width={150}
                    height={150}
                    className="object-contain w-[150px] h-[150px]"
                  />
                </div>
                <p className="text-gray-600 text-sm text-left font-bold">
                  Jastiper akan membelanjakan dan menteri barang sesuai ketentuan yang telah ada dan di tracking
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              variants={scaleIn}
              className="bg-white rounded-2xl p-6 relative"
            >
              <div className="absolute left-6">
                <div className="bg-[#F04B4B] text-white font-bold text-xl w-10 h-10 rounded-xl flex items-center justify-center">
                  3
                </div>
              </div>
              
              <div className="pt-4">
                <div className="h-[180px] flex items-center justify-center mb-4">
                  <Image
                    src="/images/step3.png"
                    alt="Step 3"
                    width={150}
                    height={150}
                    className="object-contain w-[150px] h-[150px]"
                  />
                </div>
                <p className="text-gray-600 text-sm text-left font-bold">
                  barang akan di antar sesuai dengan pilihan dan ketentuan yang telah di sepakati bersama dan selesai
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Bottom Banner Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full relative bg-[#F04B4B] py-16"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center justify-between gap-12"
          >
            {/* Left side content */}
            <motion.div 
              variants={fadeIn}
              className="md:w-1/2 space-y-6"
            >
              <h3 className="text-2xl font-bold text-white">
                Buktikan belanja jadi lebih hemat dan praktis dengan JASTIPINAJA
              </h3>
              <motion.div 
                variants={staggerChildren}
                className="flex gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/images/playstore.png"
                    alt="Get it on Google Play"
                    width={130}
                    height={38}
                    className="cursor-pointer"
                  />
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Image
                    src="/images/appstore.png"
                    alt="Download on the App Store"
                    width={130}
                    height={38}
                    className="cursor-pointer"
                  />
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Right side image */}
            <motion.div 
              variants={fadeIn}
              className="md:w-1/2 relative"
            >
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute left-12 top-1/2 -translate-y-[150%]"
              >
                <Image
                  src="/images/bintang.png"
                  alt="Triangle Ornament"
                  width={100}
                  height={120}
                  className="object-contain"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <Image
                  src="/images/shoppinglady.png"
                  alt="Shopping Banner"
                  width={250}
                  height={250}
                  className="object-contain relative z-10"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full py-16 relative bg-[#F04B4B]"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div 
            variants={staggerChildren}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 text-white"
          >
            {/* Logo and Social Media */}
            <motion.div 
              variants={fadeIn}
              className="space-y-6"
            >
              <motion.div whileHover={{ scale: 1.05 }}>
                <Image
                  src="/images/logo-white.png"
                  alt="Jastipinaja Logo"
                  width={150}
                  height={150}
                  className="object-contain"
                />
              </motion.div>
              <div className="flex gap-4">
                {['facebook', 'ig', 'whatsapp', 'tiktok'].map((social) => (
                  <motion.a
                    key={social}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="hover:opacity-80"
                  >
                    <Image 
                      src={`/images/${social}.png`}
                      alt={social}
                      width={24}
                      height={24}
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Footer columns with hover effects */}
            {[
              {
                title: 'TENTANG JASTIPINAJA',
                links: [
                  'Tentang Kami',
                  'Bantuan & FAQs',
                  'Kebijakan dan Privasi',
                  'Syarat dan Ketentuan'
                ]
              },
              {
                title: 'TERHUBUNG DENGAN KAMI',
                content: [
                  'JASTIPINAJA TRAINING CENTER',
                  'Mangadilan Indah 1 No.12, Suko Manunggal, Kec.',
                  'Padang Tim., Kota Padang, Sumatera Barat 25173',
                  'jastipinaja.com'
                ]
              },
              {
                title: 'UNDUH JASTIPINAJA',
                content: (
                  <div className="flex flex-col gap-4">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src="/images/playstore.png"
                        alt="Get it on Google Play"
                        width={150}
                        height={44}
                        className="cursor-pointer"
                      />
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Image
                        src="/images/appstore.png"
                        alt="Download on the App Store"
                        width={150}
                        height={44}
                        className="cursor-pointer"
                      />
                    </motion.div>
                  </div>
                )
              }
            ].map((column, index) => (
              <motion.div
                key={column.title}
                variants={fadeIn}
                className="space-y-4"
              >
                <h3 className="font-bold text-lg">{column.title}</h3>
                {column.links ? (
                  <ul className="space-y-2">
                    {column.links.map((link) => (
                      <motion.li
                        key={link}
                        whileHover={{ x: 5 }}
                        className="cursor-pointer"
                      >
                        <a href="#" className="hover:underline">
                          {link}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                ) : column.content ? (
                  typeof column.content === 'string' ? (
                    <p>{column.content}</p>
                  ) : (
                    column.content
                  )
                ) : null}
              </motion.div>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 pt-8 border-t border-white/20 text-center text-white text-sm"
          >
            <p>Copyright © 2024 Jastipinaja Team. All rights reserved</p>
          </motion.div>
        </div>
      </motion.footer>
    </main>
  )
}
