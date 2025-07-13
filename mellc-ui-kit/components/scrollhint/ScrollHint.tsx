// components/ScrollHint.tsx
import React from 'react';

export default function ScrollHint(color: any) {
  return (
    <div className="w-full flex justify-center mt-10 animate-bounce">
      <div className={`text-2xl ${color}`}>↓</div>
    </div>
  );
}
