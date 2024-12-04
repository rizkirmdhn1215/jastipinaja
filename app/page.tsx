'use client';

import Navbar from './components/Navbar'
import Image from 'next/image'
import { DotOrnament } from './components/DotOrnament'
import { motion } from 'framer-motion';
import TestimonialCarousel from '@/components/TestimonialCarousel'

// Add these animation variants outside your component
const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
} as const;

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const scaleIn = {
  initial: { scale: 0.8, opacity: 0 },
  animate: { scale: 1, opacity: 1 }
} as const;

interface FooterColumn {
  title: string;
  links?: string[];
  content?: string | string[] | JSX.Element;
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      {/* Navbar - Added back at the top */}
      <Navbar />

      {/* First Section with Indonesia Map */}
      <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center">
      
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFF1F1 30%, #FFE4E4 60%, #FFD6D6 100%)'
          }}
        />
        {/* Indonesia map background - Significantly enhanced visibility */}
        <div className="absolute inset-0 -z 50">
          <Image
            src="/images/indonesia-map.png"
            alt="Indonesia Map Background"
            fill
            priority
            className="object-cover opacity-100"
            style={{
              filter: 'contrast(1.4) brightness(1.4) saturate(1.6)',
              objectPosition: 'center',
              transform: 'scale(0.7) translateY(-40px)',
            }}
          />
        </div>

        {/* Half-circle gradient effect - Adjusted blend mode and increased contrast */}
        <div 
          className="absolute left-0 top-10 h-[250px] w-[125px] z-[999]"
          style={{
            background: 'radial-gradient(circle at -25% 50%, rgba(255,76,76,0.8) 0%, rgba(255,76,76,0.6) 30%, rgba(255,76,76,0.4) 50%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />

        {/* Gradient overlay - Lighter overlay to show more map */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to top, rgba(239, 68, 68, 0.2) 0%, rgba(239, 68, 68, 0.05) 40%, rgba(255, 255, 255, 0.6) 60%)',
          mixBlendMode: 'overlay'
        }} />
        
        {/* Optional: Add a subtle shadow overlay to make text more readable while keeping map visible */}
        <div className="absolute inset-0" style={{
          background: 'radial-gradient(circle at center, transparent 0%, rgba(255, 255, 255, 0.2) 100%)',
          mixBlendMode: 'overlay'
        }} />
        
        {/* Content for first section */}
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
              <motion.div 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="space-y-2"
              >
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
              
              <motion.p 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="text-gray-600 text-sm max-w-lg"
              >
                Jastipinaja membawa produk-produk yang kamu inginkan dari berbagai
                daerah langsung ke depan pintu kamu!
              </motion.p>
              
              <motion.div 
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ duration: 0.5 }}
                className="flex items-center gap-4 pt-2"
              >
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
              {/* Dot pattern ornament - Moved to bottom right */}
              <div className="absolute z-10 right-0 top-[105%] translate-x-8">
                <DotOrnament />
              </div>

              {/* Phone mockup */}
              <div className="relative translate-x-12 z-20" style={{ width: '200px', height: '400px' }}>
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
              <Image src="/images/shop.png" alt="Shopping Illustration" width={400} height={400} className="h-auto" />
            </motion.div>

            {/* Right side - Content */}
            <motion.div 
              variants={staggerChildren}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="order-1 md:order-2 text-white"
            >
              <motion.h2 
                variants={fadeIn}
                initial="initial"
                whileInView="animate"
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-8"
              >
                Kenapa belanja di JASTIPINAJA?
              </motion.h2>
              
              <div className="space-y-6">
                {/* Feature items */}
                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
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

                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
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

                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
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

                <motion.div 
                  variants={fadeIn}
                  initial="initial"
                  whileInView="animate"
                  transition={{ duration: 0.5 }}
                  className="flex items-start gap-4"
                >
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

      {/* Testimonial Section */}
      <TestimonialCarousel />

      {/* Pink Gradient Section */}
      <section className="w-full min-h-screen relative overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFF1F1 30%, #FFE4E4 60%, #FFD6D6 100%)'
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 lg:px-16 py-12">
          {/* Top Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center justify-between mb-12"
          >
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <Image
                src="/images/gojek.png"
                alt="Delivery Man"
                width={250}
                height={250}
                className="object-contain"
              />
            </motion.div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="md:w-1/2 space-y-3"
            >
              <h2 className="text-3xl font-bold text-[#9B2C2C]">
                Diantar <span className="text-[#F04B4B]">Hari ini</span> atau <span className="text-[#F04B4B]">Besok</span>?
              </h2>
              <h2 className="text-3xl font-bold text-[#9B2C2C]">Bisa Banget Lohh</h2>
              <p className="text-[#9B2C2C] text-sm">
                Pesan belanjaan lebih praktis karena pilih waktu pengiriman sesuai yang kamu mau! Nikmati pengalaman belanja online mudah dan fleksibel dari JastipinAja
              </p>
            </motion.div>
          </motion.div>

          {/* Bottom Content */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col md:flex-row items-center justify-between"
          >
            <motion.div 
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="md:w-1/2 space-y-3"
            >
              <h2 className="text-3xl font-bold text-[#9B2C2C]">
                Pesanan Dibelanjakan <span className="text-[#F04B4B]">Jastiper</span> Terlatih
              </h2>
              <p className="text-[#9B2C2C] text-sm">
                Jastiper adalah Shopper terlatih yang berpengalaman dan membelanjakan dan mengantar pesananmu sampai ke rumah. Jastiper memiliki sertifikasi dan standar operasional yang sesuai standar tinggi pelayanan
              </p>
            </motion.div>
            <motion.div 
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 1 }}
              className="md:w-1/2 flex justify-end"
            >
              <Image
                src="/images/ibuk.png"
                alt="Shopping Woman"
                width={250}
                height={250}
                className="object-contain"
              />
            </motion.div>
          </motion.div>
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
              transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6 }}
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
              transition={{ duration: 0.6 }}
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
        className="w-full relative py-16"
        style={{
          background: 'linear-gradient(to bottom, #FFFFFF 0%, #FFF1F1 30%, #FFE4E4 60%, #FFD6D6 100%)'
        }}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FF7B7B] rounded-3xl p-8 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden"
          >
            {/* Left side content */}
            <motion.div 
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6 max-w-xl z-10"
            >
              <h3 className="text-2xl font-bold text-white">
                Buktikan belanja jadi lebih hemat dan praktis dengan JASTIPINAJA
              </h3>
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex gap-4"
              >
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

            {/* Right side image */}
            <motion.div 
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative z-10"
            >
              <Image
                src="/images/shoppinglady.png"
                alt="Shopping Banner"
                width={300}
                height={300}
                className="object-contain"
              />
            </motion.div>

            {/* Decorative elements */}
            <motion.div 
              initial={{ rotate: -180, opacity: 0 }}
              whileInView={{ rotate: 0, opacity: 0.5 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="absolute top-4 left-[30%]"
            >
              <Image
                src="/images/bintang.png"
                alt="Stars"
                width={60}
                height={60}
                className="opacity-50"
              />
            </motion.div>
          </motion.div>

          {/* Additional text below the card */}
          <motion.div 
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 space-y-3"
          >
            <h4 className="text-[#F04B4B] text-xl font-semibold">
              Belanja Barang Dari Berbagai Daerah Dengan <span className="text-[#9B2C2C]">JASTIPINAJA</span> Dengan Mudah dan Hemat
            </h4>
            <p className="text-gray-600 text-base max-w-3xl line-clamp-2">
            Setiap pesanan yang Anda titipkan adalah langkah kecil menuju masa depan di mana belanja menjadi lebih mudah dan menyenangkan. Kami berkomitmen untuk mendukung pertumbuhan usaha kecil dan menengah, serta memberikan akses yang lebih luas kepada semua orang.
            </p>
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
                  'INATECHNO TRAINING CENTER',
                  'Marapalam Indah 5 No.12, Kubu Marapalam, Kec.',
                  'Padang Tim., Kota Padang, Sumatera Barat 25125',
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
            ].map((column: FooterColumn) => (
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
