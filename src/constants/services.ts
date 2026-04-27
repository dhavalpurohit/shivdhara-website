import { TrendingUp, PieChart, Landmark, ShieldCheck, Send } from "lucide-react";

export const SERVICES = [
  {
    id: "equity",
    title: "Equity Trading",
    description: "Access Indian stock markets with our advanced trading platforms and expert research insights.",
    icon: TrendingUp,
    href: "/services/equity-trading",
  },
  {
    id: "mutual-fund",
    title: "Mutual Funds",
    description: "Diversify your portfolio with curated mutual fund schemes tailored to your risk appetite.",
    icon: PieChart,
    href: "/services/mutual-funds",
  },
  {
    id: "bonds",
    title: "Bonds & FDs",
    description: "Secure your future with stable returns through government bonds, corporate FDs, and more.",
    icon: Landmark,
    href: "/services/bonds-fixed-deposits",
  },
  {
    id: "pms",
    title: "Portfolio Management",
    description: "Professional management of your wealth with personalized investment strategies.",
    icon: ShieldCheck,
    href: "/services/portfolio-management-services",
  },
  {
    id: "ipo",
    title: "IPO Investment",
    description: "Invest early in promising companies with expert guidance and a seamless application process.",
    icon: Send,
    href: "/services/ipo-investment",
  },
];
