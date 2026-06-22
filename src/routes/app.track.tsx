import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Truck,
  Package,
  MapPin,
  CheckCircle2,
  Circle,
  MessageCircle,
  AlertCircle,
  Shield,
} from "lucide-react";
import { TopBar } from "@/components/zuno/TopBar";

export const Route = createFileRoute("/app/track")({
  head: () => ({ meta: [{ title: "Track Delivery — ZUNO" }] }),
  component: TrackDelivery,
});

function TrackDelivery() {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <TopBar title="Track Delivery" back="/app" />

      <div className="px-5 pt-4">
        <Link
          to="/app/tracking/$id"
          params={{ id: "ZUNOAXFVLO4Y8Y" }}
          className="block"
        >
          <div className="rounded-3xl border border-border/40 bg-surface p-4 shadow-card">
            {/* Order header */}
            <div className="flex items-start gap-3">
              <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-violet text-xl">
                <Package className="h-6 w-6 text-accent-foreground" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-2">
                  <p className="truncate font-semibold">iPhone 17 Pro Max</p>
                  <span className="shrink-0 rounded-full border border-gold/30 bg-gold/15 px-2 py-0.5 text-[10px] font-semibold text-gold">
                    In Transit
                  </span>
                </div>
                <p className="mt-0.5 truncate text-xs text-muted-foreground">
                  Gadget World · ETA 07/06/2026
                </p>
              </div>
            </div>

            {/* Progress Timeline */}
            <div className="mt-4">
              <ol className="relative space-y-0">
                {[
                  { title: "Order Confirmed", done: true },
                  { title: "Funds Secured", done: true },
                  { title: "Seller Shipped", done: true },
                  { title: "In Transit", active: true },
                  { title: "Delivered", done: false },
                ].map((step, i, arr) => (
                  <li key={i} className="grid grid-cols-[auto_1fr] gap-3">
                    <div className="flex flex-col items-center">
                      <div
                        className={`grid h-7 w-7 place-items-center rounded-full text-[10px] font-bold ${
                          step.done
                            ? "bg-accent text-accent-foreground"
                            : step.active
                              ? "border-2 border-gold bg-gold/15 text-gold"
                              : "border-2 border-border bg-surface text-muted-foreground"
                        }`}
                      >
                        {step.done ? (
                          <CheckCircle2 className="h-3.5 w-3.5" />
                        ) : step.active ? (
                          <Truck className="h-3.5 w-3.5" />
                        ) : (
                          <Circle className="h-3.5 w-3.5" />
                        )}
                      </div>
                      {i < arr.length - 1 && (
                        <div
                          className={`mt-0.5 h-6 w-0.5 ${step.done ? "bg-accent" : "bg-border"}`}
                        />
                      )}
                    </div>
                    <div className="pb-3 pt-0.5">
                      <p
                        className={`text-xs font-semibold ${step.done || step.active ? "text-foreground" : "text-muted-foreground"}`}
                      >
                        {step.title}
                      </p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>

            {/* Delivery Info */}
            <div className="mt-2 grid grid-cols-2 gap-2 rounded-2xl border border-border/40 bg-surface-2/50 p-3">
              <div className="flex items-center gap-2">
                <Truck className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-[10px] text-muted-foreground">Courier</p>
                  <p className="text-xs font-semibold">SpeedMtaani</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                <div>
                  <p className="text-[10px] text-muted-foreground">
                    Tracking #
                  </p>
                  <p className="text-xs font-semibold">SPM-7849201</p>
                </div>
              </div>
            </div>

            {/* Live Tracking Updates */}
            <div className="mt-3 space-y-2">
              <p className="text-[10px] font-bold tracking-[0.15em] text-muted-foreground uppercase">
                LIVE UPDATES
              </p>
              <div className="space-y-2">
                <div className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  <div>
                    <p className="text-xs font-medium">
                      Departed sorting center
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      Today, 09:14 AM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Arrived at sorting center
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      Yesterday, 16:40 PM
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Package picked up by courier
                    </p>
                    <p className="text-[10px] text-muted-foreground">
                      05/06/2026, 14:30 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Escrow Notice */}
            <div className="mt-3 flex items-center gap-2 rounded-2xl border border-gold/30 bg-gold/5 p-3">
              <Shield className="h-4 w-4 shrink-0 text-gold" />
              <p className="text-[11px] leading-relaxed text-muted-foreground">
                Your funds remain securely protected in escrow until you confirm
                successful delivery or the review period expires.
              </p>
            </div>

            {/* Buyer Actions */}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <button className="flex h-10 items-center justify-center gap-1.5 rounded-2xl border border-border bg-surface text-xs font-semibold">
                <MessageCircle className="h-3.5 w-3.5" /> Contact Seller
              </button>
              <Link
                to="/app/disputes"
                className="flex h-10 items-center justify-center gap-1.5 rounded-2xl border border-destructive/30 bg-destructive/10 text-xs font-semibold text-destructive"
              >
                <AlertCircle className="h-3.5 w-3.5" /> Report Issue
              </Link>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
