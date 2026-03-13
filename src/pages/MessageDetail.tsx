import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Bell, Calendar, FileText, AlertCircle, ArrowLeft } from 'lucide-react';

export default function MessageDetail() {
  const { goBack } = useNavigation();

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Header - Solid Blue */}
      <div className="bg-[#1d4ed8] px-4 py-4 text-white text-center shadow-sm mb-4 sticky top-0 z-10 flex items-center justify-between">
        <button onClick={goBack} className="p-2 -ml-2 text-white/80 hover:text-white">
          <ArrowLeft size={24} />
        </button>
        <h2 className="text-lg font-bold tracking-wide">消息详情</h2>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      <div className="px-4 space-y-4">
        <div className="bg-white rounded-md p-5 shadow-sm border border-gray-200">
          <div className="space-y-5">
            <div className="flex items-start space-x-3">
              <div className="mt-0.5">
                <FileText size={16} className="text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs text-gray-500 mb-1">事件类型</h3>
                <p className="text-sm font-medium text-gray-900">预算编制</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="mt-0.5">
                <AlertCircle size={16} className="text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs text-gray-500 mb-1">提醒类型</h3>
                <p className="text-sm font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded inline-block border border-orange-100">审批</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="mt-0.5">
                <FileText size={16} className="text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs text-gray-500 mb-2">提醒内容</h3>
                <div className="bg-gray-50 p-4 rounded border border-gray-200">
                  <p className="text-sm text-gray-700 leading-relaxed text-justify">
                    乌海市广纳煤焦化有限公司的"煤矿(150万t/a)及配套选煤厂(150万t/a)"项目(取水许可证编号:C15030362021-0093)
                    <br /><br />
                    <span className="text-[#1d4ed8] font-bold">2026年度生产规模申请已提交，请及时审批!</span>
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <div className="mt-0.5">
                <Calendar size={16} className="text-gray-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xs text-gray-500 mb-1">发送时间</h3>
                <p className="text-sm font-medium text-gray-900">2026-01-01 08:00:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
