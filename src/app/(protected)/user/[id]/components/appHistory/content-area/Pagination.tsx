import React from 'react';

export function Pagination() {
  return (
    <nav className="flex gap-2 justify-center items-center mt-6 text-base font-semibold leading-relaxed text-center whitespace-nowrap text-slate-600" aria-label="Pagination">
      <button aria-label="Previous page" className="flex items-center justify-center">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/3bbc71737252295ea08be2724174457167f4aedbaa68425b62dc7d748a107588?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b" alt="" className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square" />
      </button>
      <div className="flex items-start self-stretch my-auto min-w-[240px]">
        <button aria-current="page" className="gap-2 self-stretch px-3 text-white bg-sky-600 rounded-lg h-[46px] w-[46px]">1</button>
        {[2, 3, 4, 5].map((page) => (
          <button key={page} className="gap-2 self-stretch px-3 py-2.5 rounded-lg w-[46px]">{page}</button>
        ))}
        <span className="gap-2 self-stretch px-3 py-2.5 rounded-lg w-[46px]">...</span>
        <button className="gap-2 self-stretch px-3 py-2.5 rounded-lg w-[46px]">33</button>
      </div>
      <button aria-label="Next page" className="flex items-center justify-center">
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/d60b1b3c7d4452b0c498a59fb22e8d4739098ed7fe3623f404d5906c62536299?placeholderIfAbsent=true&apiKey=bd0ec12dbc21460580fc047f9ed9e28b" alt="" className="object-contain shrink-0 self-stretch my-auto aspect-[1.04] w-[25px]" />
      </button>
    </nav>
  );
}