import React, { useState } from 'react';
import { mockLeads } from '../data/mockLeads';
import LeadTable from './LeadTable';

export default function Simulator() {
  const [nicho, setNicho] = useState('');
  const [loading, setLoading] = useState(false);
  const [leadsExibidos, setLeadsExibidos] = useState([]);

  const lidarComSelecao = (e) => {
    const valor = e.target.value;
    setNicho(valor);
    
    if (valor) {
      setLoading(true);
      setLeadsExibidos([]);
      
      // Simula o tempo do robô varrendo a cidade na hora
      setTimeout(() => {
        setLeadsExibidos(mockLeads[valor] || []);
        setLoading(false);
      }, 1500);
    } else {
      setLeadsExibidos([]);
    }
  };

  return (
    <div className="max-w-4xl mx-auto my-12 px-4">
      <div className="bg-slate-850 border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl">
        <h2 className="text-xl md:text-2xl font-bold text-white text-center mb-6">
          🔎 Faça uma simulação rápida para o seu negócio
        </h2>
        
        <div className="max-w-md mx-auto">
          <label className="block text-sm font-medium text-slate-400 mb-2">
            Selecione o segmento da sua loja do centro:
          </label>
          <select
            value={nicho}
            onChange={lidarComSelecao}
            className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-emerald-500 transition-colors cursor-pointer text-base"
          >
            <option value="">-- Escolha um segmento --</option>
            <option value="roupas">Loja de Roupas / Vestuário</option>
            <option value="calcados">Loja de Calçados</option>
            <option value="eletronicos">Acessórios e Eletrônicos</option>
          </select>
        </div>

        {/* Efeito de Loading do Robô de IA */}
        {loading && (
          <div className="flex flex-col items-center justify-center py-12 mt-8">
            <div className="w-10 h-10 border-4 border-emerald-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm text-slate-400 mt-4 animate-pulse">
              IA mapeando redes sociais e menções locais na cidade...
            </p>
          </div>
        )}

        {/* Exibição dos cards se não estiver carregando */}
        {!loading && <LeadTable leads={leadsExibidos} />}
      </div>
    </div>
  );
}
