import React, { useState, useMemo } from 'react';
import { GERMAN_VERBS } from '../constants';
import { Search } from 'lucide-react';

const Dictionary: React.FC = () => {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase();
    return GERMAN_VERBS.filter(v => 
        v.verb.toLowerCase().includes(q) || 
        v.meaning.includes(q) ||
        v.praeteritum.toLowerCase().includes(q)
    );
  }, [search]);

  return (
    <div className="h-full flex flex-col">
      <div className="bg-white p-4 rounded-xl shadow-sm mb-4 sticky top-0 z-10">
        <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
                type="text" 
                placeholder="Search verbs..." 
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-ios-fill pl-10 pr-4 py-2.5 rounded-lg outline-none focus:ring-2 focus:ring-ios-blue/50 transition-all text-sm"
            />
        </div>
      </div>

      <div className="flex-1 overflow-hidden bg-white rounded-xl shadow-sm">
        <div className="overflow-x-auto h-full">
            <table className="w-full text-left text-sm">
                <thead className="bg-gray-50 text-gray-500 uppercase text-xs font-semibold sticky top-0">
                    <tr>
                        <th className="px-4 py-3">Verb</th>
                        <th className="px-4 py-3">Meaning</th>
                        <th className="px-4 py-3 whitespace-nowrap">Präteritum</th>
                        <th className="px-4 py-3 whitespace-nowrap">Perfekt</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                    {filtered.map((v, i) => (
                        <tr key={i} className="hover:bg-gray-50 transition-colors">
                            <td className="px-4 py-3 font-bold text-gray-900">{v.verb}</td>
                            <td className="px-4 py-3 text-gray-500">{v.meaning}</td>
                            <td className="px-4 py-3 text-gray-700">{v.praeteritum}</td>
                            <td className="px-4 py-3 text-gray-700">{v.perfekt}</td>
                        </tr>
                    ))}
                    {filtered.length === 0 && (
                        <tr>
                            <td colSpan={4} className="text-center py-8 text-gray-400">
                                No verbs found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
      </div>
      <p className="text-center text-xs text-gray-400 mt-2">
        Showing {filtered.length} verbs
      </p>
    </div>
  );
};

export default Dictionary;