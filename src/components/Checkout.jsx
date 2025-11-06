import { useMemo, useState } from "react";
import { CreditCard, Check, Shield, Loader2 } from "lucide-react";

export default function Checkout({ item, onClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  if (!item) return null;

  const total = useMemo(() => (item?.price ?? 0), [item]);

  const handlePay = async () => {
    setLoading(true);
    // In a full app, call backend to create a payment session (Stripe/Paystack/etc.)
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-30 flex items-end justify-center bg-black/40 p-4 md:items-center">
      <div className="w-full max-w-md overflow-hidden rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h3 className="text-base font-semibold">Secure Checkout</h3>
          <button onClick={onClose} className="rounded-md px-2 py-1 text-sm text-gray-600 hover:bg-gray-100">Close</button>
        </div>

        {!success ? (
          <div className="space-y-4 p-4">
            <div className="rounded-xl border border-gray-200 p-3">
              <div className="flex items-center gap-3">
                <img src={item.cover} alt="cover" className="h-16 w-16 rounded-lg object-cover" />
                <div>
                  <div className="text-sm font-semibold">{item.title}</div>
                  <div className="text-xs text-gray-600">Instant download after payment</div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium">Email for delivery</label>
              <input className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none ring-indigo-200 focus:ring-4" placeholder="you@example.com" />
            </div>

            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span>Subtotal</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Fees</span>
                <span>$0.00</span>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePay}
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-indigo-700 disabled:opacity-60"
              disabled={loading}
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <CreditCard className="h-4 w-4" />}
              {loading ? "Processing..." : "Pay now"}
            </button>

            <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
              <Shield className="h-4 w-4" /> Secure payments powered by Stripe/Paystack
            </div>
          </div>
        ) : (
          <div className="space-y-4 p-6 text-center">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
              <Check className="h-6 w-6" />
            </div>
            <h4 className="text-lg font-semibold">Payment successful</h4>
            <p className="text-sm text-gray-600">We've sent a download link to your email and unlocked instant access.</p>
            <button onClick={onClose} className="rounded-xl border border-gray-200 px-4 py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50">Close</button>
          </div>
        )}
      </div>
    </div>
  );
}
