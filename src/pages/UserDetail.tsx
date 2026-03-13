import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ChevronRight, Building2, FileText, Activity, Droplets } from 'lucide-react';

export default function UserDetail() {
  const { navigate } = useNavigation();

  const SectionTitle = ({ title, icon }: { title: string, icon: React.ReactNode }) => (
    <div className="flex items-center mb-4 border-b border-gray-200 pb-2">
      <div className="w-1 h-4 bg-[#1d4ed8] rounded-sm mr-2"></div>
      <h3 className="text-[15px] font-bold text-gray-800 flex items-center">
        {title}
      </h3>
    </div>
  );

  const InfoRow = ({ label, value, highlight = false }: { label: string, value: string, highlight?: boolean }) => (
    <div className="flex justify-between items-start py-2.5 border-b border-gray-100 last:border-0">
      <span className="text-sm text-gray-500 w-1/3 shrink-0">{label}</span>
      <span className={`text-sm text-right ${highlight ? 'text-green-700 font-medium' : 'text-gray-900'}`}>
        {value}
      </span>
    </div>
  );

  const LedgerRow = ({ label, value, path }: { label: string, value: string, path: string }) => (
    <button
      onClick={() => navigate(path as any)}
      className="w-full flex justify-between items-center py-3 px-2 border-b border-gray-100 last:border-0 hover:bg-gray-50 transition-colors group"
    >
      <span className="text-sm text-gray-700 group-hover:text-[#1d4ed8]">{label}</span>
      <div className="flex items-center space-x-2">
        <span className="text-[15px] font-bold text-[#1d4ed8]">{value}</span>
        <ChevronRight size={16} className="text-gray-400 group-hover:text-[#1d4ed8]" />
      </div>
    </button>
  );

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Header - Solid Blue */}
      <div className="bg-[#1d4ed8] px-4 py-6 text-white text-center shadow-sm mb-4">
        <div className="w-14 h-14 mx-auto bg-white/10 rounded-full flex items-center justify-center mb-3 border border-white/20">
          <Building2 size={28} className="text-white" />
        </div>
        <h2 className="text-xl font-bold tracking-wide">xxxx有限公司</h2>
      </div>

      <div className="px-4 space-y-4">
        {/* 单位基本信息 */}
        <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200">
          <SectionTitle title="单位基本信息" icon={<Building2 size={16} />} />
          <div className="space-y-0">
            <InfoRow label="企业名称" value="xxxx公司" />
            <InfoRow label="统一社会信用代码" value="xxxx" />
            <InfoRow label="所在区域" value="海南区" />
            <InfoRow label="所在工业园区" value="海南低碳产业园" />
            <InfoRow label="地址" value="xxx" />
            <InfoRow label="联系人" value="xxx" />
            <InfoRow label="联系电话" value="xxx" />
            <InfoRow label="是否为高耗水企业" value="是" />
            <InfoRow label="是否重点监控" value="是" />
            <InfoRow label="评价等级" value="优秀" highlight />
            <InfoRow label="是否列入水预算负面清单" value="否" />
            <InfoRow label="是否列入用水权交易负面清单" value="否" />
          </div>
        </div>

        {/* 取水许可信息 */}
        <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200">
          <SectionTitle title="取水许可信息" icon={<FileText size={16} />} />
          <div className="space-y-0">
            <InfoRow label="项目名称" value="xxx" />
            <InfoRow label="取水许可证编号" value="xxx" />
            <InfoRow label="区域" value="xxxx" />
            <InfoRow label="取水权人" value="xxx" />
            <InfoRow label="发证机关" value="xxx" />
            <InfoRow label="生效日期" value="2025-01-01" />
            <InfoRow label="到期日期" value="2025-12-01" />
            <InfoRow label="取水许可量" value="xxxxx 万m³" />
            <InfoRow label="地表水" value="xxxxx 万m³" />
            <InfoRow label="地下水" value="xxxxx 万m³" />
            <InfoRow label="非常规水" value="xxxxx 万m³" />
            <InfoRow label="取水地址" value="xxxx" />
          </div>
        </div>

        {/* 水预算台账 */}
        <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200">
          <SectionTitle title="水预算台账" icon={<Activity size={16} />} />
          <div className="flex flex-col">
            <LedgerRow label="申请水量" value="120.5" path="applied-water" />
            <LedgerRow label="复核水量" value="120.5" path="applied-water" />
            <LedgerRow label="预算下达水量" value="110.0" path="applied-water" />
            <LedgerRow label="执行量" value="45.2" path="applied-water" />
            <LedgerRow label="监测用水量" value="46.0" path="applied-water" />
            <LedgerRow label="调整量" value="0.0" path="applied-water" />
            <LedgerRow label="决算量" value="-" path="applied-water" />
            <LedgerRow label="历史用水" value="-" path="historical-water" />
          </div>
        </div>

        {/* 关联计量设施 */}
        <div className="bg-white rounded-md p-4 shadow-sm border border-gray-200">
          <SectionTitle title="关联计量设施" icon={<Droplets size={16} />} />
          <div className="space-y-3 mt-2">
            {[1, 2].map((i) => (
              <div key={i} className="flex justify-between items-center p-3 bg-gray-50 rounded border border-gray-200">
                <span className="text-sm text-gray-800 leading-relaxed flex-1 pr-4">
                  乌海市海勃湾城市供水有限公司+地下水+北水源地N4#
                </span>
                <span className="text-xs text-[#1d4ed8] bg-blue-50 px-2 py-1 rounded border border-blue-200 shrink-0">
                  已上报
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
