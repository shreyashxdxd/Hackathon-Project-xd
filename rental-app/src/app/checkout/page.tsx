import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function CheckoutPage() {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen pb-32">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 px-4 py-4">
        <div className="flex items-center gap-4">
          <Link href="/cart">
            <button className="flex items-center justify-center size-10 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </Link>
          <h1 className="text-xl font-bold tracking-tight">Checkout</h1>
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 space-y-6">
        {/* Rental Summary Section */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">receipt_long</span>
            Rental Summary
          </h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Subtotal</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">₹4,500</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-slate-500 dark:text-slate-400">Security Deposit</span>
              <span className="font-medium text-slate-900 dark:text-slate-100">₹2,000</span>
            </div>
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
              <span className="text-lg font-bold">Total Amount</span>
              <span className="text-xl font-bold text-primary">₹6,500</span>
            </div>
          </div>
        </section>

        {/* Delivery Address Section */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">location_on</span>
              Delivery Address
            </h2>
            <button className="text-primary text-sm font-semibold">Change</button>
          </div>
          <div className="flex gap-4">
            <div className="flex-1">
              <p className="font-semibold">Home</p>
              <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                Flat 402, Skyline Residency, 12th Main Road, Indiranagar, Bengaluru, Karnataka 560038
              </p>
            </div>
          </div>
          <div className="mt-4">
            <img
              className="w-full h-32 object-cover rounded-lg"
              alt="Map showing delivery location in Bengaluru"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDplkQqXUzx31z8Ew8Mli-34702WCEzdIC3BXBHk1-na0OkMnnEnx6yUNWy-o9rIsLgZn8cqkw6j5u9kTUVimnWTebiGbksDxAlWfcGibZo4QxJX_jiw6wBcJWmQWLSeuTN5Vy-z6bsKs98f83Bi46yGqigWAt27Ugx9jfP8FQcJ8w4ca2VuMNyibadNrzdnThQH_H3LywrNSSVWtiYwBs4jKUUU_WTosb8EUV9EKaGSCEnVjI0prrA-V0MkMC91zP-f0t1wbotYg"
            />
          </div>
        </section>

        {/* Payment Options Section */}
        <section className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-100 dark:border-slate-800">
          <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="material-symbols-outlined text-primary">payments</span>
            Payment Options
          </h2>
          <div className="space-y-3">
            {/* UPI Options */}
            <div className="p-4 border-2 border-primary bg-primary/5 rounded-xl cursor-pointer">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                  <div>
                    <p className="font-bold">UPI (Google Pay / PhonePe)</p>
                    <p className="text-xs text-slate-500">Pay directly from your bank account</p>
                  </div>
                </div>
                <div className="size-5 rounded-full border-2 border-primary flex items-center justify-center">
                  <div className="size-2.5 bg-primary rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Card Options */}
            <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400">credit_card</span>
                  <div>
                    <p className="font-bold">Credit / Debit Cards</p>
                    <p className="text-xs text-slate-500">Visa, Mastercard, RuPay</p>
                  </div>
                </div>
                <div className="size-5 rounded-full border-2 border-slate-300 dark:border-slate-700"></div>
              </div>
            </div>

            {/* Net Banking */}
            <div className="p-4 border border-slate-200 dark:border-slate-800 rounded-xl cursor-pointer hover:border-primary/50 transition-colors">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-slate-400">account_balance</span>
                  <div>
                    <p className="font-bold">Net Banking</p>
                    <p className="text-xs text-slate-500">All major Indian banks supported</p>
                  </div>
                </div>
                <div className="size-5 rounded-full border-2 border-slate-300 dark:border-slate-700"></div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Bottom Action Bar */}
      <nav className="fixed bottom-20 left-4 right-4 z-50">
        <div className="max-w-xl mx-auto bg-white/90 dark:bg-slate-900/90 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl rounded-full p-2 flex items-center justify-between">
          <div className="px-6">
            <p className="text-[10px] uppercase tracking-wider text-slate-500 font-bold">Total to Pay</p>
            <p className="text-xl font-bold text-slate-900 dark:text-slate-100">₹6,500</p>
          </div>
          <Link href="/confirmation">
            <button className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-full font-bold transition-all transform active:scale-95 shadow-lg shadow-primary/30">
              Pay Now
            </button>
          </Link>
        </div>
      </nav>

      {/* Primary Bottom Navigation */}
      <BottomNav />
    </div>
  );
}
