export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    subLinks: [
      { name: "Equity Trading", href: "/services/equity" },
      { name: "Mutual Funds", href: "/services/mutual-fund" },
      { name: "Bonds & FDs", href: "/services/bonds" },
      { name: "Portfolio Management", href: "/services/pms" },
    ],
  },
  { name: "Downloads", href: "/downloads" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export const FOOTER_LINKS = {
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Careers", href: "/careers" },
    { name: "Contact Us", href: "/contact" },
  ],
  services: [
    { name: "Equity Trading", href: "/services/equity" },
    { name: "Mutual Funds", href: "/services/mutual-fund" },
    { name: "Bonds & FDs", href: "/services/bonds" },
    { name: "PMS", href: "/services/pms" },
  ],
  support: [
    { name: "Downloads", href: "/downloads" },
    { name: "FAQ", href: "/faq" },
    { name: "Grievance Redressal", href: "/support/grievance" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
};
