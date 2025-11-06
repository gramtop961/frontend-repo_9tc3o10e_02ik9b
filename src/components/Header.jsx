import { ShoppingCart, Search, User } from "lucide-react";

export default function Header({ onOpenAdmin, cartCount, onSearch }) {
  return (
    <header className="sticky top-0 z-20 w-full border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold">
            RP
          </div>
          <div>
            <h1 className="text-lg font-semibold tracking-tight">Resource Plaza</h1>
            <p className="text-xs text-gray-500">Premium PDFs, templates and assets</p>
          </div>
        </div>

        <div className="relative hidden w-full max-w-md items-center md:flex">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search resources, topics, authors..."
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none ring-indigo-200 focus:ring-4"
          />
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onOpenAdmin}
            className="hidden rounded-xl border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 md:block"
          >
            <div className="flex items-center gap-2"><User className="h-4 w-4" /> Admin</div>
          </button>

          <div className="relative">
            <ShoppingCart className="h-6 w-6 text-gray-700" />
            {cartCount > 0 && (
              <span className="absolute -right-2 -top-2 inline-flex h-5 min-w-[20px] items-center justify-center rounded-full bg-indigo-600 px-1 text-xs font-semibold text-white">
                {cartCount}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="px-4 pb-3 md:hidden">
        <div className="relative">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            onChange={(e) => onSearch(e.target.value)}
            placeholder="Search resources, topics, authors..."
            className="w-full rounded-xl border border-gray-200 bg-white py-2.5 pl-10 pr-3 text-sm outline-none ring-indigo-200 focus:ring-4"
          />
        </div>
      </div>
    </header>
  );
}
