import React from 'react';

export default function Hero() {
  return (
    <div className="bg-slate-900 text-white py-16 px-4 text-center border-b border-slate-800">
      <div className="max-w-4xl mx-auto">
        <span className="bg-emerald-500/10 text-emerald-400 text-sm font-semibold px-3 py-1 rounded-full border border-emerald-500/20">
          Tecnologia B2C para o Varejo Local
        </span>
        <h1 className="text-4xl md:text-5xl font-extrabold mt-6 tracking-tight leading-tight">
          Descubra quem no comércio da nossa cidade quer comprar de você <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">HOJE</span>.
        </h1>
        <p className="mt-4 text-lg text-slate-400 max-w-2xl mx-auto">
          Nossos agentes de IA varrem as redes sociais e entregam leads quentes com mais de <strong className="text-emerald-400 font-bold">80% de chance de fechar negócio</strong>.
        </p>
      </div>
    </div>
  );
}