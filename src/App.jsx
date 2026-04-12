import React, { useState, useEffect, useMemo } from 'react';
import { Wallet, PieChart, Target, Calculator, Moon, Sun, Home, PenTool, LayoutTemplate, Plus, Trash2, ArrowUpCircle, ArrowDownCircle } from 'lucide-react';

// --- MAIN APP COMPONENT ---
export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  // Toggle Dark Mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-500 font-sans ${darkMode ? 'dark' : ''}`}>
      {/* Background with custom gradients */}
      <div className="fixed inset-0 z-0 bg-gradient-to-b from-[#FAF7EB] to-[#EB975E] dark:from-[#AB4F41] dark:to-[#5D1F1E] transition-colors duration-500"></div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex flex-col min-h-screen text-gray-900 dark:text-gray-50">
        
        {/* Navigation Bar */}
        <nav className="w-full px-6 py-4 flex justify-between items-center bg-white/30 dark:bg-black/20 backdrop-blur-md sticky top-0 z-50 border-b border-white/20 dark:border-white/10">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl shadow-lg">
              <Wallet className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-black tracking-tight drop-shadow-sm">Bicazz</span>
          </div>

          <div className="flex items-center gap-2 md:gap-6">
            <div className="hidden md:flex bg-white/40 dark:bg-black/40 backdrop-blur-sm p-1 rounded-full shadow-inner">
              <NavButton active={currentPage === 'home'} onClick={() => setCurrentPage('home')} icon={<Home className="w-4 h-4"/>} text="Home" />
              <NavButton active={currentPage === 'design'} onClick={() => setCurrentPage('design')} icon={<PenTool className="w-4 h-4"/>} text="Design" />
              <NavButton active={currentPage === 'product'} onClick={() => setCurrentPage('product')} icon={<LayoutTemplate className="w-4 h-4"/>} text="Product" />
            </div>

            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-3 rounded-full bg-white/50 dark:bg-black/50 hover:bg-white/80 dark:hover:bg-black/80 transition-all shadow-sm"
              title="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-5 h-5 text-yellow-300" /> : <Moon className="w-5 h-5 text-indigo-900" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation (Bottom) */}
        <div className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 bg-white/70 dark:bg-black/70 backdrop-blur-lg p-2 rounded-full shadow-2xl flex gap-2 z-50 border border-white/20">
            <NavButton active={currentPage === 'home'} onClick={() => setCurrentPage('home')} icon={<Home className="w-5 h-5"/>} text="" mobile />
            <NavButton active={currentPage === 'design'} onClick={() => setCurrentPage('design')} icon={<PenTool className="w-5 h-5"/>} text="" mobile />
            <NavButton active={currentPage === 'product'} onClick={() => setCurrentPage('product')} icon={<LayoutTemplate className="w-5 h-5"/>} text="" mobile />
        </div>

        {/* Main Content Area */}
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12 max-w-6xl mb-20 md:mb-0">
          {currentPage === 'home' && <HomeView setCurrentPage={setCurrentPage} />}
          {currentPage === 'design' && <DesignView />}
          {currentPage === 'product' && <ProductView />}
        </main>
        
        {/* Footer */}
        <footer className="py-6 text-center text-sm opacity-70">
          Project by <span className="font-bold">THE-lNCREDIBLES</span> &copy; 2024
        </footer>
      </div>
    </div>
  );
}

// --- SUB-COMPONENTS ---

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

const Card = ({ children, className = "" }) => (
  <div className={`bg-white/60 dark:bg-black/40 backdrop-blur-xl border border-white/40 dark:border-white/10 shadow-xl rounded-3xl p-6 md:p-8 ${className}`}>
    {children}
  </div>
);

// --- 1. HOME PAGE ---
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
      {/* Why created */}
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

      {/* Advantages */}
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

