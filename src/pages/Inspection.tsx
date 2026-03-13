import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Search, MapPin, Plus, FileText, Droplet, Factory, Waves } from 'lucide-react';

export default function Inspection() {
  const { navigate } = useNavigation();
  const [selectedPoint, setSelectedPoint] = useState(false);

  return (
    <div className="relative w-full h-full bg-[#e5e3df] overflow-hidden flex flex-col">
      {/* Search Bar */}
      <div className="absolute top-4 left-4 right-4 z-10">
        <div className="relative flex items-center shadow-sm rounded border border-gray-200 overflow-hidden">
          <input
            type="text"
            placeholder="输入关键字"
            className="w-full bg-white pl-3 pr-10 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-[#1d4ed8] transition-all"
          />
          <button className="absolute right-0 top-0 bottom-0 px-3 flex items-center justify-center bg-gray-50 border-l border-gray-200 active:bg-gray-100">
            <Search size={18} className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* Map Background */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center opacity-90"></div>
      
      {/* Map Content Overlay */}
      <div className="absolute inset-0 z-0 bg-black/10"></div>

      {/* Map Pin */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col items-center cursor-pointer"
        onClick={() => setSelectedPoint(!selectedPoint)}
      >
        <MapPin 
          size={40} 
          className={`drop-shadow-md transition-colors ${selectedPoint ? 'text-[#f59e0b] fill-[#f59e0b]' : 'text-[#1d4ed8] fill-[#1d4ed8]'}`} 
        />
        <span className={`mt-1 font-bold text-sm drop-shadow-md bg-white/80 px-2 py-0.5 rounded border ${selectedPoint ? 'text-[#f59e0b] border-[#f59e0b]' : 'text-[#1d4ed8] border-[#1d4ed8]'}`}>
          xxx公司
        </span>
      </div>

      {/* Bottom Left Legend */}
      <div className="absolute bottom-20 left-4 z-10 bg-white p-3 rounded shadow-sm border border-gray-200">
        <h4 className="text-sm font-bold text-gray-800 mb-2 border-b border-gray-100 pb-1">图例</h4>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Droplet size={16} className="text-[#1d4ed8]" />
            <span className="text-xs text-gray-700">取用水户</span>
          </div>
          <div className="flex items-center space-x-2">
            <Factory size={16} className="text-gray-600" />
            <span className="text-xs text-gray-700">供水企业</span>
          </div>
          <div className="flex items-center space-x-2">
            <Waves size={16} className="text-teal-600" />
            <span className="text-xs text-gray-700">污水处理厂</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-red-600" />
            <span className="text-xs text-gray-700">取水口</span>
          </div>
        </div>
      </div>

      {/* Bottom Right Buttons */}
      <div className="absolute bottom-20 right-4 z-10 flex flex-col space-y-2">
        <button 
          onClick={() => navigate('add-inspection')}
          className="bg-white p-2 rounded shadow-sm border border-gray-200 flex flex-col items-center justify-center w-16 h-16 active:bg-gray-50 transition-colors"
        >
          <div className="w-8 h-8 bg-[#1d4ed8] rounded flex items-center justify-center mb-1">
            <Plus size={18} className="text-white" />
          </div>
          <span className="text-[10px] font-medium text-gray-700 text-center leading-tight">添加巡检</span>
        </button>
        
        <button className="bg-white p-2 rounded shadow-sm border border-gray-200 flex flex-col items-center justify-center w-16 h-16 active:bg-gray-50 transition-colors">
          <FileText size={20} className="text-gray-500 mb-1" />
          <span className="text-[10px] font-medium text-gray-700 text-center leading-tight">历史事件</span>
        </button>
      </div>

      {/* Bottom Sheet (if selected) */}
      {selectedPoint && (
        <div className="absolute bottom-0 left-0 right-0 z-20 bg-white rounded-t-lg shadow-[0_-4px_20px_rgba(0,0,0,0.1)] p-5 pb-safe animate-in slide-in-from-bottom-full duration-200">
          <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-4"></div>
          
          <div className="flex items-center mb-4 pb-3 border-b border-gray-100">
            <div className="w-1 h-5 bg-[#1d4ed8] rounded-sm mr-2"></div>
            <h2 className="text-lg font-bold text-gray-900">xxx公司</h2>
          </div>
          
          <div className="grid grid-cols-2 gap-y-3 text-sm">
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-0.5">状态</span>
              <span className="font-medium text-gray-900">--</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-0.5">许可取水量</span>
              <span className="font-medium text-gray-900">--万m³</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-0.5">预算下达量</span>
              <span className="font-medium text-gray-900">--万m³</span>
            </div>
            <div className="flex flex-col">
              <span className="text-xs text-gray-500 mb-0.5">实时用水量</span>
              <span className="font-medium text-gray-900">--</span>
            </div>
            <div className="flex flex-col col-span-2">
              <span className="text-xs text-gray-500 mb-0.5">许可证</span>
              <span className="font-medium text-gray-900">--</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
