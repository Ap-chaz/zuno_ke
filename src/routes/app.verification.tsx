import { createFileRoute } from "@tanstack/react-router";
import { BadgeCheck, Camera, FileText, Building2, ChevronRight, Clock } from "lucide-react";
import { TopBar } from "@/components/zuno/TopBar";

export const Route = createFileRoute("/app/verification")({
  head: () => ({ meta: [{ title: "Verification — ZUNO" }] }),
  component: Verification,
});

function Verification() {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <TopBar title="Verification Center" back="/app/account" />

      <div className="px-5 pt-4 pb-8">
        <div className="rounded-3xl border border-border/40 bg-gradient-card p-5 text-center shadow-card">
          <div className="mx-auto grid h-20 w-20 place-items-center rounded-3xl bg-success/15">
            <BadgeCheck className="h-10 w-10 text-success" />
          </div>
          <h1 className="mt-4 text-xl font-bold">Identity verified</h1>
          <p className="mt-1 text-sm text-muted-foreground">Trust score boosted to 850/1000</p>
          <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-muted">
            <div className="h-full w-[85%] bg-gradient-gold" />
          </div>
        </div>

        <p className="mt-6 px-1 text-xs font-bold tracking-[0.18em] text-muted-foreground">VERIFICATION STEPS</p>
        <ul className="mt-3 space-y-3">
          <VRow icon={FileText} title="National ID" status="done" desc="Verified 05/06/2026" />
          <VRow icon={Camera} title="Selfie match" status="done" desc="Biometric match 98%" />
          <VRow icon={Building2} title="Business verification" status="pending" desc="In review · usually <24h" />
        </ul>

        <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-4">
          <p className="text-xs font-bold tracking-wider text-gold">UNLOCK WITH FULL VERIFICATION</p>
          <ul className="mt-2 space-y-1.5 text-xs text-muted-foreground">
            <li>• Higher transaction limits</li>
            <li>• Trust badge on your seller profile</li>
            <li>• Faster dispute resolution</li>
            <li>• Priority customer support</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

function VRow({ icon: Icon, title, status, desc }: { icon: typeof FileText; title: string; status: "done" | "pending"; desc: string }) {
  return (
    <li className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-2xl border border-border/40 bg-surface p-4">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-surface-2 text-gold"><Icon className="h-4 w-4" /></span>
      <div className="min-w-0">
        <p className="truncate text-sm font-semibold">{title}</p>
        <p className="truncate text-xs text-muted-foreground">{desc}</p>
      </div>
      {status === "done" ? (
        <BadgeCheck className="h-5 w-5 text-success" />
      ) : (
        <span className="flex items-center gap-1 rounded-full border border-gold/30 bg-gold/10 px-2 py-0.5 text-[10px] font-semibold text-gold">
          <Clock className="h-3 w-3" /> Pending
        </span>
      )}
    </li>
  );
}
