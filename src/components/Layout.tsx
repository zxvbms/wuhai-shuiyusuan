import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { ChevronLeft, MoreHorizontal, Circle } from 'lucide-react';

const ROOT_PAGES = ['home', 'inspection', 'messages', 'profile'];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentPage, navigate, goBack } = useNavigation();

  const isRoot = ROOT_PAGES.includes(currentPage);
  const isLogin = currentPage === 'login';

  const getTitle = () => {
    switch (currentPage) {
      case 'home': return '首页';
      case 'users': return '取用水户管理';
      case 'user-detail': return '用水户详情';
      case 'applied-water': return '申请水量详情';
      case 'historical-water': return '历史用水详情';
      case 'evaluation': return '评价体系';
      case 'evaluation-detail': return '信用评价查看';
      case 'practice': return '实践体系';
      case 'rules': return '制度体系';
      case 'rules-search': return '制度体系';
      case 'support': return '支撑体系';
      case 'inspection': return '巡检';
      case 'inspection-detail': return '巡检详情';
      case 'add-inspection': return '巡检事件添加';
      case 'messages': return '消息';
      case 'message-detail': return '消息内容';
      case 'profile': return '我的';
      default: return '';
    }
  };

  if (isLogin) {
    return (
      <div className="w-full h-screen bg-[#f3f4f6] flex flex-col relative overflow-hidden max-w-md mx-auto shadow-2xl font-sans">
        <div className="flex-1 overflow-y-auto overflow-x-hidden relative">
          {children}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full h-screen bg-[#f3f4f6] flex flex-col relative overflow-hidden max-w-md mx-auto shadow-2xl font-sans">
      {/* Top Bar (Government Style - Solid Blue) */}
      <div className="h-12 bg-[#1d4ed8] flex items-center px-4 shrink-0 relative z-40 text-white">
        {!isRoot ? (
          <button onClick={goBack} className="p-1 -ml-1 mr-2 active:bg-blue-800 rounded transition-colors">
            <ChevronLeft size={22} className="text-white" />
          </button>
        ) : (
          <div className="w-6 mr-2"></div> // Spacer
        )}
        <h1 className="text-[17px] font-medium flex-1 text-center pr-6 truncate tracking-wide">{getTitle()}</h1>
        
        {/* WeChat style right capsule - simplified */}
        <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center space-x-2 bg-black/10 rounded-full px-2.5 py-1 border border-white/20">
          <MoreHorizontal size={16} className="text-white" />
          <div className="w-px h-3 bg-white/30"></div>
          <Circle size={16} className="text-white" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden relative pb-16">
        {children}
      </div>

      {/* Standard Bottom Tab Bar */}
      {isRoot && (
        <div className="absolute bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-100 h-16 flex items-center justify-around px-2 pb-2 pt-1 shadow-[0_-4px_20px_rgba(0,0,0,0.02)] rounded-t-2xl">
          <TabButton icon={<IconHome active={currentPage === 'home'} />} label="首页" active={currentPage === 'home'} onClick={() => navigate('home')} />
          <TabButton icon={<IconActivity active={currentPage === 'inspection'} />} label="巡检" active={currentPage === 'inspection'} onClick={() => navigate('inspection')} />
          <TabButton icon={<IconMessages active={currentPage === 'messages'} />} label="消息" active={currentPage === 'messages'} onClick={() => navigate('messages')} />
          <TabButton icon={<IconMy active={currentPage === 'profile'} />} label="我的" active={currentPage === 'profile'} onClick={() => navigate('profile')} />
        </div>
      )}
    </div>
  );
};

const TabButton = ({ icon, label, active, onClick }: { icon: React.ReactNode, label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick} 
    className={`flex flex-col items-center justify-center w-12 h-full space-y-1 transition-colors ${active ? 'text-[#1d4ed8]' : 'text-gray-400 hover:text-gray-600'}`}
  >
    {icon}
    <span className="text-[10px] font-medium">{label}</span>
  </button>
);

const IconHome = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke={active ? "none" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 10L12 3L20 10V20C20 20.552 19.552 21 19 21H5C4.448 21 4 20.552 4 20V10Z" />
    <path d="M9 14H15" stroke={active ? "#fff" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconActivity = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke={active ? "none" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 7L15 10V14L5 17V7Z" />
    <path d="M15 10H18C19.105 10 20 10.895 20 12C20 13.105 19.105 14 18 14H15" />
    <path d="M11 15.5V19H14V15.5" />
  </svg>
);

const IconMessages = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke={active ? "none" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15C21 16.1046 20.1046 17 19 17H7L3 21V5C3 3.89543 3.89543 3 5 3H19C20.1046 3 21 3.89543 21 5V15Z" />
    <path d="M15 9L9 15" stroke={active ? "#fff" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
  </svg>
);

const IconMy = ({ active }: { active: boolean }) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill={active ? "currentColor" : "none"} stroke={active ? "none" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2h5c1.657 0 3 1.343 3 3v5c0 6.627-5.373 12-12 12z" />
    <path d="M8 14C8 14 9.5 16 12 16C14.5 16 16 14 16 14" stroke={active ? "#fff" : "currentColor"} strokeWidth="2" strokeLinecap="round" />
  </svg>
);
