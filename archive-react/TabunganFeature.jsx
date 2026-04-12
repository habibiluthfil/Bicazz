// features/TabunganFeature.jsx
// Fitur Target Tabungan memungkinkan pengguna membuat dan melacak target tabungan.
// Fungsi: Mengelola daftar target tabungan dengan progress bar, form untuk menambah target baru, dan fitur menambah saldo ke target.

import React, { useState } from 'react';
import { Target, Plus } from 'lucide-react';
import Card from '../components/Card';

const TabunganFeature = () => {
  const [goals, setGoals] = useState([]);
  const [name, setName] = useState('');
  const [target, setTarget] = useState('');
  const [addProgressId, setAddProgressId] = useState(null);
  const [progressAmount, setProgressAmount] = useState('');

  const handleCreateGoal = (e) => {
    e.preventDefault();
    if(!name || !target) return;
    setGoals([...goals, { id: Date.now(), name, target: parseFloat(target), current: 0 }]);
    setName(''); setTarget('');
  };

  const handleAddProgress = (e, id) => {
    e.preventDefault();
    if(!progressAmount) return;
    setGoals(goals.map(g => {
      if(g.id === id) {
        const newCurrent = g.current + parseFloat(progressAmount);
        return { ...g, current: newCurrent > g.target ? g.target : newCurrent };
      }
      return g;
    }));
    setAddProgressId(null); setProgressAmount('');
  };

  return (
    <div className="grid md:grid-cols-2 gap-6 animate-in slide-in-from-right-8 duration-500">
      <Card className="self-start">
        <h3 className="text-2xl font-bold mb-2">Buat Target Baru</h3>
        <form onSubmit={handleCreateGoal} className="space-y-4 mt-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Nama Target</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)} required className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500" placeholder="Contoh: Beli Laptop" />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Jumlah Target (Rp)</label>
            <input type="number" value={target} onChange={e => setTarget(e.target.value)} required className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500" placeholder="Contoh: 10000000" />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl py-4 mt-4 hover:shadow-lg transition-all active:scale-95">Mulai Menabung</button>
        </form>
      </Card>
      <div className="space-y-6">
        {goals.length === 0 && <Card className="flex flex-col items-center justify-center text-center h-[300px] opacity-60"><Target className="w-16 h-16 mb-4" /><p>Belum ada target tabungan.</p></Card>}
        {goals.map(goal => {
          const percentage = Math.min(100, Math.round((goal.current / goal.target) * 100));
          const isComplete = goal.current >= goal.target;
          return (
            <Card key={goal.id} className={`relative overflow-hidden transition-all ${isComplete ? 'border-2 border-green-500 shadow-green-500/20' : ''}`}>
              <h4 className="text-xl font-bold">{goal.name} {isComplete && '🎉'}</h4>
              <p className="text-sm opacity-70 mb-4">Target: Rp {goal.target.toLocaleString('id-ID')}</p>
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-2 overflow-hidden">
                <div className={`h-6 rounded-full transition-all duration-1000 flex items-center justify-end px-2 text-xs text-white font-bold ${isComplete ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-orange-400 to-orange-500'}`} style={{ width: `${percentage}%` }}>{percentage > 10 && `${percentage}%`}</div>
              </div>
              <div className="flex justify-between text-sm font-semibold mb-4"><span>Terkumpul: Rp {goal.current.toLocaleString('id-ID')}</span></div>
              {!isComplete ? (
                addProgressId === goal.id ? (
                  <form onSubmit={(e) => handleAddProgress(e, goal.id)} className="flex gap-2 animate-in fade-in">
                    <input type="number" value={progressAmount} onChange={e => setProgressAmount(e.target.value)} required autoFocus className="flex-1 bg-white/80 dark:bg-black/60 rounded-xl px-4 py-2 text-sm outline-none" placeholder="Nominal..." />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm">Simpan</button>
                    <button type="button" onClick={() => setAddProgressId(null)} className="bg-red-500/20 text-red-600 px-3 py-2 rounded-xl text-sm font-bold">Batal</button>
                  </form>
                ) : (
                  <button onClick={() => setAddProgressId(goal.id)} className="w-full py-3 rounded-xl bg-white/50 dark:bg-black/50 font-bold flex items-center justify-center gap-2 transition-colors"><Plus className="w-4 h-4"/> Tambah Saldo</button>
                )
              ) : <div className="w-full py-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-center">Target Terpenuhi!</div>}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

export default TabunganFeature;