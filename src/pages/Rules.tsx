import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Search, ChevronDown, ChevronUp, FileText, Flame } from 'lucide-react';

export default function Rules() {
  const { navigate } = useNavigation();
  const [openCategory, setOpenCategory] = useState<string | null>('国务院法规');
  const [searchTerm, setSearchTerm] = useState('');

  const hotSearches = ['水资源预算', '水预算', '水权交易', '水权贷'];

  const categories = [
    { name: '国务院法规', items: [{ title: 'XXXXXXCC', date: '2025-01-01' }, { title: 'XXXXXXXXX', date: '2025-01-01' }, { title: 'XXXXXXXXXXX', date: '2025-01-01' }] },
    { name: '国务院、部委文件', items: [] },
    { name: '部委规章', items: [] },
    { name: '内蒙古自治区法规', items: [] },
    { name: '内蒙古自治区规章', items: [] },
    { name: '内蒙古自治区政府文件', items: [] },
    { name: '内蒙古自治区水利厅文件', items: [] },
    { name: '乌海市文件', items: [] },
  ];

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      navigate('rules-search');
    }
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Search Header - Solid Blue */}
      <div className="bg-[#1d4ed8] px-4 py-5 shadow-sm sticky top-0 z-10 mb-4">
        <div className="relative flex items-center mb-3 rounded overflow-hidden shadow-sm border border-blue-400/30">
          <input
            type="text"
            placeholder="请输入制度关键词..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handleSearch}
            className="w-full bg-white border-none pl-3 pr-10 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-300 transition-all"
          />
          <button 
            onClick={() => navigate('rules-search')}
            className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center bg-gray-50 border-l border-gray-200 active:bg-gray-100 transition-colors"
          >
            <Search size={16} className="text-gray-600" />
          </button>
        </div>

        <div className="flex items-center flex-wrap gap-2 text-xs">
          <span className="text-blue-100 font-medium flex items-center">
            <Flame size={14} className="text-orange-300 mr-1" />
            热搜：
          </span>
          {hotSearches.map((term, idx) => (
            <button
              key={idx}
              onClick={() => navigate('rules-search')}
              className={`px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                idx === 0 
                  ? 'bg-white text-[#1d4ed8]' 
                  : 'bg-blue-700/50 text-blue-50 hover:bg-blue-600/50 border border-blue-500/30'
              }`}
            >
              {term}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 space-y-4">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-1 h-5 bg-[#1d4ed8] rounded-sm mr-1"></div>
          <h2 className="text-lg font-bold text-gray-900 tracking-wide flex items-center">
            <FileText size={18} className="text-[#1d4ed8] mr-2" />
            制度体系文件
          </h2>
        </div>

        <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
          {categories.map((category, idx) => (
            <div key={idx} className="border-b border-gray-200 last:border-0">
              <button
                onClick={() => setOpenCategory(openCategory === category.name ? null : category.name)}
                className={`w-full flex justify-between items-center px-4 py-3.5 text-left transition-colors ${
                  openCategory === category.name ? 'bg-blue-50/50' : 'hover:bg-gray-50'
                }`}
              >
                <span className={`text-[15px] flex items-center ${openCategory === category.name ? 'font-bold text-[#1d4ed8]' : 'font-medium text-gray-800'}`}>
                  <span className={`w-1.5 h-1.5 rounded-full mr-2.5 ${openCategory === category.name ? 'bg-[#1d4ed8]' : 'bg-gray-400'}`}></span>
                  {category.name}
                </span>
                <div className={`transition-colors ${
                  openCategory === category.name ? 'text-[#1d4ed8]' : 'text-gray-400'
                }`}>
                  {openCategory === category.name ? (
                    <ChevronUp size={18} />
                  ) : (
                    <ChevronDown size={18} />
                  )}
                </div>
              </button>

              {openCategory === category.name && category.items.length > 0 && (
                <div className="bg-white px-4 py-1 border-t border-gray-100">
                  {category.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex justify-between items-center py-3 border-b border-gray-100 last:border-0 group cursor-pointer hover:bg-gray-50/50 -mx-4 px-4 transition-colors"
                    >
                      <span className="text-sm text-gray-700 truncate pr-4 group-hover:text-[#1d4ed8] transition-colors flex items-center before:content-[''] before:w-1 before:h-1 before:bg-gray-300 before:rounded-full before:mr-2 group-hover:before:bg-[#1d4ed8]">
                        {item.title}
                      </span>
                      <span className="text-xs text-gray-500 shrink-0">
                        {item.date}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
