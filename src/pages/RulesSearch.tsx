import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Search, FileText, ArrowLeft } from 'lucide-react';

export default function RulesSearch() {
  const { goBack } = useNavigation();
  const [searchTerm, setSearchTerm] = useState('水资源预算');

  const results = [
    {
      title: '(二)预算程序',
      step: '1.水资源预算申请',
      desc: '纳入预算管理范围内的单位在每年12月1日—31日向乌海市水务局提出水资源预算申请。',
      source: '乌海市解决"大水漫灌"问题促进农业节水增效工作方案（2023—2025年）.pdf',
    },
    {
      title: '(二)预算程序',
      step: '1.水资源预算申请',
      desc: '纳入预算管理范围内的单位在每年12月1日—31日向乌海市水务局提出水资源预算申请。',
      source: '乌海市解决"大水漫灌"问题促进农业节水增效工作方案（2023—2025年）.pdf',
    },
  ];

  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) {
      return <span>{text}</span>;
    }
    const regex = new RegExp(`(${highlight})`, 'gi');
    const parts = text.split(regex);
    return (
      <span>
        {parts.map((part, i) =>
          regex.test(part) ? (
            <span key={i} className="text-[#1d4ed8] font-bold">
              {part}
            </span>
          ) : (
            <span key={i}>{part}</span>
          )
        )}
      </span>
    );
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Search Header - Solid Blue */}
      <div className="bg-[#1d4ed8] px-4 py-4 shadow-sm sticky top-0 z-10 mb-4">
        <div className="flex items-center mb-4">
          <button onClick={goBack} className="p-1 -ml-1 mr-2 text-white/80 hover:text-white">
            <ArrowLeft size={20} />
          </button>
          <div className="relative flex-1 flex items-center rounded overflow-hidden shadow-sm border border-blue-400/30">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border-none pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-blue-300 transition-all"
            />
            <button className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center bg-gray-50 border-l border-gray-200 active:bg-gray-100 transition-colors">
              <Search size={16} className="text-gray-600" />
            </button>
          </div>
        </div>
        <div className="text-xs text-blue-100">
          找到 {results.length} 条相关结果
        </div>
      </div>

      <div className="px-4 space-y-4">
        {results.map((result, idx) => (
          <div key={idx} className="bg-white rounded-md p-5 shadow-sm border border-gray-200 space-y-3">
            <div className="flex items-center space-x-2 mb-1">
              <div className="w-1 h-4 bg-[#1d4ed8] rounded-sm shrink-0"></div>
              <h3 className="text-[15px] font-bold text-gray-900 tracking-wide">{result.title}</h3>
            </div>
            
            <div className="pl-3 space-y-2">
              <h4 className="text-sm font-bold text-gray-800">
                {highlightText(result.step, searchTerm)}
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed text-justify bg-gray-50 p-3 rounded border border-gray-200">
                {highlightText(result.desc, searchTerm)}
              </p>
              <div className="pt-2 border-t border-gray-100 mt-3">
                <p className="text-xs text-gray-500 leading-relaxed flex items-start">
                  <span className="shrink-0 mr-1">来源：</span>
                  <span className="truncate">{result.source}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
