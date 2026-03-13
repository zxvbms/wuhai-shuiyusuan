import React from 'react';
import { BookOpen, Building2, Droplets, Target, Zap } from 'lucide-react';

export default function Practice() {
  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Header - Solid Blue */}
      <div className="bg-[#1d4ed8] px-4 py-6 text-white text-center shadow-sm mb-4">
        <div className="w-14 h-14 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3 border border-white/20">
          <BookOpen size={28} className="text-white" />
        </div>
        <h2 className="text-xl font-bold tracking-wide">实践体系</h2>
      </div>

      <div className="px-4 space-y-4">
        {/* Info Card */}
        <div className="bg-white rounded-md shadow-sm border border-gray-200 overflow-hidden">
          <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center space-x-2">
            <Building2 size={18} className="text-[#1d4ed8] shrink-0" />
            <h3 className="text-[15px] font-bold text-gray-900">内蒙古佳瑞米精细化工有限公司</h3>
          </div>
          <div className="grid grid-cols-2 divide-x divide-gray-200 text-sm">
            <div className="p-3 flex flex-col">
              <span className="text-xs text-gray-500 mb-1">行业</span>
              <span className="font-medium text-gray-900">精细化工</span>
            </div>
            <div className="p-3 flex flex-col">
              <span className="text-xs text-gray-500 mb-1">节水类型</span>
              <span className="font-medium text-green-700">技改节水</span>
            </div>
          </div>
        </div>

        {/* Content Card */}
        <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200 space-y-6">
          <div className="space-y-2">
            <div className="flex items-center mb-2">
              <div className="w-1 h-4 bg-[#1d4ed8] rounded-sm mr-2"></div>
              <h5 className="text-[15px] font-bold text-gray-800 flex items-center">
                <Target size={16} className="text-[#1d4ed8] mr-2" />
                一、企业概况
              </h5>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed text-justify pl-3">
              公司成立于2013年，位于乌海市乌达工业园区，是一家专注于农药中间体及精细化工品研发、生产与贸易的国家级高新技术企业。已建成产3000吨2-氯-6-三氯甲基吡啶(CTC)和年产1000吨3,3-二氯-5-三氟甲基吡啶(DCTF)的规模化生产线。公司立足于打造全球领先的吡啶氟化系列产品研发与生产基地。主要产品如CTC、DCTF属于国际粮农组织倡导的含氟高效农药中间体，产品在全球市场应用广泛。
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center mb-2">
              <div className="w-1 h-4 bg-[#1d4ed8] rounded-sm mr-2"></div>
              <h5 className="text-[15px] font-bold text-gray-800 flex items-center">
                <Droplets size={16} className="text-[#1d4ed8] mr-2" />
                二、水预算管理
              </h5>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed text-justify pl-3">
              水预算管理由公司动力车间负责，设立水管理专职岗位，负责厂区各车间的生产用水、辅助生产用水、办公区生活用水、绿化用水管理。2024年申请预算额度<span className="font-medium text-[#1d4ed8] mx-1">7.77万 m³</span>，水行政主管部门下达预算额度<span className="font-medium text-[#1d4ed8] mx-1">5.54万 m³</span>，根据实际用水情况于11月将节余额度<span className="font-medium text-[#1d4ed8] mx-1">3.5万 m³</span>通过水权市场交易给内蒙古兴发科技有限公司，实际决算水量<span className="font-medium text-[#1d4ed8] mx-1">4.24万 m³</span>。
            </p>
          </div>

          <div className="space-y-2">
            <div className="flex items-center mb-2">
              <div className="w-1 h-4 bg-[#1d4ed8] rounded-sm mr-2"></div>
              <h5 className="text-[15px] font-bold text-gray-800 flex items-center">
                <Zap size={16} className="text-[#1d4ed8] mr-2" />
                三、推动节水技改
              </h5>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed text-justify pl-3">
              企业主要用水系统为循环水系统用水和蒸发冷却系统，针对用水环节开展节水技改。首先，从系统设计上保障节水，所有生产项目均配套闭式循环冷却水系统，冷却水经使用后...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
