import { createFileRoute, Link } from "@tanstack/react-router";
import { AlertTriangle, Upload, MessageCircle, FileText } from "lucide-react";
import { TopBar } from "@/components/zuno/TopBar";

export const Route = createFileRoute("/app/disputes")({
  head: () => ({ meta: [{ title: "Dispute Center — ZUNO" }] }),
  component: Disputes,
});

function Disputes() {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <TopBar title="Dispute Center" back="/app" />

      <div className="px-5 pt-4 pb-8">
        <div className="rounded-3xl border border-destructive/30 bg-destructive/10 p-5">
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center rounded-2xl bg-destructive/20 text-destructive"><AlertTriangle className="h-5 w-5" /></span>
            <div>
              <p className="font-semibold">We're here to help</p>
              <p className="text-xs text-muted-foreground">Most disputes resolve in under 24 hours.</p>
            </div>
          </div>
        </div>

        <p className="mt-6 text-xs font-bold tracking-[0.18em] text-muted-foreground">OPEN A DISPUTE</p>
        <div className="mt-3 space-y-3">
          <Card icon={FileText} title="Item not received" desc="Seller hasn't delivered within agreed time" />
          <Card icon={FileText} title="Item not as described" desc="Product differs from listing" />
          <Card icon={FileText} title="Damaged on arrival" desc="Item arrived broken or defective" />
          <Card icon={FileText} title="Other issue" desc="Tell us what happened" />
        </div>

        <p className="mt-6 text-xs font-bold tracking-[0.18em] text-muted-foreground">ACTIVE DISPUTE</p>
        <div className="mt-3 rounded-3xl border border-border/40 bg-surface p-4">
          <div className="flex items-center justify-between">
            <p className="font-mono text-xs font-bold">#ZUNO9DF8GH7JK6</p>
            <span className="rounded-full border border-destructive/30 bg-destructive/15 px-2 py-0.5 text-[10px] font-semibold text-destructive">In review</span>
          </div>
          <p className="mt-2 text-sm font-semibold">DJI Mini 5 Pro · Aerial KE</p>
          <p className="mt-1 text-xs text-muted-foreground">Reported 20/05/2026 · Evidence submitted</p>

          <ol className="mt-4 space-y-2 text-xs">
            <DStep done text="Dispute filed" />
            <DStep done text="Evidence uploaded" />
            <DStep active text="ZUNO reviewing case" />
            <DStep text="Resolution" />
          </ol>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button className="flex h-11 items-center justify-center gap-2 rounded-xl border border-border bg-surface-2 text-xs font-semibold">
              <Upload className="h-3.5 w-3.5" /> Add evidence
            </button>
            <Link to="/help" className="flex h-11 items-center justify-center gap-2 rounded-xl bg-gradient-gold text-xs font-semibold text-gold-foreground">
              <MessageCircle className="h-3.5 w-3.5" /> Chat support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Card({ icon: Icon, title, desc }: { icon: typeof FileText; title: string; desc: string }) {
  return (
    <button className="flex w-full items-center gap-3 rounded-2xl border border-border/40 bg-surface p-4 text-left">
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-surface-2 text-gold"><Icon className="h-4 w-4" /></span>
      <div className="flex-1">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-muted-foreground">{desc}</p>
      </div>
    </button>
  );
}

function DStep({ done, active, text }: { done?: boolean; active?: boolean; text: string }) {
  return (
    <li className="flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${done ? "bg-success" : active ? "bg-gold" : "bg-muted"}`} />
      <span className={done ? "text-foreground" : active ? "font-semibold text-gold" : "text-muted-foreground"}>{text}</span>
    </li>
  );
}
