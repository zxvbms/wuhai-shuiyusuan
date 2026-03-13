import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Search, ChevronDown, Award, Building2 } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

export default function Evaluation() {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState('取用水信用评价');
  const [searchTerm, setSearchTerm] = useState('');

  const tabs = ['取用水信用评价', '水预算负面清单', '用水权交易负面清单'];

  const data = [
    { name: '优秀', value: 25, color: '#10b981' }, // Emerald
    { name: '良好', value: 25, color: '#3b82f6' }, // Blue
    { name: '一般', value: 25, color: '#f59e0b' }, // Amber
    { name: '较差', value: 25, color: '#ef4444' }, // Red
  ];

  const companies = [
    { name: '乌达公司', region: '乌达区', contact: 'xxx', score: 100, grade: 'A', address: 'xxx', phone: 'xxxx', selfGrade: '优秀' },
    { name: 'xxxx公司', region: '乌达区', contact: 'xxx', score: 100, grade: 'A', address: 'xxx', phone: 'xxxx', selfGrade: '优秀' },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Tabs - Solid Background */}
      <div className="bg-white px-4 py-3 shadow-sm sticky top-0 z-10 border-b border-gray-200 mb-4">
        <div className="flex space-x-2 overflow-x-auto pb-1 scrollbar-hide">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded text-sm font-medium whitespace-nowrap transition-colors ${
                activeTab === tab 
                  ? 'bg-[#1d4ed8] text-white' 
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="px-4 space-y-4">
        {/* Chart Section */}
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
          <div className="flex justify-between items-center mb-4">
            <div className="flex items-center">
              <div className="w-1 h-4 bg-[#1d4ed8] rounded-sm mr-2"></div>
              <h3 className="text-[15px] font-bold text-gray-800 flex items-center">
                <Award size={16} className="text-[#1d4ed8] mr-2" />
                评价概览
              </h3>
            </div>
            <div className="px-2 py-1 bg-blue-50 text-[#1d4ed8] text-xs font-medium rounded border border-blue-200">
              参与自评企业 100 家
            </div>
          </div>
          
          <div className="h-56 w-full relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="value"
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Legend 
                  verticalAlign="bottom" 
                  height={36}
                  iconType="circle"
                  wrapperStyle={{ fontSize: '12px', paddingTop: '20px' }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Custom Labels for Donut */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center -mt-8">
              <div className="text-center">
                <div className="text-xs text-gray-500 mb-1">总计</div>
                <div className="text-3xl font-bold text-gray-900">100</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4 space-y-3">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2 flex-1">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">区域</span>
              <div className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 flex justify-between items-center">
                <span>乌海市</span>
                <ChevronDown size={14} className="text-gray-400" />
              </div>
            </div>
            <div className="flex items-center space-x-2 flex-1">
              <span className="text-sm font-medium text-gray-700 whitespace-nowrap">评价等级</span>
              <div className="flex-1 bg-gray-50 border border-gray-200 rounded-md px-3 py-2 text-sm text-gray-700 flex justify-between items-center">
                <span>全部</span>
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
        <div className="space-y-3">
          {companies.map((company, idx) => (
            <div
              key={idx}
              onClick={() => navigate('evaluation-detail')}
              className="bg-white rounded-md p-4 shadow-sm border border-gray-200 active:bg-blue-50 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start mb-3 border-b border-gray-100 pb-2">
                <div className="flex items-center space-x-2">
                  <Building2 size={18} className="text-[#1d4ed8]" />
                  <h3 className="text-[15px] font-bold text-gray-900">{company.name}</h3>
                </div>
                <span className="text-xs px-2 py-0.5 rounded border text-green-700 bg-green-50 border-green-200">
                  {company.selfGrade}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
                <div className="flex">
                  <span className="w-24 text-gray-500">所在区域:</span>
                  <span className="flex-1 truncate">{company.region}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">企业信用等级:</span>
                  <span className="flex-1 font-medium text-[#1d4ed8]">{company.grade}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">联系人:</span>
                  <span className="flex-1 truncate">{company.contact}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">地址:</span>
                  <span className="flex-1 truncate">{company.address}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">企业自评分数:</span>
                  <span className="flex-1 font-medium text-[#1d4ed8]">{company.score}</span>
                </div>
                <div className="flex">
                  <span className="w-24 text-gray-500">联系电话:</span>
                  <span className="flex-1 truncate">{company.phone}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
