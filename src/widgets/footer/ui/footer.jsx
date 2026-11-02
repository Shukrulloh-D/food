export const Footer = () => {
  return (
    <footer className="bg-brand-dark text-gray-400 py-10 px-8 flex flex-col md:flex-row justify-between items-center gap-6 mt-20">
      <span className="text-3xl font-bold text-brand-accent tracking-widest">FOOD</span>
      <a href="#" className="text-sm hover:text-white transition-colors">Политика конфиденциальности</a>
      <div className="flex gap-4">
        <span className="border px-2 py-1 rounded text-xs">VISA</span>
        <span className="border px-2 py-1 rounded text-xs">MIR</span>
      </div>
      <span className="text-sm hover:text-white transition-colors">Дизайн d-e-n.ru</span>
    </footer>
  );
};