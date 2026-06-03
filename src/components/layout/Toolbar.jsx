export default function Toolbar() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col bg-white border border-slate-200/40 rounded-l-[4px] shadow-[0_2px_10px_rgba(0,0,0,0.03)] w-[36px] overflow-hidden">
      
      {/* 1. Settings (Spinning) */}
      <button aria-label="Settings" className="w-full h-[36px] text-slate-700 hover:bg-slate-50 border-b border-slate-100 flex items-center justify-center transition-colors duration-150">
        <svg className="w-[18px] h-[18px] animate-[spin_10s_linear_infinite]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>

      {/* 2. Layout Elements */}
      <button aria-label="Layout" className="w-full h-[36px] text-slate-700 hover:bg-slate-50 border-b border-slate-100 flex items-center justify-center transition-colors duration-150">
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
          <rect x="3" y="4" width="18" height="16" rx="0.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3 9h18M9 9v11M3 14h6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="6" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="9" cy="6.5" r="0.5" fill="currentColor" />
          <circle cx="12" cy="6.5" r="0.5" fill="currentColor" />
        </svg>
      </button>

      {/* 3. Document */}
      <button aria-label="Documentation" className="w-full h-[36px] text-slate-700 hover:bg-slate-50 border-b border-slate-100 flex items-center justify-center transition-colors duration-150">
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 11h6m-6 4h6m2 6H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      </button>

      {/* 4. Chat */}
      <button aria-label="Chat" className="w-full h-[36px] text-slate-700 hover:bg-slate-50 border-b border-slate-100 flex items-center justify-center transition-colors duration-150">
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h6M8 14h3" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 4H5a2 2 0 00-2 2v10a2 2 0 002 2h3l3 3 3-3h5a2 2 0 002-2V6a2 2 0 00-2-2z" />
        </svg>
      </button>

      {/* 5. Cart */}
      <button aria-label="Cart" className="w-full h-[36px] text-slate-700 hover:bg-slate-50 flex items-center justify-center transition-colors duration-150">
        <svg className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.3}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 9h12M9 6v6M14 6v6" />
        </svg>
      </button>

    </div>
  );
}
