import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { TopBar } from "@/components/zuno/TopBar";
import { PhoneFrame } from "@/components/zuno/PhoneFrame";
import { getRole } from "@/lib/zuno-role";

export const Route = createFileRoute("/auth/verify")({
  head: () => ({ meta: [{ title: "Verify — ZUNO" }] }),
  component: Verify,
});

function Verify() {
  const navigate = useNavigate();
  const handleVerify = () => {
    const role = getRole();
    navigate({ to: role === "seller" ? "/seller" : "/app" });
  };

  return (
    <PhoneFrame>
      <TopBar title="Verify" back="/auth/role" />
      <div className="flex flex-1 flex-col px-6 pt-8">
        <p className="text-xs font-bold tracking-[0.2em] text-accent">OTP VERIFICATION</p>
        <p className="mt-4 text-sm text-muted-foreground">Enter the 6-digit code sent to</p>
        <p className="mt-1 text-base font-semibold">+254 714 637 437</p>

        <div className="mt-8 grid grid-cols-6 gap-2">
          {["1", "", "", "", "", ""].map((v, i) => (
            <div
              key={i}
              className={`grid h-14 place-items-center rounded-2xl border text-xl font-semibold ${
                v ? "border-gold bg-gold/10 text-gold" : "border-border bg-surface text-muted-foreground"
              }`}
            >
              {v || "_"}
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Resend code in <span className="font-semibold text-gold">00:45</span>
        </p>

        <button
          onClick={handleVerify}
          className="mt-auto mb-8 flex h-14 items-center justify-center rounded-2xl bg-gradient-gold text-base font-semibold text-gold-foreground shadow-gold"
        >
          Verify
        </button>
      </div>
    </PhoneFrame>
  );
}

