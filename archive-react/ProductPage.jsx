// pages/ProductPage.jsx
// Halaman Product menampilkan fitur-fitur utama aplikasi Bicazz.
// Fungsi: Menyediakan tab navigasi untuk beralih antara fitur Pencatatan Kas, Target Tabungan, dan Split Bill.

import React, { useState } from 'react';
import { Wallet, Target, Calculator } from 'lucide-react';
import KasFeature from '../features/KasFeature';
import TabunganFeature from '../features/TabunganFeature';
import SplitBillFeature from '../features/SplitBillFeature';

const ProductView = () => {
  const [activeTab, setActiveTab] = useState('kas');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex overflow-x-auto pb-2 md:justify-center gap-2 md:gap-4 no-scrollbar">
        {[
          { id: 'kas', label: 'Pencatatan Kas', icon: <Wallet className="w-5 h-5"/> },
          { id: 'tabungan', label: 'Target Tabungan', icon: <Target className="w-5 h-5"/> },
          { id: 'split', label: 'Split Bill', icon: <Calculator className="w-5 h-5"/> }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-6 py-4 rounded-full whitespace-nowrap font-bold transition-all shadow-sm
              ${activeTab === tab.id
                ? 'bg-gradient-to-r from-orange-500 to-red-500 text-white shadow-orange-500/30'
                : 'bg-white/60 dark:bg-black/40 hover:bg-white dark:hover:bg-black/60'}
            `}
          >
            {tab.icon} {tab.label}
          </button>
        ))}
      </div>

      <div className="mt-8">
        {activeTab === 'kas' && <KasFeature />}
        {activeTab === 'tabungan' && <TabunganFeature />}
        {activeTab === 'split' && <SplitBillFeature />}
      </div>
    </div>
  );
};

export default ProductView;