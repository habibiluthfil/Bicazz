// features/KasFeature.jsx
// Fitur Pencatatan Kas memungkinkan pengguna mencatat pemasukan dan pengeluaran.
// Fungsi: Mengelola transaksi keuangan dengan form input, visualisasi saldo, dan riwayat transaksi.

import React, { useState } from 'react';
import { LayoutTemplate, ArrowUpCircle, ArrowDownCircle, Trash2 } from 'lucide-react';
import Card from '../components/Card';

const KasFeature = () => {
  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState('expense');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Kebutuhan');
  const [customCategory, setCustomCategory] = useState('');
  const [note, setNote] = useState('');

  const incomeCategories = ['Gaji', 'Uang Jajan', 'Bonus', 'Lainnya'];
  const expenseCategories = ['Kebutuhan', 'Keinginan', 'Tabungan', 'Lainnya'];

  const handleAddTransaction = (e) => {
    e.preventDefault();
    if (!amount) return;

    const newTx = {
      id: Date.now(),
      type,
      amount: parseFloat(amount),
      category: category === 'Lainnya' ? customCategory || 'Lainnya' : category,
      note,
      date: new Date().toLocaleDateString()
    };

    setTransactions([newTx, ...transactions]);
    setAmount('');
    setNote('');
    setCustomCategory('');
  };

  const deleteTx = (id) => {
    setTransactions(transactions.filter(t => t.id !== id));
  };

  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="grid md:grid-cols-5 gap-6 animate-in slide-in-from-right-8 duration-500">
      <Card className="md:col-span-2 space-y-6 self-start">
        <h3 className="text-xl font-bold mb-4">Input Data</h3>

        <div className="flex bg-white/50 dark:bg-black/50 p-1 rounded-full mb-6">
          <button
            className={`flex-1 py-2 rounded-full font-bold transition-all ${type === 'income' ? 'bg-green-500 text-white shadow-md' : 'opacity-70'}`}
            onClick={() => {setType('income'); setCategory('Uang Jajan');}}
          >Pemasukan</button>
          <button
            className={`flex-1 py-2 rounded-full font-bold transition-all ${type === 'expense' ? 'bg-red-500 text-white shadow-md' : 'opacity-70'}`}
            onClick={() => {setType('expense'); setCategory('Kebutuhan');}}
          >Pengeluaran</button>
        </div>

        <form onSubmit={handleAddTransaction} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Nominal (Rp)</label>
            <input type="number" value={amount} onChange={e => setAmount(e.target.value)} className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Contoh: 50000" required />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Kategori</label>
            <select value={category} onChange={e => setCategory(e.target.value)} className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none">
              {(type === 'income' ? incomeCategories : expenseCategories).map(cat => (
                <option key={cat} value={cat} className="dark:bg-gray-800">{cat}</option>
              ))}
            </select>
          </div>
          {category === 'Lainnya' && (
             <div>
               <label className="block text-sm font-semibold mb-2">Nama Kategori Kustom</label>
               <input type="text" value={customCategory} onChange={e => setCustomCategory(e.target.value)} className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Masukkan kategori" required />
             </div>
          )}
          <div>
            <label className="block text-sm font-semibold mb-2">Keterangan / Nama (Opsional)</label>
            <input type="text" value={note} onChange={e => setNote(e.target.value)} className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none" placeholder="Contoh: Beli Makan Siang" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl py-4 mt-4 hover:shadow-lg transition-all active:scale-95">Catat {type === 'income' ? 'Pemasukan' : 'Pengeluaran'}</button>
        </form>
      </Card>

      <div className="md:col-span-3 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="!p-5 bg-gradient-to-br from-green-400 to-emerald-600 text-white border-none flex flex-col items-center justify-center text-center">
            <p className="text-sm opacity-80 mb-1">Pemasukan</p>
            <h4 className="text-xl font-black truncate w-full">Rp {totalIncome.toLocaleString('id-ID')}</h4>
          </Card>
          <Card className="!p-5 bg-gradient-to-br from-red-400 to-rose-600 text-white border-none flex flex-col items-center justify-center text-center">
            <p className="text-sm opacity-80 mb-1">Pengeluaran</p>
            <h4 className="text-xl font-black truncate w-full">Rp {totalExpense.toLocaleString('id-ID')}</h4>
          </Card>
          <Card className="!p-5 bg-gradient-to-br from-indigo-500 to-blue-700 text-white border-none flex flex-col items-center justify-center text-center">
            <p className="text-sm opacity-80 mb-1">Saldo</p>
            <h4 className="text-xl font-black truncate w-full">Rp {balance.toLocaleString('id-ID')}</h4>
          </Card>
        </div>

        <Card className="flex flex-col items-center">
          <h3 className="text-xl font-bold mb-6">Visualisasi Saldo</h3>
          <div className="w-full h-40 bg-white/30 dark:bg-black/30 rounded-2xl flex items-end justify-between p-4 gap-1 relative overflow-hidden">
            {transactions.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center opacity-50">Belum ada data untuk grafik</div>
            ) : (
              [...transactions].reverse().map((tx, i) => {
                const height = Math.min(100, Math.max(10, (tx.amount / (totalIncome || totalExpense || 1)) * 100));
                return (
                  <div key={i} className="flex flex-col items-center flex-1 group">
                    <div className={`w-full rounded-t-md transition-all duration-500 ${tx.type === 'income' ? 'bg-green-500' : 'bg-red-500'}`} style={{ height: `${height}%`, opacity: 0.8 }}></div>
                  </div>
                )
              })
            )}
          </div>
        </Card>

        <Card className="max-h-96 overflow-y-auto no-scrollbar">
          <div className="text-center sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md py-3 z-10 rounded-lg mb-4">
            <h3 className="text-xl font-bold">Riwayat Transaksi</h3>
          </div>
          <div className="space-y-3">
            {transactions.length === 0 && (
              <div className="flex flex-col items-center justify-center py-10 opacity-50">
                <LayoutTemplate className="w-12 h-12 mb-2" />
                <p>Belum ada transaksi dicatat.</p>
              </div>
            )}
            {transactions.map(tx => (
              <div key={tx.id} className="flex items-center justify-between bg-white/40 dark:bg-black/40 p-4 rounded-2xl hover:bg-white/60 dark:hover:bg-black/60 transition-colors">
                <div className="flex items-center gap-4 overflow-hidden">
                  <div className={`p-3 rounded-full flex-shrink-0 ${tx.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {tx.type === 'income' ? <ArrowUpCircle className="w-6 h-6"/> : <ArrowDownCircle className="w-6 h-6"/>}
                  </div>
                  <div className="overflow-hidden">
                    <p className="font-bold truncate">{tx.category} {tx.note && <span className="opacity-60 text-sm font-normal">({tx.note})</span>}</p>
                    <p className="text-xs opacity-60">{tx.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 flex-shrink-0">
                  <p className={`font-bold ${tx.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {tx.type === 'income' ? '+' : '-'} Rp {tx.amount.toLocaleString('id-ID')}
                  </p>
                  <button onClick={() => deleteTx(tx.id)} className="p-2 text-gray-400 hover:text-red-500 transition-all"><Trash2 className="w-4 h-4"/></button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default KasFeature;