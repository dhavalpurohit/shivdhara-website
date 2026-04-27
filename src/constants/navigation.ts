export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  {
    name: "Services",
    href: "/services",
    subLinks: [
      { name: "Equity Trading", href: "/services/equity-trading" },
      { name: "Mutual Funds", href: "/services/mutual-funds" },
      { name: "Bonds & FDs", href: "/services/bonds-fixed-deposits" },
      { name: "Portfolio Management", href: "/services/portfolio-management-services" },
      { name: "IPO Investment", href: "/services/ipo-investment" },
    ],
  },
  // { name: "Downloads", href: "/downloads" },
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
    { name: "Equity Trading", href: "/services/equity-trading" },
    { name: "Mutual Funds", href: "/services/mutual-funds" },
    { name: "Bonds & FDs", href: "/services/bonds-fixed-deposits" },
    { name: "PMS", href: "/services/portfolio-management-services" },
    { name: "IPO Investment", href: "/services/ipo-investment" },
  ],
  support: [
    { name: "Downloads", href: "/downloads" },
    { name: "FAQ", href: "/faq" },
    { name: "Grievance Redressal", href: "/support/grievance" },
    { name: "Privacy Policy", href: "/privacy-policy" },
  ],
};
