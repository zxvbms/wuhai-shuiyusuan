import React from 'react';

export default function AppliedWater() {
  const months = [
    { month: '1月', amount: '12.5' },
    { month: '2月', amount: '10.2' },
    { month: '3月', amount: '15.0' },
    { month: '4月', amount: '14.8' },
    { month: '5月', amount: '16.5' },
    { month: '6月', amount: '18.2' },
    { month: '7月', amount: '20.1' },
    { month: '8月', amount: '19.5' },
    { month: '9月', amount: '17.0' },
    { month: '10月', amount: '14.2' },
    { month: '11月', amount: '11.5' },
    { month: '12月', amount: '10.0' },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Header */}
      <div className="bg-[#1d4ed8] px-4 py-6 text-white text-center shadow-sm mb-4">
        <h2 className="text-xl font-bold tracking-wide">
          xxx有限公司
        </h2>
        <span className="inline-block mt-2 text-sm text-blue-100 font-medium">
          水预算申请水量
        </span>
      </div>

      {/* Table */}
      <div className="px-4">
        <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full text-sm text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200 text-gray-700">
                <th className="py-3 px-4 font-medium w-1/2 border-r border-gray-200">月份</th>
                <th className="py-3 px-4 font-medium text-right w-1/2">申请水量 (万m³)</th>
              </tr>
            </thead>
            <tbody>
              {months.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-200 last:border-0 hover:bg-gray-50 transition-colors even:bg-gray-50/50">
                  <td className="py-3 px-4 text-gray-700 border-r border-gray-200">{item.month}</td>
                  <td className="py-3 px-4 font-medium text-[#1d4ed8] text-right">{item.amount}</td>
                </tr>
              ))}
              <tr className="bg-blue-50 border-t border-blue-200">
                <td className="py-4 px-4 font-bold text-gray-900 border-r border-blue-200">合计</td>
                <td className="py-4 px-4 font-bold text-[#1d4ed8] text-right text-base">179.5</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
