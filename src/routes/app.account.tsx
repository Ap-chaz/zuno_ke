import { createFileRoute, Link } from "@tanstack/react-router";
import { ShieldCheck, ChevronRight, User, Bell, Lock, CreditCard, HelpCircle, Share2, Info, LogOut, BadgeCheck } from "lucide-react";
import { TopBar } from "@/components/zuno/TopBar";

export const Route = createFileRoute("/app/account")({
  head: () => ({ meta: [{ title: "Account — ZUNO" }] }),
  component: Account,
});

function Account() {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <TopBar title="Account" />

      <div className="mx-5 mt-4 rounded-3xl border border-border/40 bg-gradient-card p-5 shadow-card">
        <div className="flex items-center gap-4">
          <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-gold text-2xl font-bold text-gold-foreground">A</div>
          <div className="min-w-0 flex-1">
            <div className="flex items-center gap-1.5">
              <p className="truncate text-lg font-semibold">Alvan Mwangi</p>
              <BadgeCheck className="h-4 w-4 text-gold" />
            </div>
            <p className="truncate text-xs text-muted-foreground">+254 714 637 437</p>
          </div>
        </div>
        <div className="mt-4 grid grid-cols-3 gap-2 border-t border-border/40 pt-4 text-center">
          <div><p className="text-base font-bold">850</p><p className="text-[10px] text-muted-foreground">Trust score</p></div>
          <div><p className="text-base font-bold">14</p><p className="text-[10px] text-muted-foreground">Deals</p></div>
          <div><p className="text-base font-bold">4.9</p><p className="text-[10px] text-muted-foreground">Rating</p></div>
        </div>
      </div>

      <Link to="/app/verification" className="mx-5 mt-4 flex items-center gap-3 rounded-2xl border border-gold/30 bg-gold/5 p-4">
        <ShieldCheck className="h-6 w-6 text-gold" />
        <div className="flex-1">
          <p className="text-sm font-semibold">Verification Center</p>
          <p className="text-xs text-muted-foreground">Identity verified · Business pending</p>
        </div>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </Link>

      <Section title="Account">
        <Row icon={User} label="Profile settings" to="/app/settings" />
        <Row icon={CreditCard} label="Payment methods" to="/app/settings" />
        <Row icon={Lock} label="Security & privacy" to="/app/settings" />
        <Row icon={Bell} label="Notifications" to="/app/notifications" />
      </Section>

      <Section title="ZUNO">
        <Row icon={ShieldCheck} label="SafePay protection" to="/app/safepay" />
        <Row icon={Info} label="About ZUNO" to="/about" />
        <Row icon={Share2} label="Invite & earn" to="/share" />
        <Row icon={HelpCircle} label="Help & support" to="/help" />
      </Section>

      <div className="px-5 pb-8 pt-2">
        <Link to="/" className="flex h-12 items-center justify-center gap-2 rounded-2xl border border-destructive/30 bg-destructive/10 text-sm font-semibold text-destructive">
          <LogOut className="h-4 w-4" /> Log out
        </Link>
        <p className="mt-4 text-center text-[11px] text-muted-foreground">ZUNO v1.0.0 · Made with care</p>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mt-6 px-5">
      <p className="mb-2 px-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">{title}</p>
      <ul className="divide-y divide-border/40 overflow-hidden rounded-2xl border border-border/40 bg-surface">{children}</ul>
    </div>
  );
}

function Row({ icon: Icon, label, to }: { icon: typeof User; label: string; to: string }) {
  return (
    <li>
      <Link to={to} className="flex items-center gap-3 px-4 py-3.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-surface-2 text-gold"><Icon className="h-4 w-4" /></span>
        <span className="flex-1 text-sm font-medium">{label}</span>
        <ChevronRight className="h-4 w-4 text-muted-foreground" />
      </Link>
    </li>
  );
}
