import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Search, ChevronDown, Building2 } from 'lucide-react';

export default function Users() {
  const { navigate } = useNavigation();
  const [searchTerm, setSearchTerm] = useState('');

  const users = [
    { name: 'xxxx公司', status: '正常营业', project: 'xxx', region: 'XXXX', directType: 'xxxx', budget: 'xxx 万m³', permitted: 'xxx万m³', monitored: 'xxx 万m³', actual: 'xxx 万m³' },
    { name: 'xxxx公司', status: '正常营业', project: 'xxx', region: 'XXXX', directType: 'xxxx', budget: 'xxx 万m³', permitted: 'xxx万m³', monitored: 'xxx 万m³', actual: 'xxx 万m³' },
    { name: 'xxxx公司', status: '正常营业', project: 'xxx', region: 'XXXX', directType: 'xxxx', budget: 'xxx 万m³', permitted: 'xxx万m³', monitored: 'xxx 万m³', actual: 'xxx 万m³' },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Filters - Solid Background */}
      <div className="bg-white px-4 py-3 shadow-sm sticky top-0 z-10 border-b border-gray-200 mb-4">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm font-medium text-gray-700 whitespace-nowrap">时间</span>
          <div className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 flex justify-between items-center">
            <span>2025-01 — 2025-04</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-3 mb-3">
          <div className="flex items-center space-x-2 flex-1">
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">区域</span>
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 flex justify-between items-center">
              <span>乌海市</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
          <div className="flex items-center space-x-2 flex-1">
            <span className="text-sm font-medium text-gray-700 whitespace-nowrap">直管</span>
            <div className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 flex justify-between items-center">
              <span>乌海市</span>
              <ChevronDown size={14} className="text-gray-400" />
            </div>
          </div>
        </div>

        <div className="relative flex items-center rounded-md overflow-hidden border border-gray-300">
          <input
            type="text"
            placeholder="搜索企业..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-white pl-3 pr-10 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1d4ed8] focus:border-[#1d4ed8]"
          />
          <button className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center bg-gray-50 border-l border-gray-300 active:bg-gray-100">
            <Search size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* List */}
      <div className="px-4 space-y-3">
        {users.map((user, idx) => (
          <div
            key={idx}
            onClick={() => navigate('user-detail')}
            className="bg-white rounded-md p-4 shadow-sm border border-gray-200 active:bg-blue-50 transition-colors cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3 border-b border-gray-100 pb-2">
              <div className="flex items-center space-x-2">
                <Building2 size={18} className="text-[#1d4ed8]" />
                <h3 className="text-[15px] font-bold text-gray-900">{user.name}</h3>
              </div>
              <span className="text-xs px-2 py-0.5 rounded border text-green-700 bg-green-50 border-green-200">
                {user.status}
              </span>
            </div>
            
            <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
              <div className="flex">
                <span className="w-20 text-gray-500">项目名称:</span>
                <span className="flex-1 truncate">{user.project}</span>
              </div>
              <div className="flex">
                <span className="w-20 text-gray-500">所属区域:</span>
                <span className="flex-1 truncate">{user.region}</span>
              </div>
              <div className="flex">
                <span className="w-20 text-gray-500">直管类型:</span>
                <span className="flex-1 truncate">{user.directType}</span>
              </div>
              <div className="flex">
                <span className="w-20 text-gray-500">预算下达量:</span>
                <span className="flex-1 font-medium text-[#1d4ed8]">{user.budget}</span>
              </div>
              <div className="flex">
                <span className="w-20 text-gray-500">许可量:</span>
                <span className="flex-1 font-medium text-gray-900">{user.permitted}</span>
              </div>
              <div className="flex">
                <span className="w-20 text-gray-500">监测用水量:</span>
                <span className="flex-1 font-medium text-gray-900">{user.monitored}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
