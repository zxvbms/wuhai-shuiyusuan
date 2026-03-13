import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ScanLine, LogOut, User, Building2, ShieldCheck, ChevronRight } from 'lucide-react';

export default function Profile() {
  const { navigate } = useNavigation();

  const handleLogout = () => {
    navigate('login');
  };

  return (
    <div className="flex flex-col min-h-full bg-[#f3f4f6] pb-8">
      {/* Header - Solid Blue */}
      <div className="bg-[#1d4ed8] px-4 py-4 text-white text-center shadow-sm mb-4 sticky top-0 z-10 flex items-center justify-between">
        <div className="w-8"></div> {/* Spacer for centering */}
        <h2 className="text-lg font-bold tracking-wide">我的</h2>
        <button className="p-1 text-white/80 hover:text-white">
          <ScanLine size={20} />
        </button>
      </div>

      <div className="px-4 space-y-4">
        {/* Profile Card - Solid Blue */}
        <div className="bg-[#1d4ed8] rounded-md p-5 shadow-sm text-white relative overflow-hidden">
          {/* Subtle background pattern */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-black/5 rounded-full -ml-8 -mb-8"></div>

          <div className="flex items-center space-x-4 mb-6 relative z-10">
            <div className="w-14 h-14 bg-white/20 rounded-full border border-white/30 flex items-center justify-center shrink-0">
              <User size={28} className="text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold tracking-wide mb-1">乌海市水资源服务中心</h2>
              <span className="text-xs bg-white/20 px-2 py-0.5 rounded border border-white/30">管理员</span>
            </div>
          </div>
          
          <div className="space-y-3 relative z-10 bg-black/10 p-4 rounded border border-white/10">
            <div className="flex items-center text-sm">
              <ShieldCheck size={16} className="text-blue-200 mr-2 shrink-0" />
              <span className="text-blue-100 w-14">账号：</span>
              <span className="font-medium tracking-wide">150300</span>
            </div>
            <div className="flex items-center text-sm">
              <Building2 size={16} className="text-blue-200 mr-2 shrink-0" />
              <span className="text-blue-100 w-14">部门：</span>
              <span className="font-medium tracking-wide">水务局管理人员</span>
            </div>
          </div>
        </div>

        {/* Logout Button */}
        <button
          onClick={handleLogout}
          className="w-full flex items-center justify-center space-x-2 py-3 px-4 rounded shadow-sm text-[15px] font-bold text-red-600 bg-white border border-red-200 hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 mt-6 transition-colors"
        >
          <LogOut size={18} />
          <span>退出登录</span>
        </button>
      </div>
    </div>
  );
}
