import React from 'react';
import LeadCard from './LeadCard';

export default function LeadTable({ leads }) {
  if (!leads || leads.length === 0) return null;
  return (
    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
}