// --- 2. DESIGN PAGE ---
const DesignView = () => (
  <Card className="max-w-4xl mx-auto animate-in fade-in zoom-in-95 duration-500">
    <div className="text-center space-y-6">
      <h1 className="text-4xl font-bold">Preview Design Project</h1>
      <p className="opacity-80 max-w-2xl mx-auto">
        Berikut adalah gambaran user interface dan user experience dari aplikasi Bicazz yang dirancang menggunakan Canva oleh tim THE-lNCREDIBLES.
      </p>
      
      {/* Canva Embed Container */}
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

// --- 3. PRODUCT PAGE (CORE FEATURES) ---
const ProductView = () => {
  const [activeTab, setActiveTab] = useState('kas');

  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      {/* Feature Navigation */}
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

// --- FEATURE 3.1: Pencatatan Kas ---
const KasFeature = () => {
  const [transactions, setTransactions] = useState([]);
  const [type, setType] = useState('expense'); // 'income' or 'expense'
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

  // Calculations
  const totalIncome = transactions.filter(t => t.type === 'income').reduce((acc, curr) => acc + curr.amount, 0);
  const totalExpense = transactions.filter(t => t.type === 'expense').reduce((acc, curr) => acc + curr.amount, 0);
  const balance = totalIncome - totalExpense;

  return (
    <div className="grid md:grid-cols-5 gap-6 animate-in slide-in-from-right-8 duration-500">
      {/* Left Col: Input Form */}
      <Card className="md:col-span-2 space-y-6">
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
            <input 
              type="number" 
              value={amount} 
              onChange={e => setAmount(e.target.value)}
              className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Contoh: 50000"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Kategori</label>
            <select 
              value={category}
              onChange={e => setCategory(e.target.value)}
              className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none"
            >
              {(type === 'income' ? incomeCategories : expenseCategories).map(cat => (
                <option key={cat} value={cat} className="dark:bg-gray-800">{cat}</option>
              ))}
            </select>
          </div>

          {category === 'Lainnya' && (
             <div>
               <label className="block text-sm font-semibold mb-2">Nama Kategori Kustom</label>
               <input 
                 type="text" 
                 value={customCategory} 
                 onChange={e => setCustomCategory(e.target.value)}
                 className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none"
                 placeholder="Masukkan kategori"
                 required
               />
             </div>
          )}

          <div>
            <label className="block text-sm font-semibold mb-2">Keterangan / Nama (Opsional)</label>
            <input 
              type="text" 
              value={note} 
              onChange={e => setNote(e.target.value)}
              className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 focus:ring-2 focus:ring-orange-500 outline-none"
              placeholder="Contoh: Beli Makan Siang"
            />
          </div>

          <button type="submit" className="w-full bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-2xl py-4 mt-4 hover:shadow-lg transition-all active:scale-95">
            Catat {type === 'income' ? 'Pemasukan' : 'Pengeluaran'}
          </button>
        </form>
      </Card>

      {/* Right Col: Dashboard & History */}
      <div className="md:col-span-3 space-y-6">
        {/* Summary Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="!p-5 bg-gradient-to-br from-green-400 to-emerald-600 text-white border-none">
            <p className="text-sm opacity-80 mb-1">Total Pemasukan</p>
            <h4 className="text-2xl font-black">Rp {totalIncome.toLocaleString('id-ID')}</h4>
          </Card>
          <Card className="!p-5 bg-gradient-to-br from-red-400 to-rose-600 text-white border-none">
            <p className="text-sm opacity-80 mb-1">Total Pengeluaran</p>
            <h4 className="text-2xl font-black">Rp {totalExpense.toLocaleString('id-ID')}</h4>
          </Card>
          <Card className="!p-5 bg-gradient-to-br from-indigo-500 to-blue-700 text-white border-none">
            <p className="text-sm opacity-80 mb-1">Saldo Saat Ini</p>
            <h4 className="text-2xl font-black">Rp {balance.toLocaleString('id-ID')}</h4>
          </Card>
        </div>

        {/* Simple Chart / Visualization */}
        <Card>
          <h3 className="text-xl font-bold mb-6">Visualisasi Saldo</h3>
          <div className="w-full h-40 bg-white/30 dark:bg-black/30 rounded-2xl flex items-end justify-between p-4 gap-1 relative overflow-hidden">
            {transactions.length === 0 ? (
              <div className="absolute inset-0 flex items-center justify-center opacity-50">Belum ada data untuk grafik</div>
            ) : (
              // Simple CSS Bar Chart representing transactions over time
              [...transactions].reverse().map((tx, i) => {
                const height = Math.min(100, Math.max(10, (tx.amount / (totalIncome || 1)) * 100));
                return (
                  <div key={i} className="flex flex-col items-center flex-1 group">
                    <div 
                      className={`w-full rounded-t-md transition-all duration-500 ${tx.type === 'income' ? 'bg-green-500' : 'bg-red-500'}`}
                      style={{ height: `${height}%`, opacity: 0.8 }}
                    ></div>
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-0 bg-black text-white text-xs p-1 rounded pointer-events-none mb-14 transition-opacity">
                      {tx.type === 'income' ? '+' : '-'} Rp{tx.amount}
                    </div>
                  </div>
                )
              })
            )}
          </div>
          <p className="text-xs text-center mt-3 opacity-60">Grafik batangan transaksi terakhir (Hijau: Masuk, Merah: Keluar)</p>
        </Card>

        {/* History */}
        <Card className="max-h-96 overflow-y-auto no-scrollbar">
          <h3 className="text-xl font-bold mb-4 sticky top-0 bg-white/80 dark:bg-black/80 backdrop-blur-md py-2 z-10 rounded-lg">Riwayat Transaksi</h3>
          <div className="space-y-3">
            {transactions.length === 0 && <p className="text-center opacity-50 py-4">Belum ada transaksi dicatat.</p>}
            {transactions.map(tx => (
              <div key={tx.id} className="flex items-center justify-between bg-white/40 dark:bg-black/40 p-4 rounded-2xl">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-full ${tx.type === 'income' ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-600'}`}>
                    {tx.type === 'income' ? <ArrowUpCircle className="w-6 h-6"/> : <ArrowDownCircle className="w-6 h-6"/>}
                  </div>
                  <div>
                    <p className="font-bold">{tx.category} {tx.note && <span className="opacity-60 text-sm font-normal">({tx.note})</span>}</p>
                    <p className="text-xs opacity-60">{tx.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <p className={`font-bold ${tx.type === 'income' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
                    {tx.type === 'income' ? '+' : '-'} Rp {tx.amount.toLocaleString('id-ID')}
                  </p>
                  <button onClick={() => deleteTx(tx.id)} className="text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2 className="w-4 h-4"/>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

// --- FEATURE 3.2: Target Tabungan ---
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
    setName('');
    setTarget('');
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
    setAddProgressId(null);
    setProgressAmount('');
  };

  const deleteGoal = (id) => setGoals(goals.filter(g => g.id !== id));

  return (
    <div className="grid md:grid-cols-2 gap-6 animate-in slide-in-from-right-8 duration-500">
      <Card>
        <h3 className="text-2xl font-bold mb-2">Buat Target Baru</h3>
        <p className="opacity-70 text-sm mb-6">Atur tujuan keuanganmu, seperti beli gadget baru atau liburan.</p>
        
        <form onSubmit={handleCreateGoal} className="space-y-4">
          <div>
            <label className="block text-sm font-semibold mb-2">Nama Target</label>
            <input 
              type="text" value={name} onChange={e => setName(e.target.value)} required
              className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Contoh: Beli Laptop"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold mb-2">Jumlah Target (Rp)</label>
            <input 
              type="number" value={target} onChange={e => setTarget(e.target.value)} required
              className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Contoh: 10000000"
            />
          </div>
          <button type="submit" className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold rounded-2xl py-4 mt-4 hover:shadow-lg transition-all active:scale-95">
            Mulai Menabung
          </button>
        </form>
      </Card>

      <div className="space-y-6">
        {goals.length === 0 && (
           <Card className="flex flex-col items-center justify-center text-center h-full opacity-60">
              <Target className="w-16 h-16 mb-4" />
              <p>Belum ada target tabungan.<br/>Buat satu untuk mulai melacak mimpimu!</p>
           </Card>
        )}

        {goals.map(goal => {
          const percentage = Math.min(100, Math.round((goal.current / goal.target) * 100));
          const isComplete = goal.current >= goal.target;

          return (
            <Card key={goal.id} className={`relative overflow-hidden transition-all ${isComplete ? 'border-2 border-green-500 shadow-green-500/20' : ''}`}>
              <button onClick={() => deleteGoal(goal.id)} className="absolute top-4 right-4 text-gray-400 hover:text-red-500 z-10"><Trash2 className="w-5 h-5"/></button>
              
              <h4 className="text-xl font-bold">{goal.name} {isComplete && '🎉'}</h4>
              <p className="text-sm opacity-70 mb-4">Target: Rp {goal.target.toLocaleString('id-ID')}</p>

              {/* Progress Bar UI */}
              <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-6 mb-2 relative overflow-hidden">
                <div 
                  className={`h-6 rounded-full transition-all duration-1000 flex items-center justify-end px-2 text-xs text-white font-bold
                    ${isComplete ? 'bg-gradient-to-r from-green-400 to-green-600' : 'bg-gradient-to-r from-orange-400 to-orange-500'}
                  `} 
                  style={{ width: `${percentage}%` }}
                >
                  {percentage > 10 && `${percentage}%`}
                </div>
              </div>
              
              <div className="flex justify-between text-sm font-semibold mb-4">
                <span>Terkumpul: Rp {goal.current.toLocaleString('id-ID')}</span>
                <span className="opacity-60">Sisa: Rp {(goal.target - goal.current).toLocaleString('id-ID')}</span>
              </div>

              {!isComplete ? (
                addProgressId === goal.id ? (
                  <form onSubmit={(e) => handleAddProgress(e, goal.id)} className="flex gap-2 animate-in fade-in">
                    <input 
                      type="number" value={progressAmount} onChange={e => setProgressAmount(e.target.value)} required autoFocus
                      className="flex-1 bg-white/80 dark:bg-black/60 rounded-xl px-4 py-2 text-sm outline-none"
                      placeholder="Nominal tabung..."
                    />
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-xl font-bold text-sm">Simpan</button>
                    <button type="button" onClick={() => setAddProgressId(null)} className="bg-red-500/20 text-red-600 px-3 py-2 rounded-xl text-sm font-bold">Batal</button>
                  </form>
                ) : (
                  <button 
                    onClick={() => setAddProgressId(goal.id)}
                    className="w-full py-3 rounded-xl bg-white/50 dark:bg-black/50 font-bold flex items-center justify-center gap-2 hover:bg-white dark:hover:bg-black transition-colors"
                  >
                    <Plus className="w-4 h-4"/> Tambah Saldo
                  </button>
                )
              ) : (
                <div className="w-full py-3 rounded-xl bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 font-bold text-center">
                  Target Terpenuhi! Selamat!
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
};

// --- FEATURE 3.3: Split Bill ---
const SplitBillFeature = () => {
  const [mainBill, setMainBill] = useState('');
  const [tax, setTax] = useState('');
  const [discount, setDiscount] = useState('');
  const [people, setPeople] = useState('2');
  const [result, setResult] = useState(null);

  const handleCalculate = () => {
    const bill = parseFloat(mainBill) || 0;
    const t = parseFloat(tax) || 0;
    const d = parseFloat(discount) || 0;
    const p = parseInt(people) || 1;

    const total = bill + t - d;
    const perPerson = total / p;
    
    setResult({ total, perPerson, p });
  };

  const handleReset = () => {
    setMainBill(''); setTax(''); setDiscount(''); setPeople('2'); setResult(null);
  };

  return (
    <div className="max-w-2xl mx-auto animate-in zoom-in-95 duration-500">
      <Card className="space-y-6">
        <div className="text-center mb-8">
          <div className="bg-blue-500/10 text-blue-500 p-4 rounded-full inline-block mb-4">
            <Calculator className="w-10 h-10" />
          </div>
          <h3 className="text-3xl font-black">Kalkulator Split Bill</h3>
          <p className="opacity-70 mt-2">Biar nggak berantem pas bayar makanan bareng.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
             <label className="block text-sm font-semibold mb-2">Total Tagihan Utama (Rp)</label>
             <input type="number" value={mainBill} onChange={e => setMainBill(e.target.value)} className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500 text-lg font-bold" placeholder="Contoh: 150000" />
          </div>
          
          <div>
             <label className="block text-sm font-semibold mb-2">Pajak / Service (Rp) - Opsional</label>
             <input type="number" value={tax} onChange={e => setTax(e.target.value)} className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500" placeholder="0" />
          </div>

          <div>
             <label className="block text-sm font-semibold mb-2">Diskon (Rp) - Opsional</label>
             <input type="number" value={discount} onChange={e => setDiscount(e.target.value)} className="w-full bg-white/50 dark:bg-black/50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-blue-500" placeholder="0" />
          </div>

          <div className="md:col-span-2">
             <label className="block text-sm font-semibold mb-2">Jumlah Orang</label>
             <div className="flex items-center gap-4 bg-white/50 dark:bg-black/50 rounded-2xl p-2 px-4">
               <input type="range" min="1" max="20" value={people} onChange={e => setPeople(e.target.value)} className="flex-1 accent-blue-500" />
               <span className="font-bold text-xl w-8 text-center">{people}</span>
             </div>
          </div>
        </div>

        {!result ? (
          <button onClick={handleCalculate} className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-bold rounded-2xl py-4 mt-6 hover:shadow-lg hover:shadow-blue-500/30 transition-all text-lg active:scale-95">
            Hitung Split Bill
          </button>
        ) : (
          <div className="mt-8 bg-white/60 dark:bg-black/60 rounded-3xl p-6 border-2 border-blue-500/30 shadow-inner animate-in slide-in-from-bottom-4">
            <h4 className="text-center font-bold opacity-70 mb-2">Hasil Perhitungan</h4>
            <div className="flex flex-col items-center justify-center my-4">
               <span className="text-sm">Masing-masing ({result.p} orang) bayar:</span>
               <span className="text-4xl font-black text-blue-600 dark:text-blue-400 mt-2">
                 Rp {Math.round(result.perPerson).toLocaleString('id-ID')}
               </span>
            </div>
            <div className="text-center text-sm opacity-60 mb-6">
              Total tagihan akhir: Rp {result.total.toLocaleString('id-ID')}
            </div>
            <button onClick={handleReset} className="w-full bg-gray-200 dark:bg-gray-800 font-bold rounded-2xl py-3 hover:bg-gray-300 dark:hover:bg-gray-700 transition-colors">
              Hitung Ulang (Reset)
            </button>
          </div>
        )}
      </Card>
    </div>
  );
};