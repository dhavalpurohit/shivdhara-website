"use client";

import React, { useState, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import {
  Building2,
  Calendar,
  Tag,
  ArrowRight,
  Loader2,
  AlertCircle,
  TrendingUp,
  PieChart,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface IPOData {
  symbol: string;
  companyName: string;
  issueStartDate: string;
  issueEndDate: string;
  status: string;
  series: string;
  noOfSharesOffered: string;
  noOfTime: string; // Subscription multiplier
}

// Fallback placeholder data matching the new structure
const FALLBACK_IPOS: IPOData[] = [
  {
    symbol: "AMBAAUTO",
    companyName: "Amba Auto Sales and Services",
    issueStartDate: "27-Apr-2026",
    issueEndDate: "29-Apr-2026",
    status: "Active",
    series: "SME",
    noOfSharesOffered: "4824000",
    noOfTime: "0.14",
  },
  {
    symbol: "ADISOFT",
    companyName: "Adisoft Technologies Limited",
    issueStartDate: "23-Apr-2026",
    issueEndDate: "27-Apr-2026",
    status: "Active",
    series: "SME",
    noOfSharesOffered: "3082400",
    noOfTime: "72.09",
  },
  {
    symbol: "GREENNRG",
    companyName: "Green Energy Power Corp",
    issueStartDate: "02-May-2026",
    issueEndDate: "05-May-2026",
    status: "Upcoming",
    series: "EQ",
    noOfSharesOffered: "15500000",
    noOfTime: "0.00",
  },
];

// Helper to format large numbers
const formatNumber = (numStr: string) => {
  const num = parseInt(numStr, 10);
  if (isNaN(num)) return numStr;
  if (num >= 10000000) return (num / 10000000).toFixed(2) + " Cr";
  if (num >= 100000) return (num / 100000).toFixed(2) + " Lakh";
  return new Intl.NumberFormat("en-IN").format(num);
};

export const UpcomingIPO = () => {
  const [ipos, setIpos] = useState<IPOData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchIPOs = async () => {
      try {
        const response = await fetch("/api/ipo");
        const data = await response.json();

        if (data.error) {
          throw new Error(data.error);
        }

        let parsedIpos: any[] = [];
        if (Array.isArray(data)) {
          parsedIpos = data;
        } else if (data && Array.isArray(data.data)) {
          parsedIpos = data.data;
        }

        if (parsedIpos.length > 0) {
          const formatted = parsedIpos.map((item: any, index: number) => ({
            symbol: item.symbol || `IPO-${index}`,
            companyName: item.companyName || "Unknown Company",
            issueStartDate: item.issueStartDate || "TBA",
            issueEndDate: item.issueEndDate || "TBA",
            status: item.status || "Upcoming",
            series: item.series || "EQ",
            noOfSharesOffered: item.noOfSharesOffered || "0",
            noOfTime: item.noOfTime || "0.00",
          }));
          setIpos(formatted);
        } else {
          throw new Error("No IPOs found in response");
        }
      } catch (err) {
        console.error("Failed to fetch live IPO data from /api/ipo:", err);
        setError(true);
        setIpos(FALLBACK_IPOS); // Fallback to placeholder data
      } finally {
        setLoading(false);
      }
    };

    fetchIPOs();
  }, []);

  // Duplicate items for seamless marquee loop if there are items
  const duplicatedIpos =
    ipos.length > 0 ? [...ipos, ...ipos, ...ipos, ...ipos] : [];

  return (
    <section className="py-24 bg-accent/20 overflow-hidden">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 relative z-10">
          <div className="space-y-4 max-w-2xl">
            <h2 className="text-sm font-bold text-secondary uppercase tracking-widest">
              Market Watch
            </h2>
            <h3 className="text-4xl font-bold text-primary">
              Live IPO Highlights
            </h3>
            <p className="text-muted-foreground text-lg">
              Track the latest active and upcoming initial public offerings
              directly from the NSE data feed.
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-secondary font-bold hover:text-primary transition-colors whitespace-nowrap"
          >
            Get Alerts for New IPOs
            <ArrowRight size={20} />
          </Link>
        </div>

        {error && !loading && (
          <div className="mb-8 p-4 bg-yellow-50 border border-yellow-200 rounded-xl flex items-start gap-3 text-yellow-800 relative z-10">
            <AlertCircle className="w-5 h-5 shrink-0 mt-0.5" />
            <p className="text-sm">
              <strong>Notice:</strong> We are currently showing placeholder data
              because the live market data could not be fetched. Please try
              again later.
            </p>
          </div>
        )}

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 min-h-[300px]">
            <Loader2 className="w-10 h-10 text-secondary animate-spin mb-4" />
            <p className="text-muted-foreground font-medium animate-pulse">
              Fetching live IPO calendar...
            </p>
          </div>
        ) : (
          <div className="relative w-full -mx-4 px-4 sm:-mx-8 sm:px-8">
            <style jsx>{`
              @keyframes marquee {
                0% {
                  transform: translateX(0%);
                }
                100% {
                  transform: translateX(-50%);
                }
              }
              .animate-marquee {
                display: flex;
                width: max-content;
                animation: marquee 40s linear infinite;
              }
              .animate-marquee:hover {
                animation-play-state: paused;
              }
            `}</style>

            <div className="animate-marquee gap-8 pb-8 pt-4">
              {duplicatedIpos.map((ipo, index) => {
                const isSubscribed = parseFloat(ipo.noOfTime) >= 1;
                const isHighlySubscribed = parseFloat(ipo.noOfTime) >= 10;

                return (
                  <div
                    key={`${ipo.symbol}-${index}`}
                    className="bg-white rounded-3xl p-8 shadow-sm border border-border hover:shadow-xl hover:border-secondary/50 transition-all flex flex-col w-[380px] shrink-0"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-accent/50 rounded-xl flex items-center justify-center text-primary transition-all shrink-0">
                          <Building2 className="w-6 h-6" />
                        </div>
                        <div className="bg-primary/5 px-3 py-1 rounded-full border border-primary/10">
                          <span className="text-xs font-bold text-primary">
                            {ipo.series}
                          </span>
                        </div>
                      </div>
                      <span
                        className={cn(
                          "px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shrink-0",
                          ipo.status === "Active"
                            ? "bg-green-100 text-green-700"
                            : ipo.status === "Upcoming"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-gray-100 text-gray-700",
                        )}
                      >
                        {ipo.status}
                      </span>
                    </div>

                    <h4
                      className="text-xl font-bold text-primary mb-2 truncate"
                      title={ipo.companyName}
                    >
                      {ipo.companyName}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-6 flex items-center gap-1 font-mono bg-accent/30 inline-block px-2 py-0.5 rounded">
                      {ipo.symbol}
                    </p>

                    <div className="space-y-4 mb-8 flex-grow">
                      <div className="flex justify-between text-sm items-center pb-3 border-b border-border/50">
                        <span className="flex items-center gap-2 text-muted-foreground shrink-0">
                          <Calendar className="w-4 h-4" /> Open - Close
                        </span>
                        <span className="font-semibold text-primary text-right pl-2 text-xs">
                          {ipo.issueStartDate} <br /> to {ipo.issueEndDate}
                        </span>
                      </div>

                      <div className="flex justify-between text-sm items-center pb-3 border-b border-border/50">
                        <span className="flex items-center gap-2 text-muted-foreground shrink-0">
                          <PieChart className="w-4 h-4" /> Issue Size
                        </span>
                        <span className="font-semibold text-primary truncate pl-2">
                          {formatNumber(ipo.noOfSharesOffered)} shares
                        </span>
                      </div>

                      <div className="flex justify-between text-sm items-center pt-1">
                        <span className="flex items-center gap-2 text-muted-foreground shrink-0">
                          <TrendingUp className="w-4 h-4" /> Subscription
                        </span>
                        <span
                          className={cn(
                            "font-bold px-2 py-1 rounded",
                            isHighlySubscribed
                              ? "bg-green-100 text-green-700"
                              : isSubscribed
                                ? "bg-blue-100 text-blue-700"
                                : "bg-gray-100 text-gray-700",
                          )}
                        >
                          {ipo.noOfTime}x
                        </span>
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="block w-full py-3 text-center rounded-xl bg-accent/50 text-primary font-bold hover:bg-secondary hover:text-white transition-all mt-auto shadow-sm"
                    >
                      Apply for IPO
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </Container>
    </section>
  );
};
