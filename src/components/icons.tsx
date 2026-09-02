import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & { size?: number };

function base({ size = 24, className, ...props }: IconProps) {
  return {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    className,
    "aria-hidden": true as const,
    ...props,
  };
}

export function IconMenu(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconClose(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function IconArrow(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPhone(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6.5 3.5h3l1.2 3.2-1.8 1.1a12.5 12.5 0 006.3 6.3l1.1-1.8 3.2 1.2v3A1.5 1.5 0 0018 17.8 15.3 15.3 0 016.2 6 1.5 1.5 0 016.5 3.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconWhatsApp(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path
        fill="currentColor"
        d="M19.05 4.91A9.82 9.82 0 0012.04 2C6.58 2 2.14 6.41 2.14 11.85c0 1.74.46 3.43 1.32 4.92L2 22l5.39-1.41a9.9 9.9 0 004.64 1.18h.01c5.46 0 9.9-4.41 9.9-9.85 0-2.63-1.03-5.1-2.89-6.99zM12.04 20.14h-.01a8.2 8.2 0 01-4.18-1.15l-.3-.18-3.2.84.86-3.11-.2-.32a8.18 8.18 0 01-1.26-4.37c0-4.54 3.72-8.24 8.29-8.24 2.21 0 4.29.86 5.85 2.42a8.18 8.18 0 012.44 5.83c0 4.54-3.73 8.24-8.29 8.24zm4.54-6.16c-.25-.12-1.47-.72-1.7-.81-.23-.08-.4-.12-.56.12-.17.25-.64.8-.79.97-.14.17-.3.19-.55.06-.25-.12-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42h-.48c-.17 0-.43.06-.66.31-.22.25-.87.85-.87 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74 1.64.71 2.07.62 2.45.58.38-.04 1.47-.6 1.67-1.18.21-.58.21-1.07.14-1.18-.06-.1-.23-.17-.48-.29z"
      />
    </svg>
  );
}

export function IconMail(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="5.5" width="17" height="13" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M4 7l8 6 8-6" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPin(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s7-5.4 7-11a7 7 0 10-14 0c0 5.6 7 11 7 11z" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconStar(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path fill="currentColor" d="M12 3.6l2.4 4.86 5.36.78-3.88 3.78.92 5.34L12 16.84 7.2 18.36l.92-5.34L4.24 9.24l5.36-.78L12 3.6z" />
    </svg>
  );
}

export function IconCheck(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12.5l4.2 4.2L19 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconChevron(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function IconPractice(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="5" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 17v2h8v-2M9 9h6M9 12h4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconProjects(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 8h16v10H4zM8 8V6h8v2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 12h8M8 15h5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconCurriculum(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 6h14v12H5z" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10h8M8 13h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconMentor(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M5.5 19c1.2-3 3.5-4.5 6.5-4.5S16.3 16 17.5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconAi(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 4v3M12 17v3M4 12h3M17 12h3M7 7l2 2M15 15l2 2M17 7l-2 2M9 15l-2 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="12" r="2.4" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

export function IconCareer(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 17V9h16v8a2 2 0 01-2 2H6a2 2 0 01-2-2zM9 9V7h6v2" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconCertificate(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M9 20l3-2 3 2v-6H9v6z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
    </svg>
  );
}

export function IconFlexible(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.6" />
      <path d="M12 8v4l3 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function IconFacebook(props: IconProps) {
  return (
    <svg {...base(props)} viewBox="0 0 24 24">
      <path fill="currentColor" d="M14.5 8.5h2.5V5h-2.5C12.6 5 11 6.8 11 9.2V11H8.5v3.5H11V22h3.5v-7.5h2.4l.6-3.5H14.5V9.4c0-.5.3-.9 1-.9z" />
    </svg>
  );
}

export function IconInstagram(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3.4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="16.6" cy="7.4" r="0.9" fill="currentColor" />
    </svg>
  );
}

export function IconYouTube(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="7" width="18" height="11" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="M11 10.2v5.6l5-2.8-5-2.8z" fill="currentColor" />
    </svg>
  );
}

export function IconLinkedIn(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10.5V16M8 8h.01M12 16v-3.2c0-1.3.7-2 1.8-2 1.1 0 1.7.7 1.7 2V16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export const featureIcons = {
  practice: IconPractice,
  projects: IconProjects,
  curriculum: IconCurriculum,
  mentor: IconMentor,
  ai: IconAi,
  career: IconCareer,
  certificate: IconCertificate,
  flexible: IconFlexible,
};
