// components/Navigation.jsx
// Komponen NavButton digunakan untuk tombol navigasi di aplikasi.
// Fungsi: Menampilkan tombol dengan ikon dan teks yang dapat diklik, dengan styling berbeda untuk state aktif dan tidak aktif.

import React from 'react';

const NavButton = ({ active, onClick, icon, text, mobile }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm
      ${active
        ? 'bg-white dark:bg-black/60 shadow-md text-orange-600 dark:text-orange-400'
        : 'hover:bg-white/50 dark:hover:bg-white/10 text-gray-700 dark:text-gray-300'}
      ${mobile ? 'px-4 py-3' : ''}
    `}
  >
    {icon}
    {!mobile && <span>{text}</span>}
  </button>
);

export default NavButton;