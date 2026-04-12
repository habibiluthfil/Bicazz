// features/SplitBillFeature.jsx
// Fitur Split Bill menghitung pembagian biaya secara otomatis.
// Fungsi: Menghitung jumlah yang harus dibayar per orang berdasarkan total tagihan dan jumlah orang.

import React, { useState } from 'react';
import { Calculator } from 'lucide-react';
import Card from '../components/Card';

const SplitBillFeature = () => {
  const [mainBill, setMainBill] = useState('');
  const [people, setPeople] = useState('2');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const total = parseFloat(mainBill) || 0;
    const p = parseInt(people) || 1;
    setResult({ total, perPerson: total / p, p });
  };

  return (
    <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-500">
      <Card className="space-y-6">
        <div className="text-center mb-8">
          <div className="bg-blue-500/10 text-blue-500 p-4 rounded-full inline-block mb-4">
            <Calculator className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-black">Split Bill</h3>
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Total Tagihan (Rp)</label>
          <input
            type="number"
            value={mainBill}
            onChange={e => setMainBill(e.target.value)}
            className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500 text-lg font-bold"
            placeholder="0"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold mb-2">Jumlah Orang: {people}</label>
          <input
            type="range"
            min="1"
            max="20"
            value={people}
            onChange={e => setPeople(e.target.value)}
            className="w-full accent-blue-500"
          />
        </div>
        {!result ? (
          <button
            onClick={handleCalculate}
            className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-2xl py-4 transition-all"
          >
            Hitung
          </button>
        ) : (
          <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-3xl text-center">
            <p className="text-sm opacity-70">Masing-masing bayar:</p>
            <h4 className="text-3xl font-black text-blue-600 dark:text-blue-400 mt-2">
              Rp {Math.round(result.perPerson).toLocaleString('id-ID')}
            </h4>
            <button
              onClick={() => setResult(null)}
              className="mt-4 text-xs underline opacity-50"
            >
              Reset
            </button>
          </div>
        )}
      </Card>
    </div>
  );
};

export default SplitBillFeature;