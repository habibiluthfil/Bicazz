// components/Card.jsx
// Komponen Card adalah wrapper UI yang menyediakan styling konsisten untuk konten.
// Fungsi: Membungkus elemen anak dengan background transparan, backdrop blur, dan border untuk tampilan kartu yang elegan.

import React from 'react';

const Card = ({ children, className = "" }) => (
  <div className={`bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl rounded-3xl p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

export default Card;