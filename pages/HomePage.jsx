// pages/HomePage.jsx
// Halaman Home menampilkan informasi utama tentang aplikasi Bicazz.
// Fungsi: Menampilkan hero section, alasan pembuatan aplikasi, kelebihan, dan fitur utama dengan navigasi ke halaman produk.

import React from 'react';
import { Target, PieChart, Wallet, Calculator } from 'lucide-react';
import Card from '../components/Card';

const HomeView = ({ setCurrentPage }) => (
  <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
    {/* Hero Section */}
    <div className="text-center space-y-6 max-w-3xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-black tracking-tight drop-shadow-md">
        Bicazz
      </h1>
      <p className="text-lg md:text-xl leading-relaxed opacity-90 text-justify md:text-center">
        Bicazz adalah aplikasi yang berkaitan dengan keuangan. Aplikasi ini dapat membantu pengguna dalam alur keluar masuknya kas (uang) pengguna dengan fitur pencatatan, target tabungan dan split bill.
        Di tengah meningkatnya gaya konsumsi dan gaya hidup digital, banyak orang — terutama generasi muda seperti kita mengalami kesulitan mengatur keuangan mereka maka aplikasi kami hadir sebagai penolong mereka untuk mengetahui kemana alur keuangan mereka mengalir.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-6">
      <Card>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-red-500 text-white p-2 rounded-2xl"><Target className="w-5 h-5"/></span>
          Kenapa aplikasi ini dibuat?
        </h2>
        <p className="mb-4 font-semibold opacity-80">Banyak pelajar:</p>
        <ul className="space-y-3">
          {['Tidak mencatat keuangan', 'Sulit menabung', 'Bingung saat split bill'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 bg-white/40 dark:bg-black/20 p-3 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-red-500"></div>
              {item}
            </li>
          ))}
        </ul>
      </Card>

      <Card>
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          <span className="bg-orange-500 text-white p-2 rounded-2xl"><PieChart className="w-5 h-5"/></span>
          Kelebihan Aplikasi
        </h2>
        <ul className="space-y-3 mt-10">
          {['Mudah digunakan', 'Semua fitur dalam satu aplikasi', 'Visualisasi data (grafik)'].map((item, i) => (
            <li key={i} className="flex items-center gap-3 bg-white/40 dark:bg-black/20 p-3 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-orange-500"></div>
              {item}
            </li>
          ))}
        </ul>
      </Card>
    </div>

    {/* Main Features */}
    <div className="text-center space-y-8 pt-8">
      <h2 className="text-3xl font-bold drop-shadow-sm">Fitur Utama</h2>
      <div className="grid md:grid-cols-3 gap-6 cursor-pointer">
        {[
          { title: 'Pencatatan Kas', icon: <Wallet className="w-10 h-10 mb-4 text-orange-500" />, desc: 'Lacak pengeluaran & pemasukan harian dengan grafik visual interaktif.' },
          { title: 'Target Tabungan', icon: <Target className="w-10 h-10 mb-4 text-green-500" />, desc: 'Atur goals impianmu dan pantau progress tabungan tanpa ganggu kebutuhan harian.' },
          { title: 'Split Bill', icon: <Calculator className="w-10 h-10 mb-4 text-blue-500" />, desc: 'Hitung otomatis patungan makan bareng teman tanpa pusing.' }
        ].map((feature, i) => (
          <div key={i} onClick={() => setCurrentPage('product')} className="bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-lg hover:shadow-2xl rounded-3xl p-8 transition-all hover:-translate-y-2 group">
             <div className="bg-white dark:bg-black/50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform shadow-inner">
                {feature.icon}
             </div>
             <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
             <p className="opacity-80 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HomeView;