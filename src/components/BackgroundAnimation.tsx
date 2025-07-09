import React from 'react';

export const BackgroundAnimation: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full opacity-60 animate-float"></div>
        <div className="absolute top-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-float animation-delay-1000"></div>
        <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-50 animate-float animation-delay-3000"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1 h-1 bg-white rounded-full opacity-30 animate-float animation-delay-5000"></div>
      </div>
    </div>
  );
};