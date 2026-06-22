import { createFileRoute } from "@tanstack/react-router";
import { CreditCard, Truck, Shield, BadgeCheck, AlertTriangle, Gift } from "lucide-react";
import { TopBar } from "@/components/zuno/TopBar";

export const Route = createFileRoute("/app/notifications")({
  head: () => ({ meta: [{ title: "Notifications — ZUNO" }] }),
  component: Notifications,
});

const groups = [
  {
    title: "Today",
    items: [
      { icon: CreditCard, iconClass: "text-success bg-success/15", title: "Payment received", body: "KES 191,311 from Gadget World", time: "14:23" },
      { icon: Truck, iconClass: "text-accent bg-accent/15", title: "Out for delivery", body: "iPhone 17 Pro Max · arrives tomorrow", time: "12:08" },
    ],
  },
  {
    title: "This week",
    items: [
      { icon: Shield, iconClass: "text-gold bg-gold/15", title: "Funds locked safely", body: "ZUNO escrow holding KES 145,000", time: "Tue" },
      { icon: BadgeCheck, iconClass: "text-gold bg-gold/15", title: "Identity verified", body: "Trust score increased to 850", time: "Mon" },
      { icon: AlertTriangle, iconClass: "text-destructive bg-destructive/15", title: "New login from Nairobi", body: "Tap if this wasn't you", time: "Sun" },
      { icon: Gift, iconClass: "text-accent bg-accent/15", title: "Referral reward earned", body: "+KES 250 wallet bonus", time: "Sun" },
    ],
  },
];

function Notifications() {
  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <TopBar title="Notifications" back="/app" />
      <div className="px-5 pt-4 pb-8">
        {groups.map((g) => (
          <div key={g.title} className="mt-4 first:mt-0">
            <p className="px-1 text-xs font-bold tracking-[0.18em] text-muted-foreground">{g.title.toUpperCase()}</p>
            <ul className="mt-2 space-y-2">
              {g.items.map((n, i) => (
                <li key={i} className="grid grid-cols-[auto_1fr_auto] items-start gap-3 rounded-2xl border border-border/40 bg-surface p-4">
                  <span className={`grid h-10 w-10 place-items-center rounded-2xl ${n.iconClass}`}><n.icon className="h-4 w-4" /></span>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold">{n.title}</p>
                    <p className="truncate text-xs text-muted-foreground">{n.body}</p>
                  </div>
                  <span className="shrink-0 text-[10px] text-muted-foreground">{n.time}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
