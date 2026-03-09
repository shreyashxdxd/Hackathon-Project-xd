import Image from "next/image";
import Link from "next/link";
import BottomNav from "@/components/BottomNav";

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-50 bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-lg pt-4 pb-2">
        <div className="px-4 flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-2xl font-bold">
              handyman
            </span>
            <h1 className="text-xl font-bold tracking-tight">Pro Rental</h1>
          </div>
          <div className="flex gap-2">
            <button className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-xl">tune</span>
            </button>
            <button className="p-2 rounded-full bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
              <span className="material-symbols-outlined text-xl">
                notifications
              </span>
            </button>
          </div>
        </div>

        <div className="px-4 space-y-3">
          <div className="relative">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <span className="material-symbols-outlined text-slate-400">
                search
              </span>
            </div>
            <input
              type="text"
              className="w-full bg-white dark:bg-slate-800 border-none rounded-full py-3 pl-11 pr-4 shadow-sm focus:ring-2 focus:ring-primary/20 placeholder:text-slate-400 text-sm outline-none"
              placeholder="SKU or item name..."
            />
          </div>

          <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
            <button className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 dark:bg-primary text-white rounded-full text-xs font-semibold whitespace-nowrap shadow-md">
              <span className="material-symbols-outlined text-sm">
                check_circle
              </span>
              Electronics
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold whitespace-nowrap">
              Tools
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold whitespace-nowrap">
              Cameras
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold whitespace-nowrap">
              Audio
            </button>
            <button className="flex items-center gap-1.5 px-4 py-2 bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-full text-xs font-semibold whitespace-nowrap">
              Lighting
            </button>
          </div>
        </div>
      </header>

      <main className="pb-32 px-4 pt-4">
        <section className="mb-6">
          <div className="relative w-full h-32 rounded-2xl overflow-hidden shadow-sm border border-white dark:border-slate-700">
            <div
              className="absolute inset-0 bg-slate-200"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBtSrzCnSWcpQ-7Jkm9XA7BblZCKqCPV1w4JnLoBCvxY5iRnzKo15_PWt744mIo3_AuA6Z5WeU2I7XU5Rh4zUrGypzPefqFq7icy2QA2SPVHOpkyuP8rrATWPCZ-Auv34B8IW1FBvnW1aSxI4ji-d6Q5FA-XGoyR8W1mjX0YbAbGnwmxHvQeSXFBpWBG1NyYixSot9QB3S5FVysSzaBruQwVDCU0ZZ6Hc-NPd8HFxoOn2famO2z2JW8QRu9eAMxWzC4aH2KSagIaw')",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            ></div>
            <div className="absolute inset-0 bg-black/30 backdrop-blur-[1px]"></div>
            <div className="absolute inset-0 flex items-center justify-between px-6">
              <div className="flex items-center gap-3">
                <div className="bg-primary text-white p-2 rounded-full shadow-lg">
                  <span className="material-symbols-outlined text-xl">
                    near_me
                  </span>
                </div>
                <div>
                  <h3 className="text-white font-bold text-sm">
                    Nearby Availability
                  </h3>
                  <p className="text-white/80 text-[10px]">
                    12 items ready for pickup
                  </p>
                </div>
              </div>
              <Link
                href="/nearby"
                className="bg-white/95 text-slate-900 px-4 py-1.5 rounded-full text-xs font-bold shadow-sm"
              >
                Open Map
              </Link>
            </div>
          </div>
        </section>

        <section className="mb-6">
          <div className="bg-primary/10 dark:bg-primary/20 rounded-2xl p-4 border border-primary/20 flex items-center justify-between shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-primary text-white p-2 rounded-xl shadow-md">
                <span className="material-symbols-outlined text-2xl">
                  add_business
                </span>
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white">
                  Earn by renting your gear
                </h3>
                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                  Turn your idle tools into extra income
                </p>
              </div>
            </div>
            <button className="bg-primary text-white px-4 py-2 rounded-full text-xs font-bold shadow-md hover:bg-primary/90 transition-colors flex items-center gap-1">
              <span>Start Listing</span>
              <span className="material-symbols-outlined text-xs">
                arrow_forward
              </span>
            </button>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-4 px-1">
            <h2 className="text-sm font-bold uppercase tracking-wider text-slate-500">
              Inventory Status
            </h2>
            <div className="flex items-center gap-2 text-xs font-medium text-primary">
              <span className="material-symbols-outlined text-sm">sort</span>
              <span>Sort: Price</span>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {/* Item 1 */}
            <Link href="/product/1" className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-3 block">
              <div className="flex gap-3">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <Image
                    alt="Headphones"
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2c_hxK53r6o5iWpAp5bYJsyUVCN__q0ExyyCJal64K2QQsu5iVqiZOio5IxTNZtNC5ULlSC5JGVw7cme26sv7YPBuqpTd0_c3iPNP3h6sGAsOc9RB0Aw_bJLalNruqsFlBGbPo9FSlEy1K_Kk3L8uwXN9xBqgTO3EV2prcR7XXB9u5qtWNPjqxHH53MyfYScrf9AB9l3OXMArksj3i1BW6AAtWsOYQrxmMQyZbMzCL-vPSyBDZOUOIWiVCj3THsJDM90estlI5g"
                    fill
                    sizes="(max-width: 768px) 100vw, 80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm truncate">
                      Sony WH-1000XM5 Studio
                    </h3>
                    <div className="flex items-center text-orange-500">
                      <span className="material-symbols-outlined text-[14px] font-fill">
                        star
                      </span>
                      <span className="text-[11px] font-bold ml-0.5">4.9</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 mb-2">
                    30Hz-40kHz • Noise Cancelling • BT 5.2
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[9px] font-bold px-1.5 py-0.5 rounded">
                      INSTOCK
                    </span>
                    <span className="text-slate-400 text-[10px] flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs">
                        location_on
                      </span>
                      1.2km
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-50 dark:border-slate-700/50">
                <button className="flex flex-col items-center justify-center py-1 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                  <span className="text-[9px] text-slate-400 uppercase font-bold">
                    Hourly
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    ₹10.20
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center py-1 rounded-lg border border-primary/20 bg-primary/5">
                  <span className="text-[9px] text-primary uppercase font-bold">
                    Daily
                  </span>
                  <span className="text-xs font-bold text-primary">₹45.00</span>
                </button>
                <button className="flex flex-col items-center justify-center py-1 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                  <span className="text-[9px] text-slate-400 uppercase font-bold">
                    Weekly
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    ₹180.00
                  </span>
                </button>
              </div>
            </Link>

            {/* Item 2 */}
            <Link href="/product/2" className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-3 block">
              <div className="flex gap-3">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <Image
                    alt="Smartphone"
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKhJENkh864vLZKKJuvzoejuwmHR-9OU07KFQXrU31cbHsHggEL6fHLu23H_DIx3BdG5D4xE_PoynVe7p2_w219KI4NKXXaotDma58sBnWg1vT1FDIO-veJoxWx2R2UtmByqqNNezvykSDJt9GenlKEo5SiMl-UBEvyalpZQtSj07ihIoTxlkvg1bbWyquQSxgIkXj_rt4cUBclT3s_aQa8hNl587KJ3Cro6X6xFYXRK6B8ugC5aouZmpHR60PDsKhwdHFb_VKzQ"
                    fill
                    sizes="(max-width: 768px) 100vw, 80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm truncate">
                      Smartphone X Ultra
                    </h3>
                    <div className="flex items-center text-orange-500">
                      <span className="material-symbols-outlined text-[14px] font-fill">
                        star
                      </span>
                      <span className="text-[11px] font-bold ml-0.5">4.8</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 mb-2">
                    256GB • 5G • 120Hz OLED • 4K Video
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400 text-[9px] font-bold px-1.5 py-0.5 rounded">
                      POPULAR
                    </span>
                    <span className="text-slate-400 text-[10px] flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs">
                        location_on
                      </span>
                      15km
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-50 dark:border-slate-700/50">
                <button className="flex flex-col items-center justify-center py-1 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                  <span className="text-[9px] text-slate-400 uppercase font-bold">
                    Hourly
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    ₹5.00
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center py-1 rounded-lg border border-primary/20 bg-primary/5">
                  <span className="text-[9px] text-primary uppercase font-bold">
                    Daily
                  </span>
                  <span className="text-xs font-bold text-primary">₹15.00</span>
                </button>
                <button className="flex flex-col items-center justify-center py-1 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                  <span className="text-[9px] text-slate-400 uppercase font-bold">
                    Weekly
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    ₹85.00
                  </span>
                </button>
              </div>
            </Link>

            {/* Item 3 */}
            <Link href="/product/3" className="bg-white dark:bg-slate-800 rounded-xl p-3 shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-3 block">
              <div className="flex gap-3">
                <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 relative">
                  <Image
                    alt="Drill"
                    className="object-cover"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6VH7uwIhbegwBZB7voO02dydAy3NHqE8CdRWB0_McTnm72bedjW5CtGrmGoZ6Tgb6TKifsJk5yB8E2dUSuhJdX8VqxoC-KzTBmHOZKcYjrV8o_1QiqnyGqMeM05yn2ttXsHYjYnVO7PKBlauDPyQrwen9lagKn3YDzPBrM-IJ7aGiG7x4Nkhjm0AUAUKYBkQIwasE2Y3-M4spBw8UVCnl_Lb_o2EWbmg8mfzj6galc4G7-KxHrPygo59btWZQjDZcqGUVNzv-Pg"
                    fill
                    sizes="(max-width: 768px) 100vw, 80px"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-sm truncate">
                      Power Drill XR Pro
                    </h3>
                    <div className="flex items-center text-orange-500">
                      <span className="material-symbols-outlined text-[14px] font-fill">
                        star
                      </span>
                      <span className="text-[11px] font-bold ml-0.5">5.0</span>
                    </div>
                  </div>
                  <p className="text-[10px] text-slate-500 mb-2">
                    18V Brushless • 2 Batteries • Hard Case
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 text-[9px] font-bold px-1.5 py-0.5 rounded">
                      LOW STOCK
                    </span>
                    <span className="text-slate-400 text-[10px] flex items-center gap-0.5">
                      <span className="material-symbols-outlined text-xs">
                        location_on
                      </span>
                      42km
                    </span>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-slate-50 dark:border-slate-700/50">
                <button className="flex flex-col items-center justify-center py-1 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                  <span className="text-[9px] text-slate-400 uppercase font-bold">
                    Hourly
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    ₹8.00
                  </span>
                </button>
                <button className="flex flex-col items-center justify-center py-1 rounded-lg border border-primary/20 bg-primary/5">
                  <span className="text-[9px] text-primary uppercase font-bold">
                    Daily
                  </span>
                  <span className="text-xs font-bold text-primary">₹22.00</span>
                </button>
                <button className="flex flex-col items-center justify-center py-1 rounded-lg border border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50">
                  <span className="text-[9px] text-slate-400 uppercase font-bold">
                    Weekly
                  </span>
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    ₹110.00
                  </span>
                </button>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <BottomNav />
    </>
  );
}
