import React from 'react';

export default function Hero() {
  return (
    // Mudamos para um preto neutro e aumentamos o padding para dar mais importância ao Hero
    <div className="relative bg-[#050505] text-white py-24 px-4 text-center overflow-hidden">
      
      {/* Efeito de brilho de fundo (Glow) para tirar o aspecto chapado */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-indigo-500/10 blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Badge mais elegante com borda sutil */}
        <span className="inline-block bg-white/5 backdrop-blur-sm text-indigo-300 text-xs uppercase tracking-widest font-bold px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          Tecnologia B2C para o Varejo Local
        </span>
        
        {/* Título com fonte mais imponente e gradiente moderno */}
        <h1 className="text-4xl md:text-6xl font-black mt-8 tracking-tighter leading-[1.1]">
          Descubra quem no comércio da nossa cidade quer comprar de você 
          <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-fuchsia-400">
            HOJE.
          </span>
        </h1>
        
        {/* Parágrafo com cor mais equilibrada e destaque menos agressivo */}
        <p className="mt-8 text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto font-light leading-relaxed">
          Nossos agentes de IA varrem as redes sociais e entregam leads quentes com mais de 
          <span className="text-white font-semibold"> 80% de chance de conversão</span>.
        </p>

        {/* Sugestão: Adicionei um botão de chamada principal que falta na imagem */}
        <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-black hover:bg-zinc-200 transition-colors px-8 py-4 rounded-xl font-bold text-sm shadow-lg">
            Começar Simulação
          </button>
          <button className="bg-white/5 hover:bg-white/10 border border-white/10 transition-colors px-8 py-4 rounded-xl font-bold text-sm">
            Ver Planos
          </button>
        </div>
      </div>
    </div>
  );
}