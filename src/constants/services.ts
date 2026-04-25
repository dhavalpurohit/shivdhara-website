import { TrendingUp, PieChart, Landmark, ShieldCheck } from "lucide-react";

export const SERVICES = [
  {
    id: "equity",
    title: "Equity Trading",
    description: "Access Indian stock markets with our advanced trading platforms and expert research insights.",
    icon: TrendingUp,
    href: "/services/equity",
  },
  {
    id: "mutual-fund",
    title: "Mutual Funds",
    description: "Diversify your portfolio with curated mutual fund schemes tailored to your risk appetite.",
    icon: PieChart,
    href: "/services/mutual-fund",
  },
  {
    id: "bonds",
    title: "Bonds & FDs",
    description: "Secure your future with stable returns through government bonds, corporate FDs, and more.",
    icon: Landmark,
    href: "/services/bonds",
  },
  {
    id: "pms",
    title: "Portfolio Management",
    description: "Professional management of your wealth with personalized investment strategies.",
    icon: ShieldCheck,
    href: "/services/pms",
  },
];
