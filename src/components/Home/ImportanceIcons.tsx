import React from "react";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 2.2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

/** Certificate with check — Legal Compliance */
export function IconLegalCompliance(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" {...props}>
      <path
        d="M9 6h14l2 3v17H7V9l2-3Z"
        {...stroke}
      />
      <path d="M11 6v3h10V6M12 14h8M12 18h6" {...stroke} />
      <circle cx="21" cy="21" r="5" fill="rgba(15,95,168,0.12)" stroke="currentColor" strokeWidth="2" />
      <path d="M19 21l1.5 1.5L23 19" {...stroke} strokeWidth="2" />
    </svg>
  );
}

/** Rupee / fine shield — Avoid Penalties */
export function IconAvoidPenalties(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" {...props}>
      <path d="M16 5 7 9v6c0 6.2 4 11.4 9 13 5-1.6 9-6.8 9-13V9l-9-4Z" {...stroke} />
      <path d="M16 11v6M14 13h4" {...stroke} />
      <circle cx="16" cy="21" r="1.2" fill="currentColor" />
    </svg>
  );
}

/** People / trust — Market Trust */
export function IconMarketTrust(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="3.5" {...stroke} />
      <path d="M6 24v-1.5c0-2.8 2.5-5 6-5s6 2.2 6 5V24" {...stroke} />
      <circle cx="22" cy="13" r="2.8" {...stroke} />
      <path d="M18 24v-1.2c0-2 1.8-3.6 4-3.6s4 1.6 4 3.6V24" {...stroke} />
    </svg>
  );
}

/** Package approved — Product Approval */
export function IconProductApproval(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" {...props}>
      <path d="M8 12 16 7l8 5v10l-8 5-8-5V12Z" {...stroke} />
      <path d="M16 17v10M8 12l8 5 8-5" {...stroke} />
      <path d="M20 20l2 2 4-4" {...stroke} strokeWidth="2.4" />
    </svg>
  );
}

/** Growth chart — Business Growth */
export function IconBusinessGrowth(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 32 32" width="28" height="28" aria-hidden="true" {...props}>
      <path d="M6 26V8M6 26h20" {...stroke} />
      <path d="M10 20v6M15 16v10M20 12v14M25 8v18" {...stroke} strokeWidth="2.4" />
      <path d="M22 10 25 8l3 3" {...stroke} strokeWidth="2" />
    </svg>
  );
}
