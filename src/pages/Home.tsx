import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ChevronDown, ScanLine } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { name: '1月', 申请量: 2200, 下达量: 2200, 执行量: 2200, 调整量: 0, 决算结果: 2200 },
  { name: '2月', 申请量: 2300, 下达量: 2300, 执行量: 2300, 调整量: 0, 决算结果: 2300 },
  { name: '3月', 申请量: 2500, 下达量: 2500, 执行量: 2500, 调整量: 0, 决算结果: 2500 },
  { name: '4月', 申请量: 2300, 下达量: 2300, 执行量: 2300, 调整量: 0, 决算结果: 2300 },
  { name: '5月', 申请量: 4200, 下达量: 4200, 执行量: 4200, 调整量: 0, 决算结果: 4200 },
  { name: '6月', 申请量: 2100, 下达量: 2100, 执行量: 2100, 调整量: 0, 决算结果: 2100 },
];

export default function Home() {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState('水预算台账');

  const menuItems = [
    { icon: <IconUsers />, label: '取用水户管理', path: 'users' },
    { icon: <IconBalance />, label: '结余额度', path: 'home' },
    { icon: <IconEvaluation />, label: '评价体系', path: 'evaluation' },
    { icon: <IconPractice />, label: '实践体系', path: 'practice' },
    { icon: <IconRules />, label: '制度体系', path: 'rules' },
    { icon: <IconSupport />, label: '支撑体系', path: 'support' },
    { icon: <IconWater />, label: '非常规水', path: 'home' },
  ];

  const warnings = [
    { label: '临超预算', value: 2, danger: true },
    { label: '临超计划', value: 2, danger: true },
    { label: '临超许可', value: 0, danger: false },
    { label: '许可证临期', value: 2, danger: true },
    { label: '超预算', value: 2, danger: true },
    { label: '超计划', value: 2, danger: true },
    { label: '超许可', value: 0, danger: false },
    { label: '许可证过期', value: 2, danger: true },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-6">
      {/* Top Data Section - Solid Blue */}
      <div className="bg-[#1d4ed8] px-4 pt-4 pb-12 text-white relative">
        <button className="absolute top-4 right-4 p-2 text-white/80 hover:text-white transition-colors">
          <ScanLine size={24} />
        </button>
        <div className="mb-4">
          <span className="text-sm text-blue-100 font-medium">有效取水许可量</span>
          <div className="flex items-baseline mt-1">
            <h2 className="text-3xl font-bold">20,888.73</h2>
            <span className="text-sm ml-1 text-blue-100 font-medium">万m³</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 pt-4 border-t border-blue-600">
          <div className="flex flex-col">
            <span className="text-xs text-blue-200 mb-1">预算下达量</span>
            <div className="flex items-baseline">
              <span className="text-lg font-bold">412.27</span>
              <span className="text-[10px] ml-0.5 text-blue-200">万m³</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-blue-200 mb-1">实际用水量</span>
            <div className="flex items-baseline">
              <span className="text-lg font-bold">52.61</span>
              <span className="text-[10px] ml-0.5 text-blue-200">万m³</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-blue-200 mb-1">执行进度</span>
            <span className="text-lg font-bold text-yellow-300">12.76%</span>
          </div>
        </div>
      </div>

      {/* Grid Menu */}
      <div className="px-4 -mt-6 relative z-10 mb-4">
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
          <div className="grid grid-cols-4 gap-y-5 gap-x-2">
            {menuItems.map((item, idx) => (
              <button
                key={idx}
                onClick={() => navigate(item.path as any)}
                className="flex flex-col items-center justify-start space-y-2 group"
              >
                <div className="w-12 h-12 flex items-center justify-center transition-transform group-hover:scale-105">
                  {item.icon}
                </div>
                <span className="text-xs font-medium text-gray-700">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Warnings */}
      <div className="px-4 mb-4">
        <div className="flex items-center mb-2">
          <div className="w-1 h-4 bg-[#1d4ed8] rounded-sm mr-2"></div>
          <h3 className="text-[15px] font-bold text-gray-800">预警监控</h3>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {warnings.map((w, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center justify-center py-2 rounded-md border ${
                w.danger 
                  ? 'bg-red-50 border-red-200' 
                  : 'bg-white border-gray-200'
              }`}
            >
              <span className={`text-[10px] font-medium mb-1 ${w.danger ? 'text-red-600' : 'text-gray-500'}`}>{w.label}</span>
              <span className={`text-lg font-bold ${w.danger ? 'text-red-600' : 'text-gray-800'}`}>
                {w.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Tabs & Chart Section */}
      <div className="bg-white border-t border-gray-200 pt-2 flex-1">
        <div className="flex px-4 border-b border-gray-200">
          {['水预算台账', '用水信息', '水权交易', '水权贷'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 text-sm font-medium relative transition-colors ${
                activeTab === tab ? 'text-[#1d4ed8]' : 'text-gray-500'
              }`}
            >
              {tab}
              {activeTab === tab && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1d4ed8]" />
              )}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="p-4 flex flex-wrap gap-2">
          {['区域 乌海市', '直管类型 全部', '水源类型 全部', '行业 全部', '用途 全部'].map((filter, idx) => (
            <div key={idx} className="flex items-center px-2 py-1 bg-gray-50 border border-gray-200 rounded text-xs text-gray-600">
              {filter}
              <ChevronDown size={12} className="ml-1 text-gray-400" />
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="px-4 pb-4">
          <div className="h-64 w-full bg-white rounded-md p-2 border border-gray-200">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 20, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} />
                <Tooltip contentStyle={{ borderRadius: '4px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                <Line type="monotone" dataKey="申请量" stroke="#1d4ed8" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
                <Line type="monotone" dataKey="下达量" stroke="#0ea5e9" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="执行量" stroke="#eab308" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="调整量" stroke="#10b981" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="决算结果" stroke="#6b7280" strokeWidth={2} strokeDasharray="3 3" dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-right text-[10px] text-gray-500 mt-1">单位: 万 m³</div>
        </div>

        {/* Table */}
        <div className="px-4 pb-4 overflow-x-auto">
          <table className="w-full text-xs text-center border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-50 text-gray-700 border-b border-gray-200">
                <th className="py-2 px-2 font-medium border-r border-gray-200">月份</th>
                <th className="py-2 px-2 font-medium border-r border-gray-200">申请量</th>
                <th className="py-2 px-2 font-medium border-r border-gray-200">下达量</th>
                <th className="py-2 px-2 font-medium border-r border-gray-200">执行量</th>
                <th className="py-2 px-2 font-medium border-r border-gray-200">调整量</th>
                <th className="py-2 px-2 font-medium">决算评估</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5, 6].map((month) => (
                <tr key={month} className="text-gray-600 border-b border-gray-200 last:border-0 even:bg-gray-50">
                  <td className="py-2 px-2 border-r border-gray-200">{month}月</td>
                  <td className="py-2 px-2 border-r border-gray-200"></td>
                  <td className="py-2 px-2 border-r border-gray-200"></td>
                  <td className="py-2 px-2 border-r border-gray-200"></td>
                  <td className="py-2 px-2 border-r border-gray-200"></td>
                  <td className="py-2 px-2"></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// Custom SVG Icons matching the requested flat, multi-tone style
const IconUsers = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="8" width="40" height="26" rx="3" fill="#4096ff"/>
    <rect x="4" y="26" width="40" height="8" fill="#1677ff"/>
    <path d="M18 42h12v4H18v-4z" fill="#4096ff"/>
    <path d="M22 34h4v8h-4v-8z" fill="#1677ff"/>
    <path d="M12 22l8-8 6 6 10-10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const IconBalance = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="6" width="36" height="36" rx="6" fill="#ffc53d"/>
    <rect x="6" y="28" width="36" height="14" rx="6" fill="#faad14"/>
    <path d="M24 14v10h10" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="24" cy="24" r="14" stroke="#fff" strokeWidth="3" strokeDasharray="60 20"/>
  </svg>
);

const IconEvaluation = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="10" y="6" width="28" height="36" rx="4" fill="#36cfc9"/>
    <path d="M18 4h12v8H18V4z" fill="#13c2c2" rx="2"/>
    <path d="M18 22h12M18 30h8" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const IconPractice = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="24" cy="24" r="20" fill="#4096ff"/>
    <path d="M16 18h10a6 6 0 0 1 0 12h-6" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="14" cy="18" r="4" fill="#fff"/>
    <circle cx="22" cy="30" r="4" fill="#fff"/>
  </svg>
);

const IconRules = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="18" y="12" width="24" height="32" rx="3" fill="#87e8de"/>
    <rect x="6" y="4" width="24" height="32" rx="3" fill="#13c2c2"/>
    <path d="M12 14h12M12 22h12M12 30h8" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

const IconSupport = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="8" width="36" height="14" rx="3" fill="#ff7a45"/>
    <rect x="6" y="26" width="36" height="14" rx="3" fill="#ff9c6e"/>
    <path d="M14 15h8M14 33h8" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
    <circle cx="34" cy="15" r="3" fill="#fff"/>
    <circle cx="34" cy="33" r="3" fill="#fff"/>
  </svg>
);

const IconWater = () => (
  <svg width="40" height="40" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M24 6C24 6 10 20 10 32C10 39.732 16.268 46 24 46C31.732 46 38 39.732 38 32C38 20 24 6 24 6Z" fill="#69c0ff"/>
    <path d="M24 16C24 16 14 26 14 34C14 39.5228 18.4772 44 24 44C29.5228 44 34 39.5228 34 34C34 26 24 16 24 16Z" fill="#1677ff"/>
    <path d="M19 34a5 5 0 0 0 5 5" stroke="#fff" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);
