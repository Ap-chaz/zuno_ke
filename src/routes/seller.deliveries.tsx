import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Phone, Truck, CheckCircle2, Package } from "lucide-react";
import { TopBar } from "@/components/zuno/TopBar";

export const Route = createFileRoute("/seller/deliveries")({
  head: () => ({ meta: [{ title: "Delivery Management — ZUNO" }] }),
  component: Deliveries,
});

const tabs = ["Waiting", "Active", "Completed"] as const;

const orders = {
  Waiting: [
    { item: "iPhone 17 Pro Max", buyer: "Alvan Mwangi", id: "ZUNOAXFVLO4Y8Y" },
    { item: "AirPods Pro 3", buyer: "Brenda Kerubo", id: "ZUNO22HJ8K9L0M" },
  ],
  Active: [
    { item: "MacBook Air M4", buyer: "James Otieno", id: "ZUNO9KLP2M3N4Q" },
  ],
  Completed: [
    { item: "Sony WH-1000XM6", buyer: "Mary Wanjiru", id: "ZUNO7HG6FD5SA1" },
    { item: "Apple Watch Ultra", buyer: "Peter Kim", id: "ZUNO5UI6OP7AS8" },
  ],
} as const;

function Deliveries() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("Waiting");

  return (
    <div className="flex flex-1 flex-col overflow-y-auto">
      <TopBar title="Delivery Management" />

      <div className="mx-5 mt-4 grid grid-cols-3 gap-1 rounded-2xl border border-border/40 bg-surface p-1">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`rounded-xl px-3 py-2 text-xs font-semibold transition-colors ${
              tab === t ? "bg-gradient-gold text-gold-foreground" : "text-muted-foreground"
            }`}
          >
            {t} <span className="opacity-60">({orders[t].length})</span>
          </button>
        ))}
      </div>

      <ul className="mt-4 space-y-3 px-5 pb-8">
        {orders[tab].map((o) => (
          <li key={o.id} className="rounded-3xl border border-border/40 bg-surface p-4">
            <div className="flex items-start gap-3">
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-surface-2 text-xl">📦</span>
              <div className="min-w-0 flex-1">
                <p className="truncate font-semibold">{o.item}</p>
                <p className="truncate text-xs text-muted-foreground">Buyer: {o.buyer}</p>
                <p className="mt-0.5 truncate font-mono text-[10px] text-muted-foreground">#{o.id}</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-3 gap-2">
              <Action icon={Phone} label="Call" />
              {tab === "Waiting" && <Action icon={Truck} label="Mark shipped" gold />}
              {tab === "Active" && <Action icon={CheckCircle2} label="Delivered" gold />}
              {tab === "Completed" && <Action icon={Package} label="Receipt" gold />}
              <Action icon={Package} label="Details" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Action({ icon: Icon, label, gold }: { icon: typeof Phone; label: string; gold?: boolean }) {
  return (
    <button className={`flex h-10 items-center justify-center gap-1.5 rounded-xl text-xs font-semibold ${
      gold ? "bg-gradient-gold text-gold-foreground" : "border border-border bg-surface-2 text-foreground"
    }`}>
      <Icon className="h-3.5 w-3.5" /> {label}
    </button>
  );
}
