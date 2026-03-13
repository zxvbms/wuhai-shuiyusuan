import React, { useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { Eye, EyeOff } from 'lucide-react';

export default function Login() {
  const { navigate } = useNavigation();
  const [account, setAccount] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('home');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-[#2563eb] to-[#1d4ed8] relative overflow-hidden">
      {/* Decorative Background Elements & Waves */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] right-[-10%] w-[60vw] h-[60vw] bg-white/10 rounded-full blur-[60px]"></div>
        <div className="absolute top-[20%] left-[-10%] w-[40vw] h-[40vw] bg-white/5 rounded-full blur-[40px]"></div>
        
        {/* Water Waves */}
        <div className="absolute top-[22vh] left-0 right-0 opacity-20">
          <svg viewBox="0 0 1440 320" className="w-full h-32" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,160L48,149.3C96,139,192,117,288,128C384,139,480,181,576,186.7C672,192,768,160,864,144C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
        <div className="absolute top-[28vh] left-0 right-0 opacity-30">
          <svg viewBox="0 0 1440 320" className="w-full h-24" preserveAspectRatio="none">
            <path fill="#ffffff" d="M0,192L48,197.3C96,203,192,213,288,202.7C384,192,480,160,576,149.3C672,139,768,149,864,160C960,171,1056,181,1152,170.7C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>
      </div>

      {/* Header Section */}
      <div className="pt-32 pb-24 px-8 relative z-10">
        <h1 className="text-[42px] font-black text-white mb-2 tracking-widest drop-shadow-md">
          乌海市水预算
        </h1>
        <p className="text-[12px] font-bold text-white/90 tracking-widest uppercase drop-shadow-sm">
          WUHAI CITY WATER BUDGET
        </p>
      </div>

      {/* White Card Section */}
      <div className="flex-1 bg-white rounded-t-[2.5rem] px-8 pt-12 pb-8 flex flex-col relative z-10 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <form onSubmit={handleLogin} className="w-full space-y-8">
          {/* Account Input */}
          <div className="space-y-3">
            <label className="block text-[15px] font-bold text-gray-900">
              账号
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-100 pb-3 text-[15px] text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#1d4ed8] transition-colors bg-transparent"
              placeholder="请输入您的账号"
              value={account}
              onChange={(e) => setAccount(e.target.value)}
              required
            />
          </div>

          {/* Password Input */}
          <div className="space-y-3">
            <label className="block text-[15px] font-bold text-gray-900">
              密码
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full border-b border-gray-100 pb-3 text-[15px] text-gray-900 placeholder-gray-300 focus:outline-none focus:border-[#1d4ed8] transition-colors bg-transparent pr-10"
                placeholder="请输入您的密码"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-0 top-0 bottom-3 flex items-center text-gray-300 hover:text-gray-500 transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full py-3.5 rounded-full text-[16px] font-medium text-white bg-[#1d4ed8] hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1d4ed8] mt-12 transition-all active:scale-[0.98] shadow-md shadow-blue-900/20"
          >
            登录
          </button>
        </form>

        {/* Footer */}
        <div className="mt-auto pt-8 text-center">
          <p className="text-[13px] text-gray-400">修改密码请联系管理员</p>
        </div>
      </div>
    </div>
  );
}
