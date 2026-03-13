import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ChevronDown, MailOpen, Send, Bell, Filter } from 'lucide-react';

export default function Messages() {
  const { navigate } = useNavigation();
  const [activeTab, setActiveTab] = useState('水预算审批');

  const messages = [
    { type: '预算编制', title: '乌海市广纳煤焦化有限公司的"煤矿(150万t/a)及配套选煤厂(150万t/a)"项目(取水许可证编号:C15030362021-0093) 2026年度生产规模申请已提交，请及时审批!', date: '2026-01-01', unread: true },
    { type: '审核下达', title: '乌海市广纳煤焦化有限公司的"煤矿(150万t/a)及配套选煤厂(150万t/a)"项目(取水许可证编号:C15030362021-0093) 2026年度生产规模申请已提交，请及时审批!', date: '2026-01-01', unread: true },
  ];

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Tabs & Filters - Solid Blue Header */}
      <div className="bg-[#1d4ed8] px-4 pt-4 pb-3 shadow-sm sticky top-0 z-20 mb-4">
        <div className="flex space-x-1 mb-4 bg-blue-800/50 p-1 rounded">
          {['水预算审批', '计划审批'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-2 rounded text-[15px] font-bold transition-all ${
                activeTab === tab 
                  ? 'bg-white text-[#1d4ed8] shadow-sm' 
                  : 'text-blue-100 hover:text-white'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-1.5 bg-white/10 border border-white/20 rounded px-2.5 py-1.5 text-sm font-medium text-white cursor-pointer hover:bg-white/20 transition-colors">
              <Filter size={14} className="text-blue-200" />
              <span>事件类型</span>
              <ChevronDown size={14} className="text-blue-200" />
            </div>
            <div className="flex items-center space-x-1.5 bg-white/10 border border-white/20 rounded px-2.5 py-1.5 text-sm font-medium text-white cursor-pointer hover:bg-white/20 transition-colors">
              <span>未读</span>
              <ChevronDown size={14} className="text-blue-200" />
            </div>
          </div>
          <span className="text-xs text-blue-100">共 {messages.length} 条</span>
        </div>
      </div>

      {/* List */}
      <div className="px-4 space-y-3 pb-24">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            onClick={() => navigate('message-detail')}
            className="bg-white rounded-md p-4 shadow-sm border border-gray-200 relative hover:border-blue-300 transition-all cursor-pointer group"
          >
            {msg.unread && (
              <div className="absolute top-4 right-4 w-2 h-2 bg-red-500 rounded-full"></div>
            )}
            
            <div className="flex items-center space-x-2.5 mb-3">
              <div className={`w-8 h-8 rounded flex items-center justify-center shrink-0 ${
                msg.unread ? 'bg-blue-50 text-[#1d4ed8]' : 'bg-gray-100 text-gray-500'
              }`}>
                <Bell size={16} />
              </div>
              <h3 className="text-[15px] font-bold text-gray-900 tracking-wide">{msg.type}</h3>
            </div>
            
            <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 group-hover:text-gray-800 transition-colors">
              {msg.title}
            </p>
            
            <div className="flex justify-between items-center pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500">{msg.date}</span>
              <div className="flex items-center text-xs text-[#1d4ed8] font-medium group-hover:underline">
                查看详情
                <ChevronDown size={14} className="ml-1 -rotate-90" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Mark all as read button */}
      <div className="fixed bottom-24 left-0 right-0 flex justify-center z-30 pointer-events-none">
        <button className="flex items-center space-x-2 bg-white px-5 py-2.5 rounded shadow-md border border-gray-200 text-gray-700 text-sm font-medium pointer-events-auto active:bg-gray-50 transition-colors hover:text-[#1d4ed8]">
          <MailOpen size={16} className="text-gray-400 group-hover:text-[#1d4ed8]" />
          <span>全部已读</span>
        </button>
      </div>
    </div>
  );
}
