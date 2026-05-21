import React, { useState } from 'react';

export default function LeadCard({ lead }) {
  const [copiado, setCopiado] = useState(false);

  const copiarScript = () => {
    navigator.clipboard.writeText(lead.script);
    setCopiado(true);
    setTimeout(() => setCopiado(false), 2000);
  };

  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-5 shadow-lg transition-all hover:border-slate-600">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="text-lg font-bold text-white">{lead.nome}</h4>
          <span className="inline-block text-xs font-medium text-slate-400 bg-slate-700/50 px-2.5 py-0.5 rounded mt-1">
            📍 {lead.bairro} • {lead.origem}
          </span>
        </div>
        <div className="flex flex-col items-end">
          <span className="text-2xl font-black text-emerald-400">{lead.score}%</span>
        </div>
      </div>
      <div className="mt-4 bg-slate-900/60 rounded-lg p-3 border border-slate-750 text-sm text-slate-300 italic">
        "{lead.contexto}"
      </div>
      <button
        onClick={copiarScript}
        className={`w-full mt-4 py-2.5 rounded-lg font-bold text-sm transition-colors ${
          copiado ? 'bg-emerald-600 text-white' : 'bg-emerald-500 hover:bg-emerald-400 text-slate-900'
        }`}
      >
        {copiado ? '✓ Copiado!' : '📋 Copiar Script WhatsApp'}
      </button>
    </div>
  );
}
