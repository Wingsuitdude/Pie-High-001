export function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="animate-float absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="animate-float-delayed absolute bottom-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1591373032196-95f20ff5038c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10"></div>
    </div>
  );
}