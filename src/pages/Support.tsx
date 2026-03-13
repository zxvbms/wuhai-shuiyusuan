import React, { useState } from 'react';
import { ChevronDown, Calendar, MapPin } from 'lucide-react';

export default function Support() {
  const [activeTab, setActiveTab] = useState('用水指标查询');

  const tabs = ['用水指标查询', '用水效率查询', '告警统计'];

  const regions = [
    {
      name: '乌海市',
      data: [
        { label: '全口径水量', surface: 'xxx', ground: 'xxx', unconventional: 'xxx', external: 'xxx', cross: 'xxx' },
        { label: '可用水量', surface: 'xxx', ground: 'xxx', unconventional: 'xxx', external: 'xxx', cross: 'xxx' },
        { label: '工程技术可供水量', surface: 'xxx', ground: 'xxx', unconventional: 'xxx', external: 'xxx', cross: 'xxx' },
      ],
    },
    {
      name: '海勃湾区',
      data: [
        { label: '全口径水量', surface: 'xxx', ground: 'xxx', unconventional: 'xxx', external: 'xxx', cross: 'xxx' },
        { label: '可用水量', surface: 'xxx', ground: 'xxx', unconventional: 'xxx', external: 'xxx', cross: 'xxx' },
        { label: '工程技术可供水量', surface: 'xxx', ground: 'xxx', unconventional: 'xxx', external: 'xxx', cross: 'xxx' },
      ],
    },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Tabs - Solid Blue Header */}
      <div className="bg-[#1d4ed8] px-4 pt-4 pb-3 shadow-sm sticky top-0 z-10 mb-4">
        <div className="flex space-x-1 overflow-x-auto pb-1 scrollbar-hide bg-blue-800/50 p-1 rounded">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded text-sm font-bold whitespace-nowrap transition-all flex-1 ${
                activeTab === tab 
                  ? 'bg-white text-[#1d4ed8] shadow-sm' 
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* Filter */}
      <div className="px-4 mb-4">
        <div className="inline-flex items-center space-x-2 bg-white border border-gray-200 shadow-sm rounded px-3 py-2 text-sm font-medium text-gray-700 cursor-pointer active:bg-gray-50 transition-colors">
          <Calendar size={16} className="text-[#1d4ed8]" />
          <span>2026</span>
          <ChevronDown size={16} className="text-gray-400" />
        </div>
      </div>

      <div className="px-4 space-y-4">
        {regions.map((region, idx) => (
          <div key={idx} className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
            <div className="px-4 py-3 border-b border-gray-100 flex items-center space-x-2 bg-gray-50">
              <div className="w-1 h-4 bg-[#1d4ed8] rounded-sm shrink-0"></div>
              <h3 className="text-[15px] font-bold text-gray-900 tracking-wide flex items-center">
                <MapPin size={16} className="text-[#1d4ed8] mr-1.5" />
                {region.name}
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-center border-collapse min-w-[600px]">
                <thead>
                  <tr className="bg-blue-50/50 text-gray-600 border-b border-gray-200">
                    <th className="py-3 px-3 font-bold w-28 text-left pl-4">指标</th>
                    <th className="py-3 px-3 font-bold">地表水</th>
                    <th className="py-3 px-3 font-bold">地下水</th>
                    <th className="py-3 px-3 font-bold">非常规水</th>
                    <th className="py-3 px-3 font-bold">外调水</th>
                    <th className="py-3 px-3 font-bold pr-4">跨区域交易水</th>
                  </tr>
                </thead>
                <tbody>
                  {region.data.map((row, rowIdx) => (
                    <tr key={rowIdx} className="border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors">
                      <td className="py-3 px-3 font-medium text-gray-800 border-r border-gray-100 text-left pl-4">{row.label}</td>
                      <td className="py-3 px-3 font-medium text-[#1d4ed8]">{row.surface}</td>
                      <td className="py-3 px-3 font-medium text-[#1d4ed8]">{row.ground}</td>
                      <td className="py-3 px-3 font-medium text-[#1d4ed8]">{row.unconventional}</td>
                      <td className="py-3 px-3 font-medium text-[#1d4ed8]">{row.external}</td>
                      <td className="py-3 px-3 font-medium text-[#1d4ed8] pr-4">{row.cross}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
