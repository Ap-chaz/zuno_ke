import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MessageCircle, AlertTriangle, Mail, ChevronDown, Search } from "lucide-react";
import { TopBar } from "@/components/zuno/TopBar";
import { PhoneFrame } from "@/components/zuno/PhoneFrame";

export const Route = createFileRoute("/help")({
  head: () => ({ meta: [{ title: "Help & Support — ZUNO" }] }),
  component: Help,
});

const faqs = [
  { q: "How does ZUNO escrow work?", a: "You pay into ZUNO, we hold the funds, the seller delivers, then you confirm and the seller is paid. Funds are never released early." },
  { q: "What if my item never arrives?", a: "Open a dispute within the protection window. ZUNO investigates within 24 hours and refunds you in full if the seller fails to deliver." },
  { q: "How are sellers verified?", a: "Every seller goes through national ID verification, biometric selfie match, and business document checks before going live." },
  { q: "What are the fees?", a: "ZUNO charges a small escrow fee (typically 1.5%) on the buyer side. Sellers pay no fees on payouts." },
  { q: "Is my money safe?", a: "Funds are held in licensed partner banks under regulated custody with full audit trails." },
];

function Help() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <PhoneFrame>
      <TopBar title="Help & Support" back="/app/account" />
      <div className="flex-1 overflow-y-auto px-5 pt-4 pb-8">
        <label className="flex h-12 items-center gap-3 rounded-2xl border border-border/60 bg-input px-4">
          <Search className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Search help articles" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </label>

        <div className="mt-4 grid grid-cols-3 gap-3">
          <Quick icon={MessageCircle} label="Chat" gold />
          <Quick icon={Mail} label="Email" />
          <Quick icon={AlertTriangle} label="Report" />
        </div>

        <p className="mt-6 px-1 text-xs font-bold tracking-[0.18em] text-muted-foreground">FREQUENTLY ASKED</p>
        <ul className="mt-3 space-y-2">
          {faqs.map((f, i) => (
            <li key={i} className="overflow-hidden rounded-2xl border border-border/40 bg-surface">
              <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left">
                <span className="text-sm font-semibold">{f.q}</span>
                <ChevronDown className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <p className="border-t border-border/40 px-4 py-3 text-xs leading-relaxed text-muted-foreground">{f.a}</p>
              )}
            </li>
          ))}
        </ul>

        <div className="mt-6 rounded-2xl border border-gold/30 bg-gold/5 p-4 text-center">
          <p className="text-sm font-semibold">Still need help?</p>
          <p className="mt-1 text-xs text-muted-foreground">Our team typically replies in under 5 minutes.</p>
          <button className="mt-3 flex h-11 w-full items-center justify-center gap-2 rounded-2xl bg-gradient-gold text-sm font-semibold text-gold-foreground">
            <MessageCircle className="h-4 w-4" /> Start a chat
          </button>
        </div>
      </div>
    </PhoneFrame>
  );
}

function Quick({ icon: Icon, label, gold }: { icon: typeof MessageCircle; label: string; gold?: boolean }) {
  return (
    <button className={`flex flex-col items-center gap-2 rounded-2xl border p-4 ${gold ? "border-gold/40 bg-gold/10" : "border-border/40 bg-surface"}`}>
      <Icon className={`h-5 w-5 ${gold ? "text-gold" : "text-foreground"}`} />
      <span className="text-xs font-semibold">{label}</span>
    </button>
  );
}
