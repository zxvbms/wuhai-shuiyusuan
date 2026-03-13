import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function HistoricalWater() {
  const data = [
    { name: '1月', '2024': 100, '2025': 150 },
    { name: '2月', '2024': 130, '2025': 110 },
    { name: '3月', '2024': 230, '2025': 210 },
    { name: '4月', '2024': 110, '2025': 150 },
    { name: '5月', '2024': 130, '2025': 110 },
    { name: '6月', '2024': 210, '2025': 220 },
    { name: '7月', '2024': 200, '2025': 230 },
    { name: '8月', '2024': 110, '2025': 110 },
  ];

  const years = [
    { year: '2025', amount: '128.5' },
    { year: '2024', amount: '142.0' },
    { year: '2023', amount: '135.2' },
    { year: '2022', amount: '150.1' },
    { year: '2021', amount: '148.8' },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Header */}
      <div className="bg-[#1d4ed8] px-4 py-6 text-white text-center shadow-sm mb-4">
        <h2 className="text-xl font-bold tracking-wide">
          xxxx有限公司
        </h2>
        <span className="inline-block mt-2 text-sm text-blue-100 font-medium">
          历史用水分析
        </span>
      </div>

      <div className="px-4 space-y-4">
        {/* Chart */}
        <div className="bg-white rounded-md shadow-sm border border-gray-200 p-4">
          <div className="flex items-center mb-4">
            <div className="w-1 h-4 bg-[#1d4ed8] rounded-sm mr-2"></div>
            <h3 className="text-[15px] font-bold text-gray-800">月度用水趋势对比</h3>
          </div>
          <div className="h-64 w-full bg-white rounded-md p-2 border border-gray-200">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 10, fill: '#6b7280' }} domain={[0, 250]} />
                <Tooltip contentStyle={{ borderRadius: '4px', border: '1px solid #e5e7eb', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' }} />
                <Legend iconType="circle" wrapperStyle={{ fontSize: '10px', paddingTop: '10px' }} />
                <Line type="monotone" dataKey="2024" stroke="#9ca3af" strokeWidth={2} strokeDasharray="3 3" dot={false} />
                <Line type="monotone" dataKey="2025" stroke="#1d4ed8" strokeWidth={2} dot={{ r: 3 }} activeDot={{ r: 5 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="text-right text-[10px] text-gray-500 mt-1">单位: 万 m³</div>
        </div>

        {/* Table */}
        <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                <th className="py-3 px-4 font-medium w-1/2 border-r border-gray-200">年份</th>
                <th className="py-3 px-4 font-medium text-right w-1/2">年实际用水量 (万m³)</th>
              </tr>
            </thead>
            <tbody>
              {years.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors even:bg-gray-50/50">
                  <td className="py-3 px-4 text-gray-700 border-r border-gray-200">{item.year}</td>
                  <td className="py-3 px-4 font-medium text-[#1d4ed8] text-right">{item.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
