import { useState } from "react";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import AdminPanel from "./components/AdminPanel";
import Checkout from "./components/Checkout";

export default function App() {
  const [search, setSearch] = useState("");
  const [openAdmin, setOpenAdmin] = useState(false);
  const [checkoutItem, setCheckoutItem] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Header onOpenAdmin={() => setOpenAdmin(true)} cartCount={checkoutItem ? 1 : 0} onSearch={setSearch} />
      <Catalog query={search} onPurchase={(item) => setCheckoutItem(item)} />

      <section id="how" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid grid-cols-1 gap-4 rounded-2xl border border-gray-200 bg-gray-50/60 p-6 sm:grid-cols-3">
          {[{t:"Choose a resource", d:"Find the perfect PDF or file for your needs."}, {t:"Secure checkout", d:"Pay online with card, Apple Pay, etc."}, {t:"Instant access", d:"Get your download link right away."}].map((s) => (
            <div key={s.t} className="rounded-xl bg-white p-4 shadow-sm">
              <div className="text-sm font-semibold">{s.t}</div>
              <div className="text-xs text-gray-600">{s.d}</div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-6xl px-4 py-8 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Resource Plaza — All rights reserved.
        </div>
      </footer>

      <AdminPanel open={openAdmin} onClose={() => setOpenAdmin(false)} />
      <Checkout item={checkoutItem} onClose={() => setCheckoutItem(null)} />
    </div>
  );
}
