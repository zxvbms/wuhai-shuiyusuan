import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ChevronDown, Camera, CheckCircle2 } from 'lucide-react';

export default function AddInspection() {
  const { goBack } = useNavigation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    goBack();
  };

  const FormField = ({ label, required = false, children }: { label: string, required?: boolean, children: React.ReactNode }) => (
    <div className="flex flex-col space-y-1.5 mb-5">
      <label className="text-sm font-bold text-gray-800 flex items-center">
        {required && <span className="text-red-500 mr-1">*</span>}
        {label}
      </label>
      {children}
    </div>
  );

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Header - Solid Blue */}
      <div className="bg-[#1d4ed8] px-4 py-4 text-white text-center shadow-sm mb-4 sticky top-0 z-10 flex items-center justify-between">
        <button onClick={goBack} className="p-2 -ml-2 text-white/80 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
        </button>
        <h2 className="text-lg font-bold tracking-wide">添加巡检事件</h2>
        <div className="w-10"></div> {/* Spacer for centering */}
      </div>

      <form onSubmit={handleSubmit} className="px-4 space-y-4">
        <div className="bg-white rounded-md p-5 shadow-sm border border-gray-200">
          <FormField label="事件名称:" required>
            <input
              type="text"
              placeholder="请输入事件名称"
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1d4ed8] focus:border-[#1d4ed8] transition-all"
            />
          </FormField>

          <FormField label="来源类型:" required>
            <div className="relative">
              <select className="w-full bg-white border border-gray-300 rounded pl-3 pr-10 py-2 text-sm appearance-none focus:outline-none focus:ring-1 focus:ring-[#1d4ed8] focus:border-[#1d4ed8] transition-all text-gray-800">
                <option>监督检查</option>
                <option>群众举报</option>
                <option>上级交办</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <ChevronDown size={16} className="text-gray-500" />
              </div>
            </div>
          </FormField>

          <FormField label="发现线索/收到材料时间:" required>
            <input
              type="text"
              defaultValue="2025-01-01 08:00:00"
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1d4ed8] focus:border-[#1d4ed8] transition-all text-gray-800"
            />
          </FormField>

          <FormField label="上报人员:" required>
            <input
              type="text"
              placeholder="请输入上报人员姓名"
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1d4ed8] focus:border-[#1d4ed8] transition-all"
            />
          </FormField>
        </div>

        <div className="bg-white rounded-md p-5 shadow-sm border border-gray-200">
          <FormField label="当事人:" required>
            <input
              type="text"
              placeholder="请输入当事人姓名或单位"
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1d4ed8] focus:border-[#1d4ed8] transition-all"
            />
          </FormField>

          <FormField label="当事人联系方式:" required>
            <input
              type="text"
              placeholder="请输入联系电话"
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1d4ed8] focus:border-[#1d4ed8] transition-all"
            />
          </FormField>

          <FormField label="地址:" required>
            <input
              type="text"
              placeholder="请输入详细地址"
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1d4ed8] focus:border-[#1d4ed8] transition-all"
            />
          </FormField>
        </div>

        <div className="bg-white rounded-md p-5 shadow-sm border border-gray-200">
          <FormField label="现场照片:" required>
            <div className="grid grid-cols-3 gap-3">
              <div className="aspect-square bg-gray-50 border border-dashed border-gray-300 rounded flex flex-col items-center justify-center cursor-pointer hover:border-[#1d4ed8] hover:bg-blue-50 transition-all group">
                <Camera size={24} className="text-gray-400 group-hover:text-[#1d4ed8] mb-1" />
                <span className="text-xs text-gray-500 group-hover:text-[#1d4ed8]">拍摄/上传</span>
              </div>
            </div>
          </FormField>

          <FormField label="事件描述:" required>
            <textarea
              rows={4}
              placeholder="请详细描述事件情况..."
              className="w-full bg-white border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-[#1d4ed8] focus:border-[#1d4ed8] transition-all resize-none"
            ></textarea>
          </FormField>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded shadow-sm text-[15px] font-bold text-white bg-[#1d4ed8] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d4ed8] mt-6 transition-colors"
        >
          <CheckCircle2 size={18} />
          <span>提交上报</span>
        </button>
      </form>
    </div>
  );
}
