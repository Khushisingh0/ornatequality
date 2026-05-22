import React from "react";

const stroke = {
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconIndustryExpert(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <circle cx="9" cy="8.5" r="3" {...stroke} />
      <path d="M3.5 19.5v-.5c0-2.2 2.2-4 5.5-4s5.5 1.8 5.5 4v.5" {...stroke} />
      <path d="M16.5 7.5l1.2 1.2M18.8 5.2l.9.9M16.5 5.2l1.2-1.2" {...stroke} />
      <path d="M17.8 10.8h2.2M19.9 8.7v4.2" {...stroke} />
    </svg>
  );
}

export function IconClientAssist(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path d="M4 13.5c0-3.6 3.1-6.5 7-6.5h1.2" {...stroke} />
      <path d="M12.2 7a4.5 4.5 0 0 1 4.5 4.5V13" {...stroke} />
      <path d="M8.5 16.5 6 19l2.5-.8L9.8 19l1.3-2.5" {...stroke} />
      <path d="M17.5 16.5 20 19l-2.5-.8L15.2 19l-1.3-2.5" {...stroke} />
    </svg>
  );
}

export function IconEndToEnd(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path d="M7.5 4.5h9l3 3v12a1 1 0 0 1-1 1H7.5a1 1 0 0 1-1-1V5.5a1 1 0 0 1 1-1Z" {...stroke} />
      <path d="M16.5 4.5v3h3" {...stroke} />
      <path d="M9.5 12h7M9.5 15.5h7M9.5 19h5" {...stroke} />
    </svg>
  );
}

export function IconPanGlobal(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" {...stroke} />
      <ellipse cx="12" cy="12" rx="3.2" ry="8" {...stroke} />
      <path d="M4 12h16M5.5 8h13M5.5 16h13" {...stroke} />
    </svg>
  );
}

export function IconFastApproval(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="8" {...stroke} />
      <path d="M12 7v5.2l3.2 2" {...stroke} />
      <path d="M17.5 5.5 19 4l1.5 1.5" {...stroke} opacity="0.85" />
    </svg>
  );
}

export function IconTrustedShield(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" {...props}>
      <path d="M12 3.5 5.5 6v5.8c0 4.6 2.8 8.8 6.5 10.2 3.7-1.4 6.5-5.6 6.5-10.2V6L12 3.5Z" {...stroke} />
      <path d="M10.2 12.2 11.8 13.8 15 10.6" {...stroke} strokeWidth="1.8" />
    </svg>
  );
}

export function IconShieldBanner(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" width="28" height="28" aria-hidden="true" {...props}>
      <path
        d="M12 2.5 4.5 5.5v5.4c0 5.1 3.2 9.8 7.5 11.1 4.3-1.3 7.5-6 7.5-11.1V5.5L12 2.5Z"
        fill="currentColor"
        opacity="0.12"
      />
      <path d="M12 2.5 4.5 5.5v5.4c0 5.1 3.2 9.8 7.5 11.1 4.3-1.3 7.5-6 7.5-11.1V5.5L12 2.5Z" {...stroke} strokeWidth="1.5" />
      <path d="M10.2 12.2 11.8 13.8 15 10.6" {...stroke} strokeWidth="1.8" />
    </svg>
  );
}
