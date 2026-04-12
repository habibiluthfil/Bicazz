// pages/DesignPage.jsx
// Halaman Design menampilkan preview desain aplikasi dari Canva.
// Fungsi: Menampilkan iframe embed dari Canva yang menunjukkan desain UI/UX aplikasi Bicazz.

import React from 'react';
import Card from '../components/Card';

const DesignView = () => (
  <Card className="max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-500">
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Preview Design Project</h1>
      <p className="opacity-80 max-w-2xl mx-auto">
        Berikut adalah gambaran user interface dan user experience dari aplikasi Bicazz yang dirancang menggunakan Canva oleh tim THE-lNCREDIBLES.
      </p>

      <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl border-4 border-white/50 dark:border-white/10">
        <iframe
          loading="lazy"
          className="absolute top-0 left-0 w-full h-full border-none"
          src="https://www.canva.com/design/DAHCHi8XlSo/CP4UE-iXJJZKXCnEhSPtMw/view?embed"
          allowFullScreen="allowfullscreen"
          allow="fullscreen"
        ></iframe>
      </div>

      <div className="pt-6">
        <a
          href="https://www.canva.com/design/DAHCHi8XlSo/CP4UE-iXJJZKXCnEhSPtMw/view?utm_content=DAHCHi8XlSo&utm_campaign=designshare&utm_medium=embeds&utm_source=link"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:shadow-orange-500/50 hover:scale-105 transition-all"
        >
          Lihat Canva Secara Langsung
        </a>
      </div>
    </div>
  </Card>
);

export default DesignView;