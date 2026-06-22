import { createFileRoute, Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { TopBar } from "@/components/zuno/TopBar";
import { PhoneFrame } from "@/components/zuno/PhoneFrame";

export const Route = createFileRoute("/auth/forgot")({
  head: () => ({ meta: [{ title: "Reset password — ZUNO" }] }),
  component: Forgot,
});

function Forgot() {
  return (
    <PhoneFrame>
      <TopBar title="Forgot Password" back="/auth/login" />
      <div className="flex flex-1 flex-col px-6 pt-6">
        <p className="text-sm leading-relaxed text-muted-foreground">
          Enter your registered phone number or email and we'll send a reset code.
        </p>
        <label className="mt-6 flex h-14 items-center gap-3 rounded-2xl border border-border/60 bg-input px-4">
          <Mail className="h-4 w-4 text-muted-foreground" />
          <input placeholder="Phone Number or Email" className="flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground" />
        </label>
        <Link
          to="/auth/login"
          className="mt-auto mb-8 flex h-14 items-center justify-center rounded-2xl bg-gradient-gold text-base font-semibold text-gold-foreground shadow-gold"
        >
          Send Reset Code
        </Link>
      </div>
    </PhoneFrame>
  );
}
