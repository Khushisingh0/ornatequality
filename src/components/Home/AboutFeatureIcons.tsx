import React from "react";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.35,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconExpertTeam(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...props}>
      <circle cx="9.5" cy="8.5" r="3.2" {...stroke} />
      <path d="M3.8 20.5v-.6c0-2.4 2.4-4.3 5.7-4.3s5.7 1.9 5.7 4.3v.6" {...stroke} />
      <circle cx="17.2" cy="8" r="2.4" {...stroke} />
      <path d="M17.2 6.2v1.2M17.2 8.8v1.2M16 8h2.4M18.8 8h1.2" {...stroke} />
    </svg>
  );
}

export function IconEndToEnd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...props}>
      <path d="M7 4.5h10l3 3v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-14a1 1 0 0 1 1-1Z" {...stroke} />
      <path d="M17 4.5v3h3" {...stroke} />
      <path d="M9.5 11.5h7M9.5 14.5h7M9.5 17.5h5" {...stroke} />
      <path d="M12.5 8.2l1.1 1.1 2.4-2.4" {...stroke} />
    </svg>
  );
}

export function IconPanIndia(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...props}>
      <path d="M12 3.5l7 4v9l-7 4-7-4v-9l7-4Z" {...stroke} />
      <path
        d="M12 8.2c-1.4 0-2.5 1.4-2.5 3.1 0 1.8 1.1 3.1 2.5 3.1s2.5-1.3 2.5-3.1c0-1.7-1.1-3.1-2.5-3.1Z"
        {...stroke}
      />
      <path d="M12 14.4V17" {...stroke} />
    </svg>
  );
}

export function IconGlobalStandards(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8.2" {...stroke} />
      <ellipse cx="12" cy="12" rx="3.2" ry="8.2" {...stroke} />
      <path d="M3.8 12h16.4" {...stroke} />
      <path d="M5.2 8.2h13.6M5.2 15.8h13.6" {...stroke} />
    </svg>
  );
}
