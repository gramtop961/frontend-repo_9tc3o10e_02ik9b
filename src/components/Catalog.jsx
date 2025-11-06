import { useEffect, useMemo, useState } from "react";
import { Download, FileText, Loader2 } from "lucide-react";

const demoProducts = [
  {
    id: "guide-ux",
    title: "UX Research Playbook",
    description: "Practical toolkit with templates and study scripts.",
    price: 19,
    cover: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop",
    author: "Studio North",
    tags: ["design", "ux"],
    fileType: "pdf",
  },
  {
    id: "finance-starter",
    title: "Small Business Finance Starter",
    description: "Cashflow templates and step-by-step guide.",
    price: 29,
    cover: "https://images.unsplash.com/photo-1554224155-1696413565d3?q=80&w=1200&auto=format&fit=crop",
    author: "Ledger Co.",
    tags: ["business", "finance"],
    fileType: "xlsx",
  },
  {
    id: "ai-prompts",
    title: "1,000 AI Prompt Library",
    description: "Ready-to-use prompts categorized by use case.",
    price: 15,
    cover: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&w=1200&auto=format&fit=crop",
    author: "Promptcraft",
    tags: ["ai", "productivity"],
    fileType: "pdf",
  },
  {
    id: "study-pack",
    title: "Exam Study Pack",
    description: "Condensed notes and practice questions.",
    price: 12,
    cover: "https://images.unsplash.com/photo-1518081461904-9ac489e1a128?q=80&w=1200&auto=format&fit=crop",
    author: "PrepLab",
    tags: ["education"],
    fileType: "pdf",
  },
];

function ProductCard({ item, onBuy }) {
  return (
    <div className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div className="relative h-40 w-full overflow-hidden">
        <img src={item.cover} alt="cover" className="h-full w-full object-cover transition duration-300 group-hover:scale-105" />
        <span className="absolute left-2 top-2 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-wide text-gray-700">
          {item.fileType}
        </span>
      </div>
      <div className="space-y-2 p-4">
        <h3 className="line-clamp-1 text-sm font-semibold">{item.title}</h3>
        <p className="line-clamp-2 text-xs text-gray-600">{item.description}</p>
        <div className="flex items-center justify-between pt-1">
          <span className="text-sm font-bold">${item.price}</span>
          <button onClick={() => onBuy(item)} className="inline-flex items-center gap-1 rounded-lg bg-indigo-600 px-3 py-1.5 text-xs font-semibold text-white hover:bg-indigo-700">
            <Download className="h-3.5 w-3.5" /> Buy now
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Catalog({ query, onPurchase }) {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(demoProducts);

  // In a full app, we'd fetch products from the backend. Using demo data for now.
  useEffect(() => {
    setLoading(true);
    const id = setTimeout(() => {
      setProducts(demoProducts);
      setLoading(false);
    }, 400);
    return () => clearTimeout(id);
  }, []);

  const filtered = useMemo(() => {
    if (!query) return products;
    const q = query.toLowerCase();
    return products.filter(
      (p) => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.tags.some((t) => t.includes(q))
    );
  }, [products, query]);

  return (
    <section id="catalog" className="mx-auto max-w-6xl px-4 py-10">
      <div className="mb-4 flex items-end justify-between">
        <div>
          <h3 className="text-xl font-semibold">Catalog</h3>
          <p className="text-sm text-gray-600">Hand-picked resources ready to download after secure checkout.</p>
        </div>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16 text-gray-600">
          <Loader2 className="mr-2 h-5 w-5 animate-spin" /> Loading resources...
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item) => (
            <ProductCard key={item.id} item={item} onBuy={onPurchase} />
          ))}
        </div>
      )}
    </section>
  );
}
