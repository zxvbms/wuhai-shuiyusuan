import React, { useState } from 'react';
import { Award, Building2, FileText, AlertCircle } from 'lucide-react';

export default function EvaluationDetail() {
  const [activeTab, setActiveTab] = useState('许可证1');

  const deductions = [
    { id: 1, indicator: '未经批准擅自取水的', score: '20分', selfScore: '', reason: '' },
    { id: 2, indicator: '未依照批准的取水许可规定条件取水的', score: '10分', selfScore: '', reason: '' },
    { id: 3, indicator: '未取得取水申请批准文件擅自建设取水工程或者设施的', score: '10分', selfScore: '', reason: '' },
    { id: 4, indicator: '申请人隐瞒有关情况或者提供虚假材料骗取取水许可申请批准文件或者取水许可证', score: '20分', selfScore: '', reason: '' },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Header - Solid Blue */}
      <div className="bg-[#1d4ed8] px-4 py-6 text-white text-center shadow-sm mb-4">
        <div className="w-14 h-14 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3 border border-white/20">
          <Award size={28} className="text-white" />
        </div>
        <h2 className="text-xl font-bold tracking-wide">
          乌达公司2025年取用水信用评价
        </h2>
      </div>

      <div className="px-4 space-y-4">
        {/* Top Card */}
        <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4 pb-4 border-b border-gray-100">
            <Building2 size={20} className="text-[#1d4ed8] shrink-0" />
            <div>
              <h3 className="text-[15px] font-bold text-gray-900">乌达公司</h3>
              <span className="text-xs text-gray-500">2025年度信用评价</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-y-3 text-sm text-gray-600">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-0.5">企业信用等级</span>
              <span className="font-bold text-[#1d4ed8] text-base">A</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs text-gray-500 mb-0.5">地址</span>
              <span className="font-medium text-gray-900">xxx</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-0.5">所在区域</span>
              <span className="font-medium text-gray-900">乌达区</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs text-gray-500 mb-0.5">联系电话</span>
              <span className="font-medium text-gray-900">xxxx</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-0.5">联系人</span>
              <span className="font-medium text-gray-900">xxx</span>
            </div>
            <div className="flex flex-col text-right">
              <span className="text-xs text-gray-500 mb-0.5">企业自评等级</span>
              <span className="inline-block self-end font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">优秀</span>
            </div>
            <div className="col-span-2 flex flex-col pt-3 border-t border-gray-100 mt-1">
              <span className="text-xs text-gray-500 mb-0.5">企业自评分数</span>
              <span className="font-bold text-[#1d4ed8] text-xl">100</span>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex space-x-1 px-1">
          {['许可证1', '许可证2'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-t-md text-sm font-medium transition-colors ${
                activeTab === tab 
                  ? 'bg-[#1d4ed8] text-white' 
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-b-0 border-gray-200'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-md rounded-tl-none p-4 shadow-sm border border-gray-200 -mt-1 relative z-0">
          <div className="space-y-3 text-sm text-gray-600 mb-5 pb-5 border-b border-gray-100">
            <div className="flex items-center space-x-2">
              <FileText size={16} className="text-[#1d4ed8]" />
              <span className="text-gray-500 w-32">项目名称:</span> 
              <span className="font-medium text-gray-900">xxxx</span>
            </div>
            <div className="flex items-center space-x-2">
              <FileText size={16} className="text-[#1d4ed8]" />
              <span className="text-gray-500 w-32">取用水许可证编号:</span> 
              <span className="font-medium text-gray-900">xxxx</span>
            </div>
            <div className="flex items-center space-x-2">
              <Award size={16} className="text-[#1d4ed8]" />
              <span className="text-gray-500 w-32">自评等级:</span> 
            </div>
            <div className="flex items-center space-x-2">
              <Award size={16} className="text-[#1d4ed8]" />
              <span className="text-gray-500 w-32">自评分数:</span> 
            </div>
          </div>

          {/* Table */}
          <div className="flex items-center space-x-2 mb-3">
            <div className="w-1 h-4 bg-orange-500 rounded-sm"></div>
            <h4 className="text-[15px] font-bold text-gray-800 flex items-center">
              <AlertCircle size={16} className="text-orange-500 mr-2" />
              扣分项明细
            </h4>
          </div>
          <div className="overflow-x-auto rounded border border-gray-200">
            <table className="w-full text-xs text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-gray-50 text-gray-600 border-b border-gray-200">
                  <th className="py-3 px-3 font-medium text-center w-12 border-r border-gray-200">序号</th>
                  <th className="py-3 px-3 font-medium border-r border-gray-200">评价指标</th>
                  <th className="py-3 px-3 font-medium text-center w-20 border-r border-gray-200">扣分分值</th>
                  <th className="py-3 px-3 font-medium text-center w-20 border-r border-gray-200">自评得分</th>
                  <th className="py-3 px-3 font-medium">扣分原因</th>
                </tr>
              </thead>
              <tbody>
                {deductions.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-100 last:border-0 hover:bg-blue-50/50 transition-colors">
                    <td className="py-3 px-3 text-center text-gray-500 border-r border-gray-100">{item.id}</td>
                    <td className="py-3 px-3 text-gray-800 border-r border-gray-100 leading-relaxed">{item.indicator}</td>
                    <td className="py-3 px-3 text-center font-medium text-orange-600 border-r border-gray-100">{item.score}</td>
                    <td className="py-3 px-3 text-center font-medium text-[#1d4ed8] border-r border-gray-100">{item.selfScore}</td>
                    <td className="py-3 px-3 text-gray-800">{item.reason}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
